import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 报关API

报关 API 自动将微信/支付宝的支付数据发送给海关以简化清关流程, 为跨境电商节省时间.

## 推送报关

### HTTP请求

`POST ../custom/v1/declare`

### 请求参数

| 参数编码| 是否必须| 参数类型|描述|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|微信或支付宝|
|`syssn`|Y|String(32)|QFPay 交易码|
|`customs`|Y|String(20)|申报的目标海关 示例：SHANGHAI_ZS|
|`mch_customs_no`|Y|String(20)|商户的海关注册码|
|`action_type`|N|String(256)|申报类型. 只有在 `trade_type` 是 `wechat` 时生效. "ADD" - 新申请, "MODIFY" - 编辑已申请的报关|
|`mch_customs_name`|N|String(256)|商户在海关登记的名称. 在 `trade_type` 是 `alipay` 时必须提交 示例: jwyhanguo_card|
|`out_request_no`|N|String(32)|商户订单号码, 在`trade_type`是 `alipay` 时必须提交. 示例: 15725904083420588032|
|`amount`|N|String(20)|申报金额. 只有在 `trade_type` 是 `alipay` 时必须提交. 示例: 2.00|

如果拆分或编辑申请, 需要修改如下字段: <br/>

### 请求参数

| 参数编码| 是否必须| 参数类型|描述|
|:---|:----- |-----   |----   |
|`sub_order_no`|C|String(64)|商户子订单号码, 如果是一个拆分请求则必须提交. 示例：1111960490|
|`fee_type`|C|String(8)|货币. 在 `trade_type` 是 `wechat` 时必须提交, 只能是CNY|
|`order_fee`|C|String(8)|子订单的金额 (以 0.01 CNY为单位). 不能超过原订单金额, 订单费用=运输费用 + 产品费用. 若有拆分订单则需要填写 示例: 888|
|`product_fee`|C|String(8)|产品价格 (以 0.01 CNY为单位). 若有拆分订单则需要填写 示例: 888|
|`transport_fee`|C|String(8)|物流费 (以 0.01 CNY为单位). 若有拆分订单则需要填写 示例: 888|

### 响应参数

| 参数编码| 是否必须| 参数类型|描述|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay 交易订单号|
|`respcd`||String(4)|0000 = 申报成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [支付状态码](/docs/preparation/paycode#交易状态码) 获得完整返回类型列表|
|`resperr`||String(128)|信息描述|
|`respmsg`||String(128)|其他信息|
|`verify_department`|||认证机构|
|`verify_department_trade_id`|||认证机构的交易号|

## 查询报关

商户通过QFPay 交易订单号查询申报状态

### HTTP请求

`POST/GET ../custom/v1/query`

### 请求参数

|参数编码|是否必须|参数类型|描述|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|`weixin` 或者 `alipay`|
|`customs`|Y|String(20)|申报的目标海关 示例：SHANGHAI_ZS|
|`syssn`|Y|String(32)|QFPay 交易订单号|
|`sub_order_no`|N|String(40)|商户子订单号码, 如果是一个拆分请求则必须提交. 示例：1111960490|

### 响应参数

| 参数编码| 是否必须|参数类型|描述|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay 交易订单号|
|`respcd`||String(4)|0000 = 申报成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [支付状态码](/docs/preparation/paycode#交易状态码) 获得完整返回类型列表|
|`resperr`||String(128)|信息描述|
|`respmsg`||String(128)|其他信息|
|`data`|||海关申报详情 \[\{"resperr" : "", "errmsg" : null, "sub_order_no" : "15752730835729139712", "verify_department" : "OTHERS", "verify_department_trade_id" : "4200000459201911265585026208"\}\]|

## 重新报关

If additional order information has been submitted to the customs but is lost in the electronic port, the customs declaration re-push API can be used to push the information to the customs again.

### HTTP请求

`POST ../custom/v1/redeclare`

### 请求参数

| 请求参数| 是否必须| 参数类型|描述|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|`weixin` 或者 `alipay`|
|`customs`|Y|String(20)|申报的目标海关 示例：SHANGHAI_ZS|
|`syssn`|Y|String(32)|QFPay 交易订单号|
|`mch_customs_no`|Y|String(20)|商户的海关注册码, 示例: 110084111|
|`sub_order_no`|N|String(40)|商户子订单号码, 如果是一个拆分请求则必须提交. 示例：1111960490|

### 响应参数

|请求参数| 是否必须| 参数类型|描述|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay 交易订单号|
|`respcd`||String(4)|0000 = 申报成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [支付状态码](/docs/preparation/paycode#交易状态码) 获得完整返回类型列表|
|`resperr`||String(128)|信息描述|
|`respmsg`||String(128)|其他信息|
