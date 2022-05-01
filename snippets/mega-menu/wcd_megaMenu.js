function WCD_megaMenu(options) {
    const menu = document.querySelector(options.menu);

    if (!options.click) {
        options.click = {
            open: true,
            close: true,
        }
    }
    options.click.hasOwnProperty('open') ? options.click.open = options.click.open : options.click.open = true;
    options.click.hasOwnProperty('close') ? options.click.close = options.click.close : options.click.close = true;


    if (!options.hover) {
        options.hover = {
            open: false,
            close: false,
        }
    }
    options.hover.hasOwnProperty('open') ? options.hover.open = options.hover.open : options.hover.open = false;
    options.hover.hasOwnProperty('close') ? options.hover.close = options.hover.close : options.hover.close = false;


    var menuPosition = menu.getBoundingClientRect();


    if (options.breakpoint.matches) {
        menuItems = menu.querySelector('.bricks-mobile-menu-wrapper').getElementsByTagName('A');
    } else {
        menuItems = menu.querySelector('.bricks-nav-menu-wrapper').getElementsByTagName('A');
    }

    // INITIAL SETUP FOR ALL MEGA-MENU ITEMS & DROPDOWNS!
    document.querySelectorAll('[wcd_mm_target]').forEach((dropdownElement) => {
        dropdownElement.getAttribute('wcd_mm_position') ? position = dropdownElement.getAttribute('wcd_mm_position') : position = options.position;
        index = dropdownElement.getAttribute('wcd_mm_target');

        linkPosition = menuItems[index].getBoundingClientRect();
        dropdownWidth = dropdownElement.clientWidth;
        leftPosition = linkPosition.left - menuPosition.left;
        rightPosition = menuPosition.right - linkPosition.right;
        centerPosition = leftPosition - dropdownWidth / 2;

        menuItems[index].classList.add('wcd_mm_dropdown');
        menuItems[index].innerHTML += '<i class="wcd_mm_dropdown" style="margin-left: 5px; transform: rotate(90deg);">&#62;</i>';
        menuItems[index].removeAttribute('href');

        dropdownElement.style.display = 'none';
        dropdownElement.style.maxWidth = '100vw';
        dropdownElement.style.zIndex = 1993;


        if (options.breakpoint.matches) {
            // MOBILE:
            menuItems[index].parentNode.append(dropdownElement);

        } else {
            // DESKTOP:
            menu.append(dropdownElement);
            dropdownElement.style.position = 'absolute';
            if (position == 'center') {
                dropdownElement.style.left = centerPosition + 'px';
            } else if (position == 'left') {
                dropdownElement.style.left = leftPosition + 'px';
            } else {
                dropdownElement.style.right = rightPosition + 'px';
            }
            if (options.hover.open) menuItems[index].addEventListener('mouseover', wcd_toggleDropdowns);
            if (options.hover.close) document.addEventListener('mouseover', wcd_closeAllDropdowns);
        }


        if (options.click.open) menuItems[index].addEventListener('click', wcd_toggleDropdowns);
        if (options.click.close) document.addEventListener('click', wcd_closeAllDropdowns);

        function wcd_toggleDropdowns() {
            document.querySelectorAll('[wcd_mm_target]').forEach(a => {
                if (a != dropdownElement) {
                    a.style.display = 'none';
                }
            });
            if (dropdownElement.style.display == 'none') {
                dropdownElement.style.display = 'flex';
                dropdownElement.classList.remove('bricks-lazy-hidden');
            } else {
                dropdownElement.style.display = 'none';
            }
        }

        function wcd_closeAllDropdowns(e) {
            if (!e.target.getAttribute('wcd_mm_target') && !e.target.classList.contains('wcd_mm_dropdown')) {

                // LOOP UPWARDS THE DOM AND FIND AN ELEMENT WITH THE ATTRIBUTE [WCD_MM_TARGET]
                // NEEDED FOR ELEMENTS NESTED INSIDE THE DROPDOWN
                const findParentAttribute = (element) => {
                    while (element !== null) {
                        if (element.getAttribute('wcd_mm_target')) {
                            // console.log(element);
                            return element;
                        }
                        element = element.parentElement;
                    }
                    return null;
                };
                const result = findParentAttribute(e.target);

                if (result === null) {
                    document.querySelectorAll('[wcd_mm_target]').forEach(a => {
                        a.style.display = 'none';
                    });
                }

            }
        }
    });

}