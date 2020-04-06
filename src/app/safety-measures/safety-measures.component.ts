import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-measures',
  templateUrl: './safety-measures.component.html',
  styleUrls: ['./safety-measures.component.css']
})
export class SafetyMeasuresComponent implements OnInit {
  loading = true; 

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000)

  }

}
