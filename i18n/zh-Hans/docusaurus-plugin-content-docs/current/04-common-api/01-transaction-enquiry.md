import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 交易查询

:::warning
 如果已经被提供 `mchid` , 除特殊情况下在呼叫API时必须提交 `mchid`. 与之相反的是, 如果并未被提供 `mchid`, 商户无需在API请求中传递参数 `mchid`.
:::

## 交易查询API端点

### HTTP请求

`POST ../trade/v1/query`

```plaintext
请求头部:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

请求本体:

{
  mchid=ZaMVg*****&syssn=20191227000200020061752831&start_time=2019-12-27 00:00:00&end_time=2019-12-27 23:59:59
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
environment = 'https://test-openapi-hk.qfapi.com'
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
mchid = 'ZaMVg*****' #(Agent ID, Merchant ID)
syssn = '20191227000200020061752831' #Search by transaction number only
out_trade_no = '2019122722001411461404119764' #Search by out_trade_no only
start_time = '2019-12-27 00:00:00'
end_time = '2019-12-27 23:59:59'
key = client_key


#data ={'mchid': mchid, 'syssn': syssn, 'out_trade_no': out_trade_no, 'start_time': start_time, 'end_time': end_time}
data ={'mchid': mchid, 'syssn': syssn}

r = requests.post(environment+"/trade/v1/query",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(make_req_sign(data, key))  
print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class Enquiry {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37**********";
        String key="0E32A59A8B454940A2FF39*********";
        String mchid="ZaMVg*****"; // Only Agents must provide the mchid

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;

        String syssn="20191227000300020061662295";
        String start_time = "2019-12-27 00:00:00";
        String end_time = "2019-12-27 23:59:59";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("syssn", syssn);

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

        String url="https://test-openapi-hk.qfapi.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/query", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://test-openapi-hk.qfapi.com'
const app_code = 'D5589D2A1F2E42A9A60C37**********'
const client_key = '0E32A59A8B454940A2FF39**********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'syssn': '20191231000300020063521806',
'start_time': '2019-12-27 00:00:00',
'end_time': '2019-12-31 23:59:59',
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
  uri: environment+"/trade/v1/query",
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
$api_type = '/trade/v1/query';
$syssn = '20200311066100020000977841';
//$out_trade_no = 'zCvo0IqTg0SaQkGnHd6w';
//$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get the current date-time  

$fields_string = '';
$fields = array(
//'mchid' => urlencode($mchid),
'syssn' => urlencode($syssn),
//'out_trade_no' => urlencode($out_trade_no),
//'start_time' = '2020-03-01 00:00:00',
//'end_time' = '2020-03-04 23:59:59'
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
"respmsg": "", 
"resperr": "请求成功", 
"respcd": 0000, 
"data": 
[{
"cardtp": "5", 
"cancel": "0", 
"pay_type": "800101", 
"order_type": "payment", 
"clisn": "038424", 
"txdtm": "2019-12-27 10:39:39", 
"goods_detail": "", 
"out_trade_no": "CHZ7D61JN1ANJF2R2K1I7TXP2JTCEWBL", 
"syssn": "20191227000200020061752831", 
"sysdtm": "2019-12-27 10:40:24", 
"paydtm": "2019-12-27 10:42:18", 
"goods_name": "", 
"txcurrcd": "EUR", 
"chnlsn2": "", 
"udid": "qiantai2", 
"userid": "2605489", 
"txamt": "10", 
"chnlsn": "2019122722001411461404119764", 
"respcd": "0000", 
"goods_info": "", 
"errmsg": "success"
}], 
"page": "1", 
"page_size": "10"
}
```

发起交易后，需要调用查询接口，获取订单的状态,直到QFPay 返回具体的状态信息为止，根据订单的状态进行相应的处理。

​默认不支持隔月订单查询，若查询隔月订单，需传入`start_time`、`end_time`（时间区间包含`sysdtm`时间，且区间不能跨月）参数，建议以`syssn`为条件进行查询。此外，如果交易接口没有返回`syssn`，使用`out_trade_no`为条件进行查询。

如果查询的交易是退款,那会返回额外的参数 `origssn`. `origssn` 代表着退款交易的原本订单号.

### 请求参数

|参数名称| 参数编码|是否必须|参数类型|描述|
|----    |---|----- |-----   |-----   |
|子商户 | ` mchid ` | For Agents |String(16) | 标识子商户身份，由QFPay 统一分配；支付时若`mchid`非空则查询订单时必传.|
|QFPay 订单号| ` syssn ` |No |String(128) |多个以英文逗号区分开 |
|外部订单号| ` out_trade_no ` |No |String(128) | 外部订单号/商户平台订单号, 多个订单号由逗号分隔  |
|支付类型 | ` pay_type ` |No |String(6) | 多个项目由逗号分隔 |
|交易返回码| ` respcd ` |No |String(4) | 默认返回所有返回码状态的订单  |
|开始时间| ` start_time ` |No |String(20) | 当 `syssn` 存在时不需要提供, 默认本月开始日期. 跨月份查询必须提供 `start_time` 和 `end_time`. <br/> 格式：yyyy-MM-dd HH:mm:ss. |
|结束时间	| ` end_time ` |No | String(20) | 当 `syssn` 存在时不需要提供, 默认本月结束日期.跨月份查询必须提供 `start_time` 和 `end_time`. <br/> 格式：yyyy-MM-dd HH:mm:ss.  |
|页数| ` page `   |No |  Int(8) | 默认为1   |
|每页显示数量| ` page_size ` |No |  Int(8) | 默认显示10笔订单,最大值100，如果超过100，则只显示100条 |

### 响应参数

|参数名称|参数编码|参数类型|描述|
|----    |------|------  |------   |
| 页数| `page`  | Int(8)  |  |
| 请求结果描述| `resperr` | String(128) ||
| 每页显示数量| `page_size` | Int(8)  |  |
| 请求结果返回码 | `respcd`   | String(4)  |0000 - 接口呼叫成功  |
| 查询结果 | `data` | Object | JSON 格式 |
| QFPay 订单号 |  `syssn`  |String(40) |  |
| API 订单号| `out_trade_no` | String(128) |外部订单号或商户平台交易码 |
| 钱包/渠道 交易码 | `chnlsn` | String |  |
| 商品名称 | `goods_name` | String(64) | 商品名称 / 标识: 不能超过 20 个字母数字或包含特殊字符。 APP支付不能为空。 如果参数是汉字，则需要使用**UTF-8**编码。 |
| 交易货币 | `txcurrcd` | String(3) | 交易币种, 请查看[币种](/docs/preparation/paycode#支付币种)表以获取完整的可选用的币种 |
| 原始订单号 | `origssn` | String(40) | 指原QFPay 交易号, 此参数仅在退款的`syssn`在排队中可用 |
| 支付类型 | `pay_type` | String(6) | 请参考[支付类型表](/docs/preparation/paycode#支付类型) 获取完整的支付类型 |
| 订单类型 |  `order_type` |  String(16) | Payment: 支付交易 Refund: 退款交易 |
| 请求交易时间 | `txdtm` | String(20) | 商户在交易和退款请求中提交的交易时间. 格式: YYYY-MM-DD hh:mm:ss |
| 订单支付金额 | `txamt` | Int(11) |  交易金额, 以分为单位 (i.e. 100 = $1)，建议数值大于200，避免因支付金额过低而被交易风控。 |
| 系统交易时间 | `sysdtm` | String(20) | 格式: YYYY-MM-DD hh:mm:ss <br/>这个值被用作结算截止时间 |
| 撤销/退款标记 | `cancel` | String(1) | 交易撤销情况: <br/> 0 = 未能撤销 <br/> 1 = 反扫支付: 交易撤销或退款成功 <br/> 2 = 正扫支付: 交易撤销成功 <br/> 3 = 交易已退款 <br/> 4 = 支付宝预授权订单完结 <br/> 5 = 交易部分退款 |
| 支付结果返回码 |  `respcd` | String(4) | 0000-请求成功.<br/>1143/1145 - 商户需要持续查询退款交易状态. <br/>所有其他的返回编码都是失败值. 请根据 [交易状态码](/docs/preparation/paycode#交易状态码) 获取完整的信息.|
| 支付结果描述 | `errmsg` | String(128) | 支付结果描述 |
| 货币换汇汇率 |`exchange_rate`  | String | 使用的换汇汇率 |
| 净付款金额 |`cash_fee`  | String | 用户实际付款金额 = 交易金额 - 优惠 |
| 支付货币 |`cash_fee_type` | String | 实际支付货币 e.g. CNY |
| 净退款金额 | `cash_refund_fee` | String | 实际退款金额 |
| 退款货币 | `cash_refund_fee_type` | String | 实际退款值 e.g. CNY |

## 账户报表

特定支付渠道的清算报表会被定期下载, 其他的请求只能在生产环境发起. 系统会以压缩的文件包格式返回数据. 数据会基于所选的支付渠道并包含所有的商户, 因此不能将 `mchid` 作为请求参数传入.

## 账户报表API端点

### HTTP请求

`GET ../download/v1/trade_bill`

### 请求参数

|请求编码 | 是否必须 | 参数类型 | 描述
|----    |---|----- |-----   |
| `trade_date` | 是 | String(10) | 获取所选日期的特定账户对账单 示例: 2017-10-17|
