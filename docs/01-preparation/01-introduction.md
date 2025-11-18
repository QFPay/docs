---
id: introduction
title: Introduction
sidebar_label: Getting Started
description: How to set up credentials, environments and generate request signatures.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Introduction

Welcome to the official QFPay OpenAPI documentation.

To get started, review the instructions below. This guide will help you integrate QFPay APIs smoothly and securely.

- Code examples in **Python, Java, Node.js, and PHP** are included directly in this documentation.
- You can copy and modify them to suit your integration.

If you'd like to quickly test the payment functions using Postman, we provide a pre-configured collection with a built-in script to generate the signature.  
**[Download Postman Collection](https://sdk.qfapi.com/assets/files/qfpay_openapi_payment_request.postman_collection-c8de8c8fe69f3fcd5a7653d41c289a29.json)**

---

## Developer Instructions

To use the QFPay OpenAPI, you must first obtain your API credentials, including:

- `app_code`
- `client_key`
- (Optional) `mchid`, if required for your merchant setup

:::note
If `mchid` is provided to you by QFPay, you must include it in all API requests (unless explicitly stated otherwise).  
If `mchid` is **not** provided, do **not** submit it in the request payload.
:::

### Credentials and Merchant Structure

- Every merchant receives a unique `app_code` and `client_key`.
- Merchants with multiple store branches are also assigned a `mchid` to distinguish outlets.
- The `mchid` is a hashed string that identifies the specific shop or branch.

### Environment Setup

QFPay provides the following environments for integration. The actual settlement behaviour depends on the account type used:

| Environment Name                            | Base URL                            | Notes                                                                 |
|--------------------------------------------|-------------------------------------|-----------------------------------------------------------------------|
| **Sandbox**                                 | `https://openapi-int.qfapi.com`     | Credit card tests only; no real transactions                         |
| **Live Testing**                            | `https://test-openapi-hk.qfapi.com` | If account is marked as testing, no settlement. Otherwise, behaves like production |
| **Production**                              | `https://openapi-hk.qfapi.com`      | Real live transactions and settlement environment                    |

:::warning
Remember to immediately refund transactions that were made in testing environments.
:::

:::note
Transactions made using a flagged **testing account** (even in live or test environments) will **not be settled**.
:::

### Encoding

Unless otherwise specified, all request and response data is encoded in `UTF-8`.

---

## Signature Requirement

All API requests must include a digital signature to ensure authenticity and data integrity.  
Unless otherwise specified, the signature must be passed in the HTTP header:

```
X-QF-SIGN: <your_signature>
```

---

## Signature Generation

To generate a valid signature, follow these steps:

### Step 1: Sort parameters

Sort all request parameters by **parameter name**, in **ASCII ascending order**.

**Example parameters:**

| Parameter   | Value        |
|-------------|--------------|
| `mchid`     | `ZaMVg12345` |
| `txamt`     | `100`        |
| `txcurrcd`  | `HKD`        |

Sorted result:

```
mchid=ZaMVg12345&txamt=100&txcurrcd=HKD
```

---

### Step 2: Append your client key

Append your secret `client_key` (issued by QFPay) to the end of the string.

If `client_key = abcd1234`, then:

```
mchid=ZaMVg12345&txamt=100&txcurrcd=HKDabcd1234
```

---

### Step 3: Hash the string

Hash the final string using one of the supported algorithms.  
**SHA256 is recommended**, but MD5 is also supported.

Example:

```
SHA256("mchid=ZaMVg12345&txamt=100&txcurrcd=HKDabcd1234")
```

---

### Step 4: Add to the request header

Include the hash result in the HTTP header:

```
X-QF-SIGN: <your_hashed_signature>
```

---

## Notes

- Do **not** insert any line breaks, tabs, or extra spaces when building the string.
- Parameter names and values are case-sensitive.
- If the signature is incorrect, double-check parameter order, encoding, and spacing.

For code instructions select Python, Java, Node.js or PHP with the tabs below.

<Tabs groupId="signature-generation">
<TabItem value="python" label="Python">

```python
# Create signature
def make_req_sign(data, key):
    keys = list(data.keys())
    keys.sort()
    p = []
    for k in keys:
        v = data[k]
        p.append('%s=%s'%(k,v))
    unsign_str = ('&'.join(p) + key).encode("utf-8")
    s = hashlib.md5(unsign_str).hexdigest()
    return s.upper()
```

</TabItem>
<TabItem value="java" label="Java">

```java
public class QFPayUtils {
    public static String getMd5Value(String input) {
        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(input.getBytes("UTF-8"));
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < array.length; i++) {
                sb.append(String.format("%02x", array[i]));
            }
            return sb.toString().toUpperCase();
        } catch (Exception e) {
            return null;
        }
    }
}
```
</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
const crypto = require("crypto");

const payload = {
  txamt: "10",
  txcurrcd: "HKD",
  pay_type: "800101",
  out_trade_no: "ORDER12345",
  txdtm: "2025-11-17 18:00:00",
  mchid: "ZaMVg*****",
};

const key = "client_key_here";
const ordered = Object.keys(payload).sort().map(k => `${k}=${payload[k]}`).join("&");
const signString = ordered + key;
const signature = crypto.createHash("md5").update(signString).digest("hex").toUpperCase();
console.log(signature);
```
</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function generateSignature($fields, $key) {
    ksort($fields);
    $str = '';
    foreach ($fields as $k => $v) {
        $str .= $k . '=' . $v . '&';
    }
    $str = rtrim($str, '&') . $key;
    return strtoupper(md5($str));
}

$fields = array(
    'pay_type' => '800101',
    'out_trade_no' => 'ORDER12345',
    'txcurrcd' => 'HKD',
    'txamt' => '2200',
    'txdtm' => '2025-11-17 18:00:00',
    'mchid' => 'ZaMVg*****'
);

$signature = generateSignature($fields, 'client_key_here');
echo $signature;
?>
```
</TabItem>
</Tabs>

> The above command returns JSON structured like this:

```json
{
  "signature": "B3B251B202801388BE4AC8E5537B81B1"
}
```

#### Request Description

:::note
The API will return response content in JSON format. We encourage developers to verify the signature in the response header in order to ensure message integrity.
:::

| Field        | Description                                        |
| ------------ | -------------------------------------------------- |
| Character    | `UTF-8`                                            |
| Method       | **POST/ GET** (Depends on individual API function) |
| Content-type | `application/x-www-form-urlencoded`                |

### Required Parameter Settings in HTTP Header to Request the API

| Field           | Mandatory | Description                                                                                                                                                                                   |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-QF-APPCODE`  | Yes       | App code assigned to the merchant                                                                                                                                                             |
| `X-QF-SIGN`     | Yes       | Signature generated according to the signature formulation method described above                                                                                                             |
| `X-QF-SIGNTYPE` | No        | Signature algorithm used to generate the signature. If SHA256 is used, the developer must pass the value as `SHA256`. The default value is `MD5` in case this field is not passed to the API. |