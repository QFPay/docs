# Payment Element SDK API

## Create payment intent API

**url**     :   /payment_element/v1/create_payment_intent

**method**  :   POST

**header**:

| Header name    | Must | Description        |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE   | Y    | 商戶code |
| X-QF-SIGN      | Y    | 商戶 key |

**params**  :   

| Field          | Must | Description        |
| -------------- | ---- | ------------------ |
| txamt          | Y    | 支付金额，单位分|
| txcurrcd       | N    | 币种 e.g. HKD/ CNY (ISO_4217) |
| pay_type       | Y    | 支付类型 e.g. WP credit card: 802801 |
| out_trade_no   | Y    | 外部订单号 |
| mchid          | N    | mchid, 渠道用 |
| return_url     | N    | 支付成功跳转页面 |
| failed_url     | N    | 支付失败跳转页面 |
| notify_url     | N    | 交易通知发送地址 |

**response**:   
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

**url**     :   /payment_element/v1/create_token_intent

**method**  :   POST

**header**:

| Header name    | Must | Description        |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE   | Y    | 商戶code |
| X-QF-SIGN      | Y    | 商戶 key |

**params**  :   

| Field          | Must | Description        |
| -------------- | ---- | ------------------ |
| mchid          | N    | mchid, 渠道用  |
| customer_id     | Y    | 顧客id |
| token_expiry    | N    | token到期日 |
| token_reason    | N    | token 建立原因 |
| token_reference    | N    | token 參考 |
| notify_url     | N    | 交易通知发送地址 |

**response**:   
```json
{
    "respcd": "0000",
    "sysdtm": "2022-11-14 16:15:16",
    "token_intent": "38aec7cef8564f309ea2265a454b8ca5",
    "intent_expiry": "2022-11-15 12:34:34"
}
```
