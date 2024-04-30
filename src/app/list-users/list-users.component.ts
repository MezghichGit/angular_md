import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  //injection d'un service dans le composant via le constructeur
  constructor(private userService: UserService) { }
}
