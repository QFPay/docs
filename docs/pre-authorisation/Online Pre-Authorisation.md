
# Online Pre-authorization Trade APIs
[Common APIs](#common-apis)
[Create Pre-Authorization Payment (freeze funds)](#create-pre-authorization-payment)
[Complete payment for pre-authorised transactions (deduct funds)](#complete-payment-for-pre-authorized-transactions)
[Cancel payment for pre-authorised transactions](#cancel-payment-for-pre-authorised-transactions)

## Common APIs
For API introduction and common APIs including **transaction refund** and **transaction enquiry**, you can refer to [https://sdk.qfapi.com/#introduction](https://sdk.qfapi.com/#introduction)


## Create Pre-Authorization Payment

The Pre-authorization Step has to be achieved using the Payment Element component. For details of the integration, please refer to the respective sessions in the payment element documentation.


## Complete payment for pre-authorised transactions

>Charge the customer for the amount booked in pre-authorised transactions

**url** :   /trade/v1/authtrade

**method** : POST

**header**:

| Header name | Must | Description |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE | Y | app code |
| X-QF-SIGN | Y | app key |
**parameters** : 
| Field          | Must | Description        |
| -------------- | ---- | ------------------ |
| txamt          | Y    | transaction amount |
| txcurrcd       | N    | transaction currency |
| mchid          | N    | mchid, merchant id |
| syssn          | Y    | original transaction ID from pre-authorized payment |
**response** :
```json
{
	 "sysdtm": "2024-02-26 15:04:12",
	 "paydtm": "2024-02-26 15:04:12",
	 "udid": "qiantai2",
	 "txcurrcd": "HKD",
	 "txdtm": "2024-02-26 07:04:11",
	 "txamt": "500",
	 "resperr": "交易成功",
	 "respmsg": "Capture received",
	 "out_trade_no": "",
	 "syssn": "20240226180500020000014116",
	 "orig_syssn": "20240226180500020000014079",
	 "respcd": "0000",
	 "chnlsn": "",
	 "cardcd": ""
}
```
## Unfreeze amount for pre-authorised transactions

>Only the non-captured (charged) amount in the transaction can be unfreezed (released back to the customer). This action can only be done ONCE.

**url** :   /trade/v1/unfreeze

**method** : POST

**header**:

| Header name | Must | Description |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE | Y | app code |
| X-QF-SIGN | Y | app key |
**parameters** : 
| Field          | Must | Description        |
| -------------- | ---- | ------------------ |
| txamt          | Y    | transaction amount      |
| txdtm          | Y    | transaction time         |
| syssn          | Y    | original transaction ID |
| out_trade_no   | Y    | original merchant order id |
| mchid          | N    | mchid, merchant id |
**response** :
```json
{
	 "sysdtm": "2024-02-26 17:17:05",
	 "paydtm": "2024-02-26 17:17:06",
	 "udid": "qiantai2",
	 "txcurrcd": "HKD",
	 "txdtm": "2024-02-26 09:17:05",
	 "txamt": "2000",
	 "resperr": "交易成功",
	 "respmsg": "Void received",
	 "out_trade_no": "",
	 "syssn": "20240226180500020000014222",
	 "orig_syssn": "20240226180500020000014220",
	 "respcd": "0000",
	 "chnlsn": "",
	 "cardcd": ""
}
```

## Refunding Completed (captured) Transactions

For integration, please refer to the "Common API" section of the documentation. Please note that the syssn used in the refund transaction should correspond to the syssn returned upon the /authtrade request.


## Notifications

General notification rule applies. For details, please refer to the Asynchronous Notifications section in the documentations (https://sdk.qfapi.com/?python#asynchronous-notifications)

Upon successful execution of the following actions, you should be able to receive a notification

- payment completion (captured)


These notifications will follow the same format as below. For different notification, the value of the field `notify_type` will differ

| Action Completed | notify_type value |
| -------------- | ------------------ |
| Payment Complete (captured) | payment |
| Unfreeze funds | unfreeze |
| Refund | refund |


```json
{
  "status": "1",
  "pay_type": "800101",
  "sysdtm": "2020-05-14 12:32:56",
  "paydtm": "2020-05-14 12:33:56",
  "goods_name": "",
  "txcurrcd": "HKD",
  "txdtm": "2020-05-14 12:32:56",
  "mchid": "",
  "txamt": "10",
  "exchange_rate": "",
  "chnlsn2": "",
  "out_trade_no": "YEPE7WTW46NVU30JW5N90H7DHD94N56B",
  "syssn": "20200514000300020093755455",
  "cash_fee_type": "",
  "cancel": "0",
  "respcd": "0000",
  "goods_info": "",
  "cash_fee": "0",
  "notify_type": "payment",
  "chnlsn": "",
  "cardcd": ""
}
```