import { Client } from "https://deno.land/x/mysql@v2.10.0/mod.ts";

const client = await new Client().connect({
    hostname: "localhost",
    username: "your_username",
    db: "your_database_name",
    password: "your_password",
    port: 3306, // Default MySQL port
});

// Export the client to be used in other files
export { client };
