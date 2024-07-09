# ECR cloud 外部接口请求文档

## 非同步流程

### 1. 支付

`API路径: /ecr/v1/payment/async`
`API请求方式: POST`
`API请求参数`
| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `txamt` |是| Integer | 金额 e.g. $1.1 => 110 |
| `termid` |是| String | 终端 ID |
| `channel` |是| String | 钱包名称, <br/> (1) card_payment -> 卡支付(master/visa)<br/>(2) wx -> 微信支付<br/>(3) alipay -> 支付宝<br/>(4) payme -> PayMe<br/>(5) union -> 银联支付<br/>(6) fps -> FPS<br/>(7) octopus -> 八达通支付<br/>(8) unionpay_card -> 银联卡支付<br/>(9) amex_card -> amex 卡支付 |
| `out_trade_no` |是| String | 商户外部单号.|
| `camera_id`|否|Integer|在反扫支付中可以选择使用前置摄像头或者后置摄像头<br/> 0: 后置摄像头 (默认), <br/> 1: 前置摄像头  |
| `scan_type`|是|String|支付类型<br/>QRCODE_PAY: 二维码支付<br/>SCAN_PAY: 扫码支付 |
| `payment_timeout` |否| Integer | 可以设置等待超时时间，单位为秒，默认120s |

### 2. 退款

>octopus (八達通) 不支持退款

`API路径: /ecr/v1/refund/async`
`API请求方式: POST`
`API请求参数`
| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `syssn` |是| String | QFPay 唯一交易 Id|
| `termid` |是| String | 终端 ID|
| `txamt` |否| String | 退款金额, 默认的退款金额是订单可退款的金额, 支持部分退款 |
| `allow_modify_flag` |否| Integer | 0: 不支持修改退款金额<br/>1: 支持修改退款金额|
| `out_trade_no` |是| String | 商户外部单号|

### 3. 撤销请求

`API路径: /ecr/v1/cancel/async`
`API请求方式: POST`
`API请求参数`
| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `termid` |是| String | 终端 ID |

### 4. 打印小票

`API路径: /ecr/v1/print_receipt/async`
`API请求方式: POST`
`API请求参数`
| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `syssn` |是| String | QFPay 唯一交易 Id|
| `out_trade_no` |是| String | 商户外部单号 |
| `termid` |是| String | 终端 ID |

### 5. 打印交易汇总

`API路径: /ecr/v1/print_summary/async`
`API请求方式: POST`
`API请求参数`
| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `termid` |是| String | 终端 ID|

### 6. 查询交易状态

`API路径: /ecr/v1/query/async`
`API请求方式: POST`
`API请求参数`
> syssn 和 out_trade_no 必须提供至少一个

| 参数编码 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| `syssn` |否| String | QFPay 唯一交易 Id|
| `out_trade_no` |否| String | 商户外部单号 |
| `termid` |是| String | 终端 ID |
