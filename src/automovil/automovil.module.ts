import { forwardRef, Module } from '@nestjs/common';
import { ClienteModule } from 'src/cliente/cliente.module';
import { VendedorModule } from 'src/vendedor/vendedor.module';
import { AutomovilController } from './controller/automovil.controller';
import { AutomovilService } from './service/automovil.service';


@Module({
  controllers: [AutomovilController],
  providers: [AutomovilService],
  exports: [AutomovilService],
  imports: [forwardRef(() =>ClienteModule), forwardRef(() =>VendedorModule)]
})
export class AutomovilModule {}
