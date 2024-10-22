# Use an official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the application source code
COPY . .

# Expose the application's port
EXPOSE 5000

# Start the application with nodemon
CMD ["npx", "nodemon", "server.mjs"]
