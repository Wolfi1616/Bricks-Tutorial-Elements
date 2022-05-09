/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0
 DOCS:         https://my-webcraftdesign.at/tutorial/modal-popup-in-bricks/
*/
function WCD_modal(options) {
    // MODAL-SETUP
    const modal = document.querySelector(options.modal);
    modal.style.display = 'none';
    modal.style.zIndex = '1993';
    modal.style.position = 'fixed';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.left = '0px';
    modal.style.top = '0px';


    // TRIGGER-SETUP
    if (!options.trigger) {
        options.trigger = '.wcd_openModal';
    }
    const trigger = document.querySelectorAll(options.trigger);
    trigger.forEach(triggerElement => {
        triggerElement.addEventListener('click', () => {
            wcd_openModal();
        });
    });


    // TIMEOUT-SETUP
    if (options.timeout) {
        setTimeout(function() {
            wcd_openModal();
        }, options.timeout);
    }


    //SCROLL-SETUP:
    if (options.scroll) {
        document.addEventListener('scroll', openModalAfterDistance);
    }


    // CLOSE-SETUP
    if (!options.close) {
        options.close = '.wcd_closeModal';
    }
    const close = document.querySelectorAll(options.close);
    close.forEach(closeElement => {
        closeElement.addEventListener('click', () => {
            wcd_closeModal();
        });
    });
    // CLOSE ON BACKDROP-CLICK 
    document.addEventListener('click', function(e) {
        if (e.target == modal) {
            wcd_closeModal();
        }
    });
    //CLOSE ON ESC-KEY
    document.addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key == 'Escape') {
            wcd_closeModal();
        }
    });


    function wcd_openModal() {
        modal.style.display = 'flex';
    }

    function openModalAfterDistance() {
        scrollPos = (document.body.scrollTop || document.documentElement.scrollTop);
        if (scrollPos > options.scroll) {
            wcd_openModal();
            document.removeEventListener('scroll', openModalAfterDistance);
        }

    }

    function wcd_closeModal() {
        modal.style.display = 'none';
    }
}