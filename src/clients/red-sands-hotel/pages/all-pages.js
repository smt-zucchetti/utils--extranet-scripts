import load from 'little-loader';


load('https://www.googletagmanager.com/gtag/js?id=UA-55231242-1', function(err){
    console.log('script working');
    window.dataLayer = window.dataLayer || [];
    const gtag = function(){
        dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'UA-55231242-1');
});
