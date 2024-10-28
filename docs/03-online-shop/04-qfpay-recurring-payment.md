import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Recurring Payment

<!-- <sub><sup>last modified 20230816<sup><sub> -->

Create and manage subscriptions and recurring payment

## How subscription works

### API Environment

| Environment Name | URL                             |
| ---------------- | ------------------------------- |
| Sandbox          | `https://openapi-int.qfapi.com` |

### API Resources

For build and manage subscriptions, the following API resources are required:

| API Resources                                 |
| --------------------------------------------- |
| [Customer](#customer)                         |
| [Payment Token](/docs/online-shop/payment-intent) |
| [Payment Token ../common-api/payment-intent.md](../common-api/payment-intent.md) |
| [Payment Token ../common-api/payment-intent](../common-api/payment-intent) |
| [Payment Token /common-api/payment-intent.md](/common-api/payment-intent.md) |
| [Payment Token /common-api/payment-intent](/common-api/payment-intent) |
| [Payment Token /docs/common-api/payment-intent.md](/docs/common-api/payment-intent.md) |
| [Payment Token /docs/common-api/payment-intent](/docs/common-api/payment-intent) |
| [Payment Token ../../common-api/payment-intent.md](../../common-api/payment-intent.md) |
| [Payment Token ../../common-api/payment-intent](../../common-api/payment-intent) |
| [Product](#product)                           |
| [Subscription](#subscription)                 |

### Create subscription steps

![enter image description here](http:////www.plantuml.com/plantuml/png/fLJDZYCr4BxxAKfp9n8iS9W3MYq8YTkYvRPQeOfTdPXnbpqkUqBpzCJT7NSxz92ivkPqVLN-VifvBmbZohrJg9EFeBCatrC4b7gUI-UJFY8dGAbdfGB6PBKDfT3_AOEKyaF5oY29-eS6zjm574ROxxz-n64JSmeZu5pkYHCSCD49XnPZHJB54VVRTFo0_FIWr27w7E3RtSVeJTP9OKwUSx-dg2gnRtwQw3w2ZeI98CpWyMifZpIlo-3tVv5E4EavaoJ5FX54UpWcbIAoe4xMCs3lCxUVT8wHM0-As41fKvCF2v58AKUkDrbJe1Srt-r-hd7S8wU6jwsdrlz7K8KmzgHwlxUE5FLedJeVdUK3e36HH6vgggDQKUzsbu3_y4_4yDbsPGmCb6QUvijQRXspN60vv3COem7BdT-zfZUD5xHYuMJJ4S94eL6EqHozCxDs63y0dwVJty760KmPUUq2g4RchPXdvHCnM-WNlEsinh8mQv--tttAUz7HXbAvuOXCq3s11D9b7WI7_8en4tmQlBK4pae2twss4f0DF6VaPDFGIBwMDEQ98JYhSU_eIpLC3zgHGC28FIMAjnT85lrbykmBoi3w63txB40l9SNh_f3bs7RFYpNZYPkD_67NsIW9Bam_B_hO9elE_aFGGcRLRrxKvOAjbHopHBVox55Tcs8JnMbtgfsB7wVmU9bRSqQNuDqldyRVDf81ZKBg52ghwdz1wICwHtoW1Hz9WcUvZktkjkh1nR3IQMmaNRRegZtWWHfdhKWkBTfpsSqMhgRgmgaEHZPhVki_QMl-4yiBHTiDA-iak-fWOsyBhPYAtVAr7RjbumQAd11qqOwS7OcqkRrzFXlrbI-iosp0K8c1pDrFiRZ-GjilySVTX_RVOls-dFS1CYVhOBz6GLby7q4ZQtAEJ1lGH70YkvbA8-DkfPNwUsAJU_Sl)

### Subscription state

[state diagram](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Recurring_payment.drawio#R5Vxbc5s4FP41mdl9cIY7%2bDFxku7OtLuZpp3dPu0oRrFpMXgENHZ//QqQAEnYxkGA6uYllpCE0NH5zlW6Mheb3TsEtusPsQ/DK0Pzd1fm3ZWB/xwd/8tr9mWNPjfNsmaFAp/U1RVPwQ9IKjVSmwU%2bTJiGaRyHabBlK5dxFMFlytQBhOJXttlLHLJv3YIVFCqeliAUa/8J/HRd1nqGW9f/AYPVmr5Zd%2bblkw2gjcmXJGvgx6%2bNKvP%2bylygOE7LX5vdAob56tF1Kfs9HHhaTQzBKO3Swd59/WT/vcmSb/67J%2bP2fmW9%2bDOTfEeS7ukXQx8vACnGKF3HqzgC4X1de4viLPJhPqyGS3Wb93G8xZU6rvwK03RPqAmyNMZV63QTkqd4xmj/b7PwJR/s2qbFux0ZvCztSUn8ZLIKSZyhJTzynXTrALSC6ZF2nl02zBeh8Qayou9gvIF4QrgBgiFIg%2b/sLgFks62qdlXXxzjAczY0whm2R3YF4QvL0tghypmSXjVV8Y/GNOqqgtbn0N0rX/cdhBn5hocAJfkMFwiCFFO3bV%2b8B8%2bYwRlagjBYRfj3EtMEIlzxHaI0wAx0Qx5sAt8vtw1Mgh/guRgvp%2bY2/7jic%2b3bK/uulb5HN23%2bJrhrgwHyFobTGPKRXjPt2tI1nSGFUZZ6EnhGx9nTMjtC/PKSwEFIqwuUFUkZhhg/c5q8BGG4iMMYE%2b4uSVH8DZJSk8QH2U4gwMGFdjVuvxuE0V5rUDVJk3UDT03t8MIzC3f2KpmTAp82FvB5HYFP18cBPtNmN4I57wZ8NwiBfaMZAY/D76EbjAPYes%2bUI8plPUfgvUew38BiYi8gCJWGVcoSUmDVcJjl1%2bWAqs51GRBFLZUUI1cBgDBkA0Q//LaPsNpTtlzCJFGZ1yxZvKZda54U5mLxcjYap4maqEA3tI43z1kiRxUxdVYCYd1kYlVkWhusoX18YbBFug3W1QjTvZF0EY/d8zZP4oGNMENUF/6Ki8WlQAYiv4Cz52SJgm0axFG%2bLLttgNTWJGQaaLo1Z5Gpp4E2PKKZc5V0h1OqA9wFaQMHcOlL40ndKS%2bMCALDYMC5ZoRlcMKCQMagZgT1BbU4ZyodR1nep5tfCu%2bbjs46Z0zVeV8X3S9/Rst4sw1hCgWynUOqNMeBBkwUnZ6TOMxSeIOWBBeK2rqUk9IHyboCltd1kMKnLSiY9BWBrSSlyub9O6JSpVstWhXv95SmVVlKGXADeraNjoBqqWXAWaIB95FM4EF1T4kl0XqzWOWmJ8DRwBvrfTHZ/sOhn623Um0iU0afnun0uVJMZxsC030AUQbyjksQLfPorbJcZx%2bSSm/RLLS5zXJeTw/l8LzlTBOxoNZB0za4Nqip0G4eNBjSGMu50JkjpYvBdgjmArxVGoDkOEdlLND3EGv5oWt7XTva3rGPNR/G/nGoeG2qBssMoSBale4RhVHKkRlFsbS5I0Uh4FwoVCwNj1qu6M0dE7VI5KSTU0NhNcIdJjp7LtjoJocG2nHwqFzr7e2HQQ%2bXMmCNHoUDNa0cqJ%2bCDTbFtWyrMIxQvpETjHVd1o3S14dKvWMuOypVL0dws4iK7M2y%2bJLLdbFwvGR29LC49mGy9otbiZG72tX136EoxeXQg3N52drULi/bmUTWji825x3Fpu0OIjZFuchlt3njxhHpejQYcVEY821etMvhP27NxYTCkR3O00b9zuQ%2bqiFTbbnhph4g6keN358ty4hCPGOJJrCIyidsVL4K2jsh/sDbZ4R/rfJfvy2yJMXzQfnLot8V1jnpDpaSlGRRW6FvWhLvIOfUmeF0zPnE4vS8CFK7o25yhp4Pc6DibDeZyYkLy2IC%2bac76NoIkX9DxJvP0RYEFyzGZ6bGZWq3HA0YV5JTi0kNSX7KZ97O%2bO5QnN/dZ%2bWMo3zPOEat8jtPaN%2bnB9K4gcq16e%2by580Fw3OGhxZXtNYfQZaIDhN19BHKh1L0EcdmYUbOiQTbZLWT0Rxg9k91fmlca4PqHBNE598ECFNoGrYYY/uJMgGkxdgwMJjKR/7nSh0QGM6vRzPUJjAq%2bnl%2bxGDEIyjSde%2byCw5ICJq7YU/uAXcFSoisUx1%2bblAiWYNt/hxG/lMK0vzp4aPREtbO41dOWLhRjyC5v0iyLA2DThA56EcfMat8QQJtF%2bwaMHg7aWp4cacWxMZIkpja7spk03HHcExn3AibK0bYPsIk2yhtPUu9JcV2DIYCM%2bW1Zs%2bbhFmrzDPMGk1jFyvxR5PPcOERogB/db4/%2brrnR7rNw%2bKvMRooy5V/j%2bEcz3I9NK9BTWpPBIlPKCgs6vtIFNPqIAXlFEnHdekJQElHWkawr5U6tTJcjrzRVftVJGhHz%2bMfdNgb5hgxOVH3Jmx9qXq35XBoa3VUvAezT71fJLPN6%2bq5li/ge9GHXuJ1kkcUEnr08g0pQs8ze17CM4I%2b/Itc9dmZh%2bRfedcP48QD0QLBpF6EZOunEy9G9ULOx16BmcHlcM9FQTfuVVCaqGyoJPk656Iwd8lQu1h2nLdzvIhapYOnohj8ASn%2bdssDKSSnR6qY882WtfSsc80Q9iq9wQHu1iBL1L5FuOY1KRqAQU%2btUtL30wdoagDbYcBzmm1Xl7alB12MlTPTudOJZtfw5RvgHxfrm95LmtUX5pv3/wM=)
All subscription state will be pushed to merchant's backend service once triggered

## Common API response parameter

| Attribute   | Type   | Description                                |
| ----------- | ------ | ------------------------------------------ |
| `respcd`    | String | Return code, 0000 = API call succeeded     |
| `resperr`   | String | result description                         |
| `respmsg`   | String | information description                    |
| `data`      | Object | result, JSON object or list of JSON object |

## Customer

Customer is an API resource for merchant to store customer's information. This object can be used in PaymentToken, Subscription APIs

### Create customer object

**Endpoint** : `/customer/v1/create`

**Method** : `POST`

#### Request parameters

| Attribute         | Type   | Mandatory | Description                                     |
| ----------------- | ------ | --------- | ----------------------------------------------- |
| `name`            | String | No        | customer name                                   |
| `phone`           | String | No        | customer contact no.                            |
| `email`           | String | No        | customer email address                          |
| `billing_address` | String | No        | customer billing address, stringify JSON object |

#### Response parameters in **data** field

| Attribute         | Type   | Description                     |
| ----------------- | ------ | ------------------------------- |
| `customer_id`     | String | unqiue customer ID in QF system |
| `name`            | String | customer name                   |
| `phone`           | String | customer contact no.            |
| `email`           | String | customer email address          |
| `billing_address` | JSON   | customer billing address        |

### Update customer object

**Endpoint** : `/customer/v1/update`

**Method** : `POST`

Request parameters:

| Attribute         | Type   | Mandatory | Description                     |
| ----------------- | ------ | --------- | ------------------------------- |
| `customer_id`     | String | Yes       | unqiue customer ID in QF system |
| `name`            | String | No        | customer name                   |
| `phone`           | String | No        | customer contact no.            |
| `email`           | String | No        | customer email address          |
| `billing_address` | JSON   | No        | customer billing address        |

Response parameters in **data** field:

| Attribute         | Type   | Description                     |
| ----------------- | ------ | ------------------------------- |
| `customer_id`     | String | unqiue customer ID in QF system |
| `name`            | String | customer name                   |
| `phone`           | String | customer contact no.            |
| `email`           | String | customer email address          |
| `billing_address` | JSON   | customer billing address        |

### Inquiry customer object

**Endpoint** : `/customer/v1/query`

**Method** : `POST`

#### Request parameters

| Attribute     | Type   | Mandatory | Description                              |
| ------------- | ------ | --------- | ---------------------------------------- |
| `customer_id` | String | No        | unqiue customer Id in QF system          |
| `name`        | String | No        | customer name                            |
| `phone`       | String | No        | customer contact no.                     |
| `email`       | String | No        | customer email address                   |
| `page`        | Int    | No        | default value = 1                        |
| `page_size`   | Int    | No        | default value = 10, the max value is 100 |

#### Response parameters in **data** field

Array of customer objects contianing the following attributes

| Attribute     | Type   | Description                     |
| ------------- | ------ | ------------------------------- |
| `customer_id` | String | unqiue customer ID in QF system |
| `name`        | String | customer name                   |
| `phone`       | String | customer contact no.            |
| `email`       | String | customer email address          |

### Delete customer object

permanently delete customer object, cannot be undo. Any subscription plan associated with the deleted customer will be cancelled.

**Endpoint** : `/customer/v1/delete`

**Method** : `POST`

#### Request parameters

| Attribute     | Type   | Mandatory | Description                             |
| ------------- | ------ | --------- | --------------------------------------- |
| `customer_id` | String | Yes       | unique customer identifier in QF system |

## Product

Products are the model for goods or services that merchants will provide to the customers. It defines transaction amount, transaction currency and billing cycles(if applicable). This object will be used in subscription API.

### Create product object

create a new product

**Endpoint** : `/product/v1/create`

**Method** : `POST`

#### Request parameters

| Attribute        | Type   | Mandatory | Description                                                                         |
| ---------------- | ------ | --------- | ----------------------------------------------------------------------------------- |
| `name`           | String | Yes       | product name that displays to the customer                                          |
| `type`           | String | No        | default value=onetime, possible values: onetime, recurring                          |
| `description`    | String | No        | product descritpion                                                                 |
| `txamt`          | Int    | Yes       | transaction amount, e.g. $1=100                                                     |
| `txcurrcd`       | String | Yes       | transaction currency, e.g. HKD                                                      |
| `interval`       | String | No        | possible values: monthly, yearly, mandatory for recurring product                   |
| `interval_count` | Int    | No        | interval between 2 charges, maximum 1 year allowed, mandatory for recurring product |
| `usage_type`     | String | No        | default value=licensed, possible values: licensed                                   |

#### Response parameters in **data** field

| Attribute        | Type   | Description                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| `product_id`     | String | unique identifer generated in QF system                    |
| `name`           | String | product name that displays to the customer                 |
| `type`           | String | default value=onetime, possible values: onetime, recurring |
| `description`    | String | product descritpion                                        |
| `txamt`          | Int    | transaction amount, e.g. $1=100                            |
| `txcurrcd`       | String | transaction currency, e.g. HKD                             |
| `interval`       | String | possible values: monthly, yearly                           |
| `interval_count` | Int    | interval between 2 charges                                 |
| `usage_type`     | String | default value=licensed, possible values: licensed          |

### Update product object

update current product information

**Endpoint** : `/product/v1/update`

**Method** : `POST`

#### Request parameters

| Attribute     | Type   | Mandatory | Description                                |
| ------------- | ------ | --------- | ------------------------------------------ |
| `product_id`  | String | Yes       | unique identifier generated in QF system   |
| `name`        | String | No        | product name that displays to the customer |
| `description` | String | No        | product descritpion                        |

#### Response parameters in **data** field

| Attribute        | Type   | Description                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| `product_id`     | String | unique product identifer generated in QF system            |
| `name`           | String | product name that displays to the customer                 |
| `type`           | String | default value=onetime, possible values: onetime, recurring |
| `description`    | String | product descritpion                                        |
| `txamt`          | Int    | transaction amount, e.g. $1=100                            |
| `txcurrcd`       | String | transaction currency, e.g. HKD                             |
| `interval`       | String | possible values: monthly, yearly                           |
| `interval_count` | Int    | interval between 2 charges                                 |
| `usage_type`     | String | default value=licensed, possible values: licensed          |

### Inquiry product object

**Endpoint** : `/product/v1/create`

**Method** : `POST`

#### Request parameters

| Attribute     | Type   | Mandatory | Description                                      |
| ------------- | ------ | --------- | ------------------------------------------------ |
| `product_id`  | String | No        | unique product identifier generated in QF system |
| `name`        | String | No        | product name that displays to the customer       |
| `description` | String | No        | product descritpion                              |
| `txcurrcd`    | String | No        | transaction currency                             |
| `interval`    | String | No        | possible values: monthly,yearly                  |
| `page`        | Int    | No        | page no., default value=1                        |
| `page_size`   | Int    | No        | page size, default value=10,max value=100        |

#### Response parameters in **data** field

Array of product objects containing the following attributes:

| Attribute        | Type   | Description                                |
| ---------------- | ------ | ------------------------------------------ |
| `product_id`     | String | unique identifer generated in QF system    |
| `name`           | String | product name that displays to the customer |
| `type`           | String | possible values: onetime, recurring        |
| `description`    | String | product descritpion                        |
| `txamt`          | Int    | transaction amount, e.g. $1=100            |
| `txcurrcd`       | String | transaction currency, e.g. HKD             |
| `interval`       | String | possible values: monthly, yearly           |
| `interval_count` | Int    | interval between 2 charges                 |
| `usage_type`     | String | possible values: licensed                  |

### Delete product object

:::note
only can delete product that is not assoicated with any subscription object
:::

**Endpoint** : `/product/v1/delete`

**Method** : `POST`

#### Request parameters

| Attribute    | Type   | Mandatory | Description                                      |
| ------------ | ------ | --------- | ------------------------------------------------ |
| `product_id` | String | No        | unique product identifier generated in QF system |

## Subscription

QFPay automatically charges the customers on every billing cycle based on the product with the provided Payment Token until the subscription is finished or cancelled. Before create subscription, **payment token**, **customer** and **product** must be created.

### Create subscription object

**Endpoint** : `/subscription/v1/create`

**Method** : `POST`

#### Request parameters

| Attribute              | Type   | Mandatory | Description                                                          |
| ---------------------- | ------ | --------- | -------------------------------------------------------------------- |
| `customer_id`          | String | Yes       | unique customer identifier in QF system                              |
| `token_id`             | String | Yes       | unique payment token identifier in QF system                         |
| `products`             | Object | Yes       | list of unique product identifier in QF system and quantity          |
| `total_billing_cycles` | Int    | No        | the total billing cycles of the subscirption, infinity if null value |
| `start_time`           | String | No        | the time subscription will start to work, the first payment will be  |

parameters in products:

| Attribute    | Type   | Mandatory | Description                               |
| ------------ | ------ | --------- | ----------------------------------------- |
| `product_id` | String | Yes       | unique production identifier in QF system |
| `quantity`   | Int    | No        | default value=1                           |

#### Response parameters in **data** field

| Attribute              | Type   | Description                                                                 |
| ---------------------- | ------ | --------------------------------------------------------------------------- |
| `customer_id`          | String | unique customer identifier in QF system                                     |
| `token_id`             | String | unique payment token identifier in QF system                                |
| `products`             | Object | list of unique product identifier in QF system and quantity                 |
| `total_billing_cycles` | Int    | the total billing cycles of the subscirption, infinity cycles if null value |
| `start_time`           | String | the time subscription will start to work                                    |

### Update subscription object

update current subscription

**Endpoint** : `/subscription/v1/update`

**Method** : `POST`

#### Request parameters

| Attribute              | Type   | Mandatory | Description                                                                                   |
| ---------------------- | ------ | --------- | --------------------------------------------------------------------------------------------- |
| `subscription_id`      | String | Yes       | unique subscription identifier in QF system                                                   |
| `total_billing_cycles` | Int    | No        | the total billing cycles of the subscirption, infinity if null value                          |
| `start_time`           | String | No        | the time that subscription will start to work, it will be the first subscription payment time |
| `token_id`             | String | No        | unique payment token identifier in QF system                                                  |
| `products`             | Object | No        | list of unique product identifier in QF system and quantity                                   |

#### Response parameters in **data** field

| Attribute              | Type   | Description                                                                                   |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `subscription_id`      | String | unique subscription identifier in QF system                                                   |
| `customer_id`          | String | unique customer identifier in QF system                                                       |
| `token_id`             | String | unique payment token identifier in QF system                                                  |
| `products`             | Object | list of unique product identifier in QF system and quantity                                   |
| `total_billing_cycles` | Int    | the total billing cycles of the subscirption, infinity cycles if null value                   |
| `start_time`           | String | the time that subscription will start to work, it will be the first subscription payment time |
| `state`                | String | subscription state                                                                            |

### Inquiry subscription object

**Endpoint** : `/subscription/v1/query`

**Method** : `POST`

#### Request parameters

| Attribute         | Type   | Mandatory | Description                                      |
| ----------------- | ------ | --------- | ------------------------------------------------ |
| `page`            | Int    | No        | page no.,default value=1                         |
| `page_size`       | Int    | No        | page size, default value=10, max value=100       |
| `subscritpion_id` | String | No        | unique subscription identifier in QF system      |
| `customer_id`     | String | No        | unique customer identifier in QF system          |
| `token_id`        | String | No        | unique payment otken identifier in QF system     |
| `state`           | String | No        | subscription state, e.g. incompelete, active,... |

#### Response parameters in **data** field

Array of subscription object containing the following attributes:

| Attribute                     | Type   | Description                                                                                   |
| ----------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `subscription_id`             | String | unique subscription identifier in QF system                                                   |
| `customer_id`                 | String | unique customer identifier in QF system                                                       |
| `token_id`                    | String | unique payment token identifier in QF system                                                  |
| `products`                    | Object | list of unique product identifier in QF system and quantity                                   |
| `total_billing_cycles`        | Int    | the total billing cycles of the subscirption, infinity cycles if null value                   |
| `state`                       | String | subscription state                                                                            |
| `next_billing_time`           | String | next fund deduct time                                                                         |
| `last_billing_time`           | String | previous fund deduct time                                                                     |
| `completed_billing_iteration` | Int    | how many billing cycles completed                                                             |
| `start_time`                  | String | the time that subscription will start to work, it will be the first subscription payment time |

### Cancel subscription object

cancel customer's subscription immediately

**Endpoint** : `/subscription/v1/cancel`

**Method** : `POST`

#### Request parameters

| Attribute         | Type   | Mandatory | Description                      |
| ----------------- | ------ | --------- | -------------------------------- |
| `subscription_id` | String | Yes       | unique ID of subscription object |

### Query subscription orders

query target subscription's orders

**Endpoint** : `/subscription/billing_order/v1/list`

**Method** : `POST`

#### Request parameters

| Attribute         | Type   | Mandatory | Description                                      |
| ----------------- | ------ | --------- | ------------------------------------------------ |
| `subscription_id` | String | Yes       | unique ID of subscription object                 |
| `page`            | Int    | No        | page no.,default value=1                         |
| `page_size`       | Int    | No        | page size, default value=10, max value=100       |

#### Response parameters in **data** field

Array of subscription order object containing the following attributes:

| Attribute                     | Type   | Description                                                                                   |
| ----------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `subscription_order_id`       | String | subscription order identifier, format: `sub_ord_` + id value of subscription_id + 4 digit order sequence number (iteration of this subscription) e.g. `sub_ord_a360f06exxxxxxx4c3a_0001` stands for the first payment order for subscription `sub_a360f06exxxxxxx4c3a` |
| `subscription_id`             | String | unique subscription identifier in QF system, format: `sub_xxxxxxxx` e.g. `sub_a360f06exxxxxxx4c3a` |
| `trigger_by`                  | String | who triggered this order payment, QF system is `auto`, Manual charge is `manual`                   |
| `sequence_no`                 | Int    | the iteration of this order in the subscription plan, e.g. 2                                       |

### Manaul charge a subscription transaction

Use API to charge a subscription immediately and the behavior is same as an auto recurrent payment.

**Endpoint** : `/subscription/v1/charge`

**Method** : POST

#### Request parameters

| Attribute         | Type   | Mandatory | Description                      |
| ----------------- | ------ | --------- | -------------------------------- |
| subscription_id | String | Yes     | unique ID of subscription object |
| billing_time    | String | No      | the merchant set new billing time in the remaining iterations, default is the manual charge date. |

## Recurring payment actions

### Ansynchronous notification

Notifications are available for both payment token and subscription events and states change

Upon successful payment token creation or subscription activation, QFPay API will send an asynchronous notification message to the URL that defined by the merchant

::: note
To configure notification address, please send the address as well as merchant and store information via email to technical.support@qfpay.com
:::

Format: JSON

#### Payment Token

|Attribute| Descritpion |
|--|--|
|userid | SID  |
|notify_type| notification type, payment_token |
|event| token event|
|tokenid| payment token id |
|token_expiry_date| token expiry date|
|cardcd| card no.|
|card_scheme| card scheme, e.g. VISA|
|respcd | response code, e.g. 0000 (success case)|
|respmsg| response message, e.g. success|
|sysdtm| event trigger system time|
|customer_id| customer id if available|
|token_reason| tokenization reason|
|token_reference| tokenization reference in system|

example:

```json
{
    "respmsg": "",
    "card_scheme": "ECMC_DEBIT",
    "cardcd": "5200****1096",
    "tokenid": "tk_6a699aae75094caeb066f****988daa32de",
    "respcd": "0000",
    "token_expiry_date": "2024-04-30 00:00:00",
    "sysdtm": "2024-04-29 15:37:17",
    "notify_type": "payment_token",
    "event": "CONFLICT"
}
```

#### Subscription state change

Available when a subscription state is changed

| Attribute        | Descritpion                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| notify_type      | notification type，subscription                                               |
| subscription_id  | unique subscription identifier, format: `sub_xxxxxxxx` |
| state            | subscription state, e.g. COMPLETED, ACTIVE                                         |
| sysdtm           | system time of state change                                                        |

example:

```json 
{
  "state": "COMPLETED",
  "sysdtm": "2024-04-24 15:19:39",
  "notify_type": "subscription",
  "subscription_id": "sub_e51bb914919*****f6b0fe36d"
}
```

#### Subscription payment result

Available when a subscription order payment result is received

| Attribute             | Descritpion                                                       |
| --------------------- | ----------------------------------------------------------------- |
| notify_type           | notification type, `subscription_payment`                         |
| subscription_id       | unique subscription identifier, format: `sub_xxxxxxxx` e.g. `sub_a360f06exxxxxxx4c3a`|
| subscription_order_id | subscription order identifier, format: `sub_ord_` + id value of subscription_id + 4 digit order sequence number (iteration of this subscription) e.g. `sub_ord_a360f06exxxxxxx4c3a_0001` |
| respcd                | response code, e.g. 0000 (success case)                           |
| respmsg               | response message, e.g. success                                    |
| syssn                 | transcation number                                                |
| txdtm                 | transcation time                                                  |
| txamt                 | transcation amount                                                |
| txcurrcd              | transcation currency                                              |
| customer_id           | unique customer identifier, format:`cust_xxxxxx`|
| product_id            | unique product identifier for all products, separated by comma, e.g.: `prod_xxxxxa23f30,prod_xxxxxbe342ac` |
| cardcd                | card no.                                                          |
| card_scheme           | only available for 0000, card scheme, e.g. VISA                   |
| current_iteration     | current iteration of this subscription, e.g. 1                    |

example:

```json 
{
  "txcurrcd": "HKD",
  "reason": "AUTHORISED",
  "cardcd": "",
  "subscription_order_id": "sub_ord_a360f06eb*****ad6aff24c3a",
  "product_id": "prod_8c838c17ddb043b9***11f1a85c30",
  "txdtm": "2024-04-24 15:19:37",
  "txamt": "300",
  "card_scheme": "VISA_DEBIT-SSL",
  "syssn": "20240424180500020000015704",
  "respcd": "0000",
  "subscription_id": "sub_e51bb914919***31d800f6b0fe36d",
  "customer_id": "cust_a9c0bcf2717f4***786a10e5f8f2",
  "notify_type": "subscription_payment",
  "current_iteration": "1",
}
```

