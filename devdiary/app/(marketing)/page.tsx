 import Link from 'next/link';
  export default function LandingPage() {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">DevDiary</h1>
        <p>Your ultimate developer task manager.</p>
        <Link href="/tasks" className="text-blue-500 underline mt-4 block">Go to Dashboard</Link>
      </div>
    );
  }