# Proyecto ASP.NET Core con React

## Descripción
Este proyecto utiliza **ASP.NET Core 8.0** en el backend y **React 18** en el frontend. Proporciona una base para construir una aplicación web moderna utilizando SQLite como base de datos y OpenAPI para documentación de la API.

---

## 🛠️ Tecnologías Utilizadas

### Backend:
- **Framework:** .NET 8.0
- **Base de datos:** SQLite
- **Bibliotecas principales:**
  - 📘 `Microsoft.AspNetCore.OpenApi` (v8.0.5): Generación y soporte de documentación OpenAPI.
  - 📘 `Microsoft.EntityFrameworkCore.Design` (v9.0.0): Herramientas de diseño para Entity Framework Core.
  - 📘 `Microsoft.EntityFrameworkCore.Sqlite` (v9.0.0): Proveedor de Entity Framework Core para SQLite.
  - 📘 `Swashbuckle.AspNetCore` (v6.4.0): Herramienta para generar documentación Swagger/OpenAPI.

### Frontend:
- **Framework:** React (v18.2.0)
- **Administración de paquetes:** NPM

---

## 🗂️ Estructura del Proyecto

### Backend
- **📂 Carpeta `Controllers`:** Contiene los controladores para manejar las solicitudes HTTP.
- **📂 Carpeta `Models`:** Define las entidades utilizadas en la aplicación.
- **📂 Carpeta `Data`:** Configuración de la base de datos y contexto de EF Core.

### Frontend
- **📂 Carpeta `src`:** Contiene los componentes y la configuración principal de la aplicación React.
  - 📄 `App.tsx`: Punto de entrada principal de React.
  - 📄 `reportWebVitals.ts`: Archivo para monitorear el rendimiento de la aplicación.

---

## ⚙️ Requisitos Previos
1. **SDK .NET 8.0**
   - Descarga desde: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
2. **Node.js (v18 o superior)**
   - Descarga desde: [https://nodejs.org](https://nodejs.org)
3. **SQLite** (opcional, se incluye integrado en el proyecto).

---

## 🚀 Instalación y Ejecución

### Backend:
1. Clona el repositorio.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <CARPETA_DEL_PROYECTO>/backend
