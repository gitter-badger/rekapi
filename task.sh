#!/bin/bash

COMMAND=$1
BIN="./node_modules/.bin"

export PATH=$BIN:$PATH

function build () {
  babel src -d tmp
  #grunt build
}

case "$COMMAND" in
  build )
    build
  ;;

  build:dist )
    webpack -d
  ;;

  test )
    grunt qunit
  ;;

  bump )
    grunt bump
  ;;

  lint )
    grunt jshint
  ;;
esac
