import http from 'http';
import app from './app'

/**
 * Class pour test uniatire
 */
class Server {
  protected port: number; 

  constructor(port: number) {
    this.port = port;
  }

  /**
   * Démarrage du server
   */
  async startServer(): Promise<void> {
    const server = http.createServer(app);    

    await new Promise((resolve)=>server.listen(this.port, ()=> resolve(app)));
  }
}
export { Server }

