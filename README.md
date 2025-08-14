# legacy/ ディレクトリ構成（説明付き）

legacy/
├─ index.html
│   └─ トップページ。
│       全国地図（Google Maps埋め込み）と遺産一覧カードを表示。
│       言語はブラウザ設定で初期化され、切替ボタンで変更可能。
│
├─ assets/
│   ├─ style.css
│   │   └─ 全ページ共通のスタイルシート。
│   │       ヘッダー／フッター／カード一覧／マップ枠の装飾などを定義。
│   │
│   ├─ app.js
│   │   └─ 言語切替やGoogle Maps埋め込みURL生成、
│   │       data/heritage.jsonの読み込み、一覧カード生成を担当。
│   │
│   └─ i18n/
│       ├─ ja.json
│       │   └─ 日本語テキスト（ナビ、見出し、説明文）。
│       └─ en.json
│           └─ 英語テキスト（ナビ、見出し、説明文）。
│
├─ data/
│   └─ heritage.json
│       └─ 各遺産のデータ（スラッグ、日英名称、緯度経度、ズームレベル、
│           サムネイル画像パス、個別ページパス）。
│
├─ images/
│   ├─ google-maps/
│   │   ├─ japan.png
│   │   ├─ osarizawa.png
│   │   └─ matsukawa.png
│   │       └─ Google Mapsが読み込めない場合の代替画像（任意）。
│   │
│   ├─ osarizawa-mine/
│   │   ├─ heritage-map.png
│   │   │   └─ 尾去沢鉱山のイラストや地図画像。
│   │   └─ _picture.png` … 実際の写真をアップロードするまでの仮置きファイル（リマインド用）
│   │
│   └─ matsukawa-spring/
│       │ heritage-map.png
│       │   └─ 松川地熱発電所のイラストや地図画像。
│       └─ _picture.png` … 実際の写真をアップロードするまでの仮置きファイル（リマインド用）
│
└─ sites/
├─ osarizawa-mine/
│   └─ index.html
│       └─ 尾去沢鉱山の個別ページ。
│           ヘッダー、ヒーロー画像（heritage-map.png）、
│           拡大地図（Google Maps埋め込み）を表示。
│
└─ matsukawa-spring/
└─ index.html
└─ 松川地熱発電所の個別ページ。
ヘッダー、ヒーロー画像（heritage-map.png）、
拡大地図（Google Maps埋め込み）を表示。

