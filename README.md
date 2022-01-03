# ボイラーテンプレート

## 概要
`EJS`/`scss`/`TypeScript`で開発するためのボイラーテンプレート。  
gulpは使わずnpm scriptで実行しています。  
リセットcssはデフォルトのスタイルをほぼリセットしてくれる`destyle.css`を使用しています。

```zsh
# 開発スタート
npm run start
```

## 更新履歴
- [ver1.0] 2022.1.3 - 新規作成

## 環境構築メモ
### 必要パッケージのダウンロード
```zsh
# EJS（altHTML）
npm i -D ejs-cli chokidar-cli

# dart-sass（altCSS）
npm i -D sass

# TypeScript（altJS）
npm i -D typescript

# 画像の圧縮
npm i -D imagemin-cli imagemin-keep-folder imagemin-mozjpeg@9.0.0 imagemin-pngquant imagemin-gifsicle imagemin-svgo@9.0.0

# Browser-Sync
npm i -D browser-sync

# タスクをパラレルで実行するためのパッケージ
npm i -D npm-run-all
さまざまなnpmスクリプトを順次実行するrun-sと並行実行するrun-pという2つの便利なコマンド

# Autoprefixer
npm i -D postcss postcss-cli autoprefixer
```

### npm scripts
```json
"scripts": {
  // EJS
  "compile:ejs2html": "ejs-cli -b src/ejs/ \"/**/*.ejs\" -o dist/",
  "watch:ejs2html": "chokidar \"src/ejs/\" -c \"npm run compile:ejs2html\" --initial",
  // dart-sass
  "sass": "sass src/scss/:dist/css/ --no-source-map --watch",
  // ベンダプレフィックス付加
  "compile:css2cssprefix": "postcss dist/css/*.css -u autoprefixer -o dist/css/*.css",
  // TypeScript
  "watch:ts": "tsc -w",
  // 画像圧縮タスク
  "watch:img": "chokidar \"src/image/**/*\" --command \"node imagemin.js\" --initial",
  // ホットリロード
  "start:server": "browser-sync start -s dist -w src/*.html src/css/*.css src/js/*.js",
  // 全てのタスクを実行
  "start": "run-p watch:ejs2html watch:scss2cssprefix watch:ts watch:img start:server"
},
```

### 各設定ファイル
#### package.json
- `npm i -y`

#### TypeScript
- `tsc --init`で`tsconfig.json`ができる

#### imagemin
- ルートに`imagemin.js`を置く
- `imagemin-mozjpeg`と`imagemin-svgo`に関しては、最新版をインストールするとESMエラーで落ちるので、commonJSを利用するverにダウングレードした
- `npm i -D imagemin-svgo@9.0.0`のように、`@{version}`としてインストールすればダウングレードできる
- `npm info (パッケージ名) versions`でリリースversionを調べられる（ESMかcommonJSかはnpmのページからコード見て調べた）

### 参考資料
- <a href="https://noob-front-end-engineer-blog.com/node-sass-compiler/">npm-scriptsでDart Sassのコンパイル環境構築</a>
- <a href="https://qiita.com/takeshisakuma/items/dbbb1c465099e6e4dd2e">Web制作向けnpm-scripts</a>
- <a href="https://qiita.com/sugurutakahashi12345/items/2a17a3cdfbc4a7e5e4eb">npm-scripts の 順次・並列実行（npm-run-all）</a>
- <a href="https://ics.media/entry/200317/">2021年に最適なfont-familyの書き方</a>
- <a href="https://stackoverflow.com/questions/69862766/getting-error-err-require-esm-while-running-gulp-command">`gulp`コマンドの実行中に`エラー[ERR_REQUIRE_ESM] `を取得する</a>