import {getAll} from './db.js';
const generateTable = (data = []) => {

    console.log(data);
};

getAll().then(data => generateTable(data));