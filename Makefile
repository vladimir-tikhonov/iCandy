CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

setup-dev:
	docker-compose run --rm frontend npm install --quiet

start:
	docker-compose up

build-ci:
	docker-compose run --rm frontend npm run build
	docker-compose run --rm frontend npm run flow
	docker-compose run --rm frontend npm run eslint
	docker-compose run --rm frontend npm run sass-lint
