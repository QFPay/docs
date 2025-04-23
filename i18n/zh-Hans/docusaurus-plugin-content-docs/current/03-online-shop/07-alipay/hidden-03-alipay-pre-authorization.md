import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 支付宝预授权扣款

## 资金授权冻结

支付宝预授权目前仅支持资金授权，暂不支持信用授权；订单默认15分钟失效; 如遇币种校验问题请咨询技术人员或发邮件到`technical.support@qfpay.com`获取支持；当资金授权发生之后一段时间内，由于买家或者商家等其他原因需要要解冻资金，商家可通过【订单退款】将授权资金进行解冻，收到解冻请求并验证成功后，冻结资金按原路进行解冻. 此外, 商家可以发起本分或全部冻结资金的转账, 以便收取未结客户发票的资金.

:::note
目前支付宝预授权扣款支持币种：HKD,USD,AUD,NZD,THB,PHP,MYR
:::

<Link to="/img/alipay_preauth_process.jpg" target="_blank">![Alipay Pre-Auth process-flow](@site/static/img/alipay_preauth_process.jpg)</Link>

### HTTP请求

`POST ../trade/v1/payment` <br/>

从如下表格中根据您的结算场景选择 `pay_type`.

支付类型 | 描述
--------- | -------
801801 | Alipay Pre-Authorization in-store QRC Payment - Consumer Present Mode (CPM)
801808 | Alipay Pre-Authorization in-store QRC Payment - Merchant Present Mode (MPM)  
801810 | Alipay Pre-Authorization in-APP Payment
801814 | Alipay Pre-Authorization Online Payment

### 请求参数

```plaintext

Request Body:

{
  goods_name=goodcode1&mchid=R1zQrTdJnn&out_trade_no=alipay201909261129164551bcdd40&pay_type=801802&txamt=1&txcurrcd=USD&txdtm=2019-09-26 11:29:16
}

```

> The above command returns JSON structured like this:

```json
{
  "pay_type": "801802", 
  "sysdtm": "2019-09-26 11:29:18", 
  "paydtm": "2019-09-26 11:29:19", 
  "txdtm": "2019-09-26 11:29:16", 
  "udid": "qiantai2", 
  "txcurrcd": "USD", 
  "txamt": "1", 
  "resperr": "Network busy, don't worry, we are fixing it (1297)", 
  "respmsg": "预授权发码参数异常或参数缺失", 
  "out_trade_no": "alipay201909261129164551bcdd40", 
  "syssn": "20190926000200020016004244", 
  "respcd": "1297", 
  "chnlsn": "", 
  "cardcd": ""
}
```

|Parameter name | Attribute | Mandatory | Type | Description |
|:----    |:---|:----- |-----   |----   |
| Public payment parameter    |—|— |—  |—   |
| Alipay openid  |`openid`  |No | String(64)  | Corresponding to the APP authorization method.   |
| Alipay payment code   |`auth_code`|No |String(128)   | Specifies the authorization code for scanning a barcode/QR Code. The `auth_code` returned is unique in each authorization. Each `auth_code` can only be used once and will automatically expire. For testing CPM with Alipay and WeChat Pay the auth_code can be extracted by any QRC reader or manually found in the consumer wallet below the barcode. |

### 响应参数

|Attribute | Second parameter code | Type | Parameter name | Description |
|:----    |:---|:----- |-----   |----   |
|Public response parameters |—  |— |—   |—|

## 资金授权撤销

Only calls `alipay.fund.auth.operation.cancel` when the merchant’s system encounters timeout and has to stop the subsequent processes, or when the pre-auth result is unknown. If you want to perform a similar task for normal pre-auth (freezing) transactions, please call `alipay.fund.auth.order.unfreeze`. After submitting the fund authorization call **Order Inquiry**, and there is no clear authorization result and then call **Fund Authorization Cancellation**.

### HTTP请求

`POST ../trade/v1/reversal`

## 请求参数

|Parameter name | Attribute | Mandatory | Type | Description |
|:----    |:---|:----- |-----   |-----   |
|Merchant ID    |`mchid` | Yes  |String   | The unique merchant ID is created by QFPay during the merchant onboarding process.    |
|QFPay transaction number    | `syssn` | No | String    | Multiple entries are separated by English commas |
|External transaction number    | `out_trade_no` | No | String    | e.g. Developer platform order number |
|Transaction amount    | `txamt` |No |    Int   |Whether to pass this parameter depends on the payment channel, Alipay and WeChat Pay do not need to submit this information  |
|Transaction request time    |`txdtm`  |Yes  |String    |Format: YYYY-MM-dd hh:mm:ss  |
|Unique device id   |`udid` |No|String    |   |

### 响应参数

|Attribute | Type | Parameter name | Description |
|:----    |:---|:----- |-----   |
|`syssn` |String(40)| QFPay transaction number |  |
|`orig_syssn` |String(40)| External transaction number| Developer platform transaction number |
|`txdtm`  |String(20)| Time of the transaction request| Format: YYYY-MM-dd hh:mm:ss |
|`txamt`  |Int(11)| Order payment amount |  |
|`sysdtm`   |String(20)| System trading time|  Format: YYYY-MM-dd hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements. |
|`respcd`   |String(4)| Return code |  |
|`respmsg`    | String(128)| Information description |  |
|`resperr`    |String(128)| Description error |  |
|`cardcd`     |String| Card number |  |
|`txcurrcd`   |String(3)| Currency  | Transaction currency. View the [Currencies](/docs/preparation/paycode#currencies) table for a complete list of available currencies |

```plaintext

Request Body:

{
  mchid=R1zQrTd***&syssn=20190722000300020081074842
}

```

> The above command returns JSON structured like this:

```json
{
  "respmsg": "", 
  "resperr": "请求成功",
  "respcd": "0000",
  "syssn": "20190722000302320081074842",
  "sysdtm": "2019-07-22 15:20:54",
  "txamt": "10",
  "txdtm": "2019-07-22 15:20:54",
  "cardcd": "",
  "txcurrcd": "HKD",
  "orig_syssn": "20190722000300020081074842",
  "respmsg": ""
}
```

## 授权冻结转扣款

### HTTP请求

`POST ../trade/v1/authtrade`

### 请求参数

| Parameter name | Attribute | Mandatory | Type | Description |
|:----    |:---|:----- |-----   |----   |
|Merchant ID    | `mchid`  | No | String  | The unique merchant ID is created by QFPay during the merchant onboarding process. |
|QFPay transaction number | `syssn`  | Yes | String   |  Fund authorization number  |
|External transaction number    | `out_trade_no` | Yes | String    |Developer platform transaction number |
|Transaction amount    | `txamt`  | Yes | int     |The actual amount of consumption, the maximum deduction amount cannot exceed the fozen funds|
|Transaction request time    | `txdtm`   | Yes | String      | Format: YYYY-MM-DD hh:mm:ss|
| Device ID   | `udid`   | No | String         |Must be unique|
| Redirect URL   | `return_url`   | No | String        | Redirect to address after successful payment. Mandatory parameter to submit for GrabPay Online. Alipay WAP restricts the `return_url` to maximum 200 characters. |

### Response Parameters

| Attribute | Type | Parameter name | Description |
|:----    |:---|:----- |-----   |
|`syssn` |   String(40) | QFPay Transaction number | This number is being used when freezing funds, detucting money from the frozen amount as well as unfreezing funds. |
|`orig_syssn`    |String(40)| External transaction number | Developer platform transaction number |
|`txdtm`     | String(20) | Transaction request time | Format: YYYY-MM-DD hh:mm:ss  |
|`txamt`    |Int(11)| Transaction amount | |
|`sysdtm`     |String(20)| System transaction time |Format: YYYY-MM-DD hh:mm:ss |
|`respcd`    |String(4)| Return code |  |
|`respmsg`    |String(128)| Information description|  |
|`resperr`     |String(128)| Description error |  |
|`cardcd`      |String| Card number |  |
|`txcurrcd`      |String| Currency  | Transaction currency. View the [Currencies](/docs/preparation/paycode#支付类型) table for a complete list of available currencies

```plaintext

Request Body:

{
  mchid=R1zQrTd***&syssn=20190722000300020081074842&out_trade_no=alipay201909271528139576015cbf&txamt=1&txdtm=2019-09-27 15:28:13
}

```

> The above command returns JSON structured like this:

```json
{
  "respmsg": "", 
  "resperr": "请求成功",
  "respcd": "0000",
  "syssn": "20190722000302320081074842",
  "sysdtm": "2019-07-22 15:20:54",
  "txamt": "10",
  "txdtm": "2019-07-22 15:20:54",
  "cardcd": "",
  "txcurrcd": "HKD",
  "orig_syssn": 20190722000300020081074842
}
```
