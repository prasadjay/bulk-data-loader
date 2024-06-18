import common from './common';
import {knexInstance} from './postgres';
import {v4 as uuidv4} from "uuid";

exports.insertMultipleUser = async () => {
    try {
        const t1 = Date.now();
        const dataSet = getBatchSet(1000);
        await knexInstance.batchInsert('users', dataSet, 1000);
        const t2 = Date.now();
        const diff = common.getTimeDiff(t1, t2);
        console.log("INSERTED", "TIME:", diff.diff, diff.timeType);
    } catch (e) {
        console.log("ERR", e.message);
    }
}

exports.insertSingleUser = async () => {
    try {
        const dataSet = getUser();
        await knexInstance('users').insert(dataSet);
    } catch (e) {
        console.log("ERR", e.message);
    }
}

function getBatchSet(count) {
    const list = [];
    for (let x = 0; x < count; x++) {
        list.push(getUser());
    }
    return list;
}

function getUser() {
    let uu = getUuid();
    return {
        name: uu,
        username: uu,
        email: uu,
        phone_number: '017123151',
        address: uu,
        role: 1
    }
}

function getUuid() {
    return uuidv4();
}