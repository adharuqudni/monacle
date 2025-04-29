// components/post-section.tsx
"use client";

import { useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

interface PostSectionProps {
  posts: {
    data: Post[];
  };
}

export function PostSection({ posts }: PostSectionProps) {
  const [displayedPosts, setDisplayedPosts] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateDescription = (description: string, wordLimit: number): string => {
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return `${words.slice(0, wordLimit).join(" ")}...`;
  };

  const togglePosts = () => {
    if (isExpanded) {
      setDisplayedPosts(3);
    } else {
      setDisplayedPosts(posts.data.length);
    }
    setIsExpanded(!isExpanded);
  };

  if (!posts.data || posts.data.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Latest Posts
        </h1>
        <p className="text-center text-gray-400">
          No posts available at the moment.
        </p>
      </div>
    );
  }

  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url('/images/bg/1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag mb-4">Latest News</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.data.slice(0, displayedPosts).map((post) => {
            const imageUrl = post.image || "/path/to/default-image.jpg";
            const truncatedDescription = truncateDescription(post.description, 20);

            return (
              <div
                key={post.id}
                className="bg-black/30 border border-purple-500 text-white rounded-lg shadow-md backdrop-blur-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="relative h-32 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >
                  {!imageUrl && (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <span>No image available</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {truncatedDescription}
                  </p>
                  {/* <Link
                    href={`/posts/${post.id}`}
                    className="inline-block text-xs font-medium text-purple-300 hover:text-purple-100 transition-colors"
                  >
                    Read more →
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={togglePosts}
            className="px-6 py-2 border-2 border-purple-500 text-purple-500 rounded-md hover:border-blue-500 hover:bg-transparent hover:text-blue-500 transition-colors"
          >
            {isExpanded ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
}
