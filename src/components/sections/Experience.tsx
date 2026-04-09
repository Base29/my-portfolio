import { Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <section id="experience" className="py-20 bg-background relative">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-secondary/50 rounded-full mb-4">
                        CAREER JOURNEY
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-0 md:pl-24 group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg hidden md:block"></div>

                                    <div className="relative p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                                    <Building className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                                    <p className="text-lg text-muted-foreground font-medium mt-1">{exp.company}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                {exp.period}
                                            </div>
                                        </div>
                                        <p className="mt-4 text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;