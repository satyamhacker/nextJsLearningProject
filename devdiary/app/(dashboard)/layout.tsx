export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-100 p-5 border-r">Sidebar Links (Tasks, Docs)</aside>
        <main className="flex-1 p-5">{children}</main>
      </div>
    );
  }