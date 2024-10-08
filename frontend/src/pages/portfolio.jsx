import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { Code, Monitor, Server } from 'lucide-react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import Hero from "../components/Hero.jsx";
import Contact from "@/components/Contact.jsx";
import AboutMe from "@/components/AboutMe.jsx";
import PricingPlan from "@/components/PricingPlan.jsx";
import GetStartedForm from "@/components/GetStartedForm";
import FreeWebSitePromo from "@/components/FreeWebSitePromo.jsx";


// Lazy load Skills component (optional to optimize bundle)
const Skills = lazy(() => import('@/components/Skills'));

const Portfolio = () => {
    const [theme, setTheme] = useState('dark');
    const [filter, setFilter] = useState('All');
    const [showGetStartedForm, setShowGetStartedForm] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleGetStartedClick = () => {
        setShowGetStartedForm(true);
    };

    const closeGetStartedForm = () => {
        setShowGetStartedForm(false);
    };

    const projects = [
        {
            title: 'CarlosPerez505.github.io',
            description: 'Config files for my GitHub profile',
            category: 'frontend',
            details: [
                'Public GitHub repository',
                'Built with JavaScript and Tailwind CSS',
                'Showcases various projects and code snippets'
            ],
            tags: ['JavaScript', 'GitHub Pages', 'Portfolio'],
            link: 'https://github.com/CarlosPerez505/CarlosPerez505.github.io'
        },
        {
            title: 'RedPalmProject',
            description: 'Project to raise awareness about missing Indigenous peoples.',
            category: 'fullstack',
            details: [
                'Private repository focused on solving a serious issue',
                'Built with JavaScript, Node.js, and Express',
                'Database handling and API integrations for real-time data'
            ],
            tags: ['Node.js', 'Express', 'Database'],
            link: 'https://github.com/CarlosPerez505/RedPalmProject'
        },
        {
            title: 'nextjs-portfolio',
            description: 'A portfolio built using Next.js.',
            category: 'frontend',
            details: [
                'Static site generated with Next.js',
                'Uses Tailwind CSS for styling',
                'Responsive design with server-side rendering'
            ],
            tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
            link: 'https://github.com/CarlosPerez505/nextjs-portfolio'
        },
        {
            title: 'cp3develops.tech',
            description: 'Home page for cp3develops.tech.',
            category: 'frontend',
            details: [
                'Uses modern design principles',
                'Deployed on GitHub Pages',
                'Responsive design'
            ],
            tags: ['Next.js', 'Tailwind CSS'],
            link: 'https://github.com/CarlosPerez505/cp3develops.tech'
        },
        {
            title: 'portfolio-next.js',
            description: 'Portfolio home page for cp3develops.tech.',
            category: 'frontend',
            details: [
                'Built with Next.js and Tailwind CSS',
                'Responsive layout',
                'Shows portfolio projects'
            ],
            tags: ['Next.js', 'Tailwind CSS'],
            link: 'https://github.com/CarlosPerez505/portfolio-next.js'
        },
        {
            title: 'redpalm-next',
            description: 'Next.js project for Red Palm.',
            category: 'fullstack',
            details: [
                'Built with Next.js and Tailwind CSS',
                'Includes user authentication',
                'Responsive layout'
            ],
            tags: ['Next.js', 'Tailwind CSS', 'Node.js'],
            link: 'https://github.com/CarlosPerez505/redpalm-next'
        }
    ];

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

    return (
        <div
            className={`min-h-screen w-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>

            <Hero/>
            <AboutMe/>{/* Full-width hero section */}
            <div className="container mx-auto max-w-7xl p-6">

                <section className="mb-20"> {/* Adjusted margin-bottom for more spacing */}
                    <h2 className="text-3xl font-semibold mb-20 text-center">Featured
                        Projects</h2> {/* Adjusted bottom margin */}
                    {/* Tabs for filtering projects */}
                    <div className="flex justify-center">
                        <Tabs defaultValue="All" onValueChange={(value) => setFilter(value)}>
                            <TabsList className="flex justify-center flex-wrap gap-6 mb-12 overflow-hidden">
                                {/* Adjusted margin-bottom and space between tabs */}
                                {categories.map(category => (
                                    <TabsTrigger key={category} value={category} className="px-6 py-3 rounded-md">
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {/* Project Grid goes inside each TabsContent */}
                            <TabsContent value="All">
                                <ProjectGrid projects={projects} theme={theme} />
                            </TabsContent>
                            <TabsContent value="Full Stack">
                                <ProjectGrid projects={projects.filter(p => p.category === 'fullstack')} theme={theme} />
                            </TabsContent>
                            <TabsContent value="Frontend">
                                <ProjectGrid projects={projects.filter(p => p.category === 'frontend')} theme={theme} />
                            </TabsContent>
                            <TabsContent value="Backend">
                                <ProjectGrid projects={projects.filter(p => p.category === 'backend')} theme={theme} />
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                <section className="mb-20"> {/* Added margin-bottom for spacing */}
                    <Suspense fallback={<div>Loading skills...</div>}>
                        <Skills theme={theme}/>
                    </Suspense>
                </section>
                <section className="mb-20"> {/* Added margin-bottom for spacing */}
                    <PricingPlan />
                    <FreeWebSitePromo/>
                </section>

                <section className="mb-20">
                    <button
                        onClick={handleGetStartedClick}
                        id="get-started-button"
                        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition"
                    >
                        Get Started
                    </button>
                    {showGetStartedForm && <GetStartedForm onClose={closeGetStartedForm} />}
                </section>

                <section className="mb-20">
                    <Contact />
                </section>

            </div>

            <footer className="mt-20 text-center text-opacity-60 w-full"> {/* Adjusted top margin for spacing */}
                <p>&copy; 2024 Carlos Perez. All rights reserved.</p>
            </footer>
        </div>
    );
};

const ProjectGrid = ({projects, theme}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4"> {/* Added padding to prevent overflow */}
            {/* Adjusted gap for better spacing between projects */}
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
                >
                    <Card
                        className={`max-w-lg mx-auto ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50 shadow-lg' : 'bg-white bg-opacity-50 shadow-md'} border-none transform hover:scale-105 transition-transform duration-300`}
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center justify-center">
                                {project.category === 'frontend' && <Monitor size={20} className="mr-2 text-green-400" />}
                                {project.category === 'backend' && <Server size={20} className="mr-2 text-blue-400" />}
                                {project.category === 'fullstack' && <Code size={20} className="mr-2 text-purple-400" />}
                                {project.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{project.description}</CardDescription>
                            <ul className="list-disc list-inside mt-4 text-sm"> {/* Adjusted margin-top for spacing */}
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-4 mt-6 justify-center"> {/* Adjusted gap for more space between badges */}
                                {project.tags.map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="bg-violet-500 text-white">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="mt-6">
                            <a href={project.link} className="text-violet-400 hover:text-violet-300 transition-colors">View Project</a>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default Portfolio;
