import * as utils from './../../../lib/utils';
import * as client from './data/client';


export function premiumBackgroundImages()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.Premium)
        {
            let discountButtonColorObj = 
            {
                17491:  '#ac3587', 
                17493:  '#a3b7a3',
                17494:  '#004F57',
                17495:  '#3F0600',
                17409:  '#5c1e3f',
                17437:  '#19487b'
            };
            
            let propId = parseInt(utils.BE_ATTRIBUTES.propId);
            let styleId = parseInt(utils.BE_ATTRIBUTES.styleId);
            let brandId = parseInt(utils.BE_ATTRIBUTES.brandId);
            let isBrandBe = false;
           
            if(propId === null || propId === 0 || isNaN(propId) || styleId === 18303)
            {
                propId = '';
                styleId = styleId ? styleId : 18033;
                isBrandBe = true;
            }

            if(styleId === 0 || styleId === 9215)
            {
                if(!brandId)
                {
                    for(const [key,val] of Object.entries(client.propIdToBrandId))
                    {
                        if(val.includes(propId))
                        {
                            brandId = key;
                            break;
                        }
                    }
                }
                styleId = client.brandIdToStyleId[brandId];
           }
           
            let bgImgUrl = '';
            if(isBrandBe)
            {
                bgImgUrl = `https://reservations.verticalbooking.com//premium/img/img_stile_${styleId}.jpg`;   
            }
            else if(!styleId || styleId === 0)
            {
                bgImgUrl = 'https://booking.amrcollection.com/premium/img/img_stile_18303.jpg';
            }
            else
            {
                bgImgUrl = `https://reservations.verticalbooking.com/img_templ/img_stili_${styleId}/${propId}.jpg`;
            }

            document.documentElement.style.setProperty('--bgImage', `url(${bgImgUrl}) transparent center/cover fixed no-repeat`);
            
            if(discountButtonColorObj[utils.BE_ATTRIBUTES.styleId])
            {
                document.documentElement.style.setProperty('--discountButtonColor', discountButtonColorObj[styleId]);    
            }
            
            import('./styles/premium-background-images.scss');
        }
    })
}