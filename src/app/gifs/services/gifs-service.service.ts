import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {ISearchGifsResponse, Gif} from "../interfaces/gifs.interface";

@Injectable()

export class GifsService {

  private _apiKey:string =  "vQL9IATDEUNPgSNsTbTii4sNF8R5Taii";
  private _historial: string[] = [];
  public resultadosBusqueda: Gif[] = [];

  get historial():string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    
    //lo que está dentro del constructor se ejecuta automáticamente como si fuera un useEffect,
    //en este caso para leer el local storage
    const historialFromLocalStorage: string = localStorage.getItem("historial de busqueda") || "";
    if(historialFromLocalStorage.trim() !== "" ) this._historial = JSON.parse(historialFromLocalStorage);

  }

  buscarGift(searchText: string):void{
    
    //haciendo llamado a la api para obtener los gifs con el paquete http de angular
    this.http.get<ISearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${searchText}&limit=10`)
      .subscribe( response => {
        this.resultadosBusqueda = response.data;
      })

    //agregando ultima busqueda al historial
    this._historial = [searchText, ...this._historial];
    if (this._historial.length >= 11) this._historial = this._historial.splice(1,10);
    localStorage.setItem("historial de busqueda", JSON.stringify(this._historial));
  }

}
