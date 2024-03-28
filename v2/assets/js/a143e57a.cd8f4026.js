"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[32],{26581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(74848),i=n(28453),s=(n(11470),n(19365),n(28774));const a={},d="WeChat Pay JSAPI (in wechat browser)",l={id:"online-shop/wechat/wechat-pay-jsapi",title:"WeChat Pay JSAPI (in wechat browser)",description:"WeChat JSAPI process-flow",source:"@site/docs/03-online-shop/06-wechat/02-wechat-pay-jsapi.md",sourceDirName:"03-online-shop/06-wechat",slug:"/online-shop/wechat/wechat-pay-jsapi",permalink:"/docs/v2/docs/online-shop/wechat/wechat-pay-jsapi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"WeChat Web QRC Payments",permalink:"/docs/v2/docs/online-shop/wechat/wechat-web-qrc-payments"},next:{title:"WeChat Pay H5 (in mobile browser)",permalink:"/docs/v2/docs/online-shop/wechat/wechat-pay-h5"}},c={},o=[{value:"GET oauth_code",id:"get-oauth_code",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"GET openid",id:"get-openid",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Request Parameters",id:"request-parameters-1",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"POST Payments",id:"post-payments",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Request Parameters",id:"request-parameters-2",level:3},{value:"Response Parameters",id:"response-parameters-1",level:3},{value:"GET WeChat Pay Data",id:"get-wechat-pay-data",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Request Parameters",id:"request-parameters-3",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"wechat-pay-jsapi-in-wechat-browser",children:"WeChat Pay JSAPI (in wechat browser)"}),"\n",(0,r.jsx)(s.A,{href:"/img/wechat_jsapi_process.jpg",target:"_blank",children:(0,r.jsx)(t.img,{alt:"WeChat JSAPI process-flow",src:n(85627).A+"",width:"1414",height:"780"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Official account payments must be initiated from the WeChat in-app browser. They cannot be initiated from another browser, such as Chrome or Safari."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"JSAPI Payment Types"})}),"\n",(0,r.jsxs)(t.p,{children:["Note: Merchants in Canada, please refer to ",(0,r.jsx)(t.a,{href:"../alipay/alipay-online-payments#alipay-online-payments",children:"this"})," section for payment request and response parameters with ",(0,r.jsx)(t.code,{children:"pay_type"})," 800207. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.p,{children:"There are two different methods how JSAPI payments can be implemented."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"1. JSAPI with Real Name Authenticated Official Accounts"})}),"\n",(0,r.jsxs)(t.p,{children:["For this kind of integration, merchants shall register their own official account with WeChat and we will bind the official account to the merchant's QF Pay payment account. In this case merchants can create and publish their own content, access customer information and collect their own followers. When choosing this implementation method, merchants have to acquire the ",(0,r.jsx)(t.code,{children:"oauth_code"}),", user ",(0,r.jsx)(t.code,{children:"openid"})," and trigger WeChat Pay via the ",(0,r.jsx)(s.A,{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1",children:"official WeChat platform"}),". Merchants only need to refer to the QF Pay ",(0,r.jsx)(t.a,{href:"../../common-api/transaction-enquiry",children:"transaction enquiry API endpoint"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1:"})," WeChat official account payments are available to developers after they completed real name authentication on the WeChat official account platform. Once authentication has been completed developers can obtain the openid parameter of the certified public account. Please refer to the official ",(0,r.jsx)(t.a,{href:"https://developers.weixin.qq.com/doc/offiaccount/en/Getting_Started/Overview.html",children:"WeChat documentation"})," for more information."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2:"})," Request the QFPAY order payment API ",(0,r.jsx)(t.code,{children:"/trade/v1/payment"})," by providing the appointed ",(0,r.jsx)(t.code,{children:"openid"})," and return the ",(0,r.jsx)(t.code,{children:"pay_params"})," data, for further instructions please refer to the ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#api-endpoint-for-payments",children:"API Endpoint for Payments"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 3:"})," Open JSAPI Payment Authorization Directory at the time of the merchant certification application to initiate payments. For more details please refer to the ",(0,r.jsx)(t.a,{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6",children:"official WeChat Pay documentation"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"2. JSAPI without a Real Name Registered Official Account"})}),"\n",(0,r.jsxs)(t.p,{children:["For this kind of payment, merchants can build upon QF Pay's official account. This integration is only applicable to merchants who are using the indirect settlement option (i.e. settlement is provided by QFPay). For this implementation, merchants shall use QFPay's API to get the ",(0,r.jsx)(t.code,{children:"oauth_code"}),", user ",(0,r.jsx)(t.code,{children:"openid"})," and trigger WeChat Pay as described below."]}),"\n",(0,r.jsx)(t.h2,{id:"get-oauth_code",children:"GET oauth_code"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"GET WeChat oauth_code request:\n\n{\n  https://openapi-test.qfpay.com/tool/v1/get_weixin_oauth_code?app_code=5D81D64E602043F7AF51CEXXXXXXXXXX&sign=F4D8FB00894F213993B33116BC1B4E10&redirect_uri=https://sdk.qfapi.com\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import hashlib\nimport requests\nfrom flask import Flask, redirect\nfrom flask import request\nimport json\nimport random\nimport datetime\nimport string\nimport urllib\nimport urllib.parse\n\n# Enter Client Credentials\nenvironment = \'https://test-openapi-hk.qfapi.com\'\napp_code = "******"\nclient_key = "******"\n\n# Create MD5 signature \ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append(\'%s=%s\'%(k,v))\n    unsign_str = (\'&\'.join(p) + key).encode("utf-8")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\ndef get_out_code():\n    # Body payload\n    redirect_uri = \'http://49ae4dbd47a6.ngrok.io/getcode\'  \n    data = {\'app_code\': app_code, \'redirect_uri\': redirect_uri}   \n    sign = make_req_sign(data, client_key)\n    \n    return environment+"/tool/v1/get_weixin_oauth_code?app_code="+app_code+"&sign="+sign+"&redirect_uri="+redirect_uri #+"&mchid="+mchid\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Redirect to URL after the GET oauth_code request has been successful:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "http://xg.fshop.top/index.php/wap/pay/wxredirect?showwxpaytitle=1&code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv"\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET ../tool/v1/get_weixin_oauth_code"})}),"\n",(0,r.jsxs)(t.p,{children:["Both the ",(0,r.jsx)(t.code,{children:"app_code"})," and ",(0,r.jsx)(t.code,{children:"sign"})," have to be submitted as parameters instead of in the http header. The URL request has to be send in the WeChat environment. Everytime a payment is initiated the WeChat ",(0,r.jsx)(t.code,{children:"oauth_code"})," and ",(0,r.jsx)(t.code,{children:"openid"})," have to be obtained again."]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Developer ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"app_code"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"The app_code is assigned to partners by QFPay"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Callback URL"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"redirect_uri"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsx)(t.td,{children:"After the request has been successful the user will be redirected to the callback address"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Merchant ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"mchid"})," is a unique identification for every merchant assigned by QFPay"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Signature"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sign"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Signature obtained according to the unified framework"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"get-openid",children:"GET openid"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\nHTTP Request:\n\n{\n  https://openapi.qfpay.com/tool/v1/get_weixin_openid?code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv\n}\n\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def get_open_id(data):\n    \n    try:\n        r = requests.get(environment+"/tool/v1/get_weixin_openid",params=data,headers={\'X-QF-APPCODE\':app_code,\'X-QF-SIGN\':make_req_sign(data, client_key)})\n        print (r.request.url)\n        print (r.content)\n        if r.json()["respcd"]=="0000":\n            return r.json()["openid"]\n        else:\n            pass\n    except:\n        print("An exception occurred")\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "resperr": "",\n  "respcd": 0000,\n  "respmsg": "",\n  "openid": "oo3Lss8d0hLOuyTuSJMVwLTk68JE"\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Everytime the payment interface is called a new ",(0,r.jsx)(t.code,{children:"oauth_code"})," and ",(0,r.jsx)(t.code,{children:"openid"})," must be obtained. In order to request the ",(0,r.jsx)(t.code,{children:"openid"})," the ",(0,r.jsx)(t.code,{children:"X-QF-APPCODE"})," and ",(0,r.jsx)(t.code,{children:"X-QF-SIGN"})," have to be submitted in the http header."]})}),"\n",(0,r.jsx)(t.h3,{id:"http-request-1",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET ../tool/v1/get_weixin_openid"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters-1",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Secondary parameter code"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"WeChat oauth_code"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"code"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["The code is returned by the ",(0,r.jsx)(t.a,{href:"#get-oauth_code",children:"GET oauth_code request"}),". It is unique and can only be used once."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Merchant ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"mchid"})," is a unique identification for every merchant assigned by QFPay"]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Secondary parameter code"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"openid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsx)(t.td,{children:"WeChat openid"}),(0,r.jsx)(t.td,{children:"Every WeChat user is assigned a unique openid"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"post-payments",children:"POST Payments"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"For code instructions select Python with the tabs above.\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def payment(openid):\n    # Create parameter values for data payload\n    current_time = datetime.datetime.now().replace(microsecond=0)                                \n    # Body payload\n    txamt = \'1\' #In USD,EUR,etc. Cent\n    txcurrcd = \'THB\'\n    pay_type = \'800207\' \n    letters = string.digits   \n    out_trade_no = \'\'.join(random.choice(letters) for i in range(20)) \n    txdtm = current_time\n    key = client_key\n    \n    \n    data = {\'txamt\': txamt, \'txcurrcd\': txcurrcd, \'pay_type\': pay_type, \'out_trade_no\': out_trade_no, \'txdtm\': txdtm, \'sub_openid\':openid}    \n    \n    try:\n        r = requests.post(environment+"/trade/v1/payment",params=data,headers={\'X-QF-APPCODE\':app_code,\'X-QF-SIGN\':make_req_sign(data, key)})\n        if r.json()["respcd"]=="0000":\n            \n            return r.json()[\'pay_params\']\n        else:\n            pass\n    except:\n        print("An exception occurred")\n    \n    \napp = Flask(__name__)\n\n@app.route("/payment",methods=[\'GET\', \'POST\'])\ndef api_payment():\n    \n    if "MichroMessenger" in request.headers.get(\'User-Agent\'):  #get an oauth_code\n        print (get_out_code())\n        return redirect(get_out_code(), code=302)    \n    \n@app.route("/getcode",methods=[\'GET\', \'POST\'])\ndef api_get_code():      \n    print ("------------------------------------")\n    print (request.args)                      \n    print (request.args.get("code"))\n    code = request.args.get(\'code\')\n    print (code)\n    if code != "":    # user returned with oauth_code      \n        \n        sub_openid=get_open_id({"code": code})  # get open id using oauth_code\n        param=payment(sub_openid)   # payment request to QFPay\n        \n        # add necessary parameters and redirect\n        param["mchntnm"]="Pet Shop"\n        param["txamt"]="1"\n        param["currency"]="THB"\n        param["redirect_url"]="www.example.com"\n        return redirect("https://o2-th.qfapi.com/q/direct?"+urllib.parse.urlencode(param), code=302)             # direct user"""\n    else:\n        print("unable to obtain code")\n        return     \n\nif __name__ == \'__main__\':\n    app.run(host="127.0.0.1",port = 80)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Optionally merchants can activate real-name authentication with WeChat. Currently real-name identification is only available for Mainland Chinese citizens and include a person's real name and national ID card number. In case identification is provided the payer's wallet information like a connected bank card must be identical with the data provided by merchants. If customers did not yet bind their WeChat account to a bank card the payment will go through regardless."}),"\n",(0,r.jsx)(t.h3,{id:"http-request-2",children:"HTTP Request"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)(t.code,{children:"PayType: 800207"})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters-2",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameters"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"Refer to the general documentation about transactions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"WeChat authorization code"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sub_openid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["WeChat OpenID. Refer to the ",(0,r.jsx)(t.strong,{children:"GET openid"})," documentation"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Designated payment method"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"limit_pay"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Used to limit credit card transactions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Extended Customer Info"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"extend_info"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsxs)(t.td,{children:["Real name customer identification. This parameter is currently only available for Mainland Chinese citizens and needs to be explicitly activated with WeChat for the selected ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#payment-codes",children:"PayType"}),". The consumer's ",(0,r.jsx)(t.strong,{children:"national ID card number"})," is contained in the parameter ",(0,r.jsx)(t.code,{children:"user_creid"})," and the payer's ",(0,r.jsx)(t.strong,{children:"real name"})," in encoded form or written in Chinese characters must be provided in ",(0,r.jsx)(t.code,{children:"user_truename"}),'. An example looks like this; extend_info = \'{"user_creid":"430067798868676871","user_truename":"\\\\u5c0f\\\\u6797"}\'']})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters-1",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Secondary parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"pay_params"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"appId"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(16)"}),(0,r.jsx)(t.td,{children:"Public number id"}),(0,r.jsx)(t.td,{children:"The App ID is provided by Tencent once developers register their Mini Program on the WeChat developer portal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"timeStamp"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"Timestamp"}),(0,r.jsx)(t.td,{children:"Current time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nonceStr"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"Random string"}),(0,r.jsx)(t.td,{children:"Random string with no more than 32 bits"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"package"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,r.jsx)(t.td,{children:"Transaction details"}),(0,r.jsxs)(t.td,{children:["The value of the ",(0,r.jsx)(t.code,{children:"prepay_id"})," parameter returned by the interface has the format: prepay_id=**"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"signType"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"Signature method"}),(0,r.jsx)(t.td,{children:"Signature method, default is MD5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"paySign"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(64)"}),(0,r.jsx)(t.td,{children:"Signature"}),(0,r.jsx)(t.td,{children:"Signature method, default is MD5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public response parameters"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"txcurrcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(3)"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Transaction currency. View the ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"get-wechat-pay-data",children:"GET WeChat Pay Data"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Directly submit the related parameters to the interface, there is no need to define ",(0,r.jsx)(t.code,{children:"X-QF-APPCODE"})," or ",(0,r.jsx)(t.code,{children:"X-QF-SIGN"})," in the HTTP header during this step."]})}),"\n",(0,r.jsx)(t.h3,{id:"http-request-3",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET https://o2.qfpay.com/q/direct"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters-3",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mchntnm"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsxs)(t.td,{children:["Custom business name. Parameter needs to be ",(0,r.jsx)(t.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{children:"Amount"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currency"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"goods_name"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsxs)(t.td,{children:["Custom goods name. Parameter needs to be ",(0,r.jsx)(t.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"redirect_url"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsxs)(t.td,{children:["Redirect URL after Payment is complete.  ",(0,r.jsx)(t.strong,{children:"Urlencode"})," handles this parameter"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"package"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeStamp"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"signType"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"paySign"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"appId"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"nonceStr"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"Parameter return from WeChat after calling the payment API"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),i=n(34164),s=n(23104),a=n(56347),d=n(205),l=n(57485),c=n(31682),o=n(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,h]=u({queryString:n,groupId:i}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,o.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),y=(()=>{const e=c??j;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),i=d[n].value;i!==r&&(c(t),a(i))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:o,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function _(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(b,{...e,...t})]})}function A(e){const t=(0,m.A)();return(0,f.jsx)(_,{...e,children:h(e.children)},String(t))}},85627:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/wechat_jsapi_process-c66ac2b5003793d764fc381851054d0e.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);