# next-nest-front-todo-sample

アウトプットとして、Todo管理アプリケーションを作成。

フロントはNext.js

サーバーサイドはNest.jsを使用。[next-nest-api-todo-sample](https://github.com/massu-159/nest-api-sample)

[yup](https://www.npmjs.com/package/yup)でフォームのバリデーションチェック

[zustand](https://github.com/pmndrs/zustand)で状態管理

ORMにprismaを使用

urlはこちら
https://github.com/massu-159/next-nest-front-todo-sample


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Todoリスト
  - Todo一覧表示
  - Todo作成処理
  - Todo更新処理
  - Todo削除処理
- 認証
  - ユーザー登録
  - ログイン　
  - ログアウト


### 2-2. 構成技術
- "next": "13.0.6"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "axios": "^0.27.2"
- "yup": "0.32.11",
- "zustand": "4.0.0"
- "prisma": "^4.7.1",
- "tailwindcss": "^3.2.4"
