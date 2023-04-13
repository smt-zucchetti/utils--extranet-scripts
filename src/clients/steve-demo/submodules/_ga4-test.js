import * as utils from './../../../lib/utils'

export function ga4Test()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('js', new Date());
            gtag('config', 'TAG_ID');
            
            const idArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod.split(' - ');
            const nameArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomName.split(' - ');
            const rateArr = utils.BE_ATTRIBUTES.cmWidgetValues.productName.split(' - ');
            const itemArr = [];
            let id, name, cat;
            for(let i = 0; i < idArr.length; i++)
            {
                itemArr.push({item_id: idArr[i], item_name: nameArr[i], item_category: rateArr[i]});
            }
            
            const purchaseObj =
            {
                transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                value: utils.BE_ATTRIBUTES.cmWidgetValues.total,
                items: itemArr    
            }
             
            gtag('event', 'purchase', purchaseObj);
            
        }
    });
}
        
        