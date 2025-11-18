---
id: request-format
title: Request Format
sidebar_label: Request Format
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

### HTTP Request

`POST ../trade/v1/payment`

Listed below are the most common parameters for the payment endpoint. Please refer to the payment scenario applicable to you for additional parameters.

---

### Public Payment Request Parameters

| Attribute       | Mandatory           | Type         | Description                                                                                                |
|----------------|---------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `txamt`         | Yes                 | Int(11)      | Amount of the transaction. Unit in cents (i.e. 100 = $1). Suggest value > 200 to avoid risk control.|
| `txcurrcd`      | Yes                 | String(3)    | Transaction currency. View the [Currencies](./currencies.md) table for a complete list of available currencies|
| `pay_type`      | Yes                 | String(6)    | Please refer to the section [Payment Types](./paytypes.md) for a complete list of payment types|
| `out_trade_no`  | Yes                 | String(128)  | External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.|
| `txdtm`         | Yes                 | String(20)   | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss|
| `auth_code`     | Yes<br/>(CPM only)  | String(128)  | Specifies the authorisation code for scanning a barcode/QR Code. Each `auth_code` can be used only once and expires within one day. For testing CPM with Alipay or WeChat Pay, the `auth_code` can be extracted from the consumer wallet or scanned from the barcode manually.|
| `expired_time`  | No<br/>(MPM only)   | String(3)    | QRC expiration time in minutes. Default: 30 mins. Minimum: 5 mins, Maximum: 120 mins. <br/>Available for: <br/>800201, 800101, 801512, 801501, 801107, 801101, 801010, 801510|
| `goods_name`    | No                  | String(64)   | Goods name or item description. Cannot exceed 20 alphanumeric characters or contain special characters. Must be UTF-8 encoded if in Chinese. Required for App payments.|
| `mchid`         | No                  | String(16)   | May or may not be given to merchant. <br/>**If `mchid` is assigned**, it is mandatory to provide it in API requests.<br/>**If `mchid` is not assigned**, it must not be included in the request.|
| `udid`          | No                  | String(40)   | Unique device ID. Used for internal transaction tracking.|
| `notify_url`    | No                  | String(256)  | URL to receive asynchronous notifications once payment is completed.|

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