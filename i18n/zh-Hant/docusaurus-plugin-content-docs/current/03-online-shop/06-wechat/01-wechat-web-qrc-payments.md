import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 微信扫码支付

<Link href="/img/online_qr_process.png" target="_blank"> ![Online QR Code Payment process-flow](@site/static/img/online_qr_process.png)</Link>

客户可以使用微信的“扫一扫”功能，扫描网页上商户生成的支付码进行支付, 网络支付允许将订单信息嵌入到唯一的二维码中. 用户通过微信扫码，在通过强制安全检查后将会完成支付.

商户可选择开通微信实名认证, 目前实名认证仅适用于中国大陆公民，需要包含真实姓名和身份证号码. 如果已经提供身份证明，付款人的钱包信息（例如连接的银行卡）必须与商家提供的数据相同. 如果客户尚未将微信账户绑定银行卡也仍可进行支付.

```plaintext

对于代码说明，请选择 Python、Java、node.js 或 PHP。

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
txamt = '10' #In USD,EUR,etc. Cent. Suggest value > 200 to avoid risk control
txcurrcd = 'HKD'
pay_type = '800201'
auth_code='283854702356157409' #CPM only
out_trade_no = '01234567890123'
txdtm = current_time
goods_name = 'test1'   
mchid = 'ZaMVg*****'
key = client_key


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}
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

        String pay_type="800201";
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
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'txamt': '10', // In USD,EUR,etc. Cent. Suggest value > 200 to avoid risk control
'txcurrcd': 'HKD',
'pay_type': '800201',
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
     $pay_type = '800201';
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
  "sysdtm": "2020-04-10 11:45:44", 
  "paydtm": "2020-04-10 11:45:44", 
  "txcurrcd": "HKD", 
  "respmsg": "OK", 
  "qrcode": "weixin://wxpay/bizpayurl?pr=4PsXP5N", 
  "pay_type": "800201", 
  "cardcd": "", 
  "udid": "qiantai2", 
  "txdtm": "2020-04-10 11:45:44", 
  "txamt": "300", 
  "resperr": "success", 
  "out_trade_no": "3Z6HPCS6RN54J2Y8LUQM8RBDVBA9URYE", 
  "syssn": "20200410000300020086358791", 
  "respcd": "0000", 
  "chnlsn": ""
  }
```

### HTTP请求

`POST ../trade/v1/payment` `PayType: 800201`

### 请求参数

参数名称 | 参数编码 | 二级参数 | 是否必填 | 参数类型 | 描述
--------- | -------- | --------- | ------- | ------- | -------
订单支付金额 | `txamt` | | 是| Int(11) | 以当前货币最小计量单位计算，只允许整数类型 (i.e. 100 = $1)。扣款金额，建议数值大于200，避免因支付金额过低而被交易风控。
币种 | `txcurrcd` | | 是| String(3) | 交易币种, 请查看[币种](/docs/preparation/paycode#支付币种)表以获取完整的可选用的币种
支付类型 | `pay_type` | | 是| String(6) | 微信线上支付类型 `800201`
外部订单号 | `out_trade_no` | | 是| String(128)| 外部交易代码 / 商户平台交易码: 在同一商户账户中的每笔交易和退款请求该参数值唯一
请求交易时间 | `txdtm` | |是| String(20) | 交易时间格式：<br/> YYYY-MM-DD hh:mm:ss
交易到期时间 | `expired_time` | | 否 <br/> (仅限正扫支付) | String(3)  | 以分钟为计时的二维码过期时间,默认的过期时间是30分钟. 该参数可以被手动设置为最小5分钟,最大120分钟<br/> 该参数可用于: <br/>800201 - 微信扫码支付
商品名称标识 | `goods_name` | | 否  | String(64) | 商品名称 / 标识: 不能超过 20 个字母数字或包含特殊字符。 APP支付不能为空。 如果参数是汉字，则需要使用**UTF-8**编码。
子商户号 | `mchid` | | 否  | String(16) | 可能提供给予商户。 如果给出了MCHID，则必须提供MCHID。反之，如果没有提供MCHID，商户不得在API请求中传递MCHID字段。
设备唯一id | `udid` | | 否  | String(40) | 唯一的设备ID,显示在商户管理后台上.
人民币标识 | `rmb_tag` | | 否  | String(1) | 香港微信支付使用“rmb_tag”=Y 和“txcurrcd”=CNY 来表示交易币种为人民币。
客户扩展信息 | `extend_info` | `user_creid` <br/> `user_truename` | 否  | Object | 实名客户身份识别。 该参数目前仅适用于中国大陆公民，并且需要针对所选的[PayType](/docs/preparation/paycode#支付类型)使用微信显式激活。 参数“user_creid”中包含消费者的**身份证号码**，“user_truename”中必须提供编码形式或汉字书写的付款人**真实姓名**。 一个例子如下所示； extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}'

### 响应参数

参数名称 | 参数编码 | 参数类型 | 描述
--------- | -------- | --------- | ------- 
交易类型 | `pay_type` | String(6) | 微信在线支付 交易类型：`800201`
系统交易时间 | `sysdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss <br/> 该参数值用作清算截止时间。 | 
请求交易时间 | `txdtm` | String(20) | 格式：YYYY-MM-DD hh:mm:ss  | 
响应信息 | `resperr` | String(128) |   
支付金额 | `txamt` | Int(11) |  
其他留言信息 | `respmsg` | String(128) |  
外部交易编号 | `out_trade_no` | String(128) | 外部交易号
QFPay交易编号 | `syssn` | String(40) | 
返回码 | `respcd` | String(4) | 0000 = 请求成功。 <br/> 1143/1145=要求商户继续查询交易结果。 <br/> 所有其他返回码均表示交易失败。 请参阅[交易状态代码](/docs/preparation/paycode#交易状态码)页面以获取完整的响应代码列表。