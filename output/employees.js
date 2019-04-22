// Define the Feathers schema for service 'employees'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Employee',
    description: 'Employees database.',

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
  'attachments'
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
  company: {
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
  last_name: {
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
  first_name: {
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
  email_address: {
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
  job_title: {
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
  business_phone: {
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
  home_phone: {
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
  mobile_phone: {
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
  fax_number: {
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
  address: {
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
  city: {
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
  state_province: {
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
  zip_postal_code: {
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
  country_region: {
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
  web_page: {
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
  attachments: {
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
    name: 'Employee',
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
