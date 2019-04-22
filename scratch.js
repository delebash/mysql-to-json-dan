
// ejs.renderFile(join(__dirname, './template.ejs'), {properties:properties,required:required,schema:schema}, options, (err, result) => {
//     // locals.f = flatten
//     if (err) {
//         throw err;
//     } else {
//         try {
//             fs.writeFileSync(filepath, result, 'utf8');
//             resolve(filepath);
//         } catch (err) {
//             if (err) {
//                 throw err;
//             }
//         }
//     }
// });




// const CreateFileWithContent = (fileName, content, outputFolder) => {
//     var logger = fs.createWriteStream(`${outputFolder}/${fileName}.json`, {
//         flags: 'w' // 'a' means appending (old data will be preserved)
//     })
//     logger.write(JSON.stringify(content, null, 4));
//     logger.end();
// }




//
// // caching map
//     var objMap = new Map(Object.entries(obj));
//
// // fast iteration on Map object
//     objMap.forEach((item, key) => {
//         // do something with an item
//         console.log(key, item);
//     });

// const required  = stringifyObject(schema.required





// const CreateFileWithContent = (fileName, content, outputFolder) => {
//     var logger = fs.createWriteStream(`${outputFolder}/${fileName}.json`, {
//         flags: 'w' // 'a' means appending (old data will be preserved)
//     })
//     logger.write(JSON.stringify(content, null, 4));
//     logger.end();
// }



// caching map
//     var objMap = new Map(Object.entries(schema.fields));
//
// // fast iteration on Map object
//     objMap.forEach((item, key) => {
//         // do something with an item
//         console.log(key, item);
//     });



// caching map
//     var objMap = new Map(Object.entries(myFields));
//
// // fast iteration on Map object
//     objMap.forEach((item, key) => {
//         // do something with an item
//         console.log(key, item);
//     });
//

// for (let key in myFields) {
//     var obj ={}
//     if (myFields.hasOwnProperty(key)) {
//      obj[key] = {type: key}
//     }
// }
//    let newObject = {};
// Object.keys(myFields).forEach(function (key) {
//     let value = myFields[key];
//     newObject[value.Field] = {type: };
// });


//console.log(arryProp)


// Object.keys(obj).forEach((key) =>
//     objt[{obj[key].Field] = obj[key].Type
//
// myArray.push(objt)
//  //   console.log(` ${obj[key].Field}:{type: ${obj[key].Type}}`)
// );
//
// Object.keys(obj).forEach(function(prop) {
//     // `prop` is the property name
//     // `data[prop]` is the property value
//     console.log(prop + ":" + obj[prop])
// });
//key: id, value: 1
//key: name, value: test

//     var obj = {a: 1, b: 2, c: 'something'};
//
// // caching map
//     var objMap = new Map(Object.entries(obj));
//
// // fast iteration on Map object
//     objMap.forEach((item, key) => {
//         // do something with an item
//         console.log(key, item);
//     });


// let options = {};

// let formatProperties = {}

//const filepath = join(outputDir, tableName + '.js');

// schema.fields.forEach((tableName, index, array) => {
//    // formatProperties;
// })

//turn the array of users into the objects we want to send
// const formatProperties = schema.fields.map( (prop, i) => {
//     return {
//
//     };
// });



//console.log(properties)
// const required  = stringifyObject(schema.required, {
//     indent: '  ',
//     singleQuotes: false
// }).substr(1).slice(0, -1);


// properties: {
//     // !code: schema_properties
//     id: { type: 'ID' },
//     name: {}

// console.log(schema)
