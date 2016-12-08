import fs from 'fs';
import path from 'path';
import Schema from '../data/schema';
import { graphql }  from 'graphql';
import {MongoClient} from 'mongodb';
import MongoConfig from '../db/mongodb.config'
import { introspectionQuery, printSchema } from 'graphql/utilities';

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  let db = await MongoClient.connect(MongoConfig.connectString);
  let schema = Schema(db);
  var result = await (graphql(schema, introspectionQuery));
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.json'),
      JSON.stringify(result, null, 2)
    );
  }

  fs.writeFileSync(
    path.join(__dirname, '../data/schema.graphql'),
    printSchema(schema)
  );
})();

