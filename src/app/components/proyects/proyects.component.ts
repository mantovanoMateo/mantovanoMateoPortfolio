import { Component } from '@angular/core';
import { ProyectsService } from 'src/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  
  public proyects: any = []
  
  constructor(private proyectsService: ProyectsService) { }

  ngOnInit(){
    this.proyects = this.proyectsService.getAll();
  }

  getByType(type: string){
    this.proyects = this.proyectsService.getProyectsByType(type)
  }

  getAll(){
    this.proyects = this.proyectsService.getAll();
  }
}
