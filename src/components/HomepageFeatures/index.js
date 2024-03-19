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
      {title:"POS Integration", url:"docs/category/cdi"},
      {title:"In-Store common API -MPQR & CPQR", url:"docs/category/cdi"}
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
      {title:"Checkout Services", url:"docs/category/cdi"},
      {title:"Embedded Component", url:""},
      {title:"Recurring Payment", url:""},
      {title:"Official Accounts/ Mini Programs", url:""},
      {title:"Recurring Payment", url:""},
      {title:"Recurring Payment", url:""},
      {title:"Recurring Payment", url:""}
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
      {title:"POS Integration", url:"docs/category/cdi"}
    ]
  },
];


export default function HomepageFeatures() {
  const {siteConfig} = useDocusaurusContext();
  const {baseUrl} = siteConfig;
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
