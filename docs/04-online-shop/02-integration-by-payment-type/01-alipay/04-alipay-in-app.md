---
id: alipay-in-app
title: Alipay In-App Payments
description: Integration guide for Alipay in-app payments using AlipayHK or AlipayCN SDK.
sidebar_label: Alipay In-App
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Alipay In-App Payments

This guide explains how to integrate Alipay In-App payments using the Alipay SDK (AlipayHK or AlipayCN). This payment method is used within a native app environment and provides a seamless user experience.

<Link to="/img/alipay-in-app.png" target="_blank">![Alipay APP Payment process-flow](@site/static/img/alipay-in-app.png)</Link>

## SDK Download

To begin integration, download the official SDK packages below:

- [Alipay Overseas SDK Documentation](https://global.alipay.com/docs/ac/app/client_integration)  
- [AlipayHK SDK Download](https://global.alipay.com/docs/ac/app_hk/download)  
- [AlipayHK SDK Trigger Guide](https://global.alipay.com/docs/ac/hkapi/securitypay_pay)

---

## HTTP Request

**Endpoint** : `/trade/v1/payment`  
**Method** : `POST`

| PayType   | Description                         |
|-----------|-------------------------------------|
| `801110`  | Alipay In-App (Overseas Merchants)  |
| `801510`  | Alipay In-App (HK Merchants)        |


## Required Parameters

| Parameter        | Required | Type        | Description                                                                 |
|------------------|----------|-------------|-----------------------------------------------------------------------------|
| `txamt`          | Yes      | Int         | Transaction amount in cents. Example: 100 = $1                              |
| `txcurrcd`       | Yes      | String(3)   | Currency code (e.g. HKD)                                                    |
| `pay_type`       | Yes      | String(6)   | Use 801110 for Alipay CN, 801510 for AlipayHK                               |
| `out_trade_no`   | Yes      | String(128) | Unique merchant transaction ID                                              |
| `txdtm`          | Yes      | String(20)  | Format: `YYYY-MM-DD hh:mm:ss`                                               |
| `goods_name`     | Yes      | String      | Product name                                                                |
| `return_url`     | Yes      | String      | Redirect URL after payment                                                  |
| `seller_id`      | Yes      | String      | Alipay seller account                                                       |
| `mchid`          | Yes      | String(16)  | QFPay assigned Merchant ID                                                  |

---

## Optional Parameters

| Parameter              | Type        | Description                                                                 |
|------------------------|-------------|-----------------------------------------------------------------------------|
| `goods_info`           | String      | Product description (avoid special characters)                              |
| `goods_detail`         | String      | Detailed product info                                                       |
| `trade_name`           | String      | Trade name shown to customer                                                |
| `pay_tag`              | String(16)  | Default: `ALIPAYHK`; Use `ALIPAYCN` for Alipay Mainland                     |

## Sample Request (Form Payload)
```plaintext
txamt=1
&txcurrcd=HKD
&pay_type=801510
&out_trade_no=052711570017898
&txdtm=2021-05-27 11:57:00
&goods_name=goods_name
&goods_info=goods_info
&mchid=nDB64h9qJ1An
&trade_name=trade_name
&goods_detail=goods_detail
&return_url=https://www.qfpay.global/
&pay_tag=ALIPAYHK
&seller_id=testoverseas9191@alipay.com
```

## Response Fields (pay_params)

These fields are returned by QFPay and should be passed into the Alipay SDK.

| Field                        | Description                                                          |
|-----------------------------|----------------------------------------------------------------------|
| `partner`                   | Alipay partner ID                                                    |
| `seller_id`                 | Seller account ID                                                    |
| `subject`                   | Product name                                                         |
| `body`                      | Product description                                                  |
| `total_fee`                 | Total transaction amount                                             |
| `notify_url`                | Callback URL for payment result                                      |
| `service`                   | Usually `mobile.securitypay.pay`                                     |
| `payment_type`              | Payment type                                                         |
| `_input_charset`            | Encoding format (e.g. UTF-8)                                         |
| `it_b_pay`                  | Transaction timeout                                                  |
| `return_url`                | Return URL                                                           |
| `payment_inst`             | Payment institution (e.g. ALIPAYHK)                                  |
| `currency`                 | Currency code (e.g. HKD)                                              |
| `product_code`             | Alipay product code                                                  |
| `sign`                     | RSA signature                                                        |
| `sign_type`                | Signature type (e.g. RSA)                                            |
| `secondary_merchant_id`    | Sub-merchant ID                                                      |
| `secondary_merchant_name`  | Sub-merchant name                                                    |
| `secondary_merchant_industry`| Industry code of sub-merchant                                      |

See [Public Payment Parameters](/docs/preparation/paycode#public-payment-parameters) for shared fields.


## Sample QFPay Response
```json
{
  "pay_type": "801510",
  "sysdtm": "2021-05-27 11:57:02",
  "paydtm": "2021-05-27 11:57:02",
  "udid": "qiantai2",
  "txcurrcd": "HKD",
  "txdtm": "2021-05-27 11:57:00",
  "txamt": "1",
  "resperr": "交易成功",
  "respmsg": "",
  "out_trade_no": "052711570017898",
  "syssn": "20210527154100020004180921",
  "pay_params": {
    "body": "goods_info",
    "forex_biz": "FP",
    "seller_id": "2088231067382451",
    "secondary_merchant_id": "1000007081",
    "service": "mobile.securitypay.pay",
    "payment_inst": "ALIPAYHK",
    "it_b_pay": "30m",
    "secondary_merchant_name": "IFlare Hong Kong Limited (external) - online",
    "_input_charset": "UTF-8",
    "sign": "iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D",
    "currency": "HKD",
    "out_trade_no": "20210527154100020004180921",
    "payment_type": "1",
    "total_fee": 0.01,
    "sign_type": "RSA",
    "notify_url": "https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify",
    "partner": "2088231067382451",
    "secondary_merchant_industry": "5941",
    "product_code": "NEW_WAP_OVERSEAS_SELLER",
    "return_url": "https://www.qfpay.global/",
    "subject": "goods_name"
  },
  "respcd": "0000",
  "chnlsn": "",
  "cardcd": ""
}
```

## Using Alipay SDK

After receiving the `pay_params` in the response, construct the `orderInfo` string required by the SDK in the following format:

1.	Join all fields in the format: `key="value"`
2.	Sort keys in ascending order (alphabetical)
3.	Concatenate with `&`
4.	Place `sign` and `sign_type` at the end

### Sample
```plaintext
_input_charset="UTF-8"&body="goods_info"&currency="HKD"&forex_biz="FP"&it_b_pay="30m"&notify_url="https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify"&out_trade_no="20210527154100020004180921"&partner="2088231067382451"&payment_inst="ALIPAYHK"&payment_type="1"&product_code="NEW_WAP_OVERSEAS_SELLER"&return_url="https://www.qfpay.global/"&secondary_merchant_id="1000007081"&secondary_merchant_industry="5941"&secondary_merchant_name="IFlare Hong Kong Limited (external) - online"&seller_id="2088231067382451"&service="mobile.securitypay.pay"&subject="goods_name"&total_fee="0.01"&sign="iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D"&sign_type="RSA"

```

:::note
Make sure you:
- Follow the correct SDK version and region (HK vs CN)
- Use the exact key names and values returned in pay_params
- Keep your sign logic consistent with Alipay SDK format
:::