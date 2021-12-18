const ch = require('./christmas-whish-list.json');

const suppliers = [...new Set(ch.products.map(p => p.supplier).filter(Boolean))];

ch.suppliers = suppliers.map((name, id) => ({id, name, website: `www.${name.toLowerCase().replaceAll(' ', '-')}.com`}));

ch.products.forEach(p => {
    p.supplierId = ch.suppliers.find(sup => sup.name === p.supplier)?.id;
    delete p.supplier;
});

require('fs').writeFileSync('./christmas-whish-list-out.json', JSON.stringify(ch, null, 2), 'utf-8');


