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
    
### Developing in Heroku

#### Prerequisites

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
    - You will need a [Heroku Account](https://signup.heroku.com).
- [GIT](https://git-scm.com)
    - Make sure the PATH is set correctly, so you can use it in you command line.
- [StreetMerchant](https://github.com/jef/streetmerchant)
    - If you don't already have it.

#### Starting with File correction

1. Make a copy of `dotenv-example` and name it `dotenv`.
1. Edit the `dotenv` file to your liking using a text editor (like [VSCode](https://code.visualstudio.com/) or even Notepad).
1. Find the option `OPEN_BROWSER` and set it to `OPEN_BROWSER=false`
    1. After this, I recommend you setup some form of contacting your directly in the dotenv file as well.
    2. This can be phone, email, or whatever you'd want. The information won't be public.
    3. Save and close file.
1. Locate the `.gitignore` file and open it.
    1. Remove `build/` and `dotenv`.
    2. Save and close file.
1. Locate the `package.json` file and open it.
    1. Locate the `"posttest"` config.
       1. Under it, paste:</br>
       <pre><code>"postinstall": "npm run tsc",</br>
           "tsc": "tsc",</code></pre>
1. Create a file called `Procfile` with no type declaration(.txt/.doc/.etc.)
    1. Open it with Notepad
    2. Paste: `worker: npm run start:production`
    3. Close and save file
1. Navigate to `src/` and find the file `index.ts`
    1. Open with IDE or Notepade
    2. Find `const args: string[]`
    1. Replace with:
     <pre><code>  const args: string[] = [
        '--no-sandbox',
        '--disable-setuid-sandbox'
     c];</code></pre>                
#### Setting up Heroku
```shell
# To start
# Open a terminal and navigate to the master street merchant directory
# From there start this
heroku login
# Follow the steps to login
```
1. Leave that terminal up, and go to your [Heroku apps](https://dashboard.heroku.com/apps)
2. Create a new app:

![IMAGEOFAPP](https://github.com/dev-nolant/streetmerchant/blob/main/docs/assets/images/streetmerchan-herokunewapp.jpg)

3. Name it, and then click `Create App`

![IMAGEOFCREATE](https://github.com/dev-nolant/streetmerchant/blob/main/docs/assets/images/streetmerchant-herokuapp.jpg)

4. Go to `Settings` and add two buildpacks
    1. `heroku/nodejs`
    2. `https://github.com/jontewks/puppeteer-heroku-buildpack`

It should look like:
![IMAGEOFBUILDPACKS](https://github.com/dev-nolant/streetmerchant/blob/main/docs/assets/images/streetmerchant-herokubuildpacks.png)

#### Terminal setup
Back to the terminal that you left open.
1. Type `git init`
2. Once that finishes copy and paste: `heroku git:remote -a YOURAPPNAME` but make sure `YOURAPPNAME` is whatever you named your app on Heroku.
3. Then type `git add .`
4. Once that finishes paste `git commit -am "COMMITMESSAGE"`, replacing `COMMITMESSAGE` with whatever commit message you'd like. This doesn't matter much.
5. The last thing to do in the terminal is to push your repo to Heroku
    1. Paste `git push heroku master`
        1. This will take a while
#### Final steps
1. On your Heroku app, click on the tab `Resources`

You should see this:
![IMAGEOFRESOURCES](https://github.com/dev-nolant/streetmerchant/blob/main/docs/assets/images/streetmerchant-herokudynos.jpg)

2. Click the pen icon on both to edit their states. 
3. Turn off `web npm start`
4. Turn on `worker npm run start:production`
5. Click confirm on both.
6. Now you're essentially done!
    1. I recommend you click on the `more` dropdown and click `logs` to make sure everything is running smoothly.
    2. If you set up notifications, you will be notified when you criterias are met(3060 in stock, etc.), otherwise you'll have to keep your eyes on the `logs` tab
