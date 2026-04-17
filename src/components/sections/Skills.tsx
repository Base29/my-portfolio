import { motion } from 'framer-motion';
import { Code, Layers, Wrench, Zap } from 'lucide-react';

const skills = {
    Languages: { items: ['Python', 'JavaScript', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'HTML/CSS', 'Solidity'], icon: Code },
    'Frameworks & Libraries': { items: ['ReactJS', 'React Native', 'Flutter', 'NextJS', 'VueJs', 'NodeJS', 'Django', 'FastAPI', 'Laravel', 'Tailwind CSS', 'Shadcn UI', 'LangChain'], icon: Layers },
    'Tools & DevOps': { items: ['Git', 'Docker', 'AWS', 'Linux', 'Vite', 'PostgreSQL', 'MySQL', 'MongoDB'], icon: Wrench },
    'Blockchain & AI': { items: ['Ethereum', 'Smart Contracts', 'LLMs', 'Prompt Engineering'], icon: Zap },
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-background relative">
            {/* Decorative elements */}
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-secondary/50 rounded-full mb-4">
                        EXPERTISE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {Object.entries(skills).map(([category, { items, icon: Icon }], index) => (
                        <motion.div
                            key={category}
                            className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 mx-auto">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-center text-foreground">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {items.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm font-medium text-foreground"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.1)', borderColor: 'hsl(var(--primary))', color: 'hsl(var(--primary))' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;