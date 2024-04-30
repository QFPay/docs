import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 微信 JSAPI 支付（微信公众号）

<Link href="/img/wechat_jsapi_process.jpg" target="_blank">![WeChat JSAPI process-flow](@site/static/img/wechat_jsapi_process.jpg)</Link>

:::warning
公众号支付必须从微信应用内浏览器发起。 它们无法从其他浏览器（例如 Chrome 或 Safari）启动。
:::

**JSAPI 支付类型**

Note: 加拿大地区的商户，请参阅[此](/docs/online-shop/alipay/alipay-online-payments)部分了解支付请求和响应参数，其中“pay_type”为800207。<br/>

JSAPI 支付有两种不同的实现方法。

<br/>

**1. 拥有实名认证的公众号JSAPI支付**

对于这种集成，商户需要在微信上注册自己的公众号，我们会将公众号与商户的QFPay支付账户绑定。 在这种情况下，商家可以创建和发布自己的内容、访问客户信息并收集自己的关注者。 选择该实现方式时，商户需要获取“oauth_code”、用户“openid”，并通过<Link href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1">官方微信平台</Link>触发微信支付。 商户只需参考QFPay[交易查询API接口](/docs/common-api/transaction-enquiry)即可。

**Step 1:** 开发者在微信公众号平台完成实名认证后，即可使用微信公众号支付。 认证完成后，开发者可以获得认证公众账号的openid参数。 请参考官方[微信文档](https://developers.weixin.qq.com/doc/offiaccount/en/Getting_Started/Overview.html)，了解更多信息。

**Step 2:** 通过提供指定的`openid`请求QFPAY订单支付接口`/trade/v1/ payment`并返回`pay_params`数据，具体说明请参考 [支付API端点](/docs/preparation/paycode#支付API端点).

**Step 3:** 商户认证申请时打开JSAPI支付授权目录发起支付。 更多详情请参考 [微信支付官方文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6).

<br/>

**2. 未拥有实名认证的公众号JSAPI支付**

对于此类支付，商户可以基于QFPay的公众号进行。 此整合仅适用于使用间接结算选项（即由 QFPay 提供结算）的商户。 对于此实现，商户应使用 QFPay 的 API 获取“oauth_code”、用户“openid”并触发微信支付，如下所述。

## 获取微信oauth_code

```plaintext
GET WeChat oauth_code request:

{
  https://test-openapi-hk.qfapi.com/tool/v1/get_weixin_oauth_code?app_code=5D81D64E602043F7AF51CEXXXXXXXXXX&sign=F4D8FB00894F213993B33116BC1B4E10&redirect_uri=https://sdk.qfapi.com
}
```

```python
import hashlib
import requests
from flask import Flask, redirect
from flask import request
import json
import random
import datetime
import string
import urllib
import urllib.parse

# Enter Client Credentials
environment = 'https://test-openapi-hk.qfapi.com'
app_code = "******"
client_key = "******"

# Create MD5 signature 
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

def get_out_code():
    # Body payload
    redirect_uri = 'http://49ae4dbd47a6.ngrok.io/getcode'  
    data = {'app_code': app_code, 'redirect_uri': redirect_uri}   
    sign = make_req_sign(data, client_key)
    
    return environment+"/tool/v1/get_weixin_oauth_code?app_code="+app_code+"&sign="+sign+"&redirect_uri="+redirect_uri #+"&mchid="+mchid
```

> Redirect to URL after the GET oauth_code request has been successful:

```json
{
  "http://xg.fshop.top/index.php/wap/pay/wxredirect?showwxpaytitle=1&code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv"
}
```

### HTTP请求

`GET ../tool/v1/get_weixin_oauth_code`

`app_code` 和 `sign` 都必须作为参数提交，而不是在 http 标头中提交。 该URL请求必须在微信环境中发送。 每次发起支付都需要重新获取微信`oauth_code`和`openid`。

### 请求参数

|參數名稱| 參數編碼 | 是否必填 | 參數類型 | 描述 |
|:----    |:---|:----- |-----   |-----   |
|开发者ID | `app_code` | 是 | String(32) | app_code由QFPay分配给合作伙伴  |
|回调地址 |`redirect_uri` | 是 |  String(512) | 请求成功后，用户将被重定向到回调地址 |
|商戶ID | `mchid` | 否 | String(16) | “mchid”是QFPay为每个商户分配的唯一标识  |
| 簽名| `sign`  | 是 | String | 根据统一框架获得的签名 |

## 获取微信openid

```plaintext

HTTP Request:

{
  https://openapi.qfpay.com/tool/v1/get_weixin_openid?code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv
}

```

```python
def get_open_id(data):
    
    try:
        r = requests.get(environment+"/tool/v1/get_weixin_openid",params=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, client_key)})
        print (r.request.url)
        print (r.content)
        if r.json()["respcd"]=="0000":
            return r.json()["openid"]
        else:
            pass
    except:
        print("An exception occurred")
```

> The above command returns JSON structured like this:

```json
{
  "resperr": "",
  "respcd": 0000,
  "respmsg": "",
  "openid": "oo3Lss8d0hLOuyTuSJMVwLTk68JE"
}
```

:::note 每次调用支付接口都必须获取新的`oauth_code`和`openid`。 为了请求“openid”，必须在 http 标头中提交“X-QF-APPCODE”和“X-QF-SIGN”。
:::

### HTTP请求

`GET ../tool/v1/get_weixin_openid`

### 请求参数

|参数编码|二级参数编码 | 是否必填| 参数类型 | 描述 |
|:-----  |:-----|----- |----- |----- |
|微信 oauth_code|  `code` |是  | String | 该代码由 [GET oauth_code 请求](#获取微信oauth_code) 返回。 它是唯一的，只能使用一次。 |
|商户ID|  `mchid`  |否  | String(16) | “mchid”是QFPay为每个商户分配的唯一标识 |

### 响应参数

|参数编码| 二级参数编码 | 参数类型 | 参数名字 | 描述 |
|:-----  |:-----|----- |----- |----- |
|`openid`|   | String(64)  | 微信 openid | 每个微信用户都会分配一个唯一的openid |

## 微信申请支付

```plaintext
有关代码说明，请选择带有以下选项卡的 Python。
```

```python
def payment(openid):
    # Create parameter values for data payload
    current_time = datetime.datetime.now().replace(microsecond=0)                                
    # Body payload
    txamt = '1' #In USD,EUR,etc. Cent
    txcurrcd = 'THB'
    pay_type = '800207' 
    letters = string.digits   
    out_trade_no = ''.join(random.choice(letters) for i in range(20)) 
    txdtm = current_time
    key = client_key
    
    
    data = {'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'sub_openid':openid}    
    
    try:
        r = requests.post(environment+"/trade/v1/payment",params=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})
        if r.json()["respcd"]=="0000":
            
            return r.json()['pay_params']
        else:
            pass
    except:
        print("An exception occurred")
    
    
app = Flask(__name__)

@app.route("/payment",methods=['GET', 'POST'])
def api_payment():
    
    if "MichroMessenger" in request.headers.get('User-Agent'):  #get an oauth_code
        print (get_out_code())
        return redirect(get_out_code(), code=302)    
    
@app.route("/getcode",methods=['GET', 'POST'])
def api_get_code():      
    print ("------------------------------------")
    print (request.args)                      
    print (request.args.get("code"))
    code = request.args.get('code')
    print (code)
    if code != "":    # user returned with oauth_code      
        
        sub_openid=get_open_id({"code": code})  # get open id using oauth_code
        param=payment(sub_openid)   # payment request to QFPay
        
        # add necessary parameters and redirect
        param["mchntnm"]="Pet Shop"
        param["txamt"]="1"
        param["currency"]="THB"
        param["redirect_url"]="www.example.com"
        return redirect("https://o2-th.qfapi.com/q/direct?"+urllib.parse.urlencode(param), code=302)             # direct user"""
    else:
        print("unable to obtain code")
        return     

if __name__ == '__main__':
    app.run(host="127.0.0.1",port = 80)
```

商户可选择开通微信实名认证。 目前实名认证仅适用于中国大陆公民，包括真实姓名和身份证号码。 如果提供身份证明，付款人的钱包信息（例如连接的银行卡）必须与商家提供的数据相同。 如果客户尚未将微信账户绑定银行卡，仍可进行付款。

### HTTP 请求

`POST ../trade/v1/payment` `PayType: 800207`

### 请求参数

|参数名字|  参数编码 | 是否必填| 参数类型 | 描述 |
|:----    |:---|:----- |-----   |-----   |
|公共支付参数 |—  |— |—  | 请参阅有关交易的[公共支付参数](/docs/preparation/paycode#支付API端点) |
|微信授权码   |`sub_openid`|是  |String    |微信 OpenID. 请参阅 **GET openid** 文档   |
|指定付款方式   |`limit_pay`|否|String   |用于限制信用卡交易   |
|扩展客户信息   |`extend_info`|否|Object   | 实名客户身份识别。 该参数目前仅适用于中国大陆公民，并且需要针对所选的[PayType](/docs/preparation/paycode#支付类型)使用微信显式激活。 参数“user_creid”中包含消费者的**身份证号码**，“user_truename”中必须提供编码形式或汉字书写的付款人**真实姓名**。 一个例子如下所示； extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}' |

### 响应参数

|参数编码| 二级参数编码 | 参数类型 | 参数名字 | 描述 |
|:----    |:---|:----- |-----   |-----   |
|`pay_params`|`appId`   |String(16)  | 公众号id  | App ID由开发者在微信开发者平台注册小程序后由腾讯提供 |
|— |`timeStamp`  |String(32) | 时间戳  | 当前时间 |
|— |`nonceStr`  |String(32) | 随机字符串  | 不超过32位的随机字符串 |
|— |`package`   |String(128)| 交易明细  | 接口返回的`prepay_id`参数值格式为：prepay_id=** |
|— |`signType`   |String(32) | 签名方法  | 签名方法, 默认：MD5|
|— |`paySign`    |String(64) | 签名   | 签名方法, 签名：MD5|
|— |公共响应参数    |— |—   | 请参阅有关交易的[公共支付参数](/docs/preparation/paycode#支付API端点)|
|`txcurrcd`  | |  String(3) |  | 交易货币。 查看[货币](/docs/preparation/paycode#支付币种) 表以获取可用货币的完整列表 |

## 调用微信支付模块

:::note 直接向接口提交相关参数，此步骤无需在HTTP header中定义`X-QF-APPCODE`或`X-QF-SIGN`。
:::

### HTTP 请求

`GET https://o2.qfpay.com/q/direct`

### 请求参数

| 参数类型 | 是否必填 | 参数类型 | 描述 |
|----------------|-----------|----------------|-------------|
|`mchntnm` | 是 | String(128) | 自定义企业名称。 如果参数是汉字，则需要**UTF-8**编码 |
|`txamt`  | 是  | Int(11) | 金额 |
|`currency`   | 是  | String(3)|  |
|`goods_name`   | 否  | String(64)|  定制商品名称。 如果参数是汉字，则需要**UTF-8**编码 |
|`redirect_url`   | 是  | String(512)| 付款完成后重定向 URL。 **urlencode** 处理该参数 |
|`package`     | 是 | String(128) | 微信调用支付接口后返回参数   |
|`timeStamp`     | 是 | String(32) | 微信调用支付接口后返回参数  |
|`signType`      | 是 | String(32) | 微信调用支付接口后返回参数 |
|`paySign`       | 是 | String(64) | 微信调用支付接口后返回参数 |
|`appId`        | 是 | String(16) | 微信调用支付接口后返回参数  |
|`nonceStr`  | 是 | String(32) | 微信调用支付接口后返回参数  |
