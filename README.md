# Gitpost

> 所有能用 git 管理的东西最终都会用 git 来管理

用 git 来管理你所有的文章。让各个平台的文章，帖子都用 git 来管理起来，你只需要在你的 git 项目里提交一个``markdown`文件,即可按照你的配置，自动同步到[medium](https://medium.com/),或[twitter](https://twitter.com/),或[tumblr](https://www.tumblr.com)等

## 特性

- 自动同步新文章和修改到各个平台
- 自动生成静态博客
- 使用 git 来管理你全部的文章

## 本地预览博客

```shell
npm i -g gitpost-cli
gitpost init <folder>
cd <folder>
npm i
gitpost server
```

新建完成后，指定文件夹的目录如下：

```sh
_config.yaml
package.json
source/
.hexo/ # 存放静态博客相关内容

```

## 如何开发

```shell
npm install
npm start
```

本项目采用[prettier](https://prettier.io/)来统一代码风格，并且会在`pre-commit`前自动 format 你本次提交的代码，推荐你在你的编辑器里安装 prettier 插件，并且开启保存文件就自动 format 选项，这样可以在开发的时候，就能自动 format

本项目采用[git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 工作流，请按照 git flow 工作流来提交合并代码

推荐使用`npm run cm`来代替`git commit`作为格式化 commit 信息的工具

```shell
npm run cm
```
