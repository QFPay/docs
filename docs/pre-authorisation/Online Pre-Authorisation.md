
# Online Pre-authorisation Payment APIs
* [Common APIs](#common-apis)
* [Create Pre-Authorisation Payment (freeze funds)](#create-pre-authorisation-payment)
* [Complete payment for pre-authorised transactions (deduct funds)](#complete-payment-for-pre-authorised-transactions)
* [Cancel payment for pre-authorised transactions](#cancel-payment-for-pre-authorised-transactions)

## Common APIs
Instructions on general integration with the development environment is available on [https://sdk.qfapi.com/#introduction](https://sdk.qfapi.com/#introduction)

For instance you may find the following useful before you start the integration:

- API credentials to be used
- testing environments
- signature generation for api requests
- Common error codes

You can also find common APIs that are also applicable to pre-authorisation payments: 

- Transaction Enquiry (https://sdk.qfapi.com/?python#transaction-enquiry)
- Transaction Refunds (https://sdk.qfapi.com/?python#refunds)


## Creating and capturing payments

![Pre-authorisation payment flow](https://www.plantuml.com/plantuml/png/XOynJWKX441xJZ6r2HUmCDzu0HihOp61mIM1WSpE57fwTv4biJ0_eHZ8UpouxOgYLelRSYIWslKB8kr1SjVSsBq_V83tJ_0gz6owDSdV51-X2tcSUpn1m33uFzmmNx2hoIc5t-b_z8sJ48s0pN72SAnafG3MPgoEcn8KIWejhOBRhVSc2Xr5CvOhw8WZd8Qxo54xlhOExjU5AcRE_0dSs8VfpVU0M_Aw-dPKhPOV)

![Pre-authorisation payment flow](https://www.plantuml.com/plantuml/png/bP71RXGn38RlUGghP_e2Uq3bG2KEI4KyGIRZsOsOnAbZ8xPFJnBLmuxAg73xPV-_xIzvgE9PDAtE1o66e5Ke8OElctvjDHKkFajlcNOJ_OAlrlX-hOB95SyIGoozTBUb2h7uzQwd5-8Zr-J33yppiALfR_hs-EIlW2icpD8TfbrBGBjaN3DS--2dfozGaN_6W2Fsl9HciP0xCsc1mEW5eJ3UUvKBSNpn4Yb3yuubhKfPquJijbUw_sWtd23ceWB1yzpaGYwJ870yNyGz4fklzGJFF4P_WBAYhys52p88mUTNqqn1Dx8-o5cyRHpdd-ok5dvMhE8OHJdVbAkkOdI-NdFea-8ImrZknfW-BqsdOsoe6WBMki_siyRWhco7veKHNn0MpNEzVI_xthwjV_xfZxSM37qk4C_DsRjsq-OnmZHj-6-xnc_r_tm0Yxt7UmiSV17bl_2-1JRlCQzP3d2jkQUrii72Fz9Qx7tO9acvk8ScDQs_0G00)

### Step 1: Create Pre-Authorisation Payment

The Pre-authorisation Step has to be achieved using the Payment Element component. For details of the integration, please refer to the respective sessions in the payment element documentation.


### Step 2: Capture payment for pre-authorised transactions

Capture the amount booked by the customer in pre-authorised transactions

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
| syssn          | Y    | original transaction ID from pre-authorised payment |

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

## Unfreeze amount for `PRE-AUTHORISED` transactions

>Only the non-captured (`pre-authorised amount - captured amount`) amount in the transaction can be unfreezed (released back to the customer). This action can only be done ONCE.

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

## Refunding Completed (`CAPTURED`) Transactions

For integration, please refer to the "Common API" section of the documentation. Please note that the syssn used in the refund transaction should correspond to the syssn returned upon the /authtrade request.


## Notifications

General notification rule applies. For details, please refer to the Asynchronous Notifications section in the documentations (https://sdk.qfapi.com/?python#asynchronous-notifications)

Upon successful execution of the following actions, you should be able to receive a notification

- payment completion (captured)
- unfreeze funds
- refund


These notifications will follow the same format as below. For different notification, the value of the field `notify_type` will differ

| Action Completed | notify_type value |
| -------------- | ------------------ |
| Payment Captured | payment |
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