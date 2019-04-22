// Define the Feathers schema for service 'order_details'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Order_detail',
    description: 'Order_details database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'product_id',
  'unit_price',
  'status_id',
  'date_allocated',
  'purchase_order_id',
  'inventory_id'
    // !end
    ],
    // Fields with unique values.
    uniqueItemProperties: [
    // !code: schema_unique

    // !end
    ],

    // Fields in the model.
    properties: {
    // !code: schema_properties
  id: {
    type: 'ID'
  },
  order_id: {
    type: 'number',
    maxLength: 11
  },
  product_id: {
    type: 'number',
    maxLength: 11
  },
  quantity: {
    type: 'number',
    maxLength: 18
  },
  unit_price: {
    type: 'number',
    maxLength: 19
  },
  discount: {
    type: 'number'
  },
  status_id: {
    type: 'number',
    maxLength: 11
  },
  date_allocated: {
    type: 'string',
    format: 'date-time'
  },
  purchase_order_id: {
    type: 'number',
    maxLength: 11
  },
  inventory_id: {
    type: 'number',
    maxLength: 11
  }
    // !end
    },
    // !code: schema_more

    // !end
    };

    // Define optional, non-JSON-schema extensions.
    let extensions = {
    // GraphQL generation.
    graphql: {
    // !code: graphql_header
    name: 'Order_detail',
    service: {
    sort: { id: 1 },
    },
    // sql: {
    // sqlTable: 'Animals',
    // uniqueKey: 'id',
    // sqlColumn: {
    // __authorId__: '__author_id__',
    // },
    // },
    // !end
    discard: [
    // !code: graphql_discard

    // !end
    ],
    add: {
    // !<DEFAULT> code: graphql_add
        // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: 'id' } },

        // !end
        },
        // !code: graphql_more

        // !end
        },
        };

        // !code: more

        // !end

        let moduleExports = {
        schema,
        extensions,
        // !code: moduleExports

        // !end
        };

        // !code: exports

        // !end
        module.exports = moduleExports;

        // !code: funcs

        // !end
        // !code: end

        // !end
