import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'


@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  urlObject: any;
  constructor(configService: ConfigService) {


    let urlString = 'http://' + configService.HOST + ':' + configService.PORT+'/';
      


    this.urlObject = {
      'login': {
        'method': 'POST',
        'url': urlString + 'oauth/token'
      },
      'logout': {
        'method': 'POST',
        'url': urlString + 'user/logout'
      },
      'changestatus': {
        'method': 'PUT',
        'url': urlString + 'user/login-status'
      },
      'getstatus': {
        'method': 'GET',
        'url': urlString + 'user/login-status'
      }
    }
  }
}

