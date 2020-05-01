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
        title: "Sonnets No. 43",
        author: "Elizabeth Barrett Browning",
        body: ["How do I love thee? Let me count the ways.",
            "I love thee to the depth and breadth and height",
            "My soul can reach, when feeling out of sight",
            "For the ends of being and ideal grace.",
            "I love thee to the level of every day’s",
            "Most quiet need, by sun and candle-light.",
            "I love thee freely, as men strive for right.",
            "I love thee purely, as they turn from praise.",
            "I love thee with the passion put to use",
            "In my old griefs, and with my childhood’s faith.",
            "I love thee with a love I seemed to lose",
            "With my lost saints. I love thee with the breath,",
            "Smiles, tears, of all my life; and, if God choose,",
            "I shall but love thee better after death.,"],
        image_url: 'Elizabeth_Barrett_Browning.jpg',
    },
    {
        title: "Ozymandias",
        author: "Percy Shelley",
        body: ['I met a traveller from an antique land,',
            'Who said—“Two vast and trunkless legs of stone',
            'Stand in the desert. . . . Near them, on the sand,',
            'Half sunk a shattered visage lies, whose frown,',
            'And wrinkled lip, and sneer of cold command,',
            'Tell that its sculptor well those passions read',
            'Which yet survive, stamped on these lifeless things,',
            'The hand that mocked them, and the heart that fed;',
            'And on the pedestal, these words appear:',
            'My name is Ozymandias, King of Kings;',
            'Look on my Works, ye Mighty, and despair!',
            'Nothing beside remains. Round the decay',
            'Of that colossal Wreck, boundless and bare',
            'The lone and level sands stretch far away.'],
        image_url: 'Percy_Shelley.jpg',
    },
    {
        title: 'The Road Not Taken',
        author: 'Robert Frost',
        body: ['Two roads diverged in a yellow wood,',
            'And sorry I could not travel both',
            'And be one traveler, long I stood',
            'And looked down one as far as I could',
            'To where it bent in the undergrowth;',
            '',
            'Then took the other, as just as fair,',
            'And having perhaps the better claim,',
            'Because it was grassy and wanted wear;',
            'Though as for that the passing there',
            'Had worn them really about the same,',
            '',
            'And both that morning equally lay',
            'In leaves no step had trodden black.',
            'Oh, I kept the first for another day!',
            'Yet knowing how way leads on to way,',
            'I doubted if I should ever come back.',
            '',
            'I shall be telling this with a sigh',
            'Somewhere ages and ages hence:',
            'Two roads diverged in a wood, and I—',
            'I took the one less traveled by,',
            'And that has made all the difference.'],
        image_url: 'Edgar_Allan_Poe.jpg',
    },
    {
        title: "Jabberwocky",
        author: "Lewis Carroll",
        body: ['Twas brillig, and the slithy toves',
            'Did gyre and gimble in the wabe:',
            'All mimsy were the borogoves,',
            'And the mome raths outgrabe.',
            '',
            '“Beware the Jabberwock, my son!',
            'The jaws that bite, the claws that catch!',
            'Beware the Jubjub bird, and shun',
            'The frumious Bandersnatch!”',
            '',
            'He took his vorpal sword in hand;',
            'Long time the manxome foe he sought—',
            'So rested he by the Tumtum tree',
            'And stood awhile in thought.',
            '',
            'And, as in uffish thought he stood,',
            'The Jabberwock, with eyes of flame,',
            'Came whiffling through the tulgey wood,',
            'And burbled as it came!',
            '',
            'One, two! One, two! And through and through',
            'The vorpal blade went snicker-snack!',
            'He left it dead, and with its head',
            'He went galumphing back.',
            '',
            '“And hast thou slain the Jabberwock?',
            'Come to my arms, my beamish boy!',
            'O frabjous day! Callooh! Callay!”',
            'He chortled in his joy.',
            '',
            "\'Twas brillig, and the slithy toves",
            'Did gyre and gimble in the wabe:',
            'All mimsy were the borogoves,',
            'And the mome raths outgrabe.'],
        image_url: 'Lewis_Carroll.jpg',
    },
])

annotations = Annotation.create([
    {
        body: 'DELETE THIS NEPHEW.....',
        upvote_count: 0,
        passage_id: passages[0].id,
        annotator_id: users[0].id,
    },
    {
        body: "I don't always make annotations, but when I do, they're not very useful.",
        upvote_count: 0,
        passage_id: passages[1].id,
        annotator_id: users[1].id,
    },
    {
        body: "You're awesome! Stay awesome!",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[1].id,
    },
    {
        body: "Yo dawg I heard you like annotations. That's it tho.",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
    },
    {
        body: "Everything the light touches is our kingdom.",
        upvote_count: 0,
        passage_id: passages[0].id,
        annotator_id: users[1].id,
    },
    {
        body: "I like chicken, I like liver, meow mix meow mix please deliver",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
    },
    {
        body: "You put the lime in the coconut, you drink the bowl up",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[2].id,
    },
])