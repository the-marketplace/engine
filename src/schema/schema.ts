import { GraphQLSchema } from 'graphql';
import Query from './nodes/root';
import Mutations from './mutations/root';

const Schema = new GraphQLSchema({ query: Query, mutation: Mutations });

export default Schema;
