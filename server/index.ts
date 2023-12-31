import { Server, ServerCredentials } from "grpc";
import { UsersService } from "../proto/users_grpc_pb";
import { UserServer } from "./services";

const server = new Server();
server.addService(UsersService, new UserServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
