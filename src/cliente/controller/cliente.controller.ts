import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { Cliente } from '../entities/cliente.entity';
import { ClienteService } from '../service/cliente.service';



@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

@Post()
create(@Body() createClienteDto: CreateClienteDto) {
  return this.clienteService.create(createClienteDto);
}

@Get()
  findAll():Cliente[] {
    return this.clienteService.findAll();
  }

   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.clienteService.findClientById(id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
     return this.clienteService.update(id, updateClienteDto);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.clienteService.remove(id);
   }
}
 
  

