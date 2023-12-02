console.log(
  "1.Checking validation of pages: +16\n2.The layout matches the design: +42\n3.CSS Requirements: +10\n4.Interactivity: +32 "
);
console.log(
  "1.The layout of the pages aligns the design at a screen width of 1440px: +14\n2.The layout of the pages aligns the design at a screen width of 768px: +14\n3.The layout of the pages aligns the design at a screen width of 380px: +14 \nThere is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: +20\n5.During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: +8\n6.At screen widths of 768px and below, the menu and navigation buttons in the header are concealed on both pages, and a burger menu icon is displayed: +4\n7.Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools) on both pages: +4\n8.The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): +12"
);
import "./index.html";
import "./menu.html";
import "./main.scss";
import "./modules/burger.js";
import "./modules/slider.js";
