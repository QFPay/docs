"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1100],{70518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453),d=t(11470),a=t(19365);t(28774);const i={},l="\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8",c={id:"online-shop/alipay/alipay-online-payments",title:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8",description:"The above command returns JSON structured like this:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/07-alipay/01-alipay-online-payments.md",sourceDirName:"03-online-shop/07-alipay",slug:"/online-shop/alipay/alipay-online-payments",permalink:"/docs/v2/zh-Hans/docs/online-shop/alipay/alipay-online-payments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Alipay",permalink:"/docs/v2/zh-Hans/docs/category/alipay"},next:{title:"\u652f\u4ed8\u5b9d\u670d\u52a1\u7a97H5\u8de8\u5883\u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/online-shop/alipay/alipay-service-window-h5"}},o={},h=[{value:"Web/WAP\u652f\u4ed8",id:"webwap\u652f\u4ed8",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8",children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\nFor code instructions select Python, Java, Node.js or PHP with the tabs below.\n\n"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(a.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '801101' # Alipay Web Payment = 801101\nauth_code='283854702356157409' #CPM only\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nkey = client_key\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="801101";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://test-openapi-hk.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'HKD',\n'pay_type': '801101', // Alipay Web Payment = 801101\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(a.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-hk.qfapi.com';\n     $api_type = '/trade/v1/payment';\n     $pay_type = '801101'; //Alipay Web Payment = 801101\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n     \n     $fields_string = '';\n     $fields = array(\n      //'mchid' => urlencode($mchid),\n      'pay_type' => urlencode($pay_type),\n      'out_trade_no' => urlencode(GetRandStr(20)),\n      'txcurrcd' => urlencode('HKD'),\n      'txamt' => urlencode(2200),\n      'txdtm' => $now_time\n    );\n    ksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n  $fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sysdtm": "2020-04-13 10:30:34", \n  "paydtm": "2020-04-13 10:30:34", \n  "txcurrcd": "HKD", \n  "respmsg": "", \n  "pay_type": "801101", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txdtm": "2020-04-13 10:30:34", \n  "txamt": "300", \n  "resperr": "success", \n  "out_trade_no": "4K35N374II7UJJ8RGIAE45O2CVHGHFF0", \n  "syssn": "20200413000300020087033882", \n  "respcd": "0000", \n  "pay_url": "https://globalmapi.alipay.com/gateway.do?total_fee=3.0&secondary_merchant_name=###merchant_name###&out_trade_no=20200413000300020087033882&secondary_merchant_industry=7011&service=create_forex_trade&_input_charset=UTF-8&sign=02beb99974ce6167666280b9727c4444&currency=THB&notify_url=https%3A%2F%2Fo2.qfpay.com%2Fonline-test%2Ftrade%2Falipay%2Fv1%2Fonline_notify&order_valid_time=1800&secondary_merchant_id=2565075&sign_type=MD5&partner=2088631377368888&product_code=NEW_OVERSEAS_SELLER&order_gmt_create=2020-04-13+10%3A30%3A34&return_url=&subject=###merchant_name###", \n  "chnlsn": ""\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u652f\u4ed8\u5b9d\u9999\u6e2f\u4e0d\u652f\u6301\u539f\u751f\u652f\u4ed8\u5b9d\u6536\u94f6\u53f0\u9875\u9762, \u5f00\u53d1\u4eba\u5458\u9700\u8981\u8bf7\u6c42\u4e8c\u7ef4\u7801\u5e76\u4f7f\u7528",(0,r.jsx)(n.code,{children:"iframe"}),"\u5d4c\u5165"]})}),"\n",(0,r.jsx)(n.h2,{id:"webwap\u652f\u4ed8",children:"Web/WAP\u652f\u4ed8"}),"\n",(0,r.jsxs)(n.p,{children:["\u5ba2\u6237\u4f7f\u7528\u652f\u4ed8\u5b9d\u5728\u5546\u6237\u7f51\u7ad9\u4e0a\u8d2d\u7269, \u7528\u6237\u626b\u63cf\u663e\u793a\u7684\u4e8c\u7ef4\u7801\u8fdb\u884c\u652f\u4ed8, \u786e\u8ba4\u603b\u91d1\u989d\u540e\u8fdb\u884c\u652f\u4ed8. \u6700\u540e\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"return_url"}),"\u53c2\u6570\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u4e00\u4e2a\u5546\u6237\u7f51\u7ad9\u4e0a\u9009\u4e2d\u7684\u9875\u9762. \u652f\u4ed8\u5b9d\u4ee5\u4eba\u6c11\u5e01\u8ba1\u8d39\u5b9e\u65f6\u4ece\u6d88\u8d39\u8005\u7684\u652f\u4ed8\u5b9d\u94b1\u5305\u4e2d\u6263\u9664\u652f\u4ed8\u91d1\u989d, QFPay \u6700\u7ec8\u4f1a\u4ee5\u5f53\u5730\u8d27\u5e01\u7ed3\u7b97\u652f\u4ed8\u91d1\u989d."]}),"\n",(0,r.jsx)(n.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 801101"})," ",(0,r.jsx)(n.code,{children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0a\u626b\u7801\u652f\u4ed8 (\u6d77\u5916\u5546\u6236)"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 801107"})," ",(0,r.jsx)(n.code,{children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u4e0aWAP\u652f\u4ed8 (\u6d77\u5916\u5546\u6236)"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 801501"})," ",(0,r.jsx)(n.code,{children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u626b\u7801\u652f\u4ed8 (\u9999\u6e2f\u5546\u6236)"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 801512"})," ",(0,r.jsx)(n.code,{children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0aWAP\u652f\u4ed8 (\u9999\u6e2f\u5546\u6236)"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8ba2\u5355\u652f\u4ed8\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"\u5f53\u524d\u8d27\u5e01\u6700\u5c0f\u8ba1\u91cf\u5355\u4f4d\u8ba1\u7b97\uff0c\u53ea\u5141\u8bb8\u6574\u6570\u7c7b\u578b (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5e01\u79cd"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["\u4ea4\u6613\u5e01\u79cd, \u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E5%B8%81%E7%A7%8D",children:"\u5e01\u79cd"}),"\u8868\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u53ef\u9009\u7528\u7684\u5e01\u79cd"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0a\u652f\u4ed8 = 801101"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u8ba2\u5355\u53f7\uff0c\u5728\u540c\u4e00\u5546\u6237\u8d26\u6237\u4e2d\u7684\u6bcf\u7b14\u4ea4\u6613\u548c\u9000\u6b3e\u8bf7\u6c42\u8be5\u53c2\u6570\u503c\u552f\u4e00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u4ea4\u6613\u65f6\u95f4\u683c\u5f0f\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u8fc7\u671f\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expired_time"})}),(0,r.jsxs)(n.td,{children:["\u5426 ",(0,r.jsx)("br",{}),"(\u4ec5\u9650\u6b63\u626b\u652f\u4ed8)"]}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["\u4ee5\u5206\u949f\u4e3a\u8ba1\u65f6\u7684\u4e8c\u7ef4\u7801\u8fc7\u671f\u65f6\u95f4,\u9ed8\u8ba4\u7684\u8fc7\u671f\u65f6\u95f4\u662f30\u5206\u949f. \u8be5\u53c2\u6570\u53ef\u4ee5\u88ab\u624b\u52a8\u8bbe\u7f6e\u4e3a\u6700\u5c0f5\u5206\u949f,\u6700\u5927120\u5206\u949f ",(0,r.jsx)("br",{})," \u8be5\u53c2\u6570\u53ef\u7528\u4e8e: ",(0,r.jsx)("br",{}),"800201 - WeChat scan code"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5546\u54c1\u540d\u79f0\u6807\u8bc6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"goods_name"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(64)"}),(0,r.jsxs)(n.td,{children:["\u5546\u54c1\u540d\u79f0 / \u6807\u8bc6: \u4e0d\u80fd\u8d85\u8fc7 20 \u4e2a\u5b57\u6bcd\u6570\u5b57\u6216\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u3002 APP\u652f\u4ed8\u4e0d\u80fd\u4e3a\u7a7a\u3002 \u5982\u679c\u53c2\u6570\u662f\u6c49\u5b57\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.strong,{children:"UTF-8"}),"\u7f16\u7801\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5b50\u5546\u6237\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"\u6807\u8bc6\u5b50\u5546\u6237\u8eab\u4efd\uff0c\u7531QFPay \u5206\u914d\uff08\u6e20\u9053\u7cfb\u7edf\u540e\u53f0\u67e5\u770b\u5bf9\u5e94\u5546\u6237(\u975e\u4e1a\u52a1\u5458)\u5b50\u5546\u6237\u53f7\uff0c\u88ab\u89c6\u4e3a\u5bf9\u5e94\u5546\u6237\u7684\u4ea4\u6613\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u65f6\u533a"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u4e0b\u5355\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4+0800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bbe\u5907\u552f\u4e00id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"\u552f\u4e00\u7684\u8bbe\u5907ID,\u663e\u793a\u5728\u5546\u6237\u7ba1\u7406\u540e\u53f0\u4e0a."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8df3\u8f6c\u5730\u5740"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"return_url"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsxs)(n.td,{children:["\u652f\u4ed8\u6210\u529f\u540e\u7684\u7528\u6237\u8df3\u8f6c\u5730\u5740. \u652f\u4ed8\u5b9dWAP\u9650\u5236\u4e86",(0,r.jsx)(n.code,{children:"return_url"}),"\u6700\u5927\u4e3a200\u4e2a\u5b57\u7b26."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u5b9d Web/Wap \u652f\u4ed8 = 801101/801107"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7cfb\u7edf\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," \u8fd9\u4e2a\u53c2\u6570\u503c\u88ab\u7528\u4f5c\u7ed3\u7b97\u622a\u6b62\u65f6\u95f4"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8c03\u8bd5\u4fe1\u606f"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8ba2\u5355\u652f\u4ed8\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4fe1\u606f\u63cf\u8ff0"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay \u8ba2\u5355\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8fd4\u56de\u7801"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000 = \u8bf7\u6c42\u6210\u529f. ",(0,r.jsx)("br",{})," 1143/1145 = \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c ",(0,r.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7801\u8868\u660e\u4ea4\u6613\u5931\u8d25.\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"../../preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u652f\u4ed8\u72b6\u6001\u7801"})," \u83b7\u5f97\u5b8c\u6574\u8fd4\u56de\u7c7b\u578b\u5217\u8868"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u94fe\u63a5"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_url"})}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsx)(n.td,{})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(34164),d=t(23104),a=t(56347),i=t(205),l=t(57485),c=t(31682),o=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,d=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:d}))),[c,h]=x({queryString:t,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),y=(()=>{const e=c??j;return p({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,d]),tabValues:d}}var m=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),o=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:d}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:o,...d,className:(0,s.A)("tabs__item",y.tabItem,d?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function f(e){const n=j(e);return(0,_.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,_.jsx)(g,{...e,...n}),(0,_.jsx)(b,{...e,...n})]})}function v(e){const n=(0,m.A)();return(0,_.jsx)(f,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},d=r.createContext(s);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);