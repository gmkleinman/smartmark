# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {
        username: 'EnderWiggin', 
        password: 'password',
        email: 'speakerforthedead@formics.com',
    },
    {
        username: 'Zelda', 
        password: 'password',
        email: 'princess@hyrule.com',
    },
    {
        username: 'G', 
        password: 'password',
        email: 'gmkleinman@gmail.com',
    },
])

passages = Passage.create([
    {
        title: 'The Raven',
        author: 'Edgar Allan Poe',
        body: 'Once upon a midnight dreary...',
    },
    {
        title: "Sonnets from the Portuguese No. 43",
        author: "Elizabeth Barrett Browning",
        body: "How do I love thee? Let me count the ways...",
    },
    {
        title: "Kerpluckit",
        author: "Grant Kleinman",
        body: "There once was a man from Kerpluckit...",
    }
])