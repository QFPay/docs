import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# PayMe Offline Payment

```plaintext
要获取代码说明，请在上方的标签中选择Python、Java、Node.js或PHP。
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
environment = 'https://test-openapi-hk.qfapi.com'
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
txamt = '200' # In cents
txcurrcd = 'HKD'
pay_type = '805801' # PayMe Offline Payment = 805801
out_trade_no = '16565588217444950016'
txdtm = current_time
goods_name = 'qfpay_payme'
return_url = 'http://www.qfpay.com'
txzone = '+0800'
udid = 'my_udid'

key = client_key

data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'return_url': return_url, 'txzone': txzone}

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


        String pay_type="805801";
        String out_trade_no= "165655882174";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txzone="+0800";
        String txamt="200";
        String txcurrcd="HKD";
        String usid="myudid";
        String return_url="http://www.qfpay.com";
        String goods_name="qfpay_payme";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("udid", udid);
        unsortMap.put("pay_type", pay_type);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);
        unsortMap.put("txzone", txzone);
        unsortMap.put("txamt", txamt);
        unsortMap.put("txcurrcd", txcurrcd);
        unsortMap.put("return_url", return_url);
        unsortMap.put("goods_name", goods_name);

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

        String url="https://test-openapi-hk.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Enter Client Credentials
const environment = 'https://test-openapi-hk.qfapi.com'
const app_code = 'D5589D2A1F2E42A9A60C37*********'
const client_key = '0E32A59A8B454940A2FF39*********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key

var payload = {
'txamt' : '200' # In cents
'txcurrcd' : 'HKD'
'pay_type' : '805801' # PayMe Offline Payment = 805801
'out_trade_no' : '16565588217444950016'
'txdtm' = dateTime
'goods_name' : 'qfpay_payme'   
'return_url' : 'http://www.qfpay.com'
'txzone' : '+0800'
'udid' : 'my_udid'
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

$url = 'https://test-openapi-hk.qfapi.com';
$api_type = '/trade/v1/payment';
$pay_type = '805801'; //PayMe Offline Payment = 805801
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get current date-time

$fields_string = '';
$fields = array(
    'pay_type' => urlencode($pay_type),
    'out_trade_no' => urlencode(16565588217444950016),
    'txcurrcd' => urlencode('HKD'),
    'txamt' => urlencode(200),
    'txzone' => urlencode('+0800'),
    'txdtm' => $now_time,
    'goods_name' => urlencode('qfpay_payme'),
    'return_url' => urlencode('http://www.qfpay.com'),
    'udid' => urlencode($myudid),
);
ksort($fields); //字典排序A-Z升序方式
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

> 上述命令返回的JSON结构如下所示：

```json
{
  "pay_type" : "805801",
  "sysdtm" : "2022-06-30 11:14:29",
  "paydtm" : "2022-06-30 11:14:29",
  "resperr" : "交易成功",
  "txcurrcd" : "HKD",
  "txdtm" : "2022-06-30 11:13:41",
  "txamt" : "200",
  "payme_logo" : "https://shopfront.paymebiz.hsbc.com.hk/onboarding/dfbd33ed8dd4282ccb0f0db0e9301a9a04ab29db0b7e2b7597bff9fd7382776d/businessLogo_300x300.png",
  "respmsg" : "PR001:Request for Payment Initiated",
  "out_trade_no" : "16565588217444950016",
  "syssn" : "20220630154100020012764799",
  "respcd" : "0000",
  "qrcode" : "https://qr.payme.hsbc.com.hk/2/CmJBJZAXRgCh8GmBXJKuXG",
  "udid" : "my_udid",
  "pay_url" : "",
  "chnlsn" : "5f43d654-d309-4560-8585-fb78f8dc694b",
  "cardcd" : ""
}
```

### 线下支付
正扫支付模式下, 商家将会根据Payme协议生成一个动态QR码并展示给顾客。顾客只需打开PayMe钱包，扫描显示的QR码即能完成支付。

反扫支付模式下，顾客在其QR码钱包中生成一个动态QR码，并展示给收银员进行扫描。

如果返回响应代码为 `1143`或`1145`，表示交易正在处理中或需要顾客输入钱包密码。

商家需要通过查询交易结果来进行最终的交易状态评估。

### HTTP 请求

**请求方法**：`POST` 

**请求位址**: `../trade/v1/payment`

**支付类型**
- `805801`： PayMe正掃模式（商家店内出示二维码支付）（香港商户）
- `805808`： PayMe反掃模式（顧客出示二维码支付）（香港商户）

### 请求参数

参数名称 | 参数代号 | 必填 | 类别 | 描述
--------- | -------- | --------- | ------- | ------- 
支付金额 | `txamt` | 是 | Int(11) | 交易金额，单位为分（例如100表示1元）
支付币种 | `txcurrcd` | 是 | String(3) | 交易货币类型。请参考[交易币种](/docs/preparation/paycode#currencies)表格获取可用货币的完整列表
支付类型 | `pay_type` | 是 | String(6) | PayMe网页支付 = 805801
API订单号| `out_trade_no` | 是 | String(128)| 唯一商户订单号，用于每个支付和退款请求。
交易请求时间 | `txdtm` | 是 | String(20) | 交易时间格式：<br/> YYYY-MM-DD hh:mm:ss
订单过期时间 | `expired_time` | 否<br/> (只限正扫模式) | String(3)  | 二维码过期时间，以分钟为单位。默认过期时间为30分钟。该参数可以调整，最短为5分钟，最长为120分钟。
商品名称标识 | `goods_name` | 否 | String(64) | 商品名称/标识：不能超过20个字母数字字符或包含特殊字符。对于应用支付，该参数不能为空。如果使用中文字符，需要进行`UTF-8`编码。
QFPay商户号 | `mchid` | 否 | String(16) | 只适用于某些渠道下的特定商户。该商户被提供了MCHID，则在API请求中必须提供MCHID。反之则无需提供。
时区 | `txzone` | 否 | String(5) | 交易时区：记录交易的本地失去，北京时间为默认时区（UTC+8，+0800）。
设备ID | `udid` | 否 | String(40) |  唯一的交易设备ID，在商家门户上显示。
重定向URL | `return_url` | 否 | String(512) |  支付完成后用户将被重定向到的URL。

### 回应参数

参数名称 | 参数代码 | 类型 | 描述 |  
--------- | -------- | --------- | --------- |  
支付类型 | `pay_type` | String(6) | PayMe网页/手机支付 |
系统交易时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 此参数值用作结算的截止时间。 | 
交易请求时间 | `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  | 
响应消息 | `resperr` | String(128) |  
支付金额 | `txamt` | Int(11) |  
其他消息信息 | `respmsg` | String(128) |  
外部交易号 | `out_trade_no` | String(128) | 商户订单号 
QFPay交易号 | `syssn` | String(40) | QFPay 唯一订单号
返回码 | `respcd` | String(4) | `0000` = 请求成功。<br/> `1143`/`1145` = 商家需要继续查询交易结果。<br/> 其他返回码表示交易失败。请参考页面[交易状态码](/docs/preparation/paycode#transaction-status-codes) 以获取完整的返回码列表
支付位址 | `pay_url` | String(512) | 在桌面网页中生成二维码；在手机网页中作为重定向URL。