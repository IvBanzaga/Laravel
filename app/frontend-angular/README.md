
# 🚀 FrontendAngular

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 20.2.2.

## 🖥️ Servidor de desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Luego abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

## 🛠️ Generación de código (Scaffolding)

Para generar un nuevo componente:

```bash
ng generate component nombre-del-componente
```

Ejemplo para crear el componente de edición de posts sin archivos de test:

```bash
ng generate component post/edit --skip-tests
```

Para ver todos los esquemas disponibles (`components`, `directives`, `pipes`, etc.):

```bash
ng generate --help
```

## ⚙️ Compilación del proyecto

Para compilar el proyecto:

```bash
ng build
```

Los archivos compilados se guardan en el directorio `dist/`. La compilación en modo producción optimiza la aplicación para mayor rendimiento.

## 🧪 Ejecutar tests unitarios

Para ejecutar los tests unitarios con [Karma](https://karma-runner.github.io):

```bash
ng test
```

## 🕵️‍♂️ Ejecutar tests end-to-end (e2e)

Para pruebas end-to-end:

```bash
ng e2e
```

Angular CLI no incluye framework e2e por defecto, puedes elegir el que prefieras.

## 📜 Comandos utilizados en el proyecto

- `ng serve` — Inicia el servidor de desarrollo
- `ng build` — Compila la aplicación
- `ng test` — Ejecuta los tests unitarios
- `ng e2e` — Ejecuta los tests end-to-end
- `ng generate component post/edit --skip-tests` — Genera el componente de edición de posts sin archivos de test
- `php artisan migrate` — Ejecuta las migraciones de la base de datos (Laravel)
- `type nul > database\database.sqlite` — Crea el archivo de base de datos SQLite en Windows
- `composer dump-autoload` — Actualiza el autoload de Composer

## 📚 Recursos adicionales

Para más información sobre Angular CLI y sus comandos, visita la [documentación oficial](https://angular.dev/tools/cli).
