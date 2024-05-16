const express = require('express')
const app = express()
const port=8080;

//Servir contenido estático
app.use(express.static('public'))

// Ruta para manejar cualquier otra solicitud
app.use((req, res) => {
    res.status(404).sendFile(__dirname +'/public/error/404.html');
});

app.listen(port, () => {
    console.log(`Servidor Express iniciado en el puerto ${port}`);
});