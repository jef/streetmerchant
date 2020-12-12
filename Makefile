.DEFAULT_GOAL := run

.PHONY: build
build:
	docker-compose build streetmerchant

.PHONY: run
run:
	docker-compose up

.PHONY: run-detached
run-detached:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down
