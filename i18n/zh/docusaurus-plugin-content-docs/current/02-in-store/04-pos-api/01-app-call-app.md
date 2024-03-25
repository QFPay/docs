import Link from '@docusaurus/Link';

# App call App Android SDK

## 简介

HaoJin是一款为商户提供聚合收款服务的手机软件。 本文档描述了HaoJin开放的接口调用，第三方应用程序可以通过这些接口实现收单功能。
HaoJin支持以下第三方功能：

<br/>
1. 收款、退款、查询多笔交易记录、查询交易明细。
<br/>
2.查看交易摘要，查询交易通道配置。
<br/>
3. 对于卡的交易/撤销/查询/调整端点

<Link href="/img/android/architecture__diagram.png" target="_blank"> ![Introduction](@site/static/img/android/architecture__diagram.png)</Link>

## 如何使用

### 添加权限

将以下代码添加到 AndroidManifest.xml 文件中。
注：为了保证您能获得权限，请先安装haojin App。

<Link href="/img/android/add__permission.png" target="_blank"> ![Add Permissions](@site/static/img/android/add__permission.png)</Link>

### 添加 Jar Package Dependency

将qfpay_haojin_api_xxx.jar文件集成到第三方应用中。

<Link href="/img/android/package__dependency.png" target="_blank"> ![Add Jar Package Dependency](@site/static/img/android/package__dependency.png)</Link>

### 配置 Target Application Id

<Link href="/img/android/config__appid.png" target="_blank"> ![Config Target Application Id](@site/static/img/android/config__appid.png)</Link>

### 添加 Proguard Rule

Add follow code to the proguard-rules.pro file.

<Link href="/img/android/proguard__rule.png" target="_blank"> ![Add Proguard Rule](@site/static/img/android/proguard__rule.png)</Link>

## 第三方接口调用示例

### 收单

调用收单请求：

<Link href="@site/static/img/android/invoke__collection.png" target="_blank"> ![Collection](@site/static/img/android/invoke__collection.png)</Link>

### 退款 

调用退款请求：

<Link href="@site/static/img/android/invoke__refund.png" target="_blank"> ![Refund](@site/static/img/android/invoke__refund.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__refund.png" target="_blank"> ![Refund](@site/static/img/android/parse__refund.png)</Link>

### 查询多笔交易

调用查询请求：

<Link href="@site/static/img/android/multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/multiple__query.png)</Link>

:::note
<br/>
1. 检查支持的通道。<br/>
2.仅支持两种交易类型（付款、退款）查询<br/>
3、按时间段查询优先级高于按月查询。<br/>
4.时间格式为“yyyy-MM-dd HH:mm:ss”<br/>
5.月份格式为“yyyyMM”<br/>
6、分页数值从1开始。<br/>
:::

解析返回值：

<Link href="@site/static/img/android/parse__multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/parse__multiple__query.png)</Link>

### Query Transaction Details

调用查询请求：

<Link href="@site/static/img/android/query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/query__details.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/parse__query__details.png)</Link>

### View Transaction Summary

调用查看交易摘要请求：

<Link href="@site/static/img/android/view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/view__summary.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/parse__view__summary.png)</Link>

### 查询交易通道配置（已弃用）

该接口已被标记为已弃用，可以用 GetUserConfig 接口替换。 详细信息请参见[查询客户配置信息](#查询客户配置信息)。 <br/>

调用查询交易通道配置请求：

<Link href="@site/static/img/android/query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/query__channel__config.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/parse__query__channel__config.png)</Link>

### 查询客户配置信息

调用查询客户配置信息请求：

<Link href="@site/static/img/android/quey__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/quey__user__info.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__query__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/parse__query__user__info.png)</Link>

### 预授权交易扣款

调用预授权交易扣款请求：

<Link href="@site/static/img/android/pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/pre-aut__deduct.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/parse__pre-aut__deduct.png)</Link>

### 预授权交易取消

调用预授权交易取消请求：

<Link href="@site/static/img/android/pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/pre-aut__cancel.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/parse__pre-aut__cancel.png)</Link>

### 预授权交易列表

调用预授权交易列表请求：

<Link href="@site/static/img/android/pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/pre-aut__list.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/parse__pre-aut__list.png)</Link>

### 预授权交易详情

调用预授权交易详情：

<Link href="@site/static/img/android/pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/pre-aut__detail.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/parse__pre-aut__detail.png)</Link>

### 卡退款

调用卡退款请求

<Link href="@site/static/img/android/card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/card__refund.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/parse__card__refund.png)</Link>

### Query Multiple Card Transactions

调用查询请求：

<Link href="@site/static/img/android/multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/multiple__card__query.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/parse__multiple__card__query.png)</Link>

### Query Card Transaction Details

调用查询请求：

<Link href="@site/static/img/android/query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/query__card__details.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details.png)</Link>
<Link href="@site/static/img/android/parse__query__card__details2.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details2.png)</Link>

### 卡调整

调用卡调整请求：

<Link href="@site/static/img/android/card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/card__adjust.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/parse__card__adjust.png)</Link>

### 卡清算

调用卡清算请求：

<Link href="@site/static/img/android/card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/card__settle.png)</Link>

解析返回值：

<Link href="@site/static/img/android/parse__card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/parse__card__settle.png)</Link>

## 附录

### 交易信息字段说明

| 参数名称 | 参数类型              | 是否必填 | 描述                     | 
| ---------- | ------------------------- |-----|---------------------------------|
| id | String  |   是   | 交易识别码 |
| amt | Long | 是 | 交易金额 |
| time | String | 是 | 交易时间 格式：yyy-MM-dd HH:mm:ss |
| channel | String | 是 | 交易通道 例如 weixin, alipay |
| status | Integer | 是 | 交易状态 |
| type | String | 是 | 交易类型, payment 支付 or refund 退款|
| originId | String | 否 | 原本交易识别码, 如果交易是退款则必须填写 |
| mchntName | String | 是 | 商户名字 |
| remarks | String | 否 | 交易备注 |
| confirmCode | String | 否 | 交易确认码|
| operatorAccount | String | 是 | 操作员名称 |
| appCode | String | 否 | 申请码（刷卡）|
| customerId | String | 否 | 客户钱包身份（预授权） |
| customerAccount | String | 否 | 客户钱包账户（预授权）|
| completeTransId | String | 否 | 预授权交易完成时新生成的交易Id（预授权） |
| completeTime | String | 否 | 预授权交易完成的完成时间 格式yyyy-MM-dd HH:mm:ss（预授权） |

## 通道信息字段说明

| 参数名称 | 参数类型              | 是否必填 | 描述                     | 
| ---------- | ------------------------- |-----|---------------------------------|
| name | String | 是 | 通道名字 |
| desc | String | 是 | 通道描述 |

### 交易状态字段说明

| 交易状态 | 描述       |
| ------------------ | ------------------|
| 0 | 正常交易 |
| -1/-2 | 等待支付 |
| -3 | 失败 |
| 1 | 沖正 |
| 2 | 撤销 |
| 3 | 退款 |
| 4 | 部分退款 |
| 5 | 预授权冻结 |
| 6 | 预授权解冻 |
| 7 | 预授权完成 |

### 结果代码 说明

| 结果代码        | 描述       |
| ------------------ | ------------------|
| -1 | 未知错误 |
| 0 | 成功 |
| 100 | 客户端错误 |
| 101 | 金额错误 |
| 102 | AppId为空 |
| 103 | 订单Id为空 |
| 104 | 其他参数为空 |
| 105 | 用户取消 |
| 106 | 网络错误 |
| 107 | 用户未登录 |
| 108 | 应用程序未安装 |
| 109 | 启动应用程序失败 |
| 110 | 不支持API调用 |
| 111 | 时间段错误 |
| 112 | 不允许跨月查询 |
| 113 | 获取配置信息失败 |
| 114 | 调整卡交易失败 |
| 115 | 设备不支持刷卡 |
| 116 | 密码输入错误 |
| 200 | 服务器错误 |
| 201 | 订单Id 不存在 |
| 202 | 交易失败 |
| 203 | 账户余额不足 |
| 204 | 交易正在确认中 |
| 205 | 登录状态已过期 |
| 206 | 退款正在确认中 |
| 207 | 退款失败 |