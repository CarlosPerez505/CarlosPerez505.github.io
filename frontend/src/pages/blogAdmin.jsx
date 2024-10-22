import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';

const AdminPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({ title: '', content: '', media_url: '', media_type: 'none' });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch blogs from API
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    // Create a new blog
    const createBlog = async () => {
        try {
            await axios.post('http://localhost:5000/blogs', formData);
            setFormData({ title: '', content: '', media_url: '', media_type: 'none' });
            fetchBlogs();
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    // Update an existing blog
    const updateBlog = async (id) => {
        try {
            await axios.put(`http://localhost:5000/blogs/${id}`, formData);
            setFormData({ title: '', content: '', media_url: '', media_type: 'none' });
            setIsEditing(false);
            fetchBlogs();
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    // Delete a blog
    const deleteBlog = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/blogs/${id}`);
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    // Handle form changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Set up edit form
    const handleEdit = (blog) => {
        setFormData(blog);
        setIsEditing(true);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md mb-8">
                <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Blog' : 'Create Blog'}</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="media_url"
                    placeholder="Media URL"
                    value={formData.media_url}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="media_type"
                    placeholder="Media Type (image, video, none)"
                    value={formData.media_type}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={isEditing ? () => updateBlog(formData.id) : createBlog}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    {isEditing ? 'Update Blog' : 'Create Blog'}
                </button>
            </div>

            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Blogs List</h2>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded mb-4">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Title</th>
                            <th className="p-2">Content</th>
                            <th className="p-2">Media URL</th>
                            <th className="p-2">Media Type</th>
                            <th className="p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id} className="border-b">
                                <td className="p-2">{blog.title}</td>
                                <td className="p-2">{blog.content}</td>
                                <td className="p-2">{blog.media_url}</td>
                                <td className="p-2">{blog.media_type}</td>
                                <td className="p-2">
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition"
                                            >
                                                Edit
                                            </button>
                                        </Dialog.Trigger>

                                        <Dialog.Portal>
                                            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
                                            <Dialog.Content className="fixed top-[50%] left-[50%] w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg">
                                                <Dialog.Title>Edit Blog</Dialog.Title>
                                                <Dialog.Close asChild>
                                                    <button
                                                        className="absolute top-2 right-2"
                                                        onClick={() => setIsEditing(false)}
                                                    >
                                                        X
                                                    </button>
                                                </Dialog.Close>
                                                <Dialog.Description>
                                                    Edit the blog details and save your changes.
                                                </Dialog.Description>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>

                                    <button
                                        onClick={() => deleteBlog(blog.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
