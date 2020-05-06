export class Metodo {
    constructor(
        public metodoNombre: string,
        public metodoVersion: string,

        public descripcion: string,
        public id_tfs: string,
        public transaccional: Boolean,

        public patch_wsdl: string,
        public archivo_wsdl: string,
        public patch_xsd: string,
        public archivo_xsd: string,
        public examples: string[],
        public request_xml: string,
        public responseOk_xml: string,
        public responseErr_xml: string,
        public archivo_esquema: string,
        public archivo_patron: string
    ) { }
}
