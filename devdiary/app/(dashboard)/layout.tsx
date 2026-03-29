export default function DashboardLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-100 p-5 border-r">Sidebar Links</aside>
        <main className="flex-1 p-5">
           {children} {/* Ye tera normal page hai */}
           {modal}    {/* Ye tera modal yahan render hoga */}
        </main>
      </div>
    );
  }