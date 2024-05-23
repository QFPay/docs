"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8581],{35610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"qfpaySidebar":[{"type":"category","label":"Preparation","items":[{"type":"link","label":"Introduction","href":"/docs/v2/docs/preparation/introduction","docId":"preparation/introduction","unlisted":false},{"type":"link","label":"Payment Methods","href":"/docs/v2/docs/preparation/paycode","docId":"preparation/paycode","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/preparation"},{"type":"category","label":"In-Store","items":[{"type":"link","label":"Merchant Present Mode (MPM)","href":"/docs/v2/docs/in-store/MPM","docId":"in-store/MPM","unlisted":false},{"type":"link","label":"Consumer Present Mode (CPM)","href":"/docs/v2/docs/in-store/CPM","docId":"in-store/CPM","unlisted":false},{"type":"category","label":"POS API","items":[{"type":"link","label":"ECR Integration","href":"/docs/v2/docs/in-store/pos-api/ECR","docId":"in-store/pos-api/ECR","unlisted":false},{"type":"link","label":"App call App","href":"/docs/v2/docs/in-store/pos-api/app-call-app","docId":"in-store/pos-api/app-call-app","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/pos-api"}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/in-store"},{"type":"category","label":"Online Shop","items":[{"type":"link","label":"Checkout Services","href":"/docs/v2/docs/online-shop/checkout","docId":"online-shop/checkout","unlisted":false},{"type":"link","label":"Online Pre-authorisation Payment APIs","href":"/docs/v2/docs/online-shop/online-pre-authorisation","docId":"online-shop/online-pre-authorisation","unlisted":false},{"type":"link","label":"Element SDK","href":"/docs/v2/docs/online-shop/paymentelement","docId":"online-shop/paymentelement","unlisted":false},{"type":"link","label":"Recurring Payment","href":"/docs/v2/docs/online-shop/qfpay-recurring-payment","docId":"online-shop/qfpay-recurring-payment","unlisted":false},{"type":"link","label":"Visa / Mastercard Online Payments","href":"/docs/v2/docs/online-shop/visa-master-online-payment","docId":"online-shop/visa-master-online-payment","unlisted":false},{"type":"link","label":"WAP Payment","href":"/docs/v2/docs/online-shop/wap-payment","docId":"online-shop/wap-payment","unlisted":false},{"type":"link","label":"Web Payment","href":"/docs/v2/docs/online-shop/web-payment","docId":"online-shop/web-payment","unlisted":false},{"type":"link","label":"In App Payment","href":"/docs/v2/docs/online-shop/in-app-payment","docId":"online-shop/in-app-payment","unlisted":false},{"type":"link","label":"Payment Element SDK API","href":"/docs/v2/docs/online-shop/payment-intent","docId":"online-shop/payment-intent","unlisted":false},{"type":"category","label":"Wechat","items":[{"type":"link","label":"WeChat Web QRC Payments","href":"/docs/v2/docs/online-shop/wechat/wechat-web-qrc-payments","docId":"online-shop/wechat/wechat-web-qrc-payments","unlisted":false},{"type":"link","label":"WeChat Pay JSAPI (in wechat browser)","href":"/docs/v2/docs/online-shop/wechat/wechat-pay-jsapi","docId":"online-shop/wechat/wechat-pay-jsapi","unlisted":false},{"type":"link","label":"WeChat Pay H5 (in mobile browser)","href":"/docs/v2/docs/online-shop/wechat/wechat-pay-h5","docId":"online-shop/wechat/wechat-pay-h5","unlisted":false},{"type":"link","label":"WeChat Mini Programs","href":"/docs/v2/docs/online-shop/wechat/wechat-mini-programs","docId":"online-shop/wechat/wechat-mini-programs","unlisted":false},{"type":"link","label":"WeChat in-APP Payments","href":"/docs/v2/docs/online-shop/wechat/wechat-in-app-payments","docId":"online-shop/wechat/wechat-in-app-payments","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/wechat"},{"type":"category","label":"Alipay","items":[{"type":"link","label":"Alipay Online Payments","href":"/docs/v2/docs/online-shop/alipay/alipay-online-payments","docId":"online-shop/alipay/alipay-online-payments","unlisted":false},{"type":"link","label":"Alipay Service Window H5","href":"/docs/v2/docs/online-shop/alipay/alipay-service-window-h5","docId":"online-shop/alipay/alipay-service-window-h5","unlisted":false},{"type":"link","label":"Alipay in-APP Payments","href":"/docs/v2/docs/online-shop/alipay/alipay-in-app-payments","docId":"online-shop/alipay/alipay-in-app-payments","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/alipay"}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/online-shop"},{"type":"category","label":"Common API","items":[{"type":"link","label":"Transaction Enquiry","href":"/docs/v2/docs/common-api/transaction-enquiry","docId":"common-api/transaction-enquiry","unlisted":false},{"type":"link","label":"Reversal/ Cancel","href":"/docs/v2/docs/common-api/reversal-cancel","docId":"common-api/reversal-cancel","unlisted":false},{"type":"link","label":"Refunds","href":"/docs/v2/docs/common-api/refunds","docId":"common-api/refunds","unlisted":false},{"type":"link","label":"Asynchronous Notifications","href":"/docs/v2/docs/common-api/asynchronous-notification","docId":"common-api/asynchronous-notification","unlisted":false},{"type":"link","label":"Transaction Notes","href":"/docs/v2/docs/common-api/transaction-note","docId":"common-api/transaction-note","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/v2/docs/category/common-api"},{"type":"link","label":"Customs Declaration","href":"/docs/v2/docs/customs declaration","docId":"customs declaration","unlisted":false},{"type":"link","label":"FAQs","href":"/docs/v2/docs/FAQ","docId":"FAQ","unlisted":false}]},"docs":{"common-api/asynchronous-notification":{"id":"common-api/asynchronous-notification","title":"Asynchronous Notifications","description":"To configure your notification URL of choice, please send the address as well as merchant and store information via email to technical.support@qfpay.com","sidebar":"qfpaySidebar"},"common-api/refunds":{"id":"common-api/refunds","title":"Refunds","description":"Only transactions with the return code 0000 (transaction successful) can be refunded.","sidebar":"qfpaySidebar"},"common-api/reversal-cancel":{"id":"common-api/reversal-cancel","title":"Reversal/ Cancel","description":"Reversals should be used as a last resort when the transaction status cannot be determined, e.g. no payment notification is received, the response timed-out, there are network issues, etc. The query API endpoint should be used first to check the transaction status. Hong Kong PayTypes do not support transaction cancel.","sidebar":"qfpaySidebar"},"common-api/transaction-enquiry":{"id":"common-api/transaction-enquiry","title":"Transaction Enquiry","description":"If the mchid is provided, it is mandatory to submit the mchid when calling the API (unless otherwise specified). On the contrary, if mchid is not provided, merchants shall not pass the mchid field in the API request.","sidebar":"qfpaySidebar"},"common-api/transaction-note":{"id":"common-api/transaction-note","title":"Transaction Notes","description":"This Endpoint is only available to merchants who do not pass in the mchid","sidebar":"qfpaySidebar"},"customs declaration":{"id":"customs declaration","title":"Customs Declaration","description":"Customs declaration API auto-sends the WeChat/Alipay payment data to the customs to simplify the clearance process and saves time for online cross-border stores.","sidebar":"qfpaySidebar"},"disabled-cdi/integration":{"id":"disabled-cdi/integration","title":"CDI Integration","description":"Overview of the QFPay\'s CDI data consent & request flow"},"disabled-cdi/merchant-data-file-specification":{"id":"disabled-cdi/merchant-data-file-specification","title":"Merchant data file specification","description":"Data file naming"},"disabled-cdi/test-values":{"id":"disabled-cdi/test-values","title":"test-values","description":"Test values"},"disabled-cdi/transaction-data-file-specification":{"id":"disabled-cdi/transaction-data-file-specification","title":"Transaction data file specification","description":"Data file naming"},"FAQ":{"id":"FAQ","title":"FAQs","description":"Q1. In provided test account credentials which one is the partner or the merchant identifier?","sidebar":"qfpaySidebar"},"in-store/CPM":{"id":"in-store/CPM","title":"Consumer Present Mode (CPM)","description":"CPM process-flow","sidebar":"qfpaySidebar"},"in-store/disabled-payme-offline-payment":{"id":"in-store/disabled-payme-offline-payment","title":"PayMe Offline Payment","description":"The above command returns JSON structured like this:"},"in-store/MPM":{"id":"in-store/MPM","title":"Merchant Present Mode (MPM)","description":"MPM process-flow","sidebar":"qfpaySidebar"},"in-store/pos-api/app-call-app":{"id":"in-store/pos-api/app-call-app","title":"App call App Android SDK","description":"Latest Update","sidebar":"qfpaySidebar"},"in-store/pos-api/ECR":{"id":"in-store/pos-api/ECR","title":"ECR integration technical specification","description":"Support Terminal Model:","sidebar":"qfpaySidebar"},"online-shop/alipay/alipay-in-app-payments":{"id":"online-shop/alipay/alipay-in-app-payments","title":"Alipay in-APP Payments","description":"Alipay APP Payment process-flow","sidebar":"qfpaySidebar"},"online-shop/alipay/alipay-online-payments":{"id":"online-shop/alipay/alipay-online-payments","title":"Alipay Online Payments","description":"Alipay Hong Kong does not support the native Alipay Checkout page. Instead developers are required to request the QR code and embed it using iframe","sidebar":"qfpaySidebar"},"online-shop/alipay/alipay-service-window-h5":{"id":"online-shop/alipay/alipay-service-window-h5","title":"Alipay Service Window H5","description":"Alipay H5 process-flow","sidebar":"qfpaySidebar"},"online-shop/alipay/hidden-03-alipay-pre-authorization":{"id":"online-shop/alipay/hidden-03-alipay-pre-authorization","title":"Alipay Pre-Authorization","description":"Freeze Funds"},"online-shop/checkout":{"id":"online-shop/checkout","title":"Checkout Services","description":"Introduction","sidebar":"qfpaySidebar"},"online-shop/disabled-payme-online-payment":{"id":"online-shop/disabled-payme-online-payment","title":"PayMe Online Payment","description":"The above command returns JSON structured like this:"},"online-shop/in-app-payment":{"id":"online-shop/in-app-payment","title":"In App Payment","description":"Introduction","sidebar":"qfpaySidebar"},"online-shop/online-pre-authorisation":{"id":"online-shop/online-pre-authorisation","title":"Online Pre-authorisation Payment APIs","description":"- Online Pre-authorisation Payment APIs","sidebar":"qfpaySidebar"},"online-shop/payment-intent":{"id":"online-shop/payment-intent","title":"Payment Element SDK API","description":"Create payment intent API","sidebar":"qfpaySidebar"},"online-shop/paymentelement":{"id":"online-shop/paymentelement","title":"Element SDK","description":"TODO: Describe How to achieve token in subscription","sidebar":"qfpaySidebar"},"online-shop/qfpay-recurring-payment":{"id":"online-shop/qfpay-recurring-payment","title":"Recurring Payment","description":"last modified 20230816 --\x3e","sidebar":"qfpaySidebar"},"online-shop/visa-master-online-payment":{"id":"online-shop/visa-master-online-payment","title":"Visa / Mastercard Online Payments","description":"We currently support credit card payments in the Hong Kong environment. All major credit card issuers are supported.","sidebar":"qfpaySidebar"},"online-shop/wap-payment":{"id":"online-shop/wap-payment","title":"WAP Payment","description":"Introduction","sidebar":"qfpaySidebar"},"online-shop/web-payment":{"id":"online-shop/web-payment","title":"Web Payment","description":"Introduction","sidebar":"qfpaySidebar"},"online-shop/wechat/wechat-in-app-payments":{"id":"online-shop/wechat/wechat-in-app-payments","title":"WeChat in-APP Payments","description":"WeChat APP Payment process-flow","sidebar":"qfpaySidebar"},"online-shop/wechat/wechat-mini-programs":{"id":"online-shop/wechat/wechat-mini-programs","title":"WeChat Mini Programs","description":"WeChat MiniProgram process-flow","sidebar":"qfpaySidebar"},"online-shop/wechat/wechat-pay-h5":{"id":"online-shop/wechat/wechat-pay-h5","title":"WeChat Pay H5 (in mobile browser)","description":"WeChat H5 process-flow","sidebar":"qfpaySidebar"},"online-shop/wechat/wechat-pay-jsapi":{"id":"online-shop/wechat/wechat-pay-jsapi","title":"WeChat Pay JSAPI (in wechat browser)","description":"WeChat JSAPI process-flow","sidebar":"qfpaySidebar"},"online-shop/wechat/wechat-web-qrc-payments":{"id":"online-shop/wechat/wechat-web-qrc-payments","title":"WeChat Web QRC Payments","description":"Online QR Code Payment process-flow","sidebar":"qfpaySidebar"},"preparation/introduction":{"id":"preparation/introduction","title":"Introduction","description":"Welcome to the official QFPay open API documentation. To get started, please review the Developer Instructions below.","sidebar":"qfpaySidebar"},"preparation/paycode":{"id":"preparation/paycode","title":"Payment Methods","description":"Verify that your API credentials allow for the selected pay_type.","sidebar":"qfpaySidebar"},"translate-mapping":{"id":"translate-mapping","title":"translate-mapping","description":""}}}')}}]);