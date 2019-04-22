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
  supplier_id: {
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
  created_by: {
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
  submitted_date: {
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
  creation_date: {
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
  status_id: {
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
  expected_date: {
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
  shipping_fee: {
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
  taxes: {
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
  payment_date: {
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
  payment_amount: {
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
  payment_method: {
    type: 'string',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  notes: {
    type: 'string',
    format: undefined,
    pattern: undefined,
    maxLength: '',
    minLength: undefined,
    maximum: undefined,
    minimum: undefined,
    exclusiveMaximum: undefined,
    exclusiveMinimum: undefined
  },
  approved_by: {
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
  approved_date: {
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
  submitted_by: {
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
