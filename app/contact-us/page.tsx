'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 -mt-20 py-20 pt-30"
      style={{ backgroundImage: 'url(/3672201.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 w-full max-w-lg">
        <div className="rounded-2xl border border-white/15 bg-slate-900/30 p-8 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80">
              Have a question or need help? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                isSubmitting
                  ? 'bg-white/20 text-white/50 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white/50"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}