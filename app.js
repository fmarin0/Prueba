// Importa el módulo Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Express escuchando en: http://localhost:3000/');
});

