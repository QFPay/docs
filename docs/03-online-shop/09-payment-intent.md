# Payment Element SDK API

## Create payment intent API

**Endpoint** : `/payment_element/v1/create_payment_intent`

**Method** : POST

### Header

| Header name    | Mandatory | Description        |
| -------------- | --------- | ------------------ |
| `X-QF-APPCODE` | Yes       | 商戶code |
| `X-QF-SIGN`    | Yes       | 商戶 key |

### Request Parameters

| Attribute      | Mandatory | Description        |
| -------------- | ----------| ------------------ |
| `txamt`        | Yes       | 支付金额，单位分|
| `txcurrcd`     | No        | 币种 e.g. HKD/ CNY (ISO_4217) |
| `pay_type`     | Yes       | 支付类型 e.g. WP credit card: 802801 |
| `out_trade_no` | Yes       | 外部订单号 |
| `mchid`        | No        | mchid, 渠道用 |
| `return_url`   | No        | 支付成功跳转页面 |
| `failed_url`   | No        | 支付失败跳转页面 |
| `notify_url`   | No        | 交易通知发送地址 |

### Response Parameters

```json
{
    "respcd": "0000",
    "txamt": "123",
    "txcurrcd": "123",
    "sysdtm": "2022-11-14 16:15:16",
    "out_trade_no": "501871840",
    "payment_intent": "38aec7cef8564f309ea2265a454b8ca5",
    "intent_expiry": "2022-11-15 12:34:34"
}
```

*************************************************************************

## Create token intent API

**Endpoint**  :  `/payment_element/v1/create_token_intent`

**Method**  :  `POST`

### Header

| Header name    | Mandatory | Description        |
| -------------- | --------- | ------------------ |
| `X-QF-APPCODE` | Yes       | 商戶code |
| `X-QF-SIGN`    | Yes       | 商戶 key |

### Request Parameters

| Attribute      | Mandatory | Description        |
| -------------- | --------- | ------------------ |
| mchid          | No        | mchid, 渠道用  |
| customer_id    | Yes       | 顧客id |
| token_expiry   | No        | token到期日 |
| token_reason   | No        | token 建立原因 |
| token_reference| No        | token 參考 |
| notify_url     | No        | 交易通知发送地址 |

### Response Parameters

```json
{
    "respcd": "0000",
    "sysdtm": "2022-11-14 16:15:16",
    "token_intent": "38aec7cef8564f309ea2265a454b8ca5",
    "intent_expiry": "2022-11-15 12:34:34"
}
```
