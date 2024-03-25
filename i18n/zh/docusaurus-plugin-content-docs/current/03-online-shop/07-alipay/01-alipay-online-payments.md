import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 支付宝线上上扫码支付

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
txamt = '10' #In USD,EUR,etc. Cent
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
'txamt': '10', // In USD,EUR,etc. Cent
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
  
     $url = 'https://test-openapi-eur.qfapi.com';
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
  "txcurrcd": "THB", 
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
  "pay_url": "https://globalmapi.alipay.com/gateway.do?total_fee=3.0&secondary_merchant_name=###merchant_name###&out_trade_no=20200413000300020087033882&secondary_merchant_industry=7011&service=create_forex_trade&_input_charset=UTF-8&sign=02beb99974ce6167666280b9727c4444&currency=THB&notify_url=https%3A%2F%2Fo2.qfpay.com%2Fonline-test%2Ftrade%2Falipay%2Fv1%2Fonline_notify&order_valid_time=1800&secondary_merchant_id=2565075&sign_type=MD5&partner=2088631377368888&product_code=NEW_OVERSEAS_SELLER&order_gmt_create=2020-04-13+10%3A30%3A34&return_url=&subject=###merchant_name###", 
  "chnlsn": ""
}
```

:::note
支付宝香港不支持原生支付宝结账页面, 开发人员需要请求二维码并使用`iframe`嵌入
:::

## Web/WAP支付

客户使用支付宝在商户网站上购物, 用户扫描显示的二维码进行支付, 确认总金额后进行支付. 最后可以用`return_url`参数将用户重定向到一个商户网站上选中的页面. 支付宝以人民币计费实时从消费者的支付宝钱包中扣除支付金额, 钱方最终会以当地货币结算支付金额.

### HTTP请求

`POST ../trade/v1/payment` <br/>
`PayType: 801101` `支付宝线上上扫码支付 (海外商戶)` <br/>
`PayType: 801107` `支付宝线上上WAP支付 (海外商戶)` <br/>
`PayType: 801501` `支付宝线上扫码支付 (香港商戶)` <br/>
`PayType: 801512` `支付宝线上WAP支付 (香港商戶)` <br/>

### 请求参数

参数名称 | 参数编码 | 是否必填 | 参数类型 | 描述
--------- | -------- | --------- | ------- | -------
订单支付金额 | `txamt` | 是 | Int(11) |当前货币最小计量单位计算，只允许整数类型 (i.e. 100 = $1)
币种 | `txcurrcd` | 是 | String(3) | 交易币种, 请查看[币种](../../preparation/paycode#支付币种)表以获取完整的可选用的币种
支付类型 | `pay_type` | 是 | String(6) | 支付宝线上支付 = 801101
外部订单号 | `out_trade_no` | 是 | String(128)| 开发者自定义订单号，在同一商户账户中的每笔交易和退款请求该参数值唯一
请求交易时间 | `txdtm` | 是 | String(20) | 交易时间格式：<br/> YYYY-MM-DD hh:mm:ss
交易过期时间 | `expired_time` | 否 <br/>(仅限正扫支付) | String(3)  | 以分钟为计时的二维码过期时间,默认的过期时间是30分钟. 该参数可以被手动设置为最小5分钟,最大120分钟 <br/> 该参数可用于: <br/>800201 - WeChat scan code
商品名称标识 | `goods_name` | 否  | String(64) | 商品名称 / 标识: 不能超过 20 个字母数字或包含特殊字符。 APP支付不能为空。 如果参数是汉字，则需要使用**UTF-8**编码。
子商户号 | `mchid` | 否  | String(16) | 标识子商户身份，由钱方分配（渠道系统后台查看对应商户(非业务员)子商户号，被视为对应商户的交易）
时区 | `txzone` | 否  | String(5) | 用于记录本地下单时间，默认为北京时间+0800
设备唯一id | `udid` | 否  | String(40) |  唯一的设备ID,显示在商户管理后台上. 
跳转地址 | `return_url` | 否  | String(512) | 支付成功后的用户跳转地址. 支付宝WAP限制了`return_url`最大为200个字符.

### 响应参数

参数名称 | 参数编码 | 参数类型 | 描述
--------- | -------- | --------- | -------
支付类型 | `pay_type` | String(6) | 支付宝 Web/Wap 支付 = 801101/801107 |
系统时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 这个参数值被用作结算截止时间 | 
请求交易时间| `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  |
调试信息 | `resperr` | String(128) |
订单支付金额 | `txamt` | Int(11) |
信息描述 | `respmsg` | String(128) |
外部订单号 | `out_trade_no` | String(128) | 外部订单号
钱方订单号 | `syssn` | String(40) | 
返回码 | `respcd` | String(4) | 0000 = 请求成功. <br/> 1143/1145 = 商户需要持续查询交易结果 <br/> 所有其他的返回码表明交易失败.请参阅 [支付状态码](../../preparation/paycode#交易状态码) 获得完整返回类型列表 |
支付链接 | `pay_url` | String(512) |
