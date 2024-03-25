"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[7022],{52118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(74848),a=n(28453),s=n(11470),o=n(19365),i=n(28774);const l={},d="Consumer Present Mode (CPM)",c={id:"in-store/CPM",title:"Consumer Present Mode (CPM)",description:"CPM process-flow",source:"@site/docs/02-in-store/02-CPM.md",sourceDirName:"02-in-store",slug:"/in-store/CPM",permalink:"/docs/v2/docs/in-store/CPM",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Merchant Present Mode (MPM)",permalink:"/docs/v2/docs/in-store/MPM"},next:{title:"POS API",permalink:"/docs/v2/docs/category/pos-api"}},u={},p=[{value:"CPM API Request",id:"cpm-api-request",level:2},{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response Parameters",id:"response-parameters",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"consumer-present-mode-cpm",children:"Consumer Present Mode (CPM)"}),"\n",(0,r.jsx)(i.A,{href:"/img/cpm_process.jpg",target:"_blank",children:(0,r.jsx)(t.img,{alt:"CPM process-flow",src:n(4473).A+"",width:"1425",height:"590"})}),"\n",(0,r.jsx)(t.h2,{id:"cpm-api-request",children:"CPM API Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"Request Header:\n\n{\n  Content-Type: application/x-www-form-urlencoded; \n  charset=UTF-8,\n  Content-Length: 218,\n  Chunked: false\n  X-QF-APPCODE:A6A49A66B4C********94EA95032\n  X-QF-SIGN:3b020a6349646684ebeeb0ec2cd3d1fb\n}\n\nRequest Body:\n\n{\n  auth_code=13485790*******88557&goods_name=qfpay&mchid=R1zQrTdJnn&out_trade_no=Native201907221520536a25477909&pay_type=800208&txamt=10&txcurrcd=HKD&txdtm=2019-07-22 15:20:54&udid=AA\n}\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://openapi-test.qfpay.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #In USD,EUR,etc. Cent\ntxcurrcd = 'EUR'\npay_type = '800108' # Alipay CPM = 800108 , WeChat Pay CPM = 800208\nauth_code = '280438849930815813' # Mandatory for CPM\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nnotify_url = 'https://xxx.com/notify/success'\nkey = client_key\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid, 'notify_url': notify_url}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid, 'auth_code': auth_code}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="800108";\n        String auth_code="280438849930815813";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("auth_code", auth_code);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(o.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://openapi-test.qfpay.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'EUR',\n'pay_type': '800108', // Alipay CPM = 800108, WeChat Pay CPM = 800208\n'auth_code': '280438849930815813',\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(o.A,{value:"php",label:"Php",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-eur.qfapi.com';\n     $api_type = '/trade/v1/payment';\n     $pay_type = '800108'; //Alipay CPM = 800108, WeChat Pay CPM = 800208\n     $auth_code = '280438849930815813';\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n     \n     $fields_string = '';\n     $fields = array(\n      //'mchid' => urlencode($mchid),\n      'pay_type' => urlencode($pay_type),\n      'auth_code' => urlencode($auth_code),\n      'out_trade_no' => urlencode(GetRandStr(20)),\n      'txcurrcd' => urlencode('EUR'),\n      'txamt' => urlencode(2200),\n      'txdtm' => $now_time\n    );\n    ksort($fields); //Ascending dictionary sorting A-Z \n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n  $fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "pay_type": "800108", \n  "sysdtm": "2019-07-22 15:20:54",  \n  "paydtm": "2019-07-22 15:20:56",  \n  "txdtm": "2019-07-22 15:20:54", \n  "udid": "AA", \n  "txcurrcd": "EUR",  \n  "txamt": 10, \n  "resperr": "\u4ea4\u6613\u6210\u529f", \n  "respmsg": "OK", \n  "out_trade_no": "201907221520536a25477909", \n  "syssn": "20190722000300020081074842", \n  "respcd": "0000", \n  "chnlsn": "4200000384201907223585006133"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})}),"\n",(0,r.jsxs)(t.p,{children:["The customer generates a dynamic QR code in their QR code wallet and presents it to the cashier for scanning. This szenario applies to offline payments only. If the response codes ",(0,r.jsx)(t.code,{children:"1143/1145"})," are returned, the transaction is being processed or the customer is required to input the wallet password. Merchants have to ",(0,r.jsx)(t.a,{href:"../common-api/transaction-enquiry",children:"query the transaction result"})," for a final assessment of the transaction status."]}),"\n",(0,r.jsx)(t.h2,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameters"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization Code"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"auth_code"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Yes",(0,r.jsx)("br",{})," (CPM only)"]}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsxs)(t.td,{children:["Specifies the authorization code for scanning a barcode/QR Code. The ",(0,r.jsx)(t.code,{children:"auth_code"})," returned is unique in each authorization. Each ",(0,r.jsx)(t.code,{children:"auth_code"})," can only be used once and will automatically expire. For testing CPM with Alipay and WeChat Pay the ",(0,r.jsx)(t.code,{children:"auth_code"})," can be extracted by any QRC reader or manually found in the consumer wallet below the barcode."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameters"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(34164),s=n(23104),o=n(56347),i=n(205),l=n(57485),d=n(31682),c=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[y,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=d??y;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=y(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(_,{...e,...t}),(0,g.jsx)(b,{...e,...t})]})}function v(e){const t=(0,x.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(t))}},4473:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cpm_process-850d221cf183766f0823d7d557613dbc.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);