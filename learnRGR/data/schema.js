import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let data = [42,43,44];

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            data:{
                type: new GraphQLList(GraphQLInt),
                resolve: () => data
            }
        }
    })
});

export default schema;
