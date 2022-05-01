/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0.1
 DOCS:         https://my-webcraftdesign.at/tutorial/table-of-contents-in-bricksbuilder/
*/
function WCD_toc(options) {
    const tableID = document.querySelector(options.target);
    const tagList = [];
    options.taglist.forEach((tag, i) => {
        tagList[i] = tag + ':not(.wcd_tableOfContents_skip)';

    });

    const headings = document.querySelectorAll(tagList);


    for (var i = 0; i < headings.length; i++) {
        attribute = headings[i].getAttribute('id');

        // IN CASE THERE ISN'T AN ID ON THE ELEMENT - GENERATE ONE:
        if (attribute === '' || null === attribute || attribute === undefined) {
            tmpID = headings[i].innerText;
            tmpID = tmpID.replace(/\s/g, '').toLowerCase();
            tmpID = tmpID.replace(/[^\w\s]/gi, '');

            headings[i].setAttribute('id', 'wcd_' + tmpID);
            attribute = headings[i].getAttribute('id');
        }

        currentTag = headings[i].tagName;
        classes = 'wcd_tableOfContents_' + currentTag;


        if (options.highlight) {
            // FOR MORE SCROLL-TRIGGERS USE: if (currentTag == 'H2' || currentTag == 'H3') ...
            options.highlight.forEach(highlightTag => {

                highlightTag = highlightTag.toUpperCase();

                if (currentTag == highlightTag) {
                    classes += ' wcd_tableOfContents_scrollTrigger';
                }

            });
        }


        // CREATE ELEMENT & APPEND IT TO TOC
        var listElement = document.createElement('a');
        listElement.classList = classes;
        listElement.href = '#' + attribute;
        listElement.append(headings[i].innerText);
        tableID.append(listElement);

    }


    if (options.highlight) {
        // SCROLLTRIGGER
        document.addEventListener('scroll', function() {
            offset = 250;
            scrollPos = (document.body.scrollTop || document.documentElement.scrollTop);
            scrollTrigger = document.querySelectorAll('.wcd_tableOfContents_scrollTrigger');

            for (i = 0; i < scrollTrigger.length; i++) {
                targetElement = scrollTrigger[i].getAttribute('href');
                targetElement = targetElement.replace('#', '');
                targetElement = document.getElementById(targetElement);


                elementPosition = targetElement.getBoundingClientRect().top + scrollPos - offset;
                if (scrollPos > elementPosition) {
                    Array.from(document.querySelectorAll('.wcd_tableOfContents_active'))
                        .forEach((el) => el.classList.remove('wcd_tableOfContents_active'));
                    scrollTrigger[i].classList.add('wcd_tableOfContents_active');
                }
            }
        });
    }


}