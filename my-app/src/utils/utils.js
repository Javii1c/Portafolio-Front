const roles = {
    'admin': {
        'views': [
            {
                'path': '/adminhome',
                'label': 'Inicio',
                
            },
            {
                'path': '/adminhistorial',
                'label': 'Historial',
                
            },
            {
                'path': '/adminservicios',
                'label': 'Servicios',
                
            },
            {
                'path': '/admintransacciones',
                'label': 'Transacciones',
                
            },
            {
                'path': '/Adminusuarios',
                'label': 'Usuarios',
                
            },
        ],
        order: 1
    },

    'employee': {
        'views': [
            {
                'path': '/empleadoorden',
                'label': 'Orden de pedido',
                
            },
            {
                'path': '/empleadomisordenes',
                'label': 'Mis Ordenes',
                
            },
            {
                'path': '/empleadohistorial',
                'label': 'Historial',
                
            },
            {
                'path': '/empleadorecursos',
                'label': 'Recursos',
                
            },
        ],
        order: 2 
    },
    'proveedor': {
        'views': [
            {
                'path': '/proveedormispedidos',
                'label': 'Mis Pedidos',
                'icon': 'storageicon',
            },
            {
                'path': '/proveedorproductos',
                'label': 'Productos',
                'icon': 'storageicon',
            },
            {
                'path': '/proveedorhistorial',
                'label': 'Historial',
                'icon': 'storageicon',
            }
        ],
        order: 2 
    },
        'cliente': {
            'views': [
                {
                    'path': '/clientehome',
                    'label': 'Inicio',
                    
                },
                {
                    'path': '/clientehistorial',
                    'label': 'Inicio',
                    
                },
                {
                    'path': '/clientemisservicios',
                    'label': 'Inicio',
                    
                },
                {
                    'path': '/clienteprofile',
                    'label': 'Mi Perfil',
                    
                },
            ],
        order: 3
    },
    
     'default': {
        'views': [
            {
                'path': '/',
                'label': 'Log out',
                'icon': 'exit_to_app'
            }
        ]
    } 
}

export default roles