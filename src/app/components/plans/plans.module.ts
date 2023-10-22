import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlansComponent } from './plans.component';
import { PlansCardsComponent } from './plans-cards/plans-cards.component';

@NgModule({
    declarations: [
        PlansComponent,
        PlansCardsComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        PlansComponent
    ], 
})
export class PlansModule {}
