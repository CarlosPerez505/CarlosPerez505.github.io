// blog.controller.ts
import { ensureDir } from "https://deno.land/std@0.153.0/fs/mod.ts";

// Setup directories for blogs
await ensureDir("./uploads/blogs");

/**
 * Handles creating a new blog post.
 * @param req - The incoming HTTP request.
 * @returns A promise resolving to an HTTP response.
 */
export async function createBlogPost(req: Request): Promise<Response> {
    try {
        const contentType = req.headers.get("content-type") || "";

        // Validate the content type
        if (contentType !== "application/json") {
            return new Response(
                JSON.stringify({ success: false, message: "Invalid content type." }),
                { status: 400 }
            );
        }

        // Parse the JSON body
        const body = await req.json();
        const { title, content } = body;

        // Validate the incoming data
        if (!title || !content) {
            return new Response(
                JSON.stringify({ success: false, message: "Incomplete blog details." }),
                { status: 400 }
            );
        }

        // Generate a filename and save the blog post
        const filename: string = `${globalThis.crypto.randomUUID()}.json`;
        const filepath: string = `./uploads/blogs/${filename}`;
        await Deno.writeTextFile(filepath, JSON.stringify({ title, content }));

        return new Response(
            JSON.stringify({ success: true, message: "Blog post uploaded successfully.", url: filepath }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: `Error processing blog: ${(error as Error).message}` }),
            { status: 500 }
        );
    }
}
