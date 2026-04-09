import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'me@imfaisal.pro',
            action: 'mailto:me@imfaisal.pro'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+92 322 2911199',
            action: 'tel:+923222911199'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Lahore, Pakistan',
            action: null
        }
    ];

    return (
        <section id="contact" className="py-20 bg-background relative">
            {/* Decorative elements */}
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-secondary/50 rounded-full mb-4">
                        LET'S CONNECT
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Get In Touch</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Interested in working together or just want to say hi? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-2/3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                    {info.action ? (
                                        <a
                                            href={info.action}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-muted-foreground">{info.value}</p>
                                    )}
                                    <p className="text-xs text-muted-foreground/60 mt-2">(Open to Remote)</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={4}
                                        placeholder="Your Message"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    ></textarea>
                                </div>
                                <Button className="w-full gap-2 group">
                                    Send Message
                                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;