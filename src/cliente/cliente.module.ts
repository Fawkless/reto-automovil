import { Module } from '@nestjs/common';
import { AutomovilModule } from 'src/automovil/automovil.module';
import { VendedorModule } from 'src/vendedor/vendedor.module';
import { ClienteController } from './controller/cliente.controller';
import { ClienteService } from './service/cliente.service';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [AutomovilModule, VendedorModule],
  exports: [ClienteService]
})
export class ClienteModule {}
