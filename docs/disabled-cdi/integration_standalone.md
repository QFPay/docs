# CDI Integration (standalone mode)

## Overview
<img src="/img/cdi_standalone_overview.jpeg" alt="CDI Standalone Flow" width="800"/>

- Data Consumer is given an account with `Data Consumer ID` to authenticate and access the APIs. For authentication, `code` and `key` are provided.

- For Consent Request, a API is provided for triggered in testing environment. An event will be sent to the registered notification URL once the consent is approved.
- For Data Request, a API is provided to request data based on a valid Consent ID. An event will be sent once the data request is approved.
- For Data Sharing, once the data generation is completed and uploaded to SFTP server. An event notification with data access info will be sent.
- For any revoke or reject action, an event notification will be sent with the reason code and detail with related objects in same format.

## API Environment
The table below lists the service URL for each environments

| Environment Name | service URL |
| ---------- | ------------------------- |
| Sandbox | `https://openapi-int.qfapi.com` |

## API Request and Response

### Authentication method
credential `code` & `key` are provided, the data consumer can generate `X-QF-SIGN` header to access the APIs.
Required Parameter Settings in HTTP Header 
Please refer to the following URL [Signature requirement](/docs/api-reference/signature-generation)


### API Common Response Format
Please refer to the following URL
[Response Format](/docs/api-reference/response-format)

### Notification verification
Verify the notification authenticated source by checking the `X-QF-SIGN` header in the notification request.
[Signature Verification](/docs/api-reference/request-format#signature-requirement)

## Testing
[Test values](/docs/disabled-cdi/test-values#test-values) for integration testing
By using the test merchant values below, you can simulate the data consent & data request flow in Sandbox environment.


## Data Consent
### Create Data Consent
> authorization code should be provided by merchants.

**API Path:**  /data/consent/v1/create
**Request Parameter:**
| Parameter Name | Type | Mandatory | Description | 
|------------|------|-----------|-------------|
|data_consumer_id|String|Y|data consumer Id, provided by QFPay|
|auth_code|String|Y|authorization code,which retrieved from QFPay Merchant Portal|
|data_scope_type|String|Y|data scope type, possible value: DataScopeTypeDateRange|
| data_start_date |String|Y|the start day of the date range of the requested data, format: YYYY-MM-DD|
|data_end_date|String|Y|the end day of the date range of the requested data, format: YYYY-MM-DD|

**Failure Response Example**:
```json
{
	"respcd": "1104"
	"respmsg": "Invalid Date Range"
}
```

## Data Request
### Create Data Request

**API Path** : /data/request/v1/create
**Request Parameters:**
| Parameter Name | Type | Mandatory | Description | 
|------------|------|-----------|-------------|
|data_consumer_id|String|Y|data consumer Id, provided by QFPay|
|consent_id|String|Y|data consent Id|
|data_scope_type|String|Y|data scope type, possible value: DataScopeTypeDateRange|
| data_start_date |String|Y|the start day of the date range of the requested data, format: YYYY-MM-DD|
|data_end_date|String|Y|the end day of the date range of the requested data, format: YYYY-MM-DD|

**Failure Response Example**:
```json
{
	"respcd": "1104"
	"respmsg": "Invalid Consent Id"
}
```

## Event Notification
> Notifications are available for both data consent and data request events.
Once data consent or data request is approved, QFPay will send asynchronous notification to the URL registered in the system.

> All event notifications are in **JSON** format

### Data Consent Event

|Parameter Name| |Descritpion |
|--|--|--|
|type| |notification type, value: *Consent* |
|consentId||system generated data consent Id|
|scope| |the scope of the consent|
| |scopeType|types of scope of data to cover|
||documentType|the types of documents|
||startDate|the start day of the date range of the requested data|
||endDate|the end day of the date range of the requested data|
|expireTime||the expire time of the customer consent in Unix time format (no. of seconds since the Unix epoch)|
|dataConsumerId||Data Consumer Id assigned by QFPay|
|status||status of a consent record, possible value: ConsentValid, ConsentRevoked|
|private||Consent data with possible privacy concerns|
||dataOwnerId|QFPay Merchant Id|
|updateTime||update time object|
||t|update time value in unix time format|
||humanT| update time value in human readable format|
|createTime||create timeobject|
||t|creation time value in unix time format|
||humanT| creation time value in human readable format|

**Consent event notification example:**
```json
{
  "type":"Consent"
  "consentId": "c65dc7a6-3a64-4354-b69c-2d4100683358",
  "dataProviderId": "QFPay",
  "scope": {
    "scopeType": "DataScopeTypeDateRange",
    "documentType": "Trade Report",
    "startDate": "2025-05-01",
    "endDate": "2025-05-30"
  },
  "purpose": "purpose description",
  "dataConsumerId": "DATACONSUMER0001",
  "expireTime": 1748703600,
  "status": "ConsentValid",
  "private": {
    "purposePrivate": "Authorization Code",
  }
  "updateTime": {
    "t": 1746768573,
    "humanT": "2025-05-09 14:29:33"
  },
  "createTime": {
    "t": 1746768573,
    "humanT": "2025-05-09 14:29:33"
  }
}
```


### Data Request Event
|Parameter Name| |Descritpion |
|--|--|--|
|type| |notification type, value: *Data-Request*
|dataConsumerId||Data Consumer Id, which is assigned by QFPay|
|dataProviderId| |value:QFPay|
|consentId||system generated data consent Id|
|dataRequestId| |system generated data request Id|
|dataScope| |scope of data request|
||scopeType|types of the scope, possible value:DataScopeTypeDateRange|
||startDate|start day of the date range of the requested data covered in this scope|
||endDate|end day of the date range of the requested data covered in this scope|
|status||data request status, possible value: DataRequestApproved,DataRequestDataShared, DataRequestRejected|
|updateTime||update time object|
||t|update time value in unix time format|
||humanT| update time value in human readable format|
|createTime||create timeobject|
||t|creation time value in unix time format|
||humanT| creation time value in human readable format|

**Data request event notifiaction example:**
```json
{
  "type":"Data-Request",
  "dataRequestId": "a3757a11-bcd9-4a9d-ac2b-c8bbd15346e3",
  "dataConsumerId": "DATACONSUMER0001",
  "dataProviderId": "QFPay",
  "dataProviderName": "Data Provider example 0001",
  "consentId": "c65dc7a6-3a64-4354-b69c-2d4100683358",
  "dataScope": {
    "scopeType": "DataScopeTypeDateRange",
    "startDate": "2025-05-01",
    "endDate": "2025-05-07"
  },
  "status": "DataRequestApproved",
  "updateTime": {
    "t": 1746768573,
    "humanT": "2025-05-09 14:29:33"
  },
  "createTime": {
    "t": 1746768573,
    "humanT": "2025-05-09 14:29:33"
  }
}
```


### Data Access Info Event
|Parameter Name| |Description |
|--|--|--|
|type||notification type, value: *Data-Access-Info*|
|dataRequestId||system generated data request Id|
|dataConsumerId||Data Consumer Id assigned by QFPay|
|dataConsumerName||Data Consumer display name|
|dataProviderId||Data Provider Id|
|dataProviderName||Data Provider display name|
|consentId||system generated data consent Id|
|dataScope||scope of data request|
||scopeType|types of the scope|
||documentType|type of document|
||udr|Universal Data Reference|
||startDate|start date of the data range|
||endDate|end date of the data range|
|status||data request status|
|rejectReasonCode||reason code if rejected|
|rejectReasonDetail||detailed reason for rejection|
|purpose||purpose of the data request|
|hashKeyOfRequestPrivate||hash key for request private data|
|hashKeyOfData||hash key for the data|
|updateTime||update time object|
||t|update time value in unix time format|
||humanT|update time value in human readable format|
|createTime||create time object|
||t|creation time value in unix time format|
||humanT|creation time value in human readable format|
|private||private data object|
||id|private data Id|
||purposePrivate|private purpose|
||dataOwnerId|data owner's Id|
||dataOwnerName|data owner's name|
||secret|secret key|
||brNo|business registration number|
||LEI|Legal Entity Identifier|
||crNo|company registration number|
||dataOwnerReference|data owner reference object|
|||refcode: reference code|
|||name: reference name|
||dataOwnerReferenceDP|data provider internal reference|
||updateTime|update time object|
|||t: update time value in unix time format|
|||humanT: update time value in human readable format|
||createTime|create time object|
|||t: creation time value in unix time format|
|||humanT: creation time value in human readable format|
|responseList||array of response objects|
||id|response Id|
||dataOwnerId|data owner's Id|
||dataOwnerName|data owner's name|
||publicKeyId|public key identifier|
||dataFile|data file object|
|||channel: data transfer channel (e.g., HTTPS or SFTP)|
|||endPoint: endpoint URL. For HTTPS: full URL; For SFTP: \$\{SFTP_HOSTNAME\}:\$\{SFTP_PORT\}|
|||endpointReverseProxy: reverse proxy endpoint URL (available for HTTPS channel)|
|||accessToken: access token. For HTTPS: JWT token; |
|||fileType: type of file (e.g., csv, Trade declaration)|
|||filePath: path to the file. For SFTP: full remote path like \$\{uploadAbsoluteRemotePath\}\/$\{consumerId\}/upload/filename.csv|
|||fileHash: hash of the file|
||updateTime|update time object|
|||t: update time value in unix time format|
|||humanT: update time value in human readable format|
||createTime|create time object|
|||t: creation time value in unix time format|
|||humanT: creation time value in human readable format|
|receptionList||array of reception objects|
||id|reception Id|
||dataResponseId|corresponding response Id|
||dataFile|data file object|
|||endPoint: endpoint URL|
|||filePath: path to the file|
|||fileHash: hash of the file|
||updateTime|update time object|
|||t: update time value in unix time format|
|||humanT: update time value in human readable format|
||createTime|create time object|
|||t: creation time value in unix time format|
|||humanT: creation time value in human readable format|

**Data access info event notification example:**
```json
{
  "type":"Data-Access-Info",
  "dataRequestId": "b3dfa083-aa7f-4627-8314-cdebadb361cf",
  "dataConsumerId": "DATAPROVIDER0001",
  "dataConsumerName": "Data Provider example 0001",
  "dataProviderId": "DATAPROVIDER0001",
  "dataProviderName": "Data Provider example 0001",
  "consentId": "37ce697c-83cd-4e67-8e78-2cc00b76cbe2",
  "dataScope": {
    "scopeType": "DataScopeTypeUDR",
    "documentType": "Annual report",
    "udr": "ANNRPT0001",
    "startDate": "2020-05-01",
    "endDate": "2021-10-30"
  },
  "status": "PENDING",
  "rejectReasonCode": "DataRequestRejectReasonInvalidConsent",
  "rejectReasonDetail": "string",
  "purpose": "Some platitudinal purpose",
  "hashKeyOfRequestPrivate": "string",
  "hashKeyOfData": "string",
  "updateTime": {
    "t": 1632896973,
    "humanT": "2021-09-29 14:29:33"
  },
  "createTime": {
    "t": 1632896973,
    "humanT": "2021-09-29 14:29:33"
  },
  "private": {
    "id": "d4bf6e1e-0882-4e1e-b310-befc87b3541a",
    "purposePrivate": "Some despicable purpose",
    "dataOwnerId": "1b1f276f-6d7d-4437-9ea3-ea068d92f7ac",
    "dataOwnerName": "Sun Tech Co.",
    "secret": "10306228ee0b6720ca61802dd7e92cee",
    "brNo": "HKG:12345678",
    "LEI": "529900T8BM49AURSDO55",
    "crNo": "HKG:2345678",
    "dataOwnerReference": {
      "refcode": "A1234567",
      "name": "SUNTECH"
    },
    "dataOwnerReferenceDP": "DPINTERNALID001",
    "updateTime": {
      "t": 1632896973,
      "humanT": "2021-09-29 14:29:33"
    },
    "createTime": {
      "t": 1632896973,
      "humanT": "2021-09-29 14:29:33"
    }
  },
  "responseList": [
    {
      "id": "8ef1e651-843c-424c-8891-b425460088cf",
      "dataOwnerId": "1b1f276f-6d7d-4437-9ea3-ea068d92f7ac",
      "dataOwnerName": "Sun Tech Co.",
      "publicKeyId": "string",
      "dataFile": {
        "channel": "HTTPS",
        "endPoint": "https://www.fake.it/20240401/fake-data.csv",
        "endpointReverseProxy": "https://www.cdi.network/48721f8ad1a5ce2c197bf5bd17cb5bac/20240401/fake-data.csv",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImRjc2ltMDE0Iiwib3JnVHlw…",
        "fileType": "Trade declaration",
        "filePath": "/data/20240401/fake-data.csv",
        "fileHash": "1425224BD3ABB25F444DEF931F1FE2D3FD6F52DDA199D0A0FC96D05CCD6D4619"
      },
      "updateTime": {
        "t": 1632896973,
        "humanT": "2021-09-29 14:29:33"
      },
      "createTime": {
        "t": 1632896973,
        "humanT": "2021-09-29 14:29:33"
      }
    }
  ],
  "receptionList": [
    {
      "id": "550c630f-926f-45b6-b861-6f69f33e4a8f",
      "dataResponseId": "8ef1e651-843c-42hkma4c-8891-b425460088cf",
      "dataFile": {
        "endPoint": "https://www.fake.it/20240401/fake-data.csv",
        "filePath": "/data/20240401/fake-data.csv",
        "fileHash": "1425224BD3ABB25F444DEF931F1FE2D3FD6F52DDA199D0A0FC96D05CCD6D4619"
      },
      "updateTime": {
        "t": 1632896973,
        "humanT": "2021-09-29 14:29:33"
      },
      "createTime": {
        "t": 1632896973,
        "humanT": "2021-09-29 14:29:33"
      }
    }
  ]
}
```