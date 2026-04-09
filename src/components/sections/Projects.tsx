import { ExternalLink, Github, Code, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ecommerceImg from '@/assets/project-ecommerce.webp';
import taskManagerImg from '@/assets/project-task-manager.webp';
import financeImg from '@/assets/project-finance.webp';
import aiLmsImg from '@/assets/project-ai-lms.webp';
import dappImg from '@/assets/project-dapp.webp';
import corporateAppImg from '@/assets/project-corporate-app.webp';

// Placeholder data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A fully featured e-commerce application built with Next.js, Stripe, and Sanity CMS.',
        tags: ['Next.js', 'Stripe', 'Sanity'],
        image: ecommerceImg,
        link: '#',
        github: '#',
        category: 'Web Application'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates using Socket.io and React.',
        tags: ['React', 'Socket.io', 'Node.js'],
        image: taskManagerImg,
        link: '#',
        github: '#',
        category: 'Productivity'
    },
    {
        title: 'Finance Dashboard',
        description: 'Data visualization dashboard for personal finance tracking using Recharts.',
        tags: ['React', 'D3', 'Recharts'],
        image: financeImg,
        link: '#',
        github: '#',
        category: 'Analytics'
    },
    {
        title: 'AI-Powered LMS',
        description: 'Adaptive Learning Management System using AI to personalize course paths for students.',
        tags: ['Python', 'TensorFlow', 'React'],
        image: aiLmsImg,
        link: '#',
        github: '#',
        category: 'Education'
    },
    {
        title: 'DeFi dApp Mobile',
        description: 'Decentralized Finance mobile application for crypto wallet management and token swaps.',
        tags: ['React Native', 'Solidity', 'Web3.js'],
        image: dappImg,
        link: '#',
        github: '#',
        category: 'Blockchain'
    },
    {
        title: 'Corporate Employee App',
        description: 'Internal enterprise mobile application for employee management and secure communications.',
        tags: ['Kotlin', 'Spring Boot', 'Secure'],
        image: corporateAppImg,
        link: '#',
        github: '#',
        category: 'Enterprise'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-background relative">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-secondary/50 rounded-full mb-4">
                        MY WORK
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work showcasing expertise across full-stack development,
                        mobile applications, and AI-powered solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Project category badge */}
                            {/* <div className="absolute top-4 left-4 z-10">
                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
                                    {project.category}
                                </span>
                            </div> */}

                            {/* Project image with enhanced overlay */}
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
                                        <span className="font-semibold">Project Preview</span>
                                    </div>
                                )}

                                {/* Enhanced overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            className="p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                            title="View Code"
                                        >
                                            <Code className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={project.link}
                                            className="p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                            title="View Live"
                                        >
                                            <Eye className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground inline-block"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Button
                        variant="outline"
                        className="gap-2 px-8 py-6 text-base border-2 hover:border-primary transition-all duration-300 group"
                        onClick={() => window.open('https://github.com/Base29', '_blank')}
                    >
                        <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                        View More on GitHub
                        <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;