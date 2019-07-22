import { Metodo } from "./metodo";

export class Servicio {
    constructor(
        public servicioNombre: string,
        public metodos: Array<Metodo>
        ) {}
}
