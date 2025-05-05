const apiUrl = 'https://nettuts.hu/jms/Sanyee83';

export const getAll = (entity = 'users') => 
    {
    return  fetch(apiUrl + entity).then(res => res.json());
    }