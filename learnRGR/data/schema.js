import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let data = [
    { counter: 23 },
    { counter: 24 },
    { counter: 25 },    
];

let counterType = new GraphQLObjectType({
    name: 'Counter',
    fields: {
        counter: {type: GraphQLInt}
    }
});

/**
 {
  data {
    counter
  }
 }
 */
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            data:{
                type: new GraphQLList(counterType),
                resolve: () => data
            }
        }
    })
});

export default schema;
