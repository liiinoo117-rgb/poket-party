POKET PARTY / 公開掲示板 + 管理者削除 + 画像投稿 + 訪問者数

できること:
- みんなが日記を書ける
- みんなが日記を読める
- 日記に画像を添付できる
- 訪問者数を表示できる
- 管理者PINを知っている人だけが日記を削除できる
- 最新10件だけ残る

設定手順:
1. SupabaseでProjectを作る
2. SQL Editorを開く
3. supabase-schema.sql を開く
4. CHANGE_THIS_ADMIN_PIN を、自分だけが知っているPINに変更する
   例: CHANGE_THIS_ADMIN_PIN → my-secret-117
5. SQLを全部貼ってRunする
6. Project URL と Publishable key をコピーする
7. supabase-config.js に貼る
8. フォルダごとNetlifyにアップロードする

管理者削除の使い方:
- サイトの日記エリアにある admin を押す
- 設定した管理者PINを入力する
- delete ボタンが表示される
- 消したい日記の delete を押す

注意:
- service_role key / secret key は絶対にHTMLやJSに入れないでください。
- 管理者PINはSQL内でハッシュ化して保存されます。
- 画像投稿は公開バケットに保存されるため、投稿された画像は公開されます。
- 完全な荒らし対策には、投稿承認制やログイン制がさらに必要です。


画像が表示されない時:
- Supabase の SQL Editor で supabase-schema.sql を再実行してください。
- 特に Storage bucket の diary-images が作られている必要があります。
- 今回の修正版では、画像は投稿前に軽く圧縮してからアップロードします。
- Supabase未設定でも、端末内プレビューでは画像が表示されます。ただし全員共有にはなりません。
