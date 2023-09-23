+++
title = "Github Pagesで'Mixed Content'エラー"
date = 2023-09-23T13:28:22Z
showLicense = false
tags = ["Github","Github Pages","hugo"]
+++

# Mixed Content

`Github Pages`でデザインというか、CSSが当たらない事態に遭遇したので、その備忘録に。  

## エラー
エラー自体は以下の通り  

> Mixed Content: The page at 'https://blog.b0cchi.dev/' was loaded over HTTPS, but requested an insecure stylesheet 'http://blog.b0cchi.dev/assets/css/xxx.min.css'. This request has been blocked; the content must be served over HTTPS.

要するに、CSSファイルのURLを`HTTP`で指定するんじゃなくて`HTTPS`で指定しろよというわけです。  

## 解消法
自身はサイト構築に`hugo`を使ってて、`baseURL`とか色々いじっても変わらんなぁ〜と小一時間悩んだ末に以下の通り解決しました。  

1. Github Pagesで使ってるリポジトリの`Settings`
1. 左側メニューの`Pages`
1. ページ真ん中くらいの`Enforce HTTPS`にチェックを入れる

{{< img-nz "20230923_EnforceHttps" "images/20230923_EnforceHttps/001.jpg" >}}

そうなんです。`hugo`の設定は悪くなかったんです。。。

## いまどき
`HTTPS`が当たり前のこの時代に、`Enforce HTTPS`はデフォルト`On`でいいんじゃないか・・・・。