const lodash = require('lodash');
const mysql = require('./mysql.js');
const ejs = require('ejs');
const {join} = require('path');
const fs = require('fs');
var pluralize = require('pluralize')
const stringifyObject = require('stringify-object');
const connection = mysql.CreateConnection({
    user: 'root',
    password: 'test12345',
    host: 'localhost',
    database: 'shelter_ops'
});
const dataTypesMap = defineDataTypeMap()

let options = {
    output: './output'
};


connection.connect();
mysql.GetSchemaWithRelations(connection)
    .then((schema) => {
            connection.end(); /* After using the connection, it must be closed. */
            const tableNames = Object.keys(schema.tables);
            tableNames.forEach(function (tableName) {
                const table = schema.tables[tableName];
                table.fields.forEach(function (field) {
                    field.Field; // Field name
                    field.Type; // Field type, ej: int(11)
                    field.Null; // is nullable? ej: false
                    field.Key; // ej: PRI
                    field.Default; // default value
                    field.Extra; // extra, ej: auto_increment
                });

                // Relations:
                table.relationsFromTable.forEach(function (relation) {
                    relation.localField;
                    relation.foreignTable;
                    relation.foreignField;
                });

                table.relationsToTable.forEach(function (relation) {
                    relation.localField;
                    relation.foreignTable;
                    relation.foreignField;
                });
            });
            convertToJsonSchema(schema)
        }
    );


async function convertToJsonSchema(schema) {


    const tables = schema.tables;
    const tableNames = Object.keys(tables);

    tableNames.forEach((tableName, index, array) => {
        //console.log(tables[tableName])
        CreateFileWithContent(tableName, tables[tableName], options.output);
    })

}

function getFieldLength(fType) {
    let fieldType = fType;
    let fieldLength = undefined;
    if (fieldType) {
        if (fieldType.includes('(')) {
            let init = fieldType.indexOf('(');
            let fin = fieldType.indexOf(')');
            fieldLength = fieldType.substr(init + 1, fin - init - 1);
        }
        return fieldLength;
    }
}

function getFieldProperties(type, key) {
    // ("null", "boolean", "object", "array", "number", or "string")
    let mapDataType, pattern = undefined, format = undefined,
        maxLength = undefined, minLength = undefined, maximum = undefined,
        minimum = undefined, exclusiveMaximum = undefined, exclusiveMinimum = undefined
    let objField = {};
    if (type) {
        maxLength = getFieldLength(type);
        if (type.includes('(')) {
            type = type.substr(0, type.indexOf("("));
        }

        mapDataType = dataTypesMap.get(type);
        type = mapDataType.type
        format = mapDataType.format

        if (key === 'PRI') {
            type = 'ID'
            maxLength = undefined;
        }
// if(typeof num1 == 'number'
        objField.type = type;
        format === undefined ? '' : objField.format = format
        pattern === undefined ? '' : objField.pattern = pattern
        maxLength === undefined ? '' : objField.maxLength = parseInt(maxLength)
        minLength === undefined ? '' : objField.minLength = parseInt(minLength)
        minimum === undefined || '' ? '' : objField.minimum = parseInt(minimum)
        exclusiveMaximum === undefined ? '' : objField.exclusiveMaximum = parseInt(exclusiveMaximum)
        exclusiveMinimum === undefined || '' ? '' : objField.exclusiveMinimum = parseInt(exclusiveMinimum)
        maximum === undefined ? '' : objField.maximum = parseInt(maximum)

        return objField;
    }
}

    let dataTypesMap = new Map();

    dataTypesMap.set('int', {type: 'number'})
    dataTypesMap.set('tinyint', {type: 'number'})
    dataTypesMap.set('smallint', {type: 'number'})
    dataTypesMap.set('mediumint', {type: 'number'})
    dataTypesMap.set('bigint', {type: 'number'})
    dataTypesMap.set('float', {type: 'number'})
    dataTypesMap.set('double', {type: 'number'})
    dataTypesMap.set('decimal', {type: 'number'})
    dataTypesMap.set('date', {type: 'string', format: 'date'})
    dataTypesMap.set('datetime', {type: 'string', format: 'date-time'})
    dataTypesMap.set('timestamp', {type: 'string', format: 'date-time'})
    dataTypesMap.set('time', {type: 'string', format: 'time'})
    dataTypesMap.set('year', {type: 'string', pattern: 'date'})
    dataTypesMap.set('char', 'string')
    dataTypesMap.set('varchar', {type: 'string'})
    dataTypesMap.set('text', {type: 'string'})
    dataTypesMap.set('blob', {type: 'string'})
    dataTypesMap.set('tinyblob', {type: 'string'})
    dataTypesMap.set('tinytext', {type: 'string'})
    dataTypesMap.set('mediumblob', {type: 'string'})
    dataTypesMap.set('mediumtext', {type: 'string'})
    dataTypesMap.set('longblob', {type: 'string'})
    dataTypesMap.set('longtext', {type: 'string'})
    dataTypesMap.set('enum', {type: 'object'})
    dataTypesMap.set('bit', {type: 'boolean'})
    dataTypesMap.set('point', {type: 'number'})

    return dataTypesMap
}

function CreateFileWithContent(tableName, schema, outputDir) {

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);

    let fields = schema.fields;
    let objProp = {};
    let objFieldType = {};
    let arrayRequired = [];

    Object.keys(fields).forEach(function (key) {
        let fieldName, fieldLength, fieldType, fieldNull, fieldKey, fieldDefault, fieldExtra, field
        let objFieldProperties = {};

        field = fields[key];

        if (field) {
            fieldName = field.Field;
            objFieldProperties = getFieldProperties(field.Type, field.Key);
            fieldNull = field.Null;
            fieldKey = field.Key;
            fieldDefault = field.Default;
            fieldExtra = field.Extra;

            objProp[field.Field] = objFieldProperties

            if (fieldNull === true) {
                arrayRequired.push(fieldName)
            }
        }
    });

    //Not sure why it is adding undefined
    delete objProp.undefined

    let properties = stringifyObject(objProp, {
        indent: '  ',
        singleQuotes: true
    }).substr(1).slice(0, -1);

    let required = stringifyObject(arrayRequired, {
        indent: '  ',
        singleQuotes: true
    }).substr(1).slice(0, -1);


    const filepath = join(outputDir, tableName + '.js');

    let title = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    let serviceName = pluralize.singular(title); //=> "single"
    ejs.renderFile(join(__dirname, './template.ejs'), {
        properties: properties,
        required: required,
        title: title,
        serviceName: serviceName
    }, options, (err, result) => {
        if (err) {
            throw err;
        } else {
            try {
                fs.writeFileSync(filepath, result, 'utf8');

            } catch (err) {
                if (err) {
                    throw err;
                }
            }
        }
    });
}
