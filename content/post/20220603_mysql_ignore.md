+++
title = "‘/etc/mysql/conf.d/my.cnf’ is ignored.の対処法"
date = 2022-06-03T16:19:01+09:00
showLicense = false
tags = ["docker","mysql"]
+++

DockerでMySQLのコンテナを立ち上げた際に、以下のエラーが出た場合の対処法です。

```
mysql: [Warning] World-writable config file ‘/etc/mysql/conf.d/my.cnf’ is ignored.
```

恐らくこのエラーが表示されるのは**Windows**環境だけで，ファイル権限が原因で発生するエラーのようです。  
  
このエラーの対処としてやることは１つだけです。  
読み込ませたい<kbd>my.cnf</kbd>を右クリックして<kbd>読み取り専用(R)</kbd>にチェックを入れるだけです。

{{< img-nz "20220606_readonly" "images/readonly.jpg" >}}

よいコンテナ体験を！！
