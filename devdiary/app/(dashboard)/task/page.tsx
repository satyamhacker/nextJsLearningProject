import { tasks } from '@/lib/data';
  import Link from 'next/link';
  import AddTaskBtn from '@/components/addTaskButton'; // Agle step mein banayenge

  export default function TasksPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
        <AddTaskBtn />
        <div className="mt-4 grid gap-2">
          {tasks.map(task => (
            <Link key={task.id} href={`/task/${task.id}`} className="p-4 border rounded hover:bg-gray-50">
              {task.title} - <span className="text-sm text-gray-500">{task.status}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }