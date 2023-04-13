import * as utils from './utils'

export function selectBirthdate(hide = false)
{
    let spIntervalId = setInterval(() =>
    {
        let dd = document.querySelector("#gg_nascita");
        let mm = document.querySelector("#mm_nascita");
        let yy = document.querySelector("#aa_nascita");

        if(dd && mm && yy)
        {
            mm.value = '1'
            dd.value = '1'
            yy.value = '1900'
            
            clearInterval(spIntervalId)
        }
    }, 300)
    
    if(hide)
    {
        /* Hopefully this is hitting the row with the birthdate select boxes every time */
        let styles = `
            .service_provider_page #form_salvataggio_prenotazione tbody > tr:nth-child(11){
                display:none
            }
        `;
    
        utils.addStylesToStylesheet(styles);
    }
}

export function hideLowerSPForm()
{
  const style = `#form_salvataggio_prenotazione .contenitore_riepilogo table tr:nth-child(n+11){
    display:none
  }`;

  utils.addStylesToStylesheet(style);
}

export function SPCheckCovidText(hide = false)
{
    let spIntervalId = setInterval(function(){
        let ccCheck = document.getElementById('consenso_informativa_creditcard')
        if(ccCheck){
            ccCheck.checked  = true;
            if(hide){
                let style = `#form_salvataggio_prenotazione .contenitore_riepilogo table tr:nth-child(n+17){
                    display:none;
                }`;
                utils.addStylesToStylesheet(style);
            }
            clearInterval(spIntervalId)
        }
    }, 300)
}

export function checkIHaveReadNote(hide = false)
{
    utils.getElementBySelector('#regolamento').then((p) =>
    {
        console.log('p', p)
        const checkbox = document.getElementById('#regolamento')
        console.log('checkbox', checkbox)
        checkbox.checked = true
        checkbox.style.display = hide ? 'none' : 'inline-block'     
    })
}

export function makeHeadersVisible()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.SP)
        {
            import('./styles/service-providers/make-headers-visible.scss');
        }
    })
}

export function CCDetailsPaneSPWhiteBg()
{
    
    const style = `#iframe_dati_cc{
      background-color: rgba(255,255,255,0.6); padding: 15px
        
    }`;
    
    utils.addStylesToStylesheet(style);
}

export function addPropertyTitle(propTitle)
{
    const styles = `
        #thefrm h2 {
            color: transparent;
            margin-bottom: -46px;
        }
  
        #thefrm h2::before {
            color: #333333;
            content: "${propTitle} Gift Certificate";
            display: block;
        }
    `

    utils.addStylesToStylesheet(styles)
}
        
export function addAccentColor(colorDark, colorLight)
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.SP)
        {
            document.documentElement.style.setProperty('--accent-color-dark', colorDark)
            document.documentElement.style.setProperty('--accent-color-light', colorLight)
            import('./styles/service-providers/add-accent-color.scss');   
        }
    })
}

export function removeGiftVoucherPreviewButton()
{
    import('./styles/service-providers/remove-gift-voucher-preview-button.scss');
}

function _populatePersonalInfoForm()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.SP)
        {
            document.querySelectorAll('#form_salvataggio_prenotazione input[type="text"]').forEach(input =>
            {
                input.value = 'asdf'
            }) 
            
            document.querySelectorAll('#form_salvataggio_prenotazione select').forEach(select =>
            {
                select.selectedIndex = 1
            })
            
            document.querySelectorAll('#form_salvataggio_prenotazione input[type="checkbox"]').forEach(checkbox =>
            {
                checkbox.checked = true
            })
        }
    })
}