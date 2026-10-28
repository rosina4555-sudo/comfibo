-- Run this once in Supabase > SQL Editor.
-- Adds the editable programme settings to the stats row created by supabase-schema.sql.

alter table public.initiative_stats
  add column if not exists deadline text not null default '2026-11-25T23:59:00';

-- Sanity check: you should see one row.
select id, total_spots, accepted_count, deadline from public.initiative_stats;
