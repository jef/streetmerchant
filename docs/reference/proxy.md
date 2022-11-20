# Proxy

## Filename

Proxy configuration can be set either per store in a file called `storename.proxies` or globally in `global.proxies` in the streetmerchant root directory.

If both exist, the store specific file will take precedence.

## Format

The format is one proxy per line with the following structure:
`protocol://[user:password@]ip[:port]`

Supported protocols are `http` and `socks5`.

Valid examples include:
- `socks5://1.2.3.4:3180`
- `socks5://abcd:efgh@1.2.3.4:5678`
- `http://1.2.3.4:80`
- `http://abcd:efgh@1.2.3.4:8080`
