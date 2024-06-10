import common from './common';
import {knexInstance} from './postgres';

exports.insertMultipleUser = async () => {
    try {
        const t1 = Date.now();
        const dataSet = common.getBatchSet(10000);
        await knexInstance.batchInsert('sample_one', dataSet, 5000);
        const t2 = Date.now();
        const diff = common.getTimeDiff(t1, t2);
        console.log("INSERTED", "TIME:", diff.diff, diff.timeType);
    } catch (e) {
        console.log("ERR", e.message);
    }
}