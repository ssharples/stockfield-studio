import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Studio Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAx-1ULnXbSBl5BrIg24BbpBQ4YslVU8So&q=Stockfield+Mill,+Melbourne+St,+Chadderton,+Oldham+OL9+9ES"
            />
          </div>

          {/* Contact Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-white">Contact Us</h3>
            
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: formData
                  });
                  
                  if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                  } else {
                    alert('Failed to send message. Please try again.');
                  }
                } catch (error) {
                  alert('An error occurred. Please try again later.');
                }
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400"
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl py-3.5 hover:brightness-110 transition-all shadow-lg hover:shadow-primary-500/20"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Visit Us</h4>
              <address className="not-italic space-y-2">
                Stockfield Mill<br />
                Melbourne St<br />
                Chadderton<br />
                Oldham OL9 9ES<br />
                United Kingdom
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
