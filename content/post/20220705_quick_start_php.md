+++
title = "PHPの環境をdocker composeコマンドで構築する"
date = 2022-07-05T14:16:55+09:00
showLicense = false
tags = ["php","docker"]
+++

こんにちはb0cchiです。  
  
さっとテストするなら**Playground**でもいいじゃん？っていう意見もありますが、シークレットキーとかの入力が必要なテストだと**Playground**ってちょっと抵抗ありませんか？  
  
というわけで、今回はPHPの環境をさっと`docker compose`コマンドで構築するためのサンプルです。  
  
コード全体は[Github](https://github.com/b0cchi/quick-start-php)にあげてありますので、手っ取り早く使いたい場合は、そちらを参照してください。


## ディレクトリ概要
以下の構成にして、`docker compose`コマンドでPHPを実行できるようにしていきたいと思います。  
`index.php`がPHPの本体で、`docker-compose.yml`ファイルにdockerの設定を書いていきます。

```bash
quick-start-php
├─ src
|   └─ index.php
└─ docker-compose.yml
```

## docker-compose.yml

```yml
version: '3'

services:
  php:
    image: php:8.1.5-apache     # (1)
    container_name: dev-php     # (2)
    ports:
      - 4001:80                 # (3)
    volumes:
      - ./src:/var/www/html     # (4)
```

1. PHPのdockerイメージです。今回は**8.1.5**のバージョンを使っていますが、使いたいバージョンがある場合は、[公式](https://hub.docker.com/_/php)を参照して`-apache`があるものを選んでください。
2. コンテナ名です。`docker compose ps`したときに、`dev-php`の名前でコンテナが立ち上がります。
3. ポート指定です。ブラウザで確認するときに、`localhost:4001`でアクセスできるようにします。4001をすでに使っている場合は、空いているポート番号を指定してください。
4. ボリューム指定です。`src`ディレクトリをコンテナの`/var/www/html`へマッピングしています。

## index.php
```php
<html>
    <head>
        <title>Quick Start PHP</title>
    </head>
    <body>
        <?php echo '<h1>Quick Start PHP</h1>'; ?> 
        <div>
            <?php phpinfo(); ?>
        </div>
    </body>
</html>
```

`PHP`のサンプルファイルです。
`echo`で文字列出力しているのと、`phpinfo()`を使ってPHPのバージョン情報等を表示できるようになっています(ほぼPHP公式のサンプルコードです。)。  
この`index.php`でサンプルコードや動作テストをさっとできるんじゃないかと思います。

## レッツ実行！
上記の`quick-start-php`ディレクトリで以下のコマンドを実行します。

```
$ docker compose up -d
```
  

エラーなくカーソルが戻ってきたら、適当なブラウザ（下図ではchrome）を起動し、`localhost:4001`をアドレスバーに入力し下図のページが表示されたらOKです！

{{< img-nz "20220705_quick_start_php" "images/20220705_quick_start_php/001.jpg" >}}

## 最後に
さっと開発環境を構築して動作確認できると実装可能かどうか素早く判断し、不安要素を排除して精神的に楽になりましょう！
ではでは。よい開発体験を！！