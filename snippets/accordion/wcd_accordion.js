/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0
 DOCS:         https://my-webcraftdesign.at/tutorial/create-an-accordion-the-easy-way-with-bricks-builder/
*/
function WCD_accordion(options) {
    const target = document.querySelector(options.target);
    const accordionItems = target.querySelectorAll('.wcd_accordion_header');

    accordionItems.forEach((item) => {
        item.style.cursor = 'pointer';
        item.nextElementSibling.style.transition = 'max-height ' + options.duration + ' ease-out';
        item.nextElementSibling.style.overflow = 'hidden';

        // INITIAL SETUP
        if (!item.classList.contains('wcd_accordion_active')) {
            item.nextElementSibling.style.maxHeight = '0px'
        } else {
            item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
        }

        // CLICK - LOGIC
        item.addEventListener('click', function() {
            var content = this.nextElementSibling;

            if (this.classList.contains('wcd_accordion_active')) {
                this.classList.remove('wcd_accordion_active');
                content.style.maxHeight = '0px';

            } else if (!options.multiple) {
                accordionItems.forEach((loopItem) => {
                    loopItem.classList.remove("wcd_accordion_active");
                    loopItem.nextElementSibling.style.maxHeight = '0px';
                })
                this.classList.add("wcd_accordion_active");
                content.style.maxHeight = content.scrollHeight + "px";

            } else {
                this.classList.toggle("wcd_accordion_active");
                if (content.style.maxHeight != '0px') {
                    content.style.maxHeight = '0px';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        })
    })
}