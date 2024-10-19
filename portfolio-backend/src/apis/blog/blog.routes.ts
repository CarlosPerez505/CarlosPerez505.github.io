// blog.route.ts
import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
import { createBlogPost } from "./blog.controller.ts";  // Use named import here

const routes = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/blogs") {
        return await createBlogPost(req);
    }

    return new Response("Not Found", { status: 404 });
};

// Start the server and listen on port 8000
await serve(routes, { port: 8000 });
