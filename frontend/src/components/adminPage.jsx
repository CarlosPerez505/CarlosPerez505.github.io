import React, { useState, useEffect } from 'react';

const AdminPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([]);

    // Function to create a new blog post
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                alert("Blog post created successfully");
                setTitle("");
                setContent("");
                fetchBlogs(); // Refresh the list of blogs after adding
            } else {
                const errorData = await response.json();
                alert(`Failed to create blog post: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while creating the blog post.");
        }
    };

    // Function to fetch all blog posts
    const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:8000/blogs");
            const data = await response.json();
            if (response.ok) {
                setBlogs(data.blogs);
            } else {
                alert(`Failed to fetch blog posts: ${data.message}`);
            }
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    // Load blog posts on component mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="admin-page">
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>

            <h2>Existing Blog Posts</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        {/* Update and delete buttons can be added here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
