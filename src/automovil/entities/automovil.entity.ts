
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { v4 as uuidv4 } from 'uuid';

export class Automovil{
    id = uuidv4();
    marca: string;
    modelo: string;
    año: number;
    vendedor: Vendedor  ;
    cliente: Cliente;
}
