import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(PROJECT_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      {/* Heading Section */}
      <section className="tertiary_container !min-h-[230px] mb-0 p-0"> {/* Decreased margin */}
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      {/* Image Section */}
      <section className="section_container mt-[-20px]">
        <img
          src={post.image}
          alt={`${post.title}'s representative image`}
          className="w-full rounded-xl object-cover h-[calc(100vh-250px)] md:h-[calc(100vh-300px)] image-no-min" 
        />
      </section>
    </>
  );
};

export default Page;
