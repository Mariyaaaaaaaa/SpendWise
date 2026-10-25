create table expenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  category text,
  amount numeric,
  date date default now()
);

create table budgets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  category text,
  limit numeric
);

create table goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  description text,
  target_amount numeric,
  deadline date
);
