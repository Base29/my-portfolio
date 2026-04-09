import { ArrowRight, Download, Code, Server, Smartphone, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.webp';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/90 dark:from-background/90 dark:via-background/70 dark:to-background/95" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container relative z-10 px-4 text-center">
        {/* Animated entrance for main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
              Solutions Architect & Full Stack Developer
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
            <motion.span
              className="block text-xl md:text-2xl lg:text-3xl mb-4 text-primary font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              &lt;HelloWorld /&gt;
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Faisal
            </motion.span>

            <motion.span
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Hussain
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Crafting exceptional digital experiences with 15 years of expertise in Python, JavaScript, PHP, Swift, and Kotlin.
          </motion.p>

          {/* Tech stack visualization */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Code className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Full Stack</span>
            </div>
            <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Server className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Architecture</span>
            </div>
            <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Smartphone className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Mobile</span>
            </div>
            <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Brain className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">AI/ML</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent">
              <a href="/resume.pdf" download>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm mb-2">Explore</span>
          <div className="w-px h-8 bg-current animate-bounce"></div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;