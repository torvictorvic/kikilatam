# Gestión de Envíos - Microservicios

Este proyecto es una API desarrollada con NestJS para gestionar envíos, calcular tarifas y manejar la distancia entre ubicaciones. La API está organizada en microservicios y está diseñada para funcionar con una base de datos PostgreSQL y una API externa (Google Distance Matrix API) para calcular la distancia entre coordenadas.

---

## Contenidos
- [Descripción General](#descripción-general)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Microservicios](#microservicios)
  - [1. Servicio de Creación de Envíos (POST /envios)](#1-servicio-de-creación-de-envíos-post-envios)
  - [2. Servicio de Consulta de Envíos (GET /envios)](#2-servicio-de-consulta-de-envíos-get-envios)
- [Dockerización](#dockerización)
- [Pruebas](#pruebas)
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)
- [Contribuciones](#contribuciones)

---

## Descripción General

La API de Gestión de Envíos permite a los usuarios:
- Crear nuevos envíos, calculando la tarifa con base en la distancia.
- Consultar todos los envíos registrados.
- Integrar una API de Google para calcular la distancia entre dos ubicaciones.

Este sistema está diseñado para ser extensible y permitir la inclusión de nuevos servicios.

---

## Requisitos

- **Node.js 20.15.1**
- **PostgreSQL** como base de datos
- **NestJS CLI** para  desarrollo de microservicios
- Cuenta de **Google Cloud** con la API Distance Matrix habilitada. NOTA: Falta incorporar un GOOGLE_MAPS_API_KEY valido para culminar dicho feature. 

---

## Instalación

0. **Clona este repositorio**:
   ```bash
   > git clone <URL_DEL_REPOSITORIO>
   > cd gestion-envios

1. **Instala las dependencias**:
   > npm install

2. **Base de datos**:
   Correr archivo postgres-table-create.sql y configurar base de datos en src/config/database.config.ts ó docker-compose.yml , dependiendo como s quiera usar ( docker / npm )

3. **Ejecución**
   Se puede consultar el package.json para iniciar algún script como por ejemplo "npm run start:dev" para iniciar en desarrollo , o por el contrario iniciar con docker.

4. **Iniciar con Docker : Construye la imagen de Docker**
   > docker build -t gestion-envios .

5. **Iniciar con Docker : Ejecuta el contenedor**
   > docker run -p 3000:3000 gestion-envios

6. **Docker Compose : opcional**
   Puedes usar docker-compose para levantar tanto la API como la base de datos PostgreSQL.