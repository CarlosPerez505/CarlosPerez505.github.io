import express from 'express';
import { createBlog, deleteBlog, getBlogById, getBlogs } from '../controllers/blogController.mjs';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);

export default router;
