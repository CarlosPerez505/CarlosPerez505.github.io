// Oak & FileServer setup for multimedia and blog uploads
import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
import { ensureDir } from "https://deno.land/std@0.153.0/fs/mod.ts";

// Setup directories for media and blog content
await ensureDir("./uploads/media");
await ensureDir("./uploads/blogs");

// Middleware to verify authorization before uploading

type MiddlewareResult = Response | null;

const authMiddleware: (req: Request) => MiddlewareResult = (req: Request): MiddlewareResult => {
    // Type annotation for req parameter and explicit return type for clarity
    const authHeader: string | null = req.headers.get("Authorization");

    if (authHeader !== "Bearer my_secret_password") {
        return new Response(JSON.stringify({ success: false, message: "Unauthorized access." }), { status: 401 });
    }
    return null;
};





// Handler function for the server
export const handler = async (req: Request): Promise<Response> => {
    const requestUrl = new URL(req.url);
    let response: MiddlewareResult;

    // Apply authorization for specific routes
    if (requestUrl.pathname.startsWith("/upload/")) {
        response = authMiddleware(req);
        if (response) return response;
    }

    if (req.method === "POST" && requestUrl.pathname === "/upload/media") {
        const contentType = req.headers.get("content-type") || "";

        if (!contentType.includes("multipart/form-data")) {
            return new Response(JSON.stringify({ success: false, message: "Invalid content type." }), { status: 400 });
        }

        try {
            const body = await req.formData();
            const file = body.get("file");

            if (file instanceof File) {
                const filename: string = `${crypto.randomUUID()}.${file.name.split('.').pop()}`;
                const filepath: string = `./uploads/media/${filename}`;
                await Deno.writeFile(filepath, new Uint8Array(await file.arrayBuffer()));

                return new Response(JSON.stringify({ success: true, message: "File uploaded successfully.", url: filepath }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ success: false, message: "Incomplete file details." }), { status: 400 });
            }
        } catch (error) {
            return new Response(JSON.stringify({ success: false, message: `Error processing file: ${(error as Error).message}` }), { status: 500 });
        }
    }

    return new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
};

// Starting the server
console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
