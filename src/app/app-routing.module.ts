import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectcostComponent } from './myComponents/projectcost/projectcost.component';
import { ProjectdatesComponent } from './myComponents/projectdates/projectdates.component';
import { ProjectdtlsComponent } from './myComponents/projectdtls/projectdtls.component';
import { ProjectgalleryComponent } from './myComponents/projectgallery/projectgallery.component';


const routes: Routes = [
{path:'projectdtls', component:ProjectdtlsComponent},
{path:'projectcost', component:ProjectcostComponent},
{path:'projectdate', component:ProjectdatesComponent},
{path:'projectgallery', component:ProjectgalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
