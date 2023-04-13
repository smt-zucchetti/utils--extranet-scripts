import * as utils from './../../../lib/utils'

export function rearrangeCountryDropDown()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            utils.waitForElement('#nazione', false, 5000).then(el =>
            {
                let refNode
                Array.from(el.options).forEach((opt, idx) =>
                {
                  if(opt.value === 'US' || opt.value === 'CA')
                  {
                    refNode = el.options[0]
                    refNode.parentNode.insertBefore(opt, refNode.nextSibling);  
                  }  
                })
                
                Array.from(el.options).forEach((opt, idx) =>
                {
                  if(opt.value === 'MX')
                  {
                    refNode = el.options[0]
                    refNode.parentNode.insertBefore(opt, refNode.nextSibling);  
                  }  
                })  
            })      
        }
    })
}