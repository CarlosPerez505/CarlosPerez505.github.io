import { Router } from 'express';
import { getBlogs } from '../controllers/blogController.mjs';

const router = Router();

// Define routes
router.get('/', getBlogs);

export default router;
