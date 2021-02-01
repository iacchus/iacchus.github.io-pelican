#!/usr/bin/env bash

# exit on error
set -e

export PUBDIR="../iacchus.github.io"
export ORIGIN="git@github.com:iacchus/iacchus.github.io.git"

# push actual state

git add .
git commit -a -m 'Autocommit from build.sh' || true
git push


#make clean

#rm -rf $PUBDIR
#git clone $ORIGIN $PUBDIR 
make clean
make publish

cd $PUBDIR
git init .
git add .
git commit -a -m 'Autocommit from build.sh' || true
git remote add origin $ORIGIN

git push -u origin master

#make publish
#git init $PUBDIR
#git init .

#git -C ../iacchus.github.io remote add origin 

#cd ../iacchus.github.io

#git add .
#git commit -a -m 'Autocommit from build.sh' || true
#git push

cd -
