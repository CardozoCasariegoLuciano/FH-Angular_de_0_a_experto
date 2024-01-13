import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './produc-page.component.html',
  styleUrls: ['./produc-page.component.css'],
})
export class ProducPageComponent implements OnInit {
  myForm!: FormGroup;
  color: string = '#425DAB';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(6), Validators.email],
        [],
      ],
    });
  }

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
