import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    const url: string = 'https://reqres.in/api/login'
    const body = {
      email,
      password
    }
    // Devolvemos la respuesta del Observable cuando la peticio http se complete, el componente suscritp accedera al token de login
    return this.httpClient.post(url, body)
  }
}
