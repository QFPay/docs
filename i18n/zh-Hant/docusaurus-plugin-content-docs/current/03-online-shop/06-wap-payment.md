import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WAP支付

## 简介

WAP支付或者H5支付能够让商户在Chrome等手机浏览器上的调用电子钱包模块进行收款。

::: note
WAP/H5 支付，建議商戶平台引導用戶使用手機瀏覽器 Chrome/Safari/Edge 等打開。 因為 Whatsapp/Facebook massager/WeChat app 等不可控的限制，QFPay 無法保證社交 App 能夠自動調用其他錢包 App .  比如在 WeChat App 中無法自動打開 Alipay App，這些都是非瀏覽器的不可控限制
:::

## HTTP请求

`POST ../trade/v1/payment` <br/>

您可以从下表中找到不同的电子钱包的“pay_type”。

支付类型 | 描述
--------- | ------- 
800212 | 微信H5支付, 详情可以参考[WeChat Pay H5 (in mobile browser)](/docs/online-shop/wechat/wechat-pay-h5)
801512 | 支付宝香港WAP支付, 详情可以参考[# Alipay Service Window H5](/docs/online-shop/alipay/alipay-service-window-h5)
800712 | 银联WAP支付
805812 | PayMe 线上WAP支付

## 请求参数

参数名称 | 参数编码 | 是否必填 | 参数类型 | 描述
--------- | -------- | --------- | ------- | -------
交易金额 | `txamt` | 是 | Int(11) | 交易金额。 单位为分（即 100 = 1 元）。建议数值大于200，避免因支付金额过低而被交易风控。
交易货币 | `txcurrcd` | 是 | String(3) | 交易货币。 查看[货币](/docs/preparation/paycode#支付币种) 表以获取可用货币的完整列表
交易类型 | `pay_type` | 是 | String(6) | e.g. PayMe WAP 支付 = 805812
API订单号码 | `out_trade_no` | 是 | String(128)| 外部交易号/商户平台交易号：该参数对于系统中同一商户账户下的每次支付和退款请求必须是唯一的。
请求交易时间 | `txdtm` | 是 | String(20) | 交易时间格式：<br/> YYYY-MM-DD hh:mm:ss
产品名称标识 | `goods_name` | 否 | String(64) | 商品名称 /标记：不能超过20个字母数字或包含特殊字符。 应用支付不能为空。 如果参数是汉字，则需要**UTF-8**编码。
QFPay 商户号码 | `mchid` | 否 | String(16) | 可能会也可能不会给予商人。 如果给出了MCHID，则必须提供MCHID。反之，如果没有提供MCHID，商户不得在API请求中传递MCHID字段。
设备ID | `udid` | 否 | String(40) |  唯一的交易设备ID。 显示在商家管理平台上。
重定向URL | `return_url` | 否 | String(255) |  付款完成后用户将被重定向到的 URL。
异步通知URL | `notify_url` | 否 | String(255) | 支付完成后商家收到通知的URL。

### 响应参数

参数名称 | 参数编码 | 参数类型 | 描述
--------- | -------- | --------- | ------- 
交易类型 | `pay_type` | String(6) | e.g. PayMe WAP Payment |
系统交易时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 该参数值用作清算截止时间。 | 
请求交易时间 | `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  | 
回复信息 | `resperr` | String(128) |  
交易金额 | `txamt` | Int(11) |  
其他信息 | `respmsg` | String(128) |  
外部订单号 | `out_trade_no` | String(128) | 外部交易号 
QFPay交易号 | `syssn` | String(40) | 
返回码 | `respcd` | String(4) | 0000 = 请求成功。 <br/> 1143/1145=要求商户继续查询交易结果。 <br/> 所有其他返回码均表示交易失败。 请参阅[交易状态代码](/docs/preparation/paycode#交易状态码)页面以获取完整的响应代码列表。 |
支付URL | `pay_url` | String(512) | 在桌面网页中生成二维码； 在WAP 场景中的重定向 URL |
