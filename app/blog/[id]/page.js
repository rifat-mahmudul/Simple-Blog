import Link from "next/link";

export default async function BlogPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link 
        href="/" 
        className="inline-block mb-6 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all duration-300"
      >
        ← Back to Home
      </Link>
      <p className="text-2xl font-bold leading-tight ">Id: {post.id}</p>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
        {post.title}
      </h1>
      <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
        {post.body}
      </p>
    </div>
  );
}
