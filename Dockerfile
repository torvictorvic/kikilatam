# Usa la imagen base de Node.js versión 20.15.1
FROM node:20.15.1

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código al contenedor
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start:prod"]
