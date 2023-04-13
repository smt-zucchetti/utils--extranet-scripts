export function addFacebookLinkToFooter()
{
    const fbIcon = document.createElement('i');
    fbIcon.classList.add('fa', 'fa-facebook-square');
    fbIcon.setAttribute('aria-hidden', true);
    
    const footerLinkAnchor = document.createElement('a');
    footerLinkAnchor.setAttribute('href', 'https://www.facebook.com/twinmountaininnandsuites');
    footerLinkAnchor.setAttribute('target', '_blank');
    
    const footerLinkCont = document.createElement('div');
    footerLinkCont.classList.add('footer-link');
    
    footerLinkAnchor.appendChild(fbIcon);
    fbIcon.after('www.facebook.com/twinmountaininnandsuites');
    footerLinkCont.appendChild(footerLinkAnchor);
    
    const footerRightCol = document.querySelector('#default-footer .right-col');
    footerRightCol.appendChild(footerLinkCont);
}