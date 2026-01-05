// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Centre',
  tagline: 'QFPay Developer Centre',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sdk.qfapi.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QFPay', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hant'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-Hant': {
        label: '繁體中文',
        direction: 'ltr',
      }
    }
  },

  themes: [
    '@docusaurus/theme-mermaid',
    '@easyops-cn/docusaurus-search-local'
  ],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Developer Centre',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.jpg',
          width: 112,
          height: 20,
          href: 'https://qfpay.global/',
        },
        items: [
          {
            to: '/',
            // type: 'docSidebar',
            position: 'left',
            label: 'Home',
            className: 'qf-display-link'
          },
          {
            to: '/docs/preparation/introduction',
            position: 'left',
            label: 'Integration',
            className: 'qf-display-link'
          },
          {
            type: 'search',
            position: 'left',
            className: 'qf-search-bar'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'qfpaySidebar',
          //   position: 'right',
          //   label: 'Sign In',
          //   className: 'qf-display-link-blue',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `QFPay Haojin Fintech Limited / QFPay Haojin Services Limited / iFlare Hong Kong Limited © ${new Date().getFullYear()}  |  Unit A, 27/F, West Gate Tower, 7 Wing Hong Street, Lai Chi Kok, Kowloon, Hong Kong |  All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'php', 'json'],
      },
      docs:{
        sidebar:{
          hideable: true,
        }
      }
    }),
  scripts: [
      {
        src: "https://widget.kapa.ai/kapa-widget.bundle.js",
        "data-website-id": "0177b9e9-7caa-4573-85c9-685d2ca7ef95",
        "data-project-name": "QFPay SDK Doc",
        "data-project-color": "#0676FF",
        "data-project-logo": "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/15/46/03/154603d8-3566-ce79-5256-061ab2895d18/source/512x512bb.jpg",
        "data-modal-title": "Ask QFPay AI",
        // testing inclusion to search bar
        "data-button-hide": "true",
        "data-modal-override-open-selector": "#kapa-search-trigger",
        
        async: true,
      },
    ],
};

export default config;
