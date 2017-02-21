#!/usr/bin/bash

mkdir v$1
cd v$1
git init
echo "Proceedings of Machine Learning Research Volume $1" > README.md
echo "" >> .gitignore
echo "*~" > .gitignore
echo "*#" >> .gitignore
echo "" >> .gitignore
git add .
git commit -m "Commit README and .gitignore"
git remote add origin https://github.com/mlresearch/v$1.git
git remote -v
git push -u origin master
