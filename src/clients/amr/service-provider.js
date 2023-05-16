import * as utils from './../../lib/utils';

utils.populateBeAttributes().then(() =>
{
    //Spa Title
    document.querySelector('#thefrm > h2').textContent = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
    
    //Cancel/Modify Button Text
    const a = document.getElementById('button_cancel').setAttribute('value', 'Cancel/change booking');
});

