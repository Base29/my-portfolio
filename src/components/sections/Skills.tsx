
// import React from 'react';

const skills = {
    Languages: ['Python', 'JavaScript', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'HTML/CSS', 'Solidity'],
    'Frameworks & Libraries': ['ReactJS', 'NextJS', 'VueJs', 'NodeJS', 'Django', 'FastAPI', 'Laravel', 'Tailwind CSS', 'Shadcn UI', 'LangChain'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'Linux', 'Vite', 'PostgreSQL', 'MySQL', 'MongoDB'],
    'Blockchain & AI': ['Ethereum', 'Smart Contracts', 'LLMs', 'Prompt Engineering'],
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                            <h3 className="text-xl font-bold mb-6 text-center text-primary">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
