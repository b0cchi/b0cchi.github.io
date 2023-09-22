+++
title = "‘An error occurred while updating the entries. See the inner exception for details.’の対処法"
date = 2022-06-08T15:25:41+09:00
showLicense = false
tags = ["c#","asp.net"]
+++



ローカルの開発環境および本番環境では**動いている**のに，ステージング環境だけで`Entity Framework`関連の下記エラーが発生。  

```
System.Data.Entity.Core.UpdateException
An error occurred while updating the entries. See the inner exception for details.
```

環境変数の違いはあれど，C#のプログラムに違いはない。。。 


## 結論
エラーが発生しているテーブルを**削除＆作成**したらエラーが発生しなくなった。  

(；´Д｀) === 3

