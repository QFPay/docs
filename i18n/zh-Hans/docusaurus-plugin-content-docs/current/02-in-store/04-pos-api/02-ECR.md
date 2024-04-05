import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# ECR integration technical specification

## 1. POS-KEY

在haojin app 设置中，有个设置调用秘钥选项。点击进入可以重新生成秘钥。默认秘钥是： `f46b1f08bec1f39104792cc79ec9aacd`

<br/>

默认加密处于打开状态。

有一个刷新 POS-KEY 的选项。 并且Haojin App需要刷新才有效

<br/>
**刷新 POS-KEY 的步骤**
登入 Haojin App -> 我的 选项 -> 设置 -> 设备调用秘钥 -> 重置秘钥

**检查 POS-KEY 的步骤**
登入商户管理平台-> 设置 -> 设备设置 -> POS秘钥管理

## 2. Encryption

所有的数据信息都需要AES加密，加密AES_Key为上一步骤中生成的秘钥，加密用到的IV为：`qfpay202306_hjsh`

<br/>

数据经过加密后采用Base64编码。

## 3. 参数格式

| 参数名称 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
| amt | 是 | Integer | 金额, e.g. $10.1 => 10.1 |
| func_type | 是 | String | 指令代码 |
| channel | 是 | String | 钱包名称，参见通道列表 |
| out_trade_no | 否 | String | 商户参考。 <br/> 如果不通过，则out_trade_no不会通过 |

### 3.1 交易

:::note
    对于二维码支付，根据上次使用情况自动选择 MPM/CPM 模式。

    camera_id:正扫支付的时候可以切换前后摄像头,可以不传这个字段，默认是后置摄像头

            0：CAMERA_PARAM_BACK  后置摄像头
            1：CAMERA_PARAM_FROT  前置摄像头


    wait_card_timeout :，等待刷卡超时时间，可以不设置，默认120s, 类型int，值大于0
:::

```json
{
  "content": {
    "amt": 100,
    "camera_id": 0,
    "channel": "card_payment",
    "func_type": 1001,
    "out_trade_no": "456799999999",
    "wait_card_timeout": 120
  },
  "digest": "76b9186077cdc2bc5d78ae921309811d"
}
```

如需后端查询交易结果，请使用查询接口：https://sdk.qfapi.com/?python#transaction-enquiry

### 3.2 退款/撤销

初始化退款请求时，应用程序中无需输入密码

specific parameters
| 参数名称 | 是否必填 | 参数类型 | 描述 |
|---|---|---|---|
|orderId|是|String|QFPay交易编号|
| refund_amount | 否 | String| 默认退款金额为订单可退款金额，<br/>支持部分退款 |
|allow_modify_flag|否| Integer| 0：不允许修改退款金额（默认值）<br/> 1：允许修改退款金额 |

:::note
> 对于卡支付、银联卡、运通卡，当日退款金额必须为“全额”
:::

```json
{
  "content": {
    "allow_modify_flag": 1,
    "func_type": 1002,
    "orderId": "order_id",
    "refund_amount": "0.05"
  },
  "digest": "9C8E9FB05C7C24B6CA04EBFA1263EF41"
}

```

### 3.3 打印小票

```json
{
    "content": {"orderId": "12345678","func_type": 3001},
    "digest":"79fd145311d54d03e4e685d50f15dd7f"
}
```

### 3.4 打印交易汇总

```json
{
    "content": {"func_type": 3002},
    "digest":"79fd145311d54d03e4e685d50f15dd7f"
}
```

### 3.5 根据订单id 查询交易信息
<!-- md:version 4.31.3 -->

```json
{
     "content": {"orderId": "12345678","func_type": 4001},
     "digest":"99CE8BF9C7304AC964522D10F51660B4"
}
```

### 3.6 取消交易或者退款请求
<!-- md:version 4.31.3 -->

```json
{
     "content": {"func_type": 5001},
     "digest":"99CE8BF9C7304AC964522D10F51660B4"
}
```

content：请求的数据信息
digest:content 数据的签名,按照字段顺序拼接成 字段=值 的形式，算签名,

## 生成签名

生成签名示例

```js
// original payload
content={"amt":100,"channel": "card_payment","func_type":1001,"out_trade_no":"456799999999"} 

// sorted keys in alphabetical ascending order
format_content={amt=100,channel='card_payment',func_type=1001,out_trade_no='456799999999'} 这种格式

// encryption
// !! if the value is empty, pass '' (empty string) instead
digest=md5(format_content + pos_key)
digest=(
  md5(
    {amt=100,channel='card_payment',func_type=1001,out_trade_no='456799999999'}f46b1f08bec1f39104792cc79ec9aacd
  ) 
)

```

如果启用加密，则上述有效负载将在“content”处通过 AES 进行加密，并且“digest”将根据加密的有效负载计算。

示例

```json
{
    "content": "{func_type: 3002}",
    "digest":"79fd145311d54d03e4e685d50f15dd7f"
}
```

## 4. 字段描述

1、 func_type : :业务类型
    （1）1001 交易
    （2）1002 退款
    （3）3001 打印小票
    （4）3002 打印交易汇总
    （5）4001 查询交易信息
    （6）5001 取消交易或者退款请求

2、channel: payment method
    （1）、card_payment  刷卡交易
    （2）、wx            微信支付
    （3）、alipay        支付宝支付
    （4）、payme         payme支付
    （5）、union         银联支付
    （6）、fps           FPS支付
    （7）、octopus       八达通支付
    （8）、unionpay_card     银联卡支付
    （9）、amex_card     美国运通卡

3、amt: 交易金额

4、orderId: 交易订单号和 `out_trade_no` 相同

## 5. Response format

```json
{\"respcd\": \"6000\",\"data\": \"{"aaaaaa"}\",\"respmsg\": \"xxxxxxxxxx\",\"resperr\":\"xxxxxxxxxx\"}
```

```plaintext
1. respcd: response code
    （1）、"4003"，请求拒绝，pos-key 不匹配
    （2）、"4004"，请求方式不对，需要时post请求
    （3）、"4005"，其他报错
    （4）、"4006"，请求参数不正确  
    （5）、"4007"，用户未登录
    （6）、"5001"，解密失败
    （7）、"6000"  请求成功
    （8）、"6001"  用户取消  
    （9）、"6002"  请求错误

2. respmsg：响应的信息
3. resperr：响应的错误信息
4. data:交易或者退款返回的数据，
    （1）交易返回数据字段：
            respcd;请求响应码
            resmsg;请求信息
            reserr;错误信息
            mchntnm;商户名称
            sysdtm;系统时间
            userid;userid
            busicd;业务代码
            txamt;金额
            txcurrcd;貨幣
            chnlsn;通道序列號
            paydtm;支付时间
            udid;用户id
            syssn;流水号
            clisn;客戶端序列號
            out_trade_no；外部订单号
            cardscheme；卡组织，例如：VISA
    （2）退款返回数据字段：
            respcd;请求响应码
            resmsg;请求信息
            reserr;错误信息
            sysdtm;系统时间
            paydtm;支付时间
            txcurrcd;貨幣
            txdtm;时间
            orig_syssn;原生订单号
            out_trade_no;外部订单号
            syssn;系统流水号
            chnlsn;通道序列號
            txamt;退款金额
            originTxamt;原订单金额

    （3）查询交易信息返回字段：
            server_time;服务器时间
            cancel;cancel状态
            clisn;客戶端序列號
            opuid; 操作员id
            prepay_amt;支付金额
            syssn;系统流水号
            tradetp;交易方式
            sysdtm;系统时间
            txcurrcd;貨幣
            origssn;原始流水号
            customer_source;消费者来源
            opuser;操作员
            nickname;用户名
            allow_refund_amt;允许退款金额
            desc;描述信息
            txamt;交易金额
            busicd;业务代码
            respcd;响应编码
            origbusicd;原业务代码
            chnlsn;通道序列號
            cardscheme；卡组织，例如：VISA
```

## 6. USB 的数据传输方式

 1. 通过USB接口连接POS设备.
 2. 按照USB 通信协议构造数据。详情见第九条："收银机& Pos 通信协议"。
 3. 数据响应, 收到的数据需要按照通信协议解析，然后获取到数据报文，通过AES解密, 得到响应的数据.

## 7. HTTP 数据传输方式

 1. Http 数据传输方式需要先查看POS 的ip ,http 方式的端口默认为 9001.
 2. 数据报文格式:
     (1) 将数据报文通过 AES 加密
     (2) 通过http Post请求 发起请求
 3. 请求的api
     (1) 交易: /api/pos/trade
     (2) 退款: /api/pos/cancel
     (3) 打印小票: /api/pos/print_receipt
     (4) 打印交易汇总: /api/pos/transaction_info
     (4) 查询交易信息: /api/pos/query_transaction
     (5) 取消交易或者退款请求：/api/pos/cancel_request 
 4. 请求头需要设置 请求的Content-type格式为：application/json
 5. 请求的结果需要 AES 解密得到响应的报文数据

## 8. TCP 数据传输方式

1. Http 数据传输方式需要先查看POS 的ip ,http 方式的端口默认为 9002.
2. 收银机 通过socket连接 到POS
3. 通过socket
传输数据，数据格式为数据报文 AES 加密后的加密数据，
4. 请求的结果需要AES 解密得到响应的报文数据

## 9. 收银机& Pos 通信协议（USB）

### 9.1 产品应用场景

收银机与智能Pos设备通过串口或蓝牙连接进行通信，实现收银机通过智能Pos上的好近商户App进行收款、撤销交易操作。

### 9.2 通信方式

串口

通过智能Pos设备上Micor USB接口或借用底座转成USB Host模式，由USB转串口线连接到收银机。

通信要求, 稳定, 安全, 可扩展

### 9.3 报文格式

| 字段 | 内容 | 说明 | 长度 |
| --- | --- | --- | --- |
| 开始字符 | 0x2f6e | 标识一个报文的开始 | 2字节 |
| 协议版本 | 0x01 | 协议版本号(固定) | 1字节 |
| 报文类型 | 0x10<br/>0x20<br/>0x30 | 请求报文/响应正常报文/响应错误报文 | 1字节 |
| 报文编号 | 0x01 ~ 0x7f | 对报文的编号，用于报文应答或分包合并。<br/>每次加1，循环使用 | 1字节 |
| 报文总长度 |   | 报文中各个字段内容(开始字符 ~ 结束字符)的字节长度的总和 | 2字节 |
| 报文数据域长度 |   | 报文包含的有效数据的长度，不包含报文其他部分 | 2字节 |
| 数据域 |   | 有效通信数据，utf-8编码| 不固定 |
| 结束字符 | 0x2f6e | 标识一个报文的结束 | 2字节 |

### 9.4 详细说明

#### 报文开始结束字符

为了避免在通信过程中，由于硬件原因发生一个数据报文被拆分成多个数据块的情况，导致无法正常获取报文内容。发送方在发送报文时，为每个报文添加开始和结束字符(0x2f6e)。

接收方收到报文后，会检查报文的前两个字节是否为开始字符(0x2f6e)，如果不是则响应错误报文(0x31)。否则继续遍历后续字节，直至结束字符。

:::warning
    *0x2f6e代表ASCII编码的 `/n` 的十六进制表示*
:::

#### 报文错误类型

| 错误报文类型 | 错误说明 |
| --- | --- |
| 0x30 | 未知错误类型 |
| 0x31 | 报文格式错误 |
| 0x32 | 报文校验错误 |
| 0x33 | 数据域解密错误 |
| 0x34 | 数据域格式错误 |
| 0x35 | 数据分包错误 |

#### 请求和应答

当接收方收到请求报文(报文类型为0x10)后，需要回送响应报文，来告知请求方报文的接收结果。如果校验成功响应报文类型为0x20，如果校验失败响应报文类型为0x32，响应报文编号与请求报文编号相同。

#### 响应超时

应答报文超时时间为*1000*ms，超时后认为请求报文发送失败，设备连接断开。

#### 报文长度

1. 报文总长度 :从开始字符到结束字符，所有报文字段字节长度的总和，便于多个包数据提取。
2. 报文”数据域“字段的字节长度。
3. 由于报文数据长度字段占2字节，所以报文中有效数据长度不得超过65536字节。
4. 单个报文有效数据长度建议不超过1024字节，数据过大应分包发送。

##### 数据包拆分与合并

发送方分包发送时，多个包的报文编号相同，报文数据长度为总长度。
接收方接收到报文数据长度大于实际数据长度时，需等待继续接收后续相同报文编号的报文，直到报文数据长度等于实际数据长度，然后再发送响应报文。

接收方等待接收多个包的超时时间为*500*ms，超时后则丢弃之前接收的报文。如果后续又接收到相同编号的报文，则发送错误(0x35)响应报文。

#### 数据加密

报文发送方和接收方要对有效数据采用AES算法进行加解密，秘钥由服务提供方分配。

秘钥长度16字节128位

秘钥偏移量 *****

算法模式 CBC(Cipher Block Chaining) 加密块链

补码方式 PKCS5Padding

#### 串口芯片设置

波特率：9600
停止位：1
校验位：0
数据位：8
流控：关闭

##### 支持的USB转串口线芯片类型

[comment]: <> (這部分不太清晰，為什麼PL2303是唯一支持/ 穩定程度和價格一致但是最不被推薦？)
PL2303HXD  支持
CH340       未支持
FT232       未支持

三个常用的芯片稳定程度和价格是一致的，FT232>CH340>PL2303

#### 示例数据

假设数据域为：

`{\"content\":\"{\\\"amt\\\":100,\\\"channel\\\":\\\"wx\\\",\\\"funcType\\\":1,\\\"mode\\\":1}\",\"digest\":\"2f0c4683e25a7b9407265033070e9034\"}`

完整数据报文（16进制）为：
`2f6e011001007f00747b22636f6e74656e74223a227b5c22616d745c223a3130302c5c226368616e6e656c5c223a5c2277785c222c5c2266756e63547970655c223a312c5c226d6f64655c223a317d222c22646967657374223a223266306334363833653235613762393430373236353033333037306539303334227d2f6e`
