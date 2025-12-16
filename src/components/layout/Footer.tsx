
// import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/40 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-muted-foreground">
                            &copy; {currentYear} Faisal Hussain. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Base29" className="text-muted-foreground hover:text-primary transition-colors" target='_blank'>
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/faisal-hussain-28384518/" className="text-muted-foreground hover:text-primary transition-colors" target='_blank'>
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:me@imfaisal.pro" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
