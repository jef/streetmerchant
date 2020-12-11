# Docker

You will need:
* `docker` (tested on Docker version 19.03.13-ce, build 4484c46d9d)
* `make` (not a strict requirement, but helps out with stages)
* `docker-compose` (tested on docker-compose version 1.27.4,)

## What
It is assumed you know what docker is.
You can build and run this project inside docker, headless. All the depencies will be downloaded in to the docker image. 

## Why
There is no need to install node, or anything else (apart from above) on your machine to run this.

## How

1. Copy pasta the `.env-example` in to `.env`.
2. Edit `.env` in your favourite editor, pick stores, options what ever you want.
3. If you have make, simply run `make` in your terminal to get started. You should see a docker build, and container start automatically.
4. If you want a webserver running, so you can edit the options via web interface, uncomment lines 13-14 in `docker-compose.yml` to open up ports `7997`. Update `.env` file `WEB_PORT="7997"` this is so the service listens on `7997` and we expose the same ports on docker.
5. If you do not have make, because windows, run these commands in order: 
    ```
    docker-compose build streetmerchant-shop-bot
    docker-compose up
    ```