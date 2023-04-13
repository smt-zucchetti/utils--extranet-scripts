import * as utils from './../../../lib/utils'

export function flipToScript()
{
    utils.populateBeAttributes().then(() =>
    {
        !function(b,e){
            (b[e]=b[e]||[]).push({ flipto: { bookingEngine: 'verticalbooking', companyCode: 'PZ', code: '23256' } });
        }(window,'fliptoDataLayer');
        
        utils.loadScript('https://integration.flip.to/K2X4KDP');
    
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            const dataObj = {
                companyCode: 'PZ',
            	code: '23256',
            	confirmation: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                loyalty: utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                first: utils.BE_ATTRIBUTES.cmWidgetValues.referentFirstName,
                last: utils.BE_ATTRIBUTES.cmWidgetValues.referentLastName,
                email: utils.BE_ATTRIBUTES.cmWidgetValues.referentEmail,
                startDate: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                endDate: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                guests: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy,
                adults: utils.BE_ATTRIBUTES.cmWidgetValues.adults,
                children: utils.BE_ATTRIBUTES.cmWidgetValues.children,
                type: utils.BE_ATTRIBUTES.cmWidgetValues.roomName,
                rateCode: utils.BE_ATTRIBUTES.cmWidgetValues.productCode,
                language: utils.BE_ATTRIBUTES.cmWidgetValues.language,
                currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                amount: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
            	//addonAmount: 234.56,
            	dateFormat: 'yyyy-MM-dd'
            }
            
            !function(n,e,w){
            	w.eventData={category:'Booking_Engine',action:'Load',value:w.amount};
            	(n[e]=n[e]||[]).push({flipto:w,event:'flipto.confirmation.load'});
            }(window,'fliptoDataLayer', dataObj);
        }
    });
}