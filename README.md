# Movie_Recommender_App

### アプリケーションの起動手順

1. 必要なパッケージをインストール：
    
    ```bash
    pip install -r requirements.txt
    ```
    
2. Flaskサーバーを起動：
    
    ```bash
    python app.py
    ```
    
3. ブラウザで `http://127.0.0.1:5000` にアクセスし、アプリケーションを確認します。

### ディレクトリ構成

```
movie_recommender_app/
├── app.py                      # Flaskアプリのエントリーポイント
│   ├── ルーティング設定       # URLと関数のマッピング
│   ├── リクエスト処理         # ユーザーからのリクエストを受け取る
│   └── レスポンス生成         # JSON形式で結果を返す
│
├── movie_recommender.py        # 映画推薦ロジックを含むクラス
│   ├── データのエンコード     # One-hot encodingを実行
│   ├── コサイン類似度計算     # 映画間の類似度を計算
│   ├── 映画の追加             # ユーザーの入力データを追加
│   └── 推薦機能               # 類似映画を推薦するメソッド
│
├── requirements.txt            # 必要なPythonパッケージのリスト
│
├── static/                     # 静的ファイルを格納するディレクトリ
│   ├── app.js                  # フロントエンドのJavaScriptコード
│
└── templates/                  # HTMLテンプレートを格納するディレクトリ
    └── index.html              # ユーザーがアクセスするメインHTMLファイル
```
