const {v4: uuidv4} = require("uuid");

function getTimeDiff(t1, t2){
    let timeType = "seconds";
    let diff = (t2 - t1) / 1000;
    if (diff / 1000 / 60 > 1) {
        diff = diff / 1000 / 60
        timeType = "minutes"
    }
    return {diff, timeType};
}

function getBatchSet(count){
    const list = [];
    for(let x=0; x<count; x++){
        list.push(getDataRecord());
    }
    return list;
}

function getDataRecord(){
    const uu1 = getUuid();
    const uu2 = getUuid();
    const uu3 = getUuid();
    return {
        val_1: uu1,
        val_2: uu1,
        val_3: uu1,
        val_4: uu2,
        val_5: uu2,
        val_6: uu2,
        val_7: uu3,
        val_8: uu3,
        val_9: uu3
    }
}

function getUuid(){
    return uuidv4();
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports.getBatchSet = getBatchSet;
module.exports.getTimeDiff = getTimeDiff;
module.exports.sleep = sleep;
