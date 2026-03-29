import { tasks } from '@/lib/data';
  import { notFound } from 'next/navigation';

  export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const task = tasks.find(t => t.id === id);
    
    if (!task) return notFound(); // Agar galat ID dali toh 404

    return (
      <div className="p-10 bg-blue-50 rounded">
        <h1 className="text-3xl font-bold">{task.title}</h1>
        <p className="mt-4">{task.desc}</p>
        <span className="bg-blue-200 px-2 py-1 mt-4 inline-block">{task.status}</span>
      </div>
    );
  }