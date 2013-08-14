
notice: This repository uses Japanese.


概要
======
当リポジトリでは、パン屋IENAのHPを作成しています
  
  
断り
======
パン屋IENAは実在する店舗であり、当HPは作成の許可を得ています。  
当リポジトリ内のソース・デザイン・CSSの再利用は構いませんが、  
パン屋IENAの固有情報の再利用は禁止します。



構成
======
当HPは以下の構成から成り立ちます  
index.html  
　　-about.inc  
　　-menu.inc  など幾つかのincludeファイル  



特徴
======
##１・高メンテナンス性
当HPは見た目上、以下の２タイプのページが存在します。  
　・TOPページ　（初回時表示するページ）  
　・コンテンツページ（コンテンツを表示するページ）  

しかし実際は表示ファイルはHTML1ファイルのみであり、  
コンテンツはファイルをインクルードする形で表示されます（画面遷移は行いません）。

このため、index.html, main.css を修正するだけで、全てのコンテンツページが更新され、高いメンテナンス性があります。


##２・コンテンツ更新が楽
インクルードされるファイルは通常のテキスト形式で記述でき、改行や空白もそのまま反映されます。  
サイト管理者は、通常のコンテンツ更新はテキスト形式のファイルを更新するだけでよく、コンテンツ更新にわずらわしさがありません。  


その他
======
改善案などありましたらPRにてお願いします。お気軽にどうぞ。
