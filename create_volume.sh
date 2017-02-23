#!/bin/bash

mkdir v$1
cd v$1
git init
echo "Proceedings of Machine Learning Research Volume $1" > README.md
echo "" >> .gitignore
echo "*~" > .gitignore
echo "*#" >> .gitignore
echo "tmp" > .gitignore
echo "" >> .gitignore
git add .
git commit -m "Commit README and .gitignore"
git remote add origin https://github.com/mlresearch/v$1.git
git remote -v
git push -u origin master
git checkout -b gh-pages
git push origin gh-pages
rsync -avz $2 .
git add .
git commit -m "Add first version of PMLR proceedings."
git push --set-upstream origin gh-pages
