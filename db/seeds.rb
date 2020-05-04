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
        body: "How do I love thee? Let me count the ways.\n
            I love thee to the depth and breadth and height\n
            My soul can reach, when feeling out of sight\n
            For the ends of being and ideal grace.\n
            I love thee to the level of every day’s\n
            Most quiet need, by sun and candle-light.\n
            I love thee freely, as men strive for right.\n
            I love thee purely, as they turn from praise.\n
            I love thee with the passion put to use\n
            In my old griefs, and with my childhood’s faith.\n
            I love thee with a love I seemed to lose\n
            With my lost saints. I love thee with the breath,\n
            Smiles, tears, of all my life; and, if God choose,\n
            I shall but love thee better after death.\n",
        image_url: 'Elizabeth_Barrett_Browning.jpg',
    } ,
    {
        title: "Ozymandias",
        author: "Percy Shelley",
        body: "I met a traveller from an antique land,\n
            Who said—“Two vast and trunkless legs of stone\n
            Stand in the desert. . . . Near them, on the sand,\n
            Half sunk a shattered visage lies, whose frown,\n
            And wrinkled lip, and sneer of cold command,\n
            Tell that its sculptor well those passions read\n
            Which yet survive, stamped on these lifeless things,\n
            The hand that mocked them, and the heart that fed;\n
            And on the pedestal, these words appear:\n
            My name is Ozymandias, King of Kings;\n
            Look on my Works, ye Mighty, and despair!\n
            Nothing beside remains. Round the decay\n
            Of that colossal Wreck, boundless and bare\n
            The lone and level sands stretch far away.\n",
        image_url: 'Percy_Shelley.jpg'
    },
    {
        title: 'The Road Not Taken',
        author: 'Robert Frost',
        body: "Two roads diverged in a yellow wood,\n
            And sorry I could not travel both\n
            And be one traveler, long I stood\n
            And looked down one as far as I could\n
            To where it bent in the undergrowth;\n
            \n
            Then took the other, as just as fair,\n
            And having perhaps the better claim,\n
            Because it was grassy and wanted wear;\n
            Though as for that the passing there\n
            Had worn them really about the same,\n
            \n
            And both that morning equally lay\n
            In leaves no step had trodden black.\n
            Oh, I kept the first for another day!\n
            Yet knowing how way leads on to way,\n
            I doubted if I should ever come back.\n
            \n
            I shall be telling this with a sigh\n
            Somewhere ages and ages hence:\n
            Two roads diverged in a wood, and I—\n
            I took the one less traveled by,\n
            And that has made all the difference.",
        image_url: 'Edgar_Allan_Poe.jpg',
    },
    {
        title: "Jabberwocky",
        author: "Lewis Carroll",
        body: "Twas brillig, and the slithy toves\n
            Did gyre and gimble in the wabe:\n
            All mimsy were the borogoves,\n
            And the mome raths outgrabe.\n
            \n
            “Beware the Jabberwock, my son!\n
            The jaws that bite, the claws that catch!\n
            Beware the Jubjub bird, and shun\n
            The frumious Bandersnatch!”\n
            \n
            He took his vorpal sword in hand;\n
            Long time the manxome foe he sought—\n
            So rested he by the Tumtum tree\n
            And stood awhile in thought.\n
            \n
            And, as in uffish thought he stood,\n
            The Jabberwock, with eyes of flame,\n
            Came whiffling through the tulgey wood,\n
            And burbled as it came!\n
            \n
            One, two! One, two! And through and through\n
            The vorpal blade went snicker-snack!\n
            He left it dead, and with its head\n
            He went galumphing back.\n
            \n
            “And hast thou slain the Jabberwock?\n
            Come to my arms, my beamish boy!\n
            O frabjous day! Callooh! Callay!”\n
            He chortled in his joy.\n
            \n
            \'Twas brillig, and the slithy toves,\n
            Did gyre and gimble in the wabe:\n
            All mimsy were the borogoves,\n
            And the mome raths outgrabe.",
        image_url: 'Lewis_Carroll.jpg',
    },
])

annotations = Annotation.create([
    {
        body: 'DELETE THIS NEPHEW.....',
        upvote_count: -5,
        passage_id: passages[0].id,
        annotator_id: users[0].id,
        start_idx: 0,
        end_idx: 42,
    },
    {
        body: "I don't always make annotations, but when I do, they're not very useful.",
        upvote_count: 1,
        passage_id: passages[1].id,
        annotator_id: users[1].id,
        start_idx: 100,
        end_idx: 130,
    },
    {
        body: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[1].id,
        start_idx: 140,
        end_idx: 300,
    },
    {
        body: "My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next",
        upvote_count: 50,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
        start_idx: 400,
        end_idx: 450,
    },
    {
        body: "Everything the light touches is our kingdom.",
        upvote_count: 4,
        passage_id: passages[0].id,
        annotator_id: users[1].id,
        start_idx: 500,
        end_idx: 550,
    },
    {
        body: "I like chicken, I like liver, meow mix meow mix please deliver.",
        upvote_count: 10000,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
        start_idx: 560,
        end_idx: 750,
    },
    {
        body: "You put the lime in the coconut, you drink the bowl up",
        upvote_count: 71,
        passage_id: passages[2].id,
        annotator_id: users[2].id,
        start_idx: 800,
        end_idx: 1000,
    },
])