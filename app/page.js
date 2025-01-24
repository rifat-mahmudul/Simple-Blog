import Link from 'next/link';

// Fetch data directly in the server component
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Blogs</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <li 
            key={post.id} 
            className="p-4 border rounded shadow flex flex-col justify-between h-full min-h-[120px]"
          >
            <span className='font-bold text-xl'>{post.title}</span>
            <Link href={`/blog/${post.id}`} >
                <button className="bg-blue-500 text-lg font-semibold py-2 px-5 rounded-lg mt-2">Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
