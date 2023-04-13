export function addHeader()
{
    const header = document.createElement('div')
    header.classList.add('villa-header')
    document.body.prepend(header)

    
    //Logo
    const headerAnchor = document.createElement('a')
    headerAnchor.classList.add('villa-header--logo-anchor')
    headerAnchor.setAttribute('href', 'http://villaembrace.com/')
    const headerAnchorImage = document.createElement('img')
    headerAnchorImage.setAttribute('src', 'https://reservations.verticalbooking.com/img_templ/img_stili_18886/logo.png')
    header.appendChild(headerAnchor)
    headerAnchor.appendChild(headerAnchorImage)
    header.appendChild(headerAnchor)
    
    //Menu
    const menuObj = 
    {
        'Homepage': 'www.villaembrace.com',
        'Villa':  'www.villaembrace.com/villa',
        'Accommodations': 'www.villaembrace.com/accommodations',
        'Experiences':  'www.villaembrace.com/experiences',
        'Destination':  'www.villaembrace.com/destination',
        'Gallery':  'www.villaembrace.com/gallery'
    }
    
    const menuUl = document.createElement('ul')
    menuUl.classList.add('villa-header--menu', 'fas', 'fa-bars')
    for(const [key, value] of Object.entries(menuObj))
    {
        const menuLi = document.createElement('li')
        menuUl.appendChild(menuLi)
        const menuLiAnchor = document.createElement('a')
        menuLiAnchor.setAttribute('href', value)
        menuLiAnchor.textContent = key
        menuLi.appendChild(menuLiAnchor)
    }
    menuUl.addEventListener('click', () =>
    {
        menuUl.classList.toggle('is-active')
    })
    
    header.appendChild(menuUl)
    
    import('./styles/add-header.scss');
}