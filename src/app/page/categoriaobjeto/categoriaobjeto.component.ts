import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoriaobjeto',
  templateUrl: './categoriaobjeto.component.html',
  styleUrls: ['./categoriaobjeto.component.css']
})
export class CategoriaobjetoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
