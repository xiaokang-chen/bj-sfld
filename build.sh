#!/bin/sh
# 该脚本仅用于jenkins部署中的build过程

# 确保脚本抛出遇到的错误，并且立即停止
set -ex

echo "打包前端代码"
rm -Rf ./.nuxt
npm install
npm run build
