# ECR Technical Specification - Cloud Integration
## Introduction
With cloud integration, the merchant’s cash register will communicate with the QFPay POS terminal through internet. Merchant’s system will make an payment request to QFPay system. QFPay system will forward the request to the POS terminal and then shopper can complete the payment on the POS terminal.

![ecr cloud diagram](https://img-hk.qfapi.com/images/20240705/ecr_cloud_diagram.png)

>Now merchants can only receive the payment result ***asynchronously***, including through notification or actively querying QFPay system

## Before Integration
> For Device ID, merchants can get the Device ID in Haojin App
> Steps: go to "My" tab -> Settings -> Device ID

You need to
1. know [developer instructions](/docs/preparation/introduction#developer-instructions)
2. know [API environments](/docs/preparation/introduction#api-environments)
3. learn [signature generation](/docs/preparation/introduction#signature-generation)
4. know [transaction status code](/docs/preparation/paycode#transaction-status-codes)
5. know [asynchronous notification](/docs/common-api/asynchronous-notification)

> Cloud integration can only be done in production environment, because we only provide QFPay production merchant app to our merchants.

## Asynchronous Workflow
![ecr cloud sequence diagram](https://www.plantuml.com/plantuml/png/RLBDZXCn3BxdAQoUuGLwG8iga3WWBGiluCrufXQPE6ixM_hs9AKJLIs7LXhx-_cIBq_cg5xN532wAEmErLnMqXsWGRn-X5Vv0xllfF68sU4dJxGBfH4vSccJHaCxmWijRBvnDL2Ue37_iNzyVSRp7UioWo-75pWagHDyVlvsuMBX_m5_aQwSCLqmHMmOXB2er085poir_9pa5B2wvBg-aeQeyF5JLzqFYD9R9VFGXdqNTTz6NZK3nj-maXak5B8uWV9oz60rnZQ5Y4OFCg0KYTzf2ZDokc9EAdaP2CwpV03HDfX9mGMKh4Ws6cxzEDrn2rN4zZ2Bdb2dX-1jkM66-qCiR8gNXiUcgFHZXAtQeH5bBOcS1lAT4IPUs3712LFRzVHHQMA7Y3fj4JQfVODRINY-YM4rUKWY1MfsJh2GtssxgFDAKlss9yvlbNL8zLDujN3jwCwWNrmtkJu3j7CygcIfrk-JPuxeBFcsREkShTExHBsRwrCUVEu2WDEaZT0DBx-dzbVNz1S0)
[Original Link](https://www.plantuml.com/plantuml/png/RLB1ZjGm3BtdAwmvmm_C0Ir2GkA0j0X-m9kw7OiqpjhE3lFt96KQZReSsghsUy_FUNaoH_Mwfe3HHU7qfPhBIde2D8Ztd_0YV-3qdJHUC3lyv8bEeJGYHowzSefe5r1Qs7pdQg0yGMF-O__u-eot0skhmUVdRni32_-l_OjqvOnfmnIn8Hl2eb8B5BojrF1pacl0wfBh-a8QeiB7JrtrF21AhvNCGolsNjHpAtdL31X_mqfck538uWJAoyM3rHXR5I8Q7MNwDnA_qHHcv7J7N5NoCX2SP_a0egqmau8BA5cHR3IczNNwnDrK4Jl3B7f5dTuPRyqTCwQ_iuLDSSjrT8fANoFiWGwDA6j9v3IGRummySAE2QwOMg-xZqeJEyHcQRUmIvqRt4h2suCDgyb34YbGitE2XVpGxQBEAqdrnvmulrRM8TMty6hXdj5XG3-uFkH-3T1kyQAIfLe_JvuvehFanx2jS_PC3uvSnWKUVEu2WDEaZT07RizJUzKr_GK0)
In cloud integration, merchant's cash register system and QFPay system will communicate with each other over the Internet.
1. Merchant's cash register system make an request to QFPay system
2. QFPay system will forward the request to the QFPay terminal (the terminal you indicated in the request) 
3. QFPay terminal will start the process after received an request
4. QFPay system will send the success payment result to registered notification address if available
5. Merchant can receive the payment result **asynchronously**:
- [Asynchronous Notification](/docs/common-api/asynchronous-notification): only success payment result will be sent,  require notification address registration
- [Transaction Enquiry](#transaction-enquiry): merchant can get payment result including receipt data

## API Endpoints
[Payment](#payment)
[Refund/Void](#refundvoid)
[Request Cancel](#request-cancel)
[Print Receipt](#request-cancel)
[Print Transaction Summary](#print-transaction-summary)
[Transaction Enquiry](#transaction-enquiry)

---
### Payment

`Path: /ecr/v1/payment/async`
`Method: POST`
`Request parameters:`
| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `txamt` |Y| Integer |Transaction amount e.g. $1.1 => 110 |
| `termid` |Y| String | Device ID, merchant can find the Device ID on QFPay POS app setting|
| `channel` |Y| String | Payment type, <br/> (1) card_payment -> card payment (Visa/Mastercard)<br/>(2) wx -> Wechat Pay<br/>(3) alipay -> Alipay<br/>(4) payme -> PayMe<br/>(5) union -> UnionPay QRCode<br/>(6) fps -> FPS<br/>(7) octopus -> Octopus Card<br/>(8) unionpay_card -> UnionPay Card<br/>(9) amex_card -> American Express Card |
| `out_trade_no` |Y| String | Merchant Order Id|
| `camera_id`|N|Integer| Camera that will be used in CPM<br/> 0: back camera (default), <br/> 1: front camera  |
| `scan_type`|Y|String| Scan type<br/>QRCODE_PAY: QR Code payment<br/>SCAN_PAY: Scan Code to pay |
| `payment_timeout` |N| Integer | Payment timeout, unit:second, default:120 |

`Sample Response:`

Success:

```json
{
    "resperr": "Order push success",
    "respcd": "0000",
    "respmsg": ""
}
```

Error:

```json
{
    "resperr": "Termid 235C****503 is unbounded, please login MchntApp to bind it!",
    "respcd": "1106",
    "respmsg": ""
} 
```

### Refund/Void

>Octopus does not support refund/void function

>For Card payment (Visa/Mastercard), UnionPay Card and American Express Card,  the refund amount for same-day payments must be **full amount**

`Path : /ecr/v1/refund/async`
`Method: POST`
`Request parameters:`
| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `syssn` |Y| String | QFPay Transaction Id|
| `termid` |Y| String | Device ID |
| `txamt` |N| String | Refund amount, default refund amount: order refundable amount, support both full and partial refund |
| `allow_modify_flag` |N| Integer | 0: disable refund amount modification on terminal<br/>1: allow refund amount modification on QFPay terminal |

> 

`Sample Response:`

Success:

```json
{
    "resperr": "Refund push success",
    "respcd": "0000",
    "respmsg": ""
}
```

Error:

```json
{
    "resperr": "Transaction doesn't exist or now isn't in operation time",
    "respcd": "1136",
    "respmsg": ""
}
```

### Request Cancel
> This API is to cancel the current request processing on the terminal

`Path: /ecr/v1/cancel/async`
`Method: POST`
`Request Parameters:`
| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `termid` |Y| String | Device ID |

`Sample Response:`

Success:

```json
{
    "resperr": "Cancel push success",
    "respcd": "0000",
    "respmsg": ""
}
```

Error:

```json
{
    "resperr": "Termid 235C****503 is unbounded, please login MchntApp to bind it!",
    "respcd": "1106",
    "respmsg": ""
} 
```

### Print Receipt

`Path: /ecr/v1/print_receipt/async`
`Method: POST`
`Request Parameters:`
| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `syssn` |Y| String | QFPay Transaction Id|
| `out_trade_no` |Y| String | Merchant Order Id |
| `termid` |Y| String | Device ID |


`Sample Response:`

Success:

```json
{
    "resperr": "Print receipt push success",
    "respcd": "0000",
    "respmsg": ""
}
```

Error:

```json
{
    "resperr": "The order doesn't exist",
    "respcd": "1136",
    "respmsg": ""
}
```

### Print Transaction Summary

`Path: /ecr/v1/print_summary/async`
`Method: POST`
`Request Parameters:`
| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `termid` |Y| String | Device ID |

`Sample Response:`

Success:

```json
{
    "resperr": "Print Summary push success",
    "respcd": "0000",
    "respmsg": ""
}
```

Error:

```json
{
    "resperr": "Termid 235C****503 is unbounded, please login MchntApp to bind it!",
    "respcd": "1106",
    "respmsg": ""
}
```
### Transaction Enquiry

`Path: /ecr/v1/query`
`Method: POST`
`Request parameters`
> Either one of parameter **syssn** or **out_trade_no** must be provided
> Enquiry time range for out_trade_no parameter will be current month and last month

| Parameter name | Mandatory | Parameter type | Description |
|---|---|---|---|
| `syssn` |N| String | QFPay Transaction Id|
| `out_trade_no` |N| String | Merchant Order Id |
| `termid` |Y| String | Device ID |

`Response parameters:`
| Parameter name | Parameter type | Description |
|---|---|---|
| cancel | Integer| Cancel status |
| clisn | String | Client serial number |
| opuid | String | Operator Id|
| txamt | Integer | Transaction amount |
| syssn | String | QFPay transaction Id |
| tradetp | String | Payment type|
| system | String | QFPay system time |
| txcurrcd | String | Transaction currency |
| origssn | String | Original QFPay transaction Id |
| customer_source | String | Customer source |
| opuser | String | Operator name |
| nickname | String | Shop name |
| allow_refund_amt | String | Refundable amount |
| busicd | string | business code, please refer to [Pay Type](/docs/preparation/paycode#paytype)
| respcd | String | response code, please refer to [transaction status code](/docs/preparation/paycode#transaction-status-codes)|
| origbusicd | String | Original business code |
| chnlsn | String | Channel serial number |

The following response parameters will only be displayed in card payment:
| Parameter name | Parameter type | Description |
|---|---|---|
| cardtype | String | Card type, e.g. CREDIT, DEBIT |
| cardscheme| String | Card scheme, e.g. VISA,MASTERCARD |
| cardno | String | Masked card number |
| batchno | String | Batch number |
| refno | String | Reference number | 
| storeno | String | Store number |
| termno | String | Terminal number |

The following response parameters will only be displayed in **Octopus**
| Parameter name | Parameter type | Description |
|---|---|---|
| octopus_order_status | String | Octopus order status |
| octopus_account_id | String | Wallet account Id|
| octopus_balance | String | Octopus card remaining amount |
| octopus_order_id | string | Octopus order Id |
| octopus_paydtm | String | Payment time |
| octopus_no | String | Octopus card no |

`Sample Response:`

Common Success:

```json
{
    "resperr": "Query success",
    "respcd": "0000",
    "respmsg": {
        "server_time": "2024-07-04 15:14:25",
        "chnluserid": "WP_202111_HKD_TEST",
        "cancel": 0,
        "cardscheme": "ECMC",
        "chnltermid": "1001619",
        "opuid": "0000",
        "out_trade_no": "202307260004",
        "syssn": "2024062718******00018000",
        "tradetp": "payment",
        "sysdtm": "2024-06-27 15:16:35",
        "billamt": 0,
        "txcurrcd": "344",
        "origssn": "",
        "allow_refund_amt": 511,
        "opuser": "Store Account",
        "nickname": "QFPay store",
        "customer_source": "",
        "cardcd": "",
        "cardno": "520000******1096",
        "userid": 113****619,
        "txamt": 511,
        "busicd": "802801",
        "clisn": "054995",
        "cardtype": "",
        "respcd": "0000",
        "origbusicd": "",
        "chnlsn": ""
    }
}
```

Octopus Success:

```json
{
    "resperr": "Query success",
    "respcd": "0000",
    "respmsg": {
        "server_time": "2024-07-04 15:10:44",
        "octopus_no": "",
        "chnluserid": "",
        "octopus_balance": 0.0,
        "cancel": 0,
        "chnltermid": "",
        "opuid": "0000",
        "out_trade_no": "",
        "syssn": "202406251******017879",
        "tradetp": "payment",
        "octopus_paydtm": "2024-06-25 15:58:00",
        "sysdtm": "2024-06-25 15:57:38",
        "billamt": 0,
        "txcurrcd": "344",
        "octopus_account_id": "380001612",
        "origssn": "",
        "allow_refund_amt": 100,
        "opuser": "Store Account",
        "nickname": "QFPay store",
        "octopus_order_id": "",
        "octopus_order_status": "SUCCESS",
        "customer_source": "China Hong Kong",
        "cardcd": "",
        "userid": 113****619,
        "txamt": 100,
        "busicd": "803708",
        "clisn": "057458",
        "respcd": "0000",
        "origbusicd": "",
        "chnlsn": "OEM20240625125042"
    }
}
```

Card Success:

```json
{
    "resperr": "Query success",
    "respcd": "0000",
    "respmsg": {
        "server_time": "2024-07-04 15:15:17",
        "chnluserid": "WP_202111_HKD_TEST",
        "cancel": 0,
        "cardscheme": "ECMC",
        "chnltermid": "1001619",
        "opuid": "0000",
        "out_trade_no": "202307260004",
        "syssn": "202406271******00018000",
        "tradetp": "payment",
        "sysdtm": "2024-06-27 15:16:35",
        "billamt": 0,
        "txcurrcd": "344",
        "origssn": "",
        "allow_refund_amt": 511,
        "opuser": "Store Account",
        "nickname": "QFPay store",
        "customer_source": "",
        "cardcd": "",
        "cardno": "520000******1096",
        "userid": 113****619,
        "txamt": 511,
        "busicd": "802801",
        "clisn": "054995",
        "cardtype": "",
        "respcd": "0000",
        "origbusicd": "",
        "chnlsn": ""
    }
}
```

Failure:
```json
{
    "resperr": "The order doesn't exist",
    "respcd": "1136",
    "respmsg": ""
}
```



