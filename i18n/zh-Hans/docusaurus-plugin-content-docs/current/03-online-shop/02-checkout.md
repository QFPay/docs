import Link from '@docusaurus/Link';

# 钱方结账页面服务

## 介紹

欢迎使用 **QFPay 安全收银台** 本手册介绍了 QFPay 的托管结账页面，开发者可以通过该页面向其在线商店添加多种支付方式。

## 结账页面设计

<Link href="/img/shouyintai.png"> ![shouyintai](@site/static/img/shouyintai.png) </Link>

结帐页面具有完全响应能力，能自动调整以适应所有屏幕尺寸。 介面目前支持英语，简体中文以及繁体中文。 另外结帐页面可以根据商家的需求，例如可用的电子钱包以及设计和描述，进行配置 。 如果您有相關明确要求，请发送电子邮件至 **technical.support@qfpay.com** 寻求協助。

## API环境

:::warning
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
 | appcode | String(64) | 是 |QFPay 提供的API凭证|A6A49A******************5032|
|sign_type | String(256)|是|SHA256 or MD5, 建议SHA256|sha256|
|sign | String(128)|是|请求签名以进行认证 |3b020a6349646684ebeeb0ec2cd3d1fb|
|paysource | String(12)|是|结尾必须是 _checkout|remotepay_checkout|
|txamt | Int(11)|是|付款金额（单位：分）|1099|
|txcurrcd |String(3)|是|货币代码|HKD|
|out_trade_no|String(128)|是|唯一的外部交易号|202005270001|
|txdtm|String(32)|是|下单时间|2020-06-24 20:04:37, Format: YYYY-MM-DD hh:mm:ss|
|return_url|String(256)|是|支付成功后的重定向URL|https://xxx.com/return/success|
|failed_url|String(256)|是|支付失敗后的重定向URL|https://xxx.com/return/failed|
|notify_url|String(256)|是|异步通知URL|https://xxx.com/notify/success|
|mchntid|String(16)|否 |QFPay 代理商商户标识符|PAKjVHJmQe|
|goods_name|String(64)|是|不能有特殊字符，不超过20个字母或汉字（需传入app支付参数）。 如果要在清算文件中显示商户名称，则该参数必须为空。| |
|txzone|String(5)|是|时区|该字段用于记录本地下单时间, 默认为北京时间 +0800.|
|udid|String(40)|是|唯一設備ID|0001|
|expired_time|String(3)|是|二维码过期时间|单位为分钟，最短5分钟，最长120分钟，仅微信支付、支付宝、支付宝香港支持此参数|
|checkout_expired_time|String(3)|是|客户端过期时间|单位为5分钟， 时间到了后，结账页面会跳转至 支付失败后的重定向URL|
|limit_pay|String(3)|是|禁止使用信用卡|参数值指定为no_credit，即禁止使用信用卡支付，仅微信支付支持此功能。|
|lang|String(5)|是|界面语言|可能值 <br/> zh-hk (香港繁体中文) <br/> zh-cn (简体中文) <br/> en (英文) <br/>如果结帐请求中不传递该参数，则结帐页面将使用浏览器的默认语言。 如果结帐请求中传递该参数，则生成签名时不包含该参数。|

## 创建新订单

:::info
每笔订单都是唯一的，因此商家在重定向到托管结账页面时需要创建唯一的外部交易号“out_trade_no”。
:::

创建新的结帐订单，必须发送带有身份验证签名的 GET 请求。 对于此签名，必须连接上述参数，然后使用 QFPay 提供的 app_key 进行哈希处理。 如需 API 凭证或技术支持，请联系 **technical.support@qfpay.com**。

右侧的示例说明了签名生成算法。 您还可以下载 [QFPay Online Checkout Boilerplate](@site/static/files/qfpay_online_checkout.html download) 并在默认浏览器中打开 HTML。

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
