import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produto: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produto;
  }

  getOne(produtoId: number){
    return this.produto.find(produto => produto.id === produtoId);
  }
}
