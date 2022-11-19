import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menuArray = [
    {
        category: 'Appetizers',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Citrus curred Cobia",
        ingredients: ["Tangerine segments", " Hazelnuts", " Avocado Cream"],
        uuid: uuidv4(),
        price: 13,
        type: 'Appetizer'
    },
    {
        name: "Elk Carpaccio",
        ingredients: ["Elk Tenderloin", " Parmesan", " White Truffle"],
        price: 19,
        uuid: uuidv4(),
        type: 'Appetizer'
    },
    {
        name: "Chili Arancini",
        ingredients: ["Smoked Blue Cheese", " Local Chilies", " Vegetable Risotto"],
        price: 8,
        uuid: uuidv4(),
        type: 'Appetizer'
    },
    {
        name: "Garden Chips",
        ingredients: ["Local Root Vegetables", " Salsa verde"],
        uuid: uuidv4(),
        price: 6,
        type: 'Appetizer'
    },
    {
        category: 'Salads',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Farm House Salad",
        ingredients: ["Wild Lettuce", " Coddled Egg", " Meyer Lemon", " Spanish Olive Oil"],
        price: 8,
        uuid: uuidv4(),
        type: 'Salad'
    },
    {
        name: "Caesar",
        ingredients: ["Romaine", " White Anchovi", " Parmesan", " Brioche Crouton", " Green Pepper"],
        price: 9,
        uuid: uuidv4(),
        type: 'Salad'
    },
    {
        category: 'Soups',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Seasonal 'Creamed' Soup",
        ingredients: ["Delta Asparagus", " Lemon", " Silken Tofu", " Summer Truffle"],
        price: 11,
        uuid: uuidv4(),
        type: 'Soup'
    },
    {
        name: "Pacific Chowder",
        ingredients: ["Geoduck", " House Curred Pancetta Tessa", " Local Cream"],
        uuid: uuidv4(),
        price: 18,
        type: 'Soup'
    },
    {
        category: "Entree's",
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Elk Tenderloin",
        ingredients: ["Parsnip Puree", " Blueberry Gastrique", " Pumpernickel Soil"],
        price: 42,
        uuid: uuidv4(),
        type: 'Entree'
    },
    {
        name: "Bone in Filet",
        ingredients: ["16oz Prime Grass Feed Beef", " Bone Marrow Hollandaise", " Rainbow Chard"],
        price: 56,
        uuid: uuidv4(),
        type: 'Entree'
    },
    {
        name: "Farm House Burger",
        ingredients: ["Smoked Beef Burger Ground with Farm Butter", " House Made Ketchup and Kolsch Mustard", " Gruyere"],
        uuid: uuidv4(),
        price: 18,
        type: 'Entree'
    },
    {
        name: "'Peking' Chicken",
        ingredients: ["Poulet Rouge", " Chicken Skin Glass", " Charred Spring Onion", " Hoisin Jus"],
        price: 34,
        uuid: uuidv4(),
        type: 'Entree'
    },
    {
        name: "Arctic Char",
        ingredients: ["Whole Fish", " Scallop Mousseline", " Red Cabbage", " Bacon Beurre Blanc"],
        price: 38,
        uuid: uuidv4(),
        type: 'Entree'
    },
    {
        name: "Sweet Potato and Mushroom Gnocchi",
        ingredients: ["Chanterelles", " Morels", " Dragon Tongue Beans", " Balsamic Pearl Onions", " Soubise"],
        uuid: uuidv4(),
        price: 27,
        type: 'Entree'
    },
    {
        category: 'Sides',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Steak Fries",
        ingredients: ["Smoked Potatoes", " House Made Ketchup"],
        price: 6,
        uuid: uuidv4(),
        type: 'Side'
    },
    {
        name: "Mash Potatoes",
        ingredients: ["Local Cream", " Truffle Oil", " Chives"],
        uuid: uuidv4(),
        price: 7,
        type: 'Side'
    },
    {
        name: "Brussels Sprouts",
        ingredients: ["Orange Gastrique", " Lardo", " House Curred Guanciale"],
        price: 10,
        uuid: uuidv4(),
        type: 'Side'
    },
    {
        name: "Shishito peppers",
        ingredients: ["Black Garlic", " Marcona Almonds"],
        price: 9,
        uuid: uuidv4(),
        type: 'Side'
    },
    {
        category: 'Child Options',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Kids: Fish Sticks",
        ingredients: ["Brioche Crusted Cod", " Vegetable Chips", " Remoulade"],
        uuid: uuidv4(),
        price: 12,
        type: 'Child'
    },
    {
        name: "Kids: Mini Burger",
        ingredients: ["House Made Bun", " Cheese", " Fries"],
        price: 10,
        uuid: uuidv4(),
        type: 'Child'
    },
    {
        name: "Kids: Roasted Chicken",
        ingredients: ["Free Range Chicken Breast", " Mash Potatoes", " Local Vegetable Blend",],
        price: 12,
        uuid: uuidv4(),
        type: 'Child'
    },
    {
        category: 'Beverages',
        type: 'label',
        uuid: uuidv4(),
    },
    {
        name: "Coke",
        profile: "Not pepsi",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: false,
    },
    {
        name: "Pepsi",
        profile: "Get the coke",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: false,
    },
    {
        name: "Eco friendly Water to go",
        profile: "Water, Served in a paper bag",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: false,
    },
    {
        name: "Beer: American domestic clasic",
        profile: "Light, mostly water flavored with a hint of beer",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Beer: American Craft ",
        profile: "Full flavor, artsy, comes in a collector can",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Beer: European",
        profile: "Like the American Craft, without the cool can",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Wine: Red, France",
        profile: "Balanced, consistant, slight hint of ours is better",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Wine: Red, California",
        profile: "Not Washington but still tasty and a bit overly oaky",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Wine: White, Germany",
        profile: "Buy two, you'll thank me",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },
    {
        name: "Wine: White, American",
        profile: "Stay away from the Flordia options",
        price: 12,
        uuid: uuidv4(),
        type: 'Beverage',
        containesAlcohol: true,
    },

]

export { menuArray }