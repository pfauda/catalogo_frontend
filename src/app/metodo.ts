export class Metodo {
    constructor(
        public metodoNombre: string,
        public metodoVersion: string,

        public descripcion: string,
        public id_tfs: string,
        public transaccional: Boolean,

        public archivo_patron: string,
        public archivo_esquema: string,
        public archivo_wsdl: string,
        public archivo_xsd: string,
        public examples: string[]
    ) { }
}
