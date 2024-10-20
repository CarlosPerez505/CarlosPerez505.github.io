import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '@/components/Data.jsx'; // Adjust the import path as needed

const BlogPost = () => {
    const { id } = useParams(); // Get the id from the URL parameter
    const post = posts.find((post) => post.id === parseInt(id, 10)); // Find the post by id, convert id to integer

    if (!post) {
        return <p className="text-center text-gray-500">Post Not Found</p>; // If no post matches, display this message
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-100 mb-4">{post.title}</h1>
            {/* Display Timestamp */}
            <p className="text-sm text-gray-400 mb-6">Posted on: {post.timestamp}</p>
            {/* Blog Content */}
            <div className="prose prose-invert text-gray-300">{post.content}</div>
        </div>
    );
};

export default BlogPost;
