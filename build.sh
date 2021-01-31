#!/usr/bin/env bash

# exit on error
set -e

# push actual state

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push

# clean old published

make clean

# republish

git init ../iacchus.github.io

make publish

cd ../iacchus.github.io

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push

cd -
