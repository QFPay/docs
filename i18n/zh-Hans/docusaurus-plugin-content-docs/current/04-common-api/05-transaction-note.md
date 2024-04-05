# 订单备注

:::note
这个 API 端点仅适用于未传入 `mchid` 的商户
:::

商户可以使用该接口为交易添加备注. 该备注值将显示在商户管理系统(MMS)和交易报告中.

## 订单备注API端点

```plaintext
请求头部:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

请求本体:

{
  code=A6A49A6******DFE94EA95032&note=add_note&syssn=20190722000200020081075691
}
```

> 上述指令会返回结构如下的JSON代码:

```json
{
  "resperr": "Success",
  "respcd": 0000,
  "respmsg": "",
  "data":
{
  "syssn": "20190722000200020081084545"
}
}
```

### HTTP请求

`POST ../trade/v1/add_note`

### 请求参数

|参数名称|参数编码|是否必须|参数类型|描述|
|----    |---|----- |-----   |----- |
|商户App编码| `code`   |是   |String(32)   | 由QFPay 提供 |
|订单号 | `syssn` | 是 |String(40) | 交易成功后QFPay 返回的订单号 |
|备注信息| `note`   |是   |String(200）   | 备注值  |

### 响应参数

|参数编码|参数类型| 参数名称 |描述|
|----    |---|-----   |-----   |
| `resperr`   |String(128)   |下单结果描述   |  |
| `respmsg`   |String(128)  |响应错误信息   |    |
| `respcd`    |String(4)  |返回码   |   0000 = 接口调用成功 |
| `syssn`     |String(40)   |订单号  | 交易成功后QFPay 返回的订单号 |
