import Link from 'next/link';

// Fetch data directly in the server component
export default async function blog() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <li 
            key={post.id} 
            className="p-4 border rounded shadow flex flex-col justify-between h-full min-h-[120px]"
          >
              <span>{post.title}</span>
              <Link href={`/blog/${post.id}`} className="text-blue-500 text-lg font-semibold">
                <a>
                <button 
                  className="btn bg-green-300 text-gray-600 mt-2 px-4 py-2 rounded"
                  aria-label={`Read more about ${post.title}`}
                >
                  Click to read more...
                </button>
                </a>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
