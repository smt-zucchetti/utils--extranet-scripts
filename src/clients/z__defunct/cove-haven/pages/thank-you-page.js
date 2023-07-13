import load from 'little-loader'
import * as utils from './../../../lib/utils' 

//WIHP Tracking Script information
const dataObj = {
    22336: 189133,
    22337: 189135,
    22338: 189134
}

let wihp = dataObj[utils.CURRENT_SCRIPT.getAttribute('cmPropertyId')],
    cmCode = utils.CURRENT_SCRIPT.getAttribute('cmCode'),
    cmTotalNoTaxes = utils.CURRENT_SCRIPT.getAttribute('cmTotalNoTaxes'),
    cmCurrency = utils.CURRENT_SCRIPT.getAttribute('cmCurrency'),
    cmStartDateNumbers = utils.CURRENT_SCRIPT.getAttribute('cmStartDateNumbers'),
    cmEndDateNumbers = utils.CURRENT_SCRIPT.getAttribute('cmEndDateNumbers')
    cmNights = utils.CURRENT_SCRIPT.getAttribute('cmNights'),
    cmCode = utils.CURRENT_SCRIPT.getAttribute('cmCode')

const url = `https://secure-hotel-tracker.com/tics/log.php?
    act=conversion
    &ref=${cmCode}
    &amount=${cmTotalNoTaxes}
    &currency=${cmCurrency}
    &idbe=3
    &idwihp=${wihp}
    &checkin=${cmStartDateNumbers}
    &checkout=${cmEndDateNumbers}
    &date_format=YYYY-MM-DD
`

load(url, function(err){
    if(err){
        console.log(`failed to load with error: ${err}`);
    }
})

//Google Conversion Tag -- Event snippet for Conversion - GHA conversion page
const gct = `{
    'send_to': ['AW-670105291/lnXOCKPmq8ABEMv9w78C','HA-75'],
    'transaction_id': ${cmCode},
    'value': ${cmTotalNoTaxes},
    'currency': ${cmCurrency},
    'items': [{
        'id': ${wihp},
        'start_date': ${cmStartDateNumbers},
        'end_date': ${cmEndDateNumbers}
    }]
}`
gtag('event', 'purchase', gct)


//Bing Conversion Tag -- Bing Event Tag (Bing) - Bing Hotel Ads
const bct = `{
    'hct_total_price': ${cmTotal},
    'hct_base_price': ${cmTotalNoTaxes},
    'currency': ${cmCurrency},
    'hct_checkin_date': ${cmStartDateNumbers},
    'hct_checkout_date': ${cmEndDateNumbers},
    'hct_length_of_stay': ${cmNights},
    'hct_partner_hotel_id': ${wihp},
    'hct_booking_xref': ${cmCode}
}`
window.uetq.push('event', 'my_hotel_event_action', bct);

