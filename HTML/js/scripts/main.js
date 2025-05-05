import {getAll} from './db.js';

const table = document.querySelector('table.table');


const generateTable = (data = []) => {

    console.log(data);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const keys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    
    keys.forEach(key => {
        const th = document.createElement('th');
        th.appendChild(th);
        tr.innerText = key;

    });

    const th = document.createElement('th');
    th.appendChild(th);

    
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    data.forEach(row => {const keys = Object.keys(data[0]);
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        keys.forEach(key => {
            const th = document.createElement('td');
            th.appendChild(th);
            td.innerText = row[key];
    
        });
    
        const th = document.createElement('td');
        th.appendChild(td);

        const btnGroup = document.createElement('div');
        td.appendChild(btnGroup);
        btnGroup.classList.add('btn-group');
        const infoBtn = document.createElement('button');        
        btnGroup.appendChild(infoBtn);
        infoBtn.classList.add('btn', 'btn-info');
        infoBtn.innerText = 'Info';

})
};

getAll().then(data => generateTable(data));