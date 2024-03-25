import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 微信in-APP支付

<Link href="/img/wechat-in-app.png" target="_blank">![WeChat APP Payment process-flow](@site/static/img/wechat-in-app.png)</Link>

### HTTP 请求

`POST ../trade/v1/payment`
`PayType: 800210`

微信应用内支付需要在微信开放平台正式申请。 商户必须注册账户和APP，然后收到“appid”才能进行支付。 更多信息请参考官方
[Wechat documentation](https://pay.weixin.qq.com/wiki/doc/api/wxpay/en/pay/In-AppPay/chapter6_2.shtml#menu1).

商户可选择开通微信实名认证。 目前实名认证仅适用于中国大陆公民，包括真实姓名和身份证号码。 如果提供身份证明，付款人的钱包信息（例如连接的银行卡）必须与商家提供的数据相同。 如果客户尚未将微信账户绑定银行卡，仍可进行付款。

下载微信SDK请参考这里 [链接](https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html).

### 请求参数

```plaintext

请求正文：

{
  goods_info=test_app&goods_name=qfpay&out_trade_no=O5DNgEgL1XpvbvQSfPhN&pay_type=800210&txamt=10&txcurrcd=HKD&txdtm=2019-09-13 04:53:03&udid=AA
}

```

> 上面的命令返回 JSON 结构如下：

```json
{
  "sysdtm": "2019-09-13 12:53:04",
  "paydtm": "2019-09-13 12:53:04",
  "txcurrcd": "HKD",
  "respmsg": "",    
  "pay_params": 
        {
        "package": "Sign=WXPay",
        "timestamp": 1568350384,
        "sign": "XwFjohEKWdkhhT4ueg7BxeDn8tT9LcqoZYdXzifTMYyDGe3/tRchpii6vWgOn21tPSaAtqo766gvifXgDEOwR+ILKN8t97r624IJlrH0EkvSUSLh9E/cga9scXGVy0jPWHM/oVvVzJIvXew79CwZFCNTSJok2KmpSm9X9oPg7PGXbqvNMHltf+YlIOsuiz391qVmFtTE5A/cpA50+06T7iW8GYsOJQTTJed75VY+aSzNo5C6ju6WSgJKpAJJ0ocl+ONtmOp6GLVBSQXaMC4PitQcebcoP2J6fFgQ+YcPwHXasCYEnn4LaFN7zT/AjGg3E3gdCx3ksGNBOazYBRVz+g==",
        "partnerid": "316525492",
        "appid": "wx3c6896fa9b351f2a",
        "prepayid": "wx131253044253463a81dc336e1254149882",
        "noncestr": "7786db42d9a245c2b1cfc717ac59376e"
        },
  "pay_type": "800210",
  "cardcd": "",    
  "udid": "AA",
  "txdtm": "2019-09-13 04:53:03",
  "txamt": "10",
  "resperr": "交易成功",
  "out_trade_no": "O5DNgEgL1XpvbvQSfPhN",
  "syssn": "20190913152100020001567741",   
  "respcd": "0000",
  "chnlsn": ""
}
```

| 参数名称 | 参数编码 | 是否必填 | 参数类型 | 描述 |
|:----    |:---|:----- |-----   |----   |
|商户ID    | `mchid`  | 否 | String  | 唯一的商户ID是由QF Pay在商户入网过程中创建的。 |
|外部订单编号    | `out_trade_no` | 是 | String    |开发者平台交易订单编号 |
|交易金额    | `txamt`  | 是 | String |实际消费金额，最高抵扣金额不能超过冻结资金|
|货币 | `txcurrcd` | 是 | String(3) | 交易货币。 查看货币表以获取可用货币的完整列表|
|RMB 标签 | `rmb_tag` | 否 | String(1) | 香港微信支付使用“rmb_tag”=Y 和“txcurrcd”=CNY 来表示交易币种为人民币。|
|交易请求时间    | `txdtm`   | 是 | String      | 格式: YYYY-MM-DD hh:mm:ss|
| 设备ID   | `udid`   | 否 | String         |必须是唯一的|
| 时区 | `txzone`    | 否 | String        |用于记录本地订单时间。 默认为北京时间GMT+8（+0800）|
| 重定向网址   | `return_url`   | 否 | String        | 付款成功后重定向至地址。 为 GrabPay Online 提交的强制参数。 支付宝 WAP 将 `return_url` 限制为最多 200 个字符。 |
|扩展客户信息   | `extend_info`  | 否 | Object  | 实名客户身份识别。 该参数目前仅适用于中国大陆公民，并且需要针对所选的[PayType](../../preparation/paycode# payment-codes)使用微信显式激活。 参数“user_creid”中包含消费者的**身份证号码**，“user_truename”中必须提供编码形式或汉字书写的付款人**真实姓名**。 一个例子如下所示； extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}' |

### 响应参数

| 参数编码 | 参数类型 | 参数名字 | 描述 |
|:----    |:---|:----- |-----   |
|`syssn` |   String(40) | QFPay 交易编号 | QFPay 交易编号, 支付完成后系统返回 |
|`orig_syssn`    |String(40)| 外部交易编号 | 开发者平台交易编号 |
|`txdtm`     | String(20) | 交易请求时间 | 格式: YYYY-MM-DD hh:mm:ss  |
|`txamt`    |Int(11)| 交易金额 | |
|`sysdtm`     |String(20)| 系统交易时间 |格式: YYYY-MM-DD hh:mm:ss <br/> 该参数值用作清算截止时间。|
|`respcd`    |String(4)| 返回码 |  |
|`respmsg`    |String(128)| 信息说明|  |
|`resperr`     |String(128)| 描述错误 |  |
|`cardcd`     |String| 卡号 |  |
|`txcurrcd`      |String| 货币  | 交易货币。 查看[货币](../../preparation/paycode#currencies) 表以获取可用货币的完整列表 |
|`pay_params`      |Object| 支付数据  | 调用微信SDK的支付数据 |