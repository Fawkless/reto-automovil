import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateAutomovilDto } from '../dto/create-automovil.dto';
import { UpdateAutomovilDto } from '../dto/update-automovil.dto';
import { Automovil } from '../entities/automovil.entity';
import { v4 as uuid } from 'uuid';
import { ClienteService } from 'src/cliente/service/cliente.service';
import { VendedorService } from 'src/vendedor/services/vendedor.service';
import { VentaAutoDto } from '../dto/ventaAuto.dto';



@Injectable()
export class AutomovilService {
  constructor( 
    @Inject(forwardRef(() => ClienteService))
    private clienteService :ClienteService,
    @Inject(forwardRef(() => VendedorService))
    private vendedorService : VendedorService
    ) {}

  automoviles: Automovil[] = [];
 
  create(CreateAutomovilDto: CreateAutomovilDto) {
    const automovil: Automovil = {
    id : uuid(),
    marca: CreateAutomovilDto.marca,
    modelo: CreateAutomovilDto.modelo,
    año: CreateAutomovilDto.año,
    vendedor: null,
    cliente: null,
    };
    this.automoviles.push(automovil);
    return automovil;
  }
  
  findAll(): Automovil[] {
    return this.automoviles
  }

  findCarById(id: string) : Automovil {
    return this.automoviles.find(automoviles => automoviles.id === id);
  }

  update(id: string, update: UpdateAutomovilDto) : Automovil {
    const automovil = this.findCarById(id);
    const automovilIndex = this.automoviles.findIndex(automovil => automovil.id === id);
    if (automovil) {
      const updateAutomovil = { ...automovil, ...update };
      this.automoviles.splice(automovilIndex, 1, updateAutomovil)
      return updateAutomovil;
    }
    return null;
  }

  remove(id: string) {
    const automovilIndex = this.automoviles.findIndex(automovil => automovil.id === id);
    if (automovilIndex >= 0) {
      const automovilBorrado = this.automoviles.splice(automovilIndex, 1)[0];
      return automovilBorrado;
    }
    return null;
  }

  sellCar(id: string, updateAutomovilDto: VentaAutoDto){
    let auto =  this.findCarById(id);
    const cliente = this.clienteService.findClientByName(updateAutomovilDto.cliente);
    const vendedor = this.vendedorService.findSellerByName(updateAutomovilDto.vendedor)
     auto.cliente= cliente;
     auto.vendedor=vendedor;
    return auto;

  }

  
  
    }
  

