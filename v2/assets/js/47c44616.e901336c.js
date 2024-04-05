"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[278],{44818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=t(74848),a=t(28453),i=t(11470),s=t(19365),o=t(28774);const d={},l="Introduction",c={id:"preparation/introduction",title:"Introduction",description:"Welcome to the official QFPay open API documentation. To get started, please review the Developer Instructions below.",source:"@site/docs/01-preparation/01-introduction.md",sourceDirName:"01-preparation",slug:"/preparation/introduction",permalink:"/docs/v2/docs/preparation/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Preparation",permalink:"/docs/v2/docs/category/preparation"},next:{title:"Payment Methods",permalink:"/docs/v2/docs/preparation/paycode"}},u={},h=[{value:"Developer Instructions",id:"developer-instructions",level:2},{value:"Encoding Description",id:"encoding-description",level:3},{value:"Environments",id:"environments",level:2},{value:"API Environments",id:"api-environments",level:3},{value:"Signature Generation",id:"signature-generation",level:2},{value:"Request Description",id:"request-description",level:3},{value:"Required Parameter Settings in HTTP Header to Request the API",id:"required-parameter-settings-in-http-header-to-request-the-api",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Welcome to the ",(0,r.jsx)(n.strong,{children:"official QFPay open API documentation"}),". To get started, please review the ",(0,r.jsx)(n.a,{href:"#developer-instructions",children:"Developer Instructions"})," below."]}),"\n",(0,r.jsx)(n.p,{children:"There are language bindings available in Python, Java, Node.js and PHP! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right corner."}),"\n",(0,r.jsxs)(n.p,{children:["If you would like to quickly test the payment function in ",(0,r.jsx)(o.A,{href:"https://www.postman.com/",children:"Postman"})," we provide a collection that includes a pre-request script to generate the signature, download the file from ",(0,r.jsx)(n.a,{href:"paycode#api-endpoint-for-payments",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"developer-instructions",children:"Developer Instructions"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"mchid"})," is provided, it is mandatory to submit the ",(0,r.jsx)(n.code,{children:"mchid"})," when calling the API (unless otherwise specified.). In other words, if ",(0,r.jsx)(n.code,{children:"mchid"})," is not provided, merchants shall not pass in the ",(0,r.jsx)(n.code,{children:"mchid"})," parameter in the API request."]})}),"\n",(0,r.jsxs)(n.p,{children:["To use the QFPay open API, you must have a set of active API credentials, including the ",(0,r.jsx)(n.strong,{children:"app_code"})," and ",(0,r.jsx)(n.strong,{children:"client_key"}),". If you encounter technical issues please contact ",(0,r.jsx)(n.code,{children:"technical.support@qfpay.com"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"There are separate environments available for application testing and development, as well as production."}),"\n",(0,r.jsx)(n.p,{children:"Please note that transactions conducted in the sandbox environment will not be settled. Therefore, make sure to test with small amounts and process refunds using the API refund endpoint or Merchant APP on the same day as the original transaction."}),"\n",(0,r.jsxs)(n.p,{children:["Each merchant will be provided with a set of app code and key (with or without ",(0,r.jsx)(n.code,{children:"mchid"}),"). Merchants with multiple store branches will usually be supplied with app code, key and ",(0,r.jsx)(n.code,{children:"mchid"}),". The hashed ",(0,r.jsx)(n.code,{children:"mchid"})," is used to identify shops and outlets. Otherwise, only app code and key will be given."]}),"\n",(0,r.jsx)(n.h3,{id:"encoding-description",children:"Encoding Description"}),"\n",(0,r.jsxs)(n.p,{children:["All return parameters from the APIs are in ",(0,r.jsx)(n.code,{children:"UTF-8"})," encoding unless otherwise noted."]}),"\n",(0,r.jsx)(n.h2,{id:"environments",children:"Environments"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Remember to immediately refund transactions that were made in testing environments."})}),"\n",(0,r.jsx)(n.h3,{id:"api-environments",children:"API Environments"}),"\n",(0,r.jsxs)(n.p,{children:["The table below depicts the ",(0,r.jsx)(n.strong,{children:"base URLs"})," for each environment."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment Name"}),(0,r.jsx)(n.th,{children:"Prod. URL"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sandbox (Only for credit card simulations)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://openapi-int.qfapi.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Live Testing Environment"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://test-openapi-hk.qfapi.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Production"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://openapi-hk.qfapi.com"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"signature-generation",children:"Signature Generation"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Always submit the signature in the HTTP header ",(0,r.jsx)(n.code,{children:"X-QF-SIGN"})," unless noted otherwise."]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1:"})," Sort all parameters in ascending order according to parameter names"]}),"\n",(0,r.jsx)(n.p,{children:"Parameter list: abc=value1 bcd=value2 bad=value3\nSort result: abc=value1 bad=value3 bcd=value2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2:"})," Connect all parameters with \u2018&\u2019,and get the string to be signed"]}),"\n",(0,r.jsx)(n.p,{children:"abc=value1&bad=value3&bcd=value2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 3:"})," Combine the string with ",(0,r.jsx)(n.code,{children:"client_key"})," from QFPay."]}),"\n",(0,r.jsx)(n.p,{children:"abc=value1&bad=value3&bcd=value2Key"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 4:"})," Sign the string from step 3 with MD5 or SHA256. We recommend to use SHA256."]}),"\n",(0,r.jsx)(n.p,{children:"MD5(abc=value1&bad=value3&bcd=value2Key)\nHASH(\u201cSHA256\u201d, abc=value1&bad=value3&bcd=value2Key)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 5:"})," Request API with the signature"]}),"\n",(0,r.jsxs)(n.p,{children:["Save the signature in the http header field ",(0,r.jsx)(n.code,{children:"X-QF-SIGN"})," unless otherwise specified in this document."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"For code instructions select Python, Java, Node.js or PHP with the tabs below.\n"})}),"\n",(0,r.jsxs)(i.A,{groupId:"signature-generation",children:[(0,r.jsx)(s.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys:\n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' # In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '800101' # Alipay CPM = 800108 , MPM = 800101\nauth_code='283854702356157409' #CPM only\nout_trade_no = random_string\ntxdtm = current_time\ngoods_name = 'test1'\nauth_code = '280438849930815813'\nkey = client_key\nmchid = 'ZaMVg*****' # ID is provided during merchant onboarding\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}\n\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(make_req_sign(data, key))\n\n"})})}),(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'/*\nThis class is the utility for QFPay Payment API.\nNote:This is just an example.\ngetMd5Value:\nAfter do the string manipulation, like:abc=value&bad=value&bcd=valueKey\nThis method generates MD5 signature using hexadecimal format.\ngetDataString:\nThis method pass in with the map, and generate the string like:abc=value&bad=value&bcd=value.\n*/\npublic class QFPayUtils {\n\n    public static String getMd5Value(String input) {\n        try {\n            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");\n            byte[] array = md.digest(input.getBytes( "UTF-8" ));\n            StringBuffer sb = new StringBuffer();\n            for (int i = 0; i < array.length; i++) {\n                sb.append( String.format( "%02x", array[i]));\n            }\n            return sb.toString().toUpperCase();\n        } catch ( NoSuchAlgorithmException | UnsupportedEncodingException e) {\n            return null;\n        }\n    }\n\n    public static <T> String getDataString(Map resultMap) {\n        Map<String, String> map = new TreeMap<String, String>(\n                new Comparator<String>() {\n                    public int compare(String obj1, String obj2) {\n                        return obj1.compareTo(obj2);\n                    }\n                });\n\n        Iterator<Map.Entry<String, String>> it = resultMap.entrySet().iterator();\n        while (it.hasNext()) {\n            Map.Entry<String, String> entry = it.next();\n            map.put(entry.getKey(), entry.getValue());\n        }\n\n        StringBuilder sb = new StringBuilder();\n        it = map.entrySet().iterator();\n        while (it.hasNext()) {\n            Map.Entry<String, String> entry = it.next();\n            sb.append(entry.getKey()+"="+entry.getValue()+"&");\n        }\n        return sb.deleteCharAt(sb.length() - 1).toString();\n    }\n\n\n}\n'})})}),(0,r.jsx)(s.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// Enter Client Credentials\nconst environment = "https://test-openapi-hk.qfapi.com";\nconst app_code = "D5589D2A1F2E42A9A60C37**********";\nconst client_key = "0E32A59A8B454940A2FF39*********";\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, " ").replace(/\\..+/, "");\nconsole.log(dateTime);\n\n// Body Payload\nconst key = client_key;\nvar tradenumber = String(Math.round(Math.random() * 1000000000));\nconsole.log(tradenumber);\n\nvar payload = {\n  txamt: "10", // In USD,EUR,etc. Cent\n  txcurrcd: "HKD",\n  pay_type: "800101", // Alipay CPM = 800108 , MPM = 800101\n  out_trade_no: tradenumber,\n  txdtm: dateTime,\n  mchid: "ZaMVg*****",\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload)\n  .sort()\n  .forEach(function (key) {\n    ordered[key] = payload[key];\n  });\nconsole.log(ordered);\n\nvar str = [];\nfor (var p in ordered)\n  if (ordered.hasOwnProperty(p)) {\n    str.push(p + "=" + ordered[p]);\n  }\nvar string = str.join("&") + client_key;\nconsole.log(string);\n\nconst crypto = require("crypto");\nvar hashed = crypto.createHash("md5").update(string).digest("hex");\nconsole.log(hashed);\n'})})}),(0,r.jsx)(s.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\n    return $randstr;\n}\n$url = 'https://test-openapi-hk.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '800101';\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get the current date-time\n\n$fields_string = '';\n$fields = array(\n    //'mchid' => urlencode($mchid),\n    'pay_type' => urlencode($pay_type),\n    'out_trade_no' => urlencode(GetRandStr(20)),\n    'txcurrcd' => urlencode('HKD'),\n    'txamt' => urlencode(2200),\n    'txdtm' => $now_time\n);\nksort($fields); //Sort parameters in ascending order from A to Z\nprint_r($fields);\n\nforeach($fields as $key=>$value) {\n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"B3B251B202801388BE4AC8E5537B81B1"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"request-description",children:"Request Description"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The API will return response content in JSON format. We encourage developers to verify the signature in the response header in order to ensure message integrity."})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Character"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UTF-8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Method"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"POST/ GET"})," (Depends on individual API function)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Content-type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"required-parameter-settings-in-http-header-to-request-the-api",children:"Required Parameter Settings in HTTP Header to Request the API"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-APPCODE"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"App code assigned to the merchant"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-SIGN"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Signature generated according to the signature formulation method described above"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-SIGNTYPE"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["Signature algorithm used to generate the signature. If SHA256 is used, the developer must pass the value as ",(0,r.jsx)(n.code,{children:"SHA256"}),". The default value is ",(0,r.jsx)(n.code,{children:"MD5"})," in case this field is not passed to the API."]})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),o=t(205),d=t(57485),l=t(31682),c=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:t,groupId:a}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),j=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),a=o[t].value;a!==r&&(l(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function f(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,y.jsx)(v,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,y.jsx)(f,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);