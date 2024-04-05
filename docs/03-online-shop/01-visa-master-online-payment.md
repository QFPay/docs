import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Visa / Mastercard Online Payments

We currently support credit card payments in the [Hong Kong environment](../preparation/introduction#environments). All major credit card issuers are supported.

## Payment Steps

For credit card online payment integration, merchant can select one the the following integration methods

1. [QFPay Checkout Services](./checkout)
2. [QFPay Element SDK](./paymentelement)

## Asynchronous Notification

QFPay will also send the asynchronous payment notification for the transaction status update

> Sample notification payload

```json
{
    "cardtp": "5",
    "cancel": "0",
    "pay_type": "802801",
    "order_type": "payment",
    "clisn": "054256",
    "txdtm": "2021-12-08 07:04:15",
    "goods_detail": "",
    "out_trade_no": "354267281",
    "syssn": "20211208180500020000001637",
    "sysdtm": "2021-12-08 15:04:16",
    "paydtm": "2021-12-08 15:06:51",
    "goods_name": "",
    "txcurrcd": "HKD",
    "chnlsn2": "",
    "cardcd": "",
    "udid": "qiantai2",
    "userid": "1130000355",
    "txamt": "1",
    "chnlsn": "",
    "respcd": "0000",
    "goods_info": "",
    "errmsg": "success"
}
```

## Test cards

Test cards are available for the Sandbox environment for result simulation.

Field             | Value            | Expected Result
------------------| ---------------- | ---------------
card - MasterCard | 5200000000001096 | valid
card - Visa       | 4000000000001091 | valid
card - MasterCard | 5200000000001005 | valid (3DS frictionless)
card - Visa       | 4000000000001000 | valid (3DS frictionless)
card - MasterCard | 5200000000001120 | failed (at verification)
card - Visa       | 4000000000001125 | failed (at verification)
card - MasterCard | 5200000000001013 | failed (at  3DS frictionless)
card - Visa       | 4000000000001018 | failed (at  3DS frictionless)
