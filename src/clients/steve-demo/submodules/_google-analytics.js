import * as utils from './../../../lib/utils'

export function googleAnalytics()
{
    utils.populateBeAttributes().then(() => 
    {
        utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-LMHL08NH9Q').then(() =>
        {
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            
            gtag('js', new Date())
            gtag('config', 'G-LMHL08NH9Q', {'debug_mode':true})
            
            if(utils.BE_ATTRIBUTES.page === 'first-page')
            {
                const transId = Math.floor(Math.random()*90000) + 10000
                const itemVal = Math.floor(1000 + Math.random() * 9000)
                
                gtag('event', 'purchase',  
                {
                    transaction_id: `T_${transId}`,
                    affiliation: 'Google Merchandise Store',
                    value: itemVal,
                    tax: 4.90,
                    shipping: 5.99,
                    currency: "USD",
                    coupon: 'SUMMER_SALE',
                    items: [
                    {
                        item_id: 'SKU_23456',
                        item_name: 'Stan and Enemies Shorts',
                        affiliation: 'Yahoo Merchandise Store',
                        coupon: 'SUMMER_FAIL',
                        currency: 'USD',
                        discount: 2.22,
                        index: 0,
                        item_brand: 'Yahoo',
                        item_category: 'Apparel',
                        item_category2: 'Adult',
                        item_category3: 'Shorts',
                        item_category4: 'Short',
                        item_category5: 'Short Short',
                        item_list_id: 'related_products',
                        item_list_name: 'Related Products',
                        item_variant: 'red',
                        location_id: 'L_23456',
                        price: 20.99,
                        quantity: 1
                    }]
                })
            }
            
            if(utils.BE_ATTRIBUTES.page === 'results')
            {
                gtag('event', 'purchase',  
                {
                    transaction_id: 'T_12345_3',
                    affiliation: 'Google Merchandise Store',
                    value: 25.42,
                    tax: 4.90,
                    shipping: 5.99,
                    currency: 'USD',
                    coupon: 'SUMMER_SALE',
                    items: [
                    {
                        item_id: 'SKU_12345',
                        item_name: 'Stan and Friends Tee',
                        affiliation: 'Google Merchandise Store',
                        coupon: 'SUMMER_FUN',
                        currency: 'USD',
                        discount: 2.22,
                        index: 0,
                        item_brand: 'Google',
                        item_category: 'Apparel',
                        item_category2: 'Adult',
                        item_category3: 'Shirts',
                        item_category4: 'Crew',
                        item_category5: 'Short sleeve',
                        item_list_id: 'related_products',
                        item_list_name: 'Related Products',
                        item_variant: 'green',
                        location_id: 'L_12345',
                        price: 9.99,
                        quantity: 1
                    }]
                })
            }
        })
    })   
}