
// import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecommerceImg from '@/assets/project-ecommerce.png';
import taskManagerImg from '@/assets/project-task-manager.png';
import financeImg from '@/assets/project-finance.png';
import aiLmsImg from '@/assets/project-ai-lms.png';
import dappImg from '@/assets/project-dapp.png';
import corporateAppImg from '@/assets/project-corporate-app.jpg';

// Placeholder data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A fully featured e-commerce application built with Next.js, Stripe, and Sanity CMS.',
        tags: ['Next.js', 'Stripe', 'Sanity'],
        image: ecommerceImg,
        link: '#',
        github: '#'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates using Socket.io and React.',
        tags: ['React', 'Socket.io', 'Node.js'],
        image: taskManagerImg,
        link: '#',
        github: '#'
    },
    {
        title: 'Finance Dashboard',
        description: 'Data visualization dashboard for personal finance tracking using Recharts.',
        tags: ['React', 'D3', 'Recharts'],
        image: financeImg,
        link: '#',
        github: '#'
    },
    {
        title: 'AI-Powered LMS',
        description: 'Adaptive Learning Management System using AI to personalize course paths for students.',
        tags: ['Python', 'TensorFlow', 'React'],
        image: aiLmsImg,
        link: '#',
        github: '#'
    },
    {
        title: 'DeFi dApp Mobile',
        description: 'Decentralized Finance mobile application for crypto wallet management and token swaps.',
        tags: ['React Native', 'Solidity', 'Web3.js'],
        image: dappImg,
        link: '#',
        github: '#'
    },
    {
        title: 'Corporate Employee App',
        description: 'Internal enterprise mobile application for employee management and secure communications.',
        tags: ['Kotlin', 'Spring Boot', 'Secure'],
        image: corporateAppImg, // Placeholder used: false
        link: '#', // Internal, maybe no link
        github: '#' // Private
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
                                        <span className="font-semibold">Project Preview</span>
                                    </div>
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-2 bg-background rounded-full hover:text-primary transition-colors" title="View Code">
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href={project.link} className="p-2 bg-background rounded-full hover:text-primary transition-colors" title="View Live">
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/Base29', '_blank')}>
                        <Github className="h-4 w-4" />
                        View More on GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
