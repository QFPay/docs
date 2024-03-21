import Link from '@docusaurus/Link';

# QFPay Checkout Services

## 介紹

欢迎使用 **QFPay 安全收银台** 本手册介绍了 QFPay 的托管结账页面，开发者可以通过该页面向其在线商店添加多种支付方式。

## 结账页面設計

<Link href="/img/shouyintai.png"> ![shouyintai](@site/static/img/shouyintai.png) </Link>

结帐页面具有完全响应能力，能自动调整以适应所有屏幕尺寸。 介面目前支持英语，简体中文以及繁体中文。 另外结帐页面可以根据商家的需求，例如可用的电子钱包以及设计和描述，进行配置 。 如果您有相關明确要求，请发送电子邮件至 **technical.support@qfpay.com** 寻求協助。

## API环境

:::danger
请记住立即通过商户管理系统、QFPay APP或开放API对测试交易进行退款。
:::

下表描述了每个区域的基本 URL。

| 環境 | URL              |
| ---------- | ------------------------- |
| 香港 | https://openapi-hk.qfapi.com/checkstand/#/? |

## 流程

<Link href="/img/flowchart.png"> ![shouyintai](@site/static/img/flowchart.png) </Link>

消费者浏览商户的网站并继续付款。 一旦他们点击支付按钮，他们将被转发到 QFPay 托管的结账页面。 在这里，消费者可以找到多种支付方式，可在桌面或移动设备上结账并完成支付。 付款成功后，用户将被重定向回商家网站以获取“付款成功通知”并继续浏览商店。

## API請求參數

`GET https://openapi-hk.qfapi.com/checkstand/#/?..` <br/>

创建新的结帐请求需要以下主体参数；

 | 参数名称 | 参数类型 | 是否必填 | 描述 | 范例 |
| ---------- | ----------- | ----------- | ----------- | ----------- |
 | appcode | String(64) | Yes|API credentials assigned by QFPay|	A6A49A******************5032|
|sign_type | String(256)|Yes|SHA256 or MD5, SHA256 is recommended|	sha256|
|sign | String(128)	|Yes|	Request signature for authentication|	3b020a6349646684ebeeb0ec2cd3d1fb|
|paysource	 | String(12)|	Yes|	Must end in _checkout|	remotepay_checkout|
|txamt	 | Int(11)|	Yes|	Payment amount in unit cents|	1099|
|txcurrcd |String(3)|	Yes	Currency code|	HKD|
|out_trade_no|	String(128)|	Yes|	Unique external transaction number|	202005270001|
|txdtm	|String(32)	|Yes|	Order time	|2020-06-24 20:04:37, Format: YYYY-MM-DD hh:mm:ss|
|return_url|	String(256)|	Yes	|Redirect URL after payment has been successful	|https://xxx.com/return/success|
|failed_url	|String(256)|	Yes	|Redirect URL after payment has failed	|https://xxx.com/return/failed|
|notify_url	|String(256)|	Yes	|Asynchronous notification URL	|https://xxx.com/notify/success|
|mchntid	|String(16)|	No|QFPay Merchant Identifier for Agents|PAKjVHJmQe|
|goods_name	|String(64)|	No	|No special characters, no more than 20 letters or Chinese characters (app payment parameters must be |passed). If you want to display the merchant name on the clearing file, this parameter must be empty.|
|txzone	|String(5)	|No	|Timezone	|This field is used to record the local order time, the default is Beijing time +0800.|
|udid	|String(40	|No	|Unique device ID	|0001|
|expired_time	|String(3)	|No	|QRC expiration time|Unit in minutes, minimum 5 minutes, maximum 120 minutes, only WeChat Pay, Alipay |and Alipay_hk support this parameter|
|checkout_expired_time	|String(3)	|No	|client side expiration time|Unit in minutes, the checkout page will be redirect to fail url when time is up|
|limit_pay	|String(3)	|No	|Prohibit credit card use|The parameter value is specified as no_credit, which prohibits the use of |credit card payments, only WeChat Pay supports this feature.|
|lang|String(5)|No|UI Language|possible values: <br/> zh-hk (Hong Kong Traditional Chinese) <br/> zh-cn (Simplified Chinese) <br/> en (English) <br/> The checkout page will use default language of browser if do not pass this parameter in checkout request. If pass this parameter in checkout request, do not include this parameter in generating signature.|

## Create a New Checkout Order

:::info
Each checkout order is unique so merchants are requested to create a unique external transaction number `out_trade_no` when redirecting to the hosted checkout page.
::: 

In order to create a new checkout order, a GET request with authentication signature must be send. For this signature the above parameters have to be concatenated and then hashed with the app_key which is provided by QFPay. For API credentials or technical support please contact **technical.support@qfpay.com**.

The example to the right illustrates the signature generation algorithm. You can also download the [QFPay Online Checkout Boilerplate](@site/static/files/qfpay_online_checkout.html download) and open the HTML in your default browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>checkout</title>
    <style>

a{
  font-size: 20px;
}
    </style>
</head>
<body>
 <a id="standard">QFPay Online Checkout</a>

</body>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>

<script> 
window.onload = function(){
  let standard = document.getElementById('standard')

  let origin = 'https://openapi-hk.qfapi.com/checkstand/#/?'
   let obj = {
    appcode: "CC6FB660837E49F7A675D2**********",
    goods_name: "remotfpay_checkout_names",
    out_trade_no: "13322916216626239614",
    paysource: "remotepay_checkout",
    return_url: "https://www.baidu.com",
    failed_url: "https://www.baidu.com",
    notify_url: "https://www.baidu.com",
    sign_type: "sha256",
    txamt: "1",
    txcurrcd: "HKD",
    txdtm: "2020-06-28 18:33:20"
   }

   let api_key = "B3D4CCFD4AB049DCA82C25**********";
   let params = paramStringify(obj) 
   let sign = sha256(`${params}${api_key}`)
    standard.setAttribute('href', `${origin}${paramStringify(obj,true)}&sign=${sign}`)

}   

function paramStringify(json,flag) {
      let str = "";
      let keysArr = Object.keys(json);
      keysArr.sort().forEach(val => {
        if (!json[val]) return;
        str += `${val}=${flag ? encodeURIComponent(json[val]) : json[val]}&`;
      });
      return str.slice(0, -1);
    }

</script>
</html>
```
