import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './myComponents/topnav/topnav.component';
import { ProjectdtlsComponent } from './myComponents/projectdtls/projectdtls.component';
import { ProjectcostComponent } from './myComponents/projectcost/projectcost.component';
import { ProjectdatesComponent } from './myComponents/projectdates/projectdates.component';
import { ProjectgalleryComponent } from './myComponents/projectgallery/projectgallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ProjectdtlsComponent,
    ProjectcostComponent,
    ProjectdatesComponent,
    ProjectgalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
