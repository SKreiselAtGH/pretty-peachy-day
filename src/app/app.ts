import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideTopNavModule } from './common/side-top-nav/side-top-nav.module';
import { SideTopNav } from './common/side-top-nav/side-top-nav';
import { GlassCardModule } from "./common/glass-card/glass-card.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, SideTopNavModule, GlassCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pretty-peachy-day');
}
