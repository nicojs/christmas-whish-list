import { Product } from './models/product';
import { Supplier } from './models/supplier';
import { WhishList } from './whish-list';

const christmasList = new WhishList('Christmas 🎅');
const brio: Supplier = { id: 1, name: 'BRIO' };

christmasList.setWish(1, new Product('Toy train', { amount: 35.58, currency: 'Euro' }, brio));

// Changed my mind, want these first!
christmasList.setWish(1, new Product('Yellow power ranger', { amount: 9.99, currency: 'Dollar'}));
christmasList.setWish(2, new Product('Christmas carols CD', { amount: 24.99, currency: 'Dollar' }));

christmasList.printList();
