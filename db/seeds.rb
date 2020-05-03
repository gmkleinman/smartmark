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
        body: "How do I love thee? Let me count the ways.<br>
            I love thee to the depth and breadth and height<br>
            My soul can reach, when feeling out of sight<br>
            For the ends of being and ideal grace.<br>
            I love thee to the level of every day’s<br>
            Most quiet need, by sun and candle-light.<br>
            I love thee freely, as men strive for right.<br>
            I love thee purely, as they turn from praise.<br>
            I love thee with the passion put to use<br>
            In my old griefs, and with my childhood’s faith.<br>
            I love thee with a love I seemed to lose<br>
            With my lost saints. I love thee with the breath,<br>
            Smiles, tears, of all my life; and, if God choose,<br>
            I shall but love thee better after death.<br>",
        image_url: 'Elizabeth_Barrett_Browning.jpg',
    } ,
    {
        title: "Ozymandias",
        author: "Percy Shelley",
        body: 'I met a traveller from an antique land,<br>
            Who said—“Two vast and trunkless legs of stone<br>
            Stand in the desert. . . . Near them, on the sand,<br>
            Half sunk a shattered visage lies, whose frown,<br>
            And wrinkled lip, and sneer of cold command,<br>
            Tell that its sculptor well those passions read<br>
            Which yet survive, stamped on these lifeless things,<br>
            The hand that mocked them, and the heart that fed;<br>
            And on the pedestal, these words appear:<br>
            My name is Ozymandias, King of Kings;<br>
            Look on my Works, ye Mighty, and despair!<br>
            Nothing beside remains. Round the decay<br>
            Of that colossal Wreck, boundless and bare<br>
            The lone and level sands stretch far away.<br>',
        image_url: 'Percy_Shelley.jpg'
    },
    {
        title: 'The Road Not Taken',
        author: 'Robert Frost',
        body: 'Two roads diverged in a yellow wood,<br>
            And sorry I could not travel both<br>
            And be one traveler, long I stood<br>
            And looked down one as far as I could<br>
            To where it bent in the undergrowth;<br>
            <br>
            Then took the other, as just as fair,<br>
            And having perhaps the better claim,<br>
            Because it was grassy and wanted wear;<br>
            Though as for that the passing there<br>
            Had worn them really about the same,<br>
            <br>
            And both that morning equally lay<br>
            In leaves no step had trodden black.<br>
            Oh, I kept the first for another day!<br>
            Yet knowing how way leads on to way,<br>
            I doubted if I should ever come back.<br>
            <br>
            I shall be telling this with a sigh<br>
            Somewhere ages and ages hence:<br>
            Two roads diverged in a wood, and I—<br>
            I took the one less traveled by,<br>
            And that has made all the difference.',
        image_url: 'Edgar_Allan_Poe.jpg',
    },
    {
        title: "Jabberwocky",
        author: "Lewis Carroll",
        body: 'Twas brillig, and the slithy toves<br>
            Did gyre and gimble in the wabe:<br>
            All mimsy were the borogoves,<br>
            And the mome raths outgrabe.<br>
            <br>
            “Beware the Jabberwock, my son!<br>
            The jaws that bite, the claws that catch!<br>
            Beware the Jubjub bird, and shun<br>
            The frumious Bandersnatch!”<br>
            <br>
            He took his vorpal sword in hand;<br>
            Long time the manxome foe he sought—<br>
            So rested he by the Tumtum tree<br>
            And stood awhile in thought.<br>
            <br>
            And, as in uffish thought he stood,<br>
            The Jabberwock, with eyes of flame,<br>
            Came whiffling through the tulgey wood,<br>
            And burbled as it came!<br>
            <br>
            One, two! One, two! And through and through<br>
            The vorpal blade went snicker-snack!<br>
            He left it dead, and with its head<br>
            He went galumphing back.<br>
            <br>
            “And hast thou slain the Jabberwock?<br>
            Come to my arms, my beamish boy!<br>
            O frabjous day! Callooh! Callay!”<br>
            He chortled in his joy.<br>
            <br>
            \'Twas brillig, and the slithy toves,<br>
            Did gyre and gimble in the wabe:<br>
            All mimsy were the borogoves,<br>
            And the mome raths outgrabe.',
        image_url: 'Lewis_Carroll.jpg',
    },
])

annotations = Annotation.create([
    {
        body: 'DELETE THIS NEPHEW.....',
        upvote_count: 0,
        passage_id: passages[0].id,
        annotator_id: users[0].id,
        start_idx: 0,
        end_idx: 20,
    },
    {
        body: "I don't always make annotations, but when I do, they're not very useful.",
        upvote_count: 0,
        passage_id: passages[1].id,
        annotator_id: users[1].id,
        start_idx: 150,
        end_idx: 160,
    },
    {
        body: "You're awesome! Stay awesome!",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[1].id,
        start_idx: 120,
        end_idx: 140,
    },
    {
        body: "Yo dawg I heard you like annotations. That's it tho.",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
        start_idx: 80,
        end_idx: 100,
    },
    {
        body: "Everything the light touches is our kingdom.",
        upvote_count: 0,
        passage_id: passages[0].id,
        annotator_id: users[1].id,
        start_idx: 42,
        end_idx: 55,
    },
    {
        body: "I like chicken, I like liver, meow mix meow mix please deliver",
        upvote_count: 10000,
        passage_id: passages[2].id,
        annotator_id: users[0].id,
        start_idx: 42,
        end_idx: 55,
    },
    {
        body: "You put the lime in the coconut, you drink the bowl up",
        upvote_count: 0,
        passage_id: passages[2].id,
        annotator_id: users[2].id,
        start_idx: 30,
        end_idx: 40,
    },
])