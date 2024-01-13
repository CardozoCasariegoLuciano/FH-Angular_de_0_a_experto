import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
})
export class NewPageComponent implements OnInit {
  heroForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  constructor(
    private heroService: HeroService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.actRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroeByID(id)))
      .subscribe({
        next: (hero) => {
          if (!hero) return this.router.navigate(['heroes/list']);
          this.heroForm.reset(hero);
          return;
        },
      });
  }

  get currentFormHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmitForm() {
    if (this.heroForm.invalid) return;

    if (this.currentFormHero.id) {
      this.heroService.updateHero(this.currentFormHero).subscribe({
        next: (hero) => {
          this.showSnackBar(hero.superhero + 'Actualiado');
        },
      });
    } else {
      this.heroService.addHero(this.currentFormHero).subscribe({
        next: (hero) => {
          this.showSnackBar(hero.superhero + 'Creado');
          this.router.navigate(['heroes/edit/', hero.id]);
        },
      });
    }
  }

  onDeleteHero() {
    if (!this.currentFormHero.id) {
      throw new Error('Hero id is querired');
    }

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((dialogResp) => dialogResp),
        switchMap(() => this.heroService.deleteHero(this.currentFormHero.id)),
        filter((wasDeleted) => wasDeleted),
      )
      .subscribe({
        next: () => {
          this.router.navigate(['heroes/list']);
        },
      });
  }

  private showSnackBar(msg: string) {
    this.snackBar.open(msg, 'done', { duration: 2500 });
  }
}
