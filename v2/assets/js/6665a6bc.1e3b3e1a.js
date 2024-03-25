"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[4e3],{91320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const d={},o="Reversal/ Cancel",l={id:"common-api/reversal-cancel",title:"Reversal/ Cancel",description:"Reversals should be used as a last resort when the transaction status cannot be determined, e.g. no payment notification is received, the response timed-out, there are network issues, etc. The query API endpoint should be used first to check the transaction status. Hong Kong PayTypes do not support transaction cancel.",source:"@site/docs/04-common-api/02-reversal-cancel.md",sourceDirName:"04-common-api",slug:"/common-api/reversal-cancel",permalink:"/docs/v2/docs/common-api/reversal-cancel",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Transaction Enquiry",permalink:"/docs/v2/docs/common-api/transaction-enquiry"},next:{title:"Refunds",permalink:"/docs/v2/docs/common-api/refunds"}},c={},u=[{value:"HTTP Request for Alipay CPM &amp; MPM",id:"http-request-for-alipay-cpm--mpm",level:3},{value:"HTTP Request for WeChat Pay CPM",id:"http-request-for-wechat-pay-cpm",level:3},{value:"HTTP Request for WeChat Pay MPM",id:"http-request-for-wechat-pay-mpm",level:3},{value:"HTTP Request for other qualified Wallets*",id:"http-request-for-other-qualified-wallets",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"reversal-cancel",children:"Reversal/ Cancel"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Reversals should be used as a last resort when the transaction status cannot be determined, e.g. no payment notification is received, the response timed-out, there are network issues, etc. The query API endpoint should be used first to check the transaction status. Hong Kong PayTypes do not support transaction cancel."})}),"\n",(0,r.jsxs)(n.p,{children:["The reversal API endpoint allows the merchant to cancel/ reverse a transaction that is currently in progress. Transactions that have already been processed successfully (return code 0000 = successful) can no longer be reversed or cancelled. If you would like to revert a successful transaction please refer to the ",(0,r.jsx)(n.a,{href:"refunds",children:"Refund Endpoint"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\nFor code instructions select Python, Java, Node.js or PHP with the tabs below.\n\n"})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nfrom hashids import Hashids\nimport datetime\nimport string\nimport random\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-eur.qfapi.com'\napp_code = '3F504C39125E4886AB4741**********'\nclient_key = '5744993FBC034DBBB995FA**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \nrandom_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))\n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    print(unsign_str)\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n\n# Body payload\ntxamt = '2500' #In USD,EUR,etc. Cent\nout_trade_no = '4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ'\nsyssn = '20200305066100020000977812' \ntxdtm = '2020-03-05 16:50:30' \nmchid = 'MNxMp11FV35qQN'\nkey = client_key\n\n#data ={'txamt': txamt, 'out_trade_no': out_trade_no, 'syssn': syssn, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}\ndata ={'txamt': txamt, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/reversal\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class Refund {\n    public static void main(String args[]){\n        String appcode="3F504C39125E4886AB4741**********";\n        String key="5744993FBC034DBBB995FA**********";\n        String mchid="MNxMp11FV35qQN"; // Only Agents must provide the mchid\n\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n\n        String txdtm="2020-03-05 16:50:30"; \n        String txamt="2500";\n        String syssn="20200305066100020000977812"; //only syssn or out_trade_no must be provided\n        String out_trade_no="4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ"; //only syssn or out_trade_no must be provided\n\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("syssn", syssn);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n         //\u5982\u679c\u662f\u56fd\u5185\u94b1\u53f0\uff0c\u7f51\u5740\u662f\uff1ahttps://openapi-test.qfpay.com.\n        String url="https://test-openapi-eur.qfapi.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/reversal", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"\n// Enter Client Credentials\nenvironment = 'https://test-openapi-eur.qfapi.com'\napp_code = '3F504C39125E4886AB4741**********'\nclient_key = '5744993FBC034DBBB995FA**********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '2500', \n'out_trade_no': '4MDGEJ7L496LAAU1V1HBY9HMOGWZWLXQ', //only syssn or out_trade_no must be provided\n'syssn': '20200305066100020000977812', //only syssn or out_trade_no must be provided\n'txdtm': '2020-03-05 16:50:30',\n'mchid': 'MNxMp11FV35qQN'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/reversal\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\n    return $randstr;\n}\n\n$url = 'https://test-openapi-eur.qfapi.com';\n$api_type = '/trade/v1/reversal';\n$syssn = '800101';\n//$out_trade_no = 'zCvo0IqTg0SaQkGnHd6w';\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73E********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B5********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get the current date-time   \n\n$fields_string = '';\n$fields = array(\n    //'mchid' => urlencode($mchid),\n    'syssn' => urlencode($syssn),\n    //'out_trade_no' => urlencode($out_trade_no),\n    'txcurrcd' => urlencode('EUR'),\n    'txamt' => urlencode(2200),\n    'txdtm' => date('2020-03-05 16:50:30'),\n);\nksort($fields); //Sort parameters in ascending order from A to Z\nprint_r($fields);\n    \nforeach($fields as $key=>$value) { \n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1); \n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "surcharge_fee": "0", \n    "resperr": "success", \n    "txdtm": "2020-03-05 16:50:30", \n    "syssn": "20200305066100020000977814", \n    "sysdtm": "2020-03-05 16:54:38", \n    "txcurrcd": "EUR", \n    "respmsg": "", \n    "chnlsn2": "", \n    "cardcd": "", \n    "udid": "qiantai2", \n    "txamt": "2500", \n    "orig_syssn": "20200305066100020000977813", \n    "surcharge_rate": "0", \n    "respcd": "0000", \n    "chnlsn": ""\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"http-request-for-alipay-cpm--mpm",children:"HTTP Request for Alipay CPM & MPM"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET ..trade/v1/reversal"})}),"\n",(0,r.jsx)(n.h3,{id:"http-request-for-wechat-pay-cpm",children:"HTTP Request for WeChat Pay CPM"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET ..trade/v1/reversal"})}),"\n",(0,r.jsx)(n.h3,{id:"http-request-for-wechat-pay-mpm",children:"HTTP Request for WeChat Pay MPM"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET ..trade/v1/close"})}),"\n",(0,r.jsx)(n.h3,{id:"http-request-for-other-qualified-wallets",children:"HTTP Request for other qualified Wallets*"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET ..trade/v1/close"})}),"\n",(0,r.jsx)(n.p,{children:"*If you would like to use this endpoint on a wallet other than Alipay & Wechat Pay please contact us for instructions."}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"Merchant ID allocated by QFPay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"Yes*"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"QFPay transaction number, returned by the system once payment is completed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"Yes*"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Transaction time format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["*Either the ",(0,r.jsx)(n.code,{children:"syssn"})," or ",(0,r.jsx)(n.code,{children:"out_trade_no"})," must be provided."]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"orig_syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"Refers to the original QFPay transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"QFPay transaction number of the cancel/ reversal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["Transaction currency. View the ",(0,r.jsx)(n.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Transaction time. Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["System transaction time. Format: YYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"chnlsn"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Transaction number from payment channel (wallet side)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["Response code ",(0,r.jsx)("br",{})," 0000 = Reversal/ cancel successul ",(0,r.jsx)("br",{})," 1143/1145 = Reversal/ cancel in progress ",(0,r.jsx)("br",{})," others = Reversal/ cancel failed"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"Result description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"Information description"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),s=t(34164),a=t(23104),i=t(56347),d=t(205),o=t(57485),l=t(31682),c=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),y=(()=>{const e=l??x;return p({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=d[t].value;s!==r&&(l(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function _(e){const n=(0,j.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);