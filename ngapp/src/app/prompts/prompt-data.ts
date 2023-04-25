

//db.prompts.insert({"type":"stateExam", "level":"lcol", "prompt":"Tháinig an oíche mhór. Bhí an seó tallainne ag tosú agus bhí mé ag dul ar an stáitse… (2019)", "lastUpdated": new Date()})


export const PROMPT_DATA = {
    'state-exam': {
        sep_jc_choices: [
            "Nuair a chuala mo thuismitheoirí an scéal bhí siad ar buile liom… (2019)",
            "Eachtra ghreannmhar a tharla le linn turas scoile. (2019)",
            "Ní fhéadfainn é a chreidiúint nuair a chuala mé an scéal…   (2018)",
            "Eachtra a tharla ar mo shlí abhaile ón scoil. (2018)",
            "Ní raibh ach dhá nóiméad fágtha sa chluiche. Bhíomar chun deiridh.   Ansin tháinig an liathróid i mo threo…  (2017)",
            "An uair a chuaigh mé féin agus mo chara ar strae i gcathair Bhaile Átha Cliath. (2017)"
        ],
        sep_lcol_choices: [
            "Léigh mé an téacs ón stáisiún raidió. 'Tá an chéad duais sa chomórtas buaite agat.'   Níor chreid mé mo shúile (2021)",
            "Bhí mé féin agus mo chara amuigh ag rith. Go tobann, thit mo chara i laige … (2021)",
            "Dhúisigh mé i lár na hoíche. Bhí mé i leaba i mbarda ospidéil… (2020)",
            "Bhuail m'fhón póca. D'fhreagair mé an fón… (2020)",
            "Bhí mé féin agus mo chara san aerfort. Bhíomar ag súil go mór leis an turas go Páras. Chuir mé mo lámh i mo mhála. Ní raibh mo phas ná mo chuid airgid ann… (2019)",
            "Tháinig an oíche mhór. Bhí an seó tallainne ag tosú agus bhí mé ag dul ar an stáitse… (2019)"
        ],
        sep_lchl_choices: [
            "Crógacht. (2021)",
            "Ar scáth a chéile a mhaireann na daoine. (2021)",
            "Bíonn an fhírinne searbh. (2020)",
            "Suaimhneas. (2020)",
            "Faoiseamh. (2019)",
            "Ní thagann ciall roimh aois. (2019)"
        ]
    },
    'proverb': {
        munster: [
            "Is minic a bhíonn ciúin ciontach",
            "Tosnú maith leath na hoibre",
            "Níor tógadh an Róimh in aon ló",
            "Aithníonn ciaróg ciaróg eile",
            "Aithnítear cara i gcruatan",
            "An té nach bhfuil láidir ní foláir dó a bheith glic",
            "An rud is annamh is iontach",
            "Is ar mhaithe leis féin a dhéanann an cat crónán",
            "Bíonn an fhírinne searbh",
            "Bíonn blas ar an mbeagán",
            "Bíonn dhá insint ar gach scéal",
            "Cuir síoda ar ghabhar agus beidh sé ina ghabhar i gcónaí",
            "Dá fhad é an lá tagann an oíche",
            "Dá olc é Séamas is measa é ina éagmais",
            "Giorraíonn beirt bóthar",
            "De réir a chéile a thógtar na caisleáin",
            "I dtír na ndall, is rí é fear na leathshúile",
            "Is ait an mac an saol",
            "Is ag tuile is ag trá a chaitheann an taoide an lá",
            "Is binn béal ina thost",
            "Is fada an bóthar nach bhfuil casadh air",
            "Is fear an tsláinte ná na táinte",
            "Is geal leis an bhfiach dubh a ghearrcaigh féin",
            "Is glas iad na cnoic i bhfad uainn",
            "Is maith an scathán súil charad",
            "Is maith an Scéalaí an aimsir",
            "Is trom an t-ualach an t-aineolas",
            "Is trom an t-ualach an leisce",
            "Is minic a bhris béal duine a shórn",
            "Is í an chiall cheannaithe an chiall is fearr",
            "Múineann gá seift",
            "Nuair a bhíonn an cat amuigh bíonn na lucha ag súgradh",        
            "Ná tabhair breith ar an gcéad scéal",
            "Ní bhíonn in an ní ach seal",
            "Ní dhéanfadh an saol capall ráis d'asal",
            "Ní lia duine ná tuairim",
            "Ní mar a shíltear a bhítear",
            "Níl an tinteán mar do thinteán féin",
            "Ní neart go cur le chéile",
            "Ní bhíonn saoi gan locht",
            "Níl tuile dá mhéad nach dtránn",
            "Seachain fearg ó fhear na foighne",
            "Taithí a dhéanann an mháistreacht",
            "Tús maith leath na hoibre",
          ],     
        connacht: [
            "Is fada an bóthar nach bhfuil casadh ann",
            "Namhaid an cheird gan í a fhoghlaim",
            "Ní bhíonn in aon rud ach seal"
        ],
        ulster: [
            "Bíonn blas ar an bheagán",
            "Cha raibh séasúr fliuch gann riamh",
            "An rud a scríobhas an púca, léann sé féin é"
        ]

    },
    'lara': [
        "Is ar oileán Thoraí a bhí a dhún ag Balor…",
        "Chaith Naomh Pádraig an lá sin i bhfochair Chaoilte, gur mhínigh sé soiscéal Nimhe dó…",
        "Colorado a bhí ar an tseanduine seo…",
        "An Druma Mór: Bean bhocht a bhí ina cónaí léi féin ba ea Beagaide…",
        "Mar a Baisteadh Fionn: Bhí rí ann fadó go raibh Éire faoina smacht aige…",
        "Fairceallach Fhinn Mhic Chumhaill: Lá dá raibh bhí Fionn agus na Fianna ag fiach…",
        "Pósadh ar an mBlascaod Mór: Nuair a bhídís chun pósadh san oileán fadó cleamhnaistí a dheintí…",
        "An seilide agus an míol mór: Baineann an scéal seo le seilidín glic…",
        "An Prionsa Beag: Nuair a bhí mé sé  bliana d’aois chonaic mé, uair amháin, pictiúr iontach i leabhar i dtaobh na foraoise darbh ainm ‘Scéalta fíora’…",
        "Cinnín Óir agus na Trí Bhéar: Lá amháin rinne Mamaí Béar leite…",
        "Na Trí Mhuicín: Bhí na trí mhuicín ina suí go moch ar maidin…",
        "Cochaillín Dearg: Bhí Cochaillín Dearg ina suí go moch ar maidin…",
        "An Píobaire Breac: I mbaile álainn Hamelin bhí gach duine sona sásta…",
        "An Lacha Bheag Ghránna: Bhí seacht n-uibhe sa nead ag Mamaí Lacha…",
        "Na Trí Ghabhar Chliste: ‘Tá ocras orm,’arsa Séimín, an gabhar beag…",
        "An Tornapa Mór Millteach: ‘Ó, céard seo?’ arsa an feirmeoir…"
      ],
    'story': {
        sep_jc_choices: {
            character: ['Síobhaire', 'Tuismitheoir buartha', 'Cúléisteoir', 'Piocaire Póca'],
            setting: ['Reilig', 'Seanfhoirgnemah', 'Ardaitheoir Sáinnithe', 'Seomra Ranga'],
            theme: ['Madra ar Iarraidh', 'Botún ar léarscáil', 'Scéál grinn... a théann ró-fhada', 'Geallúint nár comhlíonadh'],  
          },
        sep_lcol_choices: {
            character: ['Comharsa chantalach', 'Feighlí leanaí', 'Tiománaí leoraí'],
            setting: ['Forhalla óstáin', 'Taobh an chnoic', 'An mórbhealach'],
            theme: ['Tine sa chistin', 'Fón goidte', 'Gearán a éiríonn an-dáiríre'],
        },
        sep_lchl_choices: {
            character: ['Duine Cáiliúil', 'Fear Crosta', 'Aintín atá as a Meabhair'],
            setting: ['An Gairdín Cúl', 'Lár na Cathrach', 'Cúl an bhus'],
            theme: ['Pléisiúr Dé', 'Nathair Nimhe ag Imeacht Thart sa Cheantar', 'Iarnóin deas Suimhneach'],
        }
    },
    'general': [
        "Múchadh na soilse agus ní raibh torann ar bith le cloisteáil…",
        "Bhí an stoirm ag éirí agus d'oscail an spéir…",
        "Níor tháinig lá chomh breá leis riamh i gcuimhne na ndaoine. Bhíomar díreach réidh le dul amach an doras…",
        "Mo bhreithlá a bhí ann ach ní dúirt aon duine aon rud liom. Bhí an teach dorcha agus mé ag dul isteach an doras…",
        "Bhíomar go léir ar bís sa bhus agus sinn ar ár slí go dtí an ceolchoirm mór…",
        "Bhí mé ag fanacht leis an mbus nuair a chonaic mé chugam an bhean seo…",
        "Thug mé cuireadh do chúpla cara teacht go dtí mo chóisir ach scaip an scéal agus…",
        "Bhí mo thicéad ar an bhfón agam agus mé ar an mbealach go dtí an t-aerfort…",
        "Bhíomar ag tnúth leis an gcluiche ar feadh i bhfad. Ansin bhí sé réidh le tosú…",
        "Bhí leisce orm an chéad oíche ag dul síos go dtí an club nua liom féin…",
        "Bhí mo chairde go léir ag coinneáil amach uaim. Is ar éigin a bheannaigh siad dom…",
        "Bhí mé reidh chun dul go dtí an scrúdú nuair a thit mé síos an staighre…",
        "Bhí airgead agam agus bhí mé le dul ag siopadóireacht le mo chara i lár an bhaile…",
        "Chuaigh mé ag rothaíocht trí na cosáin sa choill liom féin…",
        "Bhí mé chun tosú sa scoil nua is gan aithne agam ar dhuine ar bith a bhí san áit…",
        "Bhí lár na cathrach dubh le daoine an lá seo agus bhí gach duine ar bís…",
        "Ní raibh aon dul as agam ach an fhírinne lom a insint…",
        "Bhí sé fós ina gheimhreadh ach bhí an tráthnona go deas agus bheartaíos turas a dhéanamh ar mo rothar…",
        "Nach orm a bhí an ríméid agus mé ag dul amach as an siopa le mo ghluaisrothar nua…",
        "Bheartaigh ceathrar againn go rachaimis ag campáil don deireadh seachtaine…",
        "Bhí leisce orm ag dul ar an gcúrsa Gaeltachta liom féin ach…",
        "Is ag dul abhaile ón scoil a bhí mé nuair a thainig mé ar an timpiste…",
        "Bhí mé cinnte go raibh mo fhón i mo phóca agam ach…",
        "Bhí an samhradh ba fhearr riamh agam ach anois bhí sé ag teacht chun deiridh…",
        "Ní raibh mé ag tnúth leis an Nollaig ach ní mar a shíltear a bhítear…",
        "Ní raibh mé ar laethanta saoire thar lear ó bhí mé i mo pháiste beag. Bheadh sé difriúil an uair seo…",
        "Ní raibh fonn oibre ar aon duine eile sa rang ach bhí mise ag iarraidh mo dhícheall a dhéanamh…",
        "Aithríodh mo shaol bun os cionn ar fad nuair a tháinig cailín nua isteach sa scoil…",
        "Bhí me ag réiteach do mo chéad cheacht tiomána agus is mé a bhí neirbhíseach…",
        "B'fhearr liomsa an lá a chaitheamh sa bhaile ag léamh liom féin ach cuireadh brú orm dul amach le cúpla cara…",
        "Ní dhéanfaidh mé dearmad go brách ar an lá a d'éalaigh an tíogar ón sorcas…",
        "Bhí oíche go maidin le bheith againn ach ní raibh a fhios againn gur i stáisiún na nGardaí a chaithfimis an chuid is mó di….",
        "Bheartaíomar cóisir a eagrú dár gcara dá breithlá ach bhí sé deacair an plean a choimeád ina rún…",
        "Thug mé airgead do bhean a bhí ag lorg déirce ar thaobh na sráide agus thosaigh sí ag caint liom…",
        "Bhraith mé ní ba shona ná riamh nuair a bhí an dianghlasáil againn. Ní raibh orm bualadh le haon duine…",
        "Tháinig col ceathrar liom abhaile as Meiriceá. Bhí ormsa an ceantar ina bhfuilimid a thaispeáint dó…",
        "Ní dhéanfaidh mé dearmad ar an lá a chaith mé ag thabhairt aire do pháistí na gcomharsan…",
        "Ba lá mór é nuair a bhí an scoil againne ag imirt sa chluiche ceannais …",
        "An lá a cuireadh an príomhoide faoi ghlas san íoslann sa scoil.",
        "Bhí an t-ádh ormsa an lá a bhuail an gluaisrothar isteach trí dhoras na scoile…",
      ],
    'part-of-speech': {
        noun: [
            {
                ga: 'an t-aerfort',
                en: 'the airport' 
            },
            {
                ga: 'an teach',
                en: 'the house' 
            },
            {
                ga: 'an cárta',
                en: 'the card' 
            },
            // 'an t-asal',
            // 'an t-ábhar',
            // 'an t-aerfort',
            // 'an t-ádh',
            // 'an t-am',
            // 'an t-amadán',
            // 'an t-airgead',
            // 'an t-amhrán',
            // 'an t-allas',
            // 'an t-árasán',
            // 'an t-áthas',
            // 'an bád',
            // 'an bord',
            // 'an botún',
            // 'an bóthar',
            // 'an bus',
            // 'an banc',
            // 'an béal',
            // 'an blaincéad',
            // 'an boladh',
            // 'an braon',
            // 'an brat',
            // 'an bréagán',
            // 'an broc',
            // 'an buicéad',
            // 'an buidéal',
            // 'an caisleán',
            // 'an capall',
            // 'an ceantar',
            // 'an clog',
            // 'an cnoc',
            // 'an crann',
            // 'an cupán',
            // 'an caladh',
            // 'an céad',
            // 'an cosán',
            // 'an captaen',
            // 'an camán',
            // 'an cat',
            // 'an ceol',
            // 'an ciorcal',
            // 'an ciseán',
            // 'an citeal',
            // 'an ciúnas',
            // 'an cogadh',
            // 'an coileach',
            // 'an coileán',
            // 'an colúr',
            // 'an corp',
            // 'an dán',
            // 'an t-éan',
            // 'an fear',
            // 'an gadhar',
            // 'an focal',
            // 'an gearán',
            // 'an t-inneall',
            // 'an t-óstán',
            // 'an peann',
            // 'an portach',
            // 'an poll',
            // 'an port',
            // 'an post',
            // 'an rothar',
            // 'an scannán	',
            // 'an Taoiseach',
            // 'an t-údar',
            // 'an Stáit',
            // 'an tarbh',
            // 'an scéal',
            // 'an tinteán',
            // 'an sionnach',
            // 'an tóramh',
            // 'an sliotar',
        ],
        verb: [
            {
                ga: 'Téigh',
                en: 'to go' 
            },
            {
                ga: 'Beir',
                en: 'to catch' 
            },
            {
                ga: 'Déan',
                en: 'to do' 
            },
            // 'Abair',
            // 'Bain',
            // 'Béic',
            // 'Beir',
            // 'Bí',
            // 'Blais',
            // 'Bog',
            // 'Bris',
            // 'Bris',
            // 'Brúigh',
            // 'Buaigh',
            // 'Buail',
            // 'Caill',
            // 'Caith',
            // 'Can',
            // 'Cas',
            // 'Clois',
            // 'Cnag',
            // 'Creid',
            // 'Cuir',
            // 'Cum',
            // 'Déan',
            // 'Díol',
            // 'Dóigh',
            // 'Doirt',
            // 'Dreap',
            // 'Dún',
            // 'Éist',
            // 'Fág',
            // 'Faigh',
            // 'Fan',
            // 'Féach',
            // 'Feic',
            // 'Geall',
            // 'Gearr',
            // 'Glan',
            // 'Glaoigh',
            // 'Gluais',
            // 'Iarr',
            // 'Íoc',
            // 'Iompair',
            // 'Ith',
            // 'Labhair',
            // 'Las',
            // 'Leag',
            // 'Lean',
            // 'Léigh',
            // 'Léim',
            // 'Lig',
            // 'Líon',
            // 'Measc',
            // 'Mol',
            // 'Múch',
            // 'Ól',
            // 'Pioc',
            // 'Pioc',
            // 'Póg',
            // 'Preab',
            // 'Reoigh',
            // 'Rith',
            // 'Roinn',
            // 'Sábháil',
            // 'Scar',
            // 'Sciorr',
            // 'Scríobh',
            // 'Scrios',
            // 'Scuab',
            // 'seas',
            // 'séid',
            // 'Seinn',
            // 'seol',
            // 'Sín',
            // 'Siúl',
            // 'Sroich',
            // 'Suigh',
            // 'Tabhair',
            // 'Taifead',
            // 'Taispeáin',
            // 'Tar',
            // 'Téigh',
            // 'Teip',
            // 'Tiomáin',
            // 'Tit',
            // 'Tóg',
            // 'Tuig',
            // 'Aistrigh',
            // 'Ardaigh',
            // 'Athraigh',
            // 'Bagair',
            // 'Báigh',
            // 'Bailigh',
            // 'Bailigh',
            // 'Beannaigh',
            // 'Brostaigh',
            // 'Bunaigh',
            // 'Cabhraigh',
            // 'Ceangail',
            // 'Ceannaigh',
            // 'Ceartaigh',
            // 'Cinntigh',
            // 'Ciontaigh',
            // 'Codail',
            // 'Comhairligh',
            // 'Críochnaigh',
            // 'Cuardaigh',
            // 'Cuidigh',
            // 'Cuimil',
            // 'Deisigh',
            // 'Diúltaigh',
            // 'Éalaigh',
            // 'Éirigh',
            // 'Eitil',
            // 'Feabhsaigh',
            // 'Foghlaim',
            // 'Fostaigh',
            // 'Imigh',
            // 'Inis',
            // 'Iompaigh',
            // 'Léirigh',
            // 'Ordaigh',
            // 'Oscail',
            // 'Réitigh',
            // 'Roghnaigh',
            // 'Sleamhnaigh',
            // 'Smaoinigh',
            // 'Socraigh',
            // 'Taiste',
        ],
        adjective: [
            {
                ga: 'deas',
                en: 'nice' 
            },
            {
                ga: 'mall',
                en: 'slow' 
            },
            {
                ga: 'tapa',
                en: 'fast' 
            },
            // 'beag',
            // 'mór',
            // 'maith',
            // 'dubh',
            // 'bán',
            // 'dearg',
            // 'buí',
            // 'bándearg',
            // 'glas',
            // 'uaine',
            // 'gorm',
            // 'ard',
            // 'íseal',
            // 'lán',
            // 'folamh',
            // 'ciúin',
            // 'cainteach',
            // 'costasach',
            // 'saor',
            // 'cliste',
            // 'dúr',
            // 'cumasach',
            // 'ceolmhar',
            // 'cneasta',
            // 'cineálta',
            // 'trodach',
            // 'maol',
            // 'gruaigeach',
            // 'saibhir',
            // 'bocht',
            // 'leathan ',
            // 'caol',
            // 'óg',
            // 'aosta',
            // 'greannmhar',
            // 'dáiríre',
            // 'maith ',
            // 'olc',
            // 'folamh',
            // 'fada',
            // 'gearr',
            // 'tirim',
            // 'fliuch',
            // 'grianmhar',
            // 'scamallach',
            // 'milis',
            // 'ceomhar',
            // 'searbh',
            // 'sean',
            // 'láidir',
            // 'lag',
            // 'stuama',
            // 'deas',
            // 'téagartha',
            // 'sásta',
            // 'míshásta',
            // 'dorcha',
            // 'geal',
            // 'fuar',
            // 'te',
            // 'dóite',
            // 'cróga',
            // 'leisciúil',
            // 'gnóthach',
            // 'fonnmhar',
            // 'glic',
            // 'gníomhach',
            // 'stadach',
            // 'béasach',
            // 'uaigneach',
            // 'buíoch',
            // 'dóchasach',
            // 'álainn',
            // 'uafásach',
            // 'amaideach',
            // 'aineola',
        ],
        pronoun: [
            {
                ga: 'mé',
                en: 'I' 
            },
            {
                ga: 'tú',
                en: 'you' 
            },
            {
                ga: 'sé',
                en: 'he' 
            },
            // 'Mé',
            // 'Tú',
            // 'Sé',
            // 'Sí',
            // 'Sinn',
            // 'Sibh',
            // 'Siad',
            // 'Muid',
            // 'agam',
            // 'agat',
            // 'aige',
            // 'aici',
            // 'againn',
            // 'agaibh',
            // 'acu',
            // 'orm',
            // 'ort',
            // 'air',
            // 'uirthi',
            // 'orainn',
            // 'oraibh',
            // 'orthu',
            // 'asam',
            // 'asat',
            // 'as',
            // 'aisti',
            // 'asainn',
            // 'asaibh',
            // 'astu',
            // 'díom',
            // 'díot',
            // 'de',
            // 'di',
            // 'dínn',
            // 'díbh',
            // 'díobh',
            // 'dom',
            // 'duit',
            // 'dó',
            // 'di',
            // 'dúinn',
            // 'daoibh',
            // 'dóibh',
            // 'fúm',
            // 'fút',
            // 'faoi',
            // 'fúithi',
            // 'fúinn',
            // 'fúibh',
            // 'fúthu',
            // 'ionam',
            // 'ionat',
            // 'ann',
            // 'inti',
            // 'ionainn',
            // 'ionaibh',
            // 'iontu',
            // 'eadrainn',
            // 'eadraibh',
            // 'eatarthu',
            // 'liom',
            // 'leat',
            // 'leis',
            // 'léi',
            // 'linn',
            // 'libh',
            // 'leo',
            // 'uiam',
            // 'uait',
            // 'uaidh',
            // 'uaithi',
            // 'uainn',
            // 'uaibh',
            // 'uathu',
            // 'romham',
            // 'romhat',
            // 'roimhe',
            // 'roimpi',
            // 'romhainn',
            // 'romhaibh',
            // 'rompu',
            // 'tharam',
            // 'tharat',
            // 'thairis',
            // 'thairsti',
            // 'tharainn',
            // 'tharaibh',
            // 'tharstu',
        ],
        // determiner: [
        //     'seo', 'a', 'cé', 'an'
        // ],
        article: [
            {
                ga: 'An (masculine)',
                en: 'the' 
            },
            {
                ga: 'An (feminine)',
                en: 'the' 
            },
            {
                ga: 'Na (masculine)',
                en: 'the' 
            },
            // 'an', 'na'
        ],
        adverb: [
            {
                ga: 'go mall',
                en: 'slowly' 
            },
            {
                ga: 'go tapa',
                en: 'quickly' 
            },
            {
                ga: 'go róluath',
                en: 'very fast' 
            },
            // 'inniu',
            // 'inné',
            // 'amárach',
            // 'anois',
            // 'fadó',
            // 'i mbliana',
            // 'ar maidin',
            // 'anseo',
            // 'ansin',
            // 'thuaidh',
            // 'theas',
            // 'soir',
            // 'siar',
            // 'suas',
            // 'síos',
            // 'amach',
            // 'isteach',
            // 'go ciúin',
            // 'go héasca',
            // 'os ard',
            // 'os íseal',
            // 'in éineacht',
            // 'ar buile',
            // 'go',
            // 'gur',
            // 'ní',
            // 'níór',
            // 'nach ',
            // 'nár',
            // 'beagnach',
            // 'freisin',
            // 'ar an bpointe',
            // 'ar éigean',
            // 'dáiríre',
            // 'chomh maith',
            // 'ach oiread',
        ],
        // adposition: [
        //     'le', 'sa'
        // ],
        preposition: [
            {
                ga: 'ag',
                en: 'at, with' 
            },
            {
                ga: 'ar',
                en: 'on, about' 
            },
            {
                ga: 'le',
                en: 'with' 
            },
        ],
        conjunction: [
            {
                ga: 'agus',
                en: 'and' 
            },
            {
                ga: 'is',
                en: 'and (short form)' 
            },
            {
                ga: 'ach',
                en: 'but' 
            },
            // 'agus',
            // 'go',
            // 'ach',
        ],
        // numeral: [
        //     'a haon',
        //     'an chéad',
        //     'duine',
        //     'a dó',
        //     'an dara',
        //     'beirt',
        //     'a trí',
        //     'an tríú',
        //     'triúr',
        //     'a ceathair',
        //     'an ceathrú',
        //     'ceathrar',
        //     'a cúig',
        //     'an cúigiú',
        //     'cúigear',
        //     'a sé',
        //     'an séú',
        //     'seisear',
        //     'a seacht',
        //     'an seachtú',
        //     'seachtar',
        //     'a hocht',
        //     'an t-ochtú',
        //     'ochtar',
        //     'a naoi',
        //     'an naoú',
        //     'naonúr',
        //     'a deich',
        //     'an deichiú',
        //     'deichniúr',
        // ]
    },
      
} as const;