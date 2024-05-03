import { Component } from '@angular/core';
import { Provider } from '../models';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent {
  addProvider(provider:any){
    console.log(provider.value)
  }
}
