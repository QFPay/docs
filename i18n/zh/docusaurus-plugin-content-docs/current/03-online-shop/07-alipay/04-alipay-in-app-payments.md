import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 支付宝In-App支付

<Link to="/img/alipay-in-app.png" target="_blank">![Alipay APP Payment process-flow](@site/static/img/alipay-in-app.png)</Link>

请参考该[链接](https://global.alipay.com./ac/app/client_integration)下载支付宝海外SDK. <br/>
请参考该[链接](https://global.alipay.com./ac/app_hk/download)下载支付宝香港SDK. <br/>
请参考该[链接](https://global.alipay.com./ac/hkapi/securitypay_pay)了解如何触发支付宝香港SDK.

## HTTP请求

`POST ../trade/v1/payment` <br/>
`PayType: 801110 Oversea Merchants` <br/>
`PayType: 801510 Hong Kong Merchants`

## 请求参数

```plaintext

请求本体:

txamt=1&txcurrcd=HKD&pay_type=801510&out_trade_no=052711570017898&txdtm=2021-05-27+11%3A57%3A00&goods_name=goods_name&goods_info=goods_info&mchid=nDB64h9qJ1An&trade_name=trade_name&goods_detail=goods_detail&return_url=http%3A%2F%2Fwww.qfpay.com%2F&pay_tag=ALIPAYHK&seller_id=testoverseas9191%40alipay.com

```

> 钱方平台响应:

```json
{
  "pay_type": "801510",
  "sysdtm": "2021-05-27 11:57:02",
  "paydtm": "2021-05-27 11:57:02",
  "udid": "qiantai2",
  "txcurrcd": "HKD",
  "txdtm": "2021-05-27 11:57:00",
  "txamt": "1",
  "resperr": "交易成功",
  "respmsg": "",
  "out_trade_no": "052711570017898",
  "syssn": "20210527154100020004180921",
  "pay_params": {
    "body": "goods_info",
    "forex_biz": "FP",
    "seller_id": "2088231067382451",
    "secondary_merchant_id": "1000007081",
    "service": "mobile.securitypay.pay",
    "payment_inst": "ALIPAYHK",
    "it_b_pay": "30m",
    "secondary_merchant_name": "IFlare Hong Kong Limited (external) - online",
    "_input_charset": "UTF-8",
    "sign": "iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D",
    "currency": "HKD",
    "out_trade_no": "20210527154100020004180921",
    "payment_type": "1",
    "total_fee": 0.01,
    "sign_type": "RSA",
    "notify_url": "https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify",
    "partner": "2088231067382451",
    "secondary_merchant_industry": "5941",
    "product_code": "NEW_WAP_OVERSEAS_SELLER",
    "return_url": "http://www.qfpay.com/",
    "subject": "goods_name"
  },
  "respcd": "0000",
  "chnlsn": "",
  "cardcd": ""
}
```

使用支付宝SDK发送请求：

(当您在调用支付宝SDK收到 `pay_params` 后, the `orderinfo` 请求参数需要被调整成如下格式:
将所有数组值以 `key="value"` 的格式组合起来, 请求参数需根据参数名称升序排列, 然后使用 `&` 将参数连接起来.
`sign` 和 `sign_type` 参数需要放置在末尾.)

```plaintext
Sample:

_input_charset="UTF-8"&body="goods_info"&currency="HKD"&forex_biz="FP"&it_b_pay="30m"&notify_url="https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify"&out_trade_no="20210527154100020004180921"&partner="2088231067382451"&payment_inst="ALIPAYHK"&payment_type="1"&product_code="NEW_WAP_OVERSEAS_SELLER"&return_url="http://www.qfpay.com/"&secondary_merchant_id="1000007081"&secondary_merchant_industry="5941"&secondary_merchant_name="IFlare Hong Kong Limited (external) - online"&seller_id="2088231067382451"&service="mobile.securitypay.pay"&subject="goods_name"&total_fee="0.01"&sign="iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D"&sign_type="RSA"

```

|参数名称 | 参数编码  |是否必填 | 参数类型 | 描述 |
|:----    |:---|:----- |-----   |----   |
|常用支付参数    |—|— |—   |—   |
|商品描述    |`goods_info`|否 | String  | 支付宝必传 不得包含特殊字符   |
|支付标记    |`pay_tag`|否 | String(16)  | 默认值是ALIPAYHK<br/>支付宝大陆版本传值：ALIPAYCN<br/>801501 - 支付宝线上扫码支付(香港商戶)<br/>801512 - 支付宝线上WAP支付(香港商戶)<br/>801510 - 支付宝In-App支付(海外商戶) |
订单过期时间 | `expired_time` | 否<br/> (仅限扫码支付) | String(3)  | 以分钟为单位的过期时间. 默认的过期时间为30分钟, 最小值5分钟，最大值120分钟<br/> 支持: <br/>800201 - 微信扫码支付<br/>800101 - 支付宝跨境线下扫码支付 <br/>801512 - 支付宝线上WAP支付(香港商戶)<br/>801501 - 支付宝线上扫码支付(香港商戶)<br/>801107 -  支付宝线上上WAP支付(海外商戶)<br/>801101 - 支付宝线上上扫码支付(海外商戶)<br/>801010 - 微信香港In-App支付(适用于向微信香港申请的商戶) <br/>801510 - 支付宝In-App支付 (香港商戶)

## 响应参数

|参数编码 | 二级参数编码  | 参数名称 |
|:----    |:---|:----- |
| `pay_params` | `partner`                      | 合作伙伴 |
|              | `seller_id`                    | 收款支付宝账号对应的支付宝唯一用户号 |
|              | `subject`                      | 商品的标题/交易标题/订单标题/订单关键字等 |
|              | `body`                         | 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body |
|              | `total_fee`                    | 订单总金额  |
|              | `notify_url`                   | 通知地址 |
|              | `service`                      | 服务 |
|              | `cardcd`                       | 卡号  |
|              | `payment_type`                 | 支付类型 |
|              | `\_input_charset`              | 编码格式 |
|              | `it_b_pay`                     | 自定义超时参数  |
|              | `return_url`                   | 需要回跳的目标地址 |
|              | `payment_inst`                 | 支付机构 |
|              | `currency`                     | 币种 |
|              | `product_code`                 | 产品码 |
|              | `sign`                         | 是否必填 |
|              | `sign_type`                    | 签名类型 |
|              | `secondary_merchant_id`        | 二级商户标识 |
|              | `secondary_merchant_name`      | 二级商户名称 |
|              | `secondary_merchant_industry`  | 二级商户行业 |
| `chnlsn`     |                                | 渠道编码 |
| 常用响应参数   | —                              | — |
