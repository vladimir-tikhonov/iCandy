CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

clean:
	docker volume rm frontend_deps

setup-dev:
	docker volume create --name frontend_deps
	docker build -t icandy/frontend:latest docker/frontend-dev
	docker run --rm -v $(CURRENT_DIR)/frontend:/opt/frontend/ -v frontend_deps:/opt/frontend/node_modules \
		icandy/frontend npm install --quiet

build-ci:
	docker run --rm -v $(CURRENT_DIR)/frontend:/opt/frontend/ -v frontend_deps:/opt/frontend/node_modules \
		icandy/frontend npm run build
	docker run --rm -v $(CURRENT_DIR)/frontend:/opt/frontend/ -v frontend_deps:/opt/frontend/node_modules \
		icandy/frontend npm run flow
	docker run --rm -v $(CURRENT_DIR)/frontend:/opt/frontend/ -v frontend_deps:/opt/frontend/node_modules \
		icandy/frontend npm run eslint
	docker run --rm -v $(CURRENT_DIR)/frontend:/opt/frontend/ -v frontend_deps:/opt/frontend/node_modules \
		icandy/frontend npm run sass-lint
