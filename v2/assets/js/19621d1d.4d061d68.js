"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8561],{73473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);t(28774);const d={},c="PayMe Online Payment",l={id:"online-shop/disabled-payme-online-payment",title:"PayMe Online Payment",description:"The above command returns JSON structured like this:",source:"@site/docs/03-online-shop/disabled-payme-online-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/disabled-payme-online-payment",permalink:"/docs/online-shop/disabled-payme-online-payment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},u=[{value:"Web/WAP Payment",id:"webwap-payment",level:3},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"payme-online-payment",children:"PayMe Online Payment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\nFor code instructions select Python, Java, Node.js or PHP with the tabs below.\n\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' # In cents\ntxcurrcd = 'HKD'\npay_type = '805814' # PayMe Web Payment = 805814\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nkey = client_key\n\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="805801";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="HKD";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://test-openapi-hk.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In cents\n'txcurrcd': 'HKD',\n'pay_type': '805814', // PayMe Web Payment = 805814\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\n    return $randstr;\n}\n\n$url = 'https://test-openapi-hk.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '805814'; //PayMe Web Payment = 805814\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n\n$fields_string = '';\n$fields = array(\n    //'mchid' => urlencode($mchid),\n    'pay_type' => urlencode($pay_type),\n    'out_trade_no' => urlencode(GetRandStr(20)),\n    'txcurrcd' => urlencode('HKD'),\n    'txamt' => urlencode(2200),\n    'txdtm' => $now_time\n);\nksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sysdtm": "2020-04-13 10:30:34", \n  "paydtm": "2020-04-13 10:30:34", \n  "txcurrcd": "HKD", \n  "respmsg": "", \n  "pay_type": "805814", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txdtm": "2020-04-13 10:30:34", \n  "txamt": "300", \n  "resperr": "success", \n  "out_trade_no": "4K35N374II7UJJ8RGIAE45O2CVHGHFF0", \n  "syssn": "20200413000300020087033882", \n  "respcd": "0000", \n  "pay_url": "https://qr.payme.hsbc.com.hk/2/C5bvYGEyrgXbxxxxxxxxxx", \n  "chnlsn": ""\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"webwap-payment",children:"Web/WAP Payment"}),"\n",(0,r.jsxs)(n.p,{children:["Customers make purchases on a merchant website with PayMe. The user scans the displayed QR code to pay, confirms the total amount and makes the payment. Finally the customer can be redirected to a selected page on the merchant's website using the ",(0,r.jsx)(n.code,{children:"return_url"})," parameter. PayMe deducts the payment amount from the consumer's PayMe wallet in real-time in HKD and QFPay settles the payment amount to merchants in HKD."]}),"\n",(0,r.jsx)(n.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 805814"})," ",(0,r.jsx)(n.code,{children:"PayMe Online WEB (in browser Chrome etc.) Payment (HK Merchants)"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 805812"})," ",(0,r.jsx)(n.code,{children:"PayMe Online WAP (in mobile browser Chrome etc.) Payment (HK Merchants)"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Currency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["Transaction currency. View the ",(0,r.jsx)(n.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"PayMe Web Payment = 805814"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API Order Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Transaction time format\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Order expiration time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expired_time"})}),(0,r.jsxs)(n.td,{children:["No",(0,r.jsx)("br",{})," (MPM only)"]}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsx)(n.td,{children:"QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product name identification"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"goods_name"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(64)"}),(0,r.jsxs)(n.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,r.jsx)(n.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay merchant number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time zone"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Device ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Redirect URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"return_url"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsx)(n.td,{children:"URL that the user will be redirected to when the payment finishes."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"PayMe Web/Wap Payment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Response message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Other message information"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"External transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Return code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000 = Request successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the transaction result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(n.a,{href:"../preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_url"})}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsx)(n.td,{children:"generate QR code in Desktop web; redirect URL in WAP"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),d=t(205),c=t(57485),l=t(31682),o=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:t,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),a=d[t].value;a!==r&&(l(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function v(e){const n=(0,j.A)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);