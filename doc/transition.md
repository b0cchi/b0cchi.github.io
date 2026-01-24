# Github Pages to Cloudflare Pages Migration Guide

Github PagesでホストされているウェブサイトをCloudflare Pagesに移行する手順を以下に示します。

## 前提条件

- GithubアカウントとCloudflareアカウントを持っていること
- Github Pagesでホストされているウェブサイトのリポジトリにアクセスできること
- デプロイ方法はGithub経由ではなく、ローカルからCLIでデプロイする

## 手順

1. **Cloudflareアカウントの作成**
   - まだCloudflareアカウントを持っていない場合は、[Cloudflareの公式サイト](https://www.cloudflare.com/)でアカウントを作成します。

2. **CLIからCloudflareへログイン**
   - ターミナルを開き、以下のコマンドを実行してCloudflare CLIにログインします。
     ```bash
     npm install -g @cloudflare/wrangler
     wrangler login
     ```
   - ブラウザが開き、Cloudflareアカウントへのアクセスを許可するよう求められます。指示に従ってログインしてください。

3. **CLIからデプロイ**
   - Github Pagesでホストされているウェブサイトのリポジトリをローカルにクローンします。
   - ターミナル上でリポジトリのディレクトリに移動します。
   - buildとデプロイのコマンドを実行します。例えば、以下のようにします。
     ```bash
     next build && wrangler pages deploy out --project-name=portfolio
     ```
   - `out`はビルドされた静的ファイルのディレクトリ、`portfolio`はCloudflare Pagesのプロジェクト名です。適宜変更してください。
   - 初回だとプロジェクトが作成されていないので、以下のようにプロジェクトを作るコマンドが表示されますので、指示に従って、プロジェクトを作成してください。
     ```bash
     ✔ The project you specified does not exist: "portfolio". Would you like to create it? › Create a new project
     ✔ Enter the production branch name: … main
     ✨ Successfully created the 'portfolio' project.
     ```
   - 今回は`main`というブランチ名を指定しましたが、CLI上でデプロイする時は関係ないので、適宜変更してください（GitHub連携した時は気にする必要があります）。
   - 以下のような出力が表示されれば、デプロイ成功です。
     ```bash
     ✨ Success! Uploaded 176 files (10.58 sec)
     🌎 Deploying...
     ✨ Deployment complete! Take a peek over at https://8d23cc35.portfolio-5at.pages.dev
     ```
4. **DNS設定の更新**
   今回は、`Github Pages`から`Cloudflare Pages`にホスティングを移行したため、独自ドメインを使用している場合は、DNS設定を更新する必要があります。
   - `Github Pages`で使用していた独自ドメインの設定を削除します。
   - `DNS` > `レコード`ページへアクセスし、以下の設定を削除します。
     - タイプ：CNAME
     - 名前：portfolio
     - コンテンツ：b0cchi.github.io
   - 次に、上でデプロイしたCloudflare PagesのURLを指すように、新しいCNAMEレコードを追加します。
   - Pagesのページで当該のプロジェクトを開き、`カスタムドメイン`タブをクリックします。
   - `カスタムドメイン設定`をクリック
   - `ドメインをアクティブにする`をクリックし
   - （一応）先ほどのDNS設定ページで、以下の設定がされていることを確認します。
     - タイプ：CNAME
     - 名前：portfolio
     - コンテンツ：`<your-project-name>.pages.dev`（例: 8d23cc35.portfolio-5at.pages.dev）
