wget http://jmlr.org/proceedings/$1.html -O $1.html
echo -e "---\nlayout: page\ntitle: $2\ntagline: $3\n---\n\n" > $1.md
iconv -f utf-8 -t utf-8 -c $1.html > $1.tmp
pandoc -fhtml -tmarkdown $1.tmp >> $1.md
rm $1.html $1.tmp


