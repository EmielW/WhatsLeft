import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { UserResolver } from './resolvers/UserResolver';

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
}

main();
