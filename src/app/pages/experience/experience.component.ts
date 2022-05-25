import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnDestroy {

  constructor(
    private _renderer: Renderer2
  ) {
    this._renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy(): void {
    this._renderer.removeClass(document.body, 'bg-white');
  }

}