import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { AutomovilService } from 'src/automovil/service/automovil.service';
import { VendedorService } from 'src/vendedor/services/vendedor.service';

@Injectable()
export class ClienteService {
    constructor(
      @Inject(forwardRef(() => AutomovilService))
      private automovilService: AutomovilService,
      @Inject(forwardRef(() => VendedorService))
      private vendedorService: VendedorService,
    ) {}

  clientes: Cliente[] = [];

  create(createClienteDto: CreateClienteDto) {
    const cliente: Cliente = {
      id: uuid(),
      nombre : createClienteDto.nombre,
      automovil: null,
    };
    this.clientes.push(cliente);
    return cliente;
  }

  findAll(): Cliente[] {
    return this.clientes
  }

 findClientById(id: string) : Cliente {
    return this.clientes.find(cliente => cliente.id === id);
  }

  update(id: string, nombre: UpdateClienteDto) {
    const cliente = this.findClientById(id);
    if (cliente) {
      cliente.nombre = nombre.nombre;
      return cliente;
    }
    return null;
  }

  remove(id: string) {
    const clienteIndex = this.clientes.findIndex(cliente => cliente.id === id);
    if (clienteIndex >= 0) {
      const clienteBorrado = this.clientes.splice(clienteIndex, 1)[0];
      return clienteBorrado;
    }
    return null;
  }

  findClientByName(nombre: string): Cliente {
    return this.clientes.find(cliente => cliente.nombre === nombre);
  }

}

