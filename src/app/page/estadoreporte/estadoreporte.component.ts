import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadoreporte',
  templateUrl: './estadoreporte.component.html',
  styleUrls: ['./estadoreporte.component.css']
})
export class EstadoreporteComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
