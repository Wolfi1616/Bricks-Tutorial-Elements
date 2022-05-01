function WCD_tabs(options) {
    const defaultOpen = options.defaultOpen;
    const tabLinks = document.querySelectorAll('.wcd_tab_link');
    const tabContents = document.querySelectorAll('.wcd_tab_content');


    // SETUP CONTENT
    tabContents.forEach((content, index) => {
        if (index == defaultOpen) {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    });
    // SETUP LINKS
    tabLinks.forEach((link, index) => {
        link.style.cursor = 'pointer';
        if (index == defaultOpen) {
            link.classList.add('wcd_tab_link_active');
        } else {
            link.classList.remove('wcd_tab_link_active');
        }

        // EVENT LISTENER:
        link.addEventListener('click', function() {
            tabContents.forEach((content, i) => {
                if (i == index) {
                    content.style.display = 'flex';
                } else {
                    content.style.display = 'none';
                }
            });
            tabLinks.forEach(a => {
                a.classList.remove('wcd_tab_link_active');
            });
            this.classList.add('wcd_tab_link_active');
        });
    })
}