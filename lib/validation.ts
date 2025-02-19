import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(3, "Your title must contain at least 3 characters.").max(100, "Your title must not exceed 100 characters."),
    description: z.string().min(20, "Your description must contain at least 20 characters.").max(500, "Your description must not exceed 500 characters."),
    category: z.string().min(3, "Your category must contain at least 3 characters.").max(20, "Your category must not exceed 20 characters."),
    link: z.string().url("Please provide a valid URL.").refine(async (url) => {
        try {
            const res = await fetch(url, { method: "HEAD" });
            const contentType = res.headers.get("content-type");

            return contentType?.startsWith("image/");
        }
        catch {
            return false;
        }
    }, { message: "Please provide a URL for a valid image." }),
    pitch: z.string().min(10, "Your pitch must contain at least 10 characters."),
});