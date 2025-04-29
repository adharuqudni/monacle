"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
}

interface ImageData {
  id: number;
  documentId: string;
  name: string;
  url: string;
  formats: ImageFormats;
}

interface Post {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Images?: ImageData;
}

interface PostSectionProps {
  posts: {
    data: Post[];
  };
}

export function PostSection({ posts }: PostSectionProps) {
  const [displayedPosts, setDisplayedPosts] = useState(3); // Start with 3 posts
  const [isExpanded, setIsExpanded] = useState(false); // State to track if posts are expanded or collapsed

  const truncateDescription = (description: string, wordLimit: number): string => {
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return `${words.slice(0, wordLimit).join(" ")}...`;
  };

  const togglePosts = () => {
    if (isExpanded) {
      setDisplayedPosts(3); // Reset to 3 posts if expanded
    } else {
      setDisplayedPosts(posts.data.length); // Show all posts if not expanded
    }
    setIsExpanded(!isExpanded); // Toggle the state
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
            const { id, Title, Description, Images } = post;

            // Check if images exist and fetch URL or default image
            const imageUrl =
              Images?.formats?.thumbnail?.url ||
              Images?.formats?.medium?.url ||
              Images?.formats?.small?.url ||
              Images?.url ||
              "/path/to/default-image.jpg"; // Fallback to default image if no image available

            const fullImageUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imageUrl}`;
            const truncatedDescription = truncateDescription(Description, 20);

            return (
              <div
                key={id}
                className="bg-black/30 border border-purple-500 text-white rounded-lg shadow-md backdrop-blur-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="relative h-32 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${fullImageUrl})`,
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
                    {Title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {truncatedDescription}
                  </p>
                  <Link
                    href={`/posts/${id}`}
                    className="inline-block text-xs font-medium text-purple-300 hover:text-purple-100 transition-colors"
                  >
                    Read more →
                  </Link>
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
