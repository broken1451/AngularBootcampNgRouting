import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ContactRandom, Results } from '../models/random.user.interface';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private httpClient: HttpClient) { }


  getRandomUser(): Observable<Results> {
    return this.httpClient.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // nro de repeticiones 
      catchError(this.handleError) // si algo falla
    );
  }

  getRandomContact(nro: number, sex?: string): Observable<Results> {
    let options!: HttpParams;
    if (sex) {
      console.log('sexo service ', sex)
      options = new HttpParams().set('results', nro).set('gender', sex);
    } else {
      options = new HttpParams().set('results', nro);
    }
    return this.httpClient.get<Results>('https://randomuser.me/api', { params: options }).pipe(
      retry(2), // nro de repeticiones 
      catchError(this.handleError) // si algo falla
    );
  }

  getRandomContactByGender(sex: string): Observable<Results> {
    const options: HttpParams = new HttpParams().set('gender', sex);
    return this.httpClient.get<Results>('https://randomuser.me/api', { params: options }).pipe(
      retry(2), // nro de repeticiones 
      catchError(this.handleError) // si algo falla
    );
  }

  handleError(e: HttpErrorResponse) {
    console.log({ e })
    if (e.status === 0) {
      console.error('ha ocurrido un error ', e)
    } else {
      console.log('Error en el back ', e.error)
    }
    return throwError('Algo ha salido mal')
  }

}
