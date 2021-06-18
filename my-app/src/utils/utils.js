const roles = {
    'admin': {
        'views': [
            {
                'path': '/adminhome',
                'label': 'Inicio',
                'icon': 'home',
            },
            {
                'path': '/adminhistorial',
                'label': 'Historial',
                'icon': 'home',
            },
            {
                'path': '/adminservicios',
                'label': 'Servicios',
                'icon': 'home',
            },
            {
                'path': '/admintransacciones',
                'label': 'Transacciones',
                'icon': 'home',
            },
            {
                'path': '/Adminusuarios',
                'label': 'Usuarios',
                'icon': 'home',
            },
        ],
        order: 1
    },

    'employee': {
        'views': [
            {
                'path': '/empleadoorden',
                'label': 'Orden de pedido',
                'icon': 'home',
            },
            {
                'path': '/empleadomisordenes',
                'label': 'Mis Ordenes',
                'icon': 'home',
            },
            {
                'path': '/empleadohistorial',
                'label': 'Historial',
                'icon': 'home',
            },
            {
                'path': '/empleadorecursos',
                'label': 'Recursos',
                'icon': 'home',
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
                    'icon': 'home',
                },
                {
                    'path': '/clientehistorial',
                    'label': 'Inicio',
                    'icon': 'home',
                },
                {
                    'path': '/clientemisservicios',
                    'label': 'Inicio',
                    'icon': 'home',
                },
                {
                    'path': '/clienteprofile',
                    'label': 'Mi Perfil',
                    'icon': 'home',
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