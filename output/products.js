// Define the Feathers schema for service 'products'. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
// !<DEFAULT> code: schema_header
    title: 'Product',
    description: 'Products database.',

    // !end

    // !code: schema_definitions

    // !end

    // Required fields.
    required: [
    // !code: schema_required
  'supplier_ids',
  'product_code',
  'product_name',
  'description',
  'standard_cost',
  'reorder_level',
  'target_level',
  'quantity_per_unit',
  'minimum_reorder_quantity',
  'category',
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
  supplier_ids: {
    type: 'string'
  },
  id: {
    type: 'ID'
  },
  product_code: {
    type: 'string',
    maxLength: 25
  },
  product_name: {
    type: 'string',
    maxLength: 50
  },
  description: {
    type: 'string'
  },
  standard_cost: {
    type: 'number',
    maxLength: 19
  },
  list_price: {
    type: 'number',
    maxLength: 19
  },
  reorder_level: {
    type: 'number',
    maxLength: 11
  },
  target_level: {
    type: 'number',
    maxLength: 11
  },
  quantity_per_unit: {
    type: 'string',
    maxLength: 50
  },
  discontinued: {
    type: 'number',
    maxLength: 1
  },
  minimum_reorder_quantity: {
    type: 'number',
    maxLength: 11
  },
  category: {
    type: 'string',
    maxLength: 50
  },
  attachments: {
    type: 'string'
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
    name: 'Product',
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
