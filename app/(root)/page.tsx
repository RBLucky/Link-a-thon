import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }>}) {

  const query = (await searchParams).query;

  return (
    <>
      <section className="tertiary_container">
        <h1 className="heading">Pitch Your Project, <br /> Connect With Talent</h1>

        <p className="sub-heading !max-w-3xl">Showcase Ideas, Join a Project, and Get Noticed in Hackathons</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
