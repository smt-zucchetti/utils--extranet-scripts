export const BE_TYPE = Object.freeze(
{ 
    Premium: 1, 
    SP: 2, 
    Smart: 3, 
    Advanced: 4
})

export const BE_ATTRIBUTE_NAMES = Object.freeze(
{
    groupId: 'id_gruppo',
    brandId: 'id_brand',
    propId: 'id_albergo',
    styleId: 'id_stile',
    lang: 'lingua_int'
})

export const BE_ATTRIBUTES = 
{
    beType: null,
    beTypeName: null,
    groupId: null,
    brandId: null,
    propId: null,
    styleId: null,
    lang: null,
    page: null,
    cmValues: null
}

export const BE_PAGE_NAMES = Object.freeze(
[
    'first_page',
    'results',
    'summary',
    'guest_info', 
    'thank_you_page'
])


export const CURRENT_SCRIPT = document.currentScript || (function() 
{
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})()
