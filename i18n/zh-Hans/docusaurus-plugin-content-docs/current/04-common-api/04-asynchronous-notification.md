import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 异步通知

:::note
 要配置您选择的通知 URL，请将地址以及商户和商店信息通过电子邮件发送至technical.support@qfpay.com
:::

通知功能可以用于支付 **"notify_type": "payment"** 和退款 **"notify_type": "refund"**. 在未来版本中, 异步通知可能会在请求中包含额外的参数.请开发者确保程序可以支持新的参数. 除此之外, 开发者可以从万战获取最新的开发者文档.

### 描述

支付和退款成功后，QFPay  API 将向商户定义的URL地址发送异步通知消息. 商户可以开发一个端点来接收此通知消息并相应地更新交易状态. 我们建议商户使用API的查询功能结合异步通知端点来获取支付状态. 由于安全要求，异步通知仅适用于端口 80 和 443.

## 异步通知规则

1) 付款和交易成功后, 商户才会收到通知.

2) 将您的通知端点地址发送给**technical.support@qfpay.com**来设置异步通知. 我们的技术支持团队会将为您设置您提供的地址.

3) 在商户收到通知后, 商户应该按照以下的签名验证流程消息的完整性. 如果验证成功, 系统需要返回状态码 `200 OK`, 并且响应正文中会包含字符串 `SUCCESS`.

4) 如果我们的 API 没有收到状态码 `200 OK` 和 `SUCCESS` 消息的响应, 我们将在第一条通知消息后按照如下的时间间隔发送异步通知: 2m, 10m, 10m, 60m, 2h, 6h, 15h. 当收到状态码 `200 OK` 和 `SUCCESS` 消息的响应后, 通知将会停止发送.

5) 一组 `app_code` 和 `client_key` 仅能用于设定一个通知地址. 大商户应该为所有子商户设置同一个通知地址.

6) Method: POST content-type: `application/json`

## 签名验证

```plaintext
For code instructions select Python with the tabs above.
```

<Tabs>
<TabItem value="python" label="Python">

```python
import hashlib
import json

# Client Credentials
client_key = "3ABB1BFFE2E0497BB9270978B0BXXXXX"

# Raw Content Data
data = {"status": "1", "pay_type": "800101", "sysdtm": "2020-06-15 10:32:58", "paydtm": "2020-06-15 10:33:35", "goods_name": "", "txcurrcd": "HKD", "txdtm": "2020-06-15 10:32:58", "mchid": "O37MRh6Qq5", "txamt": "10", "exchange_rate": "", "chnlsn2": "", "out_trade_no": "9G3ZIWTG1R3IVSC2AH2O5EGKJQ7I72QO", "syssn": "20200615000200020000641807", "cash_fee_type": "", "cancel": "0", "respcd": "0000", "goods_info": "", "cash_fee": "0", "notify_type": "payment", "chnlsn": "2020061522001453561406303428", "cardcd": "2088032341453564"}

combine_str = (json.dumps(data)+client_key).encode()

signature = hashlib.md5(combine_str).hexdigest().upper()

print(signature)
```

</TabItem>
</Tabs>

> Signature String:

```json
"A4021A3B1EBBB0F05451EF94E9EXXXXX"
```

通知的签名生成方法和其他的 POST 请求略有不同. 生成签名只需要获取原始内容并将 `client_key` 添加到末尾. 然后使用 `MD5` 算法对字符串进行编码处理.

**步骤 1:** 从 HTTP 请求头部 `X-QF-SIGN` 获取签名

**步骤 2:** 将 `client_key` 添加到从端点收到的请求正文的末尾

**步骤 3:** 使用 `MD5` 算法对步骤2得到的字符串加密

**步骤 4:** 将 `MD5` 加密得到的结果和从 `X-QF-SIGN` 获取的签名对比, 如果验证成功则在返回正文中返回状态码 `200 OK` 和 `SUCCESS`

## 异步通知的响应参数

> 如下是异步通知的 POST JSON格式的数据样例:

```json
{
  "status": "1",
  "pay_type": "800101",
  "sysdtm": "2020-05-14 12:32:56",
  "paydtm": "2020-05-14 12:33:56",
  "goods_name": "",
  "txcurrcd": "HKD",
  "txdtm": "2020-05-14 12:32:56",
  "mchid": "lkbqahlRYj",
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
  "chnlsn": "2020051422001453561444935817",
  "cardcd": "2088032341453564"
}
```

参数编码 | 是否必须 | 参数类型 | 描述  
--------- | ------- | --------- | -------
`status` | 是 | String | 1 = 支付成功
`pay_type` | 是 | String | 请根据 [支付类型编码](/docs/preparation/paycode#支付类型编码)查看完整的交易类型.
`sysdtm` | 是 | String | 系统的交易创建时间. 这个值被用作结算截止时间.
`paydtm` | 是 | String | 交易的支付时间.
`txcurrcd` | 是 | String | 交易货币. 可查看 [支付币种](/docs/preparation/paycode#支付币种) 获取完整的支持的货币类型列表.
`txdtm` | 是 | String | 由商户在付款请求中提供的订单创建时间.
`txamt` | 是 | String | 以分为单位的交易金额. 建议数值大于200，避免因支付金额过低而被交易风控。
`out_trade_no` | 是 | String | 外部订单号.
`syssn` | 是 | String | QFPay 交易流水号.
`cancel` | 是 | String  | 交易取消状态: <br/> 0 = 没有取消 <br/> 1 = 用于反扫支付: 交易撤销或者退款成功 <br/> 2 = 正扫支付: 交易取消成功 <br/> 3 = 交易已退款 <br/> 4 = 支付宝预授权订单完成 <br/> 5 = 交易部分退款.
`respcd` | 是 | String | 交易状态 - 在异步通知消息中会是 `0000`
`notify_type` | 是 | String |通知类型: `payment` 或 `refund`
`mchid` | 否 |  String | 唯一商户标识ID, 这个参数只返回给代理商.
`goods_name` | 否 | String | 商品名称或标记, 定制商品名称. 如果是参数是中文字符, 则需要是**UTF-8**编码.
`exchange_rate` | 否 | String | 适用的货币换算汇率
`chnlsn2` | 否 | String | 订单附加的交易流水号
`goods_info` | 否 | String | 产品描述
`chnlsn` | 否 | String | 支付通道的交易码
`cardcd` | 否 | String | 卡号
`cash_fee` | 否 | String | 用户实际付款金额 = 交易金额 - 优惠
`cash_fee_type` | 否 | String | 实际支付货币 e.g. CNY
`cash_refund_fee` | 否 | String | 实际退款金额
`cash_refund_fee_type` | 否 | String | 实际退款货币 e.g. CNY
