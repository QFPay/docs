import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 冲正/取消

:::warning
当无法确定交易状态时，例如未收到付款通知、响应超时、网络问题等，应将撤销作为最后的手段。首先应使用查询API端点检查交易状态。香港支付类型不支持交易取消。
:::

撤销 API 端点允许商家取消/撤销当前正在进行的交易。 已成功处理的交易（返回代码 0000 = 成功）无法再撤销或取消。 如果您想撤销已成功的交易，请参阅[退款端点]（退款）。

```plaintext

对于代码说明，请使用下面的选项卡选择 Python、Java、Node.js 或 PHP。

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
environment = 'https://test-openapi-hk.qfapi.com'
app_code = '3F504C39125E4886AB4741**********'
client_key = '5744993FBC034DBBB995FA**********'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)                                
random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))

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
    print(unsign_str)
    s = hashlib.md5(unsign_str).hexdigest()
    return s.upper()



# Body payload
txamt = '2500' #In USD,EUR,etc. Cent
out_trade_no = '4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ'
syssn = '20200305066100020000977812' 
txdtm = '2020-03-05 16:50:30' 
mchid = 'MNxMp11FV35qQN'
key = client_key

#data ={'txamt': txamt, 'out_trade_no': out_trade_no, 'syssn': syssn, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}
data ={'txamt': txamt, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}

r = requests.post(environment+"/trade/v1/reversal",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

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
        String appcode="3F504C39125E4886AB4741**********";
        String key="5744993FBC034DBBB995FA**********";
        String mchid="MNxMp11FV35qQN"; // Only Agents must provide the mchid

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());

        String txdtm="2020-03-05 16:50:30"; 
        String txamt="2500";
        String syssn="20200305066100020000977812"; //only syssn or out_trade_no must be provided
        String out_trade_no="4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ"; //only syssn or out_trade_no must be provided


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

         //如果是国内钱台，网址是：https://test-openapi-hk.qfpay.com.
        String url="https://test-openapi-hk.qfapi.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/reversal", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript

// Enter Client Credentials
environment = 'https://test-openapi-hk.qfapi.com'
app_code = '3F504C39125E4886AB4741**********'
client_key = '5744993FBC034DBBB995FA**********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'txamt': '2500', 
'out_trade_no': '4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ', //only syssn or out_trade_no must be provided
'syssn': '20200305066100020000977812', //only syssn or out_trade_no must be provided
'txdtm': '2020-03-05 16:50:30',
'mchid': 'MNxMp11FV35qQN'
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
  uri: environment+"/trade/v1/reversal",
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
$api_type = '/trade/v1/reversal';
$syssn = '800101';
//$out_trade_no = 'zCvo0IqTg0SaQkGnHd6w';
//$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
$app_code = 'FF2FF74F2F2E42769A4A73E********'; //API credentials are provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B5********'; //API credentials are provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get the current date-time   

$fields_string = '';
$fields = array(
    //'mchid' => urlencode($mchid),
    'syssn' => urlencode($syssn),
    //'out_trade_no' => urlencode($out_trade_no),
    'txcurrcd' => urlencode('HKD'),
    'txamt' => urlencode(2200),
    'txdtm' => date('2020-03-05 16:50:30'),
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

> 上面的命令返回 JSON 结构如下：

```json

{
    "surcharge_fee": "0", 
    "resperr": "success", 
    "txdtm": "2020-03-05 16:50:30", 
    "syssn": "20200305066100020000977814", 
    "sysdtm": "2020-03-05 16:54:38", 
    "txcurrcd": "EUR", 
    "respmsg": "", 
    "chnlsn2": "", 
    "cardcd": "", 
    "udid": "qiantai2", 
    "txamt": "2500", 
    "orig_syssn": "20200305066100020000977813", 
    "surcharge_rate": "0", 
    "respcd": "0000", 
    "chnlsn": ""
}
```


### HTTP请求 - 支付宝 CPM & MPM
`GET ..trade/v1/reversal`

### HTTP請求 - 微信支付 CPM
`GET ..trade/v1/reversal`

### HTTP请求 - 微信支付 MPM
`GET ..trade/v1/close`

### HTTP请求 - 其他符合条件的电子钱包*
`GET ..trade/v1/close`

*如果您想在支付宝和微信支付以外的钱包上使用该API，请联系我们获取说明。

### 请求参数

参数名称 | 是否必填 | 参数类型 | 描述
--------- | ------- | --------- | ------- 
`mchid` | No | String(16) | QFPay提供的商户标识符
`syssn` | Yes* | String(40) | 付款完成后系统返回的 QFPay 交易编号
`out_trade_no` | Yes* | String(128) | 外部交易编号
`txamt` | Yes | Int(11) | 交易金额。单位为分（即 100 = 1 元）
`txdtm` | Yes | String(20) | 交易时间格式： YYYY-MM-DD hh:mm:ss
`udid` | No | String(40) | 唯一的交易设备 ID。显示在商家管理平台上。

*Either the `syssn` or `out_trade_no` must be provided.


### 响应参数

参数名称 | 参数类型 | 描述  
--------- | --------- | ------- 
`orig_syssn` | String(40) | 指原始 QFPay 交易编号
`syssn` | String(40) | 取消/撤销的 QFPay 交易编号
`out_trade_no` | String(128) | 外部交易编号
`txamt` | Int(11) | 交易金额。单位为分（即 100 = 1 元）
`txcurrcd` | String(3) | 交易货币。查看 [支付币种](../preparation/paycode#支付币种) 表，了解可用货币的完整列表。
`txdtm` | String(20) | 交易时间格式： YYYY-MM-DD hh:mm:ss
`sysdtm` | String(20) | 系统交易时间。 格式：YYYY-MM-DD hh:mm:ss <br/> 该参数值作为清算截止时间。
`chnlsn` | String | 支付通道交易编号（钱包方）
`respcd` | String(4) | 响应代码 <br/> 0000 = 冲正/取消成功 <br/> 1143/1145 = 冲正/取消正在进行中 <br/> 其他 = 冲正/取消失败
`resperr` | String(128) | 结果说明
`respmsg` | String(128) | 信息说明
