import styles from './styles.module.css';
import HomeCard from '../HomepageCard';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';


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
      {title:<Translate id="homepage.features.in-store.MPM">Merchant Present QRCode Mode</Translate>, url:"docs/in-store/MPM"},
      {title:<Translate id="homepage.features.in-store.CPM">Consumer Present QRCode Mode</Translate>, url:"docs/in-store/CPM"},
      {title:<Translate id="homepage.features.in-store.pos">POS API</Translate>, url:"docs/category/pos-api"}
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
      {title:<Translate id="homepage.features.online-shop.visa">Visa/Mastercard Online Payments</Translate>, url:"docs/online-shop/visa-master-online-payment"},
      {title:<Translate id="homepage.features.online-shop.checkout">QFPay Checkout Services</Translate>, url:"docs/online-shop/checkout"},
      {title:<Translate id="homepage.features.online-shop.paymentelement">QFPay Component</Translate>, url:"docs/online-shop/paymentelement"},
      {title:<Translate id="homepage.features.online-shop.recurring">QFPay Recurring Payment</Translate>, url:"docs/online-shop/qfpay-recurring-payment"},
      {title:<Translate id="homepage.features.online-shop.online-pre-authorisation">Online Pre-authorisation Payment</Translate>, url:"docs/online-shop/online-pre-authorisation"},
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
      {title:"Shopify", url:"https://drive.google.com/file/d/1kabWle1Qa7qdNIlg6c4kkcCAgZnFPUHi/view"},
      {title:"Magento", url:"https://drive.google.com/file/d/1U_dUrzF7W2si4As5asNo8IUDwVQpNc5b/view"},
      {title:"WooCommerce", url:"https://drive.google.com/file/d/1ahym3Yrl8fI9gzBgdsvKE9XghI5e4Mdd/view"},
      {title:"OpenCart", url:"https://drive.google.com/file/d/1Kcsm21ApcmfTOlQA1ku4YkOreLxiTDmv/view"},
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
      {title:<Translate id="homepage.resources.supporting.faq">FAQ</Translate>, url:"docs/FAQ"},
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
