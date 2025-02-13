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
    <section className="tertiary_container !min-h-[230px]">
        <p className="tag">{ formatDate(post?._createdAt) }</p>
        <h1 className="heading">{ post.title }</h1>
        <p className="sub-heading !max-w-5xl">{ post.description }</p>
    </section>

    <section className="section_container">
      <img
        src={post.image}
        alt={`${post.title}'s representative image`}
        className="w-full h-auto rounded-xl"
      />
    </section>
    </>
  )
}

export default Page;