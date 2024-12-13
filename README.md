# CommandSearch Component

Este proyecto es una exportación reproducible de un componente llamado `CommandSearch` extraído de un blog. Aquí se incluye el mínimo necesario para que funcione correctamente. Este proyecto utiliza las siguientes tecnologías:

- **TanStack**: Para la gestión avanzada de datos en tablas y listas.
- **Sanity**: Como CMS para manejar el contenido.
- **Next.js**: Framework para aplicaciones web en React.

## Requisitos previos

Antes de correr y probar este proyecto, debes configurar variables de entorno con los siguientes nombres:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<tu_project_id>
NEXT_PUBLIC_SANITY_DATASET=<tu_dataset>
```

### Configuración de Sanity

1. Si tienes una cuenta en [Sanity](https://www.sanity.io/), utiliza tu propia cuenta.
2. Crea un proyecto vacío en Sanity.
3. Copia el `project_id` y el `dataset` de tu proyecto y agrégalos a las variables de entorno mencionadas anteriormente.

## Uso del componente

1. **Inicia el proyecto**: Corre el proyecto en tu entorno local.

   ```bash
   npm install
   npm run dev
   ```

2. **Accede al Studio**: Navega a la ruta `/studio` para ingresar al entorno de Sanity.
3. **Crea un post de prueba**: Desde el Studio, agrega un post para pruebas.
4. **Prueba el componente CommandSearch**: Navega a la ruta principal (`/`) donde se encuentra el componente `CommandSearch`.

El componente te permitirá buscar los datos de los posts creados desde el Studio.

## Estructura del proyecto

- **`components/Search`**: Contiene la implementación principal del componente de búsqueda.
- **`pages/studio`**: Acceso al entorno de Sanity.
- **`pages/index.js`**: Punto de entrada donde se incluye el componente `CommandSearch`.

## Tecnologías utilizadas

- **TanStack**: [Documentación](https://tanstack.com/query/latest/docs/framework/react/overview)
- **Sanity**: [Documentación](https://www.sanity.io/docs)
- **Next.js**: [Documentación](https://nextjs.org/docs)

