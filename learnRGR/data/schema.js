import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLint,
    GraphQLString
} from 'graphql';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            counter: {
                type: GraphQLint,
                resolve: () => 42
            }
        }
    })
});

export default schema;
