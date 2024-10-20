import React from 'react';
import { posts } from '@/components/Data.jsx'; // Adjust the import path as needed

const BlogPost = ({ post }) => {
    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-100 mb-6">{post.title}</h1>
            <div className="prose prose-invert text-gray-300">{post.content}</div>
        </div>
    );
};

const Blog = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-100">Blog</h1>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Blog;
