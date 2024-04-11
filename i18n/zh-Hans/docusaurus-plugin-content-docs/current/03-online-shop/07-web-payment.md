import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Web支付

## 简介

客户使用WEB支付在商户的网站上购买物品, 用户扫描二维码支付, 确认总金额并支付。最后, `return_url` 参数将客户重定向到商户选定的页面。所选的支付钱包将从客户钱包中以HKD计价实时扣取支付的金额, QFPay 将会以HKD计价向商户结算付款金额.

## HTTP 请求

`POST ../trade/v1/payment` <br/>

支付类型 | 描述
--------- | -------
800201 | 微信线上WEB支付 (香港商户), 详情请参阅[微信扫码支付](/docs/online-shop/wechat/wechat-web-qrc-payments)
801514 | 支付宝线上WEB支付 (香港商戶), 详情请参阅[支付宝线上WEB支付](/docs/online-shop/alipay/alipay-online-payments)
800714 | 银联云闪付 PC-Web Payment (香港商户)
805814 | PayMe 线上WEB支付 (香港商戶)

### 请求参数

参数名称 | 参数编码 | 是否必填 | 参数类型 | 描述
--------- | -------- | --------- | ------- | -------
订单支付金额 | `txamt` | 是 | Int(11) | 以当前货币最小计量单位计算，只允许整数类型 (i.e. 100 = $1)
币种 |`txcurrcd` | 是 | String(3) | 交易币种, 请查看[币种](/docs/preparation/paycode#支付币种)
Payment type | `pay_type` | 是 | String(6) | e.g.  PayMe 线上WEB支付 = 805814
外部订单号 | `out_trade_no` | 是 | String(128)| 开发者自定义订单号，在同一商户账户中的每笔交易和退款请求该参数值唯一
请求交易时间 | `txdtm` | 是 | String(20) | 格式：yyyy-MM-dd HH:mm:ss
交易到期时间 | `expired_time` | No<br/> (仅限正扫支付) | String(3)  | 以分钟为计时的二维码过期时间,默认的过期时间是30分钟. 该参数可以被手动设置为最小5分钟,最大120分钟
商品名称标识 | `goods_name` | 否| String(64) | 商品名称 / 标识: 不能超过20个字母数字或包含特殊字符。 APP支付不能为空。 如果参数是汉字，则需要使用**UTF-8**编码。
子商户号 | `mchid` | 否| String(16) | 标识子商户身份，由QFPay 分配（渠道系统后台查看对应商户(非业务员)子商户号，被视为对应商户的交易）
时区 | `txzone` | 否| String(5) | 用于记录本地下单时间，默认为北京时间+0800
设备唯一id | `udid` | 否| String(40) |  唯一的设备ID,显示在商户管理后台上.
重定URL | `return_url` | 否 | String(512) |  用户在支付完成后，被重定向的URL

### 响应参数

参数名称 | 参数编码 | 参数类型 | 描述
--------- | -------- | --------- | -------
支付类型 | `pay_type` | String(6) | e.g. PayMe 线上WEB支付 = 805814 |
系统交易时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 这个参数值被用作结算截止时间 | 
请求交易时间 | `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  |
信息描述 | `resperr` | String(128) |
订单支付金额 | `txamt` | Int(11) |
调试信息 | `respmsg` | String(128) |
外部订单号 | `out_trade_no` | String(128) | 外部订单号  
QFPay 订单号 | `syssn` | String(40) | 
返回码 | `respcd` | String(4) | 0000 = 请求成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [支付状态码](/docs/preparation/paycode#交易状态码) 获得完整返回类型列表  |
支付URL | `pay_url` | String(512) | 在桌面页面中生成二维码 |