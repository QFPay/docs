import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Visa / Mastercard 线上支付

我们目前支持在[香港环境](../preparation/introduction#environments) 中使用信用卡付款。 支持所有主要信用卡发卡机构。

## 支付整合流程

对于信用卡在线支付集成，商户可以选择以下集成方式之一

1. [QFPay Checkout Services]()
2. [QFPay Element SDK]()


## 异步通知
QFPay也会发送交易状态更新的异步支付通知

> 通知范例

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
    "txcurrcd": "USD",
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

## 测试卡

测试卡可用于沙盒环境以进行结果模拟。

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
