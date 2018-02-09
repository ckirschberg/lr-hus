import { CalcService } from './calc.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HousePlanComponent } from './house-plan/house-plan.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
// import { BricksComponent } from './bricks/bricks.component';

@NgModule({
  declarations: [
    AppComponent,
    HousePlanComponent,
    // BricksComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule, MatSidenavModule, MatExpansionModule, MatInputModule, MatCardModule, MatButtonModule, MatSlideToggleModule
  ],
  providers: [CalcService, MatExpansionPanel],
  bootstrap: [AppComponent]
})
export class AppModule { }
