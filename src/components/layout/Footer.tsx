import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Base29', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/faisal-hussain-28384518/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:me@imfaisal.pro', label: 'Email' },
    ];

    return (
        <footer className="bg-background border-t border-border/40 py-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Code className="h-8 w-8 text-primary mr-3" />
                        <span className="text-xl font-bold gradient-text">Faisal Hussain</span>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-muted-foreground">
                            &copy; {currentYear} Faisal Hussain. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground/60 mt-1">
                            Crafting exceptional digital experiences
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex justify-center md:justify-end space-x-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="sr-only">{link.label}</span>
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;