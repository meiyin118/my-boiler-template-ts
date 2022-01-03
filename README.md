# ボイラーテンプレート

## 残タスク
- リセットcssの導入
- gitignoreの導入
- リモートリポジトリへのpush

## 概要
`EJS`/`scss`/`TypeScript`で開発するためのボイラーテンプレート。
gulpは使わずnpm scriptで実行しています。
リセットcssはXXXXを使用しています。

```zsh
# 開発スタート
npm run start
```

## パッケージのダウンロード
```zsh
# EJS（altHTML）
npm i -D ejs-cli chokidar-cli

# dart-sass（altCSS）
npm i -D sass

# TypeScript（altJS）
npm i -D typescript

# 画像の圧縮
npm i -D imagemin-cli imagemin-keep-folder imagemin-mozjpeg imagemin-pngquant imagemin-gifsicle imagemin-svgo

# Browser-Sync
npm i -D browser-sync

# タスクをパラレルで実行するためのパッケージ
npm i -D npm-run-all
さまざまなnpmスクリプトを順次実行するrun-sと並行実行するrun-pという2つの便利なコマンド

# Autoprefixer
npm i -D postcss postcss-cli autoprefixer
```

## npm scripts
```json
"scripts": {
  // EJS
  "compile:ejs2html": "ejs-cli -b src/ejs/ \"/**/*.ejs\" -o dist/",
  "watch:ejs2html": "chokidar \"src/ejs/\" -c \"npm run compile:ejs2html\" --initial",
  // dart-sass
  "sass": "sass src/scss/:dist/css/ --no-source-map --watch",
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

## 各設定ファイル
### package.json
- `npm i -y`

### TypeScript
- `tsc --init`で`tsconfig.json`ができる

### imagemin
ルートに`imagemin.js`を置く


## 参考
- https://noob-front-end-engineer-blog.com/node-sass-compiler/
- https://qiita.com/takeshisakuma/items/dbbb1c465099e6e4dd2e
- https://qiita.com/sugurutakahashi12345/items/2a17a3cdfbc4a7e5e4eb

