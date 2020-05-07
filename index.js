const Stripe = require('stripe');
const stripe = new Stripe('sk_test_nO7vO3qiJLXNPAbw4sO10zx700DuBv1ev6', {
    maxNetworkRetries: 5
});

exports.handler = async (event) => {
    return stripe.paymentIntents.create({
        amount: JSON.parse(event.body).amount,
        currency: 'usd',
        payment_method_types: ['card']
    });
}