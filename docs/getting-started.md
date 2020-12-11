# Getting started

You do not need any computer skills, smarts, or anything of that nature. You are very capable as you have made it this far. Some basic understanding how a terminal, git, and or Node.js is a bonus, but that does not limit you to getting streetmerchant running!

## Prerequisites

- [git](https://git-scm.com/)
- Either [Node.js 14](https://nodejs.org/en/) or [Docker](https://docs.docker.com/get-docker/) (advanced users)

## Using Node.js

| Reference | Note |
|:---:|---|
| tag | Example, `v1.0.0`; stable |
| `main` | Latest HEAD; not tagged, could be unstable |

- [Node.js 14](https://nodejs.org/en/)
- Clone this project `git clone https://github.com/jef/streetmerchant.git`.
    - To checkout a particular reference, use `git checkout <ref name>` after cloning.
- Navigate to this project by entering `cd streetmerchant`.
- Run `npm install`.
- Make a copy of `dotenv-example` and name it `dotenv`.
- Edit the `dotenv` file to your liking using a text editor (like [vscode](https://code.visualstudio.com/)).
- Run `npm run start` to start.

At any point you want the program to stop, use ++ctrl+c++.

???+ tip
    Community based help can also be found on the [wiki](https://github.com/jef/streetmerchant/wiki). Feel free to check that out if you're having problems running. If you're still having problems running, you're probably not the first. Make some searches through the [GitHub issues](https://github.com/jef/streetmerchant/issues) before making one.

## Using Docker

Available via GitHub Container Registry.

| Tag | Note |
|:---:|---|
| `latest` | Latest release; stable |
| `nightly` | Latest HEAD each day at midnight UTC; could be unstable |

```sh
# to run docker nightly
docker run --cap-add=SYS_ADMIN \
  -it --rm --env-file ./dotenv \
  ghcr.io/jef/streetmerchant:nightly

# to test notifications
docker run --cap-add=SYS_ADMIN \
  -it --rm --env-file ./dotenv \
  ghcr.io/jef/streetmerchant:nightly test:notification:production
```

## Customization

To customize streetmerchant, make a copy of `dotenv-example` as `dotenv` and make any changes to your liking. View [Reference](reference/application.md) for more information on variables and their usage.

???+ tip
    All environment variables are optional.

## For developers

The command `npm run start:dev` can be used instead of `npm run start` to automatically restart the project when filesystem changes are detected in the `src/` folder or `dotenv` file.
