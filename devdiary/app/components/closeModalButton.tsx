 "use client";
  import { useRouter } from 'next/navigation';
  export default function CloseModalBtn() {
    const router = useRouter();
    return <button onClick={() => router.back()} className="absolute top-2 right-2 text-red-500 font-bold">X</button>;
  }