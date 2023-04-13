import * as utils from './../../../lib/utils'

export function skipServicesStep()
{
    utils.populateBeAttributes().then(() =>
    {
        import('./styles/skip-services-step/all-pages.scss');
        if(utils.BE_ATTRIBUTES.page === 'summary') 
        {
            import('./styles/skip-services-step/summary.scss');
            utils.waitForElement('#procedi', false, 5000).then((btn) =>
            {
                setTimeout(() =>
                {
                    btn.click()
                }, 1000)
            })
        }
    })
}