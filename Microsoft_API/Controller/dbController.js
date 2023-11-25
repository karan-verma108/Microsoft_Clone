let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = 'mongodb+srv://test:JT2Z8f5g64hGG1QG@cluster0.37hosfn.mongodb.net/?retryWrites=true&w=majority';
let client = new MongoClient(mongoUrl);  //with this, the connection will be started

// function helping to connect with DB 

async function dbConnect(){
    await client.connect();
}

let db = client.db('Microsoft_Clone') //specifying the database name

// function for getting the data 
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

// function for posting the data 
async function postData(colName,data){
    let output;
    try{
        output = db.collection(colName).insertOne(data);
    } catch(err){
        output.push({'Response' : 'Error in posting data'});
    }    
    return output;
}

// function for updating the data 
async function updateData(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {'Response' : 'Error in updating data'}
    }
    return output
}

// function for deleting the data
async function deleteData(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    } catch(err){
        output = {'Response' : 'Error in deleting data'}
    }
    return output
}


module.exports = {
    dbConnect,
    getData,
    postData,
    updateData,
    deleteData
}

