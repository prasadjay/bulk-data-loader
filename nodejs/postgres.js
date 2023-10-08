const {getBatchSet, getTimeDiff} = require('./common');

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'test_load_data',
        password: '12345',
        ssl: false,
    }
});

async function initPostgres() {
    return initUniversityTable()
}

async function initUniversityTable(){

}

async function legacy_1(){
    try {
        const tt1 = Date.now();
        for (let x = 0; x < 2; x++) {
            const t1 = Date.now();
            const dataSet = getBatchSet(100000);
            await knex.batchInsert('sample_one', dataSet, 5000);
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

module.exports.initPostgres = initPostgres;
