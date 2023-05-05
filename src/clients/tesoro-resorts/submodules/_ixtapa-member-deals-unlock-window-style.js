import * as utils from './../../../lib/utils';

export function ixtapaMemberDealsUnlockWindowStyle()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '18509' && utils.BE_ATTRIBUTES.page === 'results')
        {
            document.querySelector('.select_room.unlock').addEventListener('click', () =>
            {
                utils.waitForElement('#unlocker', false, 5000).then(unlocker =>
                {
                    const moduleClass = 'unlocker-pane';
                    
                    //const unlocker = document.getElementById('unlocker');
                    unlocker.classList.add(moduleClass);
                    
                    //Remove existing elements
                    unlocker.innerHTML = '';
                    
                    //Add left and right box
                    const leftBox = document.createElement('div');
                    leftBox.classList.add(`${moduleClass}--left-box`);
                   
                    const rightBox = document.createElement('div');
                    rightBox.classList.add(`${moduleClass}--right-box`);
                   
                    unlocker.appendChild(leftBox);
                    unlocker.appendChild(rightBox);
                    
                    //Add Left Box Header
                    const h2ElLeft = document.createElement('h2');
                    h2ElLeft.textContent = utils.BE_ATTRIBUTES.lang === 'esp' ? 'DESBLOQUEAR TARIFA EXCLUSIVA TESORO REWARDS' : 'Unlock member deals and customized inspiration';
                    h2ElLeft.classList.add(`${moduleClass}--header`, `${moduleClass}--left-box-header`);
                    leftBox.append(h2ElLeft);
                    
                    //Add Left Box Image
                    const logo = document.createElement('img');
                    logo.src = 'https://tesororewards.com/svg/logo-trw/';
                    logo.classList.add(`${moduleClass}--logo`);
                    leftBox.append(logo);
                    
                    
                    //Add Right Box Header
                    const h2ElRight = document.createElement('h2');
                    h2ElRight.textContent = utils.BE_ATTRIBUTES.lang === 'esp' ? 'INICIAR SESION EN SU CUENTA' :  'Sign in to your account';
                    h2ElRight.classList.add(`${moduleClass}--header`);
                    rightBox.append(h2ElRight);
                    
                    //Add Right Box Paragraph
                    const pElRight = document.createElement('div');
                    pElRight.classList.add(`${moduleClass}--p`);
                    pElRight.textContent = utils.BE_ATTRIBUTES.lang === 'esp' ? 'Haga clic en el botón Iniciar sesión para iniciar sesión en su cuenta.' : 'Sign in to enjoy Tesoro Rewards price.';
                    rightBox.append(pElRight);
                    
                    // //Add Right Box Login Button
                    const loginAnchor = document.createElement('a');
                    loginAnchor.classList.add(`${moduleClass}--login-anchor`);
                    loginAnchor.setAttribute('href', 'https://tesororewards.com/es/');
                    loginAnchor.setAttribute('target', '_blank');
                    loginAnchor.textContent = utils.BE_ATTRIBUTES.lang === 'esp' ? 'Iniciar Sesión' : 'Log In';
                    rightBox.append(loginAnchor);

                    import('./styles/ixtapa-member-deals-unlock-window-style.scss');   
                });
            });
            
            
        }
    });
}



