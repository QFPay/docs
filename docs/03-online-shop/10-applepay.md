import Link from '@docusaurus/Link';

# Apple Pay Support

## Introduction

Currently, QFPay Checkout and Element support an embedded Apple Pay method for customer payments. Merchants must first enable this payment option within the QFPay system before customers can select it on compatible devices. Utilizing Apple Pay can significantly enhance the authorization rate for transactions.

## Support Device

With Apple Pay, customer can easily and securely shop on your iPhone, iPad, Mac, Windows devices, and other platforms using third-party browsers. Please note that Apple Pay is not supported on Android phone, the payment button will be hidden if customer select apple pay on Android phone.

## QRCode Payment

For devices that do not natively support Apple Pay, such as Windows devices, a payment QR code will automatically be displayed. Customers can use their iPhone or iPad to scan the QR code for payment, provided their iOS version is greater than 18.

:::warning
Currently, this function is unavailable if your language or Apple Store region is set to mainland China.
:::

<Link href="https://sdk.qfapi.com/images/applepay_qrcode.png" target="_blank">![Apple Pay QRcode Flow](@site/static/img/applepay_qrcode.png)</Link>