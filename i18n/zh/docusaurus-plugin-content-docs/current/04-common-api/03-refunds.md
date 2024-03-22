import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 退款

:::tip
只有返回码为0000(交易成功)的交易可以被退款
:::

## 退款API端点

```plaintext
请求头部:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

请求正文:

{
  txamt=10&syssn=20191227000200020061752831&out_trade_no=12345678&txdtm=2019-12-27 10:39:39&key=0E32A59A8B454940A2FF39**********&mchid=ZaMVg*****
}

```

<Tabs>
<TabItem value="python" label="Python">

```python
import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib
import requests
from hashids import Hashids
import datetime
import string
import random

# Enter Client Credentials
environment = 'https://openapi-test.qfpay.com'
app_code = 'D5589D2A1F2E42A9A60C37**********'
client_key = '0E32A59A8B454940A2FF39**********'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)         
random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))                       
  

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
txamt = '10' #Partial or full refund amount
syssn = '20191227000200020061752831' #Original transaction number
out_trade_no = random_string
txdtm = current_time 
key = client_key
mchid = 'ZaMVg*****'


#data ={'txamt': txamt, 'syssn': syssn, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}
data ={'mchid': mchid, 'txamt': txamt, 'syssn': syssn,  'out_trade_no': out_trade_no, 'txdtm': txdtm}

r = requests.post(environment+"/trade/v1/refund",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class Refund {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37**********";
        String key="0E32A59A8B454940A2FF39**********";
        String mchid="ZaMVg*****"; // Only Agents must provide the mchid

        String out_trade_no= "22333444455555";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txamt="15";
        String syssn="20191227000300020061662295";
         //如果是国内钱台，产品名称对应的字段是goods_name，不是product_name.
         //String product_name="Test Name";


        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("txamt", txamt);
        unsortMap.put("syssn", syssn);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

         //如果是国内钱台，网址是：https://openapi-test.qfpay.com.
        String url="https://openapi-test.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/refund", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37**********'
const client_key = '0E32A59A8B454940A2FF3***********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'syssn': '20191231000300020063521806',
'txamt': '10',
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
  uri: environment+"/trade/v1/refund",
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
     $api_type = '/trade/v1/refund';
     $syssn = '20200311066100020000977840';
     //$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
     $now_time = date("Y-m-d H:i:s"); //Get the currend date-time  
     
     $fields_string = '';
     $fields = array(
	  //'mchid' => urlencode($mchid),
    'syssn' => urlencode($syssn),
	  'out_trade_no' => urlencode(GetRandStr(20)),
	  'txamt' => urlencode(2200),
	  'txdtm' => $now_time
    );
    ksort($fields); //Sort parameters in ascending order from A to Z
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
"orig_syssn": "20191227000200020061752831", 
"sysdtm": "2019-12-27 11:11:23", 
"paydtm": "2019-12-27 11:11:26", 
"txdtm": "2019-12-27 11:10:38", 
"udid": "qiantai2", 
"txcurrcd": "EUR", 
"txamt": "10", 
"resperr": "success", 
"respmsg": "", 
"out_trade_no": "RGNOEIVU9JZLNP9GGYXWXCW7OEMI720F", 
"syssn": "20191227000300020061652643", 
"respcd": "0000", 
"chnlsn": "2019122722001411461404119764", 
"cardcd": ""
}
```

### HTTP请求

`POST ../trade/v1/refund`

商户可以使用退款接口对交易进行退款。商户账户必须在同一交易日有足够的交易金额才能进行交易退款, 单笔交易的最高退款金额不得超过原始付款金额。除非另有说明，退款请求一旦提交并被接受，就不可撤销。不同支付渠道的退款限量和最长退款期限有所不同, 请联系您的钱方支援代表以获取更多信息。

### 请求参数

|参数名称|参数编码|是否必填|参数类型|描述|
|----    |---|----- |-----   |-----   |
|钱方订单流水号 | ` syssn ` |是 |String(128)  | 计划退款的原订单的 `syssn`|
|退款外部订单号 | ` out_trade_no `  |是 |String(128)  | 外部退款订单号/商户平台退款订单号: 这个参数对于系统中同一商户账户下的每次支付和退款请求必须是唯一的|
|退款金额 | ` txamt `   |是 |Int(11)  | 退款金额, 以分为单位 (i.e. 100 = $1) <br/> 部分退款和全部退款都需要, 有部分支付通道不支持部分退款|
|请求交易时间 | ` txdtm `   |是 |String(20) |格式: YYYY-MM-DD hh:mm:ss|
|子商户号 | ` mchid `  |否 |String(16)  | 商户会或不会被提供 `mchid`.  如果已经被提供 `mchid` , 除特殊情况下在呼叫接口时必须提交 `mchid`. 与之相反的是, 如果并未被提供 `mchid`, 商户无需在接口请求中传递参数 `mchid`. |
|交易时区 | ` txzone `   |否 |String(5)  | 用于记录本地下单时间，默认为北京时间+0800|
|设备唯一id | ` udid `    |否 |String(40)  | 唯一的交易设备ID|

### 响应参数

|参数名称|参数编码|参数类型|描述|
|-----    |----|------ |-----   |
|退款交易唯一流水号 | `syssn`  |String(40)   | 新创建的退款交易的ID|
|原订交易流水号| `orig_syssn`  |String(128)   | 被用于退款的原交易的交易ID|
|订单金额| `txamt`   |Int(11)  | 退款金额, 以分为单位 (i.e. 100 = $1)|
|请求方交易时间 | `sysdtm`  | String(20)  |格式: YYYY-MM-DD hh:mm:ss <br/>这个值被用作结算截止时间|
|返回编码| `respcd` |  String(4)|  0000-请求成功.<br/>1143/1145 - 商户需要持续查询退款交易状态. <br/>所有其他的返回编码都是失败值. 请根据 [支付状态码](../preparation/paycode#支付状态码) 获取完整的信息.|
|响应信息| `resperr` |  String(128)| 响应的信息|
|净支付值 |`cash_fee`  | String | 用户实际付款金额 = 交易金额 - 优惠 |
| 支付货币 |`cash_fee_type` | String | 实际支付货币 e.g. CNY |
| 净退款值 | `cash_refund_fee` | String | 实际退款值 |
| 退款货币 | `cash_refund_fee_type` | String | 实际退款货币 e.g. CNY |
