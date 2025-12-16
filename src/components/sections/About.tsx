
// import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-xl border border-border/50">
                            <img
                                src="/src/assets/about-me.jpg"
                                alt="Faisal Hussain"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20" />
                    </div>

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
                </div>
            </div>
        </section>
    );
};

export default About;
