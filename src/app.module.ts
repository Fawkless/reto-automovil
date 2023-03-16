import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { AutomovilModule } from './automovil/automovil.module';

@Module({
  imports: [ClienteModule, VendedorModule, AutomovilModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
