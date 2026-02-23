#  Nimble Gravity - Challenge React
Aplicación desarrollada en React que permite a un candidato visualizar posiciones abiertas y postularse enviando la URL de su repositorio de GitHub mediante la API provista.

---

## Requisitos
Node.js 18+

## Instalación y ejecución

### Clonar el repositorio e instalar dependencias

```bash
npm install
```

### Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_BASE_URL=URL
VITE_CANDIDATE_EMAIL=EMAIL
```

### Ejecutar la aplicación

```bash
npm run dev
```

La aplicación se ejecuta en:

```
http://localhost:5173
```

---

## Flujo de la aplicación

### Paso 1 — Obtener datos del candidato

Se realiza la siguiente llamada:

```
GET /api/candidate/get-by-email?email=TU_EMAIL
```

La respuesta incluye:

- uuid
- candidateId
- applicationId
- firstName
- lastName
- email

Estos datos se almacenan en estado y se utilizan para enviar la postulación.

---

### Paso 2 — Obtener lista de posiciones

Se realiza:

```
GET /api/jobs/get-list
```

Devuelve un listado de posiciones disponibles.

---

### Paso 3 — Mostrar posiciones

Se renderiza un listado dinámico donde cada posición incluye:

- Título del puesto
- Input para ingresar la URL del repositorio
- Botón "Submit" para enviar la postulación

---

### Paso 4 — Enviar postulación

Al presionar el botón, se ejecuta:

```
POST /api/candidate/apply-to-job
```

Body enviado:

```json
{
  "uuid": "uuid del candidato",
  "jobId": "id de la posición",
  "candidateId": "candidateId del candidato",
  "repoUrl": "https://github.com/tu-usuario/tu-repo"
}
```

Respuesta exitosa:

```json
{
  "ok": true
}
```

---

## ⚙️ Funcionalidades implementadas

- Obtención de datos del candidato
- Obtención de posiciones desde la API
- Renderizado dinámico de lista
- Manejo de estados de carga
- Separación de componentes

---

## 📁 Estructura del proyecto

```
src/
 ├── components/
 │    ├── JobList.jsx
 │    ├── JobItem.jsx
 ├── services/
 │    ├── api.js
 ├── App.jsx
 ├── main.jsx
```

---


## 📌 Criterios considerados

- Código limpio y legible.
- Separación clara de responsabilidades.
- Manejo adecuado de estados y errores.
- Integración correcta con la API.
- Interfaz simple, funcional y prolija.

---

Este repositorio fue desarrollado como parte del challenge técnico de Nimble Gravity.
