# yamap-prac

> yamap practice Akira Wada

## 導入＆動作手順

### 最終動作確認バージョン
[![NPM version][shield-npm]](#)
[![Node.js version support][shield-node]](#)
[![Vue.js version support][shield-vue]](#)

``` bash
# 当該動作確認用のベースディレクトリを作成してそこで下記のコマンドを実行します。

# プロジェクト構築用のライブラリのインストール
npm install
npm install vue
npm install vue-cli

# モジュールハンドラwebpackのプロジェクト構築
# ※ All yes
./node_modules/vue-cli/bin/vue init webpack yamap-prac
# 省略...
cd yamap-prac

# 各ライブラリのインストール
npm install bootstrap-vue
npm install vee-validate
npm install vue-select

# ソースをクローン（GitHubからソースを落として来てもOK）
git clone git@github.com:WatosonA/yamap-prac.git
# ソースをwebpackプロジェクトに適用
cp -rf yamap-prac/* ../yamap-prac/

# serve with hot reload at localhost:8080
npm run dev

# Cannot find module とエラーが出たら必要なモジュールを npm install
```
http://localhost:8080/#/


[shield-npm]: https://img.shields.io/badge/npm-6.7.0-blue.svg
[shield-node]: https://img.shields.io/badge/node.js-11.11.0-brightgreen.svg
[shield-vue]: https://img.shields.io/badge/vue.js-2.5.2-brightgreen.svg
