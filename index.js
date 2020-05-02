const stripe = require('stripe')('sk_test_nO7vO3qiJLXNPAbw4sO10zx700DuBv1ev6');

exports.handler = async (event) => {
    return stripe.paymentIntents.create({
        amount: event.body.amount,
        currency: 'usd',
        payment_method_types: ['card']
    });
}