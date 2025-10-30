import Image from "next/image";
import Link from "next/link";

export default function LegalExpansion() {
  return (
    <div className="min-h-screen bg-white">
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
                  className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium"
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
                <Link
                  href="https://delv-chat-lphugp3zc-juns-projects-8d9b4fd0.vercel.app/"
                  className="text-[#c084fc] px-4 py-2 rounded-lg hover:text-[#c084fc] transition-colors text-sm font-medium"
                >
                  DELV CHAT
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

      {/* Main Content */}
      <main className="bg-white">
        {/* Service Details Section */}
        <section className="py-20 pt-32">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Service Details
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deep dive into our specialized consulting capabilities
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-gray-50 rounded-3xl p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section - Service Overview */}
                <div>
                  {/* Icon */}
                  <div className="w-20 h-20 bg-pink-500 rounded-2xl mb-6 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
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

                  {/* Service Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Global / Legal
                    <br />
                    Expansion
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our legal experts provide comprehensive advisory services to
                    help businesses navigate complex regulatory landscapes and
                    protect their interests.
                  </p>
                </div>

                {/* Right Section - Key Services */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Key Services
                  </h3>

                  {/* Services List */}
                  <div className="space-y-6">
                    {/* Corporate Governance */}
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Corporate Governance
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Board advisory, compliance frameworks, and risk
                          management
                        </p>
                      </div>
                    </div>

                    {/* Intellectual Property */}
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Intellectual Property
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Patent protection, trademark registration, and IP
                          strategy
                        </p>
                      </div>
                    </div>

                    {/* Contract Management */}
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Contract Management
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          International agreements, negotiations, and dispute
                          resolution
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A202C] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link
                href="/"
                className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/delv-logo.png"
                  alt="DELV Logo"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain"
                />
              </Link>
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
                    href="/legal-expansion"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Legal Expansion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
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
                    href="/#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
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
                    href="mailto:legal@delvconsulting.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    legal@delvconsulting.com
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
