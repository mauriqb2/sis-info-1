import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  newUser = {
    name: '',
    ci: 0
  }
  usuarios:any[] = []
  constructor(private userService: UserService){}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.userService.getUser().subscribe(data => {
      this.usuarios = data;
    })
  }

  saveUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (res) => {
        this.newUser = {
          name: '',
          ci: 0
        }
        this.obtenerUsuarios();
        this.obtenerUsuarios();
      },
      error: (res) => {
        console.log('Error al crear usuario: ', res);
      }
    })
  }
}
