import * as utils from './../../../lib/utils';

export async function addScriptToThankYouPage()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        
        function zync_call() {
            var z = document.createElement("script");
            var custom1="{number_of_guests}";
            var custom2="{Dates}";
            var custom3="{room_type}";
            var custom4="{services}";
            var zmpID="marea-sol-hotel";
            var cache_buster=Date.now();
    
            var z_src = "https://live.rezync.com/sync?c=16b6410431b6374e780104abb0443ca8&p=99a7724385593e785cd7f3816c5cdf4e&k=marea-sol-hotel-pixel-8008&custom1="+custom1+"&custom2="+custom2+"&custom3="+custom3+"&custom4="+custom4+"&zmpID="+zmpID+"&cache_buster="+cache_buster;
            z.setAttribute("src", z_src);
            document.body.appendChild(z);
        }
    
        if (['complete', 'interactive'].indexOf(document.readyState) >= 0) {
            zync_call();
        } else {
            window.addEventListener("DOMContentLoaded", function(){
                zync_call();
            });
        }
    }
}