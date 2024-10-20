import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
import { createBlogPost, updateBlogPost, deleteBlogPost } from "./blog.controller.ts";

const hostname = "localhost";
const port = 8000;

const routes = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/blogs") {
        return await createBlogPost(req);
    } else if (req.method === "PUT" && url.pathname === "/blogs") {
        return await updateBlogPost(req);
    } else if (req.method === "DELETE" && url.pathname === "/blogs") {
        return await deleteBlogPost(req);
    }

    return new Response("Not Found", { status: 404 });
};

console.log(`Server running at http://${hostname}:${port}/`);
serve(routes, { hostname, port });
