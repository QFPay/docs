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

![enter image description here](http://www.plantuml.com/plantuml/png/hLHBRrCz4DtxLuow-hu5aNYmwGAr892weWXO8OGczYGn-8xTyRZX_dlk8t5wRsbI13jhvipZd3FoHLOKBKqmQ3KAs98rDYI0kRvtgUvbDyZQfUhRc8IYtlhK9vflkSrz-gnYku1ISpQ1tQmIjWFimxjhR7-BsQO1qAKROeKrAcsnFJDcBR4aUBgubkYALOD58vTcIMBgq2UlnbNEmGgX4gGTU8ZswM65UHhYyZjP1Q6RGbaDHoKGlzweKK7EQDL71cnYuMd85X5YsnfY1tsP6JaU5X7I8bmdUTT3zsoUBTvKgHz3fnepvpFB7o5K8OmDcIOkVI133VfWkcVml0PqJYZdavnggocfvukzUP_Y3sBuyZaJl0qqX3mhhGK7yTuBN5vVmTKXzFMk3BNzOR3dL1GiYkkUgxXuI0ST1XyH0SLjOd0x6M0807SDwMVoqeBhkym50JDbVCBnKOHnbvb4BnOVop9RyQbdVO9q7g5BWfp8-fMt-slA3_4VIeRcnrG8FYl4rPtR16G7DmLPlROJjdCsLHlRsa0P4Wesf2IdpoOVg0-THaamjsmt4ZcM37HBhFVgKycRQVL8r-tmn1EHNovUJtUyg_C8MNd92dig_rrQzRV3_MneCkX_Wq6XBszGlSKGMj1En3K9B5iOVhF3kjjq3eu6ILU5NPL-cmvEZPaHHJqabw26GgPzOt9Tw_hVpfsU3vXv2_SDcyjURVhxlMTEFKIE_z3hMPl77WNsBjBi9aAC2Ggh3p2vNEXbY08MsL88vFwf72V8rEqkY5rfmYy0)

### 订阅支付的状态

[state diagram](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Recurring_payment.drawio#R5Vxbc5s4FP41mdl9cIY7%2bDFxku7OtLuZpp3dPu0oRrFpMXgENHZ//QqQAEnYxkGA6uYllpCE0NH5zlW6Mheb3TsEtusPsQ/DK0Pzd1fm3ZWB/xwd/8tr9mWNPjfNsmaFAp/U1RVPwQ9IKjVSmwU%2bTJiGaRyHabBlK5dxFMFlytQBhOJXttlLHLJv3YIVFCqeliAUa/8J/HRd1nqGW9f/AYPVmr5Zd%2bblkw2gjcmXJGvgx6%2bNKvP%2bylygOE7LX5vdAob56tF1Kfs9HHhaTQzBKO3Swd59/WT/vcmSb/67J%2bP2fmW9%2bDOTfEeS7ukXQx8vACnGKF3HqzgC4X1de4viLPJhPqyGS3Wb93G8xZU6rvwK03RPqAmyNMZV63QTkqd4xmj/b7PwJR/s2qbFux0ZvCztSUn8ZLIKSZyhJTzynXTrALSC6ZF2nl02zBeh8Qayou9gvIF4QrgBgiFIg%2b/sLgFks62qdlXXxzjAczY0whm2R3YF4QvL0tghypmSXjVV8Y/GNOqqgtbn0N0rX/cdhBn5hocAJfkMFwiCFFO3bV%2b8B8%2bYwRlagjBYRfj3EtMEIlzxHaI0wAx0Qx5sAt8vtw1Mgh/guRgvp%2bY2/7jic%2b3bK/uulb5HN23%2bJrhrgwHyFobTGPKRXjPt2tI1nSGFUZZ6EnhGx9nTMjtC/PKSwEFIqwuUFUkZhhg/c5q8BGG4iMMYE%2b4uSVH8DZJSk8QH2U4gwMGFdjVuvxuE0V5rUDVJk3UDT03t8MIzC3f2KpmTAp82FvB5HYFP18cBPtNmN4I57wZ8NwiBfaMZAY/D76EbjAPYes%2bUI8plPUfgvUew38BiYi8gCJWGVcoSUmDVcJjl1%2bWAqs51GRBFLZUUI1cBgDBkA0Q//LaPsNpTtlzCJFGZ1yxZvKZda54U5mLxcjYap4maqEA3tI43z1kiRxUxdVYCYd1kYlVkWhusoX18YbBFug3W1QjTvZF0EY/d8zZP4oGNMENUF/6Ki8WlQAYiv4Cz52SJgm0axFG%2bLLttgNTWJGQaaLo1Z5Gpp4E2PKKZc5V0h1OqA9wFaQMHcOlL40ndKS%2bMCALDYMC5ZoRlcMKCQMagZgT1BbU4ZyodR1nep5tfCu%2bbjs46Z0zVeV8X3S9/Rst4sw1hCgWynUOqNMeBBkwUnZ6TOMxSeIOWBBeK2rqUk9IHyboCltd1kMKnLSiY9BWBrSSlyub9O6JSpVstWhXv95SmVVlKGXADeraNjoBqqWXAWaIB95FM4EF1T4kl0XqzWOWmJ8DRwBvrfTHZ/sOhn623Um0iU0afnun0uVJMZxsC030AUQbyjksQLfPorbJcZx%2bSSm/RLLS5zXJeTw/l8LzlTBOxoNZB0za4Nqip0G4eNBjSGMu50JkjpYvBdgjmArxVGoDkOEdlLND3EGv5oWt7XTva3rGPNR/G/nGoeG2qBssMoSBale4RhVHKkRlFsbS5I0Uh4FwoVCwNj1qu6M0dE7VI5KSTU0NhNcIdJjp7LtjoJocG2nHwqFzr7e2HQQ%2bXMmCNHoUDNa0cqJ%2bCDTbFtWyrMIxQvpETjHVd1o3S14dKvWMuOypVL0dws4iK7M2y%2bJLLdbFwvGR29LC49mGy9otbiZG72tX136EoxeXQg3N52drULi/bmUTWji825x3Fpu0OIjZFuchlt3njxhHpejQYcVEY821etMvhP27NxYTCkR3O00b9zuQ%2bqiFTbbnhph4g6keN358ty4hCPGOJJrCIyidsVL4K2jsh/sDbZ4R/rfJfvy2yJMXzQfnLot8V1jnpDpaSlGRRW6FvWhLvIOfUmeF0zPnE4vS8CFK7o25yhp4Pc6DibDeZyYkLy2IC%2bac76NoIkX9DxJvP0RYEFyzGZ6bGZWq3HA0YV5JTi0kNSX7KZ97O%2bO5QnN/dZ%2bWMo3zPOEat8jtPaN%2bnB9K4gcq16e%2by580Fw3OGhxZXtNYfQZaIDhN19BHKh1L0EcdmYUbOiQTbZLWT0Rxg9k91fmlca4PqHBNE598ECFNoGrYYY/uJMgGkxdgwMJjKR/7nSh0QGM6vRzPUJjAq%2bnl%2bxGDEIyjSde%2byCw5ICJq7YU/uAXcFSoisUx1%2bblAiWYNt/hxG/lMK0vzp4aPREtbO41dOWLhRjyC5v0iyLA2DThA56EcfMat8QQJtF%2bwaMHg7aWp4cacWxMZIkpja7spk03HHcExn3AibK0bYPsIk2yhtPUu9JcV2DIYCM%2bW1Zs%2bbhFmrzDPMGk1jFyvxR5PPcOERogB/db4/%2brrnR7rNw%2bKvMRooy5V/j%2bEcz3I9NK9BTWpPBIlPKCgs6vtIFNPqIAXlFEnHdekJQElHWkawr5U6tTJcjrzRVftVJGhHz%2bMfdNgb5hgxOVH3Jmx9qXq35XBoa3VUvAezT71fJLPN6%2bq5li/ge9GHXuJ1kkcUEnr08g0pQs8ze17CM4I%2b/Itc9dmZh%2bRfedcP48QD0QLBpF6EZOunEy9G9ULOx16BmcHlcM9FQTfuVVCaqGyoJPk656Iwd8lQu1h2nLdzvIhapYOnohj8ASn%2bdssDKSSnR6qY882WtfSsc80Q9iq9wQHu1iBL1L5FuOY1KRqAQU%2btUtL30wdoagDbYcBzmm1Xl7alB12MlTPTudOJZtfw5RvgHxfrm95LmtUX5pv3/wM=)
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

`API路径: /customer/v1/create`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|billing_address|String|否|客户账单地址, 字符串化的JSON对象|

在**data**部分的响应参数列表:

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|
|billing_address|JSON|客户账单地址|

### 更新 customer 对象

`API路径: /customer/v1/update`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|是|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|billing_address|JSON|否|客户账单地址|

在**data**部分的响应参数列表:

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|
|billing_address|JSON|客户账单地址|

### 查询 customer 对象

`API路径: /customer/v1/query`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|否|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|否|客户姓名|
|phone|String|否|客户联系方式|
|email|String|否|客户邮箱|
|page|Int|否|默认值 = 1|
|page_size|Int|否|默认值 = 10, 最大值是100|

在**data**部分的响应参数列表:

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|name|String|客户姓名|
|phone|String|客户联系方式|
|email|String|客户邮箱|

### 删除 customer 对象

永久删除 customer 对象, 不能撤销. 任何与已删除的 customer 对象相关联的订阅计划将会被取消
`API路径: /customer/v1/delete`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|customer_id|String|是|QFPay 系统生成的唯一 customer 对象ID值|

## Product

Product 是商户要提供给客户的商品和服务的模型.它定义了交易金额, 交易货币和扣款周期(如可用). 这个对象可被用于 subscription API

### 创建 product 对象

创建一个新的 product 对象

`API路径: /product/v1/create`

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

在**data**部分的响应参数列表:

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
`API路径: /product/v1/update`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|是|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|否|展示给客户的产品名称|
|description|String|否|产品描述|

在**data**部分的响应参数列表:

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

`API路径: /product/v1/create`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|否|QFPay 系统生成的唯一 product 对象的ID值|
|name|String|否|展示给客户的产品名称|
|description|String|否|产品描述|
|txcurrcd|String|否|交易货币|
|interval|String|否|可用值: monthly,yearly|
|page|Int|否|page no., 默认值=1|
|page_size|Int|否| page size, 默认值=10,max value=100|

在**data**部分的响应参数列表:

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

`API路径: /product/v1/delete`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|product_id|String|否|QFPay 系统生成的唯一 product 对象的ID值|

## Subscription

QFPay 会基于产品类型和支付令牌,在每个扣款周期自动向客户收费直到订阅结束或是取消. 在创建 subscription 对象之前, **payment token**, **customer** 和 **product** 必须被创建.

### 创建 subscription 对象

`API路径: /subscription/v1/create`

请求参数列表:

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

在**data**部分的响应参数列表:

|参数名称|参数类型|描述|
|---|---|---|
|customer_id|String|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String|  QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object| QFPay 系统生成的唯一 product 对象的ID值和相应数量的列表|
|total_billing_cycles|Int|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|否|订阅开始时间|

### 更新 subscription 对象

更新当前的 subscription 对象
`API路径: /subscription/v1/update`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|subscription_id|String|是|QFPay 系统生成的唯一 subscription 对象的ID值|
|total_billing_cycles|Int|否|订阅支付总的扣款周期, 若为null值则为无限|
|start_time|String|否|订阅开始时间,订阅将开始首次扣款|
|token_id|String|否| QFPay 系统生成的唯一 payment token 对象的ID值|
|products|Object|否| QFPay 系统生成的唯一 product 对象的ID值和想赢数量的列表|

在**data**部分的响应参数列表:

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

`API路径: /subscription/v1/query`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|page|Int|否| 查询页数,默认值=1|
|page_size|Int|否| 查询页面大小, 默认值=10, 最大值=100|
|subscritpion_id|String|否|QFPay 系统生成的唯一 subscription 对象的ID值|
|customer_id|String|否|QFPay 系统生成的唯一 customer 对象ID值|
|token_id|String|否|QFPay 系统生成的唯一 payment token 对象的ID值|
|state|String|否|订阅的状态, e.g. incompelete, active,...|

在**data**部分的响应参数列表:

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

### Cancel subscription 对象

立即取消客户的订阅

`API路径: /subscription/v1/cancel`

请求参数列表:

|参数名称|参数类型|是否必填|描述|
|---|---|---|---|
|subscription_id|String|是|QFPay 系统中的唯一订阅对象ID|
