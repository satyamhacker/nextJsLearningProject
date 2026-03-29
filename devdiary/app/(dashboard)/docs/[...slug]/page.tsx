 export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    return (
      <div>
        <h1 className="text-2xl font-bold">Documentation Reader</h1>
        <p className="mt-2 text-gray-600">You are reading: <b>{slug.join(' > ')}</b></p>
      </div>
    );
  }