import { equalWebData } from './data/equal-web';
import load from 'little-loader';
import getCssData from 'get-css-data';
import * as cmData from './data/cm-data';
import * as utilsData from './data/utils-data';



export const BE_TYPE = utilsData.BE_TYPE;
export const BE_ATTRIBUTE_NAMES = utilsData.BE_ATTRIBUTE_NAMES;
export const BE_ATTRIBUTES = utilsData.BE_ATTRIBUTES;
export const BE_PAGE_NAMES = utilsData.BE_PAGE_NAMES;
export const CURRENT_SCRIPT = utilsData.CURRENT_SCRIPT;


export async function getElementBySelector(selector)
{
	while(!document.querySelector(selector)) 
	{
	    await new Promise(r => setTimeout(r, 100))
	}
}

export async function populateBeAttributes()
{
	BE_ATTRIBUTES.beType = await _getBeType()
	BE_ATTRIBUTES.beTypeName = _getBeTypeName()
	BE_ATTRIBUTES.page = await _getBePage(BE_ATTRIBUTES.beType)
	BE_ATTRIBUTES.cmValues = await _getCmValues(BE_ATTRIBUTES.page)
	BE_ATTRIBUTES.cmWidgetValues = await _getCmWidgetValues(BE_ATTRIBUTES.page)

    if(BE_ATTRIBUTES.cmValues && BE_ATTRIBUTES.cmValues.cmPropertyId)
    {
    	if(['15775','15776','15813','15815'].includes(BE_ATTRIBUTES.cmValues.cmPropertyId) )
    	{
    	    return;
    	}   
    }
	
	BE_ATTRIBUTES.propId = await _getBeAttribute(BE_ATTRIBUTE_NAMES.propId);
	BE_ATTRIBUTES.styleId = await _getBeAttribute(BE_ATTRIBUTE_NAMES.styleId);
	BE_ATTRIBUTES.groupId = await _getBeAttribute(BE_ATTRIBUTE_NAMES.groupId);
	BE_ATTRIBUTES.brandId = await _getBeAttribute(BE_ATTRIBUTE_NAMES.brandId);
	BE_ATTRIBUTES.lang = await _getBeAttribute(BE_ATTRIBUTE_NAMES.lang);
}

export function addStylesToStylesheet(styles)
{
    var stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';
    stylesheet.innerText = styles;
    stylesheet.id = 'ff';
    document.head.appendChild(stylesheet);
}

export function hideSocialMediaButtonsOnSummaryPage()
{
    import('./styles/hide-social-media-buttons-on-summary-page.scss');
}

export function adaWidget(beType)
{
    populateBeAttributes().then(() => 
    {
        if(parseInt(BE_ATTRIBUTES.beType) === BE_TYPE.Premium)
        {
            import('./styles/ada-widget/main.scss')
            
            const btn = _createAdaWidgetButton()
            let isAda = JSON.parse(window.localStorage.getItem('isAda'))
            
            if(isAda === true)
            {
                document.documentElement.classList.add('is-ada')
            }
            
            btn.addEventListener('click', function()
            {
                isAda = !isAda
                document.documentElement.classList.toggle('is-ada')
                
                window.localStorage.setItem('isAda', isAda)
            })
        }
    })
}

export function equalWebStyles()
{
    populateBeAttributes().then(() => 
    {
        if(parseInt(BE_ATTRIBUTES.beType) === BE_TYPE.Premium)
        {
            let observer = new MutationObserver(function() 
            {
                if(document.body.classList.contains('INDblackwhite'))
                {
                    document.documentElement.classList.add('ada-widget-override-styles')
                    import('./styles/equal-web-widget/main.scss')   
                }
                else
                {
                    document.documentElement.classList.remove('ada-widget-override-styles')
                }
            })
            
            observer.observe(document.body, 
            {
                attributes: true,
                attributeFilter: ['class']
            })
        }
    })
}

export function equalWebPlugin()
{
    populateBeAttributes().then(() => 
    {
        if(BE_ATTRIBUTES.beTypeName === 'Premium')
        {
            const domain = window.location.hostname;
            
            if(equalWebData[domain])
            {
            	window.interdeal = 
            	{
            		sitekey: equalWebData[domain].siteKey,
            		Position: 'Left',
            		Menulang: 'EN',
            		domains: {js: 'https://aacdn.nagich.com/', acc: 'https://access.nagich.com/'},	
            		isPartial: true,
            		btnStyle: {vPosition: ['80%',undefined], //Y-axis position of the widget, left side is reffering to the desktop version, the right side is for mobile.
            			scale: ['0.8','0.7'], //Size of the widget, the left side is referring to the desktop version, the right side is for mobile.
            			icon: { 
            				type: equalWebData[domain].type, //You can choose between 1- 14 icons, or set value as string like "Accessibility".
            				shape: 'semicircle', //You can choose the following shapes: "circle", "rectangle", "rounded", "semicircle".
            				outline: true //true / false.
            			},
            			color: {main: equalWebData[domain].mainColor, second: equalWebData[domain].secondColor}
            		}
            	};
        
            	(function(doc, head, body){
            		var coreCall             = doc.createElement('script');
            		coreCall.src             = `https://aacdn.nagich.com/core/${equalWebData[domain].version}/accessibility.js`;
            		coreCall.defer           = true;
            		coreCall.integrity       = equalWebData[domain].integrityKey, 
            		coreCall.crossOrigin     = 'anonymous';
            		coreCall.setAttribute('data-cfasync', true );
            		body? body.appendChild(coreCall) : head.appendChild(coreCall);
            	})(document, document.head, document.body);
            }
            else
            {
                console.log('equal web domain not found')
            }
        }
    })
}

export function discountButtonColor(bgColor, txtColor)
{
    document.documentElement.style.setProperty('--bgColor', bgColor)
    document.documentElement.style.setProperty('--txtColor', txtColor)
    import('./styles/discount-button-color.scss')
}

export function replaceTextInElement(el, txt)
{
    getElementBySelector(el).then(() =>
    {
        document.querySelector(el).innerHTML = txt 
    })
}
 
export async function hideFacebookButtonOnGuestInfoPage()
{
    await populateBeAttributes(); 
    
    if(BE_ATTRIBUTES.page === 'guest_info')
    {
        import('./styles/hide-facebook-button-on-guest-info-page.scss')   
    }
}

export async function universalAnalytics(uaCode)
{
    await loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=${uaCode}`);
    await populateBeAttributes(); 
        
    window.dataLayer = window.dataLayer || []
    function gtag(){ dataLayer.push(arguments) }
    
    gtag('js', new Date());
    gtag('config', uaCode);

    if(BE_ATTRIBUTES.page === 'thank_you_page')
    {
        const obj = 
        {
            transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
            value: BE_ATTRIBUTES.cmWidgetValues.total,
            tax: BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
            currency: BE_ATTRIBUTES.cmWidgetValues.currency
        };
        
        gtag('event', 'purchase', obj);
    }
}

export function discountCodeNonPassword()
{
    const pwordInput = document.getElementById('qr_generic')
    if(pwordInput)
    {
        pwordInput.setAttribute('type', 'text')
    }
}

export function googleTagManager(gtmCode)
{
    (function(w,d,s,l,i)
    {
        w[l]=w[l]||[];
        w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
        });
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',gtmCode);
}

export function loadScript(url)
{
    load(url, function(err)
    {
        if(err)
        {
            console.log(`load error: ${err}`)
        }
        else
        {
            console.log(`loaded successfully: ${url}`)
        }
    })
    
    return
}

export async function loadScriptAsync(url)
{
    await new Promise(resolve => load(url, function(err)
    {
        if(err)
        {
            console.log(`load error: ${err}`)
        }
        else
        {
            console.log(`loaded successfully: ${url}`)
            resolve('resolved')
        }
    }))
}

export function resizeOfferImages()
{
    import('./styles/resize-offer-images.scss');
}

function _delay(t) 
{
    return new Promise(resolve => setTimeout(resolve, t));
}

export async function waitForElement(selector, all = false, maxWaitTime = 2000) 
{
    const start = Date.now()

    while (Date.now() - start < maxWaitTime) 
    {
        let item = all ? document.querySelectorAll(selector) : document.querySelector(selector)
        
        if(item) 
        {
            return item
        } 
        else 
        {
            // wait a little and try again
            await _delay(100)
        }
    }
    return false
    //throw new Error('Element doesn\'t exist after max time')
}

export function loadWihpTrackingScript(wihpId)
{
    populateBeAttributes().then(() => 
    {
        if(BE_ATTRIBUTES.page === 'thank_you_page')
        {
            const url = `https://secure-hotel-tracker.com/tics/log.php?act=conversion&idbe=3&date_format=YYYY-MM-DD&idwihp=${wihpId}`;
        
            const obj = {
                ref: BE_ATTRIBUTES.cmWidgetValues.code,
                amount: BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                checkin: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                checkout: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers
            };
            
            let finalUrl = url;
            for (const [key, value] of Object.entries(obj)) 
            {
                finalUrl += `&${key}=${value}`;
            }
            
            loadScript(finalUrl);
        }
    });
}

export function loadVideoAsBackground(url)
{
    const obj = 
    {
        id:"bgVideo",
        role:"presentation",
        crossorigin:"anonymous",
        playsinline:"", 
        preload:"auto",
        muted:"",
        loop:"",       
        autoplay:"", 
        src: url,
    }
    
    
    const video = document.createElement('video')
    for(const [key, val] of Object.entries(obj))
    {
        video.setAttribute(key, val)
    }
    
    document.body.appendChild(video)
    import('./styles/load-video-as-background.scss');
    
    video.muted = true;
    video.play()
}

function _getFormFieldValueByFormFieldName(form, fieldName)
{
    const input = form.querySelector(`input[name=${fieldName}]`)
    return input ? input.value : null
}

async function _getBeType()
{
	await _getElementByExpression(document.styleSheets)		

	let arr = Array.from(document.styleSheets)

    if(arr.some(s => s.href && s.href.includes('premium')))
    {
        return BE_TYPE.Premium
    }
    else if(arr.some(s => s.href && s.href.includes('sp_responsive')))
    {
        return BE_TYPE.SP
    }
    else if(arr.some(s => s.href && s.href.includes('smart')))
    {
        return BE_TYPE.Smart
    }
    else
    {
        return BE_TYPE.Advanced
    }
}

function _getBrandIdByPropId(propId)
{
    let dataObj = {
        125 : [23431,23430,23433,23432,23439,23427,23426,23429,23428,23438,23440,23441,23437,23436,23434,23435],
        97 : [],
        6 : [13736,23836,14102,11678,13918,14712,13418,14713],
        4 : [14100,23142,20971,14101,10583,12346,19547,10584,21074,19903,10582,14097,14099,10578,10581,10577,10344,12069,10579,10586,18179,21680,14639,14632,14629,14636,14633,21681,19904,14631,16074,14637,14628,14630,14627,14673,14635,13417,14634,19631],
        2 : [10342,20968,10343,11353,10345,13420,21365,14676,14672,14675,14674],
        80 : [19361,19362,19363],
        3 : [13202,11094,23143,14098,10570,10568,17154,13491,12070,11302,23253,10569,10573,20640,10574,10575,10572,14511,14508,16075,14503,13419,14512,14510,14509,14502,14501,14505,21682,14506,14507,14504],
        1 : [20967,10934,10562,14311,14161,11095,21366,16076,14678,16077,14677,14683,14682,14679],
        5 : [10564,14580,10563,12506,14344,16078,14350,14348]
    }
    
    for(const [key, value] of Object.entries(dataObj)) 
    {
        if(value.includes(parseInt(propId)))
        {
            return key
        }
    }
    return null
}

async function _getCorrectForm(beType)
{
    if(beType ===  BE_TYPE.Premium || beType === BE_TYPE.PremiumGroup)
    {
        await getElementBySelector('#form_repost_valuta')
        return document.getElementById('form_repost_valuta')   
    }
    else if(beType === BE_TYPE.SP)
    {
        return getElementBySelector('#thefrm').then(() =>
        {
            return document.getElementById('thefrm')    
        })
        
    }
    else if(beType === BE_TYPE.Smart || beType === BE_TYPE.Advanced)
    {
        if(BE_ATTRIBUTES.page == 'summary')
        {
            return waitForElement('#form_seleziona_camere_step > input').then(() =>
            {
                return document.getElementById('form_seleziona_camere_step')
            })   
        }
        
        return getElementBySelector('#form_ricerca').then(() =>
        {
            return document.getElementById('form_ricerca')
        })   
        
        return getElementBySelector('#form_seleziona_date_step').then(() =>
        {
            return document.getElementById('form_seleziona_date_step')
        })
    }
}

async function _getBeAttribute(attrName, beType = null)
{
	if(!beType)
	{
		beType = await _getBeType()
	}
	
    const frm = await _getCorrectForm(beType)
    
	let attrValue = _getFormFieldValueByFormFieldName(frm, attrName)
	if(!attrValue && attrName === BE_ATTRIBUTE_NAMES.brandId)
    {
        const propId = _getFormFieldValueByFormFieldName(frm, BE_ATTRIBUTE_NAMES.propId)
        const attrValue = await _getBrandIdByPropId(propId)  
    }
    
    return attrValue  
}

export async function _getElementByExpression(expression)
{
	while(!expression) 
	{
	    await new Promise(r => setTimeout(r, 100))
	}
}

function _getBePage(beType)
{
    if(document.body.classList.contains('group-page'))
    {
        if(waitForElement('#first-page-content'))
        {
            return BE_PAGE_NAMES[0]
        }
        else if(waitForElement('#box-risultati'))
        {
            return BE_PAGE_NAMES[1]
        }
        return
    }
    const stepEls = beType === 3 /*Smart*/ ? '#nav_res li' : '#step ul li'
    return waitForElement(stepEls, true).then(lis =>
    {
        for(let i=0; i<lis.length; i++)
        {
            if(lis[i].classList.contains('sel') || lis[i].classList.contains('active'))
            {
                return BE_PAGE_NAMES[i] 
            }
            if(beType === 3)
            {
                return BE_PAGE_NAMES[0]   
            }
        }
    })
    
}

function _getCmValues(page)
{
    if(BE_ATTRIBUTES.beType ===  BE_TYPE.SP)
    {
        return null
    }
    
    const cmValues = cmData.CM_PAGES[page];
    const cmObj = {}

    if(cmValues)
    {
        Object.keys(cmValues).forEach(key =>
        {
            cmObj[key] = _getCmValueFromScript(key)  
        })   
    }
    return cmObj
}

function _getCmValueFromScript(key)
{
    if(!CURRENT_SCRIPT.getAttribute('jsonCM'))
    {
        return null
    }

    const json = CURRENT_SCRIPT.getAttribute('jsonCM')
    const obj = JSON.parse(json)
    
    for(const [okey, oval] of Object.entries(obj))
    {
        if(okey === key)
        {
            return oval.startsWith('@@') ? null : oval 
        }
    }
}

export function _isDescendant(parent, child) 
{
     var node = child.parentNode;
     while (node !== null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

function _getBeTypeName()
{
    for(let [key,val] of Object.entries(BE_TYPE))
    {
        if(val === BE_ATTRIBUTES.beType)
        {
            return key
        }
    }
    
    return null
}

function _createAdaWidgetButton()
{
    const btn = document.createElement('div'),
    iEl = document.createElement('i')
    document.body.appendChild(btn)
    btn.appendChild(iEl)
    btn.classList.add('ada-button')
    iEl.classList.add('ada-button--icon')
    iEl.classList.add('fa')
    iEl.classList.add('fa-eye')
    
    return btn
}

function _getCmWidgetValues(page)
{
    let cmValues;
    
    if(BE_ATTRIBUTES.beType ===  BE_TYPE.SP)
    {
        cmValues = cmData.SP_WIDGET_ATTRS;
    }
    else
    {
        cmValues = cmData.WIDGET_ATTRS[page]    
    }
    
    const cmObj = {}
    if(cmValues)
    {
        Object.keys(cmValues).forEach(key =>
        {
            cmObj[key] = _getCmWidgetValue(key)  
        })   
    }
    return cmObj
}

function _getCmWidgetValue(key)
{
    const widget = document.querySelector(`#conversion-monitoring-widget`)
    if(!widget)
    {
        return null
    }
    const value = widget.dataset[key] ? widget.dataset[key] : null

    return value
}

export function addSojernCode(propId, city, state, country)
{

    populateBeAttributes().then(() => 
    {
  
        const params = 
        {
            hpid: propId,
            hc1: city, 
            hs1: state, 
            hn1: country,
            hpr: BE_ATTRIBUTES.cmValues.cmPropertyName, 
        }

        if(BE_ATTRIBUTES.page === 'results')
        {
            Object.assign(params, 
            {
                pt: 'SEARCH',
                hd1: BE_ATTRIBUTES.cmValues.cmStartDateNumbers,
                hd2: BE_ATTRIBUTES.cmValues.cmEndDateNumbers,
            })
        }
        else if(BE_ATTRIBUTES.page === 'guest_info')
        {
            Object.assign(params, 
            {
                pt: 'SHOPPING_CART',
                hcu: BE_ATTRIBUTES.cmValues.cmCurrency
            })
        }
        else if(BE_ATTRIBUTES.page === 'thank_you_page')
        {
            Object.assign(params,
            {
                pt: 'CONVERSION',
                hd1: BE_ATTRIBUTES.cmValues.cmStartDateNumbers,
                hd2: BE_ATTRIBUTES.cmValues.cmEndDateNumbers,
                hr: BE_ATTRIBUTES.cmValues.cmRooms, 
                hc: BE_ATTRIBUTES.cmValues.cmRoomCodName,  
                tch: BE_ATTRIBUTES.cmValues.cmChildren,
                tad: BE_ATTRIBUTES.cmValues.cmAdults,
                t: BE_ATTRIBUTES.cmValues.cmOccupancy,
                hp: BE_ATTRIBUTES.cmValues.cmTotal,
                hcu: BE_ATTRIBUTES.cmValues.cmCurrency,
                hconfno: BE_ATTRIBUTES.cmValues.cmCode,
            })
        }
        
        // Please do not modify the below code. 
        params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
        var paramsArr = [];
        for(let key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };
    
        var pl = document.createElement('script');
        pl.type = 'text/javascript';
        pl.async = true;
        pl.src = "https://beacon.sojern.com/pixel/cp/27?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
    })
}

export function disableHilightOnNightsSelect()
{
    import('./styles/disable-hilight-on-nights-select.scss');
}

export function stickyFooter()
{
    import('./styles/sticky-footer.scss');
}

export function standardReset()
{
    disableHilightOnNightsSelect();
    stickyFooter();
    excludingTaxesAndFeesText();
}

export function excludingTaxesAndFeesText()
{
    populateBeAttributes().then(() =>
    {
        waitForElement('.section_classicamere .campo', false, 5000).then(() =>
        {
            import('./styles/excluding-taxes-and-fees-text.scss');
            
            const ratePriceEls = document.querySelectorAll('.section_classicamere .campo .tariffa');
            ratePriceEls.forEach(el =>
            {
                if(!el.querySelector('.tariffa--exclusion-message'))
                {
                    const innerEl = document.createElement('div');
                    innerEl.classList.add('tariffa--exclusion-message');
                    innerEl.textContent += BE_ATTRIBUTES.lang === 'esp' ? 'Tarifas más impuestos' : 'Excluding Taxes & Fees';
                    el.appendChild(innerEl);    
                }
            });  
            
            const rateContentEls = document.querySelectorAll('.room-rate-price-value-content');
            rateContentEls.forEach(el =>
            {
                if(!el.querySelector('.room-rate-price-value-content--exclusion-message'))
                {
                    const innerEl = document.createElement('div');
                    innerEl.classList.add('room-rate-price-value-content--exclusion-message');
                    innerEl.textContent += BE_ATTRIBUTES.lang === 'esp' ? 'Tarifas más impuestos' : 'Excluding Taxes & Fees';
                    el.appendChild(innerEl);
                }
            });
        }); 
    });
}

export function excludingTaxesAndFeesTextSmart()
{
    populateBeAttributes().then(() =>
    {
        waitForElement('#results-list .room-box', false, 5000).then(() =>
        {
            import('./styles/excluding-taxes-and-fees-text-smart.scss');
            
            const ratePriceEls = document.querySelectorAll('#results-list .room-box .rate-price');
            ratePriceEls.forEach(el =>
            {
                const innerEl = document.createElement('div');
                innerEl.classList.add('rate-price--exclusion-message');
                innerEl.textContent += BE_ATTRIBUTES.lang === 'esp' ? 'Tarifas más impuestos' : 'Excluding Taxes & Fees';
                el.appendChild(innerEl); 
            });  
        }); 
    });
}

export function fixPropertyClosedSameDatesBug()
{
    populateBeAttributes().then(() =>
    {
        if(BE_ATTRIBUTES.page === 'results')
        {
            waitForElement('#box-risultati .seleziona_camera.messaggio_chiusura', false, 5000).then(() =>
            {
                const el = document.querySelector('#box-risultati .seleziona_camera.messaggio_chiusura > h2');
                const str = el && el.textContent ? el.textContent.toLowerCase() : '';
                
                if(str.includes('the property is closed'))
                {
                    const date1 = str.substring(
                        str.indexOf('from') + 4, 
                        str.lastIndexOf('to')
                    ).trim();
                    
                    const date2 = str.substring(
                        str.indexOf('to') + 2, 
                        str.lastIndexOf('  ')
                    ).trim();
                    
                    el.textContent = date1 === date2 ? 'The property is closed ' + date1 : el.textContent;
                }
            });
        }
    });
}

function _createGtm4ItemsArr(arr)
{
    const resObj = {};
    const res = arr.map(obj => {
        return {key: obj.key, values: obj.value} 
    });
}

export function gtm4StandardCode(gtmCode)
{
    const regex = new RegExp('^GTM\-[A-Z0-9]{1,7}$');
    if(!regex.test(gtmCode))
    {
        console.log('gtm code invalid');
        return;
    }
    
    populateBeAttributes().then(() =>
    {
        let eventObj = {};
        const rooms = document.querySelectorAll('.conversion-monitoring-widget-cycle');
        
        if(BE_ATTRIBUTES.page === 'results')
        {
            eventObj = 
            {
                event: 'view_item_list',
                ecommerce: 
                {
                    item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName,
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    value: [...rooms].reduce((acc, cur) => acc += parseInt(cur.dataset['total']), 0),
                    tax: [...rooms].reduce((acc, cur) => acc += parseInt(cur.dataset['totalTaxes']), 0),
                    affiliation: 'Vertical Booking',
                    //transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
                    //coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    //rooms_qty: BE_ATTRIBUTES.cmWidgetValues.numRooms,
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_id: room.dataset['roomCod'],
                            item_name: room.dataset['roomName'],
                            price: parseInt(room.dataset['total']),
                            item_category: room.dataset['productName'],
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                            index: ++idx
                        };
                    })
                }
            }
        }
        else if(BE_ATTRIBUTES.page === 'guest_info')
        {
            eventObj = 
            {
                event: 'begin_checkout',
                ecommerce: 
                {
                    //item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName,
                    affiliation: 'Vertical Booking',
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    //coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    //nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    rooms_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.numRooms),
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_id: room.dataset['roomCod'], 
                            item_name: room.dataset['roomName'], 
                            item_category: 'Rooms',
                            item_variant: room.dataset['productName'], 
                            price: parseInt(room.dataset['total']), 
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                            index: ++idx                
                        };
                    })
                }
            }
        }
        else if(BE_ATTRIBUTES.page === 'thank_you_page')
        {
            eventObj =
            {
                event: 'purchase',
                ecommerce: 
                {
                    item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName, 
                    affiliation: 'Vertical Booking',
                    transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    rooms_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.rooms),
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    value: parseInt(BE_ATTRIBUTES.cmWidgetValues.total),
                    tax: parseInt(BE_ATTRIBUTES.cmWidgetValues.totalTaxes),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_category: 'Rooms',
                            item_id: room.dataset['roomCod'], // Codice camera
                            item_name: room.dataset['roomName'], // Tipo di camera
                            item_variant: room.dataset['productName'], //Rate code
                            price: parseInt(room.dataset['total']), // Prezzo medio per notte
                            //promotion_id: '@@OFFER_CODE@@',
                            //promotion_name: '@@OFFER_NAME@@',
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights), // Numero notti
                            index: ++idx
                        };
                    })
                }
            }
        }
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventObj);
        
        // Google Tag Manager Summary (post cicle) 
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',gtmCode);
    });
}

export function gtm4StandardCodeWaterfront(gtmCode)
{
    const regex = new RegExp('^GTM\-[A-Z0-9]{1,7}$');
    if(!regex.test(gtmCode))
    {
        console.log('gtm code invalid');
        return;
    }
    
    populateBeAttributes().then(() =>
    {
        let eventObj = {};
        const rooms = document.querySelectorAll('.conversion-monitoring-widget-cycle');
        
        if(BE_ATTRIBUTES.page === 'results')
        {
            eventObj = 
            {
                event: 'view_item_list',
                ecommerce: 
                {
                    item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName,
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    value: [...rooms].reduce((acc, cur) => acc += parseInt(cur.dataset['total']), 0),
                    tax: [...rooms].reduce((acc, cur) => acc += parseInt(cur.dataset['totalTaxes']), 0),
                    affiliation: 'Vertical Booking',
                    //transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
                    //coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    //rooms_qty: BE_ATTRIBUTES.cmWidgetValues.numRooms,
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_id: room.dataset['roomCod'],
                            item_name: room.dataset['roomName'],
                            price: parseInt(room.dataset['total']),
                            item_category: room.dataset['productName'],
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                            index: ++idx
                        };
                    })
                }
            }
        }
        else if(BE_ATTRIBUTES.page === 'guest_info')
        {
            eventObj = 
            {
                event: 'begin_checkout',
                ecommerce: 
                {
                    //item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName,
                    affiliation: 'Vertical Booking',
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    //coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    //nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    rooms_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.numRooms),
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_id: room.dataset['roomCod'], 
                            item_name: room.dataset['roomName'], 
                            item_category: 'Rooms',
                            item_variant: room.dataset['productName'], 
                            price: parseInt(room.dataset['total']), 
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                            index: ++idx                
                        };
                    })
                }
            }
        }
        else if(BE_ATTRIBUTES.page === 'thank_you_page')
        {
            eventObj =
            {
                event: 'purchase',
                ecommerce: 
                {
                    item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName, 
                    affiliation: 'Vertical Booking',
                    transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                    arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                    rooms_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.rooms),
                    adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
                    children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
                    value: parseInt(BE_ATTRIBUTES.cmWidgetValues.total),
                    tax: parseInt(BE_ATTRIBUTES.cmWidgetValues.totalTaxes),
                    items: [...rooms].map((room, idx) => 
                    {
                        return {
                            item_category: 'Rooms',
                            item_id: room.dataset['roomCod'], // Codice camera
                            item_name: room.dataset['roomName'], // Tipo di camera
                            item_variant: room.dataset['productName'], //Rate code
                            price: parseInt(room.dataset['total']), // Prezzo medio per notte
                            //promotion_id: '@@OFFER_CODE@@',
                            //promotion_name: '@@OFFER_NAME@@',
                            quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights), // Numero notti
                            index: ++idx
                        };
                    })
                }
            }
        }

        console.log('eventObj', eventObj);
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventObj);
        
        // Google Tag Manager Summary (post cicle) 
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',gtmCode);
    });
}

export function ghaAdWords(id, label)
{
    populateBeAttributes().then(() =>
    {
        loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=AW-${id}`).then(() =>
        {
            const gtag = function() {
                dataLayer.push(arguments);
            };
            
            window.dataLayer = window.dataLayer || [];
            gtag('js', new Date());
            gtag('config', `AW-${id}`);
        
            if(BE_ATTRIBUTES.page === 'thank_you_page')
            {
                const eventObj = 
                {     
                    send_to: `AW-${id}/${label}`,
                    value: BE_ATTRIBUTES.cmWidgetValues.total, 
                    currency: BE_ATTRIBUTES.cmWidgetValues.currency,
                    transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
                };
                gtag('event', 'conversion', eventObj);
            }
        });
    });
}

export function addNewSojernCode()
{
    loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
    {
        populateBeAttributes().then(() =>
        {
            if(!['results', 'guest_info', 'thank_you_page'].includes(BE_ATTRIBUTES.page))
            {
                return;
            }
            
            const params = {};
                    
            if(BE_ATTRIBUTES.page === 'results')
            {
                params.hpid = BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
                params.pt = 'SEARCH'; /* Page Type */
                params.hd1 = BE_ATTRIBUTES.cmWidgetValues.startDateNumbers; /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                params.hd2 = BE_ATTRIBUTES.cmWidgetValues.endDateNumbers; /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
            }
            if(BE_ATTRIBUTES.page === 'guest_info')
            {
                params.hpid = BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
                params.pt = 'SHOPPING_CART'; /* Page Type */
                params.hcu = BE_ATTRIBUTES.cmWidgetValues.currency; /* Purchase Currency */
            }
            if(BE_ATTRIBUTES.page === 'thank_you_page')
            {
                params.hpid = BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
                params.pt = 'CONVERSION'; /* Page Type */
                params.hd1 = BE_ATTRIBUTES.cmWidgetValues.startDateNumbers; /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                params.hd2 = BE_ATTRIBUTES.cmWidgetValues.endDateNumbers; /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                params.hr = BE_ATTRIBUTES.cmWidgetValues.rooms; /* Number of Rooms */
                params.hc = BE_ATTRIBUTES.cmWidgetValues.roomType; /* Room type */
                params.tch = BE_ATTRIBUTES.cmWidgetValues.children; /* Number of Children */
                params.tad = BE_ATTRIBUTES.cmWidgetValues.adults; /* Number of Adults */
                params.t = BE_ATTRIBUTES.cmWidgetValues.occupancy; /* Number of Travelers */
                params.hp = BE_ATTRIBUTES.cmWidgetValues.total; /* Purchase Price */
                params.hcu = BE_ATTRIBUTES.cmWidgetValues.currency; /* Purchase Currency */
                params.hconfno = BE_ATTRIBUTES.cmWidgetValues.code; /* Confirmation Number */    
            }
    
            /* Please do not modify the below code. */ 
            try {params = Object.assign({}, sjrn_params, params);}catch(e){}
            var cid = [];
            var paramsArr = [];
            var cidParams = [];
            var pl = document.createElement('iframe');
            var defaultParams = {"vid":"tou"};
            for(let key in defaultParams) { params[key] = defaultParams[key]; };
            for(let key in cidParams) { cid.push(params[cidParams[key]]); };
            params.cid = cid.join('|');
            for(let key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };
            pl.type = 'text/html';
            pl.setAttribute('style','height:0; width: 0; display:none;');
            pl.async = true;
            pl.src = 'https://static.sojern.com/cip/w/s?id=186700&f_v=v6_js&p_v=1&' + paramsArr.join('&'); (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);     
        });
        
    });

    

}


export function facebookPixelCode(pixelId)
{
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
        
    fbq('init', pixelId);
    fbq('track', 'PageView');
}

export async function updateCancellationText()
{
    await populateBeAttributes();
    
    if(!BE_ATTRIBUTES.page === 'results')
    {
        return;
    }
        
    await waitForElement('#box-risultati', false, 10000);
    
    const sections = document.querySelectorAll('.section_classicamere');
    sections.forEach(section =>
    {
        const texts = section.querySelectorAll('.pay-cond-short');
        texts[0].textContent = 'See Rate Information for';
        texts[1].textContent = 'Payment and Cancel Policy';
    });
}

export function fixSelectButtonGlitch()
{
    import('./styles/fix-select-button-glitch.scss');

}





