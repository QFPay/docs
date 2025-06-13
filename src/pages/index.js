import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main class="qf-main">
        <meta http-equiv="refresh" content="0; url=https://sdk.qfapi.com/" />
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}><Translate id="homepage.introduction.title">Introduction</Translate></Heading>
          <p><Translate id="homepage.introduction.content">QFPay API is a comprehensive payment solution that offers various payment methods to meet the needs of different businesses. This API documents the process of integrating with QFPay and the requirements for developing a successful integration.</Translate></p>
        </div>
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}><Translate id="homepage.features.title">Build your integration, let our products empower your business</Translate></Heading>
        </div>
        <HomepageFeatures type="feature"/>
        <div className="container">
          <Heading as="h3" style={{marginTop: "52px"}}><Translate id="homepage.resources.title">Resources</Translate></Heading>
        </div>
        <HomepageFeatures type="resource"/>
      </main>
    </Layout>
  );
}
