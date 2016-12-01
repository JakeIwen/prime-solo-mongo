// Create a collection named orders.
db.createCollection('orders');
var orders = db.orders;
// Insert at least 3 documents that represent an order. IMPORTANT: See section below for fields.
orders.insert({
orderDate: new Date ("2015-10-08"),
orderTotal: 2,
lineItems: [
  { unitPrice: 1, quantity: 12, productName: 'computers'},
  { unitPrice: 4, quantity: 4, productName: 'doggos'},,
  { unitPrice: 2, quantity: 1, productName: 'birdz'}
]
})

orders.insert({
  orderDate: new Date ("2015-10-09"),
  orderTotal: 22,
  lineItems: [
    { unitPrice: 10, quantity: 1, productName: 'cats'},
    { unitPrice: 42, quantity: 4, productName: 'sigmas'}
  ]
})

orders.insert({
  orderDate: new Date (),
  orderTotal: 23,
  lineItems: [
    { unitPrice: 12, quantity: 2, productName: 'blood'},
    { unitPrice: 43, quantity: 3, productName: 'feet'}
  ]
})
// Find a single order document, any order document.
orders.find().limit(1)
// Find all orders and make them look pretty.
orders.find().pretty()
// Find all orders with an orderDate that is prior to 1/1/2016.
orders.find( {  orderDate: { $lt: new Date("2016-01-01") } } )
// Find all orders with an orderDate that is after 1/1/2016.
orders.find( {  orderDate: { $gt: new Date("2016-01-01") } } )
// Find orders with lineItems that have a quantity that is less than 50, but greater than 5. HINT: Look at $and and dot notation.
orders.find( { lineItems: { quantity: {$lt: 50}, { $gt: 5 } } } )
// Update one of your line items to 42.99. HINT: Look at dot notation
// Remove one of your orders.
orders.remove().limit(1)
