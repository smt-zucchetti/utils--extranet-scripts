import * as utils from './../../../lib/utils';

export async function glopImage()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.page !== 'thank_you_page')
    {
        return;
    }
    
    const glopIdMap = 
    {
        '17418': 159,
        '17417': 159,
        '22383': 988
    }
    
    const glopId = glopIdMap[utils.BE_ATTRIBUTES.propId]; 
    
    var adv_sub = `${utils.BE_ATTRIBUTES.cmWidgetValues.code}  ${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}`;
    var adv_sub2 = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;  
    var adv_sub3 = utils.BE_ATTRIBUTES.propId;
    var amount = utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes;
    var  glop_id = 159;
    var  adv_pixel_url =  `//lamp.glopss.com/aff_l?offer_id=${glop_id}&amount=${amount}`; 
    adv_pixel_url = adv_pixel_url + `&adv_sub=${adv_sub}&adv_sub2=${adv_sub2}&adv_sub3=${adv_sub3}`; 
	
    (function() 
    { 
	    var glopImage = new Image(1, 1);
	    glopImage.src = adv_pixel_url;
	    document.body.appendChild(glopImage);   
 	})();  

}