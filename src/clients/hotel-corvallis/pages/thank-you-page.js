import load from 'little-loader'

load('https://widgets.gtsgig.com/boot.js?hotel=hotelcorvallis', function(err)
{
    if(err){
        console.log(`failed with error: ${err}`)    
    }
})

gtag('event', 'conversion', {'send_to': 'AW-365719249/L8ECCNSbzKsCENHdsa4B'})
