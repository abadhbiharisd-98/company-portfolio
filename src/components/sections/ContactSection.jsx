import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  Send,
  Building,
  Share2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function ContactSection() {
  const { company } = portfolioData;
  const [copiedItem, setCopiedItem] = useState(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    serviceInterest: 'Custom Software Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="deck-section section-white">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 09</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">CONTACT & COMPANY INFORMATION</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          OFFICIAL INQUIRIES & CORPORATE CHANNELS
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Title */}
        <div className="max-w-3xl">
          <div className="badge-blue mb-2">
            <span>Corporate Communications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
            Initiate a Discussion with <span className="text-brand-600">Black Grapes</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal font-sans">
            Whether exploring an enterprise software development partnership, modernizing legacy systems, or requesting a technical consultation.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Inbound Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 flex-shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-bold">
                      Global Headquarters
                    </span>
                    <button
                      onClick={() => copyToClipboard(company.address, 'address')}
                      className="text-xs text-slate-500 hover:text-brand-600 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                      title="Copy Address"
                    >
                      {copiedItem === 'address' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <h3 className="text-base font-display font-bold text-navy-900 mb-1">
                    {company.legalName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {company.address}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500 font-medium">
                    <Building className="w-3.5 h-3.5 text-brand-600" />
                    <span>Registered IT Development Facility • Indore, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Electronic & Direct Phone Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => copyToClipboard(company.email, 'email')}
                      className="text-xs text-slate-500 hover:text-brand-600 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                    >
                      {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-bold block mb-1">
                    Official Inquiries
                  </span>
                  <a 
                    href={`mailto:${company.email}`}
                    className="text-sm font-semibold text-navy-900 hover:text-brand-600 break-all transition-colors font-mono"
                  >
                    {company.email}
                  </a>

                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <span className="text-[10px] uppercase font-mono block text-slate-400 font-semibold">Executive Desks:</span>
                    {company.executiveEmails.map((execEmail, eIdx) => (
                      <a 
                        key={eIdx}
                        href={`mailto:${execEmail}`} 
                        className="block text-slate-600 hover:text-brand-600 transition-colors font-mono text-[11px] truncate"
                      >
                        {execEmail}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => copyToClipboard(company.phones[0], 'phone')}
                      className="text-xs text-slate-500 hover:text-brand-600 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                    >
                      {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-bold block mb-1">
                    Direct Corporate Lines
                  </span>
                  
                  <div className="space-y-1.5 mt-2">
                    {company.phones.map((phone, pIdx) => (
                      <a 
                        key={pIdx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="block text-sm font-semibold text-navy-900 hover:text-brand-600 font-mono transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between font-sans">
                    <span>Mon - Sat | 9:30 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Channels Strip */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 flex items-center gap-1.5 font-semibold">
                <Share2 className="w-3.5 h-3.5 text-brand-600" />
                <span>Verified Social Channels:</span>
              </span>
              <div className="flex items-center gap-2">
                {company.socialLinks.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-xl bg-slate-50 hover:bg-blue-50 text-[11px] font-mono text-slate-700 hover:text-brand-600 border border-slate-200 hover:border-blue-200 transition-all font-medium"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Consultation Inbound Form (Col 5) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-soft-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-600" />
                <h3 className="font-display font-bold text-base text-navy-900">
                  Corporate Inquiry Form
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-brand-600 border border-blue-200 font-semibold">
                FAST ROUTING
              </span>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-brand-600 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-navy-900 text-lg">Inquiry Transmitted</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Thank you. Your consultation request has been routed to our technical advisory team at <span className="text-brand-600 font-mono font-medium">info@blackgrapessoftech.com</span>. We will respond within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:text-navy-900 shadow-2xs cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-600 font-semibold mb-1">
                    Your Name / Representative
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Subodh Bhandari"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white focus:outline-none text-xs text-navy-900 placeholder-slate-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-600 font-semibold mb-1">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white focus:outline-none text-xs text-navy-900 placeholder-slate-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-600 font-semibold mb-1">
                    Required Service Domain
                  </label>
                  <select
                    value={inquiryForm.serviceInterest}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white focus:outline-none text-xs text-navy-900 transition-colors font-sans"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Mobile App Development">Mobile App Development (iOS/Android)</option>
                    <option value="Web Designing & Development">Web Designing & Development</option>
                    <option value="CRM Software Development">CRM Software Development</option>
                    <option value="MLM Software Development">MLM Software Development</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                    <option value="UI/UX & Graphic Designing">UI/UX & Graphic Designing</option>
                    <option value="Tendering & IT Staffing">Tendering & IT Staffing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-600 font-semibold mb-1">
                    Project Scope / Requirement Overview
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly outline your software goals, timeline, and deliverables..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white focus:outline-none text-xs text-navy-900 placeholder-slate-400 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-soft-hover flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Corporate Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
