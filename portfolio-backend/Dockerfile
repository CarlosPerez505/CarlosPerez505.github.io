# Use the official Deno image
FROM denoland/deno:alpine

# Set the working directory
WORKDIR /app

# Copy all files
COPY . .

# Install necessary dependencies
RUN deno cache src/*.ts

# Expose the port that the server will run on
EXPOSE 8000

# Run the Deno server
CMD ["run", "--allow-net", "--allow-read", "--allow-env", "src/app.ts"]
