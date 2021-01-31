#!/usr/bin/env bash

# exit on error
set -e

export PUBDIR="../iacchus.github.io"

# push actual state

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push


make clean

#rm -rf $PUBDIR
git clone git@github.com:iacchus/iacchus.github.io.git $PUBDIR 
make clean

make publish
#git init ../iacchus.github.io
#git -C ../iacchus.github.io remote add origin 

cd ../iacchus.github.io

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push

cd -
