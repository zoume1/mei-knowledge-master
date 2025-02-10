#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
# echo 'zoume1.github.io/mei-knowledge-master' > CNAME

git init
git add .
git commit -m 'deploy'
git push -f 'https://github.com/zoume1/zoume1.github.io.git' master:gh-pages # 推送到github