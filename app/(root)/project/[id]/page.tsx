import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {

  const id = (await params).id;
  const { data: project } = await sanityFetch({ query: PROJECT_QUERY, params });

  return (
    <>
        <h1>This is the project details: {PROJECT_QUERY}</h1>
        <h1></h1>
    </>
  )
}

export default Page;