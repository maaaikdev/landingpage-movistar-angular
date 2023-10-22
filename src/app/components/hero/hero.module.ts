import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component'; // Asegúrate de que la ruta sea correcta
import { CoverageComponent } from './coverage/coverage.component';

@NgModule({
    declarations: [
        HeroComponent,
        CoverageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent
    ], 
})
export class HeroModule {}
