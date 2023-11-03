+++
title = "Use custom images in dev containers"
date = 2023-09-30T08:24:34Z
showLicense = false
tags = ["container","docker","dev container"]
+++

# dev containerで独自のイメージが使いたい！
開発環境が特定のバージョンに縛られていたりすると、開発環境の構築が非常にコストとなることがよくあります。  
ライブラリとかフレームワークをバージョンアップしとけって話ではあるんですが、開発環境自体の構築に時間を取られたくないのも事実です。  
そこで、`dev container`一発で開発環境を構築するべく、自分に合ったイメージのやつを作りたいと思います。  
ここで使ったコード類は[github](https://github.com/b0cchi/angular_devcontainer)においてあるので、コードを見たいとか、実際に動かしてみたい場合は、ご参照ください。


## Dockerfile & devcontainer.json
基本的には好きに`Dockerfile`を作って、それを`devcontainer.json`に食わせてあげるだけです。  

今回は`Angular`の**12**系の環境が必要だったのでこれを例に構築していきます。

### Dockerfile

```Dockerfile
FROM node:14.15.0       # ベースイメージ

RUN npm install -g @angular/cli@12.0.4 \    # angular cliのインストール
```

### devcontainer.json

```devcontainer.json
{
  "name": "Angular 12 Client",
  "build": {
    "dockerfile": "Dockerfile"      # 大事
  },
  "mounts": [   # 推奨
    {
      "type": "volume",
      "source": "devcontainer_node_modules",
      "target": "${containerWorkspaceFolder}/node_modules"
    }
  ],
  "workspaceFolder": "/workspace",  
	"workspaceMount": "source=${localWorkspaceFolder}/workspace,target=/workspace,type=bind,consistency=cached",
  "forwardPorts": [4200],
  "customizations": {
    "vscode": {
      "extensions": [
        "Angular.ng-template",
        "esbenp.prettier-vscode",
        "rvest.vs-code-prettier-eslint",
        "Gruntfuggly.todo-tree"
      ]
    }
  }
}
```
* `build`：ここで`Dockerfile`を選ぶことで、食わせることが可能となる
* `mounts`：node系のやつであれば、`node_modules`をボリューム用のコンテナにした方が爆速になる（[公式](https://code.visualstudio.com/remote/advancedcontainers/improve-performance)）

### 終わりに
環境構築を1発でやるとともに、チームで環境が統一できる利点もあり、一石三鳥くらいお得になっています。  
是非是非活用してみてください。