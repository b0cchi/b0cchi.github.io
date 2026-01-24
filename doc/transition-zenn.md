---
title: 'GitHub Pages から Cloudflare Pages に移行する手順（CLIデプロイ編）'
emoji: '☁️'
type: 'tech'
topics: ['cloudflare', 'github-pages', 'nextjs', 'wrangler', 'deployment']
published: false
---

GitHub Pagesで公開している静的サイトを、Cloudflare Pagesへ**ローカルCLI経由で**移行する手順のメモです。GitHub連携を使わず、手元でビルドしてデプロイする前提です。

## 想定環境 / 前提

- GitHub / Cloudflare アカウントを所持
- 対象リポジトリにアクセス可能
- Node.js / npm 利用可
- デプロイは `next build` → `wrangler pages deploy` を手元で実行する運用

## 全体の流れ

1. Cloudflareアカウント準備
2. Wrangler CLIをセットアップしてログイン
3. ビルドしてPagesにデプロイ（初回はプロジェクト作成プロンプトあり）
4. 独自ドメインを使う場合はDNSをCloudflare Pages向けに切り替え

## 手順

### 1. Wranglerをインストールしてログイン

```bash
npm install -g @cloudflare/wrangler
wrangler login
```

ブラウザでアクセス許可を済ませ、ログインを完了させます。

### 2. ビルド & デプロイ

リポジトリ直下で実行（`project-name`は任意で置き換え）:

```bash
next build && wrangler pages deploy out --project-name=portfolio
```

- `out`: 静的生成物の出力先
- `portfolio`: Cloudflare Pagesのプロジェクト名
- 未作成なら実行時に「Create a new project?」と聞かれるので、そのまま作成し、prodブランチ名を入力すればOK（CLIデプロイ運用ではブランチ名は実質影響なし）。

デプロイ成功例:

```
✨ Success! Uploaded 176 files (10.58 sec)
🌎 Deploying...
✨ Deployment complete! Take a peek over at https://<generated>.pages.dev
```

### 3. DNSを切り替える（独自ドメインを使う場合）

GitHub Pages向けのCNAMEを削除し、Cloudflare Pagesのドメインを指すCNAMEを追加します。

- 例: 旧設定 — タイプ: CNAME / 名前: portfolio / コンテンツ: b0cchi.github.io
- 新設定 — タイプ: CNAME / 名前: portfolio / コンテンツ: `<your-project>.pages.dev`（例: 8d23cc35.portfolio-5at.pages.dev）

Cloudflare Pagesのプロジェクト画面 → 「カスタムドメイン」タブ → 「ドメインをアクティブにする」で反映を確認します。

## よくあるつまずきポイント

- **ビルド出力パスの指定漏れ**: `wrangler pages deploy out` の `out` がNext.jsの出力先と一致しているか確認。
- **初回プロジェクト作成をスキップしてしまう**: `--project-name` を指定しつつ、プロンプトで「Create a new project」を選べばその場で作成される。
- **DNS反映待ち**: CNAME切り替え後、数分〜数十分で反映。急ぎなら `dig` や `nslookup` で確認。

## まとめ

- ローカルで `next build` → `wrangler pages deploy` を流すだけでGitHub PagesからCloudflare Pagesへ移行できる。
- 初回はCLI上でプロジェクトを作成するプロンプトに従うだけでOK。
- 独自ドメインはCNAMEを `<your-project>.pages.dev` に付け替えて完了。
