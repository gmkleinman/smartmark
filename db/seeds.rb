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
        image_url: 'robert_frost.jpg',
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
    {
        title: "The Rum Tum Tugger",
        author: "T.S. Eliot",
        body: "The Rum Tum Tugger is a Curious Cat:\n
            If you offer him pheasant he would rather have grouse.\n
            If you put him in a house he would much prefer a flat,\n
            If you put him in a flat then he'd rather have a house.\n
            If you set him on a mouse then he only wants a rat,\n
            If you set him on a rat then he'd rather chase a mouse.\n
            Yes the Rum Tum Tugger is a Curious Cat--\n
            And there isn't any call for me to shout it:\n
            For he will do\n
            As he do do\n
            And there's no doing anything about it!\n
            \n
            The Rum Tum Tugger is a terrible bore:\n
            When you let him in, then he wants to be out;\n
            He's always on the wrong side of every door,\n
            And as soon as he's at home, then he'd like to get about.\n
            He likes to lie in the bureau drawer,\n
            But he makes such a fuss if he can't get out.\n
            \n
            Yes the Rum Tum Tugger is a Curious Cat--\n
            And there isn't any use for you to doubt it:\n
            For he will do\n
            As he do do\n
            And there's no doing anything about it!\n
            \n
            The Rum Tum Tugger is a curious beast:\n
            His disobliging ways are a matter of habit.\n
            If you offer him fish then he always wants a feast;\n
            When there isn't any fish then he won't eat rabbit.\n
            If you offer him cream then he sniffs and sneers,\n
            For he only likes what he finds for himself;\n
            \n
            So you'll catch him in it right up to the ears,\n
            If you put it away on the larder shelf.\n
            The Rum Tum Tugger is artful and knowing,\n
            The Rum Tum Tugger doesn't care for a cuddle;\n
            But he'll leap on your lap in the middle of your sewing,\n
            For there's nothing he enjoys like a horrible muddle.\n
            Yes the Rum Tum Tugger is a Curious Cat--\n
            And there isn't any need for me to spout it:\n
            For he will do\n
            As he do do\n
            And theres no doing anything about it!\n",
        image_url: 'ts_eliot.jpg',
    },
])

annotations = Annotation.create([
    {
        body: "Omg I just love what she's saying here, it's the reason I started my poetry farm. It's quite beautiful, with pages running all over the place. They get lonely sometimes though, probably similar to how Ms. Browning was feeling.",
        upvote_count: 15,
        passage_id: passages[1].id,
        annotator_id: users[0].id,
        start_idx: 219,
        end_idx: 311,
    },
    {
        body: "This is probably a deep poem about the mortality of man and how time makes fools of us all, but all I can think is how great of a narrator Leonard Nimoy was for Civilization IV.",
        upvote_count: 1,
        passage_id: passages[0].id,
        annotator_id: users[1].id,
        start_idx: 523,
        end_idx: 613,
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
        start_idx: 352,
        end_idx: 365,
    },
    {
        body: "Look, you can't just make words up. If everybody made words up, we'd never be able to discuss anything. Unless everybody made the same words up and they had the same meanings, and we all knew it because we're telepathic or something. That's cromulent enough.",
        upvote_count: 4,
        passage_id: passages[3].id,
        annotator_id: users[1].id,
        start_idx: 0,
        end_idx: 159,
    },
    # {
    #     body: "I like chicken, I like liver, meow mix meow mix please deliver.",
    #     upvote_count: 10000,
    #     passage_id: passages[2].id,
    #     annotator_id: users[0].id,
    #     start_idx: 560,
    #     end_idx: 750,
    # },
    # {
    #     body: "You put the lime in the coconut, you drink the bowl up",
    #     upvote_count: 71,
    #     passage_id: passages[2].id,
    #     annotator_id: users[2].id,
    #     start_idx: 800,
    #     end_idx: 1000,
    # },
])