import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { posts } from '@/components/Data.jsx'; // Assuming posts data is stored in Data.jsx

const BlogList = () => {
    const cardRefs = useRef([]); // Ref for storing multiple card references

    useEffect(() => {
        if (cardRefs.current.length > 0) {
            // Loop through each card and apply animation if the card ref exists
            cardRefs.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(
                        card,
                        {
                            x: index % 2 === 0 ? -600 : 600, // Start further off-screen
                            opacity: 0,
                            scale: 0.7, // Slightly scaled down
                        },
                        {
                            x: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1.2,
                            ease: 'elastic.out(1, 0.6)', // Bounce effect
                            delay: index * 0.2, // Staggered entrance for each card
                        }
                    );
                }
            });
        }
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        ref={(el) => {
                            if (el) {
                                cardRefs.current[index] = el;
                            }
                        }} // Attach each card to the ref
                        className="bg-gray-900 text-white p-6 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                        <p className="mb-4 text-gray-300">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-600 font-semibold">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
