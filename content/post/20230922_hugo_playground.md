+++
title = "dev containerでhugoの環境構築"
date = 2023-09-22T06:41:31Z
showLicense = false
tags = ["docker","vscode","hugo"]
+++

このブログ自体`hugo`で作っています。  
が、`hugo`の環境構築って毎回ググりませんか・・・？（あれ？自分だけ？）  
ということで`dev container`の環境を構築してあげればいいじゃないかと。  
自分自身の備忘録ですが、どなたかのお役に立てば。。。

# 前提
`docker`のコマンドが実行できることが最低限必要となります。  
エディタはなんでもいいと思いますが、筆者は`vscode`を使っているので、それを前提として書いています。

## いきなり結論
[Github](https://github.com/b0cchi/hugo_devcontainer)に`devcontainer.json`を書いてありますので、クローンしてもらって、`dev container`を自身のエディタで起動していただければ良いと思います。

## もうちょっと丁寧に
[Github](https://github.com/b0cchi/hugo_devcontainer)の中身についてもう少し丁寧に解説を。。

### 構成
```
.
├── README.md
├── .devcontainer
│   └── devcontainer.json
└── workspace
```
構成はこのようになっており、大事なのは`devcontainer.json`だけです。  
```
{
	"name": "hugo_container",   ---> ①名前
	"image": "klakegg/hugo:ext-ubuntu",   ---> ②イメージ  
	"workspaceFolder": "/workspace",    ---> ③workspace
	"workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind,consistency=cached",  ---> ④マウント
	"forwardPorts": [   ---> ⑤ポート
		1313
	]
}
```
1. 開発コンテナの名前
1. `hugo`のイメージで`ext`を利用
1. 起動時のフォルダ
1. ③をマウント
1. `1313`ポートをホストと繋ぐ


③〜④は個人的にdev containerを開く際に、`.devcontainer`フォルダが見えるのが嫌いなだけで、ここは省いてもらっても大丈夫です。


## 最後に
最近はdev containerの便利さにハマってます。どんどん開発環境を統一化して、生産性を一緒に上げていきましょう！