import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WAP Payment

## Introduction
WAP Payment or H5 Payment enables merchants to call up digital wallet module in mobile browser Chrome etc. to collect payment.

## HTTP Request

`POST ../trade/v1/payment` <br/>

you can find the different digital wallets `pay_type` from the table below.

PayType | Description 
--------- | ------- 
800212 | WeChat H5 Payment, details please refer to [WeChat Pay H5 (in mobile browser)]()
801512 | Alipay Hong Kong WAP payment, details please refer to [# Alipay Service Window H5]()
800712 | UNIONPAY WAP Payment
805812 | PayMe Online WAP Payment 


## Request Parameters

Parameter name | Parameter code | Mandatory | Type | Description
--------- | -------- | --------- | ------- | ------- 
Payment amount | `txamt` | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1) 
Currency | `txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](../preparation/paycode#currencies) table for a complete list of available currencies
Payment type | `pay_type` | Yes | String(6) | e.g. PayMe WAP Payment = 805812
API Order Number | `out_trade_no` | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss
Product name identification | `goods_name` | No | String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
QF Pay merchant number | `mchid` | No | String(16) | May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request. 
Time zone | `txzone` | No | String(5) | Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800). 
Device ID | `udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal. 
Redirect URL | `return_url` | No | String(255) |  URL that the user will be redirected to when the payment finishes.
Notification URL | `notify_url` | No | String(255) | URL that the merchant will receive notification when the payment finishes. 


### Response Parameters

Parameter name | Parameter code | Type | Description 
--------- | -------- | --------- | ------- 
Payment type | `pay_type` | String(6) | e.g. PayMe Wap Payment |
System transaction time | `sysdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements. | 
Request transaction time | `txdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss  | 
Response message | `resperr` | String(128) |  
Payment amount | `txamt` | Int(11) |  
Other message information | `respmsg` | String(128) |  
External transaction number | `out_trade_no` | String(128) | External transaction number  
QFPay transaction number | `syssn` | String(40) | 
Return code | `respcd` | String(4) | 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](../preparation/paycode#transaction-status-codes) for a complete list of response codes.  |
Payment URL | `pay_url` | String(512) | generate QR code in Desktop web; redirect URL in WAP