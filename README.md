# legacy
Japanese Industrial Heritages

legacy/
├─ index.html                 # トップ（全国地図・一覧）…言語自動判定＋トグル
├─ assets/
│   ├─ style.css
│   ├─ app.js                # 言語判定/トグル、Mapの言語制御
│   └─ i18n/
│       ├─ ja.json           # 日本語文言
│       └─ en.json           # 英語文言
├─ data/
│   └─ heritage.json         # 各遺産のメタ（スラッグ/名称/座標/OGPなど）
├─ images/
│   ├─ google-maps/
│   │   ├─ japan.png         # 全国地図の静的Fallback（任意）
│   │   ├─ osarizawa.png     # 尾去沢のFallback（任意）
│   │   └─ matsukawa.png     # 松川のFallback（任意）
│   ├─ osarizawa-mine/
│   │   ├─ heritage-map.png  # イラスト/マップ画像
│   │   └─ hero.jpg          # 任意のヒーロー画像
│   └─ matsukawa-spring/
│       ├─ heritage-map.png
│       └─ hero.jpg
└─ sites/
    ├─ osarizawa-mine/
    │   └─ index.html        # 尾去沢の個別ページ（イラスト＋拡大地図）
    └─ matsukawa-spring/
        └─ index.html
