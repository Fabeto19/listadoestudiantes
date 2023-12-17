# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto al contenedor
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecuta el contenedor
CMD ["npm", "start"]
