setup-dev:
	docker-compose pull
	docker-compose build
	docker-compose run --rm frontend npm install --quiet
	docker-compose run --rm backend mix deps.get
	docker-compose run --rm backend mix ecto.setup

start:
	docker-compose up

build-ci:
	docker-compose run --rm frontend npm run build
	docker-compose run --rm frontend npm run flow
	docker-compose run --rm frontend npm run eslint
	docker-compose run --rm frontend npm run sass-lint
	docker-compose run --rm backend mix test

connect-db:
	docker-compose run --rm postgres psql -h postgres -U postgres
