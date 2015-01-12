#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "Syntax: $0 DIR" 2>&1
  exit 1
fi

if [ -e "$1" ]; then
  echo -n  "Deleting $1... "
  rm -rf "$1" && echo OK
fi

mkdir "$1"

# Copy files
echo -n "Copying files... "
for path in \
  app/examples/vanillajs/js \
  tests/config \
  tests/vanillajs/*/*.{test,mock}.js \
  bower_components/blanket/dist/qunit/blanket.js \
  bower_components/blanket/src/adapters/{mocha,jasmine-2.x}-blanket.js \
  bower_components/chai/chai.js \
  bower_components/jasmine/lib/jasmine-core/{jasmine.{css,js},jasmine-html.js,boot.js} \
  bower_components/mocha/mocha.{css,js} \
  bower_components/qunit/qunit/qunit.{css,js} \
  bower_components/qunit-notifications/index.js \
  bower_components/rsvp/rsvp.js \
; do
  if [ -d "$path" ]; then
    mkdir -p "$1/$path"
    cp -r "$path" "$1/$path/.."
  else
    dir=$(dirname "$1/$path")
    mkdir -p "$dir"
    cp "$path" "$dir"
  fi
done && echo OK

# Generate Testem HTML files
find tests -type f -name "testem*.js" | while read config; do
  dir=$(dirname "$config")
  html="$1/$dir/$(basename -s .js $config | sed 's/testem/index/').html"

  echo -n "Generating $html... " \
  && cat "$dir/index.mustache" | grep -v '/testem.js' | handlebars <(node -e "console.log(JSON.stringify(require('./$config')));") > "$html" \
  && echo OK
done
