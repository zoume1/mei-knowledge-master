#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'zoume1.github.io/mei-knowledge-master' > CNAME
# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com:zoume1/mei-knowledge-master.git
# else
#   msg='来自github action的自动部署'
#   githubUrl=https://zoume1:${GITHUB_TOKEN}@github.com/zoume1/mei-knowledge-master.git
#   git config --global user.name "zoume1"
#   git config --global user.email "595649828@qq.com"
# fi

git init
git add -A
git commit -m "${msg}"
git push -f git@github.com:zoume1/zoume1.github.io.git master
# git push -f $githubUrl master:gh-pages # 推送到github