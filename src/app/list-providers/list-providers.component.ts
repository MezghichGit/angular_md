import { Component, OnInit } from '@angular/core';
import { Provider } from '../models';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.providerService.getProviders().subscribe(
      (data: Provider[]) => {
        this.providers = data;
      },
      error => console.log(error)
    );
  }

  deleteProvider(id:number)
  {
    this.providerService.deleteProvider(id).subscribe(
      data=>{
       // console.log(data);
        this.refresh();
      }
    );
  }
}
