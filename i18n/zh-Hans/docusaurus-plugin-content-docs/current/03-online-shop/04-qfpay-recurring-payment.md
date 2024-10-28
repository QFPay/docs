import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# QFPay订阅支付API

<!-- <sub><sup>last modified 20230816<sup><sub> -->

创建并管理订阅及订阅支付

## 订阅支付运行流程

### API运行环境

| 环境名称 | 地址 |
|--|--|
| Sandbox | https://openapi-int.qfapi.com |

### API资源

如需要创建并管理一个订阅支付活动,需要如下的API资源:

| API资源 |
|---|
|[Customer](#customer)|
|[Payment Token](/docs/online-shop/payment-intent)|
|[Product](#product)|
|[Subscription](#subscription)|

### 创建订阅支付的流程

![enter image description here](http:////www.plantuml.com/plantuml/png/fLJDZYCr4BxxAKfp9n8iS9W3MYq8YTkYvRPQeOfTdPXnbpqkUqBpzCJT7NSxz92ivkPqVLN-VifvBmbZohrJg9EFeBCatrC4b7gUI-UJFY8dGAbdfGB6PBKDfT3_AOEKyaF5oY29-eS6zjm574ROxxz-n64JSmeZu5pkYHCSCD49XnPZHJB54VVRTFo0_FIWr27w7E3RtSVeJTP9OKwUSx-dg2gnRtwQw3w2ZeI98CpWyMifZpIlo-3tVv5E4EavaoJ5FX54UpWcbIAoe4xMCs3lCxUVT8wHM0-As41fKvCF2v58AKUkDrbJe1Srt-r-hd7S8wU6jwsdrlz7K8KmzgHwlxUE5FLedJeVdUK3e36HH6vgggDQKUzsbu3_y4_4yDbsPGmCb6QUvijQRXspN60vv3COem7BdT-zfZUD5xHYuMJJ4S94eL6EqHozCxDs63y0dwVJty760KmPUUq2g4RchPXdvHCnM-WNlEsinh8mQv--tttAUz7HXbAvuOXCq3s11D9b7WI7_8en4tmQlBK4pae2twss4f0DF6VaPDFGIBwMDEQ98JYhSU_eIpLC3zgHGC28FIMAjnT85lrbykmBoi3w63txB40l9SNh_f3bs7RFYpNZYPkD_67NsIW9Bam_B_hO9elE_aFGGcRLRrxKvOAjbHopHBVox55Tcs8JnMbtgfsB7wVmU9bRSqQNuDqldyRVDf81ZKBg52ghwdz1wICwHtoW1Hz9WcUvZktkjkh1nR3IQMmaNRRegZtWWHfdhKWkBTfpsSqMhgRgmgaEHZPhVki_QMl-4yiBHTiDA-iak-fWOsyBhPYAtVAr7RjbumQAd11qqOwS7OcqkRrzFXlrbI-iosp0K8c1pDrFiRZ-GjilySVTX_RVOls-dFS1CYVhOBz6GLby7q4ZQtAEJ1lGH70YkvbA8-DkfPNwUsAJU_Sl)

### 订阅支付的状态

[state diagram](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Recurring_payment.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1lF7BlkofpmO4m5SIszd2KBXV5256UrwR%26export%3Ddownload)
所有订阅状态一旦触发都会推送至商户后台服务

## 通用响应参数列表

|参数名称| 参数类型 |描述|
|---|---|---|
|respcd|String|返回码, 0000 = API呼叫成功|
|resperr|String| 呼叫结果的详情|
|respmsg|String| 呼叫的信息详情|
|page|Int| 查询页数,在查询API中出现|
|page_size|Int| 查询页大小,在查询API中出现|
|data|Object|结果值, JSON对象或由JSON对象组成的列表|

## Customer

Customer 是一个提供给商户用于存储客户信息的API资源. 这个对象可以被应用在 PaymentToken, Subscription API中.

### 创建 Customer 对象

**API 路径** : `/customer/v1/create`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|billing_address|String|否|客户账单地址, 字符串化的JSON对象|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|
|billing_address|JSON|客户账单地址|

### 更新 customer 对象

**API 路径** : `/customer/v1/update`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|是|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|billing_address|JSON|否|客户账单地址|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|
|billing_address|JSON|客户账单地址|

### 查询 customer 对象

**API 路径** : `/customer/v1/query`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|否|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|page|Int|否|默认值 = 1|
|page_size|Int|否|默认值 = 10, 最大值是100|

#### 在**data**部分的响应参数列表

包含如下参数的 customer 对象数组：

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|

### 删除 customer 对象

永久删除 customer 对象, 不能撤销. 任何与已删除的 customer 对象相关联的订阅计划将会被取消
**API 路径** : `/customer/v1/delete`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|是|QFPay 系统生成的唯一 customer 对象ID值|

## Product

Product 是商户要提供给客户的商品和服务的模型.它定义了交易金额, 交易货币和扣款周期(如可用). 这个对象可被用于 subscription API

### 创建 product 对象

创建一个新的 product 对象

**API 路径** : `/product/v1/create`

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|name|String|是|展示给客户的产品名称|
|type|String|否|默认值=onetime, 可用值: onetime, recurring
|description|String|否|产品描述|
|txamt|Int|是|交易金额, e.g. $1=100|
|txcurrcd|String|是|交易货币, e.g. HKD|
|interval|String|否|可用值: monthly, yearly, 周期扣款产品必传|
|interval_count|Int|否|两次扣款的间隔, 最高允许1年, 周期扣款产品必传|
|usage_type|String|否|默认值=licensed, 可用值: licensed|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|product_id|String|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|展示给客户的产品名称|
|type|String|默认值=onetime, 可用值: onetime, recurring
|description|String|产品描述|
|txamt|Int|交易金额, e.g. $1=100|
|txcurrcd|String|交易货币, e.g. HKD|
|interval|String|可用值: monthly, yearly|
|interval_count|Int|两次扣款的间隔|
|usage_type|String|默认值=licensed, 可用值: licensed|

### 更新 product 对象

更新当前的 product 对象信息
**API 路径** : `/product/v1/update`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|是|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|否|展示给客户的产品名称|
|description|String|否|产品描述|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|product_id|String|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|展示给客户的产品名称|
|type|String|默认值=onetime, 可用值: onetime, recurring
|description|String|产品描述|
|txamt|Int|交易金额, e.g. $1=100|
|txcurrcd|String|交易货币, e.g. HKD|
|interval|String|可用值: monthly, yearly|
|interval_count|Int|两次扣款的间隔|
|usage_type|String|默认值=licensed, 可用值: licensed|

### 查询 product 对象

**API 路径** : `/product/v1/create`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|否|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|否|展示给客户的产品名称|
|description|String|否|产品描述|
|txcurrcd|String|否|交易货币|
|interval|String|否|可用值: monthly,yearly|
|page|Int|否|page no., 默认值=1|
|page_size|Int|否| page size, 默认值=10,max value=100|

#### 在**data**部分的响应参数列表

包含如下参数的 product 对象数组:

|product_id|String|QFPay 系统生成的唯一 product 对象的ID值|
|---|---|---|
|name|String|展示给客户的产品名称|
|type|String|可用值: onetime, recurring
|description|String|产品描述|
|txamt|Int|交易金额, e.g. $1=100|
|txcurrcd|String|交易货币, e.g. HKD|
|interval|String|可用值: monthly, yearly|
|interval_count|Int|两次扣款的间隔|
|usage_type|String|可用值: licensed|

### 删除 product 对象

只能够删除不与任何  subscription 对象关联的 product 对象

**API 路径** : `/product/v1/delete`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|否|QFPay 系统生成的唯一 product 对象的ID值|

## Subscription

QFPay 会基于产品类型和支付令牌,在每个扣款周期自动向客户收费直到订阅结束或是取消. 在创建 subscription 对象之前, **payment token**, **customer** 和 **product** 必须被创建.

### 创建 subscription 对象

**API 路径** : `/subscription/v1/create`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|是|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String|是| QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object|是| QFPay 系统生成的唯一 product 对象的ID值和相应数量的列表|
|total_billing_cycles|Int|否|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|否|订阅开始时间,订阅将开始首次扣款 |

products 中的参数:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|是|QFPay 系统生成的唯一 product 对象的ID值|
|quantity|Int|否|默认值=1|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String|  QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object| QFPay 系统生成的唯一 product 对象的ID值和相应数量的列表|
|total_billing_cycles|Int|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|否|订阅开始时间|

### 更新 subscription 对象

更新当前的 subscription 对象
**API 路径** : `/subscription/v1/update`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|subscription_id|String|是|QFPay 系统生成的唯一 subscription 对象的ID值|
|total_billing_cycles|Int|否|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|否|订阅开始时间,订阅将开始首次扣款|
|token_id|String|否| QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object|否| QFPay 系统生成的唯一 product 对象的ID值和想赢数量的列表|

#### 在**data**部分的响应参数列表

|参数名称|参数类型|描述|
|---|---|---|
|subscription_id|String|QFPay 系统生成的唯一 subscription 对象的ID值|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String| QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object| QFPay 系统生成的唯一 product 对象的ID值和相应数量的列表|
|total_billing_cycles|Int|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|订阅开始时间,订阅将开始首次扣款|
|state|String| 订阅的状态|

### 查询 subscription 对象

**API 路径** : ` /subscription/v1/query`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|page|Int|否| 查询页数,默认值=1|
|page_size|Int|否| 查询页面大小, 默认值=10, 最大值=100|
|subscritpion_id|String|否|QFPay 系统生成的唯一 subscription 对象的ID值|
|customer_id|String|否|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String|否|QFPay 系统生成的唯一 payment token 对象的ID值|
|state|String|否|订阅的状态, e.g. incompelete, active,...|

#### 在**data**部分的响应参数列表

包含如下参数的 subscription 对象数组:

|参数名称|参数类型|描述|
|---|---|---|
|subscription_id|String|QFPay 系统生成的唯一 subscription 对象的ID值|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String| QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object| QFPay 系统生成的唯一 product 对象的ID值和相应数量的列表|
|total_billing_cycles|Int|订阅支付总的扣款周期, 若为null值则为无限|
|state|String| 订阅的状态|
|next_billing_time|String| 下次扣款时间 |
|last_billing_time|String|上次扣款时间|
|completed_billing_iteration|Int| 已完成的扣款次数|
|start_time|String|订阅开始时间,订阅将开始首次扣款|

### 取消 subscription 订阅

立即取消客户的订阅

**API 路径** : `/subscription/v1/cancel`

#### 请求参数列表

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|subscription_id|String|是|QFPay 系统中的唯一 subscription 对象ID|

### 查询指定 subscription 订阅下的订单

**API 路径** : `/subscription/billing_order/v1/list`

**请求方法** : `POST`

#### 请求参数列表

| 参数名称            | 参数类型   | 是否必填 | 描述                                      |
| ----------------- | ------ | --------- | ------------------------------------------------ |
| `subscription_id` | String | 是        | QFPay 系统中的唯一 subscription 对象ID               |
| `page`            | Int    | 否        | 查询页数,默认值=1                       |
| `page_size`       | Int    | 否        | 查询页面大小, 默认值=10, 最大值=100       |

#### 在**data**部分的响应参数列表

包含如下参数的 subscription order 对象数组:

| 参数名称                     | 参数类型   | 描述                                                         |
| ----------------------------- | ------ | ----------------------------------------------------------- |
| `subscription_order_id`       | String | 扣款订单的标识ID, 格式: `sub_ord_` + 所属 subscription 对象的 id 值 + 4 位标识该订单为第几次扣款。例如：`sub_ord_a360f06exxxxxxx4c3a_0001` 表示 subscription `sub_a360f06exxxxxxx4c3a` 的第一次扣款订单|
| `subscription_id`             | String | QFPay 系统中的唯一 subscription 对象ID, 格式: `sub_xxxxxxxx` 例如： `sub_a360f06exxxxxxx4c3a` |
| `trigger_by`                  | String | 谁触发此次订单扣款, QFPay 系统是 `auto`, 手动扣款是 `manual`         |
| `sequence_no`                 | Int    | 该订单是所属的 subscription 的第几次扣款, 例如：2   |    

### 对订阅手动扣款

使用 API 来对一个订阅计划手动立即扣款, 扣款行为与自动扣款相同. 

**API 路径** : `/subscription/v1/charge`

**请求方法** : `POST`

#### 请求参数

| 参数名称         | 类型   | 是否必填 | 描述                      |
| ----------------- | ------ | --------- | -------------------------------- |
| subscription_id | String | 是     | QFPay 系统中的唯一 subscription 对象ID |

## 订阅支付行为

### 异步通知

通知适用于支付令牌的创建和订阅相关的事件和状态变化。

在成功创建支付令牌或激活订阅后，QFPay API 将向商户定义的 URL 发送异步通知消息。

:::note

要配置通知地址，请通过电子邮件将地址以及商户和门店信息发送至 technical.support@qfpay.com

:::

格式：JSON

#### 支付令牌

|参数名称| 描述 |
|--|--|
|userid | SID  |
|notify_type| 通知类型，payment_token |
|event| 令牌事件 |
|tokenid| 支付令牌 ID |
|token_expiry_date| 令牌过期日期 |
|cardcd| 卡号 |
|card_scheme| 卡组织，例如 VISA |
|respcd | 响应码，例如 0000 (成功) |
|respmsg| 响应消息，例如 成功 |
|sysdtm| 事件触发的系统时间 |
|customer_id| 如果有的话是客户 ID |
|token_reason|  tokenization 的原因 |
|token_reference| 系统中的 tokenization 的参考 |

示例：

```json
{
    "respmsg": "",
    "card_scheme": "ECMC_DEBIT",
    "cardcd": "5200****1096",
    "tokenid": "tk_6a699aae75094caeb066f****988daa32de",
    "respcd": "0000",
    "token_expiry_date": "2024-04-30 00:00:00",
    "sysdtm": "2024-04-29 15:37:17",
    "notify_type": "payment_token",
    "event": "CONFLICT"
}
```

#### 订阅状态变更

当订阅状态发生变更时，会发送通知。

| 参数名称        | 描述                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| notify_type   | 通知类型 subscription                                                  |
| subscription_id | 唯一的 subscription 对象标识符，格式：`sub_xxxxxxxx`                 |
| state         | 订阅状态，例如 COMPLETED, ACTIVE                                            |
| sysdtm        | 状态变更的系统时间                                                          |

示例：

```json 
{
  "state": "COMPLETED",
  "sysdtm": "2024-04-24 15:19:39",
  "notify_type": "subscription",
  "subscription_id": "sub_e51bb914919*****f6b0fe36d"
}
```

#### 订阅支付结果

当收到订阅订单支付结果时，会发送通知。

| 参数名称                 | 描述                                                                |
| ---------------------- | ------------------------------------------------------------------- |
| notify_type            | 通知类型，`subscription_payment`                                    |
| subscription_id        | 唯一的 subscription 对象标识符，格式：`sub_xxxxxxxx` 例如 `sub_a360f06exxxxxxx4c3a` |
| subscription_order_id  | 扣款订单的标识ID, 格式: `sub_ord_` + 所属 subscription 对象的 id 值 + 4 位标识该订单为第几次扣款。例如：`sub_ord_a360f06exxxxxxx4c3a_0001` 表示 subscription `sub_a360f06exxxxxxx4c3a` 的第一次扣款订单 |
| respcd                 | 响应码，例如 0000（成功情况）                                       |
| respmsg                | 响应消息，例如 success                                              |
| syssn                  | 交易流水号                                                              |
| txdtm                  | 交易时间                                                            |
| txamt                  | 交易金额                                                            |
| txcurrcd               | 交易货币                                                            |
| customer_id            | 唯一的 customer 对象标识符，格式：`cust_xxxxxx`                               |
| product_id             | 所有 product 对象的唯一标识符，使用逗号分隔，例如：`prod_xxxxxa23f30,prod_xxxxxbe342ac` |
| cardcd                 | 卡号                                                                |
| card_scheme            | 仅适用于 0000，卡组织，例如 VISA                                    |
| current_iteration      | 此订阅的当前迭代次数，例如 1                                         |

示例：

```json 
{
  "txcurrcd": "HKD",
  "reason": "AUTHORISED",
  "cardcd": "",
  "subscription_order_id": "sub_ord_a360f06eb*****ad6aff24c3a",
  "product_id": "prod_8c838c17ddb043b9***11f1a85c30",
  "txdtm": "2024-04-24 15:19:37",
  "txamt": "300",
  "card_scheme": "VISA_DEBIT-SSL",
  "syssn": "20240424180500020000015704",
  "respcd": "0000",
  "subscription_id": "sub_e51bb914919***31d800f6b0fe36d",
  "customer_id": "cust_a9c0bcf2717f4***786a10e5f8f2",
  "notify_type": "subscription_payment",
  "current_iteration": "1",
}
```