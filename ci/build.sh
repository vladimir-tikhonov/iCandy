#!/usr/bin/env sh

cd $TRAVIS_BUILD_DIR/frontend
npm run build
npm run flow
npm run eslint
npm run sass-lint
