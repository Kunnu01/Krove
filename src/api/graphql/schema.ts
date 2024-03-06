import { buildSchema, BuildSchemaOptions } from 'type-graphql';
import AllocationResolver from '@/api/domain/user/resolvers/UserResolver';

const resolvers: BuildSchemaOptions['resolvers'] = [AllocationResolver];

// import each resolver manually here
export type CreateSchemaOptions = {
  resolvers: BuildSchemaOptions['resolvers'];
};

export const graphqlSchemaOptions: CreateSchemaOptions = {
  resolvers,
};

export async function createGraphQLSchema(options: CreateSchemaOptions) {
  const { resolvers } = options;

  const localSchema = await buildSchema({
    resolvers,
  });

  return localSchema;
}
