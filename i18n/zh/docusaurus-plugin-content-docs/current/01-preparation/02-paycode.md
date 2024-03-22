import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 支付接口

:::warning
验证您的接口证书支持当前选中的`pay_type`.
:::

### 支付类型表

编码 | 描述
--------- | -------
800008 | 微信、支付宝﹑银联云閃付反扫支付
800101 | 支付宝跨境線下扫码支付
800108 | 支付宝跨境反扫支付
801101 | 支付宝線上扫码支付 (海外商戶) **
801107 | 支付宝線上WAP支付 (海外商戶)
801110 | 支付宝In-App支付 (海外商戶)
800107 | 支付宝服务窗H5跨境支付
801501 | 支付宝線上扫码支付 (香港商戶)
801510 | 支付宝In-App支付 (香港商戶)
801512 | 支付宝線上WAP支付 (香港商戶)
801514 | 支付宝線上WEB支付 (香港商戶)
800201 | 微信扫码支付
800208 | 微信反扫支付
800207 | 微信JSAPI支付 (微信公众號支付)
800212 | 微信移动端浏览器H5跨境支付
800210 | 微信 In-App 支付
800213 | 微信小程序支付
801008 | 微信香港反扫支付 (適用於向微信香港申請的商戶)
801010 | 微信香港In-App支付 (適用於向微信香港申請的商戶)
805801 | PayMe 扫码支付
805808 | PayMe 反扫支付
805814 | PayMe 線上WEB支付 (香港商戶)
805812 | PayMe 線上WAP支付 (香港商戶)
800701 | 银联云闪付扫码支付
800708 | 银联云闪付反扫支付
800712 | 银联云闪付WAP支付 (香港商戶)
800714 | 银联云闪付 PC-Web Payment (香港商户)
802001 | 香港轉數快扫码支付***
803701 | 八达通动态二维码支付(香港商户)
802801 | Visa / Mastercard 卡线上支付
802808 | Visa / Mastercard 卡线下刷卡支付
806527 | ApplePay 线上支付
806708 | 银联卡线下刷卡支付
806808 | American Express 卡线下刷卡支付

:::warning
    注意
:::

:::note
  **(\*)**

  1. 与公共支付的参数不同的是, `return_url` 是一个必须的请求变量.
  2. 在响应中的`web_url` 参数包含了支付链接.

  **(\*\*)**
  1. 交易金额必须大于 1 MYR.

  **(\*\*\*)**
  1. 该支付方式不支持退款.

  **(\*\*\*\*)**
  1. 对于支付请求和响应请参考[此](../online-shop/alipay/alipay-online-payments#alipay-online-payments)部分内容.
:::

## 货币种类

以下列出的货币是目前我们的支付网络支持的货币种类.请联系 **technical.support@qfpay.com** 来验证您的接口证书和选中的`pay_type`是否支持您期望的货币. 

编码 | 描述
--------- | -------
AED | Arab Emirates Dirham
CNY | Chinese Yuan
EUR | Euro
HKD | Hong Kong Dollar
IDR | Indonesian Rupiah
JPY | Japanese Yen
MMK | Myanmar Kyat
MYR | Malaysian Ringgit
SGD | Singapore Dollar
THB | Thai Baht
USD | United States Dollar
CAD | Canadian Dollar
AUD | Australian Dollar

## 支付接口端点

:::warning
请谨记立即将在测试环境进行的交易退款
:::

如果您想要在Postman快速测试支付功能,我们提供了一套可生成签名的预请求脚本,请从此处下载文件: [Postman中的支付请求](@site/static/files/qfpay_openapi_payment_request.postman_collection.json)

```plaintext
请求头部:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

请求正文:

{
  mchid=ZaMVg*****&out_trade_no=01234567890123&pay_type=800101&txamt=10&txcurrcd=EUR&txdtm=2019-12-25 14:21:28
}

```

<Tabs>
<TabItem value="python" label="Python">

```python
#coding=utf8
import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib
import requests
import datetime
import string

# Enter Client Credentials
environment = 'https://openapi-test.qfpay.com'
app_code = 'D5589D2A1F2E42A9A60C37*********'
client_key = '0E32A59A8B454940A2FF39**********'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)                                

print(current_time)

# Create signature
def make_req_sign(data, key):
    keys = list(data.keys())
    keys.sort()
    p = []
    for k in keys: 
        v = data[k]
        p.append('%s=%s'%(k,v))
    unsign_str = ('&'.join(p) + key).encode("utf-8")
    s = hashlib.md5(unsign_str).hexdigest()
    return s.upper()


# Body payload
txamt = '10' #In USD,EUR,etc. Cent
txcurrcd = 'EUR'
pay_type = '800101' # 支付宝 CPM = 800108 , MPM = 800101
auth_code='283854702356157409' #CPM only
out_trade_no = '01234567890123'
txdtm = current_time
goods_name = 'test1'   
auth_code = '280438849930815813'
mchid = 'ZaMVg*****'
notify_url = 'https://xxx.com/notify/success'
key = client_key


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid, 'notify_url': notify_url}
data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}

r = requests.post(environment+"/trade/v1/payment",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TestMain {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37*********";
        String key="0E32A59A8B454940A2FF39*********";
        String mchid="ZaMVg*****";

        String pay_type="800101";
        String out_trade_no= "01234567890123";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txamt="10";
        String txcurrcd="EUR";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("pay_type", pay_type);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);
        unsortMap.put("txamt", txamt);
        unsortMap.put("txcurrcd", txcurrcd);
        //unsortMap.put("product_name", product_name);
        //unsortMap.put("valid_time", "300");

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

        String url="https://openapi-test.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37*********'
const client_key = '0E32A59A8B454940A2FF39*********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'txamt': '10', // In USD,EUR,etc. Cent
'txcurrcd': 'EUR',
'pay_type': '800101', // 支付宝 CPM = 800108 , MPM = 800101
'out_trade_no': tradenumber,
'txdtm': dateTime,
'mchid': 'ZaMVg*****'
};

// Signature Generation
const ordered = {};
Object.keys(payload).sort().forEach(function(key) {
ordered[key] = payload[key] });
console.log(ordered)

var str = [];
for (var p in ordered)
if (ordered.hasOwnProperty(p)) {
str.push((p) + "=" + (ordered[p]));
}
var string = str.join("&")+client_key;
console.log(string)

const crypto = require('crypto')
var hashed = crypto.createHash('md5').update(string).digest('hex')
console.log(hashed)


// API Request
var request = require("request");
request({
uri: environment+"/trade/v1/payment",
headers: {
    'X-QF-APPCODE': app_code,
    'X-QF-SIGN': hashed
},
method: "POST",
form: payload,
}, 
function(error, response, body) {
console.log(body);
});
```

</TabItem>
<TabItem value="php" label="Php">

```php
<?php
ob_start();
function GetRandStr($length){
    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $len=strlen($str)-1;
    $randstr='';
    for($i=0;$i<$length;$i++){
        $num=mt_rand(0,$len);
        $randstr .= $str[$num];
    }
    return $randstr;
}

$url = 'https://test-openapi-eur.qfapi.com';
$api_type = '/trade/v1/payment';
$pay_type = '800101';
//$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get current date-time

$fields_string = '';
$fields = array(
    //'mchid' => urlencode($mchid),
'pay_type' => urlencode($pay_type),
    'out_trade_no' => urlencode(GetRandStr(20)),
'txcurrcd' => urlencode('EUR'),
    'txamt' => urlencode(2200),
    'txdtm' => $now_time
);
ksort($fields); //Ascending dictionary sorting A-Z
print_r($fields);
    
foreach($fields as $key=>$value) { 
    $fields_string .= $key.'='.$value.'&' ;
}
$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);

$sign = strtoupper(md5($fields_string . $app_key));

//// Header ////
$header = array();
$header[] = 'X-QF-APPCODE: ' . $app_code;
$header[] = 'X-QF-SIGN: ' . $sign;

//Post Data
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url . $api_type);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
$output = curl_exec($ch);
curl_close($ch);    

$final_data = json_decode($output, true);
print_r($final_data);

ob_end_flush();
?>
```

</TabItem>
</Tabs>

> The above command returns JSON structured like this:

```json
{
    "txdtm": "2019-12-25 14:21:28",
    "qrcode": "https://qr.alipay.com/bax01781r3pu4fjaqazt4091",
    "pay_type": "800101",
    "resperr": "success",
    "out_trade_no": "01234567890123",
    "syssn": "20191225000200020060996533",
    "sysdtm": "2019-12-25 14:22:37",
    "paydtm": "2019-12-25 14:22:37",
    "txcurrcd": "EUR",
    "respmsg": "",
    "cardcd": "",
    "udid": "qiantai2",
    "txamt": "10",
    "respcd": "0000",
    "chnlsn": ""
}
```

### HTTP 请求

`POST ../trade/v1/payment`

Listed below are the most common parameters for the payment endpoint. Please refer to the payment scenario applicable to you for additional parameters.

### 公共请求参数列表

参数名称 | 参数编码 | 是否必填 | 参数类型 | 描述
--------- | -------- | --------- | ------- | ------- 
订单支付金额 | `txamt` | 是 | Int(11) | 以当前货币最小计量单位计算，只允许整数类型 (i.e. 100 = $1)
币种 | `txcurrcd` | 是 | String(3) | 交易币种, 请查看[币种](#currencies)表以获取完整的可选用的币种
支付类型 | `pay_type` | 是 | String(6) | 请查看[支付类型](#payment-codes)表以获取完整的可选用的支付类型
外部订单号 | `out_trade_no` | 是 | String(128)| 开发者自定义订单号，在同一商户账户中的每笔交易和退款请求该参数值唯一
请求交易时间 | `txdtm` | 是 | String(20) | 格式：yyyy-MM-dd HH:mm:ss
Authorization Code | `auth_code` | 是<br/> (CPM only) | String(128) | Specifies the authorization code for scanning a barcode/QR Code. The `auth_code` returned is unique in each authorization. Each `auth_code` can be used only once and will automatically expire in one day. For testing CPM with 支付宝 and WeChat Pay the `auth_code` can be extracted with any QRC reader or manually found in the consumer wallet below the barcode.
交易到期时间 | `expired_time` | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.<br/> Available for: <br/>800201 - WeChat scan code<br/>800101 - 支付宝 scan code <br/>801512 - 支付宝 Hong Kong WAP payment<br/>801501 - 支付宝 Hong Kong scan code<br/>801107 - 支付宝 overseas WAP payment<br/>801101 - 支付宝 overseas scan code<br/>801010 - WeChat Hong Kong APP<br/>801510 - 支付宝 Hong Kong APP
商品名称标识 | `goods_name` | 否| String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
子商户号 | `mchid` | 否| String(16) | 标识子商户身份，由钱方分配（渠道系统后台查看对应商户(非业务员)子商户号，被视为对应商户的交易）
时区 | `txzone` | 否| String(5) | 用于记录本地下单时间，默认为北京时间+0800
设备唯一id | `udid` | 否| String(40) |  Unique transaction device ID. Is displayed on the merchant portal. 
异步通知地址 | `notify_url` | 否| String(256) |异步通知地址

### 公共响应参数列表

参数名称 | 参数编码 | 参数类型 | 描述
--------- | -------- | --------- | -------
支付类型 | `pay_type` | String(6) | 请参阅 [Payment Codes](#payment-codes) 获取完整的支付类型 
系统交易时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 这个参数值被用作结算截止时间| 
请求交易时间 | `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  |
信息描述 | `resperr` | String(128) | 
订单支付金额 | `txamt` | Int(11) |
调试信息 | `respmsg` | String(128) |  
外部订单号 | `out_trade_no` | String(128) | 外部订单号  
钱方订单号 | `syssn` | String(40) | 
钱包/渠道交易码| `chnlsn` | String | 
返回码 | `respcd` | String(4) | 0000 = 请求成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [Transaction Status Codes](#transaction-status-codes) 获得完整返回类型列表

## 支付状态码

| 返回码 | 描述                                              |
| ---------- | ------------------------------------------------------------ |
| 0000       | 交易成功；success   |
| 1100       | 系统维护中 (1100)    |
| 1101       | Reversal 错误 (1101)     |
| 1102       | 重复请求 (1102)  |
| 1103       | 请求格式错误 (1103)  |
| 1104       | 请求参数错误 (1104)  | 
| 1105       | 设备未激活 (1105)  |
| 1106       | 无效设备 (1106)  |
| 1107       | 设备无权限 (1107)  |
| 1108       | 签名错误 (1108)    |
| 1125       | 交易已退款 (1125)    |
| 1136       | 交易不存在或无法处理 (1136)    |
| 1142       | 订单已关闭 (1142)    |
| 1143       | 订单还未支付，或者正在输入密码中 (1143)   |
| 1145       | 处理中，请稍等 (1145)    |
| 1147       | 微信支付交易错误 (1147)    |
| 1150       | 您的结算方式为T0，不支持撤销交易 (1150)    |
| 1155       | 退款请求被拒绝 (1155)    |
| 1181       | 订单过期 (1181)    |
| 1201       | 余额不足，请更换支付方式支付 (1201)   |
| 1202       | 付款码错误或过期，请出示正确的付款码或刷新付款码后重新支付 (1202)   |
| 1203       | 账户错误，请确认支付账户可用 (1203)  |
| 1204       | 银行错误，请确认支付账户可用 (1204)  |
| 1205       | 交易失败，请稍后重试 (1205)  |
| 1212       | 请消费者使用银联境外码付款 (1212)  |
| 1241       | 店铺不存在或状态不正确，请勿进行支付 (1241)  |
| 1242       | 该店铺配置有些问题，无法进行交易 (1242)  |
| 1243       | 该店铺被禁用，请勿进行支付，联系店主确认 (1243)  |
| 1250       | 该交易禁止进行，如有疑问请联系钱方客服 (1250) |
| 1251       | 该店铺配置有些问题，我们正在加紧解决中 (1251)  |
| 1252       | 进行交易请求时出现系统错误 (1252)  |
| 1254       | 系统出了点小差，我们正在加紧解决中 (1254)  |
| 1260       | 该订单已支付，请确认交易结果后再操作 (1260) |
| 1261       | 该订单未支付，请确认交易结果后再操作 (1261)  |
| 1262       | 该订单已退款，请确认订单状态再操作 (1262)  |
| 1263       | 该订单已撤销，请确认订单状态再操作 (1263) |
| 1264       | 该订单已关闭，请确认订单状态再操作 (1264)  |
| 1265       | 该笔订单被禁止退款，23:30-00:30的交易以及部分特殊交易会被禁止 (1265)  |
| 1266       | 该订单金额错误，请确认后再操作( (1266)  |
| 1267       | 该订单信息不匹配，请确认后再操作 (1267) |
| 1268       | 该订单不存在，请确认后再操作 (1268) |
| 1269       | 当日未结算金额不足，无法操作，请确认余额充足 (1269) |
| 1270       | 该币种不支持部分退款 (1270) |
| 1271       | 该交易不支持部分退款 (1271) |
| 1272       | 该退款金额大于原交易可退款的最大金额 (1272) |
| 1294       | 该笔交易可能存在风险，已被银行禁止交易 (1294) |
| 1295       | 网络有些拥堵，我们正在加速解决中 (1295) |
| 1296       | 网络有些拥堵，请稍后再试或使用其他支付方式( (1296) |
| 1297       | 银行系统繁忙，请稍后再试或使用其他支付方式 (1297) |
| 1298       | 网络有些拥堵，切勿重复支付，如已支付请稍后确认结果 (1298) |
| 2005       | 消费者付款码错误或已过期请刷新后重新支付 (2005) |
| 2011       | 交易流水号重复 (2011) |
