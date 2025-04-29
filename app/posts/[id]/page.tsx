import { notFound } from "next/navigation";

// Komponen untuk memformat tanggal di server (server-side formatting)
function DateRenderer({ date }: { date: string }) {
  const formatted = new Date(date).toLocaleDateString();
  return <span>{formatted}</span>;
}

interface PostDetailProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/posts/${id}?populate=Images`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch post data", res.statusText);
    return null;
  }

  const json = await res.json();
  const data = json.data;

  if (!data) return null;

  return {
    id: data.id,
    title: data.attributes.Title,
    description: data.attributes.Description,
    createdAt: data.attributes.createdAt,
    imageUrl: data.attributes.Images?.data?.attributes?.url || null,
  };
}

// Generate Static Params for Static Site Generation (SSG)
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/posts`);
  const data = await res.json();

  const postIds = data.data.map((post: { id: string }) => post.id);

  return postIds.map((id: string) => ({
    id,
  }));
}

export default async function PostDetailPage({ params }: PostDetailProps) {
  const post = await getPost(params.id);

  if (!post) {
    notFound(); // Halaman 404 jika post tidak ditemukan
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        {post.imageUrl ? (
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${post.imageUrl}`}
            alt={post.title}
            className="rounded mb-6"
          />
        ) : (
          <div className="text-center text-gray-400">No Image Available</div>
        )}
        <p className="text-gray-300 leading-relaxed">{post.description}</p>
        <p className="mt-6 text-sm text-gray-500">
          Published on <DateRenderer date={post.createdAt} />
        </p>
      </div>
    </div>
  );
}
