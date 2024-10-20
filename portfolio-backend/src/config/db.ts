import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { Client } from "https://deno.land/x/mysql@v2.10.0/mod.ts";

// Load environment variables
const env = config();

const client = await new Client().connect({
    hostname: env.DB_HOSTNAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    db: env.DB_NAME,
    port: Number(env.DB_PORT),
});

export { client };
