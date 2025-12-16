
// import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
    {
        title: 'Principal Software Developer',
        company: 'Seven Eight Six Media Group',
        period: 'Jul 2023 - Nov 2025',
        description: 'Leading technical architecture and development teams to deliver enterprise-grade solutions. Overseeing code quality and strategic technical decision-making.'
    },
    {
        title: 'Senior Full Stack Developer',
        company: 'Seven Eight Six Media Group',
        period: 'Jun 2021 - Jul 2023',
        description: 'Developed robust full-stack applications using modern technologies. Collaborated with cross-functional teams to efficient product delivery in the UK market.'
    },
    {
        title: 'Lead Full Stack Developer',
        company: 'Blonk Group',
        period: 'Nov 2019 - Jul 2020',
        description: 'Led full-stack development initiatives in Singapore. Drove architectural decisions and mentored the development team.'
    },
    {
        title: 'Senior Mobile Application Developer',
        company: "Eat'n",
        period: 'Jun 2018 - Mar 2020',
        description: 'Spearheaded mobile application development in Mountain View, CA. Focused on performance optimization and enhanced user experience.'
    },
    {
        title: 'Full Stack Developer',
        company: 'Base29',
        period: 'Sep 2009 - Jun 2019',
        description: 'Delivered comprehensive end-to-end web solutions for diverse clients using PHP and modern web technologies. Managed lifecycle of multiple web projects.'
    },
    {
        title: 'CEO',
        company: 'Base29',
        period: 'Jun 2008 - Jun 2019',
        description: 'Founded and managed a web development and designing agency. Oversaw business operations, client relations, and project delivery.'
    },
    {
        title: 'Head of I.T. Department',
        company: 'Shuttle Advertising',
        period: 'Jan 2008 - Oct 2009',
        description: 'Managed IT infrastructure and software development initiatives. Streamlined departmental operations and technology adoption.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                                            <Briefcase className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                            <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit shrink-0">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="lg:hidden flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {exp.period}
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
