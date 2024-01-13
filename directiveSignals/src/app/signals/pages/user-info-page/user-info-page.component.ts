import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserService);

  public userID = signal<number>(1);
  public user = signal<User | undefined>(undefined);
  public wasFound = signal<boolean>(true);

  ngOnInit(): void {
    this.loadUser(this.userID());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userID.update(() => id);
    this.user.update(() => undefined);

    this.userService.getUserByID(this.userID()).subscribe({
      next: (user) => {
        this.user.update(() => user);
        this.wasFound.set(true);
      },
      error: () => {
        this.wasFound.set(false);
      },
    });
  }
}
