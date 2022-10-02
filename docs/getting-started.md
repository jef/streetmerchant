# Getting started

You do not need any computer skills, smarts, or anything of that nature. You are very capable as you have made it this far. Some basic understanding how a terminal, git, and or Node.js is a bonus, but that does not limit you to getting streetmerchant running!

## Prerequisites

- [git](https://git-scm.com/)
- Either [Node.js 15](https://nodejs.org/en/) or [Docker (1.13.0+)](https://docs.docker.com/get-docker/) (advanced users)

## Using Node.js

| Reference | Note |
|:---:|---|
| tag | Example, `v1.0.0`; stable |
| `main` | Latest HEAD; not tagged, could be unstable |

1. Download [Node.js 15](https://nodejs.org/en/)
1. Clone this project `git clone https://github.com/jef/streetmerchant.git`.
    1. To checkout a particular reference, use `git checkout <ref name>` after cloning.
1. Navigate to this project by entering `cd streetmerchant`.
1. Run `npm install`.
1. Make a copy of `dotenv-example` and name it `dotenv`.
1. Edit the `dotenv` file to your liking using a text editor (like [vscode](https://code.visualstudio.com/)).
1. Run `npm run start` to start.

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
docker run -it --rm \
  --env-file ./dotenv \
  ghcr.io/jef/streetmerchant:nightly

# to test notifications
docker run -it --rm  \
  --env-file ./dotenv \
  ghcr.io/jef/streetmerchant:nightly test:notification:production
```

See [Developing in docker](#developing-in-docker) for more information

## Customization

To customize streetmerchant, make a copy of `dotenv-example` as `dotenv` and make any changes to your liking. View [Reference](reference/application.md) for more information on variables and their usage.

???+ tip
    All environment variables are optional.

## For developers

### Developing in Node.js

The command `npm run start:dev` can be used instead of `npm run start` to automatically restart the project when filesystem changes are detected in the `src/` folder or `dotenv` file.

Use `npm run lint` to see any linting uses and `npm run fix` to automatically fix the issues it can.

### Developing in Docker

#### Prerequisites

- [Docker (1.13.0+)](https://docs.docker.com/get-docker/)
- [GNU Make](https://www.gnu.org/software/make/)
    - Optional, but increases quality of life
- [Docker Compose](https://docs.docker.com/compose/install/)
    - Depending on your system, you may already have this. Check before installing.

#### Starting with `docker-compose`

1. Make a copy of `dotenv-example` and name it `dotenv`.
1. Edit the `dotenv` file to your liking using a text editor (like [vscode](https://code.visualstudio.com/)).
1. If you're using `make`, you can run `make run` to start and `make stop` to stop.
    1. There are more options in the `Makefile`, feel free to explore.
1. If you do not have `make`, you can run `docker-compose` directly:

```shell
# To start
# Use `-d` if you want to run in detached mode
# Use `--build` if you want to build the image before running (default image is latest in GitHub Container Registry).
docker-compose up

# To break down
docker-compose down
```

???+ note
    If you are using `WEB_PORT`, then you will need to add the following to docker-compose:

    ```
    ports:
      - "<WEB_PORT>:<WEB_PORT>"
    ```

    Replace `<WEB_PORT>` with the value you gave in your `dotenv`.
