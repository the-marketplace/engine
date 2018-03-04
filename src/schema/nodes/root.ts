import { GraphQLObjectType } from 'graphql';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Base object',
  fields: () => ({}),
});

export default Query;
