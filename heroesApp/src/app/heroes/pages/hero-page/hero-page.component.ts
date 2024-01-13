import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent implements OnInit {
  hero?: Hero;
  constructor(
    private heroService: HeroService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroeByID(id)))
      .subscribe((resp) => {
        if (!resp) return this.router.navigate(['heroes/']);

        this.hero = resp;
        return;
      });
  }
}
