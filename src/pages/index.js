import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import { useState, useEffect } from 'react';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gettingStartedExpanded, setGettingStartedExpanded] = useState(false);
  const [inStoreExpanded, setInStoreExpanded] = useState(false);
  const [onlinePaymentsExpanded, setOnlinePaymentsExpanded] = useState(false);
  const [sharedEndpointsExpanded, setSharedEndpointsExpanded] = useState(false);
  const [customsDeclarationExpanded, setCustomsDeclarationExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apiSections = [
    {
      title: 'Request Format',
      description: 'HTTP Request',
      icon: 'ri-file-text-line',
      link: '#request-format'
    },
    {
      title: 'Response Format',
      description: 'API Response Format',
      icon: 'ri-file-text-line',
      link: '#response-format'
    },
    {
      title: 'Signature Generation',
      description: 'All API requests must include a digital signature to ensure authenticity and data integrity.',
      icon: 'ri-file-text-line',
      link: '#signature-generation'
    },
    {
      title: 'Payment Types',
      description: 'Payment Types',
      icon: 'ri-file-text-line',
      link: '#payment-types'
    },
    {
      title: 'Currencies',
      description: 'This section lists the currency codes accepted by the QFPay API. The values passed in the txcurrcd parameter should match one of the supported currency codes listed below.',
      icon: 'ri-file-text-line',
      link: '#currencies'
    },
    {
      title: 'Transaction Status Codes',
      description: 'The table below lists all standard respcd values returned by QFPay API responses. These codes help you determine the result and next action for each transaction.',
      icon: 'ri-file-text-line',
      link: '#transaction-status-codes'
    },
    {
      title: 'API Usage',
      description: 'Overview',
      icon: 'ri-file-text-line',
      link: '#api-usage'
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-200'
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                  scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
                aria-label="Toggle sidebar"
              >
                <i className={`ri-menu-line text-xl ${scrolled ? 'text-black' : 'text-white'}`}></i>
              </button>
              <a href="https://qfpay.global/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 cursor-pointer">
                <img
                  src="https://sdk.qfapi.com/img/logo.png"
                  alt="QFPay Logo"
                  className="h-5"
                />
                <span className={`text-sm font-semibold transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
                  Developer Centre
                </span>
              </a>
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                  scrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}>
                  Home
                </Link>
                <Link to="/docs/preparation/introduction" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                  scrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}>
                  Integration
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full border-0">
                <i className="ri-search-line text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm w-32 text-gray-700 placeholder-gray-400"
                />
                <div className="flex items-center space-x-1">
                  <kbd className="px-2 py-0.5 text-xs bg-white rounded border border-gray-300">ctrl</kbd>
                  <kbd className="px-2 py-0.5 text-xs bg-white rounded border border-gray-300">K</kbd>
                </div>
              </div>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border-0 ${
                  scrolled
                    ? 'text-black bg-gray-100 hover:bg-gray-100'
                    : 'text-white bg-transparent hover:bg-white/10'
                }`}
              >
                English
              </button>
              <button
                className={`p-2 rounded-full transition-colors cursor-pointer border-0 ${
                  scrolled
                    ? 'bg-gray-100 hover:bg-gray-100'
                    : 'bg-transparent hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                <i className={`ri-sun-line text-lg ${scrolled ? 'text-black' : 'text-white'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-600/10"></div>
        <div className="relative max-w-[1400px] mx-auto px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="ri-home-line"></i>
            </a>
            <i className="ri-arrow-right-s-line text-gray-600"></i>
            <span className="text-white font-medium">API Reference</span>
          </nav>
          <h1 className="text-7xl font-semibold text-white tracking-tight mb-6">
            API Reference
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Complete documentation for integrating QFPay payment solutions into your applications
          </p>
        </div>
      </section>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <aside className={`${
            sidebarOpen ? 'fixed left-0 top-16 h-[calc(100vh-4rem)] z-50 w-56 bg-white p-4 overflow-y-auto' : 'hidden'
          } lg:block lg:relative lg:top-0 lg:h-auto w-56 flex-shrink-0`}>
            <div className="sticky top-24">
              <nav className="space-y-1">
                <Link to="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                  Home
                </Link>
                <Link to="/docs/preparation/introduction" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                  Integration
                </Link>

                <div className="my-4 border-t border-gray-300"></div>

                {/* Sidebar items */}
                <div className="space-y-1">
                  <button
                    onClick={() => setGettingStartedExpanded(!gettingStartedExpanded)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer border-0 ${
                      gettingStartedExpanded
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Getting Started</span>
                    <i className={`ri-arrow-${gettingStartedExpanded ? 'down' : 'right'}-s-line text-sm`}></i>
                  </button>
                  {gettingStartedExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/docs/preparation/introduction" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Introduction
                      </Link>
                      <Link to="/docs/preparation/paycode" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Paycode
                      </Link>
                    </div>
                  )}
                  
                  <div className="space-y-1">
                    <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg transition-colors cursor-pointer font-medium border-0">
                      <span>API Reference</span>
                      <i className="ri-arrow-down-s-line text-sm"></i>
                    </button>
                    <div className="ml-4 space-y-1">
                      <a href="#request-format" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Request Format
                      </a>
                      <a href="#response-format" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Response Format
                      </a>
                      <a href="#signature-generation" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Signature Generation
                      </a>
                      <a href="#payment-types" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Payment Types
                      </a>
                      <a href="#currencies" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Currencies
                      </a>
                      <a href="#transaction-status-codes" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Transaction Status Codes
                      </a>
                      <a href="#api-usage" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        API Usage
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setInStoreExpanded(!inStoreExpanded)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer border-0 ${
                      inStoreExpanded
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>In-Store Payments</span>
                    <i className={`ri-arrow-${inStoreExpanded ? 'down' : 'right'}-s-line text-sm`}></i>
                  </button>
                  {inStoreExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/docs/02-in-store/01-MPM" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        MPM
                      </Link>
                      <Link to="/docs/02-in-store/02-CPM" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        CPM
                      </Link>
                      <Link to="/docs/02-in-store/04-pos-api/01-app-call-app" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        POS API
                      </Link>
                    </div>
                  )}
                  
                  <button
                    onClick={() => setOnlinePaymentsExpanded(!onlinePaymentsExpanded)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer border-0 ${
                      onlinePaymentsExpanded
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Online Payments</span>
                    <i className={`ri-arrow-${onlinePaymentsExpanded ? 'down' : 'right'}-s-line text-sm`}></i>
                  </button>
                  {onlinePaymentsExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/docs/03-online-shop/02-checkout" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Checkout
                      </Link>
                      <Link to="/docs/03-online-shop/01-visa-master-online-payment" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Visa/Master
                      </Link>
                      <Link to="/docs/03-online-shop/06-wechat/01-wechat-web-qrc-payments" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        WeChat
                      </Link>
                    </div>
                  )}
                  
                  <button
                    onClick={() => setSharedEndpointsExpanded(!sharedEndpointsExpanded)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer border-0 ${
                      sharedEndpointsExpanded
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Shared Endpoints</span>
                    <i className={`ri-arrow-${sharedEndpointsExpanded ? 'down' : 'right'}-s-line text-sm`}></i>
                  </button>
                  {sharedEndpointsExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/docs/04-common-api/01-transaction-enquiry" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Transaction Enquiry
                      </Link>
                      <Link to="/docs/04-common-api/02-reversal-cancel" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Reversal/Cancel
                      </Link>
                      <Link to="/docs/04-common-api/03-refunds" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        Refunds
                      </Link>
                    </div>
                  )}
                  
                  <Link 
                    to="/docs/05-customs declaration"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Customs Declaration
                  </Link>
                  
                  <Link 
                    to="/docs/06-FAQ"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  >
                    FAQs
                  </Link>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 lg:ml-12">
            {/* Introduction Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                <Translate id="homepage.introduction.title">Introduction</Translate>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <Translate id="homepage.introduction.content">
                  QFPay API is a comprehensive payment solution that offers various payment methods to meet the needs of different businesses. This API documents the process of integrating with QFPay and the requirements for developing a successful integration.
                </Translate>
              </p>
            </section>

            {/* API Reference Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-semibold text-black tracking-tight mb-8">
                API Reference
              </h2>

              {/* API Sections Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {apiSections.map((section, index) => (
                  <a
                    key={index}
                    href={section.link}
                    className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <i className={`${section.icon} text-2xl text-gray-400 group-hover:text-blue-600 transition-colors`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-[1400px] mx-auto px-8">
                <Heading as="h2" className="text-3xl font-bold text-center mb-12">
                  <Translate id="homepage.features.title">Build your integration, let our products empower your business</Translate>
                </Heading>
                <HomepageFeatures type="feature"/>
              </div>
            </section>

            {/* Resources Section */}
            <section className="py-16">
              <div className="max-w-[1400px] mx-auto px-8">
                <Heading as="h2" className="text-3xl font-bold text-center mb-12">
                  <Translate id="homepage.resources.title">Resources</Translate>
                </Heading>
                <HomepageFeatures type="resource"/>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}