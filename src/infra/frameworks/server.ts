import http from 'http';
import app from './app'

/**
 * Class pour test uniatire
 */
class Server {

  // Port
  protected port: string; 

  constructor(port: string) {
    this.port = port;
  }

  /**
   * Démarrage du server
   */
  async startServer(): Promise<void> {
    
    const server = http.createServer(app);       

    server.listen(this.port, () => {  
      console.log(`http://localhost:${this.port}`);
    });

  }
}
export { Server }

