import { tasks } from '@/lib/data';
  import { notFound } from 'next/navigation';
  import CloseModalBtn from '@/components/closeModalButton'; // Niche banayenge

  export default async function ModalTaskPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const task = tasks.find(t => t.id === id);
    if (!task) return notFound();

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
          <CloseModalBtn />
          <h1 className="text-2xl font-bold">inside modal test page{task.title} (MODAL VIEW)</h1>
          <p className="mt-2 text-gray-600">{task.desc}</p>
        </div>
      </div>
    );
  }