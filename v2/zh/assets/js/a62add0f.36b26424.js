"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1875],{67916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=t(74848),s=t(28453),d=t(11470),a=t(19365),i=t(28774);const c={},l="\u5fae\u4fe1\u626b\u7801\u652f\u4ed8",o={id:"online-shop/wechat/wechat-web-qrc-payments",title:"\u5fae\u4fe1\u626b\u7801\u652f\u4ed8",description:"Online QR Code Payment process-flow",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-online-shop/06-wechat/01-wechat-web-qrc-payments.md",sourceDirName:"03-online-shop/06-wechat",slug:"/online-shop/wechat/wechat-web-qrc-payments",permalink:"/docs/v2/zh/docs/online-shop/wechat/wechat-web-qrc-payments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Wechat",permalink:"/docs/v2/zh/docs/category/wechat"},next:{title:"\u5fae\u4fe1JSAPI\u652f\u4ed8(\u5fae\u4fe1\u6d4f\u89c8\u5668)",permalink:"/docs/v2/zh/docs/online-shop/wechat/wechat-pay-jsapi"}},h={},u=[{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5fae\u4fe1\u626b\u7801\u652f\u4ed8",children:"\u5fae\u4fe1\u626b\u7801\u652f\u4ed8"}),"\n",(0,r.jsxs)(i.A,{href:"/img/online_qr_process.png",target:"_blank",children:[" ",(0,r.jsx)(n.img,{alt:"Online QR Code Payment process-flow",src:t(56366).A+"",width:"1860",height:"1290"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5ba2\u6237\u53ef\u4ee5\u4f7f\u7528\u5fae\u4fe1\u7684\u201c\u626b\u4e00\u626b\u201d\u529f\u80fd\uff0c\u626b\u63cf\u7f51\u9875\u4e0a\u5546\u6237\u751f\u6210\u7684\u652f\u4ed8\u7801\u8fdb\u884c\u652f\u4ed8, \u7f51\u7edc\u652f\u4ed8\u5141\u8bb8\u5c06\u8ba2\u5355\u4fe1\u606f\u5d4c\u5165\u5230\u552f\u4e00\u7684\u4e8c\u7ef4\u7801\u4e2d. \u7528\u6237\u901a\u8fc7\u5fae\u4fe1\u626b\u7801\uff0c\u5728\u901a\u8fc7\u5f3a\u5236\u5b89\u5168\u68c0\u67e5\u540e\u5c06\u4f1a\u5b8c\u6210\u652f\u4ed8."}),"\n",(0,r.jsx)(n.p,{children:"\u5546\u6237\u53ef\u9009\u62e9\u5f00\u901a\u5fae\u4fe1\u5b9e\u540d\u8ba4\u8bc1, \u76ee\u524d\u5b9e\u540d\u8ba4\u8bc1\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u9700\u8981\u5305\u542b\u771f\u5b9e\u59d3\u540d\u548c\u8eab\u4efd\u8bc1\u53f7\u7801. \u5982\u679c\u5df2\u7ecf\u63d0\u4f9b\u8eab\u4efd\u8bc1\u660e\uff0c\u4ed8\u6b3e\u4eba\u7684\u94b1\u5305\u4fe1\u606f\uff08\u4f8b\u5982\u8fde\u63a5\u7684\u94f6\u884c\u5361\uff09\u5fc5\u987b\u4e0e\u5546\u5bb6\u63d0\u4f9b\u7684\u6570\u636e\u76f8\u540c. \u5982\u679c\u5ba2\u6237\u5c1a\u672a\u5c06\u5fae\u4fe1\u8d26\u6237\u7ed1\u5b9a\u94f6\u884c\u5361\u4e5f\u4ecd\u53ef\u8fdb\u884c\u652f\u4ed8."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\n\u5bf9\u4e8e\u4ee3\u7801\u8bf4\u660e\uff0c\u8bf7\u9009\u62e9 Python\u3001Java\u3001node.js \u6216 PHP\u3002\n\n"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(a.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '800201'\nauth_code='283854702356157409' #CPM only\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nkey = client_key\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="800201";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'HKD',\n'pay_type': '800201',\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(a.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-hk.qfapi.com';\n     $api_type = '/trade/v1/payment';\n     $pay_type = '800201';\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n     \n     $fields_string = '';\n     $fields = array(\n      //'mchid' => urlencode($mchid),\n      'pay_type' => urlencode($pay_type),\n      'out_trade_no' => urlencode(GetRandStr(20)),\n      'txcurrcd' => urlencode('HKD'),\n      'txamt' => urlencode(2200),\n      'txdtm' => $now_time\n    );\n    ksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n  $fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sysdtm": "2020-04-10 11:45:44", \n  "paydtm": "2020-04-10 11:45:44", \n  "txcurrcd": "THB", \n  "respmsg": "OK", \n  "qrcode": "weixin://wxpay/bizpayurl?pr=4PsXP5N", \n  "pay_type": "800201", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txdtm": "2020-04-10 11:45:44", \n  "txamt": "300", \n  "resperr": "success", \n  "out_trade_no": "3Z6HPCS6RN54J2Y8LUQM8RBDVBA9URYE", \n  "syssn": "20200410000300020086358791", \n  "respcd": "0000", \n  "chnlsn": ""\n  }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)(n.code,{children:"PayType: 800201"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u4e8c\u7ea7\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8ba2\u5355\u652f\u4ed8\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"\u4ee5\u5f53\u524d\u8d27\u5e01\u6700\u5c0f\u8ba1\u91cf\u5355\u4f4d\u8ba1\u7b97\uff0c\u53ea\u5141\u8bb8\u6574\u6570\u7c7b\u578b (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5e01\u79cd"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["\u4ea4\u6613\u5e01\u79cd, \u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E5%B8%81%E7%A7%8D",children:"\u5e01\u79cd"}),"\u8868\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u53ef\u9009\u7528\u7684\u5e01\u79cd"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsxs)(n.td,{children:["\u5fae\u4fe1\u7ebf\u4e0a\u652f\u4ed8\u7c7b\u578b ",(0,r.jsx)(n.code,{children:"800201"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u4ea4\u6613\u4ee3\u7801 / \u5546\u6237\u5e73\u53f0\u4ea4\u6613\u7801: \u5728\u540c\u4e00\u5546\u6237\u8d26\u6237\u4e2d\u7684\u6bcf\u7b14\u4ea4\u6613\u548c\u9000\u6b3e\u8bf7\u6c42\u8be5\u53c2\u6570\u503c\u552f\u4e00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u4ea4\u6613\u65f6\u95f4\u683c\u5f0f\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u5230\u671f\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expired_time"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["\u5426 ",(0,r.jsx)("br",{})," (\u4ec5\u9650\u6b63\u626b\u652f\u4ed8)"]}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["\u4ee5\u5206\u949f\u4e3a\u8ba1\u65f6\u7684\u4e8c\u7ef4\u7801\u8fc7\u671f\u65f6\u95f4,\u9ed8\u8ba4\u7684\u8fc7\u671f\u65f6\u95f4\u662f30\u5206\u949f. \u8be5\u53c2\u6570\u53ef\u4ee5\u88ab\u624b\u52a8\u8bbe\u7f6e\u4e3a\u6700\u5c0f5\u5206\u949f,\u6700\u5927120\u5206\u949f",(0,r.jsx)("br",{})," \u8be5\u53c2\u6570\u53ef\u7528\u4e8e: ",(0,r.jsx)("br",{}),"800201 - \u5fae\u4fe1\u626b\u7801\u652f\u4ed8"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5546\u54c1\u540d\u79f0\u6807\u8bc6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"goods_name"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(64)"}),(0,r.jsxs)(n.td,{children:["\u5546\u54c1\u540d\u79f0 / \u6807\u8bc6: \u4e0d\u80fd\u8d85\u8fc7 20 \u4e2a\u5b57\u6bcd\u6570\u5b57\u6216\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u3002 APP\u652f\u4ed8\u4e0d\u80fd\u4e3a\u7a7a\u3002 \u5982\u679c\u53c2\u6570\u662f\u6c49\u5b57\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.strong,{children:"UTF-8"}),"\u7f16\u7801\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5b50\u5546\u6237\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"\u53ef\u80fd\u63d0\u4f9b\u7ed9\u4e88\u5546\u6237\u3002 \u5982\u679c\u7ed9\u51fa\u4e86MCHID\uff0c\u5219\u5fc5\u987b\u63d0\u4f9bMCHID\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9bMCHID\uff0c\u5546\u6237\u4e0d\u5f97\u5728API\u8bf7\u6c42\u4e2d\u4f20\u9012MCHID\u5b57\u6bb5\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u65f6\u533a"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u4e0b\u5355\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4+0800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bbe\u5907\u552f\u4e00id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"\u552f\u4e00\u7684\u8bbe\u5907ID,\u663e\u793a\u5728\u5546\u6237\u7ba1\u7406\u540e\u53f0\u4e0a."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4eba\u6c11\u5e01\u6807\u8bc6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rmb_tag"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(1)"}),(0,r.jsx)(n.td,{children:"\u9999\u6e2f\u5fae\u4fe1\u652f\u4ed8\u4f7f\u7528\u201crmb_tag\u201d=Y \u548c\u201ctxcurrcd\u201d=CNY \u6765\u8868\u793a\u4ea4\u6613\u5e01\u79cd\u4e3a\u4eba\u6c11\u5e01\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5ba2\u6237\u6269\u5c55\u4fe1\u606f"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"extend_info"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"user_creid"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"user_truename"})]}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["\u5b9e\u540d\u5ba2\u6237\u8eab\u4efd\u8bc6\u522b\u3002 \u8be5\u53c2\u6570\u76ee\u524d\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u5e76\u4e14\u9700\u8981\u9488\u5bf9\u6240\u9009\u7684",(0,r.jsx)(n.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E7%B1%BB%E5%9E%8B",children:"PayType"}),"\u4f7f\u7528\u5fae\u4fe1\u663e\u5f0f\u6fc0\u6d3b\u3002 \u53c2\u6570\u201cuser_creid\u201d\u4e2d\u5305\u542b\u6d88\u8d39\u8005\u7684",(0,r.jsx)(n.strong,{children:"\u8eab\u4efd\u8bc1\u53f7\u7801"}),"\uff0c\u201cuser_truename\u201d\u4e2d\u5fc5\u987b\u63d0\u4f9b\u7f16\u7801\u5f62\u5f0f\u6216\u6c49\u5b57\u4e66\u5199\u7684\u4ed8\u6b3e\u4eba",(0,r.jsx)(n.strong,{children:"\u771f\u5b9e\u59d3\u540d"}),'\u3002 \u4e00\u4e2a\u4f8b\u5b50\u5982\u4e0b\u6240\u793a\uff1b extend_info = \'{"user_creid":"430067798868676871","user_truename":"\\\\u5c0f\\\\u6797"}\'']})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u7c7b\u578b"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsxs)(n.td,{children:["\u5fae\u4fe1\u5728\u7ebf\u652f\u4ed8 \u4ea4\u6613\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"800201"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7cfb\u7edf\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," \u8be5\u53c2\u6570\u503c\u7528\u4f5c\u6e05\u7b97\u622a\u6b62\u65f6\u95f4\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u54cd\u5e94\u4fe1\u606f"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5176\u4ed6\u7559\u8a00\u4fe1\u606f"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5916\u90e8\u4ea4\u6613\u7f16\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u4ea4\u6613\u53f7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay\u4ea4\u6613\u7f16\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8fd4\u56de\u7801"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000 = \u8bf7\u6c42\u6210\u529f\u3002 ",(0,r.jsx)("br",{})," 1143/1145=\u8981\u6c42\u5546\u6237\u7ee7\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c\u3002 ",(0,r.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u8fd4\u56de\u7801\u5747\u8868\u793a\u4ea4\u6613\u5931\u8d25\u3002 \u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"../../preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u4ea4\u6613\u72b6\u6001\u4ee3\u7801"}),"\u9875\u9762\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u54cd\u5e94\u4ee3\u7801\u5217\u8868\u3002"]})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(34164),d=t(23104),a=t(56347),i=t(205),c=t(57485),l=t(31682),o=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,d=u(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:d}))),[l,h]=x({queryString:t,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),y=(()=>{const e=l??j;return p({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{y&&c(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,d]),tabValues:d}}var m=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function _(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,d.a_)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(l(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:d}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...d,className:(0,s.A)("tabs__item",y.tabItem,d?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function f(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(_,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function v(e){const n=(0,m.A)();return(0,g.jsx)(f,{...e,children:h(e.children)},String(n))}},56366:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/online_qr_process-02c1b5b23210721fd62b3b3269cf0fbc.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},d=r.createContext(s);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);