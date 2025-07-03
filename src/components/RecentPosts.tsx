import PostItem from "./PostItem";

export type PostMetadata = {
  node: {
    id: string;
    title: string;
    brief: string;
    slug: string;
    publishedAt: Date;
    coverImage: {
      url: string;
    };
  };
};

const query = `
{
  publication(host: "blog.alyssaholland.me") {
    posts(first: 5) {
      edges {
        node {
          id
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;
const response = await fetch("https://gql.hashnode.com", {
  //request options
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: query }),
});

const json = await response.json();

export default function RecentPosts() {
  const posts: PostMetadata[] = json.data.publication.posts.edges;
  console.log("recent: ", posts);
  return (
    <section>
      <h2 className="font-aspekta mb-3 text-2xl font-[650]">
        Recent Blog Posts
      </h2>
      {posts.map(({ node }) => (
        <PostItem
          key={node.id}
          slug={node.slug}
          coverImage={node.coverImage}
          title={node.title}
          brief={node.brief}
          publishedAt={node.publishedAt}
        />
      ))}
    </section>
  );
}
