import Link from '@docusaurus/Link';

# App call App Android SDK

## Latest Update

:::note
version 2.3.4.jar

1. sdk support specify MPM or CPM payment

        `CollectionReq.SCAN_TYPE_SCAN`: MPM payment
        `CollectionReq.SCAN_TYPE_QRCODE`：CPM payment

Setting Method：

```
    CollectionReq req = new CollectionReq(Long.parseLong(money));
    req.setScan_type(scan_type);//set scan type，
    CollectionReq.SCAN_TYPE_SCAN/CollectionReq.SCAN_TYPE_QRCODE
```

:::

:::note
version 2.3.3.jar

1. Transaction add `getOut_trade_no` and getCardscheme method

:::

:::note
version 2.3.2.jar
Update：

1. Transaction related
    1.1 Transaction support passing in `out_trade_no` :
    1.2 Support setting card payment（card_payment/unionpay_card/amex_card）wait timeout time `wait_card_timeout`（optional）,If `wait_card_timeout` is not set,
    Default timeout time is 120s, the parameter must be greater than 0, if it is passed in a value less than or equal to 0, the default timeout time is 120s
    Setting method：

    ```
        CollectionReq req = new CollectionReq(Long.parseLong(money));
        req.setWait_card_timeout(wait_card_timeout);//设置刷卡超时时间
        req.setOut_trade_no(out_trade_no);//设置外部订单号
    ```

2. Query
    2.1 Support using `out_trade_no` to query transaction information,
        `order_id` and `out_trade_no` must be passed in at least one, or both
    Setting method：

    ```
        GetTransReq req = new GetTransReq(order_id);
        req.setOut_trade_no(out_trade_no);
    ```
:::

:::note
version 2.3.1.jar

1、app call app sdk support specify payment method when make payment
Using `CollectionReq setPay_method` to set specific payment method，if not set specific payment method, or account has not opened specific payment method it will pop up payment method selection box to let self choose

`pay_method` field type `String`, reference value as follows：
        pay_method            desc
        （1）、card_payment        Card payment(master/visa)
        （2）、wx                  WeChat Pay
        （3）、alipay              Alipay
        （4）、payme               PayMe
        （5）、union               UnionPay
        （6）、fps                 FPS
        （7）、octopus             Octopus
        （8）、unionpay_card       union card pay
        （9）、amex_card           amex card pay

2、sdk support set front and back camera
Using `CollectionReq setCamera_id` to set front and back camera(optional), default is back camera
    `camera_id` field  type `Int` , reference value as follows：
    0：CAMERA_PARAM_BACK  back camera
    1：CAMERA_PARAM_FROT  front camera

e.g.
```
    CollectionReq req = new CollectionReq(Long.parseLong(money));
    req.setPay_method(current_paymethod);
    req.setCamera_id(current_camera);
```
:::

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

```xml
<uses-permission android:name="com.qfpay.haojin.permission.OPEN_API"/>
```
### Add Jar Package Dependency

Integrated the [qfpay_haojin_api_xxx.jar](@site/static/files/qfpay_haojin_api_2.3.6.zip) file in the third party application.

place jar file under /libs

### Config Target Application Id

```java
Config.setTargetAppId("in.haojin.nearbymerchant.oversea");
```

### Add Proguard Rule

Add follow code to the proguard-rules.pro file.

```proguard
-dontnote com.qfpay.haojin.model.**

-keep class com.qfpay.haojin.model.** {*;}
```

## Third-party Interface Invoke Sample

### Collection

Calling a collection request:

```java
ITradeAPI mTradeApi = TradeApiFactory.createTradeApi(XXXActivity, this);

CollectionReq collectionReq = new CollectionReq(100);

@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    CollectionResp collectionResp =
            (CollectionResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    if (collectionResp == null) {
        return;
    }

    if (collectionResp.isSuccess()) {
        Transaction transaction = collectionResp.getPayResult();
    } else {
        // handle the error
        Log.e(TAG, "onActivityResult: collection error message is " +
                collectionResp.getErrorMsg());
    }
}
```

### Refund

Calling a refund request:

```java
ITradeAPI mTradeApi = TradeApiFactory.createTradeApi(XXXActivity, this);

RefundReq refundReq = new RefundReq(qfOrderId);//the order id from HaoJin

int ret = mTradeApi.doTrade(refundReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    RefundResp refundResp = (RefundResp) mTradeApi.parseResponse(requestCode,
            resultCode, data);

    if (refundResp == null) {
        return;
    }

    if (refundResp.isSuccess()) {
        Transaction transaction = refundResp.getRefundResult();
    } else {
    }
}
```

### Query Multiple Transaction

Calling a query request:

```java
GetTransListReq getTransListReq = new GetTransListReq();

getTransListReq.setChannels(selectedChannel);//pay channel, like wexin/alipay

getTransListReq.setTypes(selectedType);//pay type, like payment/refund

getTransListReq.setMonth(month);//query by month

getTransListReq.setStartTime(startTime);//query by custom start time

getTransListReq.setEndTime(endTime);//query by custom end time

getTransListReq.setPageSize(pageSize);//split page size

getTransListReq.setPageNum(pageNum);//split page number
```

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

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    GetTransListResp getTransListResp =
            (GetTransListResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    if (getTransListResp == null) {
        return;
    }

    if (getTransListResp.isSuccess()) {
        List<Transaction> transactions = getTransListResp.getTransList();
    } else {
    }
}
```

### Query Transaction Details

Calling a query request:

```java
GetTransReq getTransReq = new GetTransReq(qfOrderId);

int ret = mTradeApi.doTrade(getTransReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    GetTransResp getTransResp =
            (GetTransResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    if (getTransResp == null) {
        return;
    }

    if (getTransResp.isSuccess()) {
        Transaction transaction = getTransResp.getTrans();
    } else {
    }
}
```

### View Transaction Summary

Calling a view transaction summary request:

```java
CheckTradeSumReq checkTradeSumReq = new CheckTradeSumReq();

int ret = mTradeApi.doTrade(checkTradeSumReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    CheckTradeSumResp checkTradeSumResp = (CheckTradeSumResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);
}
```

### Query Transaction Channel Configuration(Deprecated)

This interface has been marked as deprecated and can be replaced with the GetUserConfig interface. See [Query User Configuration Information](#query-user-configuration-information) for details. <br/>
Calling a Query transaction channel configuration request:

```java
GetChannelConfigReq channelConfigReq = new GetChannelConfigReq();

int ret = getTradeApi().doTrade(channelConfigReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    GetChannelConfigResp getChannelConfigResp = (GetChannelConfigResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);

    if (getChannelConfigResp == null) {
        return;
    }

    if (getChannelConfigResp.isSuccess()) {
        List<Channel> channels = getChannelConfigResp.getChannels();
    } else {
    }
}
```

### Query User Configuration Information

Call a query user configuration information request:

```java
GetUserConfigReq getUserConfigReq = new GetUserConfigReq();

int ret = getTradeApi().doTrade(getUserConfigReq);
```

Parse the return value:

```java
UserConfig userConfig = getUserConfigResp.getUserConfig();

if (userConfig == null) {
    Log.e(TAG, "handleChannelsResp: get user config info failed.");
    return;
}

// the list of transaction channel
List<Channel> channels = userConfig.getTransChannels();

// the currency code of transaction
int currencyCode = userConfig.getCurrency();
```

### Pre-authorization Transaction Deduction

Call a pre-authorization transaction deduction request:

```java
PreAuthTransDeductReq preAuthTransDeductReq = new PreAuthTransDeductReq(transId);

int ret = mTradeApi.doTrade(preAuthTransDeductReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransDeductResp deductResp = (PreAuthTransDeductResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);

    if (deductResp.isSuccess()) {
        Log.i(TAG, "onActivityResult: success");
    }
}
```

### Pre-authorization Transaction Cancel

Call pre-authorization transaction cancel request:

```java
PreAuthTransCancelReq preAuthTransCancelReq = new PreAuthTransCancelReq(transId);

int ret = mTradeApi.doTrade(preAuthTransCancelReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransCancelResp cancelResp = (PreAuthTransCancelResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);

    if (cancelResp.isSuccess()) {
        Log.i(TAG, "onActivityResult: success");
    }
}
```

### Pre-authorization Transaction List

Call pre-authorization transaction list request:

```java
int pageSize = 10;

int pageNum = 1;

PreAuthTransListReq preAuthTransListReq = new PreAuthTransListReq(pageSize, pageNum);

int ret = mTradeApi.doTrade(preAuthTransListReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransListResp transListResp =
            (PreAuthTransListResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    List<PreAuthTransactions> transactions = transListResp.getTransList();
}
```

### Pre-authorization Transaction Detail

Call pre-authorization transaction detail request:

```java
String transId = "123123123123";

PreAuthTransDetailReq preAuthTransDetailReq = new PreAuthTransDetailReq(transId);

int ret = getTradeApi().doTrade(preAuthTransDetailReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransDetailResp transDetailResp =
            (PreAuthTransDetailResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    PreAuthTransaction transaction = transDetailResp.getTrans();
}
```

### Card Refund

Calling a refund request:

```java
ITradeAPI mTradeApi = TradeApiFactory.createTradeApi(XXXActivity.this);

CardRefundReq cardRefundReq = new CardRefundReq(qfOrderId); // the order id from HaoJin

int ret = mTradeApi.doTrade(cardRefundReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    RefundResp refundResp = (RefundResp) mTradeApi.parseResponse(requestCode,
            resultCode, data);

    if (refundResp == null) {
        return;
    }

    if (refundResp.isSuccess()) {
        Transaction transaction = refundResp.getRefundResult();
    } else {
    }
}
```

### Query Multiple Card Transactions

Calling a query request:

```java
GetCardTransListReq cardTransListReq = new GetCardTransListReq();

int ret = mTradeApi.doTrade(cardTransListReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    GetTransListResp getTransListResp =
            (GetTransListResp) mTradeApi.parseResponse(requestCode, resultCode, data);
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    GetTransListResp getTransListResp =
            (GetTransListResp) mTradeApi.parseResponse(requestCode, resultCode, data);
    
    // Index not found
    if (getTransListResp == null) {
        return;
    }

    if (getTransListResp.isSuccess()) {
        List<Transaction> transactions = getTransListResp.getTransList();
    } else {
    }
}
    if (getTransListResp == null) {
        return;
    }

    if (getTransListResp.isSuccess()) {
        List<Transaction> transactions = getTransListResp.getTransList();
    } else {
    }
}
```

### Query Card Transaction Details

Calling a query request:

```java
GetCardTransReq getCardTransReq = new GetCardTransReq(orderId);

int ret = mTradeApi.doTrade(getCardTransReq);
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    GetTransResp getTransResp =
            (GetTransResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    if (getTransResp == null) {
    return;
}

if (getTransResp.isSuccess()) {
    Transaction transaction = getTransResp.getTrans();
} else {
}
}
```

### Card Adjust

Calling an adjust request:

```java
CardAdjustReq cardAdjustReq = new CardAdjustReq(orderId);

int ret = mTradeApi.doTrade(cardAdjustReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    CardAdjustResp cardAdjustResp = (CardAdjustResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);

    if (cardAdjustResp == null) {
        return;
    }

    if (cardAdjustResp.isSuccess()) {
        Transaction transaction = cardAdjustResp.getCardTrans();
    } else {
    }
}
```

### Card Settle

Calling a settle request:

```java
CardSettleReq cardSettleReq = new CardSettleReq();

int ret = mTradeApi.doTrade(cardSettleReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

Parse the return value:

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    CardSettleResp cardSettleResp = (CardSettleResp)
            getTradeApi().parseResponse(requestCode, resultCode, data);

    if (cardSettleResp == null) {
        return;
    }

    List<SettleData> settleDataList = cardSettleResp.getSettleDataList();
}
```

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
