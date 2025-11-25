import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Customs Declaration

Customs Declaration APIs allow merchants to automatically submit required payment information to customs authorities for cross-border eCommerce transactions. This simplifies the clearance process and saves time for both merchants and consumers.

---

## 1. Push Customs Declaration

### Endpoint

```
POST /custom/v1/declare
```

### Request Parameters

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `trade_type` | Yes | String(8) | `weixin` or `alipay` |
| `syssn` | Yes | String(32) | QFPay transaction ID |
| `customs` | Yes | String(20) | Customs authority code, e.g. `SHANGHAI_ZS` |
| `mch_customs_no` | Yes | String(20) | Merchant’s customs registration number |
| `action_type` | No | String(256) | Declaration type (WeChat only): `"ADD"` for new, `"MODIFY"` for changes |
| `mch_customs_name` | No | String(256) | Merchant record name for Alipay, e.g. `jwyhanguo_card` |
| `out_request_no` | No | String(32) | Merchant order number (Alipay only) |
| `amount` | No | String(20) | Declaration amount (Alipay only), e.g. `2.00` |

### Sub-Order Fields (For Split or Modified Orders)

| Field | Conditional | Type | Description |
|-------|-------------|------|-------------|
| `sub_order_no` | C | String(64) | Required if the order is split |
| `fee_type` | C | String(8) | Currency (WeChat only, must be `CNY`) |
| `order_fee` | C | String(8) | Sub-order amount in CNY cents. Must equal `transport_fee + product_fee` |
| `product_fee` | C | String(8) | Product amount in CNY cents |
| `transport_fee` | C | String(8) | Shipping fee in CNY cents |

### Response

| Field | Type | Description |
|-------|------|-------------|
| `syssn` | String(40) | QFPay transaction number |
| `respcd` | String(4) | `0000` = Success, `1143/1145` = Query again, others = Failure. See [Transaction Status Codes](/docs/api-reference/status-codes) |
| `resperr` | String(128) | Error message |
| `respmsg` | String(128) | Additional message |
| `verify_department` | String | Verifying organisation |
| `verify_department_trade_id` | String | Trade ID assigned by customs |

---

## 2. Query Customs Declaration

### Endpoint

```
POST /custom/v1/query
GET /custom/v1/query
```

### Request Parameters

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `trade_type` | Yes | String(8) | `weixin` or `alipay` |
| `customs` | Yes | String(20) | Customs code, e.g. `SHANGHAI_ZS` |
| `syssn` | Yes | String(32) | QFPay transaction number |
| `sub_order_no` | No | String(40) | Required for split orders |

### Response

| Field | Type | Description |
|-------|------|-------------|
| `syssn` | String(40) | QFPay transaction number |
| `respcd` | String(4) | Response code |
| `resperr` | String(128) | Error message |
| `respmsg` | String(128) | Additional message |
| `data` | Array | Array of declaration results: includes `resperr`, `errmsg`, `sub_order_no`, `verify_department`, `verify_department_trade_id` |

---

## 3. Repush Customs Declaration

Use this when a declaration was lost on the customs end.

### Endpoint

```
POST /custom/v1/redeclare
```

### Request Parameters

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `trade_type` | Yes | String(8) | `weixin` or `alipay` |
| `customs` | Yes | String(20) | Customs code |
| `syssn` | Yes | String(32) | QFPay transaction number |
| `mch_customs_no` | Yes | String(20) | Merchant’s customs registration number |
| `sub_order_no` | No | String(40) | Required for split orders |

### Response

Same format as push declaration above.

---

For a complete list of return codes, see [Transaction Status Codes](/docs/api-reference/status-codes).