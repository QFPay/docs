import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WeChat Pay H5 (in mobile browser)

<Link href="/img/wechat-h5.png" target="_blank">![WeChat H5 process-flow](@site/static/img/wechat-h5.png)</Link>

## HTTP Request

**Endpoint** : `/trade/v1/payment`

**Method** : `POST`

**PayType** : `800212`

## Request Parameters

|  Attribute | Mandatory| Type | Description |
|:---|:----- |-----   |-----   |
|Public payment parameters |—  |—   | Please refer to the [Public Payment Section](/docs/preparation/paycode#public-payment-parameters) for more details |
|`extend_info`|Yes|Object||

```js
extend_info:
{
  "scene_info":{ //场景类型
    "h5_info": { // h5支付固定传"h5_info"
      "type": "Wap", //场景类型
      "wap_url": "https://qfpay.com/h5/pay", //WAP网站URL地址
      "wap_name": "qfpay" //WAP 网站名
    }              
  },
  "spbill_create_ip": "192.168.1.10"// 用户真实ip地址获取指引 https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_5
}
```

### extend_info

|Attribute| Secondary Attribute | Third Attribute | Mandatory| Type | Description |
|:----    |:---|:----- |-----   |-----  |-----   |
|`scene_info`|||Yes|Object||
||`h5_info`||Yes|Object||
|||`type`|Yes|String|scene type **"Wap"**|
|||`wap_url`|Yes|String|mobile website address|
|||`wap_name`|Yes|String|mobile website name|
|`spbill_create_ip`|||Yes|String|IP address of user|

## Response Parameters

|Attribute| Secondary Attribute| Type|Description|
|:----    |:---|:----- |----   |
|Public response parameters    |—  |— | Please refer to the [Public Payment Section](/docs/preparation/paycode#public-payment-parameters) for more details |
|`pay_url`|Yes|String||

:::warning
In normal process after payment, the user will return to the page where payment is initiated. If you want user to return to the specified page, you can insert redirect_url parameter to returned payment URL. For example, if you want user to jump to [https://www.wechatpay.com.cn](https://www.wechatpay.com.cn), it can be processed as follows:
:::

### pay_url

```plaintext
https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096
```

### Payment URL after redirect_url inserted

```plaintext
https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096&redirect_url=https%3A%2F%2Fwww.wechatpay.com.cn
```
