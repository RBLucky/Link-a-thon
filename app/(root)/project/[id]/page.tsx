import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image src={post.author.image}
                alt={`${post.author.username}'s avatar`}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
