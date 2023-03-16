import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { AutomovilService } from 'src/automovil/service/automovil.service';
import { ClienteService } from 'src/cliente/service/cliente.service';
import { v4 as uuid } from 'uuid';
import { CreateVendedorDto } from '../dto/create-vendedor.dto';
import { UpdateVendedorDto } from '../dto/update-vendedor.dto';
import { Vendedor } from '../entities/vendedor.entity';


@Injectable()
export class VendedorService {
  constructor(
    
  @Inject(forwardRef(() => AutomovilService))
    private autoService :AutomovilService,
  @Inject(forwardRef(() => ClienteService))
    private clienteService :ClienteService ) {}
    
  
  vendedores: Vendedor[] = [];

  create(CreateVendedorDto: CreateVendedorDto) {
    const vendedor: Vendedor = {
      id: uuid(),
      nombre : CreateVendedorDto.nombre,
      autos: null,
    };
    this.vendedores.push(vendedor);
    return vendedor;
  }
  
  findAll(): Vendedor[] {
    return this.vendedores
  }

  findById(id: string) : Vendedor {
    return this.vendedores.find(vendedor => vendedor.id === id);
  }

  update(id: string, nombre: UpdateVendedorDto) {
    const vendedor = this.findById(id);
    if (vendedor) {
      vendedor.nombre = nombre.nombre;
      return vendedor;
    }
    return null;
  }

  remove(id: string) {
    const vendedorIndex = this.vendedores.findIndex(vendedor => vendedor.id === id);
    if (vendedorIndex >= 0) {
      const vendedorBorrado = this.vendedores.splice(vendedorIndex, 1)[0];
      return vendedorBorrado;
    }
    return null;
  }
  
  findSellerByName(nombre: string): Vendedor {
    return this.vendedores.find(vendedor => vendedor.nombre === nombre);
  }
}


