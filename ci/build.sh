#!/usr/bin/env sh

cd $TRAVIS_BUILD_DIR/frontend
npm run build
npm run tslint
npm run sass-lint
