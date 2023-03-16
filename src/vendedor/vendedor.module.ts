import { forwardRef, Module } from '@nestjs/common';
import { AutomovilModule } from 'src/automovil/automovil.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { VendedorController } from './controller/vendedor.controller';
import { VendedorService } from './services/vendedor.service';

@Module({
  controllers: [VendedorController],
  providers: [VendedorService],
  imports: [ forwardRef(() =>AutomovilModule), forwardRef(() => ClienteModule)],
  exports: [VendedorService]
})
export class VendedorModule {}
