import * as utils from './../../../lib/utils'

//code from client
window.interdeal = {
	sitekey   : "8a6191eb3591dcfe3d7f7a816851c869",
	Position  : "Left",
	Menulang  : "EN",
	domains	 : {
	  js  : "https://aacdn.nagich.com/",
	  acc : "https://access.nagich.com/"
	},	
	isPartial : true,
	btnStyle  : {
		vPosition : ["80%",undefined], //Y-axis position of the widget, left side is reffering to the desktop version, the right side is for mobile.
		scale	  : ["0.8","0.7"], //Size of the widget, the left side is referring to the desktop version, the right side is for mobile.
		icon	  : { 
			type	: 1, //You can choose between 1- 14 icons, or set value as string like "Accessibility".
			shape	: "semicircle", //You can choose the following shapes: "circle", "rectangle", "rounded", "semicircle".
			outline	: true //true / false.
		},
		color : {
		    main   : "#122231",
		    second : "#fff"
		}
	}
};

(function(doc, head, body){
	var coreCall             = doc.createElement('script');
	coreCall.src             = 'https://aacdn.nagich.com/core/2.1.9/accessibility.js';
	coreCall.defer           = true;
	coreCall.integrity       = 'sha512-JkluHARviIJeTsvupKh9gkG6AsMbbBOkfg9zPQvZwxJtslc0NTDhdQrVX+qg45fEyM97XrW07Gb8wmh/vwlITA==';
	coreCall.crossOrigin     = 'anonymous';
	coreCall.setAttribute('data-cfasync', true );
	body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);


//CSS to give Results panes "Book Now" text instead of price

const styles = `
    #box-risultati .campo .accordion .tariffa {
        visibility: hidden;
    }
    
    #box-risultati .campo .accordion .tariffa::after{
        content: "Book Now";
        color:rgb(0, 74, 93);
        font-family:Roboto, sans-serif;
        font-size:16.8px;
        font-weight:700;
        visibility: visible;
    }
    
    @media (max-width: 680px){
        #box-risultati .campo .accordion .tariffa::after{
                position: absolute;
                right: 40px;
        }
    }
`;

utils.addStylesToStylesheet(styles);