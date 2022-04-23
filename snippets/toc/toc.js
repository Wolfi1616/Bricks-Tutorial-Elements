/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 Version:      2.0.1
 DOCS:         https://my-webcraftdesign.at/tutorial/table-of-contents-in-bricksbuilder/
*/

document.addEventListener("DOMContentLoaded", wcd_TOC() );

function wcd_TOC(){
  var tagList = 
  [
      'h1:not(.wcd_tableOfContents_skip)',
      'h2:not(.wcd_tableOfContents_skip)',
      'h3:not(.wcd_tableOfContents_skip)', 
      'h4:not(.wcd_tableOfContents_skip)'          
      //'h5:not(.wcd_tableOfContents_skip)'          
      // 'h6:not(.wcd_tableOfContents_skip)'          
  ];

  var headings = document.querySelectorAll(tagList);
  var tableID = document.getElementById('wcd_tableofcontents');


  
  for (var i = 0; i < headings.length; i++){
      attribute = headings[i].getAttribute('id');
      
      // IN CASE THERE ISN'T AN ID ON THE ELEMENT - GENERATE ONE:
      if ( attribute === '' || null === attribute || attribute === undefined){
          tmpID = headings[i].innerText;
          tmpID = tmpID.replace(/\s/g, '').toLowerCase();
          tmpID =  tmpID.replace(/[^\w\s]/gi, '');
          
          headings[i].setAttribute('id', 'wcd_' + tmpID);
          attribute = headings[i].getAttribute('id');
      }
      
      currentTag = headings[i].tagName;
      classes = 'wcd_tableOfContents_' + currentTag;
      
      // FOR MORE SCROLL-TRIGGERS USE: if (currentTag == 'H2' || currentTag == 'H3') ...
      if (currentTag == 'H2') {
          classes += ' wcd_tableOfContents_scrollTrigger';
      }
      
      // CREATE ELEMENT & APPEND IT TO TOC
      var listElement = document.createElement('a');
      listElement.classList = classes;
      listElement.href = '#' + attribute;
      listElement.append(headings[i].innerText);
      tableID.append(listElement);
      
  }

 
  
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