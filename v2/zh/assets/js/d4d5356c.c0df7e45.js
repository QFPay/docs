"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[5495],{63354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),d=t(11470),a=t(19365);const i={},l="\u9000\u6b3e",c={id:"common-api/refunds",title:"\u9000\u6b3e",description:"\u53ea\u6709\u8fd4\u56de\u7801\u4e3a0000(\u4ea4\u6613\u6210\u529f)\u7684\u4ea4\u6613\u53ef\u4ee5\u88ab\u9000\u6b3e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-common-api/03-refunds.md",sourceDirName:"04-common-api",slug:"/common-api/refunds",permalink:"/docs/v2/zh/docs/common-api/refunds",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u51b2\u6b63/\u53d6\u6d88",permalink:"/docs/v2/zh/docs/common-api/reversal-cancel"},next:{title:"\u5f02\u6b65\u901a\u77e5",permalink:"/docs/v2/zh/docs/common-api/asynchronous-notification"}},o={},u=[{value:"\u9000\u6b3eAPI\u7aef\u70b9",id:"\u9000\u6b3eapi\u7aef\u70b9",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u9000\u6b3e",children:"\u9000\u6b3e"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u53ea\u6709\u8fd4\u56de\u7801\u4e3a0000(\u4ea4\u6613\u6210\u529f)\u7684\u4ea4\u6613\u53ef\u4ee5\u88ab\u9000\u6b3e"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9000\u6b3eapi\u7aef\u70b9",children:"\u9000\u6b3eAPI\u7aef\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\u8bf7\u6c42\u5934\u90e8:\n\n{\n  Content-Type: application/x-www-form-urlencoded;\n  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********\n  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19\n}\n\n\u8bf7\u6c42\u6b63\u6587:\n\n{\n  txamt=10&syssn=20191227000200020061752831&out_trade_no=12345678&txdtm=2019-12-27 10:39:39&key=0E32A59A8B454940A2FF39**********&mchid=ZaMVg*****\n}\n\n"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(a.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nfrom hashids import Hashids\nimport datetime\nimport string\nimport random\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37**********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)         \nrandom_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))                       \n  \n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #Partial or full refund amount\nsyssn = '20191227000200020061752831' #Original transaction number\nout_trade_no = random_string\ntxdtm = current_time \nkey = client_key\nmchid = 'ZaMVg*****'\n\n\n#data ={'txamt': txamt, 'syssn': syssn, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}\ndata ={'mchid': mchid, 'txamt': txamt, 'syssn': syssn,  'out_trade_no': out_trade_no, 'txdtm': txdtm}\n\nr = requests.post(environment+\"/trade/v1/refund\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class Refund {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37**********";\n        String key="0E32A59A8B454940A2FF39**********";\n        String mchid="ZaMVg*****"; // Only Agents must provide the mchid\n\n        String out_trade_no= "22333444455555";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="15";\n        String syssn="20191227000300020061662295";\n         //\u5982\u679c\u662f\u56fd\u5185\u94b1\u53f0\uff0c\u4ea7\u54c1\u540d\u79f0\u5bf9\u5e94\u7684\u5b57\u6bb5\u662fgoods_name\uff0c\u4e0d\u662fproduct_name.\n         //String product_name="Test Name";\n\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("syssn", syssn);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n         //\u5982\u679c\u662f\u56fd\u5185\u94b1\u53f0\uff0c\u7f51\u5740\u662f\uff1ahttps://openapi-test.qfpay.com.\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/refund", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37**********'\nconst client_key = '0E32A59A8B454940A2FF3***********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'syssn': '20191231000300020063521806',\n'txamt': '10',\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/refund\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(a.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-hk.qfapi.com';\n     $api_type = '/trade/v1/refund';\n     $syssn = '20200311066100020000977840';\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get the currend date-time  \n     \n     $fields_string = '';\n     $fields = array(\n\t  //'mchid' => urlencode($mchid),\n    'syssn' => urlencode($syssn),\n\t  'out_trade_no' => urlencode(GetRandStr(20)),\n\t  'txamt' => urlencode(2200),\n\t  'txdtm' => $now_time\n    );\n    ksort($fields); //Sort parameters in ascending order from A to Z\n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n\t$fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"orig_syssn": "20191227000200020061752831", \n"sysdtm": "2019-12-27 11:11:23", \n"paydtm": "2019-12-27 11:11:26", \n"txdtm": "2019-12-27 11:10:38", \n"udid": "qiantai2", \n"txcurrcd": "EUR", \n"txamt": "10", \n"resperr": "success", \n"respmsg": "", \n"out_trade_no": "RGNOEIVU9JZLNP9GGYXWXCW7OEMI720F", \n"syssn": "20191227000300020061652643", \n"respcd": "0000", \n"chnlsn": "2019122722001411461404119764", \n"cardcd": ""\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST ../trade/v1/refund"})}),"\n",(0,r.jsx)(n.p,{children:"\u5546\u6237\u53ef\u4ee5\u4f7f\u7528\u9000\u6b3eAPI\u5bf9\u4ea4\u6613\u8fdb\u884c\u9000\u6b3e\u3002\u5546\u6237\u8d26\u6237\u5fc5\u987b\u5728\u540c\u4e00\u4ea4\u6613\u65e5\u6709\u8db3\u591f\u7684\u4ea4\u6613\u91d1\u989d\u624d\u80fd\u8fdb\u884c\u4ea4\u6613\u9000\u6b3e, \u5355\u7b14\u4ea4\u6613\u7684\u6700\u9ad8\u9000\u6b3e\u91d1\u989d\u4e0d\u5f97\u8d85\u8fc7\u539f\u59cb\u4ed8\u6b3e\u91d1\u989d\u3002\u9664\u975e\u53e6\u6709\u8bf4\u660e\uff0c\u9000\u6b3e\u8bf7\u6c42\u4e00\u65e6\u63d0\u4ea4\u5e76\u88ab\u63a5\u53d7\uff0c\u5c31\u4e0d\u53ef\u64a4\u9500\u3002\u4e0d\u540c\u652f\u4ed8\u6e20\u9053\u7684\u9000\u6b3e\u9650\u91cf\u548c\u6700\u957f\u9000\u6b3e\u671f\u9650\u6709\u6240\u4e0d\u540c, \u8bf7\u8054\u7cfb\u60a8\u7684\u94b1\u65b9\u652f\u63f4\u4ee3\u8868\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u94b1\u65b9\u8ba2\u5355\u6d41\u6c34\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsxs)(n.td,{children:["\u8ba1\u5212\u9000\u6b3e\u7684\u539f\u8ba2\u5355\u7684 ",(0,r.jsx)(n.code,{children:"syssn"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9000\u6b3e\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u9000\u6b3e\u8ba2\u5355\u53f7/\u5546\u6237\u5e73\u53f0\u9000\u6b3e\u8ba2\u5355\u53f7: \u8fd9\u4e2a\u53c2\u6570\u5bf9\u4e8e\u7cfb\u7edf\u4e2d\u540c\u4e00\u5546\u6237\u8d26\u6237\u4e0b\u7684\u6bcf\u6b21\u652f\u4ed8\u548c\u9000\u6b3e\u8bf7\u6c42\u5fc5\u987b\u662f\u552f\u4e00\u7684"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9000\u6b3e\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsxs)(n.td,{children:["\u9000\u6b3e\u91d1\u989d, \u4ee5\u5206\u4e3a\u5355\u4f4d (i.e. 100 = $1) ",(0,r.jsx)("br",{})," \u90e8\u5206\u9000\u6b3e\u548c\u5168\u90e8\u9000\u6b3e\u90fd\u9700\u8981, \u6709\u90e8\u5206\u652f\u4ed8\u901a\u9053\u4e0d\u652f\u6301\u90e8\u5206\u9000\u6b3e"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5b50\u5546\u6237\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsxs)(n.td,{children:["\u5546\u6237\u4f1a\u6216\u4e0d\u4f1a\u88ab\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"mchid"}),".  \u5982\u679c\u5df2\u7ecf\u88ab\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"mchid"})," , \u9664\u7279\u6b8a\u60c5\u51b5\u4e0b\u5728\u547c\u53ebAPI\u65f6\u5fc5\u987b\u63d0\u4ea4 ",(0,r.jsx)(n.code,{children:"mchid"}),". \u4e0e\u4e4b\u76f8\u53cd\u7684\u662f, \u5982\u679c\u5e76\u672a\u88ab\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"mchid"}),", \u5546\u6237\u65e0\u9700\u5728API\u8bf7\u6c42\u4e2d\u4f20\u9012\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"mchid"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u65f6\u533a"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u4e0b\u5355\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4+0800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8bbe\u5907\u552f\u4e00id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"\u552f\u4e00\u7684\u4ea4\u6613\u8bbe\u5907ID"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9000\u6b3e\u4ea4\u6613\u552f\u4e00\u6d41\u6c34\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"\u65b0\u521b\u5efa\u7684\u9000\u6b3e\u4ea4\u6613\u7684ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u539f\u8ba2\u4ea4\u6613\u6d41\u6c34\u53f7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"orig_syssn"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u88ab\u7528\u4e8e\u9000\u6b3e\u7684\u539f\u4ea4\u6613\u7684\u4ea4\u6613ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8ba2\u5355\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"\u9000\u6b3e\u91d1\u989d, \u4ee5\u5206\u4e3a\u5355\u4f4d (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7cfb\u7edf\u4ea4\u6613\u65f6\u95f4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["\u683c\u5f0f: YYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{}),"\u8fd9\u4e2a\u503c\u88ab\u7528\u4f5c\u7ed3\u7b97\u622a\u6b62\u65f6\u95f4"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8fd4\u56de\u7f16\u7801"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000-\u8bf7\u6c42\u6210\u529f.",(0,r.jsx)("br",{}),"1143/1145 - \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u9000\u6b3e\u4ea4\u6613\u72b6\u6001. ",(0,r.jsx)("br",{}),"\u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7f16\u7801\u90fd\u662f\u5931\u8d25\u503c. \u8bf7\u6839\u636e ",(0,r.jsx)(n.a,{href:"../preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u4ea4\u6613\u72b6\u6001\u7801"})," \u83b7\u53d6\u5b8c\u6574\u7684\u4fe1\u606f."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u54cd\u5e94\u4fe1\u606f"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"\u54cd\u5e94\u7684\u4fe1\u606f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u51c0\u652f\u4ed8\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_fee"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u7528\u6237\u5b9e\u9645\u4ed8\u6b3e\u91d1\u989d = \u4ea4\u6613\u91d1\u989d - \u4f18\u60e0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u8d27\u5e01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_fee_type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u5b9e\u9645\u652f\u4ed8\u8d27\u5e01 e.g. CNY"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u51c0\u9000\u6b3e\u91d1\u989d"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_refund_fee"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u5b9e\u9645\u9000\u6b3e\u91d1\u989d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9000\u6b3e\u8d27\u5e01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_refund_fee_type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u5b9e\u9645\u9000\u6b3e\u8d27\u5e01 e.g. CNY"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(34164),d=t(23104),a=t(56347),i=t(205),l=t(57485),c=t(31682),o=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,d=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:d}))),[c,u]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,d]),tabValues:d}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),o=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:d}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...d,className:(0,s.A)("tabs__item",f.tabItem,d?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(_,{...e,...n})]})}function v(e){const n=(0,j.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},d=r.createContext(s);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);