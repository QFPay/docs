import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Alipay Online Payments

:::note
Alipay Hong Kong does not support the native Alipay Checkout page. Instead developers are required to request the QR code and embed it using `iframe`
:::

```plaintext
For code instructions select Python, Java, Node.js or PHP with the tabs below.
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
txamt = '10' #In USD,EUR,etc. Cent. Suggest value > 200 to avoid risk control.
txcurrcd = 'HKD'
pay_type = '801101' # Alipay Web Payment = 801101
auth_code='283854702356157409' #CPM only
out_trade_no = '01234567890123'
txdtm = current_time
goods_name = 'test1'   
mchid = 'ZaMVg*****'
key = client_key


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}
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

        String pay_type="801101";
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

        String url="https://test-openapi-hk.qfapi.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

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
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'txamt': '10', // In USD,EUR,etc. Cent. Suggest value > 200 to avoid risk control.
'txcurrcd': 'HKD',
'pay_type': '801101', // Alipay Web Payment = 801101
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
  
     $url = 'https://test-openapi-hk.qfapi.com';
     $api_type = '/trade/v1/payment';
     $pay_type = '801101'; //Alipay Web Payment = 801101
     //$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
     $now_time = date("Y-m-d H:i:s"); //Get current date-time
     
     $fields_string = '';
     $fields = array(
      //'mchid' => urlencode($mchid),
      'pay_type' => urlencode($pay_type),
      'out_trade_no' => urlencode(GetRandStr(20)),
      'txcurrcd' => urlencode('HKD'),
      'txamt' => urlencode(2200),
      'txdtm' => $now_time
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

> The above command returns JSON structured like this:

```json
{
  "sysdtm": "2020-04-13 10:30:34", 
  "paydtm": "2020-04-13 10:30:34", 
  "txcurrcd": "HKD", 
  "respmsg": "", 
  "pay_type": "801101", 
  "cardcd": "", 
  "udid": "qiantai2", 
  "txdtm": "2020-04-13 10:30:34", 
  "txamt": "300", 
  "resperr": "success", 
  "out_trade_no": "4K35N374II7UJJ8RGIAE45O2CVHGHFF0", 
  "syssn": "20200413000300020087033882", 
  "respcd": "0000", 
  "pay_url": "https://globalmapi.alipay.com/gateway.do?total_fee=3.0&secondary_merchant_name=###merchant_name###&out_trade_no=20200413000300020087033882&secondary_merchant_industry=7011&service=create_forex_trade&_input_charset=UTF-8&sign=02beb99974ce6167666280b9727c4444&currency=THB&notify_url=https%3A%2F%2Fo2-hk.qfapi.com%2Fonline-test%2Ftrade%2Falipay%2Fv1%2Fonline_notify&order_valid_time=1800&secondary_merchant_id=2565075&sign_type=MD5&partner=2088631377368888&product_code=NEW_OVERSEAS_SELLER&order_gmt_create=2020-04-13+10%3A30%3A34&return_url=&subject=###merchant_name###", 
  "chnlsn": ""
}
```

## Web/WAP Payment

Customers make purchases on a merchant website with Alipay. The user scans the displayed QR code to pay, confimrs the total amount and makes payment. Finally the customer can be redirected to a selected page on the merchant's website using the `return_url` parameter. Alipay deducts the payment amount from the consumer's Alipay wallet in real-time in CNY and QFPay settles the payment amount to merchants in local currency.  

### HTTP Request

**Endpoint** : `/trade/v1/payment`

**Method** : `POST`

**PayType** :

PayType | Description
------- | -------
801101| Overseas Merchants Web
801107| Overseas Merchants WAP
801514| Hong Kong Merchants Web
801512| Hong Kong Merchants WAP

### Request Parameters

Attribute | Mandatory | Type | Description
-------- | --------- | ------- | -------
`txamt` | Yes | Int(11) | Payment amount, amount of the transaction. Unit in cents (i.e. 100 = $1).Suggest value > 200 to avoid risk control
`txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](/docs/preparation/paycode#currencies) table for a complete list of available currencies
`pay_type` | Yes | String(6) | Payment type, Alipay Web Payment = 801101
`out_trade_no` | Yes | String(128)| API Order Number, external transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
`txdtm` | Yes | String(20) | Request transaction time, format：<br/> YYYY-MM-DD hh:mm:ss
`expired_time` | No<br/> (MPM only) | String(3)  | Order expiration time, QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.<br/> Available for: <br/>800201 - WeChat scan code
`goods_name` | No | String(64) | Product name identification, Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
`mchid` | No | String(16) | QFPay merchant number, may or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request.
`udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal.
`return_url` | No | String(512) | Redirect URL, address for user redirect after successful payment. Mandatory parameter to submit for GrabPay Online. Alipay WAP restricts the `return_url` to maximum 200 characters.

### Response Parameters

Attribute | Type | Description
-------- | --------- | -------
`pay_type` | String(6) | Payment type, Alipay Web/Wap Payment = 801101/801107
`sysdtm` | String(20) | System transaction time, format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements.
`txdtm` | String(20) | Request transaction time, format：YYYY-MM-DD hh:mm:ss
`resperr` | String(128) | Response message
`txamt` | Int(11) | Payment amount
`respmsg` | String(128) | Other message information
`out_trade_no` | String(128) | External transaction number  
`syssn` | String(40) | QFPay transaction number
`respcd` | String(4) | Return code, 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](/docs/preparation/paycode#transaction-status-codes) for a complete list of response codes.
`pay_url` | String(512)|Payment URL
