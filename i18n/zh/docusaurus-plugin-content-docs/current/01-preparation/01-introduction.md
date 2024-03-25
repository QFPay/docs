import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 简介

欢迎查阅 **钱方开放API文档平台**. 首先, 请阅读以下[开发人员接入规范](#开发人员接入规范).

如果您想要在<Link href="https://www.postman.com/">Postman</Link>快速测试支付功能, 我们提供了一套生成签名的预请求脚本, 您可以从[这里](paycode#api-endpoint-for-payments)下载该文件.

## 开发人员接入规范

:::note
 如果已经被提供 `mchid` , 除特殊情况下在呼叫API时必须提交 `mchid`. 与之相反的是, 如果并未被提供 `mchid`, 商户无需在API请求中传递参数 `mchid`.
:::

为了使用钱方常用API, 您必须拥有已激活的API证书, 包括一个**app_code**以及**client_key**.
如遇到技术问题,请联系**technical.support@qfpay.com**.

对于应用程序的测试我们提供了测试, 开发以及生产运行环境.

请注意在沙盒环境进行的测试交易不会被结算. 因此, 请务必使用小笔金额测试并在原始交易日当天使用退款终端或是商户APP进行退款.

每个商户将会被提供一系列有或没有 `mchid` 的 `app_code` 和 `client_key` , 拥有多个分支的商家通常会同时拥有 `app_code` , `client_key` 和 `mchid`.经过哈希编码的 `mchid` 被用作辨别商店和网店.除此之外只有 `app_code` 和 `client_key` 会被提供.

### 编码机制

所有从API返回的参数如无特别说明将使用 `UTF-8` 编码.

## 开发环境

:::warning
请谨记立即将在测试环境进行的交易退款
:::

### API环境

下表描述了每个国家/地区的**基本URL**. 沙盒环境适用于所有人而国家/地区会有特定的测试环境.

环境名称 | 测试环境URL | 生产环境URL
------- | --------- | -------
沙盒环境 (只用于模拟信用卡) | https://openapi-int.qfapi.com |
线上测试环境 | https://openapi-test.qfpay.com |
中国香港 | https://test-openapi-hk.qfapi.com | https://openapi-hk.qfapi.com

## 签名机制

:::tip
如无特别要求,在HTTP头部一定要在 `X-QF-SIGN` 中提交签名
:::

**步骤1:** 根据参数名称升序排序所有参数

参数列表: abc=value1 bcd=value2 bad=value3
排序结果: abc=value1 bad=value3 bcd=value2

**步骤2:** 以&作为分隔符拼接所有参数,获得用于签名的字符串

abc=value1&bad=value3&bcd=value2

**步骤3:** 在字符串的末尾拼接钱方的`client_key`.

abc=value1&bad=value3&bcd=value2Key

**步骤4:** 使用 MD5 或 SHA256 加密第三步得到的字符串, 推荐使用 SHA256.

MD5(abc=value1&bad=value3&bcd=value2Key)
HASH(“SHA256”, abc=value1&bad=value3&bcd=value2Key)

**步骤5:** 使用签名请求API

将签名结果（密文）保存到http请求头部的`X-QF-SIGN`字段中；

```plaintext
For code instructions select Python, Java, Node.js or PHP with the tabs above.
```

<Tabs groupId="signature-generation">
<TabItem value="python" label="Python">

```python
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
txamt = '10' # In USD,EUR,etc. Cent
txcurrcd = 'EUR'
pay_type = '800101' # Alipay CPM = 800108 , MPM = 800101
auth_code='283854702356157409' #CPM only
out_trade_no = random_string
txdtm = current_time
goods_name = 'test1'   
auth_code = '280438849930815813'
key = client_key
mchid = 'ZaMVg*****' # ID is provided during merchant onboarding


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid}
data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}


r = requests.post(environment+"/trade/v1/payment",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(make_req_sign(data, key))

```

</TabItem>
<TabItem value="java" label="Java">

```java
/* 
This class is the utility for QFPay Payment API. 
Note:This is just an example.
getMd5Value:
After do the string manipulation, like:abc=value&bad=value&bcd=valueKey
This method generates MD5 signature using hexadecimal format.
getDataString:
This method pass in with the map, and generate the string like:abc=value&bad=value&bcd=value.
*/
public class QFPayUtils {
    
    public static String getMd5Value(String input) {
        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(input.getBytes( "UTF-8" ));
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < array.length; i++) {
                sb.append( String.format( "%02x", array[i]));
            }
            return sb.toString().toUpperCase();
        } catch ( NoSuchAlgorithmException | UnsupportedEncodingException e) {
            return null;
        }
    }
   
    public static <T> String getDataString(Map resultMap) {
        Map<String, String> map = new TreeMap<String, String>(
                new Comparator<String>() {
                    public int compare(String obj1, String obj2) {
                        return obj1.compareTo(obj2);
                    }
                });

        Iterator<Map.Entry<String, String>> it = resultMap.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, String> entry = it.next();
            map.put(entry.getKey(), entry.getValue());
        }

        StringBuilder sb = new StringBuilder();
        it = map.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, String> entry = it.next();
            sb.append(entry.getKey()+"="+entry.getValue()+"&");
        }
        return sb.deleteCharAt(sb.length() - 1).toString();
    }


}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37**********'
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
'pay_type': '800101', // Alipay CPM = 800108 , MPM = 800101
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
$now_time = date("Y-m-d H:i:s"); //Get the current date-time  

$fields_string = '';
$fields = array(
    //'mchid' => urlencode($mchid),
    'pay_type' => urlencode($pay_type),
    'out_trade_no' => urlencode(GetRandStr(20)),
    'txcurrcd' => urlencode('EUR'),
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

ob_end_flush();
?>
```

</TabItem>
</Tabs>

> 上述指令会返回结构如下的JSON代码:

```json
{
"B3B251B202801388BE4AC8E5537B81B1"
}
```

### 请求描述

:::note
API将会返回JSON格式的响应内容.我们推荐开发者验证响应头部的签名以确保消息的完整性
:::

名称 | 描述
--------- | -------
Character | `UTF-8`  
Method | **POST/ GET** (视实际API功能而定)
Content-type | `application/x-www-form-urlencoded`

### 在请求API时HTTP头部所需的参数配置

名称 | 是否必须 | 描述
--------- | ------- | -------
`X-QF-APPCODE` | 是 | 分配给开发者的`app_code`
`X-QF-SIGN` | 是 | 按照签名算法生成的签名
`X-QF-SIGNTYPE` | 否 | 生成签名的算法. 如果使用了 SHA256 , 开发者必须传`SHA256`,为空默认`MD5`.
