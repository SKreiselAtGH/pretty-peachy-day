import { MatIconModule } from "@angular/material/icon";
import { SideTopNav } from "./side-top-nav";
import {NgModule} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  // Metadata goes here
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [SideTopNav],
  exports: [SideTopNav]
})
export class SideTopNavModule { }