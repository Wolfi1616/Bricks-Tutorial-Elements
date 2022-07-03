/*
 Author:       Wolfgang Hartl
 Author URI:   https://my-webcraftdesign.at/
 DOCS:         https://my-webcraftdesign.at/tutorial/read-more-read-less-toggle-in-bricksbuilder/
*/
function WCD_rmrl(options) {
  const readLessText = options.readLessText;
  const readMoreText = options.readMoreText;

  const rmrlContent = document.querySelectorAll("[wcd_rmrl_percentage]");

  rmrlContent.forEach((element) => {
    // INITIAL SETUP (define height, overflow and attributes)
    element.style.overflow = "hidden";
    element.setAttribute("wcd_rmrl_max", element.clientHeight + "px");

    var percentage = element.getAttribute("wcd_rmrl_percentage");
    var height = element.clientHeight;
    height = Math.round((height / 100) * percentage) + "px";

    element.setAttribute("wcd_rmrl_min", height);
    element.style.height = height;

    //ASSIGN CLICK EVENT TO TRIGGER
    trigger = element.nextSibling;
    trigger.addEventListener("click", function () {
      if (element.style.height == element.getAttribute("wcd_rmrl_min")) {
        element.style.height = element.getAttribute("wcd_rmrl_max");
        this.childNodes.forEach((node) => {
          if (node.nodeValue !== null) {
            node.nodeValue = readLessText;
          }
        });
      } else {
        element.style.height = element.getAttribute("wcd_rmrl_min");
        this.childNodes.forEach((node) => {
          if (node.nodeValue !== null) {
            node.nodeValue = readMoreText;
          }
        });
      }
    });
  });
}
