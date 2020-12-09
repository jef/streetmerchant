.DEFAULT_GOAL := go
export all
SHELL := /usr/bin/env bash

go : build run

build:
	docker-compose build streetmerchant-shop-bot


run:
	docker-compose up
	# docker-compose --env-file .env up -d


stop:
	docker-compose stop

clean:
	docker-compose kill
	docker-compose down
	docker-compose rm -f