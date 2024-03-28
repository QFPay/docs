"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8021],{26509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=t(74848),s=t(28453);t(11470),t(19365),t(28774);const a={},i="ECR integration technical specification",d={id:"in-store/pos-api/ECR",title:"ECR integration technical specification",description:"4.30.8",source:"@site/docs/02-in-store/04-pos-api/02-ECR.md",sourceDirName:"02-in-store/04-pos-api",slug:"/in-store/pos-api/ECR",permalink:"/docs/v2/docs/in-store/pos-api/ECR",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"POS API",permalink:"/docs/v2/docs/category/pos-api"},next:{title:"App call App Android SDK",permalink:"/docs/v2/docs/in-store/pos-api/app-call-app"}},o={},c=[{value:"1. POS-KEY",id:"1-pos-key",level:2},{value:"2. Encryption",id:"2-encryption",level:2},{value:"3. Request payload format",id:"3-request-payload-format",level:2},{value:"3.1 Payment",id:"31-payment",level:3},{value:"2.2 Refund / Void",id:"22-refund--void",level:3},{value:"3.3 Print receipt",id:"33-print-receipt",level:3},{value:"3.4 Print transaction summary",id:"34-print-transaction-summary",level:3},{value:"3.5 Transaction inquiry by order Id",id:"35-transaction-inquiry-by-order-id",level:3},{value:"3.6 Cancel trade/refund request",id:"36-cancel-traderefund-request",level:3},{value:"Generate signature",id:"generate-signature",level:2},{value:"4. Fields explanation",id:"4-fields-explanation",level:2},{value:"5. Response format",id:"5-response-format",level:2},{value:"6. USB data transmission method",id:"6-usb-data-transmission-method",level:2},{value:"7. HTTP protocol",id:"7-http-protocol",level:2},{value:"8. TCP protocol",id:"8-tcp-protocol",level:2},{value:"9. Cash register &amp; Pos communication protocol (USB)",id:"9-cash-register--pos-communication-protocol-usb",level:2},{value:"9.1 Use scenario",id:"91-use-scenario",level:3},{value:"9.2 Communication method",id:"92-communication-method",level:3},{value:"9.3 Payload format",id:"93-payload-format",level:3},{value:"9.4 detail explanation",id:"94-detail-explanation",level:3},{value:"Start indicator and end indicator",id:"start-indicator-and-end-indicator",level:4},{value:"Payload error type",id:"payload-error-type",level:4},{value:"request and response",id:"request-and-response",level:4},{value:"response timeout",id:"response-timeout",level:4},{value:"payload length",id:"payload-length",level:4},{value:"Data pack splitting and concatenation",id:"data-pack-splitting-and-concatenation",level:5},{value:"Data encryption",id:"data-encryption",level:4},{value:"Serial port settings",id:"serial-port-settings",level:4},{value:"USB to serial port line chip type supported",id:"usb-to-serial-port-line-chip-type-supported",level:5},{value:"Sample data",id:"sample-data",level:4}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ecr-integration-technical-specification",children:"ECR integration technical specification"}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"4.30.8"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ECR integration is available"}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"4.31.1"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"new API: transaction inquiry"}),"\n",(0,r.jsx)(n.li,{children:"new field: cardscheme"}),"\n",(0,r.jsx)(n.li,{children:"refund API support partial refund amount request"}),"\n",(0,r.jsx)(n.li,{children:"optimize connection performance"}),"\n",(0,r.jsxs)(n.li,{children:["fix other known issues\n",(0,r.jsx)(n.code,{children:"4.32.5"})]}),"\n",(0,r.jsx)(n.li,{children:"ECR: optimize USB connection mechanism"}),"\n",(0,r.jsx)(n.li,{children:"ECR: no password input required in app when initialize refund request"}),"\n",(0,r.jsx)(n.li,{children:"ECR: allow control amount modification in refund request"}),"\n",(0,r.jsx)(n.li,{children:"ECR: can set to use front camera or back camera in trade request"}),"\n",(0,r.jsxs)(n.li,{children:["ECR: support new parameter ",(0,r.jsx)(n.code,{children:"out_trade_no"})," in order inquiry"]}),"\n",(0,r.jsx)(n.li,{children:"ECR: optimize WIFI connection mechanism"}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"4.32.8"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["ECR: support new parameter ",(0,r.jsx)(n.code,{children:"wait_card_timeout"})," in payment request"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"1-pos-key",children:"1. POS-KEY"}),"\n",(0,r.jsx)(n.p,{children:"POS-KEY is a secret key used to encrypt and decrypt the data. It is generated by Haojin App."}),"\n",(0,r.jsxs)(n.p,{children:["The default POS-KEY is ",(0,r.jsx)(n.code,{children:"f46b1f08bec1f39104792cc79ec9aacd"})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"The default encrpytion is ON."}),"\n",(0,r.jsx)(n.p,{children:"There is an option to switch on/off on merchant portal (MMS) or refresh POS-KEY. And, Haojin App refresh is required to be effective"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Steps to refresh POS-KEY"}),"\nLogin Haojin App -> My -> Settings -> POS-Key -> generate"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Steps to check POS-KEY"}),"\nLogin Shop Management Platform-> Settings -> Devices Settings -> POS Key Mgmt tab"]}),"\n",(0,r.jsx)(n.h2,{id:"2-encryption",children:"2. Encryption"}),"\n",(0,r.jsxs)(n.p,{children:["All data is encrypted by AES. The key is POS-KEY and the IV is ",(0,r.jsx)(n.code,{children:"qfpay202306_hjsh"})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"The data is encoded by Base64 after encryption."}),"\n",(0,r.jsx)(n.h2,{id:"3-request-payload-format",children:"3. Request payload format"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"amt"}),(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:"Double"}),(0,r.jsx)(n.td,{children:"Amount e.g. $10.1 => 10.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"func_type"}),(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Instruction code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"channel"}),(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Wallet name, refer to Channel list"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"out_trade_no"}),(0,r.jsx)(n.td,{children:"optional"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Merchant reference. ",(0,r.jsx)("br",{})," if not passed, the out_trade_no won't be passed"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"camera_id"}),(0,r.jsx)(n.td,{children:"optional"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["can select using front camera or back camera in QR code payment CPM mode ",(0,r.jsx)("br",{})," 0: back camera (default), ",(0,r.jsx)("br",{})," 1: front camera"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wait_card_timeout"}),(0,r.jsx)(n.td,{children:"optional"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"can set waiting time in credit card payment page, default 120 seconds"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"31-payment",children:"3.1 Payment"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"For QR code payment, MPM/CPM mode is automatically selected base on last usage."}),"\n",(0,r.jsxs)(n.p,{children:["Front camera or back camera can be selected  to use by parameter ",(0,r.jsx)(n.code,{children:"camera_id"})]}),"\n",(0,r.jsxs)(n.p,{children:["Time to wait for credit card payment in payment page can be set by parameter ",(0,r.jsx)(n.code,{children:"wait_card_timeout"})]}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "content": {"amt": 100, "camera_id":0, "channel": "card_payment","func_type": 1001, "out_trade_no": "456799999999",\n    "wait_card_timeout":120},\n    "digest":"76b9186077cdc2bc5d78ae921309811d"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For inquiry the transaction result, please use the Inquire API: ",(0,r.jsx)(n.a,{href:"https://sdk.qfapi.com/?python#transaction-enquiry",children:"https://sdk.qfapi.com/?python#transaction-enquiry"})]}),"\n",(0,r.jsx)(n.h3,{id:"22-refund--void",children:"2.2 Refund / Void"}),"\n",(0,r.jsx)(n.p,{children:"no password input is required in app when initialize refund request"}),"\n",(0,r.jsx)(n.p,{children:"specific parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderId"}),(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"QFPay transaction Id"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refund_amount"}),(0,r.jsx)(n.td,{children:"optional"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["the default refund amount is the refundable amount of the order,",(0,r.jsx)("br",{})," support partial refund"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allow_modify_flag"}),(0,r.jsx)(n.td,{children:"optional"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["0: Not allow modification of refund amount (default value) ",(0,r.jsx)("br",{})," 1: allow modification of refund amount"]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["for Card payment, Unionpay Card and American Express Card,  the amount of same day refund must be ",(0,r.jsx)(n.code,{children:"full amount"})]}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n     "content": {"allow_modify_flag":1, "func_type": 1002,"orderId": "order_id","refund_amount": "0.05"},\n     "digest": "9C8E9FB05C7C24B6CA04EBFA1263EF41"\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"33-print-receipt",children:"3.3 Print receipt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "content": {"orderId": "12345678","func_type": 3001},\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"34-print-transaction-summary",children:"3.4 Print transaction summary"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "content": {"func_type": 3002},\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"35-transaction-inquiry-by-order-id",children:"3.5 Transaction inquiry by order Id"}),"\n",(0,r.jsxs)(n.p,{children:["new paramter ",(0,r.jsx)(n.code,{children:"out_trade_no"})," is supported"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n     "content": {"orderId": "1234567890","func_type": 4001},\n     "digest":"99CE8BF9C7304AC964522D10F51660B4"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"36-cancel-traderefund-request",children:"3.6 Cancel trade/refund request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "content": {"func_type": 5001},\n    "digest": "99CE8BF9C7304AC964522D10F51660B4"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"content\uff1adata request payload\ndigest: signature of data request payload (content), sort the parameters in alphabetical ascending order and concat them in key=value format, use md5 algorithm to get hash value which is signature"}),"\n",(0,r.jsx)(n.h2,{id:"generate-signature",children:"Generate signature"}),"\n",(0,r.jsx)(n.p,{children:"sample of generate signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// original payload\ncontent={"amt":100,"channel": "card_payment","func_type":1001,"out_trade_no":"456799999999"} \n\n// sorted keys in alphabetical ascending order\nformat_content={amt=100,channel=\'card_payment\',func_type=1001,out_trade_no=\'456799999999\'} \n\n// encryption\n// !! if the value is empty, pass \'\' (empty string) instead\ndigest=md5(format_content + pos_key)\ndigest=md5({amt=100,channel=\'card_payment\',func_type=1001,out_trade_no=\'456799999999\'}f46b1f08bec1f39104792cc79ec9aacd) \n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["if encryption is enabled, the above payload will be encrypted by AES at ",(0,r.jsx)(n.code,{children:"content"}),", and the ",(0,r.jsx)(n.code,{children:"digest"})," will be calculated based on the encrypted payload."]}),"\n",(0,r.jsx)(n.p,{children:"for example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "content": "{func_type: 3002}",\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4-fields-explanation",children:"4. Fields explanation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"1\u3001 func_type : business type\n    (1) 1001 Trade\n    (2) 1002 Refund\n    (3) 3001 Print receipt\n    (4) 3002 Print transaction summary\n    (5) 4001 Transaction inquiry\n    (6) 5001 Cancel trade/refund request\n\n2\u3001channel: payment method\n    (1) \u3001card_payment  Card payment\n    (2) \u3001wx            WeChat Pay\n    (3) \u3001alipay        Alipay\n    (4) \u3001payme         PayMe\n    (5) \u3001union         UnionPay\n    (6) \u3001fps           FPS\n    (7) \u3001octopus       Octopus\n    (8) \u3001unionpay_card Unionpay Card\n    (9) `amex_card`     American Express Card\n\n3\u3001amt: Transaction amount\n\n4\u3001orderId: Transaction reference number, the same as out_trade_no\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"5-response-format",children:"5. Response format"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\\"respcd\\": \\"6000\\",\\"data\\": \\"{"aaaaaa"}\\",\\"respmsg\\": \\"xxxxxxxxxx\\",\\"resperr\\":\\"xxxxxxxxxx\\"}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'1\u3001respcd: response code\n    \uff081\uff09\u3001"4003"\uff0cPOS-KEY is invalid\n    \uff082\uff09\u3001"5001"\uff0cDecryption failed\n    \uff083\uff09\u3001"4004"\uff0cRequest method is incorrect, may use POST request\n    \uff084\uff09\u3001"4005"\uff0cOther errors\n    \uff085\uff09\u3001"4006"  Incorrect parameter(s)\n    \uff086\uff09\u3001"5001"\uff0cDecryption failed\n    \uff087\uff09\u3001"6000"  request succeed\n    \uff088\uff09\u3001"6001"  request cancel\n    \uff089\uff09\u3001"6002"  request error\n\n2\u3001respmsg\uff1aResponse message\n3\u3001resperr\uff1aError message\n4\u3001data:response data from trade or refund request\n    (1) data fields in trade response\uff1a\n            respcd;response code\n            resmsg;response message\n            reserr;response error message\n            mchntnm;merchant name\n            sysdtm;system time\n            userid;store Id\n            busicd;business code\n            txamt;transaction amount\n            txcurrcd;transaction currency\n            chnlsn;channel serial number\n            paydtm;payment time\n            udid;user id\n            syssn;system serial number\n            clisn;client serial number\n            out_trade_no\uff1bmerchant order Id\n            cardscheme;card scheme, e.g. VISA\n    (2) data field in refund response\uff1a\n            respcd;response code\n            resmsg;response message\n            reserr;response error message\n            sysdtm;system time\n            paydtm;payment time\n            txcurrcd;transaction currency\n            txdtm;trsnaction time\n            orig_syssn;original system serial number\n            out_trade_no;merchant order Id\n            syssn;system serial number\n            chnlsn;channel serial number\n            txamt;transaction amount\n            originTxamt;original transaction amount\n    (3) data field in transaction inquiry response:\n            server_time;server time\n            cancel;cancel status\n            clisn;client serial number\n            opuid;operator id\n            prepay_amt;payment amount\n            syssn;QF system serial number\n            tradetp;payment type\n            sysdtm;QF system time\n            txcurrcd;transaction currency\n            origssn;original system serial number\n            customer_source;customer source\n            opuser;operator\n            nickname;user name\n            allow_refund_amt;refundable amount\n            desc;description\n            txamt;transaction amount\n            busicd;business code\n            respcd;response code\n            origbusicd;original business code\n            chnlsn;channel serial number\n            cardscheme;card scheme, e.g. VISA\n'})}),"\n",(0,r.jsx)(n.h2,{id:"6-usb-data-transmission-method",children:"6. USB data transmission method"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Connect the POS to the cash register via USB cable."}),"\n",(0,r.jsx)(n.li,{children:'follow the USB communication protocol to construct the data. See the ninth article for details: "Cash register & Pos communication protocol".'}),"\n",(0,r.jsx)(n.li,{children:"Data response. The received data needs to be parsed according to the communication protocol, and then the data message is obtained, and then decrypted by AES."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"7-http-protocol",children:"7. HTTP protocol"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP data transmission method requires POS host IP address and port. The default port of the HTTP method is 9001."}),"\n",(0,r.jsx)(n.li,{children:"Data message format:\n(1) Encrypt the data message through AES\n(2) Initiate the request through the HTTP Post request"}),"\n",(0,r.jsx)(n.li,{children:"Request API\n(1) Trade: /api/pos/trade\n(2) Refund: /api/pos/cancel\n(3) Print receipt: /api/pos/print_receipt\n(4) Print transaction summary: /api/pos/transaction_info\n(5) Transaciton inquiry: /api/pos/query_transaction\n(6) Cancel trade/refund request: /api/pos/cancel_request"}),"\n",(0,r.jsx)(n.li,{children:"The request header needs to be set. The request Content-type format is: application/json"}),"\n",(0,r.jsx)(n.li,{children:"The request result needs to be decrypted by AES to obtain the response message data"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"8-tcp-protocol",children:"8. TCP protocol"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The HTTP data transmission method requires POS host and port. The default port of the HTTP method is 9002."}),"\n",(0,r.jsx)(n.li,{children:"Cash register connects to POS through socket connection"}),"\n",(0,r.jsx)(n.li,{children:"Data is transmitted through socket. The data format is the encrypted data of the data message after AES encryption."}),"\n",(0,r.jsx)(n.li,{children:"The result of the request needs to be decrypted by AES to obtain the response message data"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"9-cash-register--pos-communication-protocol-usb",children:"9. Cash register & Pos communication protocol (USB)"}),"\n",(0,r.jsx)(n.h3,{id:"91-use-scenario",children:"9.1 Use scenario"}),"\n",(0,r.jsx)(n.p,{children:"The cash register and the smart POS device communicate through the serial port or Bluetooth to realize the cash register through the Haojin merchant App on the smart POS to collect and cancel the transaction."}),"\n",(0,r.jsx)(n.h3,{id:"92-communication-method",children:"9.2 Communication method"}),"\n",(0,r.jsx)(n.p,{children:"Serial port."}),"\n",(0,r.jsx)(n.p,{children:"Through the Micro USB interface on the smart POS device or by borrowing the base to convert to USB Host mode, connect to the cash register via USB to serial cable."}),"\n",(0,r.jsx)(n.p,{children:"USB is more stable than Wifi, secure, and easy to deploy."}),"\n",(0,r.jsx)(n.h3,{id:"93-payload-format",children:"9.3 Payload format"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field name"}),(0,r.jsx)(n.th,{children:"content"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Length"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Start indicator"}),(0,r.jsx)(n.td,{children:"0x2f6e"}),(0,r.jsx)(n.td,{children:"start of payload"}),(0,r.jsx)(n.td,{children:"2 Bytes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"version"}),(0,r.jsx)(n.td,{children:"0x01"}),(0,r.jsx)(n.td,{children:"version (static)"}),(0,r.jsx)(n.td,{children:"1 Byte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"payload type"}),(0,r.jsxs)(n.td,{children:["0x10",(0,r.jsx)("br",{}),"0x20",(0,r.jsx)("br",{}),"0x30"]}),(0,r.jsxs)(n.td,{children:["request ",(0,r.jsx)("br",{})," response ",(0,r.jsx)("br",{})," response error"]}),(0,r.jsx)(n.td,{children:"1 Byte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"response reference number"}),(0,r.jsx)(n.td,{children:"0x01 ~ 0x7f"}),(0,r.jsxs)(n.td,{children:["used for request/response, payload splitting / concatenation ",(0,r.jsx)("br",{})," incremental for each, in loop"]}),(0,r.jsx)(n.td,{children:"1 Byte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"payload length"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["total bytes from ",(0,r.jsx)(n.code,{children:"Start indicator"})," to ",(0,r.jsx)(n.code,{children:"End indicator"})]}),(0,r.jsx)(n.td,{children:"2 Bytes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"payload length (data segment)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"total bytes of data segment"}),(0,r.jsx)(n.td,{children:"2 Bytes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data segment"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"data segment, utf-8 encoding"}),(0,r.jsx)(n.td,{children:"non static"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"End indicator"}),(0,r.jsx)(n.td,{children:"0x2f6e"}),(0,r.jsx)(n.td,{children:"indicate end of the payload"}),(0,r.jsx)(n.td,{children:"2 Bytes"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"94-detail-explanation",children:"9.4 detail explanation"}),"\n",(0,r.jsx)(n.h4,{id:"start-indicator-and-end-indicator",children:"Start indicator and end indicator"}),"\n",(0,r.jsx)(n.p,{children:"In order to avoid the situation that a data packet is split into multiple data blocks due to hardware reasons during communication, resulting in the inability to obtain the contents of the packet normally. The sender adds the start and end characters (0x2f6e) to each packet when sending the packet."}),"\n",(0,r.jsx)(n.p,{children:"After the receiver receives the packet, it will check whether the first two bytes of the packet are the start character (0x2f6e). If not, an error packet (0x31) will be responded. Otherwise, continue to traverse the subsequent bytes until the end character."}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["0x2f6e is the hexadecimal representation of ",(0,r.jsx)(n.code,{children:"/n"})," (string, NOT the carriage return) in ASCII encoding"]}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"payload-error-type",children:"Payload error type"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"error type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x30"}),(0,r.jsx)(n.td,{children:"unknown"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x31"}),(0,r.jsx)(n.td,{children:"format error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x32"}),(0,r.jsx)(n.td,{children:"validation error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x33"}),(0,r.jsx)(n.td,{children:"data segment decrypt error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x34"}),(0,r.jsx)(n.td,{children:"data segment format error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0x35"}),(0,r.jsx)(n.td,{children:"data segment packets error"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"request-and-response",children:"request and response"}),"\n",(0,r.jsx)(n.p,{children:"When the receiver receives the request packet (packet type is 0x10), it needs to send a response packet to inform the sender of the result of receiving the packet. If the validation is successful, the response packet type is 0x20. If the validation fails, the response packet type is 0x32. The response packet number is the same as the request packet number."}),"\n",(0,r.jsx)(n.h4,{id:"response-timeout",children:"response timeout"}),"\n",(0,r.jsx)(n.p,{children:"Response timeout is 1000ms, if timeout, the request is considered failed, and the device is disconnected."}),"\n",(0,r.jsx)(n.h4,{id:"payload-length",children:"payload length"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"total length of the payload, from start indicator to end indicator"}),"\n",(0,r.jsx)(n.li,{children:"payload length of data segment"}),"\n",(0,r.jsx)(n.li,{children:"since the payload length is 2 bytes, the maximum length of the data segment is 65536 bytes"}),"\n",(0,r.jsx)(n.li,{children:"it is recommended to keep the data segment length within 1024 bytes, if the data segment is too long, it should be split into multiple packets"}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"data-pack-splitting-and-concatenation",children:"Data pack splitting and concatenation"}),"\n",(0,r.jsx)(n.p,{children:"When sender splits the data segment into multiple packets, the packet number is the same, and the packet length is the total length of the data segment. The receiver needs to wait for the subsequent packets with the same packet number until the packet length is equal to the total length of the data segment, and then send the response packet."}),"\n",(0,r.jsxs)(n.p,{children:["The receiver waits for the timeout of multiple packets to be ",(0,r.jsx)(n.em,{children:"500"}),"ms. After the timeout, the previously received packets are discarded. If subsequent packets with the same number are received, an error (0x35) response packet is sent."]}),"\n",(0,r.jsx)(n.h4,{id:"data-encryption",children:"Data encryption"}),"\n",(0,r.jsx)(n.p,{children:"The sender and receiver need to encrypt the valid data using the AES algorithm. The key is allocated by the service provider."}),"\n",(0,r.jsx)(n.p,{children:"Key length 16 bytes 128 bits"}),"\n",(0,r.jsx)(n.p,{children:"Key offset *****\nAlgorithm mode CBC (Cipher Block Chaining) encryption block chain\nPadding method PKCS5Padding"}),"\n",(0,r.jsx)(n.h4,{id:"serial-port-settings",children:"Serial port settings"}),"\n",(0,r.jsx)(n.p,{children:"Baud rate: 9600\nStop bit: 1\nParity bit: 0\nData bit: 8\nFlow control: off"}),"\n",(0,r.jsx)(n.h5,{id:"usb-to-serial-port-line-chip-type-supported",children:"USB to serial port line chip type supported"}),"\n",(0,r.jsx)(n.p,{children:"PL2303 HXD supported\nCH340 not supported\nFT232 not supported"}),"\n",(0,r.jsx)(n.p,{children:"The above chip types are the most common USB to serial port chips on the market. The stability and price of the three chips are the same, FT232>CH340>PL2303"}),"\n",(0,r.jsx)(n.h4,{id:"sample-data",children:"Sample data"}),"\n",(0,r.jsx)(n.p,{children:"Sample data is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'{\\"content\\":\\"{\\\\\\"amt\\\\\\":100,\\\\\\"channel\\\\\\":\\\\\\"wx\\\\\\",\\\\\\"funcType\\\\\\":1,\\\\\\"mode\\\\\\":1}\\",\\"digest\\":\\"2f0c4683e25a7b9407265033070e9034\\"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"complete data request content(Hexadecimal format):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"2f6e011001007f00747b22636f6e74656e74223a227b5c22616d745c223a3130302c5c226368616e6e656c5c223a5c2277785c222c5c2266756e63547970655c223a312c5c226d6f64655c223a317d222c22646967657374223a223266306334363833653235613762393430373236353033333037306539303334227d2f6e\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(96540),s=t(34164),a=t(23104),i=t(56347),d=t(205),o=t(57485),c=t(31682),l=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,l.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=c??x;return u({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),l=e=>{const n=e.currentTarget,t=o.indexOf(n),s=d[t].value;s!==r&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:l,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function q(e){const n=(0,j.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);