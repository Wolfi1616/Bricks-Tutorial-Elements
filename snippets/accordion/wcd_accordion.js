/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0
 DOCS:         https://my-webcraftdesign.at/tutorial/nestable-accordion-in-bricksbuilder
*/
function WCD_accordion(options) {
    const target = document.querySelector(options.target);
    const accordionItems = target.querySelectorAll('.wcd_accordion_header');

    accordionItems.forEach((item) => {
        var accordionContent = item.nextElementSibling;


        // INITIAL SETUP

        item.style.cursor = 'pointer';
        accordionContent.style.transition = 'max-height ' + options.duration + ' ease-out';
        accordionContent.style.overflow = 'hidden';

        accordionContent.setAttribute('acc-data-mh', accordionContent.scrollHeight + 'px');

        if (!item.classList.contains('wcd_accordion_active')) {
            accordionContent.style.maxHeight = '0px'
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }

        // CLICK - LOGIC
        item.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var height = content.getAttribute('acc-data-mh');

            if (this.classList.contains('wcd_accordion_active')) {
                this.classList.remove('wcd_accordion_active');
                content.style.maxHeight = '0px';

            } else if (!options.multiple) {
                accordionItems.forEach((loopItem) => {
                    loopItem.classList.remove("wcd_accordion_active");
                    loopItem.nextElementSibling.style.maxHeight = '0px';
                })
                this.classList.add("wcd_accordion_active");
                content.style.maxHeight = height;

            } else {
                this.classList.toggle("wcd_accordion_active");
                if (content.style.maxHeight != '0px') {
                    content.style.maxHeight = '0px';
                } else {
                    content.style.maxHeight = height;
                }
            }
        })
    })
}