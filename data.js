module.exports = function () {
    var data = {
        cuenta: [
        {
            id:1,
            nombreCuenta: "James",
            contrasenaCuenta: "12345",
            correoCuenta: "James@gmail.com",
            numeroCuenta: "997456767",
            direccionCuenta: "Prol. Ayacucho 1030, San Miguel 15087",
            distrito:{
                id:1,
                nombreDistrito:"San Isidro",
            }
        },
        ],
        distrito: [
        {
            id:1,
            nombreDistrito:"San Isidro", 
            ciudad:{
                id:1,
            nombreCiudad:"Lima",  
            }     
        },
        ],
        ciudad: [
        {
            id:1,
            nombreCiudad:"Lima",       
        },
        ],
        objeto: [
        {
            id:1,
            nombreObjeto: "Llave", 
            distancia: "5",
            distanciaLimite: "8",   
            ubicacion: "Prol. Ayacucho 1030, San Miguel 15087",
            fechaRegistrado: "12/09/2022",
            cuenta:{
                id:1,
                nombreCuenta:"James",
            },
            recordatorio:{
                id:1,
                estadoRecordatorio: "false",
            },
            categoriaobjeto:{
                id:1,
                nombreCategoriaObjeto:"Hogar",     
            },
            estadoobjeto:{
                id:1,
                nombreEstadoObjeto:"Vinculado",       
            }
        },
        ],
        estadoObjeto: [
        {
            id:1,
            nombreEstadoObjeto:"Vinculado",       
        },
        ],
        categoriaObjeto: [
        {
            id:1,
            nombreCategoriaObjeto:"Hogar",       
        },
        ],
        recordatorio: [
        {
            id:1,
            estadoRecordatorio: "false",
        },
        {
            id:2,
            estadoRecordatorio: "true",    
        },
        ],
        reporte: [
        {
            id:1,
            nombreReporte: "Perdida_Del_Bolso",
            descripcionReporte: "Es de color beige con una flor decorativo frontal",
            fechaReporte: "16/09/2022",
            objeto:{
                id:1,
                nombreObjeto: "Llave", 
                distancia: "5",
                distanciaLimite: "8",   
                ubicacion: "Prol. Ayacucho 1030, San Miguel 15087",
                fechaRegistrado: "12/09/2022",
            },
            estadoreporte:{
                id:1,
                nombreEstadoReporte: "Recuperado",
            },          
        },
        ],
        estadoReporte: [
            {
                id:1,
                nombreEstadoReporte: "Recuperado",         
            },
            ],
    }
        return data;
    }