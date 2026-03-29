 "use client"; // Ye zaroori hai!
  import { useRouter } from 'next/navigation';

  export default function AddTaskBtn() {
    const router = useRouter();
    return (
      <button 
        onClick={() => { alert('Fake Task Added!'); router.refresh(); }}
        className="bg-black text-white px-4 py-2 rounded"
      >
        + New Task
      </button>
    );
  }