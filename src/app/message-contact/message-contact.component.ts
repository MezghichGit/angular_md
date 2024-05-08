import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-contact',
  templateUrl: './message-contact.component.html',
  styleUrl: './message-contact.component.css'
})
export class MessageContactComponent {
  @Input() messageFils:string="";
  addContact(contactForm:any){
    alert(contactForm.nom+" "+contactForm.prenom+" "+contactForm.email+" "+contactForm.message);
  }
}
