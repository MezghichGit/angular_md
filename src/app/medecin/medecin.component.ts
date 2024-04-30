import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.css'
})
export class MedecinComponent implements OnInit{

  ngOnInit(): void {
    console.log("Hello medecin");
    console.log(this.medecinsDetails);
}
medecins : string[] = ["Khaled","Sofine","Amine","Haythem","Salah"];

medecinsDetails : Medecin[]=[
  {"nom":"Mezghich","prenom":"Amine","age":38,"grade":"Generaliste"},
  {"nom":"Ben Salah","prenom":"Salah","age":39,"grade":"Radio"},
  {"nom":"Khaled","prenom":"Khaled","age":40,"grade":"Chirurgie"},
  {"nom":"Haithem","prenom":"Ben Haithem","age":32,"grade":"Generaliste"},
  {"nom":"Ben Sofien","prenom":"Sofien","age":29,"grade":"Ophtalmo"}
];
}
