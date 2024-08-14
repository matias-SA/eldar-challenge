## Acerca del proyecto

Este proyecto esta creado para la demostracion de mis aptitudes y skills como desarrollador. Esto lo desarrollo atraves de un challange que consiste en unpagina que enumera distintas exhibiciones. Se ingresa con login y despues tenemos una home en la cual podes editar y crear distintos tipos de exhibiciones. Hay disttintos roles para los usurios. Admin y user.

### Desarrollado con

* [![Angular][Angular.io]][Angular-url]

## Empecemos

### Intalacion

1. Clonar repositorio
   ```sh
   git clone https://github.com/matias-SA/eldar-challenge.git
   ```
2. Cambiar rama master
   ```sh
   git checkout master
   ```
3. Traerse los cambios 
   ```sh
   git fetch
   git pull
   ```
4. Instalar paquetes NPM
   ```sh
   npm install
   ```
5. Iniciar proyecto
   ```sh
   ng serve
   ```

### Credenciales

Acontinuacion dejo algunas credenciales para que puedan iniciar sesion en la app.

```sh
user: "Soto" password: "123456"
user: "Matias" password: "123456",
```

### Estructura de carpetas

[![Carpetas estructura][carpetas-screenshot]]

Elegi esta estructura de carpetas para tener de una forma mas limpia las funcionalidades de cada carpeta

### Core

Esta sección alberga los elementos fundamentales y centrales de la aplicación. Contiene los
modelos de dominio, servicios y utilidades comunes utilizados en toda la aplicación.
Proporcionando una base sólida y coherente para la lógica de negocio y la manipulación de
datos.
Su principal beneficio es que al tener una sección central bien definida, se mejora la
cohesión y el mantenimiento de la lógica de negocio.

### Shared

Esta sección contiene componentes, directivas y servicios compartidos entre diferentes
módulos de la aplicación. El objetivo principal de esta sección es promover la reutilización
de código y la consistencia visual en toda la aplicación. Aquí se encuentran elementos que
pueden ser compartidos entre diferentes módulos funcionales, como componentes UI
personalizados (Botones, Inputs).
El beneficio de tener una sección compartida, es que se evita la duplicación de código y se
fomenta la coherencia en la apariencia y comportamiento de la interfaz de usuario.

### Modulos

Esta sección contiene los diferentes módulos funcionales de la aplicación, cada uno con su
propia estructura interna. Cuyo propósito es organizar y encapsular la funcionalidad
específica de cada módulo. Cada módulo puede contener sus propios componentes,
servicios, archivos de enrutamiento y definiciones de módulo.
Al dividir la aplicación en módulos, se mejora la modularidad y la claridad del código. 

[Angular-url]: https://angular.io/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[carpetas-screenshot]: /src/assets/carpetas_estructura.png
