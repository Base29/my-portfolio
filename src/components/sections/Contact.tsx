
// import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Get In Touch</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground text-lg">
                        Interested in working together or just want to say hi? Feel free to reach out.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}

                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm min-w-[280px] hover:shadow-md transition-shadow">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary mb-4">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <a href="mailto:me@imfaisal.pro" className="text-muted-foreground hover:text-primary transition-colors">me@imfaisal.pro</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm min-w-[280px] hover:shadow-md transition-shadow">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary mb-4">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <a href="tel:+923222911199" className="text-muted-foreground hover:text-primary transition-colors">+92 322 2911199</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm min-w-[280px] hover:shadow-md transition-shadow">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p className="text-muted-foreground">Lahore, Pakistan (Open to Remote)</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
