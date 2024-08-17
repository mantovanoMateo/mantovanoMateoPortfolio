import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private proyects = [
    {
      title: 'LiftCompanion',
      description: 'LiftCompanion is an innovative application designed for fitness enthusiasts and athletes of all levels looking to improve their performance at the gym. \n '+
      'This comprehensive tool allows users to log their workout results, upload and customize their routines, and monitor their progress in various exercises. \n'+
      'With an intuitive and user-friendly interface',
      stack: ['ReactJs','NodeJs','MongoDB','JWT','Zod','Express'],
      img: '../assets/Group 40.png',
      backendRepo: 'https://github.com/mantovanoMateo/LiftCompanion-Backend',
      frontEndRepo: 'https://github.com/mantovanoMateo/Liftcompanion-Frontend',
      preview:'',
      type: 'fullstack',
    },
    {
      title: 'LiftCompanion',
      description: 'LiftCompanion is an innovative application designed for fitness enthusiasts and athletes of all levels looking to improve their performance at the gym. \n '+
      'This comprehensive tool allows users to log their workout results, upload and customize their routines, and monitor their progress in various exercises. \n'+
      'With an intuitive and user-friendly interface',
      stack: ['ReactJs','NodeJs','MongoDB','JWT','Zod','Express'],
      img: '../assets/Group 40.png',
      backendRepo: 'https://github.com/mantovanoMateo/LiftCompanion-Backend',
      frontEndRepo: 'https://github.com/mantovanoMateo/Liftcompanion-Frontend',
      preview:'',
      type: 'backend',
    },
    {
      title: 'LiftCompanion',
      description: 'LiftCompanion is an innovative application designed for fitness enthusiasts and athletes of all levels looking to improve their performance at the gym. \n '+
      'This comprehensive tool allows users to log their workout results, upload and customize their routines, and monitor their progress in various exercises. \n'+
      'With an intuitive and user-friendly interface',
      stack: ['ReactJs','NodeJs','MongoDB','JWT','Zod','Express'],
      img: '../assets/Group 40.png',
      backendRepo: 'https://github.com/mantovanoMateo/LiftCompanion-Backend',
      frontEndRepo: 'https://github.com/mantovanoMateo/Liftcompanion-Frontend',
      preview:'',
      type: 'frontend',
    }
  ]

  constructor() { }

  getAll(){
    return this.proyects;
  }

  getProyectsByType(type: string){
    return this.proyects.filter(proyect => {
      return proyect.type == type
    });
  }

}
