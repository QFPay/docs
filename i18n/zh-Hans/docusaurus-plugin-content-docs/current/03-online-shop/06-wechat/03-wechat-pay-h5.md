import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 微信H5支付（第三方浏览器）

<Link href="/img/wechat-h5.png" target="_blank">![WeChat H5 process-flow](@site/static/img/wechat-h5.png)</Link>

### HTTP请求

`POST ../trade/v1/payment` `PayType: 800212`

### 请求参数

|参数名字 | 参数编码  | 是否必填| 参数类型 | 描述 |
|:----    |:---|:----- |-----   |-----   |
|公共支付参数 |—  |— |—  | 请参阅有关交易的[公共支付参数](../../preparation/paycode#支付API端点) |
|扩展客户信息|`extend_info`|是|Object||

```js
extend_info:{
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

<br/> **`extend_info:`**  <br/>

|参数编码|  二级参数编码 | 三级参数编码 | 是否必填| 参数类型 | 描述 |
|:----    |:---|:----- |-----   |-----  |-----   |
|`scene_info`|||是|Object||
||`h5_info`||是|Object||
|||`type`|是|String|场景类型 **"Wap"**|
|||`wap_url`|是|String|手机网站地址|
|||`wap_name`|是|String|手机网站名字|
|`spbill_create_ip`|||是|String|客户IP地址|

### 响应参数

|参数编码| 二级参数编码| 参数类型| 参数名字|描述|
|:----    |:---|:----- |-----   |----   |
|公共响应参数    |—  |— |—  | 请参阅有关交易的[公共支付参数](../../preparation/paycode#支付API端点) |
|支付URL|`pay_url`|是|String||

:::warning
正常流程中，支付后，用户会返回发起支付的页面。 如果您希望用户返回指定页面，可以在返回的支付URL中插入redirect_url参数。 例如，如果希望用户跳转到 https://www.wechatpay.com.cn ，可以按如下处理： <br/>
:::
**pay_url** <br/>

https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096 <br/>

**插入redirect_url后的支付URL** <br/>

https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096&redirect_url=https%3A%2F%2Fwww.wechatpay.com.cn
