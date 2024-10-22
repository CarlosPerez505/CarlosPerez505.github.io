import React, { useState, useEffect } from 'react';
import { PlusCircle, Pencil, Trash2, X, Image, Video, FileText, Eye } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

// Base components
const Input = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`w-full rounded-lg border-0 bg-gray-800/50 px-4 py-3 text-gray-100 ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus-visible:outline-none ${className}`}
            {...props}
        />
    );
});

const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={`w-full rounded-lg border-0 bg-gray-800/50 px-4 py-3 text-gray-100 ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus-visible:outline-none ${className}`}
            {...props}
        />
    );
});

const Button = React.forwardRef(({ className = '', variant = 'default', children, ...props }, ref) => {
    const variants = {
        default: 'bg-blue-500 hover:bg-blue-600 text-white',
        outline: 'bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-300',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        success: 'bg-green-500 hover:bg-green-600 text-white',
    };

    return (
        <button
            ref={ref}
            className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});

const AdminPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        media_url: '',
        media_type: 'none',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://localhost:5000/blogs');
            if (!response.ok) throw new Error('Failed to fetch blogs');
            const data = await response.json();
            setBlogs(data || []); // Set empty array if data is null or undefined
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const createBlog = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to create blog');

            const newBlog = await response.json();

            // Add the newly created blog to the state
            setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
            resetForm();
        } catch (error) {
            console.error('Error creating blog:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            media_url: '',
            media_type: 'none',
        });
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value || '', // Ensure empty string instead of null/undefined
        }));
    };

    const handleEdit = (blog) => {
        setFormData({
            id: blog.id,
            title: blog.title || '',
            content: blog.content || '',
            media_url: blog.media_url || '',
            media_type: blog.media_type || 'none',
        });
        setIsEditing(true);
    };

    const deleteBlog = async (id) => {
        setBlogs((prev) => prev.filter((blog) => blog.id !== id));
        try {
            await fetch(`http://localhost:5000/blogs/${id}`, { method: 'DELETE' });
        } catch (error) {
            console.error('Error deleting blog:', error);
            fetchBlogs();
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Form section */}
            <div className="mx-auto max-w-3xl p-4">
                <div className="mb-8 rounded-xl bg-gray-800/50 p-4 ring-1 ring-gray-700">
                    <div className="mb-6 flex items-center gap-2">
                        {isEditing ? (
                            <Pencil className="h-5 w-5 text-blue-500" />
                        ) : (
                            <PlusCircle className="h-5 w-5 text-green-500" />
                        )}
                        <h2 className="text-xl font-semibold">
                            {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <Input
                            name="title"
                            placeholder="Enter blog title"
                            value={formData.title}
                            onChange={handleChange}
                        />

                        <Textarea
                            name="content"
                            placeholder="Write your blog content here..."
                            value={formData.content}
                            onChange={handleChange}
                            className="min-h-[150px]"
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Input
                                name="media_url"
                                placeholder="Media URL"
                                value={formData.media_url}
                                onChange={handleChange}
                            />

                            <select
                                name="media_type"
                                value={formData.media_type}
                                onChange={handleChange}
                                className="w-full rounded-lg border-0 bg-gray-800/50 px-4 py-3 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="none">No Media</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                        </div>

                        <div className="flex justify-end gap-2">
                            {isEditing && (
                                <Button variant="outline" onClick={resetForm} disabled={isLoading}>
                                    Cancel
                                </Button>
                            )}
                            <Button
                                variant={isEditing ? 'default' : 'success'}
                                onClick={isEditing ? () => updateBlog(formData.id) : createBlog}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : isEditing ? 'Update Post' : 'Create Post'}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Blog Posts List */}
                <div className="rounded-xl bg-gray-800/50 p-4 ring-1 ring-gray-700">
                    <h2 className="mb-4 text-xl font-semibold">Blog Posts</h2>
                    <div className="space-y-4">
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <div key={blog?.id} className="rounded-lg bg-gray-800/50 p-4 ring-1 ring-gray-700">
                                    <div className="mb-2 flex items-start justify-between gap-4">
                                        <h3 className="font-medium text-gray-100">{blog?.title || 'Untitled'}</h3>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(blog)}
                                                className="p-2"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => deleteBlog(blog.id)}
                                                className="p-2"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-sm text-gray-400">
                                        {blog?.content?.length > 100
                                            ? `${blog.content.substring(0, 100)}...`
                                            : blog.content || 'No content available.'}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">No blogs available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
