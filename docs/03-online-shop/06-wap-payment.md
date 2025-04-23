import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WAP Payment

## Introduction

WAP Payment or H5 Payment enables merchants to call up digital wallet module in mobile browser Chrome etc. to collect payment.

::: note
For WAP/H5 payments, it is recommended that merchants guide users to open the link using mobile browsers such as Chrome, Safari, or Edge. Due to the uncontrollable limitations of social apps like WhatsApp, Facebook Messenger, and WeChat, QFPay cannot guarantee that these apps can automatically invoke other wallet apps. For example, the WeChat app cannot automatically open the Alipay app. These are limitations of non-browser environments that are beyond our control.
:::
## HTTP Request

**Endpoint** : `/trade/v1/payment`

**Method** : `POST`

**PayType**: you can find the different digital wallets `pay_type` from the table below.

PayType | Description
------- | -------
800212 | WeChat H5 Payment, details please refer to [WeChat Pay H5 (in mobile browser)](/docs/online-shop/wechat/wechat-pay-h5)
801512 | Alipay Hong Kong WAP payment, details please refer to [Alipay Service Window H5](/docs/online-shop/alipay/alipay-service-window-h5)
800712 | UNIONPAY WAP Payment
805812 | PayMe Online WAP Payment

### Request Parameters

Attribute | Mandatory | Type | Description
-------- | --------- | ------- | -------
`txamt` | Yes | Int(11) | Payment amount of the transaction. Unit in cents (i.e. 100 = $1). Suggest value > 200 to avoid risk control
`txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](/docs/preparation/paycode#currencies) table for a complete list of available currencies
`pay_type` | Yes | String(6) | Payment type e.g. PayMe WAP Payment = 805812
`out_trade_no` | Yes | String(128)| API Order Number, external transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
`txdtm` | Yes | String(20) | Request transaction time format：<br/> YYYY-MM-DD hh:mm:ss
`goods_name` | No | String(64) | Product name identification, Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
`mchid` | No | String(16) | QFPay merchant number. May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request.
`udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal.
`return_url` | No | String(255) | Redirect URL that the user will be redirected to when the payment finishes.
`notify_url` | No | String(255) | Notification URL that the merchant will receive notification when the payment finishes.

### Response Parameters

Attribute | Type | Description
--------- | -------- | -------
`pay_type` | String(6) | Payment type, e.g. PayMe Wap Payment
`sysdtm` | String(20) | System transaction time, format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements.
`txdtm` | String(20) | Request transaction time, format：YYYY-MM-DD hh:mm:ss
`resperr` | String(128) | Response message
`txamt` | Int(11) | Payment amount. 
`respmsg` | String(128) | Other message information
`out_trade_no` | String(128) | External transaction number  
`syssn` | String(40) |QFPay transaction number
`respcd` | String(4) | Return code, 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](/docs/preparation/paycode#transaction-status-codes) for a complete list of response codes.  
`pay_url` | String(512) | Payment URL, generate QR code in Desktop web; redirect URL in WAP
