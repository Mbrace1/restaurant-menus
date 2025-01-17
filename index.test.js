const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const restaurant1 = await Restaurant.create({
            name: 'AppleBees',
            location: 'Texas',
            cuisine: 'FastFood',
          })
        expect(restaurant1.name).toEqual('AppleBees')
        expect(restaurant1.location).toEqual('Texas')
        expect(restaurant1.cuisine).toEqual('FastFood')
    });

    test('can create a Menu', async () => {
        const menu1 = await Menu.create({
            title: 'Breakfast',
          })
        expect(menu1.title).toEqual('Breakfast')

    });

    test('can find Restaurants', async () => {
        // should find all restaurants not just one
        await Restaurant.create({
            name: 'AppleBees',
            location: 'London',
            cuisine: 'FastFood'
          })
        
        const findRestaurant = await Restaurant.findAll();
        // added restaurant in earlier test
        expect(findRestaurant.length).toBe(2)
    });

    test('can find Menus', async () => {
        // should find all menus not just one
        await Menu.create({
            title: 'Lunch',
          })
        
        const findMenu = await Menu.findAll();
        // added menu in earlier test
        expect(findMenu.length).toBe(2)
    });

    test('can delete Restaurants', async () => {
        
        const restaurant1 = await Restaurant.create({
            name: 'AppleBees',
            location: '',
            cuisine: 'FastFood'
          })

        await Restaurant.destroy({
            where: {
                name: "AppleBees"
            }
        });

        const findRestaurant1 = await Restaurant.findOne({ 
            where: { name: 'AppleBees' } 
        });
        expect(findRestaurant1).toBeNull()
    });
})