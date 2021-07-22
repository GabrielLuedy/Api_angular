import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { Md5 } from 'ts-md5';
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

listarAAlunos() : Observable<any>{
 return this.http.get ("http://localhost:3000/alunos");
}


 apikey = "6bbad796eed60f89f7fc98e6039f22a1"
 privat = "536356b62186a1b045b8a8f11ff7aa1c5cd24e58"
 ts = Math.floor(Date.now() / 1000);
 hash = Md5.hashStr(this.ts + this.privat + this.apikey)

//public 6bbad796eed60f89f7fc98e6039f22a1  == apikey
//privat 536356b62186a1b045b8a8f11ff7aa1c5cd24e58
//ts = hora
//md5 = md5 (ts + privateKey + publicKey)

listarAlunos() {



    let resultado =  this.http.get(`http://gateway.marvel.com/v1/public/comics?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`)
return resultado
    
}


}

