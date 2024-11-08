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
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)

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

## Configuración

1. **Base de datos**:
   Correr archivo postgres-table-create.sql y configurar base de datos en src/config/database.config.ts ó docker-compose.yml , dependiendo como quiera ser usado, con simplemente npm ó docker.


## Ejecución

1.- **NPM| Proyecto modo desarrollo**
   > npm run start:dev


2.- **Docker**
   > docker run -p 3000:3000 gestion-envios


NOTA: En ambas opciones, el proyecto correrá en http://localhost:3000


## Microservicios

## 1-servicio-de-creación-de-envíos-post-envios

Método: POST
URL: http://localhost:3000/envios
Body:

  ```bash
  {
    "destinatario": "Cartagena, ",
    "remitente": "Pasto, ",
    "contenido": "Forraje para ganado XX VV DD",
    "fecha_envio": "2024-11-08",
    "distancia": "9741451",
    "latitud_longitud_origen": "",
    "latitud_longitud_destino": ""
  }
  ```
  
Response:

  ```bash
  {
    "destinatario": "Cartagena, ",
    "remitente": "Pasto, ",
    "contenido": "Forraje para ganado XX VV DD",
    "fecha_envio": "2024-11-08",
    "distancia": "9741451",
    "tarifa": 97414610,
    "latitud_longitud_origen": "",
    "latitud_longitud_destino": "",
    "id_envio": 3
  }
  ```


## 2-servicio-de-consulta-de-envíos-get-envios

Método: GET
URL: http://localhost:3000/envios

Response:

  ```bash
  [
    {
      "id_envio": 1,
      "destinatario": "Cartagena, ",
      "remitente": "Zipaquira, ",
      "contenido": "Productos refrigerados xxx uu xx",
      "fecha_envio": "2024-11-07T00:00:00.000Z",
      "distancia": 1243,
      "tarifa": 12530,
      "latitud_longitud_origen": "",
      "latitud_longitud_destino": ""
    },
    {
      "id_envio": 2,
      "destinatario": "Cartagena, ",
      "remitente": "Cali, ",
      "contenido": "Flores XX VV DD",
      "fecha_envio": "2024-11-07T00:00:00.000Z",
      "distancia": 6745454,
      "tarifa": 67454640,
      "latitud_longitud_origen": "",
      "latitud_longitud_destino": ""
    },
    {
      "id_envio": 3,
      "destinatario": "Cartagena, ",
      "remitente": "Pasto, ",
      "contenido": "Forraje para ganado XX VV DD",
      "fecha_envio": "2024-11-08T00:00:00.000Z",
      "distancia": 9741451,
      "tarifa": 97414610,
      "latitud_longitud_origen": "",
      "latitud_longitud_destino": ""
    }
  ]
  ```


## Consideraciones-de-seguridad
El proyecto no tiene ningún sistema para autenticar, está sólo para fines de test.