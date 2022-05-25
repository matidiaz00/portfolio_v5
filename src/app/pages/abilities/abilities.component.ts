import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html'
})
export class AbilitiesComponent implements OnDestroy {

  constructor(
    private _renderer: Renderer2
  ) {
    this._renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy(): void {
    this._renderer.removeClass(document.body, 'bg-white');
  }

}