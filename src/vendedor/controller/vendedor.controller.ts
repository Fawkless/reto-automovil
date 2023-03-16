import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVendedorDto } from '../dto/create-vendedor.dto';
import { UpdateVendedorDto } from '../dto/update-vendedor.dto';
import { VendedorService } from '../services/vendedor.service';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }

  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedorService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendedorDto: UpdateVendedorDto) {
    return this.vendedorService.update(id, updateVendedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendedorService.remove(id);
  }
}