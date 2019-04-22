// Define the Feathers schema for service 'customers'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Customer',
    description: 'Customers database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'company',
  'last_name',
  'first_name',
  'email_address',
  'job_title',
  'business_phone',
  'home_phone',
  'mobile_phone',
  'fax_number',
  'address',
  'city',
  'state_province',
  'zip_postal_code',
  'country_region',
  'web_page',
  'notes',
  'attachments',
  'testint'
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
  company: {
    type: 'string',
    maxLength: 50
  },
  last_name: {
    type: 'string',
    maxLength: 50
  },
  first_name: {
    type: 'string',
    maxLength: 50
  },
  email_address: {
    type: 'string',
    maxLength: 50
  },
  job_title: {
    type: 'string',
    maxLength: 50
  },
  business_phone: {
    type: 'string',
    maxLength: 25
  },
  home_phone: {
    type: 'string',
    maxLength: 25
  },
  mobile_phone: {
    type: 'string',
    maxLength: 25
  },
  fax_number: {
    type: 'string',
    maxLength: 25
  },
  address: {
    type: 'string'
  },
  city: {
    type: 'string',
    maxLength: 50
  },
  state_province: {
    type: 'string',
    maxLength: 50
  },
  zip_postal_code: {
    type: 'string',
    maxLength: 15
  },
  country_region: {
    type: 'string',
    maxLength: 50
  },
  web_page: {
    type: 'string'
  },
  notes: {
    type: 'string'
  },
  attachments: {
    type: 'string'
  },
  testint: {
    type: 'number',
    maxLength: 10
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
    name: 'Customer',
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
