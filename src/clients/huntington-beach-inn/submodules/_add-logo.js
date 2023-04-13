export function addLogo()
{
    const aEl = document.createElement('a');
    aEl.href = 'https://www.huntingtonbeachinn.com/';
    
    const iEl = document.createElement('img');
    iEl.src = 'https://verticalbookingusa.com/assets/scripts/extranet/src/clients/huntington-beach-inn/submodules/images/Huntington_Beach_Inn.png';
    iEl.id = 'propLogo';
    
    aEl.appendChild(iEl);
    document.body.appendChild(aEl);
    
    import('./styles/add-logo.scss');
}