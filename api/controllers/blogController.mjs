import db from '../../config/db.mjs';

// Get all blogs
export const getBlogs = async (req, res) => {
    try {
        const [blogs] = await db.query('SELECT * FROM blogs');
        if (blogs.length === 0) {
            return res.status(404).json({ message: 'No blogs found.' });
        }
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
    }
};

// Create a new blog with media
export const createBlog = async (req, res) => {
    const { title, content, media_url, media_type } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required.' });
    }

    const allowedMediaTypes = ['image', 'video', 'none'];
    if (media_type && !allowedMediaTypes.includes(media_type)) {
        return res.status(400).json({ error: 'Invalid media type.' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO blogs (title, content, media_url, media_type) VALUES (?, ?, ?, ?)',
            [title, content, media_url || null, media_type || 'none']
        );

        res.status(201).json({
            message: 'Blog created successfully',
            blogId: result.insertId,
        });
    } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
    }
};
