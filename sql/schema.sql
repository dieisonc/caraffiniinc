create extension if not exists "pgcrypto";
create table if not exists roles (key text primary key, label text not null);
insert into roles(key,label) values
  ('industria','Indústria'),('lojista','Lojista'),('vendedor','Vendedor'),
  ('projetista','Projetista'),('gerente_producao','Gerente de Produção'),('gerente_loja','Gerente de Loja')
on conflict (key) do nothing;
create table if not exists stores (id uuid primary key default gen_random_uuid(), name text not null, cnpj text, city text, created_at timestamptz default now());
create table if not exists users_profiles (user_id uuid primary key references auth.users(id) on delete cascade, full_name text, role text references roles(key) default 'lojista', store_id uuid references stores(id), created_at timestamptz default now());
create table if not exists materials (id uuid primary key default gen_random_uuid(), code text unique not null, description text not null, unit text not null, cost numeric default 0, created_at timestamptz default now());
create table if not exists inventory (id uuid primary key default gen_random_uuid(), material_id uuid references materials(id) on delete cascade, quantity numeric not null default 0, min_threshold numeric default 0, updated_at timestamptz default now());
create table if not exists orders (id uuid primary key default gen_random_uuid(), store_id uuid references stores(id), created_by uuid references auth.users(id), customer_name text, status text default 'Aguardando Revisão', payment_status text default 'Pendente', delivery_date date, created_at timestamptz default now());
create table if not exists order_items (id uuid primary key default gen_random_uuid(), order_id uuid references orders(id) on delete cascade, material_id uuid references materials(id), description text, unit text, quantity numeric, source text default 'pdf');
create table if not exists notifications (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade, type text, payload jsonb, read boolean default false, created_at timestamptz default now());
