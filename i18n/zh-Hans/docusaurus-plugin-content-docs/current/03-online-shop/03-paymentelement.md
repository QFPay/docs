# QFPay 支付组件 SDK

## 引入方式

```js
// sanbox环境
<script src="https://cdn-int.qfapi.com/qfpay_element/qfpay.js"></script>
// UAT环境
<script src="https://test-cdn-hk.qfapi.com/qfpay_element/qfpay.js"></script>
// prod环境
<script src="https://cdn-hk.qfapi.com/qfpay_element/qfpay.js"></script>
```

## 使用示例

### 1. 支付模式(Payment Intent)

1. 支持 visa/master Card-form 支付方式

```js
  // 初始化 qfpay 对象
  const qfpay = QFpay.config()
  
  // 初始化 payment 对象
  const payment = qfpay.payment()
  
  // 传递支付相关参数
  payment.pay({
    goods_name: "goods",
    paysource: "payment_element"
  }, "e487a02e3e1143e482db765ccec63d58")
  
  // 初始化 elements 对象，并生成 card-form表单
  const elements = qfpay.element()
  elements.createEnhance({
    selector: "#container"
  })

  // 触发表单提交，并接受响应参数
  const response = qfpay.confirmPayment({
    return_url: 'https://xxx.xxx.com'
  })
```

2. 完整支付功能，包括 visa/master card-form、visa/master pre-auth、支付宝香港、支付宝大陆、微信、银联云闪付、Payme、转数快等。

```js
  // 初始化 qfpay 对象
  const qfpay = QFpay.config()
  
  // 初始化 payment 对象
  const payment = qfpay.payment()
  
  // 验证 payment intent 值是否正确并可用
  qfpay.retrievePaymentIntent()
  
  // 传递支付相关参数
  payment.walletPay({
      lang: 'zh-cn', // zh-hk en  zh-cn为简体  zh-hk为繁体 en为英文 不传递则默认为当前浏览器语言
      goods_info: 'goods_info',  // 商品信息
      goods_name: "goods_name",  // 商品名字
      paysource: "payment_element_checkout", //固定传参 
      out_trade_no: intentParams.out_trade_no, // 外部订单号
      txamt: intentParams.txamt, // 支付金额
      txcurrcd: intentParams.txcurrcd, // 币种
      support_pay_type: ['Alipay', 'WeChat', 'UnionPay', 'AlipayHK', 
                          'FPS', 'VisaMasterCardPayment', 'ApplePay', 
                          'VisaMasterCardPreAuth'], // 自定义显示已开通的支付方式
      // intent_expiry: encodeURIComponent(intent_expiry), // intent过期时间
      // customer_id: "xxxxxxx" // 如果传入 customer_id 则表示在 payment 支付模式下进行卡信息收集
  }, intentParams.payment_intent)
  
  // 初始化 elements 对象，并生成 card-form表单
  const appearance = {
      // theme: 'dark',
      variables: {
          // fontFamily: 'cursive', // 字体
          // fontWeight: '400', // 字体粗细
          // colorText: 'black', // 字体颜色
          // sizeFontSubTitle: 'inherit', // 字体大小
          // colourBackground: '#fff', // 背景色
          // colourPrimary: '#ced4da', // 输入框颜色
          colourComponentText: 'black', // 输入框字体颜色
          // sizeComponentText: '15px', // 输入框字体尺寸
          // colourErrorMessage: '#da5d4a', // 错误信息的颜色
          // sizeErrorMessage: 'inherit' // 错误信息的尺寸
          // colorPaymentButton: '#000000',// 支付按钮的颜色
          // colorPaymentButtonText: '#FFFFFF', // 支付按钮文字的颜色
          colorQRCodeTopPromptContent: '#000000', // 二维码顶部提示文本颜色
          colorQRCodeBottomPromptContent: '#000000', // 二维码底部提示文本颜色
          fontWeightQRCodeTopPrompt: '900', // 二维码顶部提示文本字体
          fontWeightQRCodeBottomPrompt: '300', // 二维码顶部提示文本字体
      },
      billingAddressDisplay: {
          city: true, // 控制 billing address 中的 city 是否展示
          address1: true, // 控制 billing address 中的 address 1 是否展示
          address2: true, // 控制 billing address 中的 address 2 是否展示
      }
  }
  const elements = qfpay.element(appearance)
  elements.createWallet({
    selector: "#container"
  })
  
  // 触发表单提交，并接受响应参数
  const response = qfpay.confirmWalletPayment({
    return_url: 'https://xxx.xxx.com'  // 回跳合作方的url
  })
  if (response.code === '0000') { // 支付结果 '0000' 为支付成功
    alert('支付成功' + JSON.stringify(res))
  } else {
    alert('支付失败' + JSON.stringify(res))
  }
```

### 2. 创建token模式

1. visa/master card-form支付

```js
  // 初始化 qfpay 对象
  const qfpay = QFpay.config()
  
  // 初始化 token 对象
  const token = qfpay.token()
  
  // 传递生成token相关参数
  token.intent({
    paysource: "payment_element"
  },"e487a02e3e1143e482db765ccec63d58")
  
  // 初始化 elements 对象，并生成 card-form表单
  const elements = qfpay.element()
  elements.createEnhance({
    seletor: "#container",
    element: "token"
  })
  
  // 触发表单提交，并接受响应参数
  const response = qfpay.createToken({
    return_url: 'https://xxx.xxx.com'
  })
```

#### 使用说明

**前提条件：使用 sdk 之前必须要先引入 sdk 文件(即qfpay.js)**

##### 全局对象 QFpay 及相关 API

1. QFpay.config(params)

```js
/**
 * 参数: 非必填, Object, 默认值为 {region: 'hk', env: 'prod'},
 *      region可选值如下：
 *        'hk' -线上正式/测试
 *        'hkt' -海外QA
 *        'qa' -海外QA
 *
 *      env可选值如下：
 *        'prod' -线上正式环境
 *        'test' -测试环境
 *        'qa' -海外qa环境
 *        'hkt' -海外qa环境
 * 返回值: 生成的 qfpay 对象
 * 作用: 生成 qfpay 全局对象
 */
const qfpay = QFpay.config()
```

2. qfpay.retrievePaymentIntent()

```js
/**
 * 参数: 不需要
 * 返回值: 相关code，如果为 '0000'，则代表 payment intent 可用，否则不可用
 * 作用: 验证 payment intent 值是否正确并可用
 */
const intentResponse = qfpay.retrievePaymentIntent()
```

3. qfpay.element(appearance)

```js
/**
 * 参数: 非必填, Object, {theme: string, variables: Object, billingAddressDisplay: Object}
 *      theme: 目前仅支持 'night', 夜间模式, 如果 variables 有值，则以 variables 设置的值为准
 *      variables: {
 *        fontFamily: 'cursive',         // 字体
 *        fontWeight: '400',             // card-form字体粗细
 *        colorText: 'black',            // card-form字体颜色
 *        sizeFontSubTitle: 'inherit',   // card-form字体大小
 *        colourBackground: '#fff',      // card-form背景色
 *        colourPrimary: '#ced4da',      // card-form输入框颜色
 *        colourComponentText: 'purple', // card-form输入框字体颜色
 *        sizeComponentText: '15px',     // card-form输入框字体尺寸
 *        colourErrorMessage: '#da5d4a', // 错误信息的颜色
 *        sizeErrorMessage: 'inherit'    // 错误信息字体尺寸
 *        colorPaymentButton: '#000000', // 支付按钮的颜色
 *        colorPaymentButtonText: '#FFFFFF',         // 支付按钮文字的颜色
 *        colorQRCodeTopPromptContent: '#000000',    // 二维码顶部提示文本颜色
 *        colorQRCodeBottomPromptContent: '#000000', // 二维码底部提示文本颜色
 *        fontWeightQRCodeTopPrompt: '900',          // 二维码顶部提示文本字体
 *        fontWeightQRCodeBottomPrompt: '300',       // 二维码顶部提示文本字体
 *      }
 *      billingAddressDisplay: {
 *        city: true      // 控制 billing address 中的 city&postal code 是否展示
 *        address1: true  // 控制 billing address 中的 address 1 是否展示
 *        address2: true  // 控制 billing address 中的 address 2 是否展示
 *      }
 * 返回值：elements 对象
 * 作用: 生成的 elements 对象
 */
const elements = qfpay.element(appearance)
```

4. qfpay.payment()

```js
/**
 * 参数: 不需要
 * 返回值：生成的 payment 对象
 * 作用: 生成 payment 对象
 */
const qfpay = QFpay.config()
const payment = qfpay.payment()
```

5. qfpay.confirmPayment()

```js
/**
 * 参数：选填，Object，{return_url: 'https://xxx.xxx.xxx'}, 如果传递了 return_url 参数，支付完成后，会跳转到指定的 return_url，如果未传递 return_url 参数，支付完成后，则停留在当前页面
 * 返回值：
 *   1. 卡交易相关
 *      返回值为：相关code、描述、out_trade_no、syssn, 如果 code 为 '0000', 则表示为成功，若非 '0000', 则具体参见返回值中的 description字段
 *   2. ApplePay
 *      返回值为：code、description; 
 *      若 code 为 '1111', 则表示 取消了Applepay支付
 *      若 code 为 '0000', 则表示 Applepay 支付成功, 另外，也可参考 description 查看状态描述
 * 作用：返回支付结果
 */
const paymentResponse = qfpay.confirmPayment({
  return_url: 'https://www.baidu.com'
})
```

6. qfpay.confirmWalletPayment()

```js
/**
 * 参数：选填，Object，{return_url: 'https://xxx.xxx.xxx'}, 如果传递了 return_url 参数，支付完成后，会跳转到指定的 return_url，如果未传递 return_url 参数，支付完成后，则停留在当前页面
 * 返回值：
 *   1. 卡交易相关
 *      返回值为：相关code、描述、out_trade_no、syssn, 如果 code 为 '0000', 则表示为成功，若非 '0000', 则具体参见返回值中的 description字段
 * 作用：返回支付结果
 */
const paymentResponse = qfpay.confirmPayment({
  return_url: 'https://www.baidu.com'
})
```

7. qfpay.token()

```js
/**
 * 参数: 不需要
 * 返回值：生成的 token 对象
 * 作用: 生成 token 对象
 */
const qfpay = QFpay.config()
const payment = qfpay.token()
```

8. qfpay.retrieveTokenIntent()

```js
/**
 * 参数: 不需要
 * 返回值: 相关code，如果为 '0000'，则代表 token intent 可用，否则不可用
 * 作用: 验证 token intent 值是否正确并可用
 */
const intentResponse = qfpay.retrievePaymentIntent()
```

9. qfpay.createToken()

```js
/**
 * 参数：选填，Object，{return_url: 'https://xxx.xxx.xxx'}, 如果传递了 return_url 参数，返回结果后，会跳转到指定的 return_url，如果未传递 return_url 参数，返回结果后，则停留在当前页面
 * 返回值为：code、description、customer_id、card相关信息、token相关信息
 *  若 code 为 '0000', 则表示成功提交信息, 返回值为 customer_id、card相关信息、token相关信息
 *    customer_id: 消费者在QF系统中的唯一标识
 *    card: {
 *      brand: "xxxx", // 卡标识, 例如 VISA
 *      suffix: "xxxx" // 卡号后4位, 例如 1000
 *    }
 *    token: {
 *      event: "CREATE", // 表示当前行为为创建Token
 *      token_id: "xxxxxxx" // 生成调用其他API的参数
 *    }
 *  若 code 非 '0000', 则具体信息参考 description字段
 * 作用：返回根据卡信息生成的token等相关信息
 */
```

##### payment对象及相关 API

```js
const qfpay = QFpay.config()
const payment = qfpay.payment()
```

1. payment.pay(params1, params2)

```js
/**
 * 参数：params1，必填，Object, {goods_name: '', paysource: 'payment_element'}
 *               goods_name: 商品名称，非必填;
 *               paysource: 固定值, 目前为 payment_element，必填
 *      params2, 必填, string, 值为根据商户 code&key 生成的 payment intent 字符串
 * 特殊参数：customer_id: params1中的选填参数，表示消费者在QF系统中的唯一标识
 *         token_expiry: params1中的选填参数, Token expiry date
 *         token_reason: params1中的选填参数, Reason for token creation
 *         token_reference: params1中的选填参数, Reference for token
 *         如果仅仅使用 payment 支付功能，则无需传入这些特殊参数
 *         如果想在 payment 模式下使用卡信息收集功能，则需要在 params1 中传入以上特殊参数
 * 返回值: 无
 * 作用：传递支付相关参数
 */
payment.pay({
  goods_name: 'goods',
  paysource: 'payment_element'
}, 'SDF8980SFFSDF890SDF')
```

2. payment.walletPay(params1, params2)

```js
/**
 * 参数：params1，必填，Object, { lang: 'zh-cn', goods_name: '', paysource: 'payment_element', paysource: "payment_element_checkout", out_trade_no: intentParams.out_trade_no, txamt: intentParams.txamt, txcurrcd: intentParams.txcurrcd}
 *               lang: 当前交易需显示的语言环境, 非必填; zh-cn 简体中文  zh-hk繁体中文 en 英语
 *               goods_name: 商品名称，非必填;
 *               paysource: 固定值, 目前为 payment_element_checkout，必填
 *               out_trade_no: 外部订单号，必填, 
 *               txamt:交易金额，必填,
 *               txcurrcd: 币种， 必填,
 *               support_pay_type: 自定义显示已开通的支付方式, 非必填。不填的情况下返回所有已开通支付方式列表，具体传参见下方说明 
 *               out_trade_no，txamt，txcurrcd在第三方获取intent的时候皆有返回
 *      params2, 必填, string, 值为根据商户 code&key 生成的 payment intent 字符串
 * 特殊参数：customer_id: params1中的选填参数，表示消费者在QF系统中的唯一标识
 *         token_expiry: params1中的选填参数, Token expiry date
 *         token_reason: params1中的选填参数, Reason for token creation
 *         token_reference: params1中的选填参数, Reference for token
 *         如果仅仅使用 payment 支付功能，则无需传入这些特殊参数
 *         如果想在 payment 模式下使用卡信息收集功能，则需要在 params1 中传入以上特殊参数
 * 返回值: 无
 * 作用：传递支付相关参数
 */
/**
 * params1 中 support_pay_type接收一个支付方式列表
 * 'Alipay'                  // '支付宝大陆',
 * 'WeChat'                  // '微信',
 * 'UnionPay'                // '银联卡及云闪付',
 * 'AlipayHK'                //  '支付宝香港',
 * 'FPS'                     //  '转数快',
 * 'VisaMasterCardPayment'   //  'Visa/MasterCard 信用卡支付'
 * 'PayMe'                   //  'PayMe'
 * 'ApplePay'                //   'ApplePay'
 * 'VisaMasterCardPreAuth'   //  'Visa/MasterCard预授权'
 */
payment.walletPay({
    // lang: 'zh-cn', // zh-hk en
    goods_info: 'goods_info',
    goods_name: "goods_name",
    paysource: "payment_element_checkout",
    out_trade_no: intentParams.out_trade_no,
    txamt: intentParams.txamt,
    txcurrcd: intentParams.txcurrcd,
    support_pay_type: ['Alipay', 'WeChat', 'UnionPay', 'AlipayHK', 'FPS', 'VisaMasterCardPayment', 'ApplePay', 'VisaMasterCardPreAuth']
}, 'SDF8980SFFSDF890SDF')
```

3. payment.inquiry(params1, params2)

```js
/**
 * 参数: params1, 必填， Object, {syssn: string, out_trade_no: string, pay_type: string, respcd: stirng, start_time: string, end_time: string} | {}
 *               syssn: 钱台订单号, 多个以英文逗号区分开,
 *               out_trade_no: 外部订单号, 多个以英文逗号区分开,
 *               pay_type: 支付方式, 多个以英文逗号区分开,
 *               respcd: 交易返回码 , 默认全部返回码,
 *               start_time: 开始时间 YYYY-MM-DD HH:mm:ss 默认本月开始,
 *               end_time: 结束时间 YYYY-MM-DD HH:mm:ss 默认本月结束时间
 *      params2, 必填, string, 值为根据商户 code&key 生成的 payment intent 字符串
 * 返回值: 查询结果
 * 作用：根据对应参数查询相关支付结果
 */
const inquiryResponse = payment.inquiry({}, 'SDF8980SFFSDF890SDF')
```

##### token对象及相关 API

```js
const qfpay = QFpay.config()
const token = qfpay.token()
```

1. token.intent(params1, params2)

```js
/**
 * 参数：params1，必填，Object, {paysource: 'payment_element'}
 *               paysource: 固定值, 目前为 payment_element，必填
 *      params2, 必填, string, 值为根据商户 code&key 生成的 token intent 字符串
 * 返回值: 无
 * 作用：传递token intent相关参数
 */
token.intent({
  paysource: 'payment_element'
}, 'SDF8980SFFSDF890SDF')
```

##### elements对象及相关 API

```js
const qfpay = QFpay.config()
const elements = qfpay.element()
```

1. elements.create(params1, params2, params3) --- 仅支持 Visa Mastercard 卡交易

```js
/**
 * 参数：params1, 必填, string, 存放card form 的容器
 *      params2, 非必填, boolean, 默认值为 true, 若为 true 则 card form 中包含 email输入框, 为false, 则 card form 中, 不包含email 输入框
 *      params3, 非必填, string, 默认值为 payment, 生成 card form 表单
 * 返回值: 无
 * 作用: 生成 card form 表单
 */
elements.create("#container")
```

2. elements.createEnhance(params) --- elements.create() 的 enhance 版本, 支持 Visa Mastercard 卡交易、ApplePay、单纯创建 token 模式、 payment 模式下创建 token 模式

```js
/**
 * 参数：params: Object, {selector: string, email: boolean, tab: boolean, element: string}
 *      selector: 必填, string, 存放 element wallet 的容器
 *      email: 非必填, boolean, 默认值为 true, 若为 true 则 card form 中包含 email输入框, 为false, 则 card form 中, 不包含email 输入框
 *      tab: 非必填, boolean, 默认值为 false, 若为 true 则 element wallet list 切换方式为 Tab切换; 若为 false 则 element wallet list 切换方式为 纵向列表切换
 *      element: 非必填, string, 默认值为 payment, 表示当前为 普通支付模式; 可选值为 token, 表示当前为 创建 token 模式
 * 
 * 返回值: 无
 * 作用: 生成 element wallet
 * 注意：tab参数仅在 非支付订阅 模式下生效, 支付订阅 模式下为无效参数
 */
elements.createEnhance({
  selector: '#container'
})
```
