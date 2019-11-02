import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PedidoDTO } from "../../models/pedido.dto";


@Injectable()
export class PedidoService{

    constructor(public http: HttpClient){
    }
    
    insert(obj: PedidoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response',
                responseType: 'text' //@1
                //@1  - precisa de colocar essa linha pois qndo chama esse metodo post no meu back
                //retorna um corpo vazio e corpo vazio se eu nao colocar isso minha aplicacao vai tentar fazer o parse
                //e parse no vazio da erro
            }
        )
    }
}