-- POKET PARTY public diary board schema / admin delete / visitor count / image diary
-- Supabase SQL Editor に貼って実行してください。
-- 重要: 下の CHANGE_THIS_ADMIN_PIN を、自分だけが知っている管理者PINに変えてから実行してください。

create extension if not exists pgcrypto;

create table if not exists public.mood_submissions (
  id uuid primary key default gen_random_uuid(),
  body_index integer,
  result_title text,
  lucky_color text,
  result_body text,
  result_comment text,
  created_at timestamptz not null default now()
);

create table if not exists public.diary_entries (
  id uuid primary key default gen_random_uuid(),
  title text,
  body text,
  image_url text,
  image_path text,
  created_at timestamptz not null default now()
);

alter table public.diary_entries add column if not exists image_url text;
alter table public.diary_entries add column if not exists image_path text;

create table if not exists public.visitor_logs (
  id uuid primary key default gen_random_uuid(),
  visitor_key text unique not null,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists public.admin_settings (
  id boolean primary key default true,
  password_hash text not null,
  updated_at timestamptz not null default now(),
  constraint admin_settings_single_row check (id = true)
);

-- ★ここを変更: CHANGE_THIS_ADMIN_PIN を好きな管理者PINへ変えてRun
insert into public.admin_settings (id, password_hash)
values (true, crypt('CHANGE_THIS_ADMIN_PIN', gen_salt('bf')))
on conflict (id) do update
set password_hash = excluded.password_hash,
    updated_at = now();

alter table public.mood_submissions enable row level security;
alter table public.diary_entries enable row level security;
alter table public.visitor_logs enable row level security;
alter table public.admin_settings enable row level security;

drop policy if exists "Anyone can insert mood submissions" on public.mood_submissions;
create policy "Anyone can insert mood submissions"
on public.mood_submissions
for insert
to anon
with check (true);

drop policy if exists "Anyone can read mood submissions count" on public.mood_submissions;
create policy "Anyone can read mood submissions count"
on public.mood_submissions
for select
to anon
using (true);

drop policy if exists "Anyone can insert diary entries" on public.diary_entries;
create policy "Anyone can insert diary entries"
on public.diary_entries
for insert
to anon
with check (
  length(coalesce(title, '')) <= 60
  and length(coalesce(body, '')) <= 280
  and (image_url is null or length(image_url) <= 2000)
  and (image_path is null or length(image_path) <= 500)
);

drop policy if exists "Anyone can read diary entries" on public.diary_entries;
create policy "Anyone can read diary entries"
on public.diary_entries
for select
to anon
using (true);

drop policy if exists "Anyone can insert visitor logs" on public.visitor_logs;
create policy "Anyone can insert visitor logs"
on public.visitor_logs
for insert
to anon
with check (true);

drop policy if exists "Anyone can upsert own visitor logs" on public.visitor_logs;
create policy "Anyone can upsert own visitor logs"
on public.visitor_logs
for update
to anon
using (true)
with check (true);

drop policy if exists "Anyone can read visitor count" on public.visitor_logs;
create policy "Anyone can read visitor count"
on public.visitor_logs
for select
to anon
using (true);

-- 画像アップロード用バケット
insert into storage.buckets (id, name, public)
values ('diary-images', 'diary-images', true)
on conflict (id) do update set public = true;

-- 公開状態を強制確認：画像bucketをpublicにする
update storage.buckets
set public = true
where id = 'diary-images';

-- Supabaseの環境差対策：public roleにも読み取りを許可
-- 既にanonポリシーが効く環境ではこのままでOKです。


drop policy if exists "Anyone can read diary images" on storage.objects;
create policy "Anyone can read diary images"
on storage.objects
for select
to anon
using (bucket_id = 'diary-images');

drop policy if exists "Anyone can upload diary images" on storage.objects;
create policy "Anyone can upload diary images"
on storage.objects
for insert
to anon
with check (bucket_id = 'diary-images');

-- 最新10件だけ残す
create or replace function public.keep_latest_10_diary_entries()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.diary_entries
  where id in (
    select id
    from public.diary_entries
    order by created_at desc
    offset 10
  );
  return null;
end;
$$;

drop trigger if exists trg_keep_latest_10_diary_entries on public.diary_entries;
create trigger trg_keep_latest_10_diary_entries
after insert on public.diary_entries
for each statement
execute function public.keep_latest_10_diary_entries();

-- 管理者PINでだけ削除できるRPC
create or replace function public.admin_delete_diary_entry(entry_id uuid, admin_pin text)
returns boolean
language plpgsql
security definer
set search_path = public, storage
as $$
declare
  stored_hash text;
  target_path text;
begin
  select password_hash into stored_hash
  from public.admin_settings
  where id = true;

  if stored_hash is null or stored_hash <> crypt(admin_pin, stored_hash) then
    return false;
  end if;

  select image_path into target_path
  from public.diary_entries
  where id = entry_id;

  delete from public.diary_entries
  where id = entry_id;

  if target_path is not null and length(target_path) > 0 then
    delete from storage.objects
    where bucket_id = 'diary-images'
      and name = target_path;
  end if;

  return true;
end;
$$;

grant execute on function public.admin_delete_diary_entry(uuid, text) to anon;
