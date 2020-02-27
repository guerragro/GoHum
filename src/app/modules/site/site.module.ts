import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PoeComponent} from './poe/poe.component';
import {FormsModule} from '@angular/forms';
import {SiteRoutingModule} from './site-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    PoeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
