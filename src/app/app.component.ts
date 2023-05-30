import { Component, OnInit  } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'libreria';

  constructor(
    private appService : AppService,
  ) {}

  libros = [];
  ngOnInit(){  
    this.ObtenerLiobros();
  }

  ObtenerLiobros(){
    this.appService.consultar().subscribe( respuesta =>{
      respuesta = this.libros;
      console.log(this.libros);
    })
  }
}
