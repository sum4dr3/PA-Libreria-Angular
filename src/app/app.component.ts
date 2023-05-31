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

  libros :any[] = [];
  data = {
    nombreLibro : ''
  };

  libro = {
    nombre:'',
    apellido:'',
    edad:0,
    nombreLibro:'',
    descripcion:'',
    precio:0
}
  ngOnInit(){  
    this.ObtenerLiobros();
  }


  ObtenerLiobros(){
    this.appService.consultar().subscribe( respuesta =>{      
      this.libros = respuesta;
      console.log(this.libros);
    })
  }

  GuardarLibro(){
    this.appService.insertarlibro(this.libro).subscribe( response =>{

    });
  }
  ObtenerLibroPor(){
    this.libros = [];
    
    this.appService.consultarLibro(this.data).subscribe(respuesta =>{

      if(respuesta == ''){
        this.ObtenerLiobros();
      }else{
        this.libros = respuesta;
      }
      
    })
  }
}
