import {NgModule} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { GlassCard } from './glass-card';

@NgModule({
    declarations: [GlassCard],
    exports: [GlassCard]
})
export class GlassCardModule { }