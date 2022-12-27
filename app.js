import express from 'express';
import router from './routes/index.js';
const app = express();
// Configuraciones de Express
app.use(express.json()); // Permite recibir json
app.use(express.urlencoded({extended: false}));
app.use("/api", router)
app.listen("3000", () => {
    console.log("Estamos escuchando en el puerto 3000");
});