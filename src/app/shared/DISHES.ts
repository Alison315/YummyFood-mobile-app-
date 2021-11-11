import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        id: '0',
        name: 'Peking Duck pizza',
        image: '/assets/images/pizza.png',
        category: 'mains',
        featured: true,
        label: 'Hot',
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'A unique combination of Peking duck and Italian pizza, topped with spring onion, sweet bean sauce, and mozzarella cheese.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in Yummy Food Fusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Pizza and duck, why not?',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        name: 'fried crispork',
        image: '/assets/images/pork.png',
        category: 'appetizer',
        featured: false,
        label: '',
        price: '1.99',
        description: 'Deep fried pork coated with mildly spiced flour batter accompanied with cumin, salt and pepper',
        comments: [
            {
                rating: 5,
                comment: 'Best fried pork!',
                author: 'Jenny Lee',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Love the crispy outside, cannot stop.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Small cosy restaurant, it feels inviting, fried pork is my favorite!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Tastes better with ketchup!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Great value, I will be back.',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        name: 'black truffle fried rice',
        image: '/assets/images/rice.png',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'A quintessential fusion experience, is it fried rice or is it risotto?',
        comments: [
            {
                rating: 5,
                comment: 'Food was good, service is the best around, number one in my mind!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'It\'s a great choice for a quick lunch!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Wonderful and delicious Chinese food with generous servings!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Great tasting and well worth it!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Busy little shop with amazing food, love the truffle rice',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '3',
        name: 'Chinese yum ice cream',
        image: '/assets/images/yum.png',
        category: 'dessert',
        featured: false,
        label: '',
        price: '2.99',
        description: 'A delectable, semi-sweet Chinese Style soft serve, with cripsy egg cone and strawberry sauce',
        comments: [
            {
                rating: 5,
                comment: 'Never tried Chinese Yum before, tastes like sweet potato.',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I had a single scoop yum cone, it\'s 10/10.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Massive ice cream fan here, absolutely love it.',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Daughter and partner grabbed one and both loved it!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Incredible product! Prices are very, very reasonable.',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];
