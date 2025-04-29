import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-dark pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-8">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-darkAccent rounded-xl p-8 shadow-lg border border-gray-800">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neonTeal-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neonTeal-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neonTeal-500 h-32"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full border-glow border-glow-teal bg-transparent border-2 border-neonTeal-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-neonTeal-500/10 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start">
              <Mail className="text-neonTeal-500 w-6 h-6 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">info@trueviral.ai</p>
                <p className="text-gray-300">support@trueviral.ai</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-neonTeal-500 w-6 h-6 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-300">Mon-Fri: 9am - 5pm EST</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-neonTeal-500 w-6 h-6 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-300">123 AI Street, Suite 101</p>
                <p className="text-gray-300">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 