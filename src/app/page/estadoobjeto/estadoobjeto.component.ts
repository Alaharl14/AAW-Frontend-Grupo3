import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadoobjeto',
  templateUrl: './estadoobjeto.component.html',
  styleUrls: ['./estadoobjeto.component.css']
})
export class EstadoobjetoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
