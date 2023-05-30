import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export async function addGtmCode()
{
    const brandId = await common.getBrandId();
    
    if(brandId === 97 || brandId === 125)
    {
        return;
    }


    const resortBrands = 
    {
        0: 'amrcollection',
        1: 'sunscaperesorts',
        2: 'nowresorts',
        3: 'secretsresorts',
        4: 'dreamsresorts',
        5: 'zoetryresorts',
        6: 'breathlessresorts',
        163: 'independent',
        178: 'impressionresorts'
    };
    
    const resortBrand = resortBrands[brandId];
    const brandName = common.getBrandNameFromBrandId(brandId);

    let dataLayerStr = ''
        
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.page === 'first_page')
    {
        dataLayerStr = 
            `window.dataLayer = window.dataLayer || [];
            dataLayer = [{
                'event': 'selectResort',
                'pageFlow': 'Select Resort',
                'BookingEngineStep': '/${resortBrand}/choose_resort/vb/step1',
                'affiliatedBrand': '${brandName}',
                'Vendor': 'Vertical Booking',
                'tripType': 'Land Only',
                'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}'
            }];`   
    }
    else if(utils.BE_ATTRIBUTES.page === 'results')
    {
        dataLayerStr =
            `window.dataLayer = window.dataLayer || [];
            dataLayer = [{
                'event': 'selectRoomType',
                'pageFlow': 'Select Room Type / Rate',
                'BookingEngineStep': '/${resortBrand}/${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}/choose_room/vb/step2',
                'affiliatedBrand': '${brandName}',
                'Vendor': 'Vertical Booking',
                'tripType': 'Land Only',
                'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}',
                'numberAdults': '${utils.BE_ATTRIBUTES.cmWidgetValues.adults}',
                'numberChildren': '${utils.BE_ATTRIBUTES.cmWidgetValues.children}',
                'numberNights': '${utils.BE_ATTRIBUTES.cmWidgetValues.nights}',
                'arrivalDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers}',
                'departureDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers}',
                'BestPrice': '${utils.BE_ATTRIBUTES.cmWidgetValues.bestPrice}',
                'RateName': '${utils.BE_ATTRIBUTES.cmWidgetValues.rateName}',
                'RoomName': '${(utils.BE_ATTRIBUTES.cmWidgetValues.roomName === "@@ROOM_NAME@@") ? null : utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                'RoomCode': '${(utils.BE_ATTRIBUTES.cmWidgetValues.roomCod === "@@ROOM_COD@@") ? null : utils.BE_ATTRIBUTES.cmWidgetValues.roomCod}'
            }];`
    }
    else if(utils.BE_ATTRIBUTES.page === 'summary')
    {
        dataLayerStr = 
            `window.dataLayer = window.dataLayer || [];
            dataLayer = [{
                'event': 'additionalServices',
                'pageFlow': 'Additional Services',
                'BookingEngineStep': '/${resortBrand}/${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}/Room_Extras/VB/Step2-1',
                'affiliatedBrand': '${brandName}',
                'Vendor': 'Vertical Booking',
                'tripType': 'Land Only',
                'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}'
             }];`
    }
    else if(utils.BE_ATTRIBUTES.page === 'guest_info')
    {
        dataLayerStr =
            `window.dataLayer = window.dataLayer || [];
            dataLayer = [{
                'event': 'guestInformation',
                'pageFlow': 'Guest Information & Payment Details',
                'BookingEngineStep': '/${resortBrand}/${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}/booking_summary/vb/step3',
                'affiliatedBrand': '${brandName}',
                'Vendor': 'Vertical Booking',
                'tripType': 'Land Only',
                'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                'siteCurrency': '${utils.BE_ATTRIBUTES.cmWidgetValues.currency}',
                'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}',
                'numberAdults': '${utils.BE_ATTRIBUTES.cmWidgetValues.adults}',
                'numberChildren': '${utils.BE_ATTRIBUTES.cmWidgetValues.children}',
                'arrivalDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers}',
                'departureDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers}',
                'roomName': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                'roomCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomCod}',
                'hotelRoomCount': '${utils.BE_ATTRIBUTES.cmWidgetValues.numRooms}',
                'roomTotalRate': '${utils.BE_ATTRIBUTES.cmWidgetValues.total}'
            }];`
    }
    else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        if(brandId === 6)
        {
            let totalConvertUsd = utils.BE_ATTRIBUTES.cmWidgetValues.totalConvertUsd;
            
            if([null, '@@TOTAL_CONVERT_USD@@'].includes(totalConvertUsd))
            {
                totalConvertUsd = utils.BE_ATTRIBUTES.cmWidgetValues.total;
            }
            
            dataLayerStr =
                `window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'reservationConfirmation',
                    'pageFlow': 'Reservation Confirmation / Thank you',
                    'BookingEngineStep': '/${resortBrand}/${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}/confirmation/VB/step6',
                    'affiliatedBrand': '${brandName}',
                    'vendor': 'Vertical Booking',
                    'tripType': 'Land Only',
                    'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                    'transactionCurrency': '${utils.BE_ATTRIBUTES.cmWidgetValues.currency}',
                    'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                    'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                    'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}',
                    'transactionId': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode} - ${utils.BE_ATTRIBUTES.cmWidgetValues.code}',
                    'propertyId-TransactionId': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode} - ${utils.BE_ATTRIBUTES.cmWidgetValues.code}',
                    'transactionPaymentType': '${utils.BE_ATTRIBUTES.cmWidgetValues.paymentMethod}',
                    'rateName': '${utils.BE_ATTRIBUTES.cmWidgetValues.productName}',
                    'rateCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.productCode}',
                    'avgDailyRate': '${utils.BE_ATTRIBUTES.cmWidgetValues.priceNight}',
                    'serviceName': '${utils.BE_ATTRIBUTES.cmWidgetValues.servicesName}',
                    'serviceCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}',
                    'transactionTotal': '${utils.BE_ATTRIBUTES.cmWidgetValues.total}',
                    'transactionTax': '${utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes}',
                    'transactionTotalWithoutTax': '${utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes}',
                    'transactionPromoCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto}',
                    'transactionPromo': '${utils.BE_ATTRIBUTES.cmWidgetValues.codiceScontoImporto}',
                    'numberAdults': '${utils.BE_ATTRIBUTES.cmWidgetValues.adults}',
                    'numberChildren': '${utils.BE_ATTRIBUTES.cmWidgetValues.children}',
                    'numberNights': '${utils.BE_ATTRIBUTES.cmWidgetValues.nights}',
                    'arrivalDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDateYyyyddmm}',
                    'departureDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.endDateYyyyddmm}',
                    'roomName': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                    'roomCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomCod}',
                    'roomType': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomType}',
                    'numberRooms': '${utils.BE_ATTRIBUTES.cmWidgetValues.rooms}',
                    'occupancy': '${utils.BE_ATTRIBUTES.cmWidgetValues.occupancy}',
                    'pageCategory': 'reservationSuccessful',
                    'hostName': 'verticalBooking',
                    'category': 'Land Only',
                    'quantity': 1,
                    'checkInDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDate}',
                    'DLV – transactionTotal': '${totalConvertUsd}',
                    'transactionProducts': [{
                        'sku': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName} - ${utils.BE_ATTRIBUTES.cmWidgetValues.productCode}',
                        'name': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                        'category': 'Land Only',
                        'price': '${utils.BE_ATTRIBUTES.cmWidgetValues.total}',
                        'quantity': 1
                    }]
                });`
        }
        else
        {
            dataLayerStr =
                `window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'reservationConfirmation',
                    'pageFlow': 'Reservation Confirmation / Thank you',
                    'BookingEngineStep': '/${resortBrand}/${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}/confirmation/VB/step6',
                    'affiliatedBrand': '${brandName}',
                    'vendor': 'Vertical Booking',
                    'tripType': 'Land Only',
                    'siteRegion': '${utils.BE_ATTRIBUTES.cmWidgetValues.countryCode}',
                    'transactionCurrency': '${utils.BE_ATTRIBUTES.cmWidgetValues.currency}',
                    'language': '${utils.BE_ATTRIBUTES.cmWidgetValues.language}',
                    'propertyID': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode}',
                    'propertyName': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}',
                    'transactionId': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode} - ${utils.BE_ATTRIBUTES.cmWidgetValues.code}',
                    'propertyId-TransactionId': '${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode} - ${utils.BE_ATTRIBUTES.cmWidgetValues.code}',
                    'transactionPaymentType': '${utils.BE_ATTRIBUTES.cmWidgetValues.paymentMethod}',
                    'rateName': '${utils.BE_ATTRIBUTES.cmWidgetValues.productName}',
                    'rateCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.productCode}',
                    'avgDailyRate': '${utils.BE_ATTRIBUTES.cmWidgetValues.priceNight}',
                    'serviceName': '${utils.BE_ATTRIBUTES.cmWidgetValues.servicesName}',
                    'serviceCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}',
                    'transactionTotal': '${utils.BE_ATTRIBUTES.cmWidgetValues.total}',
                    'transactionTax': '${utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes}',
                    'transactionTotalWithoutTax': '${utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes}',
                    'transactionPromoCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto}',
                    'transactionPromo': '${utils.BE_ATTRIBUTES.cmWidgetValues.codiceScontoImporto}',
                    'numberAdults': '${utils.BE_ATTRIBUTES.cmWidgetValues.adults}',
                    'numberChildren': '${utils.BE_ATTRIBUTES.cmWidgetValues.children}',
                    'numberNights': '${utils.BE_ATTRIBUTES.cmWidgetValues.nights}',
                    'arrivalDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDateYyyyddmm}',
                    'departureDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.endDateYyyyddmm}',
                    'roomName': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                    'roomCode': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomCod}',
                    'roomType': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomType}',
                    'numberRooms': '${utils.BE_ATTRIBUTES.cmWidgetValues.rooms}',
                    'occupancy': '${utils.BE_ATTRIBUTES.cmWidgetValues.occupancy}',
                    'pageCategory': 'reservationSuccessful',
                    'hostName': 'verticalBooking',
                    'category': 'Land Only',
                    'quantity': 1,
                    'checkInDate': '${utils.BE_ATTRIBUTES.cmWidgetValues.startDate}',
                    'transactionProducts': [{
                        'sku': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName} - ${utils.BE_ATTRIBUTES.cmWidgetValues.productCode}',
                        'name': '${utils.BE_ATTRIBUTES.cmWidgetValues.roomName}',
                        'category': 'Land Only',
                        'price': '${utils.BE_ATTRIBUTES.cmWidgetValues.total}',
                        'quantity': 1
                    }]
                });`
        }
    }

    const scriptStr = 
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TGBTS2V');`

    const scriptTag = document.createElement('script');
    
    scriptTag.textContent = 
        `${dataLayerStr}
        ${scriptStr}`
    document.head.appendChild(scriptTag);
    
        
    const noScriptTag = document.createElement('noscript')
    const iframeStr = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGBTS2V" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
    noScriptTag.innerHTML = iframeStr
    document.body.appendChild(noScriptTag)

}