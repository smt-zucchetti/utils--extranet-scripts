import * as utils from './../../../lib/utils';

export function akiaScript()
{
    utils.populateBeAttributes().then(() =>
    {
        (function(d){ 
            var s=d.createElement('script'), 
            t=d.getElementsByTagName('script')[0]; 
            s.src='https://sys.akia.ai/sdk.js'; 
            t.parentNode.insertBefore(s,t); 
        })(document); 
        
        window.akiaPixelInit = function(akq) { 
            akq.init("c556f815-87e5-4675-8dbd-b15a17d20b80"); 
            akq.track("pageview");
            
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                akq.track("conversion", { value: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes }); 
            }
        };
    });
}