const {MongoClient, ServerApiVersion} = require("mongodb");
const {getBatchSet, getTimeDiff} = require("./common");

async function initMongoDb() {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            }
        );
        await client.connect();
        const myDB = client.db("test_db");
        const myCollection = myDB.collection("sample_one");

        const tt1 = Date.now();
        for (let x = 0; x < 3333; x++) {
            const t1 = Date.now();
            const dataSet = getBatchSet(100000);
            await myCollection.insertMany(dataSet);
            const t2 = Date.now();
            const diff = getTimeDiff(t1, t2);
            console.log("INSERTED:", x, "TIME:", diff.diff, diff.timeType);
        }
        const tt2 = Date.now();
        const totalDiff = getTimeDiff(tt1, tt2);
        console.log("TOTAL TIME:", totalDiff.diff, totalDiff.timeType);
    } catch (e) {
        console.log("ERR", e.message);
        process.exit(100);
    }
    process.exit(100);
}

module.exports.initMongoDb = initMongoDb;
