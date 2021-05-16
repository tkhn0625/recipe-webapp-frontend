FROM node:14.15.1

# Docker内の作業ディレクトリの設定
WORKDIR /usr/src/app

# package.jsonとyarn.lockを/usr/src/appにコピー
COPY ["package.json", "yarn.lock","./"]

# パッケージをインストール
RUN yarn install

# ローカル作業フォルダ内のファイルを全て/usr/src/appにコピー
COPY . /usr/src/app

# Build
RUN yarn build

# ポートの開放
EXPOSE 3000

# コンテナを起動する際に実行されるコマンド
ENTRYPOINT [ "yarn", "start" ]
