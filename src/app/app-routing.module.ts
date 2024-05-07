import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  {
    path:"listeProviders",
    component:ListProvidersComponent
  },
  {
    path:"addProvider",
    component:AddProviderComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"updateProvider/:id",
    component:UpdateProviderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
