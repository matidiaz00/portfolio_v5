import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.removeHoverInMobile()
  }

  removeHoverInMobile() {
    if (this.hasTouch()) { // remove all the :hover stylesheets
      try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
          const styleSheet: any = document.styleSheets[si];
          if (!styleSheet.rules) continue;
    
          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;
    
            if (styleSheet.rules[ri].selectorText.match(':hover')) {
              styleSheet.deleteRule(ri);
            }
          }
        }
      } catch (ex) {}
    }
  }

  hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0;
  }
  
}