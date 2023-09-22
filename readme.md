## git submodule 
テーマをgitのサブモジュールで管理している関係で、単純な`git clone`ではテーマのファイル群がコピーされない    
以下のどちらかのgitコマンドでテーマのファイルも取得するように  
  

クローンの場合：
```
git clone https://github.com/b0cchi/blog --recursive
```
クローン済みの場合
```
git submodule update --init
```