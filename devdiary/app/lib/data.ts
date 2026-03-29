// src/lib/data.ts
export interface Task {
  id: string;
  title: string;
  desc: string;
  status: 'Done' | 'Pending'; // restrict to only these values
}

export const tasks: Task[] = [
  { id: '1', title: 'Setup Turbopack', desc: 'Make Next.js fast', status: 'Done' },
  { id: '2', title: 'Learn Intercepting Routes', desc: 'Build Instagram modal', status: 'Pending' }
];