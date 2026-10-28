-- ============================================================
-- Comfibo — Supabase schema
-- Paste this whole file into Supabase > SQL Editor > Run
-- ============================================================

-- 1. Contact form submissions ---------------------------------

create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  business   text,
  message    text not null,
  created_at timestamptz not null default now()
);

-- 2. Initiative applications ----------------------------------

create table if not exists public.initiative_applications (
  id           uuid primary key default gen_random_uuid(),
  business     text not null,
  contact      text not null,
  reach        text not null,
  industry     text not null,
  current_site text,
  goal         text not null,
  needs        text not null,
  consent      boolean not null default false,
  status       text not null default 'pending'
               check (status in ('pending', 'accepted', 'rejected')),
  created_at   timestamptz not null default now()
);

-- 3. Single-row stats table -----------------------------------

create table if not exists public.initiative_stats (
  id             int primary key default 1 check (id = 1),
  total_spots    int not null default 5,
  accepted_count int not null default 0,
  deadline       text not null default '2026-11-25T23:59:00'
);

insert into public.initiative_stats (id, total_spots, deadline)
values (1, 5, '2026-11-25T23:59:00')
on conflict (id) do nothing;

-- 4. Row Level Security ---------------------------------------

alter table public.contact_messages        enable row level security;
alter table public.initiative_applications enable row level security;
alter table public.initiative_stats        enable row level security;

-- Anonymous visitors may INSERT forms...
drop policy if exists "anon_insert_contact" on public.contact_messages;
create policy "anon_insert_contact"
  on public.contact_messages
  for insert
  to anon
  with check (true);

drop policy if exists "anon_insert_application" on public.initiative_applications;
create policy "anon_insert_application"
  on public.initiative_applications
  for insert
  to anon
  with check (true);

-- ...but may NOT read submissions (phone numbers, emails stay private).
-- They may only read the single stats row (the spot count).

drop policy if exists "anon_read_stats" on public.initiative_stats;
create policy "anon_read_stats"
  on public.initiative_stats
  for select
  to anon
  using (true);

-- 5. Keep accepted_count in step with status changes -----------
-- Flip an application's status to 'accepted' in the dashboard
-- and the public spot counter updates itself.

create or replace function public.recount_accepted()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.initiative_stats
  set accepted_count = (
    select count(*) from public.initiative_applications where status = 'accepted'
  )
  where id = 1;
  return null;
end;
$$;

drop trigger if exists trg_recount_accepted on public.initiative_applications;
create trigger trg_recount_accepted
  after insert or update of status or delete
  on public.initiative_applications
  for each statement
  execute function public.recount_accepted();
