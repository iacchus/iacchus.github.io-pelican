#!/usr/bin/env bash

# exit on error
set -e


make clean
make publish

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push

cd ../iacchus.github.io
git add .
git commit -a -m 'Autocommit from build.sh' || true
git push

cd -

