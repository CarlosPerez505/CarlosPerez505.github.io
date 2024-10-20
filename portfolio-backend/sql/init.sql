-- Create a new database and user in MySQL

-- Connect to MySQL as the root user:
-- Run the following command in your terminal to connect to MySQL:
-- $ mysql -u root -p

-- Create a new database:
CREATE DATABASE ${DB_NAME};

-- Create a new user for the application with a password:
CREATE USER '${DB_USERNAME}'@'${DB_HOSTNAME}' IDENTIFIED BY '${DB_PASSWORD}';

-- Grant the necessary privileges to the new user on the new database:
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USERNAME}'@'${DB_HOSTNAME}';

-- Apply the changes to ensure the privileges are updated:
FLUSH PRIVILEGES;

-- Use the new database:
USE ${DB_NAME};

-- Create an example table for blog posts:
CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create a new table for media uploads:
CREATE TABLE media_uploads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    filepath VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for storing users:
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create a table for storing sessions for user authentication:
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Confirm the setup by showing all tables:
SHOW TABLES;
