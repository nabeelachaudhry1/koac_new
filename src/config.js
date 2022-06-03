var config = {
    style: 'mapbox://styles/koac/cl3pclbl7000114mdytnez8rj',
    accessToken: 'pk.eyJ1Ijoia29hYyIsImEiOiJjbDNwaWdjYTYwcmpmM2pzMWhoeWxpdWNjIn0.t7gGh8NfLm92jYI8BJ3lbA',
    showMarkers: true,
    markerColor: '#ed8134',
    theme: 'light',
    use3dTerrain: false,
    title: 'Kiyooka Ohe Arts Centre Sculpture Collection',
    subtitle: 'Walkthrough of our Sculptures by Great Artists',
    byline: 'By Nabila Chaudhry and Yui Tunagi',
    footer: 'Project for OSGEO ALBERTA.',
    chapters: [
        {
            id: 'slug-style-id', 
            alignment: 'left',
            hidden: false,
            title: 'Charles Boyce, Bridge',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/bridge%20stormy.jpeg?raw=true',
            description: 'Originally installed in the slough near the Kiyooka/Ohe home, and then relocated to the west field at KOAC, Bridge illustrates Charles “Bob” Boyce’s interest in systems and ratios. Boyce won a Canada Council grant in his graduate year for Bridge, most of which was completed at ACAD in 1980 where he was a student of Katie Ohe’s. Boyce was also interested in creating large scale sculptures that people can move within, and indeed, Bridge is best experienced not only observed from afar, but also by walking around and under its massive peaks. Born in Saskatchewan in 1955, Bob Boyce attended ACAD, University of Calgary and The Carving Studio in Carrara Italy. His sculpture Spire, a dynamic bright red piece at          the University of Calgary, won the National Sculpture Competition.',
            location: {
                center: [-114.2791944, 51.06936111],
                zoom: 12.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Michael Sandle, Queen of the Night',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/IMG_6312%5B12%5D.JPG?raw=true',
            description: 'Based on Kali, the Hindu goddess of love and revenge, Queen of the Night, a 9 foot tall, 2500 lb bronze sculpture, reflects Sandle’s musings about violence in women,related to his childhood experience with his own strong and sometimes violent mother. It symbolizes the female as a threat to the male ego, yet also as a goddess on her pedestal, an object of power and wonder to be worshiped. Created in 1999, there were two bronze castings of Queen of the Night; one is situated in London,England, and the other here at KOAC. Michael Sandle was born in Dorset, England in 1936. Originally a painter and a draftsman, he spent several years in art school in England, and gravitated toward sculpture in the 1960s. Sandle met Harry Kiyooka while traveling in Italy in the early 60s. Through this connection and friendship, Michael moved to Canada from 1970 to 1973 and was a visiting professor at the University of Calgary and University of British Columbia. From Canada, he moved to Germany and later became a professor of sculpture at an art school in Karlsruhe, Germany. Sandles’s family home was destroyed in the WWII bombing of England and his work explores themes of war, destruction and death.',
            location: {
                center: [-114.2776389, 51.07311111],
                zoom: 20.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ray Arnatt, Binder',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/Binder%20Ray%20Arnatt.jpeg?raw=true',
            description: 'Binder is an aluminum work, created by Ray Arnatt. The work was donated to KOAC unassembled and unpainted in 2016 by Ray’s wife when she returned to England after Ray passed away. Katie and Harry assembled and painted Binder (without instructions!) through a process of careful observation and thought. Arnatt was interested in art not only as the expression of the artist, but as a reflection of the observer. He felt it was imperative to spend time with a work of art, to interact with it. “...there are no singular properties of hardness, of night, of hate, of love, but that they are always properties of interaction. This is incredibly important, because what it means is that to our senses and to our reflections, we really do live in a completely seamless universe.” Binder gains increasing depth and dimension as the spectator spends the time, moves around the piece, and contemplates what he sees. Born in England in 1934, Ray Arnatt trained at the Oxford School of Art and the Royal College of Art, and taught at the Chelsea School of Art before moving to Canada. He taught sculpture at the University of Calgary for 23 years and was Acting Head of the Department of Art..',
            location: {
                center: [-114.2778889, 51.07027778],
                zoom: 15.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Kathryn Dobbin, Dandelion',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/dandelion.jpg?raw=true',
            description: 'Another former student of Katie Ohe’s in the 1980s, Kathryn Dobbin produced Dandelion in her 3rd year at Alberta College of Art (now Alberta University of the Arts). This kinetic piece was created with the assistance of another student, former welder and technician George Petticlerk, who built the anchors and did the bearing work. Dandelion gets progressively lighter as it moves skyward; the slab anchors provide weight and balance, the stem is welded rebar and the top is weld-tacked wires and very thin paddles, pounded into shallow cups to catch the wind and gently agitate the piece. In Kathryn’s words, “The Dandelion was a gift from the heavens; it came together as I built it, it told me the next move. I only made it.” It was donated to KOAC when Kathryn moved to Vancouver to work in the film industry, and later attended and graduated from Emily Carr University of Art and Design',
            location: {
                center: [-114.2774444, 51.06936111],
                zoom: 25.5,
                pitch: 80,
                bearing: -60.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ray Arnatt, Blocks',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/blocks%20ray%20arnatt.jpeg?raw=true',
            description: 'Like Binder, Blocks is a work donated by Arnatt’s wife when she returned to England following his death. It was originally destined to go near the Anderson Road overpass, but was rejected for that location due to concerns that it would distract drivers. The colourful pieces are fiberglass inside Sonotubes (cardboard reinforced with wood used in construction). They were repainted here at KOAC and installed in 2019. “I have often said that what artists do is self-portraiture. Now these are not self-portraits, not direct representations, they are self-portraits in that they are reflections of your psyche, personality, history, biology, whatever that feeds you, as well as all the external influences in your life - people you know, people you love, they all have an incredible impact on the work.” Ray Arnatt',
            location: {
                center: [-114.2795, 51.06905556],
                zoom: 25.5,
                pitch: 80,
                bearing: -60.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Roy Leadbeater, Steel Wave',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/IMG_6319%5B94%5D.JPG?raw=true',
            description: 'Steel Wave - which represents abstract wings and speaks to freedom - was commissioned by the CBC in 1978 for $250,000. It was built in Edmonton and brought to Calgary, where it sat outside the CBC building on Memorial Drive for decades. It was donated to KOAC in November of 2019 when the CBC moved locations. In need of restoration, the sculpture was sheltered under a huge plywood structure outfitted with space heaters while it was repaired and painted by Alex           Caldwell from December 2019 to March 2020. Roy Leadbeater was born in Derbyshire, England in 1928 and emigrated to Canada in  1953. He studied drawing at the Birmingham School of Art, and in 1957, after moving to Calgary, he visited Allied Arts Centre where he met and saw Katie Ohe sculpting. He had no studio, and in order to get one and a place to work, he had to register in Katie’s course. He created clay pieces, but often talked about wanting to work in steel, metal, something more substantial than clay. After learning welding alongside Katie at the Dominion Bridge Factory, Leadbeater moved to Edmonton where he built his reputation and installed many well known public sculptures. He received his first commission in 1967 for Expo 67 in Montreal and in the mid 1990s established Sculptcast Foundry in Edmonton. While managing a full-time career as a power   engineer and raising a family, Leadbeater pursued art in his off hours, sketching and sculpting at the kitchen table, painting, or creating large scale work at the Foundry. In 2001 he told the Edmonton Journal “When I’m working, a deep peace comes over me. It transcends everything I know and it’s a wonderful feeling.”',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Alex Caldwell, Birdbath',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/13%20Alex%20Caldwell%20brdbath.jpeg?raw=true',
            description: 'Birdbath originated when Harry Kiyooka asked Alex for a birdbath for the Kiyooka/Ohe home. At the time Alex and some others were part of the so-called Graceland Group - artists that were permitted to freely collect metal scraps for their artwork from a SE Calgary junkyard (named after the owner’s wife Grace). Birdbath is made entirely of recycled scrap materials - a stand made from pipe (on which you can still see lettering), disc shelves (for water and birdseed) that were formerly plowshares, and bearing balls from an old foundry in Exshaw (where bits of molten steel were dropped down a high tower and, as they revolved on the ride down, formed into solid spheres).',
            location: {
                center: [-114.2764722 , 51.06922222],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Claudia Cuesta, Zig Zag',
            image: '',
            description: 'In her 3rd or 4th year of studying sculpture under Katie Ohe, Claudia Cuesta created Zig Zag of welded steel, a modernistic, structural piece very reflective of the era in which it was made, the late 1980s. When Claudia headed to London, England for her Masters degree in 1990, she was unable to take the piece with her, and donated it to KOAC. It arrived in its unpainted, raw steel state, and was painted - by Katie - the yellow that it is today. Claudia Cuesta was a student of Katie Ohe’s at ACAD and today her partner is Urban Designer Bill Baker with whom she builds sculpture commissions all over North   America.',
            location: {
                center: [-114.277, 51.06919444],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'lright',
            hidden: false,
            title: 'Mich DeMuth, Earth Mother',
            image: '',
            description: 'Mich DeMuth was a student at ACAD at the same time as Alex Caldwell, and was also part of the “Graceland Group” of artists. As a student, he produced Earth Mother as a hollow structure constructed with ciment fondu at least 2 inches thick. It originally sat directly on the ground, and later was lifted onto blocks and slate, to prevent ants from making it their home. Its colouring is natural, and evolved over time on the piece, like lichen.',
            location: {
                center: [-114.2770833, 51.06927778],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Alex Caldwell, Wheelhouse',
            image: '',
            description: 'Two of Alex Caldwell’s Wheelhouses sit in the West Garden at KOAC. Like Birdbath in the East Garden, these pieces were created from scrap materials collected at Graceland ( a SE Calgary scrapyard named after the owner’s wife, Grace). Caldwell saw the potential of the concrete bricks and stacked them, without mortar, atop a cast iron base with cast iron wheels, setting the pyramid-shaped, mild steel “roof” at the very top.',
            location: {
                center: [-114.2771944,51.06925],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ellie Scheepens, Intertwine',
            image: '',
            description: 'Intertwine is a piece that former student of Katie Ohe’s, Ellie Scheepens, made while staying here at Katie and Harry’s home. Ellie was deeply influenced by Japanese sculpture, particularly the work of Isamu Noguchi. This piece is constructed of hand molded terrazzo - pink-hued quartz and white cement - around a flexible tube, finished with two intertwining snake heads at either end of one body. This work is particularly meaningful as Ellie was the victim of a house fire and had to endure several skin grafts. She says that the process of creating this piece here at Harry and Katie’s home was healing and transformational for her as she adjusted to her new physical reality, and embraced the metaphor of the snake shedding its skin.',
            location: {
                center: [-114.2770556, 51.06913889],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Katie Ohe, Mother and Turtle',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/mother%20&%20turtle.jpg?raw=true',
            description: 'This piece was Katie Ohe’s first welded sculpture, made of melted steel in 1967. She and a fellow artist were invited to learn welding at the Dominion Bridge Foundry in Calgary. Katie would finish teaching evening classes at the Allied Arts Centre, work at the foundry from 11pm to 2am, and return to Allied Arts to teach again in the morning. Mother and Turtle is an early piece, when she was still working subjectively, before her work became abstract and then conceptual. The form suggested the title, as she thought the “child” being carried by the mother looked like a turtle. Katie Ohe was born in Peers, AB in 1937, attended ACAD, the Montreal School of Art and Design, the Sculpture Centre in NY and the Fonderia Fabris in Verona, Italy. She taught sculpture at Alberta College of Art and Design (now Alberta University of the Arts) for 46 years, from 1970-2016. She is the recipient of many awards including ACAD Alumni Award, an Honorary Doctorate from U of C, Honorary Masters in Fine Arts from ACAD, and recently in 2019 she received both the Lieutenant Governor of Alberta Distinguished Artist Award and the Alberta Order of Excellence',
            location: {
                center: [-114.2765278, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Christian Eckart, Sphere, steel',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/sphere.jpg?raw=true',
            description: 'Made of individually welded ½” pieces of steel that belie their industrial associations and meld together into an inviting, round, organic shape, Sphere by Christian Eckart was created as his graduate piece at the former Alberta College of Art and Design, where he was a student of Katie Ohe’s. The concrete base upon which Sphere rests is integral to the work, providing a solid anchor for the piece as well as balance in scale and proportion. Sphere was originally donated to James Ulrick, a former ACAD painting instructor, who donated the piece to KOAC in 2016. Eckart was born in Calgary, Alberta in 1959. He now lives in Houston, Texas after 20 years in New York City, where he was an instructor at the School of Visual Arts. He attended the Alberta College of Art and Design (now the Alberta University of the Arts) from 1981 – 1984, then Hunter College, CUNY, New York from 1981 – 1984. He currently resides in Houston, Texas. Eckhart taught at The School of Visual Arts, New York from (1994 – 2002), The Glassell School of Museum of Fine Art (2003 – 2005), School of Art, University of Houston (2004 - 2005), Department of Art, Rice University, Houston (2005 – 2007). In 2009 he received the distinguished honor of being inducted into the Royal Canadian Academy of the Arts. His work is represented in many important private     and public permanent collections including those of The Guggenheim Museum, N.Y., The Museum of Modern Art, N.Y., Museum ModernerKunst, Vienna, The Chicago Art Institute, The Detroit Institute of Art, the Broad Art Foundation and The Art Gallery of Ontario as well as many others throughout North America, Europe and Asia',
            location: {
                center: [-114.2768889, 51.06894444],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Roy Leadbeater, Steel Wave',
            image: '',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Steel Wave - which represents abstract wings and speaks to freedom - was commissioned by the CBC in 1978 for $250,000. It was built in Edmonton and brought to Calgary, where it sat outside the CBC building on Memorial Drive for decades. It was donated to KOAC in November of 2019 when the CBC moved locations. In need of restoration, the sculpture was sheltered under a huge plywood structure outfitted with space heaters while it was repaired and painted by Alex           Caldwell from December 2019 to March 2020. Roy Leadbeater was born in Derbyshire, England in 1928 and emigrated to Canada in  1953. He studied drawing at the Birmingham School of Art, and in 1957, after moving to Calgary, he visited Allied Arts Centre where he met and saw Katie Ohe sculpting. He had no studio, and in order to get one and a place to work, he had to register in Katie’s course. He created clay pieces, but often talked about wanting to work in steel, metal, something more substantial than clay. After learning welding alongside Katie at the Dominion Bridge Factory, Leadbeater moved to Edmonton where he built his reputation and installed many well known public sculptures. He received his first commission in 1967 for Expo 67 in Montreal and in the mid 1990s established Sculptcast Foundry in Edmonton. While managing a full-time career as a power   engineer and raising a family, Leadbeater pursued art in his off hours, sketching and sculpting at the kitchen table, painting, or creating large scale work at the Foundry. In 2001 he told the Edmonton Journal “When I’m working, a deep peace comes over me. It transcends everything I know and it’s a wonderful feeling.”',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Roy Leadbeater, Steel Wave',
            image: 'https://github.com/yuitanagi/KOAC/blob/main/untitled%20folder/IMG_6319%5B94%5D.JPG?raw=true',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-114.2771944, 51.06919444 ],
                zoom: 20.5,
                pitch: 60,
                bearing: -50.2
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
