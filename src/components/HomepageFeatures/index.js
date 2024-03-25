import styles from './styles.module.css';
import HomeCard from '../HomepageCard';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const FeatureList = [
  {
    title: 'In-Store',
    Svg: 'img/homepage/in-store.png',
    description: (
      <>
        Experience swift, secure shopping with our in-store payment solution. Accepts all major cards and e-wallets. Quick, convenient, and crafted for you.
      </>
    ),
    links:[
      {title:"Merchant Present QRCode Mode", url:"docs/in-store/MPM"},
      {title:"Consumer Present QRCode Mode", url:"docs/in-store/CPM"},
      {title:"POS API", url:"docs/in-store/pos-api"}
    ]
  },
  {
    title: 'Online Shop',
    Svg: 'img/homepage/online-shop.png',
    description: (
      <>
        Enjoy secure, instant online payments with our solution. Supports all major online scenarios and e-wallets / credit cards. Fast, flexible, and designed for your convenience.
      </>
    ),
    links:[
      {title:"Visa/Mastercard Online Payments", url:"docs/online-shop/visa-master-online-payment"},
      {title:"QFPay Checkout Services", url:"docs/online-shop/checkout"},
      {title:"QFPay Component", url:"docs/online-shop/paymentelement"},
      {title:"QFPay Recurring Payment", url:"docs/online-shop/qfpay-recurring-payment"},
      {title:"Online Pre-authorisation Payment", url:"docs/online-shop/online-pre-authorisation"},
      {title:"Alipay", url:"docs/category/alipay"},
      {title:"WeChat", url:"docs/category/wechat"},
    ]
  },
  {
    title: 'E-Commerce',
    Svg:'img/homepage/e-commerce.png',
    description: (
      <>
        Boost your online store payment abilities with our e-commerce plugins for Shopify, WooCommerce, OpenCart, and Magento. Easy to integrate, reliable, and designed to enhance your business.
      </>
    ),
    links:[
      {title:"Shopify", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26Shopify-SetupGuideline.pdf"},
      {title:"Magento", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26Magento-SetupGuideline.pdf"},
      {title:"Woocommerce", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26WooCommerce-SetupGuideline.pdf"},
      {title:"Opencart", url:"https://cdn-hk.qfapi.com/pubfiles/QFPay%26OpenCart-SetupGuideline.pdf"},
    ]
  },
];

const ResourcesList = [
  {
    title: 'Technical Supporting',
    Svg: 'img/homepage/technical-supporting.png',
    description: (
      <>
        Do not hesitate to ask any questions about integration business services, and more.
      </>
    ),
    links:[
      {title:"Email to us - technical.support@qfpay.com", url:"mailto:technical.support@qfpay.com"},
      {title:"FAQ", url:"docs/FAQ"},
    ]
  },
  {
    title: 'SDKs Downloads',
    Svg: 'img/homepage/sdks-downloads.png',
    description: (
      <>
        Quick way to find out our SKDs
      </>
    ),
    links:[
      {title:"POS App call App SDK", url:""},
      {title:"Wechat Pay In-App payment SDKs", url:""},
      {title:"Alipay In-App payment SDKs", url:""},
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
  const {baseUrl} = siteConfig;
  if(props.type == "resource"){
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="qf-cards-container" style={{
  
          }}>
            {ResourcesList.map((props, idx) => (
              <HomeCard key={idx} url={`${baseUrl}` + props.Svg} title={props.title} description={props.description} links={props.links} baseUrl = {baseUrl}/>
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
              <HomeCard key={idx} url={`${baseUrl}` + props.Svg} title={props.title} description={props.description} links={props.links} baseUrl = {baseUrl}/>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
