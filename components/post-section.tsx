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
  
  interface Image {
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
    Images?: Image;
  }
  
  interface Props {
    posts: {
      data: Post[];
    };
  }
  
  export function PostSection({ posts }: Props) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">POST</h1>
        <ul className="space-y-6">
          {posts.data.slice(0, 3).map((post) => {
            const { Title, Description, Images } = post;
  
            // Menangani gambar
            const imageUrl =
              Images?.formats?.thumbnail?.url || Images?.url || null;
  
            return (
              <li key={post.id} className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-2xl font-semibold mb-2">{Title}</h2>
  
                {imageUrl ? (
                  <img
                    src={`${process.env.STRAPI_BASE_URL}${imageUrl}`}
                    alt={Images?.name || "Post Image"}
                    className="w-full h-auto rounded-md mb-4"
                  />
                ) : (
                  <div className="text-gray-500 mb-4">No image available</div>
                )}
  
                <p className="text-gray-700">{Description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  