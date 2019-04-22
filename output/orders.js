// Define the Feathers schema for service 'orders'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Order',
    description: 'Orders database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'employee_id',
  'customer_id',
  'order_date',
  'shipped_date',
  'shipper_id',
  'ship_name',
  'ship_address',
  'ship_city',
  'ship_state_province',
  'ship_zip_postal_code',
  'ship_country_region',
  'shipping_fee',
  'taxes',
  'payment_type',
  'paid_date',
  'notes',
  'tax_rate',
  'tax_status_id',
  'status_id'
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
  employee_id: {
    type: 'number',
    maxLength: 11
  },
  customer_id: {
    type: 'number',
    maxLength: 11
  },
  order_date: {
    type: 'string',
    format: 'date-time'
  },
  shipped_date: {
    type: 'string',
    format: 'date-time'
  },
  shipper_id: {
    type: 'number',
    maxLength: 11
  },
  ship_name: {
    type: 'string',
    maxLength: 50
  },
  ship_address: {
    type: 'string'
  },
  ship_city: {
    type: 'string',
    maxLength: 50
  },
  ship_state_province: {
    type: 'string',
    maxLength: 50
  },
  ship_zip_postal_code: {
    type: 'string',
    maxLength: 50
  },
  ship_country_region: {
    type: 'string',
    maxLength: 50
  },
  shipping_fee: {
    type: 'number',
    maxLength: 19
  },
  taxes: {
    type: 'number',
    maxLength: 19
  },
  payment_type: {
    type: 'string',
    maxLength: 50
  },
  paid_date: {
    type: 'string',
    format: 'date-time'
  },
  notes: {
    type: 'string'
  },
  tax_rate: {
    type: 'number'
  },
  tax_status_id: {
    type: 'number',
    maxLength: 4
  },
  status_id: {
    type: 'number',
    maxLength: 4
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
    name: 'Order',
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
