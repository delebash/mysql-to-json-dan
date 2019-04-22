// Define the Feathers schema for service 'purchase_orders'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Purchase_order',
    description: 'Purchase_orders database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'supplier_id',
  'created_by',
  'submitted_date',
  'creation_date',
  'status_id',
  'expected_date',
  'payment_date',
  'payment_amount',
  'payment_method',
  'notes',
  'approved_by',
  'approved_date',
  'submitted_by'
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
  supplier_id: {
    type: 'number',
    maxLength: 11
  },
  created_by: {
    type: 'number',
    maxLength: 11
  },
  submitted_date: {
    type: 'string',
    format: 'date-time'
  },
  creation_date: {
    type: 'string',
    format: 'date-time'
  },
  status_id: {
    type: 'number',
    maxLength: 11
  },
  expected_date: {
    type: 'string',
    format: 'date-time'
  },
  shipping_fee: {
    type: 'number',
    maxLength: 19
  },
  taxes: {
    type: 'number',
    maxLength: 19
  },
  payment_date: {
    type: 'string',
    format: 'date-time'
  },
  payment_amount: {
    type: 'number',
    maxLength: 19
  },
  payment_method: {
    type: 'string',
    maxLength: 50
  },
  notes: {
    type: 'string'
  },
  approved_by: {
    type: 'number',
    maxLength: 11
  },
  approved_date: {
    type: 'string',
    format: 'date-time'
  },
  submitted_by: {
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
    name: 'Purchase_order',
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
