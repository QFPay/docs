/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  qfpaySidebar: [
    {
      type: 'category',
      label: 'Preparation',
      link: {
        type: 'generated-index'
      },
      items: ['preparation/introduction', 'preparation/paycode'],
    },
    {
      type: 'category',
      label: 'In-Store',
      link: {
        type: 'generated-index'
      },
      items: ['in-store/MPM', 'in-store/CPM', 'in-store/payme-offline-payment'],
    },
    {
      type: 'category',
      label: 'Online Shop',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'Alipay',
          link: {
            type: 'generated-index'
          },
          items: [
            'online-shop/alipay/alipay-online-payments', 
            'online-shop/alipay/alipay-service-window-h5',
            'online-shop/alipay/alipay-pre-authorization',
            'online-shop/alipay/alipay-in-app-payments'
          ]
        },
        {
          type: 'category',
          label: 'Wechat',
          link: {
            type: 'generated-index'
          },
          items: [
            'online-shop/wechat/wechat-web-qrc-payments',
            'online-shop/wechat/wechat-pay-jsapi',
            'online-shop/wechat/wechat-pay-h5',
            'online-shop/wechat/wechat-mini-programs',
            'online-shop/wechat/wechat-in-app-payments',
          ]
        },
        'online-shop/payme-online-payment',
        'online-shop/checkout',
        'online-shop/online-pre-authorisation',
        'online-shop/paymentelement',
        'online-shop/subscription',
        'online-shop/visa-master-online-payment',
      ],
    },
    {
      type: 'category',
      label: 'Common API',
      link: {
        type: 'generated-index'
      },
      items: [
        'common-api/transaction-enquiry',
        'common-api/reversal-cancel',
        'common-api/refunds',
        'common-api/asynchronous-notification',
        'common-api/transaction-note',
      ]
    },
    {
      type: 'category',
      label: 'Android SDK',
      link: {
        type: 'generated-index'
      },
      items: [
        'android-sdk/Introduction',
        'android-sdk/third-party-interface-invoke',
        'android-sdk/appendix'
      ]
    },
    'customs declaration',
    'ECR',
    'FAQ',
  ],
   
};

export default sidebars;
