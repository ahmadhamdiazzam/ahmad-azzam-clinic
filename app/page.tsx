import { MapPin, Phone, Calendar, ArrowRight, Activity, ShieldPlus } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-blue-900 tracking-tight">
            Azzam Orthopedics
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition">About</Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition">Locations</Link>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Book Appointment
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Dr. Ahmad Hamdi Azzam</h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            Consultant of Orthopedic Surgery
          </h2>
          <p className="max-w-2xl text-lg text-slate-300 mb-10 leading-relaxed">
            Providing advanced orthopedic care, comprehensive trauma management, and restorative joint surgery with a strict commitment to evidence-based medical excellence.
          </p>
          <a href="#contact" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-md font-bold hover:bg-slate-100 transition shadow-lg">
            <Calendar size={20} />
            Schedule a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Clinical Care</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Orthopedic Trauma', desc: 'Expert surgical management of complex fractures, dislocations, and acute musculoskeletal injuries.', icon: Activity },
            { title: 'Joint Reconstruction', desc: 'Advanced surgical interventions and restorative therapies for chronic and degenerative joint conditions.', icon: ShieldPlus },
            { title: 'Sports Medicine', desc: 'Comprehensive, multi-disciplinary treatment and rehabilitation plans for sports-related injuries.', icon: Activity }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <service.icon className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / CV Section */}
      <section id="about" className="bg-slate-100 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-square bg-slate-300 rounded-2xl shadow-inner flex items-center justify-center">
  <img src="/profile.png" alt="Dr. Ahmad Azzam Portrait" className="object-cover w-full h-full rounded-2xl" />
</div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Dr. Azzam</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Dr. Ahmad Hamdi Azzam is a Consultant of Orthopedic Surgery with extensive clinical and academic expertise. Dedicated to restoring mobility and improving patient quality of life, he utilizes the latest surgical techniques and proven treatments.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              He maintains a professional and academic affiliation with <strong>Kasr Al-Ainy - Cairo University</strong>, one of the region's most prestigious medical institutions, contributing actively to both elite patient care and the advancement of orthopedic research.
            </p>
            <ul className="space-y-4 font-medium text-slate-800">
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-1 rounded-full"><ArrowRight className="text-blue-600 w-4 h-4" /></div>
                Evidence-based orthopedic practice
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-1 rounded-full"><ArrowRight className="text-blue-600 w-4 h-4" /></div>
                Comprehensive trauma management
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-1 rounded-full"><ArrowRight className="text-blue-600 w-4 h-4" /></div>
                Dedicated post-surgical rehabilitation oversight
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations & Contact Routing */}
      <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-12 shadow-xl">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Clinic Locations</h2>
            <p className="text-blue-200 mb-10 text-lg">
              Operating out of class-A facilities to ensure accessible, premium care across the greater Cairo area.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0 w-6 h-6" />
                <div>
                  <h4 className="font-bold text-xl mb-1">40 Mosaddak Street / Dokki</h4>
                  <p className="text-blue-200">Main branch servicing the Giza governorate.</p>
                </div>
              </div>
              
              </div>
              
            </div>
          </div>
          <div className="md:w-1/2 bg-white rounded-2xl p-8 md:p-10 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Contact & Booking</h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">For Appointments</p>
                  <p className="font-bold text-xl">+20 1004532533 / +20 1005830888</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Calendar className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Working Hours</p>
                  <p className="font-bold text-lg">Sat - Thu, 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-md">
              Call to Book Now
            </button>
            <p className="text-center text-sm text-slate-500 mt-6 font-medium">
              Digital portal access coming soon to ahmad-azzam.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center border-t border-slate-900">
        <p className="font-medium">© {new Date().getFullYear()} Dr. Ahmad Hamdi Azzam. All rights reserved.</p>
        <p className="mt-2 text-sm">Consultant of Orthopedic Surgery | www.ahmad-azzam.com</p>
      </footer>
    </div>
  );
}