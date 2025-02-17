import { auth } from "@/auth";
import ProjectForm from "@/components/ProjectForm";
import { redirect } from "next/navigation";

const Create = async () => {

  const session = await auth();

  if (!session) redirect("/"); //TODO: Notification Toast

  return (
    <>
      <section className="tertiary_container !min-h-[230px]">
        <h1 className="heading">Pitch Your Project</h1>
      </section>

      <ProjectForm />

    </>
  )
}

export default Create;