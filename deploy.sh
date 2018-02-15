#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  git push heroku master
fi
