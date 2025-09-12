import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/delv-logo.png"
                alt="DELV Logo"
                width={60}
                height={60}
                className="w-30 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white"></span>
            </Link>

            {/* Right side navigation and buttons */}
            <div className="flex items-center space-x-4">
              {/* Service Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/legal-expansion"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  Global/Legal
                </Link>
                <Link
                  href="/technology-consulting"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  Tech
                </Link>
                <Link
                  href="/network-marketing"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  Marketing
                </Link>
              </div>

              {/* Contact Button */}
              <Link
                href="mailto:delv.team@gmail.com"
                className="bg-[#4FD1C7] text-[#FFFFFF] px-4 py-2 rounded-lg hover:bg-[#3BB5AC] transition-colors text-sm font-medium"
              >
                Contact
              </Link>

              {/* Language Selector */}
              <button className="text-white px-4 py-2 rounded-lg hover:bg-[#3BB5AC] transition-colors text-xs font-bold">
                ENG
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            With Expert Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive consulting services in technology, legal
            advisory, and global expansion to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors">
              Start Consulting
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global / Legal Expansion */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global / Legal Expansion
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Corporate law, compliance, intellectual property, and contract
                management services for comprehensive legal support.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  IP Protection
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Compliance
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Contracts
                </span>
              </div>
              <Link
                href="/legal-expansion"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                Learn More
              </Link>
            </div>

            {/* Technology Consulting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technology Consulting
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Digital transformation, software development, and IT
                infrastructure optimization for modern businesses.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  AI/ML Integration
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Cloud Migration
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  DevOps
                </span>
              </div>
              <Link
                href="/technology-consulting"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                Learn More
              </Link>
            </div>

            {/* Network Marketing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Network Marketing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Market entry strategies, international partnerships, and
                cross-border business development for global growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Market Research
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Partnerships
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Localization
                </span>
              </div>
              <Link
                href="/network-marketing"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-gray-300 text-lg">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-gray-300 text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-gray-300 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts with proven track records across technology,
              legal, and global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Sarah Johnson
              </h3>
              <p className="text-gray-600 text-center mb-3">
                Technology Director
              </p>
              <p className="text-gray-500 text-sm text-center mb-4">
                15+ years in digital transformation and AI implementation
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  AI/ML
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Cloud Architecture
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  DevOps
                </span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Michael Chen
              </h3>
              <p className="text-gray-600 text-center mb-3">Legal Advisor</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                12+ years in corporate law and international compliance
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  Corporate Law
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  Compliance
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  IP Protection
                </span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/imhyeongjun.jpeg"
                  alt="HYEONGJUN IM"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                HYEONGJUN IM
              </h3>
              <p className="text-gray-600 text-center mb-3">Tech Lead</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                • aɪdentəti CEO & Builder Academy Community Founder
                <br />
                • UNESCO Digital lecture proffeser
                <br />
                • ETH Global Hackthon Award (2023,2024)
                <br />
                • ABB BlockChain Hackthon Award (2023)
                <br />• Web3 Project PM / Design partment
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Tech Leadership
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Web3 Innovation
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Award Winner
                </span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/youngdaekim.jpeg"
                  alt="YOUNGDAE KIM"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                YOUNGDAE KIM
              </h3>
              <p className="text-gray-600 text-center mb-3">Community Lead</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                • aɪdentəti COO and Community Management
                <br />
                • Experience as a Web3 Project Community Builder
                <br />
                • Experience as a Moderator for Multiple Projects
                <br />
                • BD/Operations Manager at MEXC Exchange
                <br />• Extensive Experience Participating in and Managing
                Domestic & International Events (Hackathons, Meetups)
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Community Building
                </span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Network Development
                </span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Engagement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Partner
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Link
              href="https://www.wiw3ch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/w3w-logo.avif"
                alt="WiW3CH Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://aidenteti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/aidenteticrew.png"
                alt="아이덴티티크루 Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://www.moalaw.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Moa-logo.png"
                alt="MOA Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://www.build-up.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/buildup-logo.svg"
                alt="Build-Up Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get in touch with our experts today and discover how we can help you
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:we@delv.team"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/delv-logo.png"
                  alt="DELV Logo"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering businesses through expert consulting services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Legal Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Global Expansion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:hello@delvconsulting.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@delvconsulting.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
