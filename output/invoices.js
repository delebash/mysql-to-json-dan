// Define the Feathers schema for service 'invoices'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Invoice',
    description: 'Invoices database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'order_id',
  'invoice_date',
  'due_date',
  'tax',
  'shipping',
  'amount_due'
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
  order_id: {
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
  invoice_date: {
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
  due_date: {
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
  tax: {
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
  shipping: {
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
  amount_due: {
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
    name: 'Invoice',
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
