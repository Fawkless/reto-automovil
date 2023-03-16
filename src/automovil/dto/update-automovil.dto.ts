import { Cliente } from "src/cliente/entities/cliente.entity";
import { Vendedor } from "src/vendedor/entities/vendedor.entity";

export class UpdateAutomovilDto {
    id : string;
    marca: string;
    modelo: string;
    año: number;
    vendedor: Vendedor;
    cliente: Cliente;
}
