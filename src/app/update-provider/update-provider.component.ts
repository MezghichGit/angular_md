import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements OnInit {
  idProvider!:number;
  constructor(private activatedRoute:ActivatedRoute, private providerService:ProviderService)
  {}
  ngOnInit(): void {
// Getting route parameters
    this.activatedRoute.params.subscribe(params => {
      this.idProvider = params['id']; //
      //alert("ID = "+this.idProvider);
      this.providerService.getProviderById(this.idProvider).subscribe(
        data => console.log(data)
      );
    });
  }

}
