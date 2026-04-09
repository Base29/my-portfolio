import { motion } from 'framer-motion';
import aboutMeImg from '@/assets/about-me.webp';
import { Code, Zap, Users, Brain } from 'lucide-react';

const About = () => {
    const skills = [
        { icon: Code, label: 'Full-Stack Development', description: 'Expertise across frontend, backend, and mobile platforms' },
        { icon: Zap, label: 'Performance Optimization', description: 'Building lightning-fast, scalable applications' },
        { icon: Brain, label: 'AI Integration', description: 'Implementing cutting-edge ML and LLM solutions' },
        { icon: Users, label: 'Team Leadership', description: 'Leading cross-functional development teams' },
    ];

    return (
        <section id="about" className="py-20 bg-background relative">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-secondary/50 rounded-full mb-4">
                        WHO I AM
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-2xl border border-border/50">
                                <img
                                    src={aboutMeImg}
                                    alt="Faisal Hussain"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20" />

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                15+ Years
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With over 15 years of industry-leading experience, I am a seasoned software architect and developer specializing in building scalable, efficient, and user-centric applications.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                My deep technical proficiency spans the full stack, including Python (Django, FastAPI), JavaScript (ReactJS, NextJS, VueJs, NodeJS), PHP (Laravel), Swift, and Kotlin.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Crucially, I now drive innovation by developing cutting-edge AI applications leveraging Large Language Models (LLMs) and the LangChain framework. Whether I'm architecting a robust, high-performance backend or crafting a pixel-perfect, intelligent frontend, I apply a detail-oriented approach to solve complex problems and deliver products that are ahead of the curve.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-xl border border-border"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <Icon className="h-8 w-8 text-primary mb-2" />
                                        <h3 className="font-bold text-foreground">{skill.label}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;