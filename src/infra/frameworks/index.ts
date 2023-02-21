import http from 'http';
import app from './app'

// Port
const PORT = process.env.PORT ?? 3000;

// Http Server
const server = http.createServer(app);

// Démarrage server
server.listen(PORT, () => {  
    console.log(`http://localhost:${PORT}`);
});