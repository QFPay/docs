import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 线上预授权支付API

- [线上预授权支付API](#线上预授权支付api)
  - [常用API](#常用api)
  - [Creating and capturing payments](#creating-and-capturing-payments)
    - [第一步: 創建预授权支付訂單](#第一步-創建预授权支付訂單)
    - [第二步: 预授权支付扣款](#第二步-预授权支付扣款)
  - [预授权 （`PRE-AUTHORISED`）支付金额解冻](#预授权-pre-authorised支付金额解冻)
  - [已扣款预授权交易 (`CAPTURED`) 退款](#已扣款预授权交易-captured-退款)
  - [异步通知](#异步通知)

## 常用API

对接开发环境的常规指引可以参考 [https://sdk.qfapi.com/#introduction](../preparation/introduction)

在開始對接前，建議先參考以下內容：

- API凭据：在對接过程中，您将需要使用相应的API凭据来进行验证和授权。
- 测试环境：为了确保顺利的對接和开发，我们提供了测试环境，供您进行测试和调试。
- API请求签名生成：为了确保请求的安全性和完整性，您需要生成正确的API请求签名。详细的签名生成方法将在文档中提供。
- 常见错误代码：在对接过程中，了解常见的错误代码和对应的含义将有助于您更好地诊断和解决问题。

此外，我们还为预授权支付提供了以下常用API接口供您参考：

- [交易查询](../common-api/transaction-enquiry)
- [交易退款](../common-api/refunds)

## Creating and capturing payments

![Pre-authorisation payment flow](https://www.plantuml.com/plantuml/png/XOynJWKX441xJZ6r2HUmCDzu0HihOp61mIM1WSpE57fwTv4biJ0_eHZ8UpouxOgYLelRSYIWslKB8kr1SjVSsBq_V83tJ_0gz6owDSdV51-X2tcSUpn1m33uFzmmNx2hoIc5t-b_z8sJ48s0pN72SAnafG3MPgoEcn8KIWejhOBRhVSc2Xr5CvOhw8WZd8Qxo54xlhOExjU5AcRE_0dSs8VfpVU0M_Aw-dPKhPOV)

### 第一步: 創建预授权支付訂單

预授权步骤需要使用支付元素组件 (Payment Element) 来完成。有关對接的详细信息，请参考支付元素文档中相应的章节。

### 第二步: 预授权支付扣款

扣取客户在预授权交易中授权的金额

**URL位址** :   /trade/v1/authtrade

**请求方法** : POST

**HTTP 标头**:

| HTTP 标头 | 必填 | 描述 |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE | 是 | app code |
| X-QF-SIGN | 是 | app key |

**参数** :

| 参数          | 必填 | 描述        |
| -------------- | ---- | ------------------ |
| txamt          | 是   | 扣款金额 |
| txcurrcd       | 否    | 扣款币种 |
| mchid          | 否    | 商户编号（只适用于个别渠道商户） |
| syssn          | 是   | 预授权交易唯一订单号 |

**回应** :

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

## 预授权 （`PRE-AUTHORISED`）支付金额解冻

> 在交易中，只有未扣款的金额（预授权金额 减去 已扣款总金额）可以被解除冻结（退还给客户）。此操作只能执行一次。

**URL位址** :   /trade/v1/unfreeze

**请求方法** : POST

**HTTP 标头**:

| HTTP 标头 | 必填 | 描述 |
| -------------- | ---- | ------------------ |
| X-QF-APPCODE | 是 | app code |
| X-QF-SIGN | 是 | app key |

**参数** :

| 参数          | 必填 | 描述        |
| -------------- | ---- | ------------------ |
| txamt          | 是    | 解冻金额      |
| txdtm          | 是    | 解冻时间         |
| syssn          | 是    | 预授权交易唯一订单号 |
| out_trade_no   | 是    | 预授权交易商户订单号 |
| mchid          | 否    | 商户编号（只适用于个别渠道商户） |

**回应** :

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

## 已扣款预授权交易 (`CAPTURED`) 退款

有关对接请参考文档中的「常用API」部分。请注意，退款交易中使用的唯一订单号（syssn）应与/authtrade请求返回的订单号对应。

## 异步通知

一般通知规则适用。详细信息请参考文档中的异步通知部分 (../common-api/asynchronous-notification)

在以下操作成功执行后，您将会收到收到通知：

- 预授权交易扣款
- 解冻资金
- 退款

这些通知将采用以下相同的格式。对于不同的通知，字段 `notify_type` 的值将不同。 

| 操作（成功） |  `notify_type` 值 |
| -------------- | ------------------ |
| 预授权交易扣款 | payment |
| 解冻资金 | unfreeze |
| 退款 | refund |

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
