import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameUpper = 'LUCIANO';
  public nameLower = 'luciano';
  public fullName = 'caRDozO CasaRIeGo LuCIAnO';

  public customDate = new Date();
}
