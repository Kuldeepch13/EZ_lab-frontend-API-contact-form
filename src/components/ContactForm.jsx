import React, { useState } from 'react';

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{7,15}$/.test(phone);
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!validateEmail(form.email)) err.email = 'Enter a valid email';
    if (!form.phone.trim()) err.phone = 'Phone is required';
    else if (!validatePhone(form.phone)) err.phone = 'Enter valid digits only';
    if (!form.message.trim()) err.message = 'Message is required';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  setStatus('loading');
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json().catch(() => null);
    console.log("📩 API Response:", res.status, data);

    if (res.status === 200 || res.status === 201) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } else {
      console.error('Server error', res.status, data);
      setStatus('error');
    }
  } catch (err) {
    console.error("❌ Network or CORS error:", err);
    setStatus('error');
  }
};


  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Let’s Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Fill out the form below and we’ll respond promptly to discuss your ideas.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-lg px-4 py-2 bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg px-4 py-2 bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full rounded-lg px-4 py-2 bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
            />
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us more about your project..."
              className="w-full rounded-lg px-4 py-2 bg-black/40 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-100"
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          {/* Footer */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-4">
            <div>
              {status === 'success' && (
                <p className="text-green-400 text-sm font-medium">
                  ✅ Contact request submitted successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-medium">❌ Failed to submit. Try again.</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 md:mt-0 px-6 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 text-black font-semibold shadow-md transition-transform transform hover:-translate-y-0.5"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
