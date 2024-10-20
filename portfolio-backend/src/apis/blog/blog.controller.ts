import { client } from "../../config/db.ts"

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

        // Insert the blog post into the database
        const result = await client.execute(
            "INSERT INTO blog_posts (title, content) VALUES (?, ?)",
            [title, content]
        );

        return new Response(
            JSON.stringify({ success: true, message: "Blog post created successfully.", id: result.lastInsertId }),
            { status: 201 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: `Error processing blog: ${(error as Error).message}` }),
            { status: 500 }
        );
    }
}

/**
 * Handles updating an existing blog post.
 * @param req - The incoming HTTP request.
 * @returns A promise resolving to an HTTP response.
 */
export async function updateBlogPost(req: Request): Promise<Response> {
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
        const { id, title, content } = body;

        // Validate the incoming data
        if (!id || !title || !content) {
            return new Response(
                JSON.stringify({ success: false, message: "Incomplete blog details." }),
                { status: 400 }
            );
        }

        // Update the blog post in the database
        await client.execute(
            "UPDATE blog_posts SET title = ?, content = ? WHERE id = ?",
            [title, content, id]
        );

        return new Response(
            JSON.stringify({ success: true, message: "Blog post updated successfully." }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: `Error updating blog: ${(error as Error).message}` }),
            { status: 500 }
        );
    }
}

/**
 * Handles deleting an existing blog post.
 * @param req - The incoming HTTP request.
 * @returns A promise resolving to an HTTP response.
 */
export async function deleteBlogPost(req: Request): Promise<Response> {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return new Response(
                JSON.stringify({ success: false, message: "Blog post ID is required." }),
                { status: 400 }
            );
        }

        // Delete the blog post from the database
        await client.execute(
            "DELETE FROM blog_posts WHERE id = ?",
            [Number(id)]
        );

        return new Response(
            JSON.stringify({ success: true, message: "Blog post deleted successfully." }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: `Error deleting blog: ${(error as Error).message}` }),
            { status: 500 }
        );
    }
}
