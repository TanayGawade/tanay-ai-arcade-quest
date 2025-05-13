
import React, { useState } from "react";
import TerminalContact from "./TerminalContact";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending the message.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_l8u849k', 
        'template_mtpiskl',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        'V89O2rVdfCnJBsLcI'
      );
      
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Message failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-8 sm:mb-12 text-center">
          CONTACT TERMINAL
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="flex-1 mb-6 md:mb-0">
            <TerminalContact />
          </div>
          
          <div className="flex-1 game-card">
            <h3 className="font-pixel text-base sm:text-lg text-gameboy-dark dark:text-gameboy-accent mb-5 sm:mb-6">
              CONNECT WITH ME
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <a 
                href="mailto:tanaygawade2000@gmail.com" 
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">tanaygawade2000@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/tanaygawade" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">linkedin.com/in/tanaygawade</span>
              </a>
              
              <a 
                href="https://github.com/tanaygawade" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">github.com/tanaygawade</span>
              </a>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-3 sm:mb-4">
                SEND A MESSAGE
              </h4>
              
              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light text-xs sm:text-sm"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light text-xs sm:text-sm"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows={3}
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light text-xs sm:text-sm"
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className={`pixel-button text-xs sm:text-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SENDING..." : "PRESS ENTER TO SEND"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
