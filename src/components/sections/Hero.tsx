
// import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming I'll create this or simulate it. Wait, I don't have Button component yet.

// I need to create the Button component first if I use it.
// Or I can use standard HTML button with shadcn classes for now.
// "clean yet modern" -> Shadcn Button is nice.
// I'll simulate a simple Button component inline or create basic ui/button.tsx
// for now, let's stick to standard tailwind classes to avoid dependency on missing components 
// unless I implement them.
// Actually, creating a simple generic Button component is easy and good practice.

import heroBg from '@/assets/hero-bg.webp';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-50"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 font-mono">
                    <span className="block text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">&lt;Hi, I'm /&gt;</span>
                    Faisal Hussain
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                        Solutions Architect
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono">
                    Crafting exceptional digital experiences with 15 years of expertise in Python, JavaScript, PHP, Swift, and Kotlin.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                        <a href="#projects">
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="hidden">
                        <a href="/resume.pdf">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
