import * as utils from './../../../lib/utils' 

export function updateQuotationForm()
{
  import('./styles/update-quotation-form.scss');
  
  utils.waitForElement('#theform_preventivo #prev_note', false, 999999999).then(el =>
  {
    el.setAttribute('placeholder', 'Remarks/Travel Agent Details')      
  })

}