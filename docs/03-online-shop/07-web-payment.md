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
801514 | Alipay Online WEB Payment (HK Merchants), details please refer to [Alipay Online Payments](./alipay/alipay-online-payments)
800714 | UNIONPAY PC-Web Payment (HK Merchants)
805814 | PayMe Online WEB (in browser Chrome etc.) Payment (HK Merchants)

### Request Parameters

Parameter name | Parameter code | Mandatory | Type | Description
--------- | -------- | --------- | ------- | -------
Payment amount | `txamt` | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1)
Currency | `txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](../preparation/paycode#currencies) table for a complete list of available currencies
Payment type | `pay_type` | Yes | String(6) | e.g. PayMe Web Payment = 805814
API Order Number | `out_trade_no` | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss
Order expiration time | `expired_time` | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.
Product name identification | `goods_name` | No | String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
QF Pay merchant number | `mchid` | No | String(16) | May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request. 
Time zone | `txzone` | No | String(5) | Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800).
Device ID | `udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal. 
Redirect URL | `return_url` | No | String(512) |  URL that the user will be redirected to when the payment finishes.

### Response Parameters

Parameter name | Parameter code | Type | Description
--------- | -------- | --------- | -------
Payment type | `pay_type` | String(6) | e.g. PayMe Web Payment = 805814 |
System transaction time | `sysdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements. | 
Request transaction time | `txdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss  | 
Response message | `resperr` | String(128) |
Payment amount | `txamt` | Int(11) |
Other message information | `respmsg` | String(128) |  
External transaction number | `out_trade_no` | String(128) | External transaction number  
QFPay transaction number | `syssn` | String(40) | 
Return code | `respcd` | String(4) | 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](../preparation/paycode#transaction-status-codes) for a complete list of response codes.  |
Payment URL | `pay_url` | String(512) | generate QR code in Desktop web
