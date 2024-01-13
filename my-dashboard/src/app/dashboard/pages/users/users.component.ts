import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UsersComponent implements OnInit {
  public userService = inject(UsersService);

  ngOnInit(): void {
    console.log(this.userService.users());
  }
}
