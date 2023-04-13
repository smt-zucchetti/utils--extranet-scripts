import * as utils from './../../../lib/utils';

export function gtmScript()
{
    utils.googleTagManager('GTM-NPQ2T4L');
    // utils.populateBeAttributes().then(() =>
    // {
    //     const tagId = 'GTM-NPQ2T4L';
        
    //     utils.loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=${tagId}`).then(() =>
    //     {
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
            
    //         gtag('config', tagId);
            
    //         if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    //         {
    //             const idArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod.split(' - ');
    //             const nameArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomName.split(' - ');
    //             const rateArr = utils.BE_ATTRIBUTES.cmWidgetValues.productName.split(' - ');
    //             const itemArr = [];
    //             let id, name, cat;
    //             for(let i = 0; i < idArr.length; i++)
    //             {
    //                 itemArr.push({item_id: idArr[i], item_name: nameArr[i], item_category: rateArr[i]});
    //             }
                
    //             const purchaseObj =
    //             {
    //                 transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
    //                 currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
    //                 value: utils.BE_ATTRIBUTES.cmWidgetValues.total,
    //                 items: itemArr    
    //             }
                 
    //             console.log('event', 'purchase', purchaseObj); 
    //             gtag('event', 'purchase', purchaseObj);   
    //         }
    //     });
    // });
    
    
    
    
    // utils.populateBeAttributes().then(() =>
    // {
    //     (function(w,d,s,l,i) {
    //         w[l]=w[l]||[];
    //         w[l].push({
    //             'gtm.start': new Date().getTime(),
    //             event:'gtm.js'
    //         });
    //         var f=d.getElementsByTagName(s)[0],
    //         j=d.createElement(s),
    //         dl=l!='dataLayer'?'&l='+l:'';
    //         j.async=true;
    //         j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    //         f.parentNode.insertBefore(j,f);
    //     })(window,document,'script','dataLayer', 'GTM-NPQ2T4L');
       
    //     if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    //     {
    //         window.dataLayer = window.dataLayer || [];
    //         const dataObj =
    //         {
    //             transactionId: utils.BE_ATTRIBUTES.cmWidgetValues.code, // reservation confirmation number from transaction
    //             transactionAffiliation: 'Waypoint Hotel',
    //             transactionTotal: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes, // transaction total without tax
    //             transactionTax: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes, // transaction tax
    //             quantity: utils.BE_ATTRIBUTES.cmWidgetValues.nights, // quantity of nights
    //             transactionProducts: utils.BE_ATTRIBUTES.cmWidgetValues.roomCod.split(' - ').map((roomCod, idx) =>
    //             {
    //                 const roomName = utils.BE_ATTRIBUTES.cmWidgetValues.roomName.split(' - ')[idx]
    //                 return {
    //                     sku: `${roomName}_${roomCod}`,
    //                     name: roomName,
    //                     category: utils.BE_ATTRIBUTES.cmWidgetValues.productCodName.split(' - ')[idx],
    //                     price: utils.BE_ATTRIBUTES.cmWidgetValues.priceNight,
    //                     quantity: utils.BE_ATTRIBUTES.cmWidgetValues.nights
    //                 }
    //             })
    //         };
    //         dataLayer.push(dataObj);
    //     }
        
    // });
}