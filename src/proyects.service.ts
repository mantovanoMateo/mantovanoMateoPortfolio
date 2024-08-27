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
      title: 'SpringBoot Microservices App',
      description: 'This project is a microservices system developed with Spring Boot for managing schools and students. \n '+
      ' It utilizes Eureka for service discovery, MySQL as the database, and Zipkin for monitoring metrics.\n'+
      'It serves as a practical example of how to design scalable and distributed architectures, while maintaining flexibility in the development and deployment of independent services. \n',
      stack: ['Java','Springboot','MySql','Docker','Zipkin','Eureka','HTTP'],
      img: '../assets/diagram.png',
      backendRepo: 'https://github.com/mantovanoMateo/school-micro-services-spring-boot/tree/main',
      preview:'',
      type: 'backend',
    },
    {
      title: 'SpringBoot WebSockets Chat App',
      description: 'I developed a real-time chat application using Java Spring Boot and WebSockets to enable seamless, bidirectional communication between users \n '+
      ' This project implements a server architecture that efficiently handles concurrent connections, allowing users to send and receive messages instantly within a web interface \n',
      stack: ['Java','Springboot','Mongo Express','WebSockets'],
      img: '../assets/websocket.jpg',
      backendRepo: 'https://github.com/mantovanoMateo/java-springboot-web-sockets',
      preview:'',
      type: 'backend',
    },
    {
      title: 'NestJs CRUD',
      description: 'This project is a CRUD (Create, Read, Update, Delete) API developed using NestJS \n '+
      'The application leverages TypeORM for database management, providing efficient and structured access to a MySQL database. \n'+
      'The architecture of the project adheres to clean design principles and modularity, making the codebase easy to extend and maintain\n'+
      'The core functionalities include creating, reading, updating, and deleting records in the database, implemented with well-structured controllers and services that ensure optimal performance and proper error handling.',
      stack: ['NestJs','TypeOrm','MySql','SOLID'],
      img: '../assets/logoNest.png',
      backendRepo: 'https://github.com/mantovanoMateo/NestJs-MySql-TypeORM-',
      preview:'',
      type: 'backend',
    },
    {
      title: 'Website Racons',
      description: 'I developed a website for Racons, a construction company based in Mar del Plata. \n '+
      'This project was built using Angular to create a dynamic and responsive interface that reflects the company\'s identity and services. \n'+
      'The website provides detailed information about the construction projects, company values, and team, offering an optimized user experience across both mobile and desktop devices.',
      stack: ['Angular','Responsive Design','Bootstrap', 'EmailJs'],
      img: '../assets/captura racons.png',
      frontEndRepo: 'https://github.com/mantovanoMateo/Racons-Web',
      preview:'https://racons-web.vercel.app/home',
      type: 'frontend',
    },
    {
      title: 'Website Grinsid',
      description: 'I developed a website for Grinsid, an environmental consulting firm based in Italy. \n '+
      'This project was built using ReactJS to create a modern and user-friendly interface that effectively communicates the firm\'s expertise and services \n'+
      ' The website highlights Grinsid\'s commitment to sustainability and environmental responsibility, providing comprehensive information about their projects, consulting services, and team.' +
      'It is designed to offer a seamless experience across various devices, ensuring accessibility and ease of navigation for all users',
      stack: ['ReactJs','NodeJs','Responsive Design', 'EmailJs'],
      img: '../assets/capturaGrinsid.png',
      frontEndRepo: 'https://github.com/mantovanoMateo',
      preview:'https://grinsid.netlify.app/',
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
