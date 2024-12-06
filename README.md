

```markdown
# Documentación del Proyecto

## Descripción
Este proyecto es una aplicación básica en Angular 17 que consta de dos pantallas principales:
1. **Pantalla de Login:** Un formulario que valida el email y la contraseña de forma reactiva.
2. **Pantalla de Éxito:** Una pantalla que muestra un mensaje de bienvenida junto con una animación GIF divertida.

## Tecnologías Utilizadas
- **Framework:** Angular 17 (Standalone Components).
- **Preprocesador de Estilos:** CSS con variables globales para mantener consistencia.
- **Navegación:** Angular Router para gestionar las rutas.
- **Validación de Formularios:** Reactive Forms para validar email y contraseña.
- **Animaciones:** CSS para efectos visuales en el proyecto.

---

## Instrucciones para Probar el Proyecto

### 1. **Clonar el Proyecto**
Clona el repositorio en tu máquina local utilizando el siguiente comando:
```bash
git clone <https://github.com/menchumenx/verify-angular17-form.git>
```

### 2. **Instalar Dependencias**
Accede al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 3. **Ejecutar el Proyecto**
Inicia el servidor de desarrollo con el siguiente comando:
```bash
ng serve
```
Esto abrirá la aplicación en tu navegador en la dirección `http://localhost:4200`.

---

## Estructura del Proyecto
```plaintext
src/
├── app/
│   ├── components/
│   │   ├── login/        # Componentes relacionados con el Login
│   │   ├── success/      # Componentes relacionados con la Pantalla de Éxito
│   ├── app.routes.ts     # Configuración de rutas
│   ├── app.config.ts     # Configuración del módulo principal
├── assets/               # Recursos como imágenes y GIFs
├── styles.css            # Estilos globales
├── main.ts               # Punto de entrada de la aplicación
```

---

## Funcionalidades

### 1. **Pantalla de Login**
- **Email:**
  - Es obligatorio y debe ser un email válido.
  - Si es inválido, se muestra un mensaje de error reactivo.
- **Contraseña:**
  - Es obligatoria y debe cumplir los siguientes requisitos:
    - Mínimo 6 caracteres.
    - Al menos 1 mayúscula.
    - Al menos 1 carácter especial.
  - Los errores se muestran dinámicamente según los requisitos que no se cumplan.

- **Botón Login:**
  - Habilitado solo si el formulario es válido.
  - Redirige a la Pantalla de Éxito al hacer clic.

### 2. **Pantalla de Éxito**
- Muestra un mensaje de bienvenida.
- Incluye un GIF divertido almacenado localmente en la carpeta `assets`.
- Botón "Go Back" para regresar al Login.

---

## Validación y Testeo
### Validaciones Implementadas
- **Email:** Validación estándar para formato de email.
- **Contraseña:**
  - Validador personalizado para comprobar complejidad.
  - Errores visibles solo cuando el usuario interactúa con el campo.

### Pasos para Verificar
1. Ingresa un email inválido y observa el mensaje de error.
2. Ingresa una contraseña que no cumpla con los requisitos y verifica los mensajes.
3. Corrige los errores y envía el formulario.
4. Verifica que eres redirigido a la pantalla de éxito.

---

## Configuración de Rutas
- **`/`**: Ruta de Login.
- **`/success`**: Pantalla de Éxito.

---

## Mejoras Futuras
1. **Integración con Backend:**
   - Enviar los datos del formulario a un servidor para validaciones reales.
2. **Test Unitarios:**
   - Implementar pruebas unitarias con `Karma` y `Jasmine` para validar los formularios y la navegación.
3. **Soporte Multilingüe:**
   - Agregar soporte para varios idiomas usando Angular i18n.

---

Si tienes preguntas o sugerencias, no dudes en contactarme. 😊
```
