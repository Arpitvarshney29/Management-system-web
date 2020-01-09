import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  HOST: string;
  PORT: string;
  
  constructor() {

  // this.HOST = '192.168.1.207';
    this.HOST = 'localhost';
    //this.HOST = '192.168.1.163';
      // this.HOST = 'localhost';
    //  this.HOST = '192.168.1.210';
    this.PORT = '8080';
    // this.PORT = '8999';

    





 
  }
}
