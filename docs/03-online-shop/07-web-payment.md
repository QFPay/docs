import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Web Payment

## Introduction

Customers make purchases on a merchant website with Web Payment methods. The user scans the displayed QR code to pay, confirms the total amount and makes the payment. Finally the customer can be redirected to a selected page on the merchant's website using the `return_url` parameter. The selected wallet will deduct the payment amount from the consumer's wallet in real-time in HKD and QFPay settles the payment amount to merchants in HKD.

## HTTP Request

`POST ../trade/v1/payment` <br/>

PayType | Description
--------- | -------
800201 | Wechat Online WEB Payment (HK Merchants), details please refer to [Wechat WEB QRC Payments](/docs/online-shop/wechat/wechat-web-qrc-payments)
801514 | Alipay Online WEB Payment (HK Merchants), details please refer to [Alipay Online Payments](/docs/online-shop/alipay/alipay-online-payments)
800714 | UNIONPAY PC-Web Payment (HK Merchants)
805814 | PayMe Online WEB (in browser Chrome etc.) Payment (HK Merchants)

### Request Parameters

Attribute | Mandatory | Type | Description
-------- | --------- | ------- | -------
`txamt` | Yes | Int(11) | Payment amount  of the transaction. Unit in cents (i.e. 100 = $1)
`txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](/docs/preparation/paycode#currencies) table for a complete list of available currencies
`pay_type` | Yes | String(6) | Payment type e.g. PayMe Web Payment = 805814
`out_trade_no` | Yes | String(128)| API Order Number, external transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
`txdtm` | Yes | String(20) | Request transaction time format：<br/> YYYY-MM-DD hh:mm:ss
`expired_time` | No<br/> (MPM only) | String(3)  | Order expiration time, QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.
`goods_name` | No | String(64) | Product name identification, Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
`mchid` | No | String(16) | QFPay merchant number. May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request.
`txzone` | No | String(5) | Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800).
`udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal.
`return_url` | No | String(512) | Redirect URL that the user will be redirected to when the payment finishes.

### Response Parameters

Attribute | Type | Description
-------- | --------- | -------
`pay_type` | String(6) | Payment type e.g. PayMe Web Payment = 805814
`sysdtm` | String(20) | System transaction time, format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements.
`txdtm` | String(20) | Request transaction time, format：YYYY-MM-DD hh:mm:ss
`resperr` | String(128) |Response message
`txamt` | Int(11) |Payment amount
`respmsg` | String(128) | Other message information
`out_trade_no` | String(128) | External transaction number  
`syssn` | String(40) | QFPay transaction number
`respcd` | String(4) | Return code, 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](/docs/preparation/paycode#transaction-status-codes) for a complete list of response codes.
`pay_url` | String(512) | Payment URL, generate QR code in Desktop web
