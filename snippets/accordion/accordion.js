/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0
 DOCS:         https://my-webcraftdesign.at/tutorial/create-an-accordion-the-easy-way-with-bricks-builder/
*/

function Wcd_accordion(options){
    var target = document.getElementById(options.target);
    var accordionItems = target.querySelectorAll('.wcd_accordion_header');

    for (var i = 0; i < accordionItems.length; i++){
        accordionItems[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            
            if ( this.classList.contains('wcd_accordion_active') ) {
             this.classList.remove('wcd_accordion_active');
             this.nextElementSibling.style.maxHeight = null;

            } else if (!options.multiple){
                for ( var i = 0; i < accordionItems.length; i++){
                    accordionItems[i].classList.remove("wcd_accordion_active");
                    accordionItems[i].nextElementSibling.style.maxHeight = null;
                }
                this.classList.add("wcd_accordion_active");
                content.style.maxHeight = content.scrollHeight + "px";

            } else {
                this.classList.toggle("wcd_accordion_active");
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }               
            }
        })
    }
}



// INITIALIZE

var options = {
    target: 'accordion',
    multiple: false,
}

const acc = new Wcd_accordion(options);
const accordion = new Wcd_accordion(
    {
    target: 'newAccordion',
    multiple: true,
    }
);

