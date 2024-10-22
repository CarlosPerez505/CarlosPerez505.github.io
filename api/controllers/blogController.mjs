import db from '../../config/db.mjs';

export const getBlogs = async (req, res) => {
    try {
        const [blogs] = await db.query('SELECT * FROM blogs');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
    }
};
