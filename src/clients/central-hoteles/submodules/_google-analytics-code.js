import * as utils from './../../../lib/utils';

export async function googleAnalyticsCode()
{
    await utils.populateBeAttributes();
    
    gtag_enabled = false;
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
              m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    
    var allowedOrigins = [];
    allowedOrigins = [/\.(com|net|it|ru)$/];
    
    
    if(utils.BE_ATTRIBUTES.page === 'first_page')
    {
        
 
        ga('create', 'UA-51817018-1', 'auto', {
            'allowLinker': true
        });
        ga('require', 'linker');
        ga('linker:autoLink', allowedOrigins, true, true);
        ga('require', 'displayfeatures');
        ga('require', 'linkid', 'linkid.js');
        ga('send', 'pageview', {
            'page': '/premium/index.html'
        });
        
        
        
        await utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-J0QBDVD27H');
        
        window.dataLayer = window.dataLayer || [];
        function gtagJ0QBDVD27H(){dataLayer.push(arguments);}
     
        gtagJ0QBDVD27H('js', new Date());

        var allowedOrigins = [/\.(com|net|it|ru)$/];

        gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', {
            'allow_google_signals': true,
            'linker': {
                'domains': allowedOrigins
            }
        });
      
        gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', {
            'send_page_view': false,
            'page_path': '/premium/index.html'
        });
        
        
        
    }
    else if(utils.BE_ATTRIBUTES.page === 'results')
    {
        
    }
    

}