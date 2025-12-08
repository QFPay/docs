import Link from '@docusaurus/Link';

# App call App Android SDK

## 最近更新

```note
version 2.3.4.jar
    1、sdk 支持指定正扫或者反扫支付
         CollectionReq.SCAN_TYPE_SCAN:扫码支付
         CollectionReq.SCAN_TYPE_QRCODE：QR_CODE 支付

   
    设置方法：
         CollectionReq req = new CollectionReq(Long.parseLong(money));
            req.setScan_type(scan_type);//设置扫码方式， CollectionReq.SCAN_TYPE_SCAN/CollectionReq.SCAN_TYPE_QRCODE
```

```note
version 2.3.3.jar
	1、Transaction 添加getOut_trade_no 和getCardscheme 方法
```

```note
version 2.3.2.jar
    更新内容：
    一、交易相关
        1、交易支持传入外部订单号 out_trade_no :
        2、支持设置设置刷卡（card_payment/unionpay_card/amex_card）等待超时时间wait_card_timeout（可以不设置）,wait_card_timeout如果不设置，
        默认超时120s，该参数必须大于0，如果传小于等于0的值，则超时时间默认120s
           
        设置方法：
            CollectionReq req = new CollectionReq(Long.parseLong(money));
            req.setWait_card_timeout(wait_card_timeout);//设置刷卡超时时间
            req.setOut_trade_no(out_trade_no);//设置外部订单号

        
    二、查询、
        1、支持使用out_trade_no 查询交易信息,
            order_id 和 out_trade_no 至少传一个，或者两个都传
        
        设置方法：
            GetTransReq req = new GetTransReq(order_id);
            req.setOut_trade_no(out_trade_no);
```

```note
version 2.3.1.jar

    1、app call app  sdk 支付时支持具体的支付方式
    通过 CollectionReq setPay_method 设置具体的支付方式：，如果不设置具体的支付方式，
        或者账号没有开通相应的支付方式，则会弹出支付方式选择框，自己选择

    pay_method 字段  类型 String ，参考值如下：
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


    
    2、sdk 支持设置前后置摄像头
    通过 CollectionReq setCamera_id 设置 前后置摄像头 可以不设置，默认后置：
        camera_id:扫码支付的时候可以切换前后摄像头,可以不传这个字段，默认是后置摄像头
        camera_id 字段  类型 Int ，参考值如下：
        0：CAMERA_PARAM_BACK  后置摄像头
        1：CAMERA_PARAM_FROT  前置摄像头
        
例如：
       CollectionReq req = new CollectionReq(Long.parseLong(money));
        req.setPay_method(current_paymethod);
        req.setCamera_id(current_camera);
```

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

```xml
<uses-permission android:name="com.qfpay.haojin.permission.OPEN_API"/>
```

### 添加 Jar Package Dependency

将[qfpay_haojin_api_xxx.jar](@site/static/files/qfpay_haojin_api_2.3.6.zip)文件集成到第三方应用中。


```java
Config.setTargetAppId("in.haojin.nearbymerchant.oversea");
```

### 配置 Target Application Id

<Link href="/img/android/config__appid.png" target="_blank"> ![Config Target Application Id](@site/static/img/android/config__appid.png)</Link>

### 添加 Proguard Rule

Add follow code to the proguard-rules.pro file.

```proguard
-dontnote com.qfpay.haojin.model.**

-keep class com.qfpay.haojin.model.** {*;}
```

## 第三方接口调用示例

### 收单

调用收单请求：

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

### 退款 

调用退款请求：

```java
ITradeAPI mTradeApi = TradeApiFactory.createTradeApi(XXXActivity, this);

RefundReq refundReq = new RefundReq(qfOrderId);//the order id from HaoJin

int ret = mTradeApi.doTrade(refundReq);
```

解析返回值：

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

### 查询多笔交易

调用查询请求：

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
1. 检查支持的通道。<br/>
2.仅支持两种交易类型（付款、退款）查询<br/>
3、按时间段查询优先级高于按月查询。<br/>
4.时间格式为“yyyy-MM-dd HH:mm:ss”<br/>
5.月份格式为“yyyyMM”<br/>
6、分页数值从1开始。<br/>
:::

解析返回值：

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

调用查询请求：

```java
GetTransReq getTransReq = new GetTransReq(qfOrderId);

int ret = mTradeApi.doTrade(getTransReq);
```

解析返回值：

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

调用查看交易摘要请求：

```java
CheckTradeSumReq checkTradeSumReq = new CheckTradeSumReq();

int ret = mTradeApi.doTrade(checkTradeSumReq);
```

解析返回值：

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data)
{
    super.onActivityResult(requestCode, resultCode, data);

    CheckTradeSumResp checkTradeSumResp = (CheckTradeSumResp)
            mTradeApi.parseResponse(requestCode, resultCode, data);
}
```

### 查询交易通道配置（已弃用）

该接口已被标记为已弃用，可以用 GetUserConfig 接口替换。 详细信息请参见[查询客户配置信息](#查询客户配置信息)。 <br/>

调用查询交易通道配置请求：

```java
GetChannelConfigReq channelConfigReq = new GetChannelConfigReq();

int ret = getTradeApi().doTrade(channelConfigReq);
```
解析返回值：

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
### 查询客户配置信息

调用查询客户配置信息请求：

```java
GetUserConfigReq getUserConfigReq = new GetUserConfigReq();

int ret = getTradeApi().doTrade(getUserConfigReq);
```

解析返回值：

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
### 预授权交易扣款

调用预授权交易扣款请求：

```java
PreAuthTransDeductReq preAuthTransDeductReq = new PreAuthTransDeductReq(transId);

int ret = mTradeApi.doTrade(preAuthTransDeductReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

解析返回值：

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
### 预授权交易取消

调用预授权交易取消请求：

```java
PreAuthTransCancelReq preAuthTransCancelReq = new PreAuthTransCancelReq(transId);

int ret = mTradeApi.doTrade(preAuthTransCancelReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```
解析返回值：

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
### 预授权交易列表

调用预授权交易列表请求：

```java
int pageSize = 10;

int pageNum = 1;

PreAuthTransListReq preAuthTransListReq = new PreAuthTransListReq(pageSize, pageNum);

int ret = mTradeApi.doTrade(preAuthTransListReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```
解析返回值：

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransListResp transListResp =
            (PreAuthTransListResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    List<PreAuthTransactions> transactions = transListResp.getTransList();
}
```
### 预授权交易详情

调用预授权交易详情：

```java
String transId = "123123123123";

PreAuthTransDetailReq preAuthTransDetailReq = new PreAuthTransDetailReq(transId);

int ret = getTradeApi().doTrade(preAuthTransDetailReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```

解析返回值：

```java
@Override
public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {

    super.onActivityResult(requestCode, resultCode, data);

    PreAuthTransDetailResp transDetailResp =
            (PreAuthTransDetailResp) mTradeApi.parseResponse(requestCode, resultCode, data);

    PreAuthTransaction transaction = transDetailResp.getTrans();
}
```
### 卡退款

调用卡退款请求

```java
ITradeAPI mTradeApi = TradeApiFactory.createTradeApi(XXXActivity.this);

CardRefundReq cardRefundReq = new CardRefundReq(qfOrderId); // the order id from HaoJin

int ret = mTradeApi.doTrade(cardRefundReq);
```

解析返回值：

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

调用查询请求：

```java
GetCardTransListReq cardTransListReq = new GetCardTransListReq();

int ret = mTradeApi.doTrade(cardTransListReq);
```
解析返回值：

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

调用查询请求：

```java
GetCardTransReq getCardTransReq = new GetCardTransReq(orderId);

int ret = mTradeApi.doTrade(getCardTransReq);
```

解析返回值：
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

### 卡调整

调用卡调整请求：

```java
CardAdjustReq cardAdjustReq = new CardAdjustReq(orderId);

int ret = mTradeApi.doTrade(cardAdjustReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```
解析返回值：

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
### 卡清算

调用卡清算请求：

```java
CardSettleReq cardSettleReq = new CardSettleReq();

int ret = mTradeApi.doTrade(cardSettleReq);

if (ret != Config.ResponseCode.SUCCESS) {
}
```
解析返回值：

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