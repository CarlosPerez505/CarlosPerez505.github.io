// blog.route.ts
import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { createBlogPost } from "./blog.controller.ts";

const router = new Router();

// Route to create a new blog post
router.post("/blogs", async (context) => {
    const request = context.request;
    const response = await createBlogPost(request);
    context.response.status = response.status;
    context.response.body = await response.json();
});

export default router;
