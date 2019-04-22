// Define the Feathers schema for service 'purchase_order_details'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Purchase_order_detail',
    description: 'Purchase_order_details database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'product_id',
  'date_received',
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
  unit_cost: {
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
  date_received: {
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
  posted_to_inventory: {
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
  inventory_id: {
    type: 'number',
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
    name: 'Purchase_order_detail',
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