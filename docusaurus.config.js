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
  url: 'https://qfpay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/v2/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QFPay', // Usually your GitHub org/user name.
  projectName: 'docs/v2', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
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
        copyright: `QFPay Haojin Fintech Limited / iFlare Hong Kong Limited / Q Square Company Limited © ${new Date().getFullYear()}  |  Unit A, 27/F, West Gate Tower, 7 Wing Hong Street, Lai Chi Kok, Kowloon, Hong Kong |  All Rights Reserved`,
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
};

export default config;
