import dotenv from 'dotenv';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {activeConfigPath} from '../config';

type EnvMap = Record<string, string>;

function normalizeValue(value: unknown) {
  if (value === undefined || value === null) {
    return '';
  }

  return String(value);
}

function parseEnvFileContents(contents: string): EnvMap {
  const parsed = dotenv.parse(contents);
  const result: EnvMap = {};

  for (const [key, value] of Object.entries(parsed)) {
    result[key] = value;
  }

  return result;
}

function serializeEnvValue(value: string) {
  if (value === '') {
    return '';
  }

  if (value.includes('\n')) {
    return JSON.stringify(value);
  }

  if (/\s|#|"/.test(value)) {
    return JSON.stringify(value);
  }

  return value;
}

export function getSettingsFilePath() {
  return activeConfigPath;
}

export function readSettingsFile() {
  const filePath = getSettingsFilePath();
  const contents = existsSync(filePath) ? readFileSync(filePath, 'utf8') : '';

  return {
    filePath,
    raw: contents,
    values: parseEnvFileContents(contents),
  };
}

export function writeSettingsValues(updatedValues: Record<string, unknown>) {
  const {filePath, raw, values} = readSettingsFile();
  const nextValues: EnvMap = {...values};

  for (const [key, value] of Object.entries(updatedValues)) {
    nextValues[key] = normalizeValue(value);
    process.env[key] = nextValues[key];
  }

  const lines = raw.length > 0 ? raw.split(/\r?\n/) : [];
  const seenKeys = new Set<string>();

  const rewritten = lines.map(line => {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) {
      return line;
    }

    const key = match[1];
    if (!(key in nextValues)) {
      return line;
    }

    seenKeys.add(key);
    return `${key}=${serializeEnvValue(nextValues[key])}`;
  });

  for (const [key, value] of Object.entries(nextValues)) {
    if (seenKeys.has(key)) {
      continue;
    }

    rewritten.push(`${key}=${serializeEnvValue(value)}`);
  }

  const finalText = rewritten.join('\n').replace(/\n?$/, '\n');
  writeFileSync(filePath, finalText, 'utf8');

  return {
    filePath,
    raw: finalText,
    values: nextValues,
  };
}

export function writeSettingsRaw(raw: string) {
  const filePath = getSettingsFilePath();
  writeFileSync(filePath, raw.replace(/\r\n/g, '\n').replace(/\n?$/, '\n'));

  const contents = readFileSync(filePath, 'utf8');
  const values = parseEnvFileContents(contents);

  for (const [key, value] of Object.entries(values)) {
    process.env[key] = value;
  }

  return {
    filePath,
    raw: contents,
    values,
  };
}
