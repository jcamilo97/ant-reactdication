//import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
  },
  {
    name: 'Auditoria',
    icon: 'form',
    path: 'auditoria',
  },
  {
    name: 'Visualizar E-dok',
    icon: 'table',
    path: 'visialiar_edok',
  },
  {
    name: 'Crear E-dok',
    icon: 'profile',
    path: 'crear_edok',
  },
  {
    name: 'correspondencia',
    icon: 'check-circle-o',
    path: 'correspondencia',
    children: [
      {
        name: 'Radicar recibida',
        path: 'recibida',
      },
    ],
  },
  {
    name: 'Configuracion',
    icon: 'warning',
    path: 'configuracion',
    children: [
      {
        name: 'Roles',
        path: 'roles',
      },
      {
        name: 'Usuarios',
        path: 'usuarios',
      },
      {
        name: 'Sedes',
        path: 'sedes',
      },
      {
        name: 'Emisores Externos',
        path: 'emisores',
        hideInMenu: false,
      },
      {
        name: 'Cargar Emisores',
        path: 'cargar_emisores',
        hideInMenu: false,
      },
    ],
  },
  {
    name: 'Estructuras',
    icon: 'user',
    path: 'estructuras',
    children: [
      {
        name: 'Empresarial',
        path: 'empresarial',
      },
      {
        name: 'Lineas de Mando',
        path: 'mandos',
      },
    ],
  },
  {
    name:'Permisos',
    icon:'key',
    path:'permisos',
  },
  {
    name:'Parametrizacion',
    icon:'user',
    path:'parametrizacion',
    children:[
        {
            name:'E-dok',
            path:'e_dok',
        },
        {
            name:'Tipos Documentales',
            path:'tipos_doc',
        },
        {
            name:'Indices Documentales',
            path:'indices_doc',
        },
    ],  
  },
];
//changed add import clausule.
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

function isUrl(path) {
  return reg.test(path);
}

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
