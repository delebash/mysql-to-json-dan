// Define the Feathers schema for service 'inventory_transactions'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Inventory_transaction',
    description: 'Inventory_transactions database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'transaction_created_date',
  'transaction_modified_date',
  'purchase_order_id',
  'customer_order_id',
  'comments'
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
    type: 'ID',
    format: undefined,
    pattern: undefined,
    maxLength: undefined,
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  transaction_type: {
    type: 'number',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  transaction_created_date: {
    type: 'string',
    format: 'date-time',
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  transaction_modified_date: {
    type: 'string',
    format: 'date-time',
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  product_id: {
    type: 'number',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  quantity: {
    type: 'number',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  purchase_order_id: {
    type: 'number',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  customer_order_id: {
    type: 'number',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  comments: {
    type: 'string',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
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
    name: 'Inventory_transaction',
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
