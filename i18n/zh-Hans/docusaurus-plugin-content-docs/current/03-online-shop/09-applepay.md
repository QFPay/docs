import Link from '@docusaurus/Link';

# Apple Pay 支持

## 介绍

目前，QFPay Checkout 和 Element 支持嵌入式 Apple Pay 付款方式。商户必须先在 QFPay 系统中启用此付款选项，客户才能在兼容的设备上选择它。使用 Apple Pay 可以显著提高交易的成功率。

## 支持设备

通过 Apple Pay，客户可以轻松安全地在 iPhone、iPad、Mac、Windows 设备以及其他平台上使用第三方浏览器进行付款。请注意，Apple Pay 暂时不支持 Android 手机，如果客户在 Android 手机上选择 Apple Pay，付款按钮将被隐藏。

## 二维码付款

对于不原生支持 Apple Pay 的设备，例如 Windows 设备，系统将自动显示付款二维码。客户可以使用 iPhone 或 iPad 扫描二维码进行付款，前提是他们的 iOS 版本大于 18。

:::warning
目前，如果您的语言或 Apple Store 区域设置为中国大陆，此功能将不可用。
:::

<Link href="https://sdk.qfapi.com/images/applepay_qrcode.png" target="_blank">![Apple Pay QRcode Flow](@site/static/img/applepay_qrcode.png)</Link>