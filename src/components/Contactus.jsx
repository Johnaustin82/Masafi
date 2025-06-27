import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendEmail = () => {
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    // Create mailto URL with form data
    const mailtoUrl = `mailto:johnnyaustoh@gmail.com?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoUrl;
  };


  const locations = [
    {
      name: "Main Shop",
      address: "Menengai House 1, Ground Floor",
      details: "Opp. Rubis Petrol Station, St. River Road, Nairobi"
    },
    {
      name: "Branch",
      address: "Malindi House, River Road", 
      details: "Kumasi Road Junction, Nairobi"
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Header */}
      <div className="text-center py-16 px-4" style={{ backgroundColor: '#A32424' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#625A62' }}>
              Send us a Message
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#625A62' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: '#C17671',
                    focusRingColor: '#A32424'
                  }}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#625A62' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: '#C17671',
                    focusRingColor: '#A32424'
                  }}
                  placeholder="your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#625A62' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: '#C17671',
                    focusRingColor: '#A32424'
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#625A62' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors resize-none"
                  style={{ 
                    borderColor: '#C17671',
                    focusRingColor: '#A32424'
                  }}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                onClick={handleSendEmail}
                className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#A32424' }}
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#625A62' }}>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#C17671' }}>
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#625A62' }}>
                      Email
                    </h3>
                    <p style={{ color: '#625A62' }}>masafient@yahoo.com</p>
                    <p className="text-sm opacity-75" style={{ color: '#625A62' }}>
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#C17671' }}>
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#625A62' }}>
                      Phone
                    </h3>
                    <p style={{ color: '#625A62' }}>0714222255</p>
                    <p className="text-sm opacity-75" style={{ color: '#625A62' }}>
                      Mon-Fri 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#C17671' }}>
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#625A62' }}>
                      Address
                    </h3>
                    <p style={{ color: '#625A62' }}>
                     Main Shop<br />
                      Menengai House 1, Ground Floor<br />
                      Opp. Rubis Petrol Station, St. River Road, Nairobi
                    </p>
                    <p style={{ color: '#625A62' }}>
                      Branch<br />
                      Malindi House, River Road<br />
                      Kumasi Road Junction, Nairobi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A32424' }}>
                <Send className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#625A62' }}>
                Quick Response
              </h3>
              <p style={{ color: '#625A62' }}>
                We pride ourselves on fast, helpful responses. Most messages get a reply within a few hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}