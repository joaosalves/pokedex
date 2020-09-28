import { NgModule } from '@angular/core';
import { PoModule, PoTableComponent } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoModule,
    PoTableComponent
  ],
  exports: [
    PoModule,
    PoTableComponent
  ]
})
export class PoUiModule { }
