## タスク管理アプリです

いわゆるタスク管理アプリです。ただデータを記録、出力するだけではオリジナリティーにかけるので自分なりに欲しい機能を加えました。
## 使い方
```
git clone https://github.com/akiyamajyunta/taskManagement.git
cd ./task management
npm i run 
npm run dev
```

[http://localhost:5173](http://localhost:5173)にアクセス

# 画面の説明

画面は上部のヘッダー部、ヘッダー部にある[🖊]をクリックして表示させる入力フォー
ム部、記入したタスクを表示すTime-Line、ヘッダー部にあるハンバーガーメニューバー
にて表示させるサイドメニューがあります。なお、time=lineにタスクカードが表示される際は文章は隠れて表示されますのでカード下部に有ります↓ボタンを押して表示させてください

# タスクの記入

左上の🖊をクリックして入力フォームを表示させます。タイトルや文章を記述し、入力フォーム左下のボタンを押すことでtime-lineに表示させることができます。また、他のタスクアプリにはない機能がございます
1.アイコン
    一目でタスクの意味が解るようにアイコンを付けました。
2．星
    一目でそのタスクの重要度、緊急度を示せるようにしました
3.カレンダー、日時
    一目でそのタスクの期間、日時が解るようにしました
4.助詞
    例えばXX時にXX駅……と記述してもその時間にXX駅に行くのかその時間に発車するのか良く分からなくなる事があります。そこで「まで」「から」の助詞を付け加える事でそのような誤爆を防ぐ事が出来ます
# タスクカードの操作
1.左下の＜＞ボタンでタスクを移動させることができます
2.ゴミ箱ボタンでタスクを削除するが出来ます
# 並び替え
タスクカードを並び変えれます。
    1.50音順
    2.カレンダー順
    3.優先(星の数)順
# オプション
左上にあるハンバーガーメニューを開くことでオプションを開けます。機能として
    １．テーマカラーの選択
    ２．time-Line状にあるタスクカードのサイズ変更
    ２．全データの消去
# 振り返り

 ## よかったところ
1.今回、localStlageで保管するといった新たな試みを試したが、結果としてデータの出し入れや保管などうまく出来た事
2.valueを配列で持たせることで保管を行ったので、配列操作などの勉強になった
## 改善したいところ
1.localStlageの上書きでは上書きしないファイルとするファイルを分けて、再度pushするといった二度手間な操作を行っており、どうやらmapを使えばそれらをしなくても良いっぽい事が解ったものの、いまいち理解出ずに現状の手法を取った事
2.ドロップで並べ替えを行いたかった。
3.やはり、HTMLとCSSが敵であること 