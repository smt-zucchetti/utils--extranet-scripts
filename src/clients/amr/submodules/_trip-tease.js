import * as utils from './../../../lib/utils';

const tripTeaseData = 
{
    13736: '5208f7d5c9d6454eba2cb1ad5a45389e',
    14102: '16c9c206800944c8a3ed5e20ba007f13',
    11678: 'e215fcec5394464fbf81894e04f94e2d',
    13918: '9b8e2a303ac44f4fa82df39c9e5c28be',
    14100: '5b888e1fd4e14fd79bf5931300a616ae',
    23142: 'bd9397bbff19467aaafcc0c6de9da710',
    20971: '524b358f0d5a474883d404345baccc84',
    14101: 'b5ff61a0fd52413e908c355fd91de4f5',
    10583: '45d6451c32b4470d9d9528bb2a67c976',
    12346: 'c13e565a4aff45d78eb53b44b003ae7f',
    10582: '40cab7f87adf414089ef7d14e849ffad',
    14099: '5c352f20b9264ecd9ae6b6ed2df6e78a',
    10578: '3a84591162fb4dc7a19a6415157a71cc',
    10581: 'd58c574d19e844d9961ba663a9ebd77b',
    10577: '671b71b0af1c4fa58f9f6e693b9b37a6',
    12069: '8fb6c2fa40794b729676378e276e5911',
    10586: '9db6fc59dad24b769ea4d569da0bfa51',
    10342: '0cbbbc25391b42fd9d2b3a835f9e9d1d',
    20968: 'b783205b4faf4c1fb1a4481cff950543',
    10343: 'e34ddc07e43643398c7612cbe8de1d59',
    11353: '92582f18d9a442f5bf22e72079aea831',
    10345: '197050bf76734d4abb4e1de121b3b85c',
    13202: '786a7af5924d4ad0918452c4c866fd55',
    11094: '8e54f01d44fd4049b2dc9ef63109f431',
    23143: 'c21818cdd1944639a381bf04ed1a4e54',
    10570: '7515347ef3914ed8bd79e8906fc5ebbe',
    10568: '8f864778d703451388c7c92100b68e49',
    13491: 'ab69e5adaae24d22bce9c62f445ebb76',
    12070: '8e8d9084c77f47ca8145a542d3d66f58',
    11302: 'b0f7aba83f564b7fa9219d8c2e4a618e',
    23253: 'bec27e4423b946d0a69873706655f656',
    10573: 'b8c95fce693149ac8ab282c2f1027576',
    20640: 'a66de6fa8776416b933b7befcd7a621a',
    10572: 'fd71e62ae3ed4abc96fd8e906c0de5ed',
    10562: 'bd72891ed0da477e9190d6429a915535',
    14311: '1b10e666cf654598b27b569056ff2a9e',
    14161: 'e431efed5a444dfa8b83365d8811ff71',
    11095: '48899ba4bb974d6c882fdc26dd9a91aa',
    10564: '4121c0699b2b4c02954277963155e89e',
    14580: '5d1573fccc3b4998ad7f423f6bf708a6',
    10563: '54989652818d23b17400d8956909207203fc3ae6',
    12506: 'c131fc314f134c5085f5b9a69ca3ae16',
    10569: '18e2ed03a81d477a93a038299b165971',
    10584: '280377dc9e844301adb3879420e3af72',
    21074: '40cfd2d7b15746c59c5db09e2bc0cff7',
    19903: 'c8591b46011d4ce2873cc0d7a873489a',
    14097: '268f6157dca54f9b9ecb12bdd3d07926',
    10579: 'd19404399a334f8fbf78c6aaa7e54eff',
    18179: 'af5af88bc9ad43dfbfbee2b353102f51',
    14098: '11f95b14cecd4853a4ba1e743d5e5143',
    10566: 'a283145b0e1c4e2bb701041fe30868ab',
    10567: '6422211743bd4f918ea953e6fddaf045',
    10574: 'd14bd2cb2b8047709bc575cff6b218d3',
    10575: '2bcd84e563d44bd4bccba954bd2b30e2',
    20967: 'af10a1c1c8b6466a8d0fdf625e1690e2',
    10934: '5e759eb963b246a9a83590a70e840f93'
}



export async function tripTease()
{
    await utils.populateBeAttributes(); 
    
    const propId = utils.BE_ATTRIBUTES.propId;

    if(!Object.keys(tripTeaseData).includes(propId))
    {
        return;   
    }
    
    let apiKey = tripTeaseData[propId];
    
    if(utils.BE_ATTRIBUTES.page === 'results')
    {
        let pfWidgEl = document.createElement('div');
        pfWidgEl.classList.add('price-fighter-widget');
        
        let pfWidgObj = 
        {
            'data-pf-hotelkey': apiKey,
            'data-pf-direct-price': utils.BE_ATTRIBUTES.cmWidgetValues.bestPrice,
            'data-pf-currency': utils.BE_ATTRIBUTES.cmWidgetValues.currency,
            'data-pf-room-rate': utils.BE_ATTRIBUTES.cmWidgetValues.rateName,
            'data-pf-checkin': utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
            'data-pf-checkout': utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
            'data-pf-adults': utils.BE_ATTRIBUTES.cmWidgetValues.adults,
            'data-pf-children': utils.BE_ATTRIBUTES.cmWidgetValues.children,
            'data-pf-language': utils.BE_ATTRIBUTES.cmWidgetValues.language
        };
        
        for(const [key, value] of Object.entries(pfWidgObj)) 
        {
           pfWidgEl.setAttribute(key, value);
        }
        
        utils.getElementBySelector('#form_selezione_prodotto_camera').then(() =>
        {
            document.body.appendChild(pfWidgEl);
        });
    }
 
    let pfScript = document.createElement('script');
    pfScript.setAttribute('src', `https://paperboy.triptease.net/7LgmPOoy5.js?hotelkey=${apiKey}`);
    
    document.body.appendChild(pfScript);
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        let cmTotal = utils.BE_ATTRIBUTES.cmWidgetValues.total;
        let cmCode = utils.BE_ATTRIBUTES.cmWidgetValues.code;
       
        let pfScript2 = document.createElement('script');
        pfScript2.setAttribute('src', `https://widget.triptease.net/confirm.js?hotelkey=${apiKey}&bookingValue=${cmTotal}&bookingCurrency=USD&bookingReference=${cmCode}`);
        
        document.body.appendChild(pfScript2);
    }
}