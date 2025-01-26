export const order = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer Name',
        type: 'string',
        description: 'The customer who placed this order.',
        readOnly: true
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        description: 'The phone number of the customer.',
        readOnly: true
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        description: 'The email of the customer.',
        readOnly: true
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'food' }],
                description: 'The food item included in this order.',
                readOnly: true
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                description: 'The quantity of this food item in the order.',
                readOnly: true
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
                description: 'The price of this product at the time of ordering.',
                readOnly: true
              },
              {
                name: 'totalPriceForThisProduct',
                title: 'Total Price for this Food Item:',
                type: 'number',
                description: 'The total price of this food item at the time of ordering.',
                readOnly: true
              }
            ],
          },
        ],
        description: 'The list of food items in this order.',
        readOnly: true
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        description: 'The total amount of the order.',
        readOnly: true
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Processing', value: 'processing' },
            { title: 'On The Way', value: 'ontheway' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ],
          layout: 'dropdown', // Display as a dropdown in the Studio
        },
        description: 'The current status of the order.'
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: [
            { title: 'Credit Card', value: 'credit_card' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'Cash on Delivery', value: 'cash_on_delivery' },
          ],
          layout: 'dropdown', // Display as a dropdown in the Studio
        },
        description: 'The payment method used for this order.',
        readOnly: true
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'street',
            title: 'Street',
            type: 'string',
            description: 'The street address for shipping.'
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'The city for shipping.'
          },
          {
            name: 'state',
            title: 'State',
            type: 'string',
            description: 'The state for shipping.'
          },
          {
            name: 'postalCode',
            title: 'Postal Code',
            type: 'string',
            description: 'The postal code for shipping.'
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
            description: 'The country for shipping.'
          },
        ],
        description: 'The shipping address for this order.',
        readOnly: true
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        description: 'The date and time when the order was created.',
        readOnly: true
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        description: 'The date and time when the order was last updated.'
      },
    ],
    initialValue: {
      status: 'pending', // Default status for new orders
      createdAt: new Date().toISOString(), // Default to the current date and time
    },
  };