import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Project } from "@/sanity/types";

export type ProjectCardType = Omit<Project, "author"> & { author?: Author}

const ProjectCard = ({ post }: { post: ProjectCardType }) => {
  const { _createdAt, views, author, title, category, _id, image, description } = post;

  return (
    <li className="project-card group">
        <div className="flex-between">
            <p className="project-card_date">
                {formatDate(_createdAt)}
            </p>

            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-grey" />
                <span className="text-16-medium">{views}</span>
            </div>
        </div>

        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${author?._id}`}>
                    <p className="text-16-medium line-clamp-1">
                        {author?.name}
                    </p>
                </Link>

                <Link href={`/project/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
            </div>

            <Link href={`/user/${author?._id}`}>
                <Image src={author?.image} alt="avatar placeholder" width={48} height={48} className="rounded-full" />
            </Link>
        </div>

        <Link href={`/project/${_id}`}>
            <p className="project-card_desc">{description}</p>
            <img src={image} alt={`${title} project image`} className="project-card_img" />
        </Link>

        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category?.toLowerCase()}`}>
                <p className="text-16-medium">{category}</p>
            </Link>

            <Button className="project-card_btn" asChild>
                <Link href={`/project/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default ProjectCard;