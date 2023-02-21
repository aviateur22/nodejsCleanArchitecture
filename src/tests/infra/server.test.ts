import { Server } from "../../infra/frameworks/server";

describe('StartServer', ()=>{

  it('Should start a server and get message Server started', async()=>{
    const server = new Server(3000);
    await server.startServer();

  });
});