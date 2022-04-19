var moment = require('moment'); // toda la info
moment.locale('es');

console.log('Naci ' + moment('08/03/2001', 'DD/MM/YYYY').fromNow());