import load from 'little-loader'
import * as submodules from './../submodules/main'

function getURLParameter(name) 
{
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function setCookie(c_name,value,exdays) 
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for(i=0;i<ARRcookies.length;i++) 
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        
        if(x==c_name) 
        {
            return unescape(y);
        }
    }
}

function checkCookie(c_name) 
{
    var c_value=getCookie(c_name);
    if(c_value!=null && c_value!="") 
    {
        return c_value;
    }
    return false;
}

var source_parameter = getURLParameter('source');

if(source_parameter !== 'null')  
{
    setCookie('source', source_parameter, 28);

    var sp_pieces = source_parameter.split('/');
    var spp0_pieces = sp_pieces[0].split('_');
    var phone_number_key = spp0_pieces[1];
    console.log(phone_number_key)

    var phone_number = false;

    if(phone_number_key in submodules.phone_numbers) {
        var phone_number = submodules.phone_numbers[phone_number_key][0];
    }

    if(phone_number) {
        setCookie('phone_number', phone_number, 28);
        console.log(phone_number)
    }
}

var c_phone_number = checkCookie('phone_number');

if(c_phone_number) 
{
    console.log('replace phone number', c_phone_number);
    jQuery('.dynamic-phone-number').text(c_phone_number);
    jQuery("span.dynamic-phone-number").text(function(i, text) 
    {
        var clickText = text.replace(/\./g,'');
        jQuery('.phone-number-link').attr("href", "tel:" + clickText);
        text = text.replace(/\./g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        return text;
    });
}

//Global Site Tag (gtag.js) - GHA/ADWORDS
load('https://www.googletagmanager.com/gtag/js?id=AW-670105291', function(err){
    if(!err)
    {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', 'AW-670105291');
        gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});
    }
    else
    {
        console.log(`failed to load with error: ${err}`);
    }
});

//Global Site Tag (Bing) - Bing Hotel Ads -->
(function(w,d,t,r,u){
    var f,n,i;w[u]=w[u]||[],
    f=function(){
        var o={ti:"13006875"};
        o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
    },
    n=d.createElement(t),
    n.src=r,n.async=1,
    n.onload=n.onreadystatechange=function(){
        var s=this.readyState;
        s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
    },
    i=d.getElementsByTagName(t)[0],
    i.parentNode.insertBefore(n,i)
})(window,document,"script","//bat.bing.com/bat.js","uetq");
