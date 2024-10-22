import { Router } from 'express';
import {createBlog, getBlogs} from '../controllers/blogController.mjs';

const router = Router();

// Define routes
router.get('/', getBlogs);
router.post('/', createBlog);

export default router;
