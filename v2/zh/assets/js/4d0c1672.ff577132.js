"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8006],{41161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var r=n(74848),a=n(28453),s=n(11470),l=n(19365),i=n(28774);const d={},o="\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8",c={id:"online-shop/alipay/alipay-service-window-h5",title:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8",description:"The above command returns JSON structured like this:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-online-shop/07-alipay/02-alipay-service-window-h5.md",sourceDirName:"03-online-shop/07-alipay",slug:"/online-shop/alipay/alipay-service-window-h5",permalink:"/docs/v2/zh/docs/online-shop/alipay/alipay-service-window-h5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8",permalink:"/docs/v2/zh/docs/online-shop/alipay/alipay-online-payments"},next:{title:"\u652f\u4ed8\u5b9dIn-App\u652f\u4ed8",permalink:"/docs/v2/zh/docs/online-shop/alipay/alipay-in-app-payments"}},u={},p=[{value:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8(WAP)",id:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97h5\u8de8\u5883\u652f\u4ed8wap",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u652f\u4ed8\u53c2\u6570",id:"\u8bf7\u6c42\u652f\u4ed8\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97h5\u8de8\u5883\u652f\u4ed8",children:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\nFor code instructions select Python, Java, Node.js or PHP with the tabs above.\n\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '801107' # Alipay Wap Payment = 801107\nauth_code='283854702356157409' #CPM only\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nkey = client_key\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="801107";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'HKD',\n'pay_type': '801107', // Alipay Wap Payment = 801107\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(l.A,{value:"php",label:"Php",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n    $num=mt_rand(0,$len);\n    $randstr .= $str[$num];\n  }\n  return $randstr;\n}\n  \n$url = 'https://test-openapi-eur.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '801107'; //Alipay Wap Payment = 801107\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n\n$fields_string = '';\n$fields = array(\n  //'mchid' => urlencode($mchid),\n  'pay_type' => urlencode($pay_type),\n  'out_trade_no' => urlencode(GetRandStr(20)),\n  'txcurrcd' => urlencode('HKD'),\n  'txamt' => urlencode(2200),\n  'txdtm' => $now_time\n);\nksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n  $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "sysdtm": "2020-04-13 11:32:03", \n  "paydtm": "2020-04-13 11:32:03", \n  "txcurrcd": "THB", \n  "respmsg": "", \n  "pay_type": "801107", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txdtm": "2020-04-13 11:32:03", \n  "txamt": "300", \n  "resperr": "success", \n  "out_trade_no": "BUFB3PT9ZDUWEUAE4ATD21JKNHVEIIPV", \n  "syssn": "20200413000200020087171988", \n  "respcd": "0000", \n  "pay_url": "https://globalmapi.alipay.com/gateway.do?total_fee=3.0&secondary_merchant_name=###merchant_name###&out_trade_no=20200413000200020087171988&secondary_merchant_industry=7011&service=create_forex_trade_wap&_input_charset=UTF-8&sign=f16ef36efbb55058d1c1d36fef89bcf8&currency=THB&timeout_rule=30m&notify_url=https%3A%2F%2Fo2.qfpay.com%2Fonline-test%2Ftrade%2Falipay%2Fv1%2Fonline_notify&secondary_merchant_id=2565075&sign_type=MD5&partner=2088631377368888&product_code=NEW_WAP_OVERSEAS_SELLER&return_url=&subject=###merchant_name###", \n  "chnlsn": ""\n}\n'})}),"\n",(0,r.jsx)(i.A,{to:"/img/alipay_h5_process.jpg",target:"_blank",children:(0,r.jsx)(t.img,{alt:"Alipay H5 process-flow",src:n(65247).A+"",width:"1380",height:"780"})}),"\n",(0,r.jsx)(t.h2,{id:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97h5\u8de8\u5883\u652f\u4ed8wap",children:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8(WAP)"}),"\n",(0,r.jsx)(t.p,{children:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97\u53e3H5\u652f\u4ed8\u5141\u8bb8\u5546\u6237\u4f7f\u7528JSAPI\u63a5\u53e3\u8c03\u7528\u652f\u4ed8\u5b9d\u652f\u4ed8\u6a21\u5757\u8fdb\u884c\u6536\u6b3e.\u987e\u5ba2\u53ef\u4ee5\u901a\u8fc7\u652f\u4ed8\u5b9d\u5728\u5546\u6237\u7684\u624b\u673a\u7aef\u7f51\u7ad9\u4e0a\u786e\u8ba4\u603b\u91d1\u989d\u540e\u4ed8\u6b3e."}),"\n",(0,r.jsx)(t.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)(t.code,{children:"PayType: 800107"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1:"})," \u83b7\u53d6userid\n\u8be6\u7ec6\u8bf7\u53c2\u8003",(0,r.jsx)(t.a,{href:"https://docs.open.alipay.com/289/105656",children:"\u652f\u4ed8\u5b9d\u5b98\u65b9\u6587\u6863"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2:"})," \u8bf7\u6c42\u652f\u4ed8"]}),"\n",(0,r.jsx)(t.h3,{id:"\u8bf7\u6c42\u652f\u4ed8\u53c2\u6570",children:"\u8bf7\u6c42\u652f\u4ed8\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e38\u7528\u652f\u4ed8\u53c2\u6570"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u652f\u4ed8\u5b9d\u6388\u6743\u7801"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"openid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsxs)(t.td,{children:["\u4ece\u7b2c\u4e00\u6b65\u6240\u8fd4\u56de\u7684 ",(0,r.jsx)(t.code,{children:"user_id"}),", \u793a\u4f8b: 2088802811715388"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u91cd\u5b9a\u5411URL"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"return_url"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsx)(t.td,{children:"\u7528\u6237\u5728\u6210\u529f\u652f\u4ed8\u540e\u8df3\u8f6c\u7684\u5730\u5740"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u652f\u4ed8\u65b9\u5f0f"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"limit_pay"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"\u53ea\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e8c\u7ea7\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"pay_params"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"tradeNO"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,r.jsx)(t.td,{children:"\u4ea4\u6613\u53f7"}),(0,r.jsx)(t.td,{children:"\u901a\u8fc7\u4f20\u5165\u4ea4\u6613\u53f7\u5524\u8d77\u5feb\u6377\u8c03\u7528\u65b9\u5f0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"txcurrcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(3)"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["\u4ea4\u6613\u5e01\u79cd, \u8bf7\u67e5\u770b",(0,r.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E7%B1%BB%E5%9E%8B",children:"\u5e01\u79cd"}),"\u8868\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u53ef\u9009\u7528\u7684\u5e01\u79cd"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e38\u7528\u54cd\u5e94\u53c2\u6570"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 3:"})," \u6536\u94f6\u53f0\u5524\u8d77\u652f\u4ed8\n\u8be6\u7ec6\u8bf7\u53c2\u8003",(0,r.jsx)(t.a,{href:"https://docs.open.alipay.com/common/105591",children:"\u652f\u4ed8\u5b9d\u5b98\u65b9\u6587\u6863"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),i=n(205),d=n(57485),o=n(31682),c=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:a}),[y,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=o??y;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=i[n].value;a!==r&&(o(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=y(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(_,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function v(e){const t=(0,x.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(t))}},65247:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/alipay_h5_process-ddc90cee4b18b6dcef3596fa91d9d23c.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);