#!/usr/bin/env sh

cd $TRAVIS_BUILD_DIR/frontend
npm run build
npm run eslint
npm run sass-lint
