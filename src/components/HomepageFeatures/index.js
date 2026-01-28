import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import HomeCard from '../HomepageCard';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

// 自訂佈局組件 - 完整移植自 React Demo
export function DocLayout({ children, title = "Developer Centre" }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarItems = [
    { title: 'Getting Started', hasSubmenu: true, key: 'getting-started', expanded: false },
    {
      title: 'API Reference',
      hasSubmenu: true,
      expanded: true,
      submenu: [
        'Request Format', 'Response Format', 'Signature Generation',
        'Payment Types', 'Currencies', 'Transaction Status Codes', 'API Usage'
      ]
    },
    { title: 'In-Store Payments', hasSubmenu: true, key: 'in-store', expanded: false },
    { title: 'Online Payments', hasSubmenu: true, key: 'online-payments', expanded: false },
    { title: 'Shared Endpoints', hasSubmenu: true, key: 'shared-endpoints', expanded: false },
    { title: 'Customs Declaration', hasSubmenu: true, key: 'customs-declaration', expanded: false },
    { title: 'FAQs', hasSubmenu: false }
  ];

  const [gettingStartedExpanded, setGettingStartedExpanded] = useState(false);
  const [inStoreExpanded, setInStoreExpanded] = useState(false);
  const [onlinePaymentsExpanded, setOnlinePaymentsExpanded] = useState(false);
  const [sharedEndpointsExpanded, setSharedEndpointsExpanded] = useState(false);
  const [customsDeclarationExpanded, setCustomsDeclarationExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
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
                  {title}
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
              <div className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full ${
                scrolled ? 'bg-gray-100' : 'bg-white/10'
              }`}>
                <i className="ri-search-line text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm w-32 text-gray-700 placeholder-gray-400"
                />
                <div className="flex items-center space-x-1">
                  <kbd className={`px-2 py-0.5 text-xs rounded border ${
                    scrolled
                      ? 'bg-white border-gray-300'
                      : 'bg-white/20 border-white/30'
                  }`}>ctrl</kbd>
                  <kbd className={`px-2 py-0.5 text-xs rounded border ${
                    scrolled
                      ? 'bg-white border-gray-300'
                      : 'bg-white/20 border-white/30'
                  }`}>K</kbd>
                </div>
              </div>
              <button className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}>
                English
              </button>
              <button className={`p-2 rounded-full transition-colors cursor-pointer ${
                scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`} aria-label="Toggle theme">
                <i className={`ri-sun-line text-lg ${scrolled ? 'text-black' : 'text-white'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          {/* Sidebar Navigation - 淺灰色背景 */}
          <aside className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block w-56 flex-shrink-0`}>
            <div className="sticky top-24">
              <nav className="space-y-1">
                <Link to="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                  Home
                </Link>
                <Link to="/docs/preparation/introduction" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                  Integration
                </Link>

                <div className="my-4 border-t border-gray-300"></div>

                {sidebarItems.map((item, index) => {
                  const isExpanded = item.key === 'getting-started' ? gettingStartedExpanded :
                                    item.key === 'in-store' ? inStoreExpanded :
                                    item.key === 'online-payments' ? onlinePaymentsExpanded :
                                    item.key === 'shared-endpoints' ? sharedEndpointsExpanded :
                                    item.key === 'customs-declaration' ? customsDeclarationExpanded :
                                    item.expanded || false;

                  return (
                    <div key={index}>
                      <button
                        onClick={() => {
                          if (item.key === 'getting-started') {
                            setGettingStartedExpanded(!gettingStartedExpanded);
                          } else if (item.key === 'in-store') {
                            setInStoreExpanded(!inStoreExpanded);
                          } else if (item.key === 'online-payments') {
                            setOnlinePaymentsExpanded(!onlinePaymentsExpanded);
                          } else if (item.key === 'shared-endpoints') {
                            setSharedEndpointsExpanded(!sharedEndpointsExpanded);
                          } else if (item.key === 'customs-declaration') {
                            setCustomsDeclarationExpanded(!customsDeclarationExpanded);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                          isExpanded
                            ? 'text-blue-600 bg-blue-50 font-medium'
                            : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span>{item.title}</span>
                        {item.hasSubmenu && (
                          <i className={`ri-arrow-${isExpanded ? 'down' : 'right'}-s-line text-sm`}></i>
                        )}
                      </button>
                      {item.submenu && isExpanded && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// 現代化按鈕組件 - 來自 React demo 設計
export function ModernButton({ children, href, className = '', ...props }) {
  return (
    <Link
      to={href}
      className={`qf-btn-modern inline-flex items-center px-6 py-3 text-sm font-medium ${className}`}
      {...props}
    >
      {children}
      <i className="ri-arrow-right-line ml-2"></i>
    </Link>
  );
}


const FeatureList = [
  {
    title: <Translate id="homepage.features.in-store.title">In-Store</Translate>,
    Svg: 'img/homepage/in-store.png',
    description: (
      <Translate id="homepage.features.in-store.content">
        Experience swift, secure shopping with our in-store payment solution. Accepts all major cards and e-wallets. Quick, convenient, and crafted for you.
      </Translate>
    ),
    links:[
      // Map to actual Docusaurus doc routes
      {title:<Translate id="homepage.features.in-store.MPM">Merchant Present QRCode Mode</Translate>, url:"docs/02-in-store/01-MPM"},
      {title:<Translate id="homepage.features.in-store.CPM">Consumer Present QRCode Mode</Translate>, url:"docs/02-in-store/02-CPM"},
      {title:<Translate id="homepage.features.in-store.pos">POS API</Translate>, url:"docs/02-in-store/04-pos-api/01-app-call-app"}
    ]
  },
  {
    title: <Translate id="homepage.features.online-shop.title">Online Shop</Translate>,
    Svg: 'img/homepage/online-shop.png',
    description: (
      <Translate id="homepage.features.online-shop.content">
        Enjoy secure, instant online payments with our solution. Supports all major online scenarios and e-wallets / credit cards. Fast, flexible, and designed for your convenience.
      </Translate>
    ),
    links:[
      // Map to actual Docusaurus doc routes
      {title:<Translate id="homepage.features.online-shop.visa">Visa/Mastercard Online Payments</Translate>, url:"docs/03-online-shop/01-visa-master-online-payment"},
      {title:<Translate id="homepage.features.online-shop.checkout">QFPay Checkout Services</Translate>, url:"docs/03-online-shop/02-checkout"},
      {title:<Translate id="homepage.features.online-shop.paymentelement">QFPay Component</Translate>, url:"docs/03-online-shop/03-paymentelement"},
      {title:<Translate id="homepage.features.online-shop.recurring">QFPay Recurring Payment</Translate>, url:"docs/03-online-shop/04-qfpay-recurring-payment"},
      {title:<Translate id="homepage.features.online-shop.online-pre-authorisation">Online Pre-authorisation Payment</Translate>, url:"docs/03-online-shop/05-online-pre-authorisation"},
      {title:<Translate id="homepage.features.online-shop.alipay">Alipay</Translate>, url:"docs/category/alipay"},
      {title:<Translate id="homepage.features.online-shop.wechat">WeChat</Translate>, url:"docs/category/wechat"},
    ]
  },
  {
    title: <Translate id="homepage.features.e-commerce.title">E-Commerce</Translate>,
    Svg:'img/homepage/e-commerce.png',
    description: (
      <Translate id="homepage.features.e-commerce.content">
        Boost your online store payment abilities with our e-commerce plugins for Shopify, WooCommerce, OpenCart, and Magento. Easy to integrate, reliable, and designed to enhance your business.
      </Translate>
    ),
    links:[
      {title:"Shopify", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26Shopify-SetupGuideline.pdf"},
      {title:"Magento", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26Magento-SetupGuideline.pdf"},
      {title:"WooCommerce", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26WooCommerce-SetupGuideline.pdf"},
      {title:"OpenCart", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26OpenCart-SetupGuideline.pdf"},
    ]
  },
];

const ResourcesList = [
  {
    title: <Translate id="homepage.resources.supporting.title">Technical Supporting</Translate>,
    Svg: 'img/homepage/technical-supporting.png',
    description: (
      <Translate id="homepage.resources.supporting.content">
        Do not hesitate to ask any questions about integration business services, and more.
      </Translate>
    ),
    links:[
      {title:<Translate id="homepage.resources.supporting.email">Email to us - technical.support@qfpay.com</Translate>, url:"mailto:technical.support@qfpay.com"},
      {title:<Translate id="homepage.resources.supporting.faq">FAQ</Translate>, url:"docs/06-FAQ"},
    ]
  },
  {
    title: <Translate id="homepage.resources.sdks-downloads.title">SDKs Downloads</Translate>,
    Svg: 'img/homepage/sdks-downloads.png',
    description: (
      <Translate id="homepage.resources.sdks-downloads.content">
        Quick way to find out our SDKs
      </Translate>
    ),
    links:[
      {title:<Translate>POS App call App SDK</Translate>, url:"files/qfpay_haojin_api_2.3.4.jar"},
      {title:<Translate>Wechat Pay In-App payment SDKs</Translate>, url:"https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html"},
      {title:<Translate>Alipay In-App payment SDKs</Translate>, url:"https://global.alipay.com/docs/ac/app_hk/download"},
    ]
  },
  // {
  //   title: 'MCC Standards',
  //   Svg:'img/homepage/mcc-standards.png',
  //   description: (
  //     <>
  //       Merchant Category Code (MCC), a key four-digit code, organizes merchants by business type for QFPay integration. It boosts efficiency, targets marketing, and ensures compliance. 
  //     </>
  //   ),
  //   links:[
  //     {title:"Check MCC List", url:""},
  //   ]
  // },
];


export default function HomepageFeatures(props) {
  const {siteConfig} = useDocusaurusContext();
  const {url, baseUrl} = siteConfig;
  if(props.type == "resource"){
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="qf-cards-container" style={{
  
          }}>
            {ResourcesList.map((props, idx) => (
              <HomeCard key={idx} url={`${baseUrl}` + props.Svg} title={props.title} description={props.description} links={props.links} baseUrl = {url + baseUrl}/>
            ))}
          </div>
        </div>
      </section>
    );
  }else if(props.type == "feature"){
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="qf-cards-container" style={{
  
          }}>
            {FeatureList.map((props, idx) => (
              <HomeCard key={idx} url={`${baseUrl}` + props.Svg} title={props.title} description={props.description} links={props.links} baseUrl = {url + baseUrl}/>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
