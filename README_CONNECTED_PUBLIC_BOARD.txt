POKET PARTY 公開掲示板モード

この版は、日記を端末内保存ではなくSupabaseへ保存する公開掲示板モードです。

公開に必要なこと:
1. Supabaseでプロジェクトを作る
2. supabase-schema.sql をSQL Editorで実行する
3. supabase-config.js の url と publishableKey を自分の値に置き換える
4. Netlify等へアップロードする

画像を公開表示するために、Storage bucket diary-images は public=true に設定されます。
SQL実行後も画像が出ない場合は、Supabase > Storage > diary-images の Public bucket がONか確認してください。

管理者削除:
supabase-schema.sql 内の CHANGE_THIS_ADMIN_PIN を自分だけのPINに変更してから実行してください。
