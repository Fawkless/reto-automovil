
import { Automovil } from 'src/automovil/entities/automovil.entity';
import { v4 as uuidv4 } from 'uuid';

export class Vendedor {
    id = uuidv4();
    nombre: string;
    autos?: Automovil;

}



