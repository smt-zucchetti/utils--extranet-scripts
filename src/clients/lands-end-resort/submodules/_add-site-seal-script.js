import * as utils from './../../../lib/utils'

export function addSiteSealScript() 
{
    const anchor = document.createElement('a')
    anchor.setAttribute('href', '#')
    anchor.setAttribute('class', 'siteseal-anchor')
    anchor.addEventListener('click', () =>
    {
        window.open(
            'https://www.rapidscansecure.com/siteseal/Verify.aspx?code=84,CBD9FAEF3953547AB4B1FD6E4261ADC71F7CD4E7', 
            'Verification',  
            'location=no, toolbar=no, resizable=no, scrollbars=yes, directories=no, status=no, top=100, left=100, width=960, height=526'
        ) 
        
        return false
    })
    
    const img = document.createElement('img')
    img.setAttribute('alt', 'CompliAssure SiteSeal')
    img.setAttribute('src', 'https://www.rapidscansecure.com/siteseal/Seal.aspx?code=84,CBD9FAEF3953547AB4B1FD6E4261ADC71F7CD4E7')
    img.setAttribute('border', 0)
    
    anchor.appendChild(img)
    document.body.appendChild(anchor)
    
    import('./styles/add-site-seal-script.scss');
}