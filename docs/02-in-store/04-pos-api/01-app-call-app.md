import Link from '@docusaurus/Link';

# App call App Android SDK

## Introduction

HaoJin is a mobile phone software that provides aggregate collection services for merchants. This document describes the interface calls that HaoJin is open to, and third-party applications can implements the collection function through these interfaces.
HaoJin supports below third-party functions:

<br/>
1. Collection, Refund, Query Multiple Transaction Records, Query Transaction Details.
<br/>
2. View Transaction Summary, Query Transaction Channel Configuration.
<br/>
3. Sale/Void/Query/Adjust Endpoints for card.

<Link href="/img/android/architecture__diagram.png" target="_blank"> ![Introduction](@site/static/img/android/architecture__diagram.png)</Link>

## How to use

### Add Permissions

Add the following code to the AndroidManifest.xml file.
Note: In order to ensure that you can get permission, please install the haojin
application first.

<Link href="/img/android/add__permission.png" target="_blank"> ![Add Permissions](@site/static/img/android/add__permission.png)</Link>

### Add Jar Package Dependency

Integrated the qfpay_haojin_api_xxx.jar file in the third party application.

<Link href="/img/android/package__dependency.png" target="_blank"> ![Add Jar Package Dependency](@site/static/img/android/package__dependency.png)</Link>

### Config Target Application Id

<Link href="/img/android/config__appid.png" target="_blank"> ![Config Target Application Id](@site/static/img/android/config__appid.png)</Link>

### Add Proguard Rule

Add follow code to the proguard-rules.pro file.

<Link href="/img/android/proguard__rule.png" target="_blank"> ![Add Proguard Rule](@site/static/img/android/proguard__rule.png)</Link>

## Third-party Interface Invoke Sample

### Collection

Calling a collection request:

<Link href="@site/static/img/android/invoke__collection.png" target="_blank"> ![Collection](@site/static/img/android/invoke__collection.png)</Link>

### Refund

Calling a refund request:

<Link href="@site/static/img/android/invoke__refund.png" target="_blank"> ![Refund](@site/static/img/android/invoke__refund.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__refund.png" target="_blank"> ![Refund](@site/static/img/android/parse__refund.png)</Link>

### Query Multiple Transaction

Calling a query request:

<Link href="@site/static/img/android/multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/multiple__query.png)</Link>

:::note
<br/>
1. Check the supported channels.<br/>
2. Only support querying of two transaction types (payment, refund)<br/>
3. Querying by time period has higher priority than querying by month.<br/>
4. The time format is "yyyy-MM-dd HH:mm:ss"<br/>
5. The month format is "yyyyMM"<br/>
6. Split page number starts from one.<br/>
:::

Parse the return value:

<Link href="@site/static/img/android/parse__multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/parse__multiple__query.png)</Link>

### Query Transaction Details

Calling a query request:

<Link href="@site/static/img/android/query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/query__details.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/parse__query__details.png)</Link>

### View Transaction Summary

Calling a view transaction summary request:

<Link href="@site/static/img/android/view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/view__summary.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/parse__view__summary.png)</Link>

### Query Transaction Channel Configuration(Deprecated)

This interface has been marked as deprecated and can be replaced with the GetUserConfig interface. See [Query User Configuration Information](#query-user-configuration-information) for details. <br/>
Calling a Query transaction channel configuration request:

<Link href="@site/static/img/android/query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/query__channel__config.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/parse__query__channel__config.png)</Link>

### Query User Configuration Information

Call a query user configuration information request:

<Link href="@site/static/img/android/quey__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/quey__user__info.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/parse__query__user__info.png)</Link>

### Pre-authorization Transaction Deduction

Call a pre-authorization transaction deduction request:

<Link href="@site/static/img/android/pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/pre-aut__deduct.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/parse__pre-aut__deduct.png)</Link>

### Pre-authorization Transaction Cancel

Call pre-authorization transaction cancel request:

<Link href="@site/static/img/android/pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/pre-aut__cancel.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/parse__pre-aut__cancel.png)</Link>

### Pre-authorization Transaction List

Call pre-authorization transaction list request:

<Link href="@site/static/img/android/pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/pre-aut__list.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/parse__pre-aut__list.png)</Link>

### Pre-authorization Transaction Detail

Call pre-authorization transaction detail request:

<Link href="@site/static/img/android/pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/pre-aut__detail.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/parse__pre-aut__detail.png)</Link>

### Card Refund

Calling a refund request:

<Link href="@site/static/img/android/card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/card__refund.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/parse__card__refund.png)</Link>

### Query Multiple Card Transactions

Calling a query request:

<Link href="@site/static/img/android/multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/multiple__card__query.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/parse__multiple__card__query.png)</Link>

### Query Card Transaction Details

Calling a query request:

<Link href="@site/static/img/android/query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/query__card__details.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details.png)</Link>
<Link href="@site/static/img/android/parse__query__card__details2.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details2.png)</Link>

### Card Adjust

Calling an adjust request:

<Link href="@site/static/img/android/card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/card__adjust.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/parse__card__adjust.png)</Link>

### Card Settle

Calling a settle request:

<Link href="@site/static/img/android/card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/card__settle.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/parse__card__settle.png)</Link>

## Reference

### Transaction Information Field Description

| Attribute | Type | Mandatory | Description |
| --------- | ---- | --------- | ----------- |
| `id` | String  |   Yes   | Transaction idendity number |
| `amt` | Long | Yes | Transaction Amount |
| `time` | String | Yes | Transaction time yyy-MM-dd HH:mm:ss |
| `channel` | String | Yes | Transaction channel like weixin, alipay |
| `status` | Integer | Yes | Transaction status |
| `type` | String | Yes | Transaction type, payment or refund |
| `originId` | String | No | Original transaction id, mandatory if the transaction is refund |
| `mchntName` | String | Yes | Sore name |
| `remarks` | String | No | Transaction remarks |
| `confirmCode` | String | No | Transaction confirmation code |
| `operatorAccount` | String | Yes | Operator name |
| `appCode` | String | No | Application code (swipe card) |
| `customerId` | String | No | Idendity of customer wallet (pre-authorization) |
| `customerAccount` | String | No | Account of customer wallet (pre-authorization)|
| `completeTransId` | String | No | Newly generated transaction id when the pre-authorization transaction is completed (pre-authorization) |
| `completeTime` | String | No | Complete time when the pre-authorization transaction is completed yyyy-MM-dd HH:mm:ss (pre-authorization) |

## Channel Information Field Description

| Attribute | Type | Mandatory | Description |
| ---------- | ---- |---------- | ----------- |
| `name` | String | Yes | Channel name |
| `desc` | String | Yes | Channel description |

### Transaction Status Field Description

| Transaction Status | Description       |
| ------------------ | ------------------|
| 0 | Normal transaction |
| -1/-2 | Waiting for payment |
| -3 | Failed |
| 1 | Reversal |
| 2 | Void |
| 3 | Refund |
| 4 | Partial Refund |
| 5 | Pre-authorization Frozen |
| 6 | Pre-authorization Unfrozen |
| 7 | Pre-authorization Completed |

### Result Code Description

| Result Code        | Description       |
| ------------------ | ------------------|
| -1 | Unknown error |
| 0 | Success |
| 100 | Client error |
| 101 | Amount error |
| 102 | AppId is empty |
| 103 | Order id is empty |
| 104 | Other parameter is empty |
| 105 | User cancel |
| 106 | Network error |
| 107 | User not logged in |
| 108 | Application not installed |
| 109 | Launch App failed |
| 110 | Non-support API invoke |
| 111 | Time period error |
| 112 | Cross-month query not allowed |
| 113 | Failed to get config info |
| 114 | Card adjust failed |
| 115 | Device does not support card swiping |
| 116 | Password input error |
| 200 | Server error |
| 201 | Order id does not exist |
| 202 | Transaction Failed |
| 203 | Insufficient account balance |
| 204 | Transaction is confirming |
| 205 | Login status expired |
| 206 | Refund is confirming |
| 207 | Refund Failed |
