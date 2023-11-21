let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = 'mongodb+srv://test:JT2Z8f5g64hGG1QG@cluster0.37hosfn.mongodb.net/?retryWrites=true&w=majority';
let client = new MongoClient(mongoUrl);  //with this, the connection will be started

// function helping to connect with DB 

async function dbConnect(){
    await client.connect();
}

let db = client.db('Microsoft_Clone') //specifying the database name

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    } catch(err){
        output.push({'Error' : 'No data found'});
    }    
    return output;
}

module.exports = {
    dbConnect,
    getData
}

