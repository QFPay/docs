import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main class="qf-main">
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}>Introduction</Heading>
          <p>QFPay API is a comprehensive payment solution that offers various payment methods to meet the needs of different businesses. This API documents the process of integrating with QFPay and the requirements for developing a successful integration.</p>
        </div>
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}>Build your integration, let our products empower your business</Heading>
        </div>
        <HomepageFeatures />
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}>Resources</Heading>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
