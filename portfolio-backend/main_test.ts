import { handler } from "./main.ts";
import { serve } from "https://deno.land/std@0.153.0/http/server.ts";

Deno.test("server starts successfully", async () => {
  console.log("Starting test server on http://localhost:8001");
  await serve(handler, { port: 8001 });
});

