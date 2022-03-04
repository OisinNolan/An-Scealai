var quizVerb = "";
var quizStr = "Quiz";
var quizVerbAC = "AC";
var quizVerbAL = "AL";
var quizVerbAF = "AF";
var quizVerbMC = "MC";
var BQuizQuestions = [];

function chatSetupQuiz(verb){
  quizVerb = verb;
  if(verb == "bi") verb = "bí";
  else if(verb == "teigh") verb = "téigh";
  load("IrrQuiz");
}

//ABAIR
var abairAimsirChaiteQuestions = [
  {question: "___________ sí go raibh sé ar fheabhas.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ Liam go raibh sé tinn.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ na buachaillí nach raibh éinne eile ann.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ (sinn) nár chualamar an scéal sin riamh.", answer: "dúramar", hint1: "dearfach, sinn"},
  {question: "___________ mé é sin leat cheana.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ bean liom go ndúirt bean léi.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ (sinn) ár bpaidreacha ina dhiaidh sin.", answer: "dúramar", hint1: "dearfach, aimsir chaite"},
  {question: "___________ Síle go raibh an scéal sin fíor.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ sé go raibh brón air.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "B’shin é a ___________ mé leat.", answer: "dúirt", hint1: "dearfach, aimsir chaite"}
];

var abairAimsirChaiteNi = [
  {question: "____ ___________ mé a leithéid riamh.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ éinne é sin liom.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ sí faic.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ go rabhamar bréan bailithe de. (sinn)", answer: "ní dúramar", hint1: "diúltach, sinn"},
  {question: "____ ___________ tú é sin liom riamh.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ Deirdre aon rud faoi.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ (sinn) faic le héinne.", answer: "ní dúramar", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ siad go raibh ocras orthu.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____ ___________ sibh aon rud liom.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"},
  {question: "____  ___________ tú é sin linn ag an am.", answer: "ní dúirt", hint1: "diúltach, aimsir chaite"}
];

var abairACBriatharSaor = [
  {question: "___________ gur fear láidir a bhí ann ach níl a fhios ag éinne.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "___________ gur ghoid sí é ach ní chreidim é sin.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ aon rud mar sin sa chúirt.", answer: "ní dúradh", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ riamh go raibh sé béalscaoilteach.", answer: "ní dúradh", hint1: "diúltach, briathar saor"},
  {question: "___________ go raibh sé beo bocht nuair a cailleadh é.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ aon rud faoina cumas ceoil.", answer: "ní dúradh", hint1: "diúltach, briathar saor"},
  {question: "___________ go raibh sé i ndeireadh na feide faoin am a fuair siad é.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "___________ nach raibh maith na muice lena deartháir riamh.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "___________ gur tógadh go dealbh bocht iad.", answer: "dúradh", hint1: "dearfach, briathar saor"},
  {question: "___________ go raibh sí ar buile nuair a chuala sí é.", answer: "dúradh", hint1: "dearfach, briathar saor"}
];

var abairACCeisteach = [
  {question: "____ ___________ tú leis go raibh tú tinn?", answer: "an ndúirt", answer2:"nach ndúirt", hint1: "nach/an"},
  {question: "____ ___________ (sinn) leat go rabhamar ag dul ar laethanta saoire?", answer: "an ndúramar", answer2: "nach ndúramar", hint1: "sinn"},
  {question: "____ ___________ mé é sin leat cheana?", answer: "an ndúirt", answer2: "nach ndúirt", hint1: "nach/an"},
  {question: "____ ___________ tú go raibh tú críochnaithe?", answer: "an ndúirt", answer2: "nach ndúirt", hint1: "nach/an"},
  {question: "___________ mé leat é míle is céad uair cheana?", answer: "nach ndúirt", answer2: "an ndúirt", hint1: "diúltach"},
  {question: "____ ___________ é sin i gcónaí? (Briathar Saor)", answer: "nach ndúradh", answer2: "an ndúradh", hint1: "diúltach"},
  {question: "____ ___________ (sinn) go mbeimis ag dul ann amárach?", answer: "an ndúramar", answer2: "nach ndúramar", hint1: "sinn"},
  {question: "____ ___________ sé aon rud leat?", answer: "an ndúirt", answer2: "nach ndúirt", hint1: "nach/an"},
  {question: "____ ___________ siad aon rud leat faoi na fadhbanna a bhí acu?", answer: "an ndúirt", answer2: "nach ndúirt", hint1: "nach/an"}
];

var abairACSpleach = [
  {question: "Tá mé cinnte ____ ___________ siad é. (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ siad é. (diúltach)", answer: "nach ndúirt", hint1: "diúltach"},
  {question: "An é ____ ___________ tú aon rud leo? (diúltach)", answer: "nach ndúirt", hint1: "diúltach"},
  {question: "D’admhaigh sí ____ ___________ sí é. (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ siad a leithéid. (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Tá mé lánchinnte ____ ___________(sinn) é sin riamh. (diúltach)", answer: "nach ndúramar", hint1: "diúltach, sinn"},
  {question: "Tá a fhios ag Dia ____ ___________ sí é glan amach. (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Dúirt bean liom ____ ___________ bean léi (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Shéan siad ____ ___________siad aon rud mar sin (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Is cuimhin liom ____ ___________sí aon rud faoi ag an am (diúltach)", answer: "nach ndúirt", hint1: "diúltach"},
];

var abairACExtraQuestions = [
  {question: "___________ Seán liom go raibh an-lá acu.", answer: "dúirt", hint1: "dearfach"},
  {question: "____ ___________ mé a leithéid riamh i mo shaol.", answer: "ní dúirt", hint1: "diúltach"},
  {question: "____ ___________ tú é sin le héinne eile?", answer: "an ndúirt", answer2: "nach ndúirt", hint1: "ceisteach"},
  {question: "____ ___________ mé leat gan é sin a rá go brách arís!", answer: "nach ndúirt", hint1: "ceisteach"},
  {question: "Tá súil agam  ____ ___________ tú leis é. (dearfach)", answer: "go ndúirt", hint1: "dearfach"},
  {question: "Tá súil agam  ____ ___________ tú a leithéid sin léi siúd (diúltach)", answer: "nach ndúirt", hint1: "diúltach, ceisteach"},
  {question: "Tá gach ____ ___________ siad fíor is cosúil.", answer: "a ndúirt", hint1: "dearfach"},
  {question: "____ ___________ tú inné nach raibh spéis dá laghad agat ann? (diúltach)", answer: "nach ndúirt", hint1: "diúltach, ceisteach"},
  {question: "Ní dóigh liom ____ ___________ mé é sin.", answer: "go ndúirt", hint1: "dearfach"},
  {question: "___________ i gcónaí gur tháinig an bhean sídhe nuair a bhí duine i mbéal an bháis.", answer: "dúradh", hint1: "dearfach, briathar saor"}
];

var abairAimsirLaithreachQuestions = [
  {question: "___________ é sin i gcónaí (mé).", answer: "deirim", hint1: "dearfach"},
  {question: "___________ siad go bhfuil siad tuirseach de.", answer: "deir", hint1: "dearfach"},
  {question: "___________ siad go bhfuil sé go maith.", answer: "deir", hint1: "dearfach"},
  {question: "___________ sí go bhfuil gach duine críochnaithe.", answer: "deir", hint1: "dearfach"},
  {question: "___________ an rud céanna gach uair (sinn).", answer: "deirimid", hint1: "dearfach"},
  {question: "___________ Liam go bhfuil siad beagnach críochnaithe.", answer: "deir", hint1: "dearfach"},
  {question: "___________ gach duine é sin ach níl sé fíor.", answer: "deir", hint1: "dearfach"},
  {question: "___________ na manaigh paidreacha an chéad rud gach maidin.", answer: "deir", hint1: "dearfach"},
  {question: "___________ leat go bhfuil siad sásta (mé).", answer: "deirim", hint1: "dearfach"},
  {question: "___________ an rud ceart i gcónaí (sinn).", answer: "deirimid", hint1: "dearfach"}
];

var abairAimsirLaithreachNi = [
  {question: "____ ___________ mo chara rudaí mar sin riamh.", answer: "ní deir", hint1: "diúltach"},
  {question: "____ ___________ aon rud faoi riamh. (mé)", answer: "ní deirim", hint1: "diúltach, mé"},
  {question: "____ ___________ siad go mbíonn siad míshásta.", answer: "ní deir", hint1: "diúltach"},
  {question: "____ ___________ na rudaí sin riamh (sinn).", answer: "ní deirimid", hint1: "diúltach"},
  {question: "____ ___________ aon rud ag an tús (sinn).", answer: "ní deirimid", hint1: "diúltach"},
  {question: "____ ___________ aon phaidreacha ar maidin (mé).", answer: "ní deirim", hint1: "diúltach"},
  {question: "____ ___________ Séamas aon rud faoin timpiste a tharla dó riamh.", answer: "ní deir", hint1: "diúltach"},
  {question: "____ ___________ siad aon rud má bhíonn siad faoi bhrú.", answer: "ní deir", hint1: "diúltach"},
  {question: "____ ___________ aon rud faoin eachtra le Deirdre riamh (sinn).", answer: "ní deirimid", hint1: "diúltach"},
  {question: "____ ___________ aon rud faoi le Daithí riamh (mé).", answer: "ní deirim", hint1: "diúltach"}
];

var abairALBriathorSaor = [
  {question: "___________ go bhfuil sé go maith ach níl a fhios agam faoi.", answer: "deirtear", hint1: "dearfach"},
  {question: "____ ___________ mar sin é i nGaeilge Uladh.", answer: "ní deirtear", hint1: "diúltach"},
  {question: "___________ go mbeidh samhradh maith againn ach níl a fhios ag éinne.", answer: "deirtear", hint1: "dearfach"},
  {question: "___________ go bhfuil gach rud an-daor sa siopa sin.", answer: "deirtear", hint1: "dearfach"},
  {question: "___________ go bhfuil Nóra an-mhaith ag Mata.", answer: "deirtear", hint1: "dearfach"},
  {question: "___________ go bhfuil seans maith ag Loch Garman Craobh na hÉireann a bhuachan i mbliana.", answer: "deirtear", hint1: "dearfach"},
  {question: "____ ___________ aon rud faoin mBreatimeacht níos mó.", answer: "ní deirtear", hint1: "diúltach"},
  {question: "___________ go mbeidh stoirm againn ag an deireadh seachtaine.", answer: "deirtear", hint1: "dearfach"},
  {question: "____ ___________ aon rud faoi sin níos mó.", answer: "ní deirtear", hint1: "diúltach"},
  {question: "____ ___________ mórán faoin easpa fostaíochta atá sa cheantar sin níos mó.", answer: "ní deirtear", hint1: "diúltach"}
];

var abairALCeisteach = [
  {question: "___________ é sin i mBéarla Shasana? (dearfach, briathar saor).", answer: "an ndeirtear", hint1: "dearfach"},
  {question: "____ ___________ go bhfuil na taibléid sin go dona don gcroí? (diúltach, briathar saor)", answer: "nach ndeirtear", hint1: "diúltach"},
  {question: "___________ go bhfuil sé sin as a mheabhair ar fad? (diúltach, briathar saor)", answer: "nach ndeirtear", hint1: "diúltach"},
  {question: "___________ aon rud faoin aighneas a bhí acu níos mó? (dearfach, briathar saor).", answer: "an ndeirtear", hint1: "dearfach"},
  {question: "___________ é sin rómhinic leat? (dearfach, mé).", answer: "an ndeirim", hint1: "dearfach"},
  {question: "___________ aon rud mícheart riamh? (dearfach, mé).", answer: "an ndeirim", hint1: "dearfach"},
  {question: "____ ___________ sí é sin go minic? (diúltach).", answer: "nach ndeir", hint1: "diúltach"},
  {question: "____ ___________ é sin leo gach aon uair? (diúltach, sinn)", answer: "nach ndeirimid", hint1: "diúltach"},
  {question: "____ ___________ Seán go bhfuil siad an-sona san áit ina bhfuil siad? (diúltach).", answer: "nach ndeir", hint1: "diúltach"},
  {question: "____ ___________ gach duine go bhfuil mí-ádh ag dul leis an teach sin? (diúltach).", answer: "nach ndeir", hint1: "diúltach"}
];

var abairALSpleach = [
  {question: "Ceapaim ____ ___________ é sin. (briathar saor)", answer: "go ndeirtear", answer2: "nach ndeirtear", hint1: "go/nach"},
  {question: "Is dóigh liom ____ ___________ siad é sin go minic.", answer: "go ndeir", answer2: "nach ndeir", hint1: "go/nach"},
  {question: "Deir Síle ____ ___________ Máire an rud céanna? ", answer: "go ndeir", answer2: "nach ndeir", hint1: "go/nach"},
  {question: "An bhful sé fíor ____ ___________ Rónán go bhfuil sé chun éirí as? (dearfach)", answer: "go ndeir", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ é sin riamh. (briathar saor, diúltach)", answer: "nach ndeirtear", hint1: "diúltach"},
  {question: "Ní dóigh liom gurb é sin ____ ___________ siad rómhinic.", answer: "a deir", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ sí rudaí mar sin riamh. (diúltach)", answer: "nach ndeir", hint1: "diúltach"},
  {question: "Tá sé ag séanadh ____ ___________ sé a leithéid lena rang go rialta.", answer: "go ndeir", hint1: "dearfach"},
  {question: "Is é an trua ____ ___________é sin níos minice. (briathar saor, diúltach)", answer: "nach ndeirtear", hint1: "diúltach"},
  {question: "An bhfuil tú ag rá liom ____ ___________rudaí mar sin riamh? (briathar saor)", answer: "nach ndeirtear", hint1: "diúltach"}
];

var abairALCoibhneasta = [
  {question: "Scríobh síos go beacht gach _____ _______ ____ leat. (mé) ", answer: "a ndeirim", hint1: "dearfach"},
  {question: "Ní bhíonn gach ____ ___________ an fear sin fíor i gcónaí.", answer: "a ndeir", hint1: "dearfach"},
  {question: "Níl ach plámas i ngach ____ ___________ sé siúd. ", answer: "a ndeir", hint1: "dearfach"},
  {question: "Tá gach ____ ______ _____ leat fíor (lom na fírinne atá ann). (sinn)", answer: "a ndeirimid", hint1: "sinn"},
  {question: "Creid uaimse é. Tá gach  ____ ___________ sí fíor. ", answer: "a ndeir", hint1: "dearfach"},
  {question: "Cheapfá ó gach  ____ ___________ faoi go bhfuil sé ar an bhfadhb is mó riamh. (briathar saor)", answer: "a ndeirtear", hint1: "dearfach, briathar saor"},
  {question: "Cé go mbíonn siad ag ligean orthu féin go mbíonn siad ag éisteacht imíonn gach  ____ ___________ tú le gaoth. ", answer: "a ndeir", hint1: "dearfach"},
  {question: "An fíor ____ ___________ faoi Sheán? (briathar saor)", answer: "a ndeirtear", hint1: "dearfach, briathar saor"},
  {question: "Éist go cúramach le gach ____ ___________ leat. (briathar saor)", answer: "a ndeirtear", hint1: "dearfach"},
  {question: "Tá gach ______ ___________ faoi fíor. (briathar saor) ", answer: "a ndeirtear", hint1: "dearfach, briathar saor"},
];

var abairALExtraQuestions = [
  {question: "_____ Bríd é sin liom go minic. ", answer: "deir", hint1: "dearfach"},
  {question: "____ ___________ a leithéid sin faoi riamh (briathar saor, diúltach).", answer: "ní deirtear", hint1: "diúltach"},
  {question: "Creidim gach ____ ___________ tú liom. ", answer: "a ndeir", hint1: "dearfach"},
  {question: "____ ___________ siad rudaí mar sin rómhinic. (diúltach)", answer: "ní deir", hint1: "dearfach, sinn"},
  {question: "____ ___________ Mairéad go bhfuil sé go maith? ", answer: "an ndeir", hint1: "dearfach"},
  {question: "___________ paidreacha gach lá. (mé)", answer: "deirim", hint1: "dearfach"},
  {question: "___________ gach duine gur bhain siad taitneamh as. ", answer: "deir", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ é sin ach ní chreidim focal de. (briathar saor)", answer: "go ndeirtear", hint1: "briathar saor"},
  {question: "____ ___________ aon rud sa leabhar faoi? (briathar saor)", answer: "an ndeirtear", hint1: "briathar saor"},
  {question: "Cad a ___________ i gcónaí. (sinn) ", answer: "deirimid", hint1: "dearfach, sinn"}
];

var abairAFQuestions = [
  {question: "___________ mé leat é níos déanaí.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ siad linn é nuair a thiocfaidh siad isteach.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ Seán glan amach é, táim cinnte.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ leo é níos déanaí. (sinn)", answer: "déarfaimid", hint1: "dearfach"},
  {question: "Éist anois agus ___________ Brian beag an dán atá aige.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ mo mháthair liom é gan dabht.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ siad go bhfuil tú as do mheabhair má dhéanann tú é sin.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ siad rud éigin deas faoi, is dócha.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ Seán leat nach bhfuil aon fhadhb aige.", answer: "déarfaidh", hint1: "dearfach"},
  {question: "___________ na cailíní nach bhfuil siad sásta leis an áit.", answer: "déarfaidh", hint1: "dearfach"}
];

var abairAFNi = [
  {question: "____ ___________ mé é sin le héinne.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ Micheál é sin le Nóra, tá mé cinnte.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ faic leis go dtí go mbeidh sé críochnaithe ar fad. (sinn)", answer: "ní déarfaimid", hint1: "diúltach"},
  {question: "____ ___________ mé faic le Brídín go fóill.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ leis é go fóill. (sinn)", answer: "ní déarfaimid", hint1: "diúltach"},
  {question: "____ ___________ mise faic faoi má choimeádann tusa do bhéal dúnta.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ siadsan aon rud leat.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ éinne é sin leat.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ mé a thuilleadh faoi. Tá mo dhóthain ráite agam.", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ é sin leis go brách. (sinn)", answer: "ní déarfaimid", hint1: "diúltach"},
];

var abairAFBriatharSaor = [
  {question: "___________ go bhfuil tú leisciúil muna gcríochnaíonn tú é.", answer: "déarfar", hint1: "dearfach"},
  {question: "____ ___________ an Coróin Mhuire ar a shon ar a hocht anocht.", answer: "déarfar", hint1: "dearfach"},
  {question: "____ ___________ é sin os ard go brách. (diúltach)", answer: "ní déarfar", hint1: "diúltach"},
  {question: "___________ go leor faoi ach ní dhéanfar faic mar gheall air.", answer: "déarfar", hint1: "dearfach"},
  {question: "___________ gur cur amú airgid atá ann muna n-éiríonn leis.", answer: "déarfar", hint1: "diúltach"},
  {question: "____ ___________ aon rud faoin ar tharla. (diúltach)", answer: "ní déarfar", hint1: "dearfach"},
  {question: "____ ___________ go brách gur air féin a bhí an locht. (diúltach)", answer: "ní déarfar", hint1: "diúltach"},
  {question: "___________ gur as do mheabhair atá tú má dhéanann tú é sin.", answer: "déarfar", hint1: "dearfach"},
  {question: "Sin é an scéal a cuireadh amach agus ____ ___________ a mhalairt go brách. (diúltach)", answer: "ní déarfar", hint1: "diúltach"},
  {question: "___________ go bhfuil an fhírinne searbh.", answer: "déarfar", hint1: "dearfach"}
];

var abairAFCeisteach = [
  {question: "___ ___________ tú liom é chomh luath is a chloiseann tú faoi? (diúltach)", answer: "nach ndéarfaidh", hint1: "diúltach"},
  {question: "____ ___________ tú rud éigin faoi ag an díospóireacht anocht? (dearfach)", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "___________ siad nach fiú tráithnín é i gceann cúpla bliain eile? (dearfach)", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "___________ sé é sin, dar leat? (dearfach).", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "___________ tú rud éigin leis faoin eachtra? (diúltach).", answer: "nach ndéarfaidh", hint1: "diúltach"},
  {question: "___________ leis é anocht? (sinn).", answer: "an ndéarfaimid", hint1: "dearfach, sinn"},
  {question: "____ ___________ go raibh dul amú air? (diúltach, briathar saor).", answer: "nach ndéarfar", hint1: "diúltach"},
  {question: "____ ___________ siad nach bhfuil an t-am acu chun é a dhéanamh? (dearfach)", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "____ ___________ amach anseo gur imríodh cos ar bolg air? (diúltach, briathar saor).", answer: "nach ndéarfar", hint1: "diúltach"},
  {question: "____ ___________ tú leis go bhfuil mé á lorg? (dearfach).", answer: "an ndéarfaidh", hint1: "dearfach"}
];

var abairAFSpleach = [
  {question: "Ceapaim ____ ___________ mé leis é anocht. (dearfach)", answer: "nach ndéarfaidh", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ sé aon rud. (dearfach)", answer: "go ndéarfaidh", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ a thuilleadh faoi? (diúltach, briathar saor) ", answer: "nach ndéarfar", hint1: "diúltach"},
  {question: "Tá a fhios agam go maith ____ ___________ Marc aon rud faoi? (diúltach)", answer: "nach ndéarfaidh", hint1: "diúltach"},
  {question: "Tá gach éinne a rá ____ ___________ Seán anocht é. (dearfach)", answer: "go ndéarfaidh", hint1: "dearfach"},
  {question: "Fan  ____ ___________ mé leat é. (dearfach) ", answer: "go ndéarfaidh", hint1: "dearfach"},
  {question: "Táim ag fanacht ____ ___________ sí liom é. (dearfach))", answer: "go ndéarfaidh", hint1: "dearfach"},
  {question: "Táim den tuairim ____ ___________ aon rud faoi anocht. (diúltach, briathar saor)", answer: "nach ndéarfar", hint1: "diúltach, briathar saor"},
  {question: "Tá mé á rá leat ____ ___________sí aon rud leat go brách. (briathar saor, diúltach)", answer: "nach ndéarfaidh", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________mé aon rud. (dearfach)", answer: "go ndéarfaidh", hint1: "dearfach"},
];

var abairAFCoibhneasta = [
  {question: "Beidh gach _____ _______ sí leat thar a bheith tábhachtach.", answer: "a ndéarfaidh", hint1: "a ______"},
  {question: "Éist lena ___________ siad leat.", answer: "ndéarfaidh", hint1: "n______"},
  {question: "Beidh gach ____ ___________ sí lán le féin-mholadh. ", answer: "a ndéarfaidh", hint1: "a _________"},
  {question: "Ná creid gach ____ ___________ siad leat. (sinn)", answer: "a ndéarfaimid", hint1: "sinn"},
  {question: "Scríobhfar síos gach  ____ ___________ tú leo. ", answer: "a ndéarfaidh", hint1: "a _________"},
  {question: "Éist go cúramach lena  ___________ gach duine acu. ", answer: "ndéarfaidh", hint1: "n________"},
  {question: "Beidh gach  ____ ___________ sí spéisiúil. ", answer: "a ndéarfaidh", hint1: "a ________"},
  {question: "Sin a ___________ mé don uair seo.", answer: "ndéarfaidh", hint1: "n__________"},
  {question: "Cuirfidh ____ ___________ siad leat déistin ort. ", answer: "a ndéarfaidh", hint1: "a _________"},
  {question: "Caithfimid a bheith cúramach faoi gach ______ ___________ leo. (sinn) ", answer: "a ndéarfaimid", hint1: "sinn"},
];

var abairAFExtraQuestions = [
  {question: "____ ___________ mé aon rud leis. (diúltach)", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "___________ Máire liom é níos déanaí ar aon nós. (dearfach)", answer: "déarfaidh", hint1: "dearfach"},
  {question: "____ ___________ mé a thuilleadh faoi go dtí anocht. (diúltach)", answer: "ní déarfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú le Seán go bhfuil gach duine tuirseach de? (dearfach)", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ Róisín aon rud faoi. ", answer: "nach ndéarfaidh", hint1: "diúltach"},
  {question: "Déan nóta de gach ______ ___________ siad leat. ", answer: "a déarfaidh", hint1: "dearfach"},
  {question: "___________ nach bhfuil maith na muice leat muna gcríochnaíonn tú é. (briathar saor)", answer: "déarfar", hint1: "briathar saor"},
  {question: "____ ___________ mé faic go fóill. (diúltach)", answer: "ní déarfaidh", hint1: "diúltach"},
  {question: "____ ___________ tú leis é nó an bhfágfaidh tú marbh é? (dearfach)", answer: "an ndéarfaidh", hint1: "dearfach"},
  {question: "____ ___________ go bhfuilimid sásta go leor leis?  ", answer: "an ndéarfaimid", answer2: "nach ndéarfaimid", hint1: "dearfach, sinn"}
];

var abairMCQuestions = [
  {question: "___________ go bhfuil sé imithe. (mé)", answer: "déarfainn", hint1: "dearfach"},
  {question: "___________ Séamas rud ar bith chun fáil amach as.", answer: "déarfadh", hint1: "dearfach"},
  {question: "Ní raibh sí istigh léi féin, mar a ___________. (tú)", answer: "déarfá", hint1: "dearfach"},
  {question: "___________ leat é dá mbeadh sé ar eolas againn. (sinn)", answer: "déarfaimis", hint1: "dearfach"},
  {question: "Cad a ___________ faoi sin, dar leat? (siad)", answer: "déarfaidís", answer2: "déarfadh siad", hint1: "dearfach"},
  {question: "Sin é a ___________ Síle dá mbeadh sí anseo.", answer: "déarfadh", hint1: "dearfach"},
  {question: "___________ go bhfuil gach duine críochnaithe anois. (mé)", answer: "déarfainn", hint1: "dearfach"},
  {question: "___________ go bhfuil sé sin ceart go leor anois. (mé)", answer: "déarfainn", hint1: "dearfach"},
  {question: "Ná bac leo sin. ___________ aon rud chun éalú amach as an trioblóid.", answer: "déarfaidís", hint1: "dearfach"},
  {question: "Cad a ___________ sibhse faoin bplean sin?", answer: "déarfadh", hint1: "dearfach"}
];

var abairMCNi = [
  {question: "____ ___________ go raibh an freagra sin ceart. (mé)", answer: "ní déarfainn", hint1: "diúltach"},
  {question: "____ ___________ an múinteoir rud mar sin.", answer: "ní déarfadh", hint1: "diúltach"},
  {question: "____ ___________ rud mar sin dá mbeadh an scéal ar fad agat. (tú)", answer: "ní déarfá", hint1: "diúltach"},
  {question: "____ ___________ mo chara is fearr rud mar sin liom.", answer: "ní déarfadh", hint1: "diúltach"},
  {question: "____ ___________ rud mar sin dá mbeidís glic. ", answer: "ní déarfaidís", hint1: "diúltach"},
  {question: "____ ___________ Nóra a leithéid riamh.", answer: "ní déarfadh", hint1: "diúltach"},
  {question: "____ ___________ go raibh sé caillte murach go bhfuil. (sinn)", answer: "ní déarfaimis", answer2: "ní déarfadh muid", hint1: "sinn"},
  {question: "____ ___________ linn é ar ór ná ar airgead. (siad)", answer: "ní déarfaidís", hint1: "diúltach"},
  {question: "____ ___________ go raibh pingin ina phóca aige. (mé)", answer: "ní déarfainn", hint1: "diúltach"},
  {question: "____ ___________ Mairéad aon rud amach ós ard ag an gcruinniú. ", answer: "ní déarfadh", hint1: "diúltach"},
];

var abairMCBriatharSaor = [
  {question: "_____ ___________ é sin murach go bhfuil sé go han-dona. (diúltach)", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "____ ___________ é sin dá mbeadh an aimsir go han-dona. (dearfach)", answer: "déarfaí", hint1: "dearfach"},
  {question: "____ ___________ é sin murach go bhfuil sé cinnte. (diúltach)", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "___________ é dá mba ghá é a rá. (dearfach)", answer: "déarfaí", hint1: "dearfach"},
  {question: "____ ___________ é sin gan chúis. (diúltach)", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "___________ glan amach é dá mbeadh sé fíor. ", answer: "déarfaí", hint1: "dearfach"},
  {question: "____ ___________ rud mar sin ag cruinniú foirmeálta. (diúltach)", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "____ ___________ é dá mbeadh aon slí eile timpeall air. (diúltach)", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "____ ___________ rud mar sin ón altóir riamh ná coíche. ", answer: "ní déarfaí", hint1: "diúltach"},
  {question: "____ ___________ é sin dá mbeadh aon dul as.", answer: "ní déarfaí", hint1: "diúltach"},
];

var abairMCCeisteach = [
  {question: "___ ___________ go bhfuil sé sin fíor? (tú, diúltach)", answer: "nach ndéarfá", hint1: "diúltach"},
  {question: "____ ___________ éinne é sin leat? (diúltach)", answer: "nach ndéarfadh", hint1: "diúltach"},
  {question: "____ ___________ Seán leat é dá mbeadh a fhios aige faoi? (diúltach)", answer: "nach ndéarfadh", hint1: "diúltach"},
  {question: "____ ___________ é sin dá mbeadh gach rud sásúil san áit? (dearfach, briathar saor).", answer: "an ndéarfaí", hint1: "dearfach, briathar saor"},
  {question: "____ ___________  madraí an bhaile é sin leat? (diúltach).", answer: "nach ndéarfadh", hint1: "diúltach"},
  {question: "____ ___________  go bhfuil Caitlín sásta lena post nua? (tú).", answer: "an ndéarfá", answer2: "nach ndéarfá", hint1: "diúltach, tú"},
  {question: "____ ___________ é dá mbeadh sé fíor? (diúltach, siad).", answer: "nach ndéarfaidís", hint1: "diúltach"},
  {question: "____ ___________ Tomás é dá mbeadh aon dabht air? (diúltach)", answer: "nach ndéarfadh", hint1: "diúltach"},
  {question: "____ ___________ é dá mbeidís faoi bhrú? (dearfach).", answer: "an ndéarfaidís", hint1: "dearfach"},
  {question: "____ ___________ go bhfuil seans maith acu? (dearfach, tú).", answer: "an ndéarfá", hint1: "dearfach"},
];

var abairMCSpleach = [
  {question: "Ní dóigh liom ____ ___________ mo chara rud mar sin fúm. ", answer: "go ndéarfadh", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ aon duine le ciall aon rud mar sin. (diúltach)", answer: "nach ndéarfadh", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________ aon rud mar sin? (mé, diúltach) ", answer: "nach ndéarfainn", hint1: "diúltach"},
  {question: "Dá ___________ éinne eile é sin déarfaí go raibh sé as a mheabhair? ", answer: "ndéarfadh", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ sé é sin dá gcaithfeadh sé. (dearfach)", answer: "go ndéarfadh", hint1: "dearfach"},
  {question: "An gceapann tusa  ____ ___________ Bríd é sin. (dearfach) ", answer: "go ndéarfadh", hint1: "dearfach"},
  {question: "Bhí a fhios agam go maith ____ ___________ sibhse é sin. (dearfach)", answer: "go ndéarfadh", hint1: "dearfach"},
  {question: "Dá ___________ é sin leat chaithfinn an tír a fhágáil. (mé)", answer: "ndéarfainn", hint1: "mé"},
  {question: "Dá ___________glan amach é bheadh deireadh leis. (siad)", answer: "ndéarfaidís", hint1: "siad"},
  {question: "Ní dóigh liom ____ ___________Aoife é sin riamh. (dearfach)", answer: "go ndéarfadh", hint1: "dearfach"},
];

var abairMCExtraQuestions = [
  {question: "___________ go bhfuil an ceann sin go maith. (mé)", answer: "déarfainn", hint1: "mé"},
  {question: "____ ___________ go bhfuil siad críochnaithe go fóill. (mé, diúltach)", answer: "déarfaidh", hint1: "diúltach"},
  {question: "Cad a ___________ dá gcloisfidís an scéal sin? (siad)", answer: "déarfaidís", hint1: "siad"},
  {question: "Cad a ___________ Máirtín faoi sin, dar leat? ", answer: "déarfadh", hint1: "dearfach"},
  {question: "____ ___________ go bhfuil sé sin ceart anois? (tú)", answer: "an ndéarfá", answer2: "nach ndéarfá", hint1: "tú"},
  {question: "______ ___________ éinne é sin. (diúltach) ", answer: "ní déarfadh", hint1: "diúltach"},
  {question: "______ ___________ sibhse é sin?", answer: "an déarfadh", hint1: "dearfach"},
  {question: "Cad eile a ___________? (siad)", answer: "déarfaidís", hint1: "siad"},
  {question: "Ní dóigh liom ____ ___________ muintir na háite é sin faoi? (dearfach)", answer: "go ndéarfadh", hint1: "dearfach"},
  {question: "____ ___________ é sin faoi dá mbeadh sé saibhir? (briathar saor)", answer: "an ndéarfaí", answer2: "nach ndéarfaí", hint1: "briathar saor"},
];

var abairQuiz = [
  {question: "____ ___________ mé é sin ná é. (aimsir chaite, diúltach)", answer: "ní dúirt", hint1: "aimsir chaite, diúltach"},
  {question: "____ ___________ éinne é sin. (aimsir chaite, diúltach)", answer: "ní dúirt", hint1: "aimsir chaite, diúltach"},
  {question: "Bhí a fhios agam go maith _____ ___________ Deirdre é sin. (aimsir chaite, diúltach)", answer: "nach ndúirt", hint1: "aimsir chaite, diúltach"},
  {question: "____ ___________ mé é sin leat na blianta ó sin? (aimsir chaite, diúltach)", answer: "nach ndúirt", hint1: "aimir chaite, diúltach"},
  {question: "Cad eile ____ ___________ sé? (modh coinníollach)", answer: "a déarfadh", hint1: "modh coinníollach"},
  {question: "___________ gur siúinéir iontach í. (aimsir láithreach, briathar saor) ", answer: "deirtear", hint1: "aimsir laithreach, briathar saor"},
  {question: "___________ mé leat é anocht. (aimsir fháistineach, dearfach)", answer: "déarfaidh", hint1: "aimsir fháistineach, dearfach"},
  {question: "_____ ___________Máiréad aon rud faoi go dtí go mbeidh sí lán-chinnte. (aimsir fháistineach, diúltach)", answer: "ní déarfaidh", hint1: "aimsir fháistineach, diúltach"},
  {question: "____ ___________ go bhfuil fios a ghnó aige? (tú, modh coinníollach, dearfach)", answer: "an ndéarfá", hint1: "tú, modh coinníollach, dearfach"},
  {question: "Nach é sin a ___________ leat? (mé, aimsir láithreach)", answer: "deirim", hint1: "mé, aimsir laithreach"},
  {question: "___________ madraí an bhaile é sin leat. (modh coinníollach)", answer: "déarfadh", hint1: "modh coinníollach"},
  {question: "___________ go bhfuil sé glan as a mheabhair má thagann an scéal sin amach faoi. (aimsir fháistineach, briathar saor)", answer: "déarfar", hint1: "aimsir fháistineach, briathar saor"},
  {question: "____ ___________ faic faoi sin go fóill? (sinn, aimsir fháistineach)", answer: "ní déarfaimid", hint1: "sinn, aimsir fháistineach"},
  {question: "____ ___________ go bhfuil tuairim faoin spéir acu faoi cad atá i ndán dóibh. (mé, modh coinníollach, diúltach)", answer: "ní déarfainn", hint1: "mé, modh coinníollach, diúltach"},
  {question: "____ ___________ aon rud faoin mí-ádh a bhain dó níos mó. (briathar saor, aimsir láithreach, diúltach)", answer: "ní deirtear", hint1: "briathar saor, aimsir laithreach, diúltach"},
  {question: "____ ___________ aon rud go dtí go mbeidh deireadh ráite acu sin. (sinn, aimsir fháistineach, diúltach) ", answer: "ní déarfaimid", hint1: "sinn, aimsir fháistineach, diúltach"},
  {question: "Cad a ___________ siad nuair a chuala siad an méid sin? ", answer: "dúirt", hint1: "dearfach"},
  {question: "Ní féidir le hAntoin a bhéal a choimeád dúnta. ___________ sé amach aon rud a thiocfadh isteach ina cheann. (modh coinníollach)", answer: "déarfadh", hint1: "modh coinníollach"},
  {question: "Dúirt bean liom ____ ___________ bean léi. (aimsir chaite, an fhoirm spleách)", answer: "go ndúirt", hint1: "aimsir chaite, spléach"},
  {question: "“Bíonn súil le muir, ach ní bhíonn súil le huaigh”, a ___________. (briathar saor, aimsir láithreach)", answer: "deirtear", hint1: "briathar saor, aimsir laithreach"},
];

//BEIR
//beir AC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACQuestions = [
  {question: "___________ sí greim daingean air.", answer: "rug", hint1: "dearfach"},
  {question: "___________ an chraobh linn an bhliain áirithe sin. (sinn)", answer: "rugamar", answer2: "rug muid", hint1: "dearfach, sinn"},
  {question: "Bhíodh sé ag insint bréag ach ___________ amuigh air. (sinn)", answer: "rugamar", answer2: "rug muid", hint1: "dearfach, sinn"},
  {question: "___________ na gardaí ar an ngadaí ar an slí amach. ", answer: "rug", hint1: "dearfach"},
  {question: "___________ sé greim láimhe uirthi agus d’imigh siad leo lámh ar láimh.", answer: "rug", hint1: "dearfach"},
  {question: "___________ sí greim docht daingean ar an gcarraig. ", answer: "rug", hint1: "dearfach"},
  {question: "___________ ar an bhfrancach a tháinig isteach sa chistin. (sinn)", answer: "rugamar", answer2: "rug muid", hint1: "dearfach, sinn"},
  {question: "___________ sé sé ar an mbád agus choimeád sé greim an duine bháite air.", answer: "rug", hint1: "dearfach"},
  {question: "___________ na cosa linn ar éigean. (sinn)", answer: "rugamar", answer2: "rug muid", hint1: "dearfach, sinn"},
  {question: "___________ sí ar a mála agus bhailigh sí léi. ", answer: "rug", hint1: "dearfach"},
];

//beir AC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACNi = [
  {question: "____ ___________ sí ar an liathróid i gceart.", answer: "níor rug", hint1: "diúltach"},
  {question: "D’éalaigh siad agus ____ ___________ na gardaí ar éinne acu.", answer: "níor rug", hint1: "diúltach"},
  {question: "____ ___________ ar an gcaora agus d’éalaigh sí amach ar an sliabh. (sinn)", answer: "níor rugamar", answer2: "níor rug muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sé orm i gceart agus thit mé isteach san uisce.", answer: "níor rug", hint1: "diúltach"},
  {question: "____ ___________ an fliú or mi mbliana, buíochas le Dia.", answer: "níor rug", hint1: "diúltach"},
  {question: "Tá sé fós fiáin agus ____ ___________ éinne amuigh air fós. ", answer: "níor rug", hint1: "diúltach"},
  {question: "____ ___________ mé riamh ar shionnach i mo ghairdín.", answer: "níor rug", hint1: "diúltach"},
  {question: "____ ___________ an cúlbáire ar an liathróid agus chríochnaigh sí san eangach.", answer: "níor rug", hint1: "diúltach"},
  {question: "____ ___________ na gardaí ar lucht déanta poitín le fada an lá.", answer: "níor rug", hint1: "diúltach"},
  {question: "____  ___________ tú amuigh orm fós cé go mbíonn tú i gcónaí á thriáil.", answer: "níor rug", hint1: "diúltach"},
];

//beir AC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACBriatharSaor = [
  {question: "___________ beirt mhac di agus iníon amháin.", answer: "rugadh", hint1: "dearfach"},
  {question: "___________ orthu agus iad ag dul amach an doras. (dearfach)", answer: "rugadh", hint1: "dearfach"},
  {question: "___________ agus tógadh in Éirinn mé.", answer: "rugadh", hint1: "dearfach"},
  {question: "____ ___________ ar an bpáiste agus í ag rith amach ar an mbóthar. (dearfach)", answer: "rugadh", hint1: "dearfach"},
  {question: "___________ greim láimhe orm agus cuireadh na múrtha fáilte romham. (dearfach)", answer: "rugadh", hint1: "dearfach"},
  {question: "___ ___________riamh ar an dream a ghoid Shergar. (diúltach)", answer: "níor rugadh", hint1: "diúltach"},
  {question: "____ ___________ fós ar an gcapall a bhí thuas ar an sliabh. (diúltach)", answer: "níor rugadh", hint1: "diúltach"},
  {question: "____ ___________ fós aon duine níos fearr ná é. (diúltach)", answer: "níor rugadh", hint1: "diúltach"},
  {question: "D’imreodh sé leis an ngadaí dubh ach ____ ___________riamh air. (diúltach)", answer: "níor rugadh", hint1: "diúltach"},
  {question: "_____ ___________ riamh ar an dream a bhí taobh thiar den bhfeachtas.", answer: "níor rugadh", hint1: "diúltach"},
];

//beir AC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACCeisteach = [
  {question: "____ ___________ tú ar an ngadaí a bhí ag iarraidh briseadh isteach? (dearfach)", answer: "ar rug", hint1: "dearfach"},
  {question: "____ ___________ cúpla di anuraidh? (dearfach)", answer: "ar rugadh", hint1: "briathar saor, dearfach"},
  {question: "____ ___________ siad leo an chraobh an bhliain sin? (diúltach)", answer: "nár rugadh", hint1: "diúltach"},
  {question: "____ ___________ sí lámh ort chun dul in airde staighre? (dearfach)", answer: "ar rug", hint1: "dearfach"},
  {question: "____ ___________ in am ar an tinneas a bhí air. (briathar saor, dearfach)", answer: "ar rugadh", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ tú greim maith air? (diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "____ ___________ sí go maith ar an liathróid? (diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "____ ___________ tú amach air go han-éasca? (diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "____ ___________ ar na daoine a thosaigh an trioblóid ar fad? (briathar saor, dearfach)", answer: "ar rugadh", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ tusa roimh 2000? (briathar saor, diúltach)", answer: "nár rug", hint1: "diúltach"},
];

//beir AC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACSpleach = [
  {question: "Ní dóigh liom ____ ___________ na gardaí ar na gadaithe. (dearfach)", answer: "gur rug", hint1: "dearfach"},
  {question: "Dúirt sé ____ ___________ sé greim ar an bpáiste a bhí ag rith amach ar an mbóthar. (dearfach)", answer: "gur rug", hint1: "dearfach"},
  {question: "Shéan sé ____ ___________ sé greim scornaigh ar éinne. (dearfach)", answer: "gur rug", hint1: "dearfach"},
  {question: "Mhaígh sí ____ ___________ éinne uirthi agus í ag titim. (diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "Dúirt sí ____ ___________ í sa bhliain 2002? (briathar saor, dearfach)", answer: "gur rugadh", hint1: "dearfach, briathar saor"},
  {question: "D’admhaigh sé ____ ___________sé greim ar eireabal an chapaill. (dearfach)", answer: "gur rug", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ fós ar an ndream atá ag goid na gcaorach. (briathar saor, dearfach)", answer: "gur rugadh", hint1: "dearfach, briathar saor"},
  {question: "Dúirt sí ____ ___________ siad fós ar an luchóg atá sa teach acu. (diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "Bhí an t-ádh dearg leat ____ ___________ort. (briathar saor, diúltach)", answer: "nár rug", hint1: "diúltach"},
  {question: "Dúirt siad ____ ___________siad ar an sionnach a bhí ag marú na gcearc. (dearfach)", answer: "gur rug", hint1: "dearfach"},
];

//beir AC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACCoibhneasta = [

];

//beir AC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirACExtraQuestions = [
  {question: "___________ í sa bhliain 2010. (briathar saor, dearfach)", answer: "rugadh", hint1: "briathar saor"},
  {question: "____ ___________ sí léi an chraobh. (dearfach)", answer: "rug", hint1: "dearfach"},
  {question: "____ ___________ amach an fhear na mbréag ar deireadh. (sinn, dearfach) ", answer: "rugamar", answer2: "rug muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ sé ar an liathróid go hard sa spéir i lár na páirce. (dearfach) ", answer: "rug", hint1: "dearfach"},
  {question: "____ ___________ an fliú uirthi agus tá sí sa leaba le trí lá. (dearfach)", answer: "rug", hint1: "dearfach"},
  {question: "____ ___________ ar oiread is iasc amháin an lá ar fad. (sinn, diúltach)", answer: "níor rugamar", answer2: "níor rug muid", hint1: "sinn, diúltach"},
  {question: "Shéan sí ____ ___________ sí greim ar ghruaig an chailín eile. (dearfach) ", answer: "gur rug", hint1: "dearfach"},
  {question: "‘Sé an trua____ ___________ orthu. (briathar saor, diúltach)", answer: "nár rugadh", hint1: "briathar saor, diúltach"},
  {question: "____ ___________ tusa an bhliain chéanna le hÁine? (diúltach)", answer: "nár rugadh", hint1: "briathar saor, diúltach"},
  {question: "____ ___________ agus tógadh mise i Nua Eabhrac. (dearfach)", answer: "rugadh", hint1: "briathar saor"},
];

//beir AL Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirALQuestions = [
  {question: "___________ sí an mála mór trom sin ar scoil léi gach lá.", answer: "beireann", hint1: "dearfach"},
  {question: "___________ sí greim docht ar na ráillí i gcónaí. ", answer: "beireann", hint1: "dearfach"},
  {question: "___________ mo ríomhaire glúine liom i gcónaí.", answer: "beirim", answer2: "beireann mé", hint1: "mé"},
  {question: "___________ siad an páiste leo abhaile ón naíolann gach tráthnóna.", answer: "beireann", hint1: "dearfach"},
  {question: "___________ na cearca go leor uibheacha don teaghlach. (mé)", answer: "beireann", hint1: "dearfach"},
  {question: "___________ sí greim láimhe or mi gcónaí agus í ag dul isteach sa bhus.", answer: "beireann", hint1: "dearfach"},
  {question: "___________ meidhir is sonas leis pé áit a dtéann sé.", answer: "beireann", hint1: "dearfach"},
  {question: "___________ móin isteach don tine gach tráthnóna. (sinn)", answer: "beirimid", answer2: "beireann muid", hint1: "dearfach, sinn"},
  {question: "___________ greim docht ar aon mhála a bhíonn agam agus mé istigh i lár na cathrach. (mé)", answer: "beirim", answer2: "beireann mé", hint1: "mé"},
  {question: "___________ sí léi a fón póca i gcónaí.", answer: "beireann", hint1: "dearfach"},
];

//beir AL Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirALNi = [
  {question: "____ ___________ linn isteach sa rang ach peann is páipéar. (sinn)", answer: "ní bheirimid", answer2: "ní bheireann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sé barróg orm níos mó.", answer: "ní bheireann", hint1: "diúltach"},
  {question: "____ ___________ an chearc sin uibheacha níos mó. ", answer: "ní bheireann", hint1: "diúltach"},
  {question: "____ ___________ bia don gcat a thagann isteach i mo ghairdín níos mó.", answer: "ní bheirim", answer2: "ní bheireann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ linn ach an méid is lú gur féidir linn. (sinn)", answer: "ní bheirimid", answer2: "ní bheireann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ bláthanna isteach san ospidéal níos mó mar níl siad ceadaithe. (sinn)", answer: "ní bheirimid", answer2: "ní bheireann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ siad greim ar na ráillí faoi mar a dúradh leo.", answer: "ní bheireann", hint1: "diúltach"},
  {question: "____ ___________ sí láimh ar éinne níos mó. Tá sí rófhásta suas.", answer: "ní bheireann", hint1: "diúltach"},
  {question: "____ ___________ sé ach trioblóid pé áit a dtéann sé.", answer: "ní bheireann", hint1: "diúltach"},
  {question: "____ ___________ sí léi ach a laghad agus is féidir léi.", answer: "ní bheireann", hint1: "diúltach"},
];

//beir AL Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var beirALBriatharSaor = [
  {question: "___________ an mhóin abhaile ag deireadh an tsamhraidh.", answer: "beirtear", hint1: "dearfach"},
  {question: "____ ___________ amuigh ar dhaoine a bhíonn róghlic.", answer: "beirtear", hint1: "dearfach"},
  {question: "___________ suas le trí mhíle páiste san ospidéal sin gach bliain.", answer: "beirtear", hint1: "dearfach"},
  {question: "___________ na ba isteach le crú dhá uair in aghaidh an lae.", answer: "beirtear", hint1: "dearfach"},
  {question: "Dá fhad a théann an sionnach, ___________ air sa deireadh.", answer: "beirtear", hint1: "dearfach"},
  {question: "___________ níos mó ná 60,000 leanbh in Éirinn gach bliain . (dearfach)", answer: "beirtear", hint1: "dearfach"},
  {question: "____ ___________ orthu riamh ag tiomáint róthapa .", answer: "ní bheirtear", hint1: "diúltach"},
  {question: "____ ___________ ar dhaoine go rialta agus gearrtar fíneálacha arda orthu.", answer: "beirtear", hint1: "dearfach"},
  {question: " ___ ___________ madraí uisce agus iad in ann snámh. Caithfidh siad tabhairt faoina fhoghlaim. (diúltach)", answer: "ní bheirtear", hint1: "diúltach"},
  {question: "___________ thart ar 250 leanbh gach nóiméad.", answer: "beirtear", hint1: "dearfach"},
];

var beirQuiz = [
];

//BÍ
var biACQuestions = [
  {question: "___________ an scéal ag éirí níos measa in aghaidh an lae.", answer: "bhí", hint1: "dearfach"},
  {question: "___________ ina suí cois trá, bolg le grian, gan cíos, cás ná cathú orthu.", answer: "bhíodar", answer2: "bhí said", hint1: "dearfach, siad"},
  {question: "___________ préachta leis an bhfuacht an mhaidin áirithe sin. (sinn)", answer: "bhíomar", answer2: "bhí muid", hint1: "dearfach"},
  {question: "___________ an diabhal thíos ina bholg. ", answer: "bhí", hint1: "dearfach"},
  {question: "___________ an saol is a mháthair ag faire amach dóibh.", answer: "bhí", hint1: "dearfach"},
  {question: "___________ rud éigin ag dó na geirbe ann ó mhaidin.", answer: "bhí", hint1: "dearfach"},
  {question: "___________ loinnir ina shúile an mhaidin sin. ", answer: "bhí", hint1: "dearfach"},
  {question: "___________ bréan bailithe den scéal ar fad. (mé)", answer: "bhíos", answer2: "bhí mé", hint1: "dearfach, mé"},
  {question: "___________ an an t-ádh dearg liom.", answer: "bhí", hint1: "dearfach"},
  {question: "Ní mó ná sásta a ___________ sé.", answer: "bhí", hint1: "dearfach"},
];

var biACNi = [
  {question: "____ ___________ faic na ngrás le feiceáil san áit.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ aon locht agam air.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ ar ár gcompord ó thosaigh sé ag caint. (sinn)", answer: "ní rabhamar", answer2: "ní raibh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ in ann an fód a sheasamh rófhada. (siad)", answer: "ní rabhadar", answer2: "ní raibh siad", hint1: "diúltach, siad"},
  {question: "____ ___________ i mo chónaí san áit ach ar feadh seachtaine.", answer: "ní rabhas", answer2: "ní raibh mé", hint1: "diúltach"},
  {question: "____ ___________ aon ní ag cur isteach orainn an lá sin.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ sí ar a suaimhneas riamh a fhad a bhí sí ann.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ sé ach leathchéad bliain nuair a cailleadh é.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ le déanamh ach ár dtoil a chur le toil Dé.", answer: "ní raibh", hint1: "diúltach"},
  {question: "____  ___________ in ann faic a dhéanamh faoin uafás a bhí ag stánadh idir an dá shúil orthu. (siad)", answer: "ní rabhadar", answer2: "ní raibh siad", hint1: "diúltach"},
];

var biACBriathorSaor = [
  {question: "___________ ag tuar go dtitfeadh praghas na mairteola le fada. (dearfach)", answer: "bhíothas", hint1: "dearfach"},
  {question: "____ ___________ ag súil le toradh maith ar an taighde a bhí ar siúl san áit. (diúltach)", answer: "ní rabhathas", hint1: "diúltach"},
  {question: "___________ den tuairim nach n-éireodh leo an bheart a thabhairt chun críche. (dearfach)", answer: "bhíothas", hint1: "dearfach"},
  {question: "___________ den tuairim gur as a meabhair a bhí sí ag dul. (dearfach)", answer: "bhíothas", hint1: "dearfach"},
  {question: "____ ___________ róchinnte go dtiocfadh sé slán as an timpiste. (diúltach)", answer: "ní rabhathas", hint1: "diúltach"},
  {question: "____ ___________ ar aon tuairim faoi cad ba cheart a dhéanamh. (diúltach)", answer: "ní rabhathas", hint1: "diúltach"},
  {question: "____ ___________ róshásta leis an Rialtas ina dhiaidh sin. (diúltach)", answer: "ní rabhathas", hint1: "diúltach"},
  {question: "___________ lánsásta go raibh toradh dearfach ar na trialacha. (dearfach)", answer: "bhíothas", hint1: "dearfach"},
  {question: "___________ dóchasach go dtiocfadh deascéal roimh dheireadh an lae. (dearfach)", answer: "bhíothas", hint1: "dearfach"},
  {question: "____ ___________ ag súil le haon rud ní b’fhearr. (diúltach)", answer: "ní rabhathas", hint1: "diúltach"},
];

var biACCeisteach = [
  {question: "____ ___________ tú ar an gCarraig nó an bhfaca tú féin mo ghrá? (dearfach)", answer: "an raibh", hint1: "dearfach"},
  {question: "____ ___________ faic eile le déanamh agat ach a bheith ag seasamh timpeall? (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "____ ___________ mórán le rá aici? (dearfach)", answer: "an raibh", hint1: "dearfach"},
  {question: "____ ___________ sásta? Bí cinnte go raibh! (sinn, dearfach)", answer: "an rabhamar", answer2: "an raibh muid", hint1: "dearfach"},
  {question: "____ ___________ aon ní eile ag cur isteach orthu? (dearfach)", answer: "an raibh", hint1: "dearfach"},
  {question: "____ ___________ an-oíche againn? (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "____ ___________ an t-ádh dearg leo gur tháinig siad slán. (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "____ ___________ siad thar a bheith buíoch díot? (siad, diúltach)", answer: "nach rabhamar", answer2: "nach raibh muid", hint1: "diúltach, siad"},
  {question: "____ ___________ ag súil le torthaí ní b’fhearr? (briathar saor, dearfach)", answer: "an rabhathas", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ fírinne an scéil ar eolas go maith acu. (diúltach)", answer: "nach raibh", hint1: "diúltach"},
];

var biACSpleach = [
  {question: "Bhí mé cinnte ____ ___________ sé imithe a chodladh ag an am sin. (dearfach)", answer: "go raibh", hint1: "dearfach"},
  {question: "Dúirt sí liom ____ ___________ sí chun dul ar ais níos mó. (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "Bí cinnte de ____ ___________ mórán le rá acu ina dhiaidh sin. (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "Chuala mé ____ ___________ sé ar fónamh le tamall anuas. (dearfach)", answer: "nach raibh", hint1: "dearfach"},
  {question: "Bhí eagla an domhain orainn____ ___________ i mbaol ár mbáite an lá sin. (dearfach)", answer: "go rabhadar", answer2: "go raibh muid", hint1: "dearfach"},
  {question: "Bhí a fhios againn ____ ___________ sásta ach ní raibh aon teacht timpeall air. (siad, diúltach)", answer: "go raibh", hint1: "diúltach, siad"},
  {question: "Dúirt siad ____ ___________ siad chun teacht chugainn ach níor thángadar. (dearfach)", answer: "go raibh", hint1: "dearfach"},
  {question: "Bhí má bhí, ach níor chuala mise ____ ___________. (dearfach)", answer: "go raibh", hint1: "dearfach"},
  {question: "Dúirt sé ____ ___________ar an ngrúpa ab fhearr a bhí aige riamh? (sinn, dearfach)", answer: "go rabhadar", answer2: "go raibh muid", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________siad ann ach ar feadh cúpla lá. (diúltach)", answer: "nach raibh", hint1: "diúltach"},
];

var biACCoibhneasta = [
  {question: "Chuala mé ____ ___________ le rá aici ag an gcruinniú. ", answer: "a raibh", hint1: "a ______"},
  {question: "B’shin ____ ___________ le déanamh ach ní dhearna sibh é. ", answer: "a raibh", hint1: "a ______"},
  {question: "Bhí gach ____ ___________ i láthair sna trithí gáire. ", answer: "a raibh", hint1: "a ______"},
  {question: "Chonaiceamar ____ ___________ ann agus bhailíomar linn. ", answer: "a raibh", hint1: "a ______"},
  {question: "B’shin ____ ___________ acu le hithe ar feadh trí lá. ", answer: "a raibh", hint1: "a ______"},
  {question: "Chuir sé iontas ar gach ____ ___________ i láthair an oíche úd.", answer: "a raibh", hint1: "a ______"},
  {question: "Bhí gach ____ ___________ múinte ar an gcúrsa ar bharr a teanga aici. ", answer: "a raibh", hint1: "a ______"},
  {question: "Ghoid siad ____ ___________ d’airgead sa teach ag an sean-bhean. ", answer: "a raibh", hint1: "a ______"},
  {question: "B’shin  ____ ___________ fágtha sa chuisneoir an mhaidin dar gcionn. ", answer: "a raibh", hint1: "a ______"},
  {question: "B’shin ____ ___________ le rá aige is gan aon mhíniú eile aige ar an scéal. ", answer: "a raibh", hint1: "a ______"},
];

var biACExtraQuestions = [
  {question: "___________ an ghomh uirthi an lá sin gan aon bhréag ná magadh. (dearfach)", answer: "bhí", hint1: "dearfach"},
  {question: "____ ___________ aon dul as againn ach é a íoc. (diúltach)", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________aon scéal ná duan uaithi ar feadh an achair. (diúltach) ", answer: "ní raibh", hint1: "diúltach"},
  {question: "____ ___________ in ainm is a bheith ag dul ansin ag tús na bliana? (sinn, diúltach) ", answer: "nach rabhamar", answer2: "nach raibh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ aon rud ag cur isteach ná amach orainn an lá sin. (diúltach)", answer: "ní raibh", hint1: "diúltach"},
  {question: "Bhí ____ ___________ le rá aici suimiúil. ", answer: "a raibh", hint1: "dearfach"},
  {question: "___________ ag súil le rud éigin ní b’fhearr ná sin. (briathar saor, dearfach) ", answer: "bhíothas", hint1: "dearfach"},
  {question: "____ ___________ sibh ábalta é a chríochnú in am? (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "___________ aon chuma ar an rud a rinne siad? (dearfach)", answer: "an raibh", hint1: "dearfach"},
  {question: "Dúirt sí ____ ___________ in áit an-chontúirteach agus go mba cheart dúinn bogadh láithreach. (sinn, dearfach)", answer: "go rabhamar", answer2: "go raibh muid", hint1: "dearfach"},
];

var biALQuestions = [
  {question: "___________ san oifig gach maidin ar a naoi a chlog. (mé)", answer: "bím", answer2: "bíonn mé", hint1: "dearfach"},
  {question: "___________ tusa in am i gcónaí. ", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ slua mór ag an bhféile sin gach bliain.", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ ag faire amach dó go rialta. (sinn)", answer: "bímid", answer2: "bíonn muid", hint1: "dearfach, sinn"},
  {question: "___________ siad á rá is bíonn siad á rá.", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ sé fud fad na háite i gcónaí.", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ istigh in am gach maidin. (sinn)", answer: "bímid", answer2: "bíonn muid", hint1: "dearfach, sinn"},
  {question: "___________ an-tóir ar thicéid do Chraobh na hÉireann gach bliain.", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ ag fanacht leis ag an doras go rialta. (mé) ", answer: "bím", answer2: "bíonn mé", hint1: "dearfach, mé"},
  {question: "___________ sí sásta nuair a fhaigheann sí breith a béil féin.", answer: "bíonn", hint1: "dearfach"},
];

var biALNi = [
  {question: "____ ___________ féin ag plé leis na cúrsaí sin níos mó. (mé)", answer: "ní bhím", answer2: "ní bhíonn mé", hint1: "diúltach, mé"},
  {question: "____ ___________ sí déanach riamh ar éigean.", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ aon bhrú ag baint leis an obair sin níos mó.", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ ag gearán muna mbíonn cúis an-mhaith againn. (sinn)", answer: "ní bhímid", answer2: "ní bhíonn muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ aon chur is cúiteamh faoin gceist níos mó. ", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ mórán le rá acu na laethanta seo.", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ seans agam dul ann ach anois is arís.", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ críochnaithe aon lá go dtí ardtráthnóna. (sinn)", answer: "ní bhímid", answer2: "ní bhíonn muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ an traonach le cloisteáil ach i gcúpla ceantar in Éirinn faoin láthair.", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "____ ___________ aon dul amú uirthi sin riamh.", answer: "ní bhíonn", hint1: "diúltach"},
];

var biALCeisteach = [
  {question: "___________ sé mar seo i gcónaí? (dearfach).", answer: "an mbíonn", hint1: "dearfach"},
  {question: "____ ___________ sí chomh ciúin sin gcónaí? (dearfach)", answer: "an mbíonn", hint1: "dearfach"},
  {question: "_____ ___________ faic eile le rá aige riamh? (dearfach)", answer: "an mbíonn", hint1: "dearfach"},
  {question: "_____ ___________siadsan sona riamh? (dearfach)", answer: "an mbíonn", hint1: "dearfach"},
  {question: "_____ ___________ siad istigh ansin gach dara lá? (diúltach).", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "_____ ___________ á rá sin go minic? (sinn, diúltach).", answer: "nach mbímid", answer2: "nach mbíonn muid", hint1: "diúltach"},
  {question: "____ ___________ sí sin san oifig roimh gach éinne eile ar maidin? (diúltach).", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "____ ___________ ann sách minic? (sinn, diúltach)", answer: "nach mbímid", answer2: "nach mbíonn muid", hint1: "diúltach"},
  {question: "____ ___________ag caint leis go rialta? (mé, diúltach).", answer: "nach mbím", answer2: "nach mbíonn mé", hint1: "diúltach"},
  {question: "____ ___________ na daoine sin sa teach tábhairne gach tráthnóna? (dearfach).", answer: "nach mbíonn", hint1: "dearfach"},
];

var biALSpleach = [
  {question: "Cloisim ____ ___________ an bia an-mhaith sa bhialann sin. (dearfach)", answer: "go mbíonn", hint1: "dearfach"},
  {question: "Deir siad ____ ___________ aon trioblóid acu leis riamh. (diúltach)", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ sise anseo ró-mhinic. (dearfach)", answer: "go mbíonn", hint1: "dearfach"},
  {question: "An bhfuil a fhios agat ____ ___________ dochtúir ar fáil dóibh ach uair sa tseachtain? (diúltach)", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "An bhfuil tú a rá liom ____ ___________ sí réidh in am riamh. (diúltach)", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ seisean sásta le haon rud riamh. (dearfach)", answer: "go mbíonn", hint1: "dearfach"},
  {question: "Ní dóigh liomsa ____ ___________ aon rud fiúntach san iris sin riamh. (dearfach)", answer: "go mbíonn", hint1: "dearfach"},
  {question: "Deirtear liom ____ ___________ fáil air gach maidin Luain. (dearfach)", answer: "nach mbíonn", hint1: "dearfach"},
  {question: "Cloisim ____ ___________dochtúir le fáil ar an oileán níos mó. (diúltach)", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________aon rud maith ar an teilifís ag an deireadh seachtaine níos mó. (diúltach)", answer: "nach mbíonn", hint1: "dearfach"},
];

var biALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var biALExtraQuestions = [
  {question: "___________ slua acu sa teach tábhairne sin gach oíche. (dearfach) ", answer: "bíonn", hint1: "dearfach"},
  {question: "____  ___________ aon rud le déanamh agamsa leo níos mó. (diúltach).", answer: "ní bhíonn", hint1: "diúltach"},
  {question: "___ ___________ aon rud le rá aicisin riamh? (diúltach) ", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "____ ___________ siad ag caint, is ag caint, is ag caint. (dearfach)", answer: "bíonn", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith ____ ___________ siad anseo go rialta. (diúltach) ", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "An dóigh leat _____ ___________ siad ag insint na fírinne? (dearfach)", answer: "go mbíonn", hint1: "dearfach"},
  {question: "___________ blas ar an mbeagán! (dearfach) ", answer: "bíonn", hint1: "dearfach"},
  {question: "___________ ann sách minic? (sinn, diúltach)", answer: "nach mbímid", answer2: "nach mbíonn muid", hint1: "dearfach, sinn"},
  {question: "___________ focal maith le rá aige sin riamh? (dearfach)", answer: "an mbíonn", hint1: "dearfach"},
  {question: "_____ ___________ tusa ag caint léi sin go minic? (diúltach) ", answer: "nach mbíonn", hint1: "diúltach"},
];

var biAFQuestions = [
  {question: "___________ saol an mhadaidh bháin againn amárach.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ oíche go maidin acu.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ gálaí gaoithe ag leathnú soir trasna na tíre anocht.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ an nuacht á craoladh beo ar a sé tráthnóna. ", answer: "beidh", hint1: "dearfach"},
  {question: "___________ an gabhar á róstadh ar Thrá na Cille tráthnóna. ", answer: "beidh", hint1: "dearfach"},
  {question: "___________ gá le hiarracht mhór má táimid chun an beart a dhéanamh.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ mé chugaibh a luaithe agus is féidir liom.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ na sluaite ag tarraingt ar an Ardchathair don gcluiche.", answer: "beidh", hint1: "dearfach"},
  {question: "___________ an saol is a mháthair ann anocht má bhí riamh. ", answer: "beidh", hint1: "dearfach"},
  {question: "___________ ceol go frathacha ag an gcóisir anocht. ", answer: "beidh", hint1: "dearfach"},
];

var biAFNi = [
  {question: "____ ___________ aon rud le cur isteach ná amach ort anseo.", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ deireadh ráite aige go brách.", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ aon leisce ort é sin a dhéanamh arís. ", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ réidh in am le dul ar an traein sin. (sinn) ", answer: "ní bheidh", hint1: "diúltach, sinn"},
  {question: "____ ___________ mé in ann cur suas leis sin rófhada. ", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ cíos, cás ná cathú orthu go ceann i bhfad anois. ", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ tú ábalta é sin a iompar leat féin.", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ mé ábalta an obair ar fad a chríochnú liom féin. ", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ fonn ná fiach air siúd maidin amárach. ", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ ábalta iad sin a shásamh go brách. (sinn)", answer: "ní bheimid", answer2: "ní bheidh muid", hint1: "diúltach, sinn"},
];

var biAFBriathorSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var biAFCeisteach = [
  {question: "___ ___________ tú ábalta é sin a dhéanamh leat féin? (dearfach)", answer: "an mbeidh", hint1: "dearfach"},
  {question: "____ ___________ aon duine eile in éineacht leat? (diúltach)", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "____ ___________ ort é sin a dhéanamh ina dhiaidh seo? (dearfach)", answer: "an mbeidh", hint1: "dearfach"},
  {question: "____ ___________ éinne ann chun cabhrú leat? (dearfach)", answer: "an mbeidh", hint1: "dearfach"},
  {question: "____ ___________ sé ceart go leor mar sin anois? (diúltach).", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "____ ___________ laethanta saoire agat faoi cheann seachtaine eile? (diúltach).", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "____ ___________ ábalta é a chríochnú anocht, dar leat? (sinn, dearfach).", answer: "an mbeimid", answer2: "an mbeidh muid", hint1: "dearfach"},
  {question: "____ ___________ tú ar fáil an chéad rud maidin amárach? (dearfach)", answer: "an mbeidh", hint1: "dearfach"},
  {question: "____ ___________ comhluadar maith agat ag an mbainis sin? (diúltach).", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "____ ___________ go leor ama agat chun é a dhéanamh an tseachtain seo chugainn? (diúltach).", answer: "nach mbeidh", hint1: "diúltach"},
];

var biAFSpleach = [
  {question: "Tá a fhios agam go maith ____ ___________ sé ann. (diúltach)", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "Is dóigh liom ____ ___________ mé críochnaithe leis anocht. (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ siad ar fad anseo in am. (dearfach) ", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Ceapann sí ____ ___________ ticéid fós ar fáil tráthnóna. (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ mórán daoine i láthair. (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Tá sí ag gealladh  ____ ___________sí ag cur isteach orainn níos mó. (diúltach) ", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "Tuigfidh siad go luath ____ ___________toradh maith ar a gcuid pleananna. (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ fágtha anseo don oíche. (sinn, diúltach)", answer: "nach mbeimid", answer2: "nach mbeidh muid", hint1: "diúltach, sinn"},
  {question: "Tá sí cinnte ____ ___________ gach rud go breá ach níl a fhios agamsa faoi sin. (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Ceaptar ____ ___________aon duine fágtha sa pharóiste lá an chluiche. (diúltach)", answer: "nach mbeidh", hint1: "diúltach"},
];

var biAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var biAFExtraQuestions = [
  {question: "___________ mé ag súil le freagra uait ar do chaoithiúlacht. (dearfach)", answer: "beidh", hint1: "dearfach"},
  {question: "___________ díomá orthu muna bhfaigheann siad duais éigin. (dearfach)", answer: "beidh", hint1: "dearfach"},
  {question: "____ ___________ aon rud le cur isteach ná amach ort anseo. (diúltach)", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ duine ná deoraí san áit sin le linn an gheimhridh. (diúltach)", answer: "ní bheidh", hint1: "diúltach"},
  {question: "____ ___________ fáilte is fiche romhaibh ar fad, a stóir? (diúltach) ", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "______ ___________ ar ais in am don traein má théimid suas ansin? (sinn, dearfach) ", answer: "an mbeimid", answer2: "an mbeidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ do chuid cairde in éineacht leat? (diúltach)", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ siad in ann teacht tráthnóna. ", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Tá mé lánchinnte ____ ___________ éinne ag cur isteach ort anseo. (diúltach)", answer: "nach mbeidh", hint1: "diúltach"},
  {question: "Má bhuailim isteach chugat ar a sé ____ ___________ tú réidh?", answer: "an mbeidh", hint1: "dearfach"},
];

var biMCQuestions = [
  {question: "___________ lánsásta leis an méid sin dá bhfaighinn é. (mé) ", answer: "bheinn", hint1: "dearfach, mé"},
  {question: "___________ saol an mhadaidh bháin agat ansin dá mbeadh an aimsir go maith.", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ ciall leis sin ach ní dhéanfaidh siad é. ", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ seans maith agatsa an rás sin a bhuachan.  ", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ sé sin ceart go leor dá mbeadh seirbhís mhaith traenach ann. ", answer: "bheadh", hint1: "dearfach"},
  {question: " ___________ sona sásta dá mbeadh áit cheart acu le fanacht. (siad)", answer: "bheidís", hint1: "dearfach, siad"},
  {question: "___________ slua an-mhór ann murach an droch-aimsir. ", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ go leor le rá aici dá bhfaigheadh sí cead cainte. ", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ an iomarca deacrachtaí ag dul leis sin. Fágfaimid é.", answer: "bheadh", hint1: "dearfach"},
  {question: "___________ ort a lán airgid a chaitheamh chun aon chuma a chur ar an teach sin. ", answer: "bheadh", hint1: "dearfach"},
];

var biMCNi = [
  {question: "____ ___________ féin sásta rud mar sin a dhéanamh. (mé) ", answer: "ní bheinn", hint1: "diúltach, mé"},
  {question: "____ ___________ ábalta é sin ar fad a chríochnú in aon lá amháin. (mé)", answer: "ní bheinn", hint1: "diúltach"},
  {question: "____ ___________ aon chur ina choinne agamsa. ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ sé sin ceart ná cóir. ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ ar ais in am dá rachaimis isteach ar an oileán. (sinn) ", answer: "ní bheimís", hint1: "diúltach, sinn"},
  {question: "____ ___________ aon chiall le rud mar sin.", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ ábalta na trialacha sin a dhéanamh gan Ghaeilge mhaith a bheith agat. (tú)", answer: "ní bheifeá", hint1: "diúltach, tú"},
  {question: "____ ___________ Seán ábalta air sin níos mó. Tá sé róshean. ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ aon seans agamsa dá mbeinn istigh leo sin. ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ a fhios agat. Níl deireadh déanta fós. ", answer: "ní bheadh", hint1: "diúltach"},
];

var biMCBriatharSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var biMCCeisteach = [
  {question: "___ ___________ aon mhaith ina leithéid de rud dúinne? (dearfach)", answer: "an mbeadh", hint1: "dearfach"},
  {question: "____ ___________ _____ sí sásta dá bhfaigheadh sí an méid sin? (diúltach)", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "____ ___________ sé níos fearr agat é a chaitheamh uait ar fad? (diúltach)", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "____ ___________ sé chomh maith againn é a fhágáil mar atá? (diúltach).", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "____ ___________  sé chomh maith agat an rud ar fad a chaitheamh san aer ag an bpointe seo? (diúltach).", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "____ ___________  níos fearr as gan é? (sinn, dearfach)", answer: "an mbeimís", answer2: "an mbeadh muid", hint1: "dearfach"},
  {question: "____ ___________ aon eolas ag Antoin faoi dá rachaimis chuige? (dearfach).", answer: "an mbeadh", hint1: "dearfach"},
  {question: "____ ___________ sé fós ann murach gur thóg duine éigin é? (diúltach)", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "____ ___________ níos fearr as dá bhfanfaidís anseo? (siad, diúltach).", answer: "nach mbeidís", answer2: "nach mbeadh siad", hint1: "diúltach"},
  {question: "____ ___________ sásta é a dhíol liom ar chéad Euro? (tú, dearfach).", answer: "an mbeifeá", answer2: "an mbeadh tú", hint1: "dearfach"},
];

var biMCSpleach = [
  {question: "Dúirt siad ____ ___________ sásta é a dhéanamh. (siad, dearfach) ", answer: "go mbeidís", answer2: "go mbeadh siad", hint1: "dearfach, siad"},
  {question: "Chuala mé  ____ ___________ ag teacht go dtí an cluiche Dé Domhnaigh. (siad, diúltach)", answer: "nach mbeidís", answer2: "nach mbeadh siad", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ sí sasta le haon cheann eile seachas an ceann seo.", answer: "go mbeadh", hint1: "dearfach"},
  {question: "Ní raibh mise róchinnte ____ ___________ an madra sásta fanacht leatsa. (dearfach) ", answer: "go mbeadh", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________dianslándáil i bhfeidhm do chuairt an phrionsa. (dearfach)", answer: "go mbeadh", hint1: "dearfach"},
  {question: "An dóigh leat ____ ___________ níos fearr as fanacht leis an gcéad cheann? (sinn, dearfach)", answer: "go mbeimís", answer2: "go mbeadh muid", hint1: "dearfach"},
  {question: "Ba dhóigh leat ____ ___________ ciall cheannaithe aici faoin tráth seo! (dearfach) ", answer: "go mbeadh", hint1: "dearfach"},
  {question: "Bhí siad den tuairim ____ ___________ gach rud go breá faoi cheann cúpla lá. (dearfach)", answer: "go mbeadh", hint1: "dearfach"},
  {question: "Dúrach ___ ___________ seans acu ach bhuaigh siad i ndeireadh thiar thall. (diúltach)", answer: "nach mbeadh", hint1: "diúltach"},
  {question: "Dúirt sí ___ ___________sí sásta dul ann léi féin. (diúltach)", answer: "nach mbeadh", hint1: "diúltach"},
];

var biMCExtraQuestions = [
  {question: "___________ sé sin ceart go leor dá mbeinn saor amárach. (dearfach) ", answer: "bheadh", hint1: "dearfach"},
  {question: "____ ___________ marbh faoi seo dá leanfaidís ar aghaidh mar a bhí siad. (siad, dearfach) ", answer: "bheidís", hint1: "dearfach, siad"},
  {question: "____ ___________ a fhios agat. B’fhéidir go dtiocfaidh sí.  (diúltach) ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________ seans ag Seán bocht i gcoinne na n-imreoirí proifisiúnta sin. (diúltach) ", answer: "ní bheadh", hint1: "diúltach"},
  {question: "____ ___________sásta géilleadh murach an brú a cuireadh orthu. (siad, diúltach) ", answer: "ní bheidís", answer2: "ní bheadh siad", hint1: "diúltach"},
  {question: "___________ ar mhuin na muice dá dtitfeadh sé amach mar sin. (sinn, dearfach)", answer: "bheimís", hint1: "dearfach"},
  {question: "An dóigh leat ___ ___________ aon mhaitheas i gceann mar sin dúinne? (dearfach) ", answer: "go mbeadh", hint1: "dearfach"},
  {question: "Dúirt siad ____ ___________ lán sásta cabhrú linn. (siad, dearfach)", answer: "go mbeidís", answer2: "go mbeadh siad", hint1: "dearfach, sinn"},
  {question: "Dúramar ___ ___________ ábalta cabhrú leo níos mó. (sinn, dearfach)", answer: "nach mbeimís", answer2: "go mbeadh muid", hint1: "dearfach"},
  {question: "___ ___________aon chur ina choinne agatsa dá bhfanfainn seachtain eile anseo? (dearfach)", answer: "an mbeadh", hint1: "dearfach"},
];

var biQuiz = [
  {question: "___________ go maith is ní raibh go holc.", answer: "bhí", hint1: "dearfach"},
  {question: "_____ __________ an phraiseach ar fud na mias san oifig faoi dheireadh an lae. (dearfach)", answer: "bhí", hint1: "dearfach"},
  {question: "___ ___________ ann ach sceach i mbéal bearna ach d’oibrigh sé. (diúltach)", answer: "ní raibh", hint1: "diúltach"},
  {question: "Cé ___  ___________ oiread na fríde ann, ba imreoir an-mhaith é. (diúltach) ", answer: "nach raibh", hint1: "diúltach"},
  {question: "____ ___________ tú ag caint le héinne eile ó shin? (diúltach)", answer: "nach raibh", hint1: "diúltach"},
  {question: "______ ___________ cósta na Breataine Bige le feiceáil ón áit seo uaireanta? (dearfach) ", answer: "an mbíonn", hint1: "dearfach"},
  {question: "___________ ag tnúth go mór le bualadh leat. (sinn, dearfach, aimsir fháistineach)", answer: "beimid", answer2: "beidh muid", hint1: "sinn, dearfach, aimsir fháistineach"},
  {question: "____ ___________siad á rá sin ach ná creid focal a thagann amach as a mbéil. (aimsir láithreach)", answer: "bíonn", hint1: "aimsir laithreach"},
  {question: "Deir sí ____ ___________ éinne ann de ghnáth. (diúltach)", answer: "nach mbíonn", hint1: "diúltach"},
  {question: "____ ___________ siad riamh gan ghearán. (diúltach, aimsir láithreach)", answer: "ní bhíonn", hint1: "diúltach, aimsir laithreach"},
  {question: "____ ___________ tú ag dul go dtí an cluiche anocht? (dearfach) ", answer: "an mbeidh", hint1: "dearfach"},
  {question: "___ ___________ tú leat féin san oifig maidin amárach? (dearfach) ", answer: "an mbeidh", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith ___________ _________ duine ná deoraí ann go dtí a deich a chlog. (diúltach, aimsir fháistineach)", answer: "nach mbeidh", hint1: "diúltach, aimsir fháistineach"},
  {question: "___________ an-sásta dá n-éireodh liom an méid sin a bhaint amach. (mé, dearfach)", answer: "bhein", hint1: "mé, dearfach"},
  {question: "___________ an saol is a mháthair istigh i lár na cathrach anocht. (dearfach) ", answer: "beidh", hint1: "dearfach"},
  {question: "___________gach rud ceart go leor dá bhfanfaidís socair. (dearfach)", answer: "bheadh", hint1: "dearfach"},
  {question: "Dá mbeadh sí anseo ____ ___________ sí sásta cur suas le seafóid mar sin. (diúltach)", answer: "ní bheadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam go maith ___________ ann in am. (siad, diúltach) ", answer: "nach mbeidís", hint1: "siad, diúltach"},
  {question: "An gceapann tú _____ ___________ sí ábalta an rás a bhuachan anocht? (dearfach)", answer: "go mbeidh", hint1: "dearfach"},
  {question: "Dúirt sí _____ ___________ sí sásta é a dhéanamh. (siad)", answer: "go mbeadh", hint1: "siad"},
];

//CLOIS
var cloisACQuestions = [
  {question: "________ mé torann íseal taobh thíar díon.", answer: "chuala", hint1: "dearfach"},
  {question: "________ tú an ceann sin go minic cheacha.", answer: "chuala", hint1: "dearfach"},
  {question: "________ sé an scéál ach níor chreid sé é.", answer: "chuala", hint1: "dearfach"},
  {question: "________ sí ráfla ach ní raibh sí cinnte.", answer: "chuala", hint1: "dearfach"},
  {question: "________ an bus ag teacht agus ritheamar amach.", answer: "chualamar", answer2: "chuala muid", hint1: "dearfach, sinn"},
  {question: "________ sibh mé á rá sin go soiléir ar maidin.", answer: "chuala", hint1: "dearfach"},
  {question: "________ go raibh tú ag cuimheamh ar dhul go Meiriceá.", answer: "chualamar", answer2: "chuala muid", hint1: "dearfach, sinn"},
  {question: "________ an scéál ach níor chreideamar é.", answer: "chualamar", answer2: "chuala muid", hint1: "dearfach, sinn"},
  {question: "________ me torann taibhseach i bhfad uaim.", answer: "chuala", hint1: "dearfach"},
  {question: "________ sí crónán an chait sna driseacha.", answer: "chuala", hint1: "dearfach"},
];

var cloisACNi = [
  {question: "____ _______ mé ráíte riamh é.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ _______ tú aon rud. Is ag rámhallaí atá tú.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ _______ sé uainse é, pé áit ar chuala sé é.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ _______ sí an carr ag teacht ina coinne.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ _______ faic uatha le seachtain anuas.", answer: "níor chualamar", answer2: "níor chuala muid", hint1: "diúltach, sinn"},
  {question: "____ ________ siad an scéal ba dheanaí búiochas le Dia.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ ________ caint chomh speagúil sinn le fada an lá.", answer: "níor chualamar", answer2: "níor chuala muid", hint1: "diúltach, sinn"},
  {question: "____ _______ aon nuacht le roinnt laethanta anois. (sinn)", answer: "níor chuala", answer2: "níor chuala muid", hint1: "diúltach, sinn"},
  {question: "____ ________ mé a leithéid de sheagórd riamh.", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ ________ sé aon rud ar ais go fóill.", answer: "níor chuala", hint1: "diúltach"},
];

var cloisACBritharsaor = [
  {question: "______ eitleán in airde sa spéir (dearfach).", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "______ an screadail i bhfad i gcéin. (dearfach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "______ an geata ag oscailt. (dearfach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "____ ______ an t-amhrán sin ar an raidio riamh ina dhiaidh sin. (diúltach)", answer: "níor chuathas", hint1: "diúltach, briathar saor"},
  {question: "______ an carr ag imeacht den bhóthar. (dearfach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "______ an phléase ach ní raibh a fhios ag éinne cad a bhí ann. (dearfach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "____ ______ éinne ag dul in airde staighre an oíche sin. (diúltach)", answer: "níor chuathas", hint1: "diúltach, briathar saor"},
  {question: "____ ______ caint uirthi sin riamh ó shin. (diúltach)", answer: "níor chuathas", hint1: "diúltach, briathar saor"},
  {question: "______ an phléasc i gcian is i gcóngar. (dearfach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
  {question: "______ na francaigh faoin úrlár í shin. (diúltach)", answer: "chuathas", hint1: "dearfach, briathar saor"},
];

var cloisACCeisteach = [
  {question: "___ ______ tú é Mhairtín ó Shín? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "___ ______ tú an scéal sin míle uair cheana? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "___ ______ tú Máiréad riamh ag ceol ar an bpíob? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "___ ______ tú mé ag glaoch ort? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "___ ______ tú an scéal faoin tíogar a d'eafaigh ón siorcas? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "___ ______ sibh aon torann lasmuigh den bhfuinneog aréir? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "___ ______ sibh scéalta riamh mar gheall ar an mbean sídhe? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "___ ______ tú an toirneach uafásach i lár na hoíche aréir? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "___ ______ sibh na scéálta nuachta ar Radio na Gaeltachta ar maidin? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "___ ______ aon duine agaibh faoin athrú a tháinig ar na rialacha le deanaí? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
];

var cloisACSpleach = [
  {question: "Dúirt siad ____ _______ siad an coileach ag glaoch sa chlós. (dearfach)", answer: "gur chuala", hint1: "dearfach"},
  {question: "Dúirt sé ____ _______ sé an ráfla go dtí an tráthnóna sin. (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "Credim ____ _______ siad é agus nár thug siad an aird air. (dearfach)", answer: "gur chuala", hint1: "dearfach"},
  {question: "Tá mé lán-chinnte ____ _______ mé aon torann i lár na hoíche. (diultach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "Chuir siad inár leith ____ _______ é ach nár thangamar i gcabhair air. (dearfach)", answer: "gur chuala", hint1: "dearfach"},
  {question: "Deirtear ____ _______ an bhean sídhe an oíche a fuair sé bás. (dearfach, brithar saor)", answer: "gur chualathas", hint1: "dearfach, briathar saor"},
  {question: "Tá a fhios agam go maith ____ _______ sí mé ag glaoch uirthi. (dearfach)", answer: "gur chuala", hint1: "dearfach"},
  {question: "Dúirt mé léi ____ _______ mé faic faoin ráfla a bhí ag dul thart. (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "Táím go láidir den fuairim ____ _______ siad an nuacht an tráthnóna sin.", answer: "gur chuala", hint1: "dearfach"},
  {question: "Nach cuimhin leat ____ _______ an scéal céanna an t-am seo anuraidh. (sinn, dearfach)", answer: "gur chualamar", hint1: "dearfach, sinn"},
];

var cloisACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var cloisACExtraQuestions = [
  {question: "___________ tú an toirneach uafásach a bhí ann aréir? (dearfach)", answer: "ar chuala", hint1: "dearfach"},
  {question: "____ ___________ tú an scéal faoi Thomás agus an t-asal? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "___________mé go raibh saoire an-taitneamhach agat. (dearfach)", answer: "chuala", hint1: "dearfach"},
  {question: "___________ sé clog an tséipéil ag bualadh. (dearfach)", answer: "chuala", hint1: "dearfach"},
  {question: "____ ___________ mé faic faoinar tharla ina dhiaidh sin. (diúltach)", answer: "níor chuala", hint1: "diúltach"},
  {question: "____ ___________focal mar gheall air ó d’imigh sé. (diúltach, briathar saor) ", answer: "níor chualathas", hint1: "diúltach, briathar saor"},
  {question: "Tá a fhios agam ____ ___________mé rud éigin i lár na hoíche. (dearfach) ", answer: "gur chuala", hint1: "dearfach"},
  {question: "Chuireamar iarratas isteach ach ___ ___________aon rud ar ais. (diúltach, sinn) ", answer: "níor chualamar", answer2: "níor chuala muid", hint1: "diúltach, sinn"},
  {question: "Bhí a fhios agam go maith ____ ___________sí é ach níor lig sí faic uirthi féin. (dearfach)", answer: "gur chuala", hint1: "dearfach"},
  {question: "____ ___________ an car rag teacht go dtí go raibh sé sa mhullach orainn. (sinn, diúltach)", answer: "níor chualamar", answer2: "níor chuala muid", hint1: "diúltach, sinn"},
];

var cloisALQuestions = [
  {question: "___________ go bhfuil ardú ag teacht ar phraghas na dticéad. (mé)", answer: "cloisim", answer2: "cloiseann mé", hint1: "mé"},
  {question: "___________ tusa gach scéal i bhfad romhamsa.", answer: "cloiseann", hint1: "dearfach"},
  {question: "___________ sí an trácht ar an mbóthar óna teach an lá ar fad.", answer: "cloiseann", hint1: "dearfach"},
  {question: "___________ na préacháin ar na crainn ó éirí na gréine gach maidin. (sinn)", answer: "cloisimid", answer2: "cloiseann muid", hint1: "dearfach, sinn"},
  {question: "___________ ó Shéamas go rialta ó d’imigh sé go Ceanada. (sinn) ", answer: "cloisimid", answer2: "cloiseann muid", hint1: "dearfach, sinn"},
  {question: "___________ seisean gach ráfla agus cuireann sé leis i gcónaí.", answer: "cloiseann", hint1: "dearfach"},
  {question: "___________ go bhfuil tú chun céim a dhéanamh san eolaíocht. (mé)", answer: "cloisim", answer2: "cloiseann mé", hint1: "mé"},
  {question: "___________ scéalta mar sin go rialta ach ní bhíonn aon bhunús leo. (sinn)", answer: "cloisimid", answer2: "cloiseann muid", hint1: "dearfach, sinn"},
  {question: "___________ sí torann na dtonn óna seomra leapa gach oíche.", answer: "cloiseann", hint1: "dearfach"},
  {question: "___________ an madra sin ag tafann de ló is d’oíche. (sinn)", answer: "cloisimid", answer2: "cloiseann muid", hint1: "dearfach, sinn"},
];

var cloisALNi = [
  {question: "____ ___________ aon rud faoi sin na laethanta seo. (mé) ", answer: "ní chloisim", answer2: "ní cloiseann mé", hint1: "mé"},
  {question: "____ ___________ clog an dorais ón seomra thuas staighre. (mé)", answer: "ní chloisim", answer2: "ní cloiseann mé", hint1: "mé"},
  {question: "____ ___________ an torann ón mbóthar ó chuireamar na fuinneoga nua isteach. (sinn)", answer: "ní chloisimid", answer2: "ní cloiseann muid", hint1: "sinn"},
  {question: "Bodhar Uí Laoghaire atá air. ____ ___________ sé ach an méid atá uaidh a chloisteáil. ", answer: "ní chloiseann", hint1: "diúltach"},
  {question: "____ ___________ uaidh ach uair sa bhliain. (sinn) ", answer: "ní chloisimid", answer2: "ní cloiseann muid", hint1: "sinn"},
  {question: "Tá siad bodhar. ____ ___________ siad aon rud. ", answer: "ní chloiseann", hint1: "diúltach"},
  {question: "Uaireanta ____ ___________ sí an clog ag bualadh ar maidin.", answer: "ní chloiseann", hint1: "diúltach"},
  {question: "____ ___________aon gleo ón teach béal dorais níos mó. (sinn)", answer: "ní chloisimid", answer2: "ní cloiseann muid", hint1: "sinn"},
  {question: "____ ___________ an madra ag tafann san oíche níos mó. (mé)", answer: "ní chloisim", answer2: "ní cloiseann mé", hint1: "sinn"},
  {question: "____ ___________ siad aon rud timpeall orthu leis na cluasáin sin atá ac", answer: "ní chloiseann", hint1: "diúltach"},
];

var cloisALBriatharSaor = [
  {question: "___________ na héin ag canadh le breacadh an lae. (dearfach).", answer: "cloistear", hint1: "dearfach"},
  {question: "____ ___________ an chuach go rómhinic in Éirinn níos mó. (diúltach)", answer: "ní chloistear", hint1: "diúltach"},
  {question: "_____ ___________ clog an tséipéil ar fud an pharóiste ar fad. (dearfach)", answer: "cloistear", hint1: "dearfach"},
  {question: "_____ ___________torann na dtonn suas le míle slí ón bhfarraige. (dearfach)", answer: "cloistear", hint1: "dearfach"},
  {question: "_____ ___________ na fáinleoga ag canadh ó aimsir na Cásca ar aghaidh. (dearfach).", answer: "cloistear", hint1: "dearfach"},
  {question: "_____ ___________ faoi na fadhbanna i gcónaí agus is annamh a bhíonn dea-scéal ar an nuach. (dearfach).", answer: "cloistear", hint1: "dearfach"},
  {question: "____ ___________ gach leithscéal uatha mar is i gcoinne a dtola atá siad ag obair. (dearfach).", answer: "cloistear", hint1: "dearfach"},
  {question: "____ ___________ gearáin faoin aon óg go rialta. (dearfach)", answer: "cloistear", hint1: "dearfach"},
  {question: "____ ___________faoi obair mhór a dhéanann daoine óga ar bhonn deonach. (diúltach).", answer: "ní chloistear", hint1: "diúltach"},
  {question: "____ ___________ ag gearán iad riamh ná choíche. (diúltach)", answer: "ní chloistear", hint1: "diúltach"},
];

var cloisALCeisteach = [
  {question: "___________ tú ó Mháire riamh? (dearfach).", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "Éist! ____ ___________ tú í? (dearfach)", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "_____ ___________ scéalta mar sin go rímhinic? (briathar saor, diúltach)", answer: "nach gcloistear", hint1: "briathar saor, diúltach"},
  {question: "_____ ___________an chuach riamh san áit agaibhse na laethanta seo? (briathar saor, dearfach)", answer: "an gcloistear", hint1: "dearfach, briathar saor"},
  {question: "_____ ___________ tú an gaiscíoch atá ag caint? (dearfach).", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "_____ ___________ an drochscéal níos minicí ná an dea-scéal? (briathar saor, diúltach).", answer: "nach gcloistear", hint1: "briathar saor, diúltach"},
  {question: "____ ___________ tú torann an tráchta nó an gcuireann sé isteach ort? (dearfach).", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "____ ___________ tú í? Shílfeá nach leáfadh an t-im ina béal! (dearfach)", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "____ ___________aon rud anois faoi na bréaga ar fad a d’inis sé fadó? (briathar saor, diúltach).", answer: "nach gcloistear", hint1: "briathar saor, diúltach"},
  {question: "____ ___________ tú an torann atá thuas staighre? (dearfach).", answer: "an gcloiseann", hint1: "dearfach"},
];

var cloisALSpleach = [
  {question: "Tá sé cruthaithe ____ ___________ madraí fuaimeanna nach gcloiseann daoine. (dearfach)", answer: "go gcloiseann", hint1: "dearfach"},
  {question: "Cé go bhfuil sé gan aithne gan urlabhra ceapaim ____ ___________ sé fós tú. (dearfach)", answer: "go gcloiseann", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ drochscéalta níos minicí ná dea-scéalta. (briathar saor, dearfach)", answer: "go gcloistear", hint1: "dearfach, briathar saor"},
  {question: "Is cosúil ____ ___________ na rónta ag glaoch ón trá gach maidin. (briathar saor, dearfach)", answer: "go gcloistear", hint1: "dearfach, briathar saor"},
  {question: "Tá a fhios agam ____ ___________ sí gach ráfla a bhíonn ag dul timpeall. (dearfach)", answer: "go gcloiseann", hint1: "dearfach"},
  {question: "Glaoigh arís. Is cosúil ____ ___________ sé tú. (diúltach)", answer: "nach gcloiseann", hint1: "diúltach"},
  {question: "Deir sí ____ ___________ sí aon aláram ag bualadh faoi láthair. (diúltach)", answer: "nach gcloiseann", hint1: "diúltach"},
  {question: "Is cosúil ____ ___________ clog na scoile ag bualadh ar fud na comharsanachta. (briathar saor, dearfach)", answer: "go gcloistear", hint1: "dearfach, briathar saor"},
  {question: "Is dóigh liom ____ ___________an madra sionnaigh i lár na hoíche. (dearfach)", answer: "go gcloiseann", hint1: "dearfach"},
  {question: "Deir siad ____ ___________an chuach chomh minic sin in Éirinn le blianta beaga anuas. (briathar saor, diúltach)", answer: "nach gcloistear", hint1: "diúltach, briathar saor"},
];

var cloisALExtraQuestions = [
  {question: "___________tonnta na farraige ó mo sheomra leapa ar maidin. (mé) ", answer: "cloisim", answer2: "cloiseann mé", hint1: "mé"},
  {question: "___________ an traein ag teacht isteach gach maidin ar a cúig chun a hocht. (sinn).", answer: "cloisimid", answer2: "cloiseann muid", hint1: "sinn"},
  {question: "Tá cluas ghéar aige. ___________ sé gach rud. (dearfach) ", answer: "cloiseann", hint1: "dearfach"},
  {question: "An bhfuil tú bodhar? ____ ___________ tú mé? (diúltach)", answer: "nach gcloiseann", hint1: "diúltach"},
  {question: "Tá siad bodhar. ____ ___________ siad tú. (diúltach) ", answer: "ní chloiseann", hint1: "diúltach"},
  {question: "_____ ___________ tú anois mé? (dearfach)", answer: "an gcloiseann", hint1: "dearfach"},
  {question: "___________ na gálaí gaoithe lasmuigh. (sinn) ", answer: "cloisimid", answer2: "cloiseann muid", hint1: "sinn"},
  {question: "Deir siad ___ ___________ siad aon ghleo ón teach béal dorais. (diúltach)", answer: "nach gcloiseann", hint1: "diúltach"},
  {question: "___ ___________ uatha sin ach go hannamh. (sinn, diúltach)", answer: "ní chloisimid", answer2: "ní chloiseann muid", hint1: "sinn, diúltach"},
  {question: "Is cosúil _____ ___________ an traonach sa chuid is mó den tír seo níos mó. (briathar saor, diúltach) ", answer: "nach gcloistear", hint1: "diúltach, briathar saor"},
];

var cloisAFQuestions = [
  {question: "___________ uatha sách luath. Bí cinnte de sin. (sinn)", answer: "cloisfimid", answer2: "cloisfidh muid", hint1: "dearfach, sinn"},
  {question: "___________ mé na scéalta ar fad chomh luath is a théim ann.", answer: "cloisfidh", hint1: "dearfach"},
  {question: "___________ sí tú ag dul isteach.", answer: "cloisfidh", hint1: "dearfach"},
  {question: "___________ tú an t-aláram ag bualadh ar a sé gach maidin.", answer: "cloisfidh", hint1: "dearfach"},
  {question: "___________ uatha chomh luath is a bhíonn aon scéal acu. (sinn)", answer: "cloisfimid", answer2: "cloisfidh muid", hint1: "dearfach, sinn"},
  {question: "___________ siad an madra agus ní thiocfaidh siad isteach. ", answer: "cloisfidh", hint1: "dearfach"},
  {question: "Go ciúin! Nó___________ siad tú!", answer: "cloisfidh", hint1: "dearfach"},
  {question: "___________ uaithi luath nó mall. (sinn)", answer: "cloisfimid", answer2: "cloisfidh muid", hint1: "dearfach, sinn"},
  {question: "___________ tú crónán na mbeach sa ghairdín.", answer: "cloisfidh", hint1: "dearfach"},
  {question: "___________ tú ceol binn na n-éan ó bhruach na habhann. ", answer: "cloisfidh", hint1: "dearfach"},
];

var cloisAFNi = [
  {question: " ____ ___________ mé an fón ag bualadh leis an gceol ard sin.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ tú go brách arís uatha sin.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "Fan ciúin agus ____ ___________ siad sinn.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ siad an ceol má choimeádann tú íseal é.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ fuaim an tráchta níos mó leis na fuinneoga nua. (sinn)", answer: "ní chloisfimid", answer2: "ní chloisfidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ tú i gceart é gan na cluasáin.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ siad tú muna labhraíonn tú amach os ard.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ siad uaimse é, pé scéal é.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ tú Máire ag clamhsán riamh.", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ tú uaim go ceann cúpla lá mar beidh mé as baile.", answer: "ní chloisfidh", hint1: "diúltach"},
];

var cloisAFBriatharSaor = [
  {question: "___________ na héin ag canadh le breacadh an lae. (dearfach)", answer: "cloisfear", hint1: "dearfach"},
  {question: "____ ___________ í ag bun an halla gan mhicreafón. (diúltach)", answer: "ní chloisfear", hint1: "diúltach"},
  {question: "____ ___________ na scéalta Fiannaíochta á n-insint beo go brách arís. (diúltach)", answer: "ní chloisfear", hint1: "diúltach"},
  {question: "_____ ___________ na sionnaigh ag tafann níos mó ó ghearr siad an fhoraois. (diúltach)", answer: "ní chloisfear", hint1: "diúltach"},
  {question: "Fan socair nó ___________ tú. (dearfach)", answer: "cloisfear", hint1: "dearfach"},
  {question: "___________ clog na scoile arís maidin amárach. (dearfach)", answer: "cloisfear", hint1: "dearfach"},
  {question: "___________ é má thagann sé an treo seo. (dearfach)", answer: "cloisfear", hint1: "dearfach"},
  {question: "____ ___________ na fáinleoga arís go dtí an samhradh seo chugainn. (diúltach)", answer: "ní chloisfear", hint1: "diúltach"},
  {question: "____ ___________ cloig na mainistreach níos mó. Tá an áit tréigthe is dúnta. (diúltach)", answer: "ní chloisfear", hint1: "diúltach"},
  {question: "_____ ___________ na héin ag canadh arís san earrach, le cúnamh Dé. (dearfach)", answer: "cloisfear", hint1: "dearfach"},
];

var cloisAFCeisteach = [
  {question: "___ ___________ tú i gceart é gan chluasáin? (dearfach)", answer: "an gcloisfidh", hint1: "dearfach"},
  {question: "____ ___________ tú an scéal ar fad roimh dheireadh an lae? (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "Meas sibh, ____ ___________ uatha sin arís? (sinn, dearfach)", answer: "an gcloisfimid", answer2: "an gcloisfidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ na leithscéalta ar fad a luaithe is a thagann siad abhaile? (sinn, diúltach)", answer: "nach gcloisfimid", answer2: "nach gcloisfidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sí an scéal ar fad ar an nuacht tráthnóna? (diúltach).", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "____ ___________ uatha sách luath? (sin, diúltach).", answer: "nach gcloisfimid", answer2: "nach gcloisfidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ an torann ón meaisín sin gach áit? (briathar saor, diúltach).", answer: "nach gcloisfimid", answer2: "nach gcloisfidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sibh gach gné den scéal nuair a thagann sí ar ais? (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "____ ___________ tú an fón ag bualadh má fhágann tú i do mhála é? (dearfach).", answer: "an gcloisfidh", hint1: "dearfach"},
  {question: "Nach cuma? ____ ___________ siad fios fátha an scéil iad féin ar aon nós? (diúltach).", answer: "nach gcloisfidh", hint1: "diúltach"},
];

var cloisAFSpleach = [
  {question: "Ní dóigh liom ____ ___________ tú uaidh sin arís. (dearfach)", answer: "go gcloisfidh", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ an scéal ar fad go luath. (briathar saor, dearfach)", answer: "go gcloisfear", hint1: "dearfach, briathar saor"},
  {question: "Táim den tuairim ____ ___________ uatha sin go brách arís. (sinn, diúltach)", answer: "nach gcloisfimid", answer2: "nach gcloisfidh muid", hint1: "diúltach, sinn"},
  {question: "Is ar éigean ____ ___________ aon torann ón ngléas nua seo. (briathar saor, dearfach)", answer: "go gcloisfear", hint1: "dearfach, briathar saor"},
  {question: "Tá a fhios agam ____ ___________ a thuilleadh faoin gcás sin. (briathar saor, diúltach)", answer: "nach gcloisfear", hint1: "diúltach, briathar saor"},
  {question: "Ceapann sí  ____ ___________sí aon rud ar ais go ceann i bhfad. (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________mé uait go luath arís. (dearfach)", answer: "go gcloisfidh", hint1: "dearfach"},
  {question: "Tá a fhios agat ____ ___________ siad uaimse é. (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "Tá a fhios agam ____ ___________ tú gach rud go soiléir ón áit seo. (dearfach)", answer: "go gcloisfidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________tú aon torann aisteach sa teach arís anocht. (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
];

var cloisAFExtraQuestions = [
  {question: "___________ an nuacht ar an raidió go luath. (sinn, dearfach)", answer: "cloisfimid", answer2: "cloisfidh muid", hint1: "dearfach, sinn"},
  {question: "___________ tú na scéalta go léir níos déanaí. (dearfach)", answer: "cloisfidh", hint1: "dearfach"},
  {question: "____ ___________ Seán pé ráflaí atá ag dul timpeall. (dearfach)", answer: "cloisfidh", hint1: "dearfach"},
  {question: "____ ___________ tú aon rud eile faoin scéal sin níos mó. (diúltach)", answer: "ní chloisfidh", hint1: "diúltach"},
  {question: "____ ___________ an scéal iomlán go brách, is dócha. (sinn, diúltach)", answer: "ní chloisfimid", answer2: "ní chloisfidh muid", hint1: "diúltach, sinn"},
  {question: "An dóigh leat ______ ___________ uatha sin arís? (sinn, dearfach)", answer: "go cloisfimid", answer2: "go gcloisfidh muid", hint1: "diúltach"},
  {question: "Fan agus ____ ___________ tú an toirneach arís ar ball beag? (dearfach)", answer: "cloisfidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ tú aon luchóg eile sa chistin anocht. (diúltach)", answer: "nach gcloisfidh", hint1: "diúltach"},
  {question: "____ ___________ an ceolchoirm ón áit seo? (sinn, dearfach)", answer: "an gcloisfimid", hint1: "dearfach, sinn"},
  {question: "____ ___________ ár ndóthain faoi amárach? (sinn, diúltach)", answer: "nach gcloisfimid", answer2: "nach gcloisfidh muid", hint1: "diúltach, sinn"},
];

var cloisMCQuestions = [
  {question: "Bhí cluas an-ghéar aici. ___________ sí biorán ag titim.", answer: "chloisfeadh ", hint1: "dearfach"},
  {question: "___________ é dá mbeifeá ag éisteacht go cúramach. (tú)", answer: "chloisfeá", answer2: "chloisfeadh tú", hint1: "dearfach, tú"},
  {question: "___________ é dá labharfadh sé amach i gceart. (mé)", answer: "chloisfinn", answer2: "chloisfeadh mé", hint1: "dearfach, mé"},
  {question: "___________ é dá labharfadh sé amach i gceart. (mé)", answer: "chloisfidís", answer2: "chloisfeadh siad", hint1: "dearfach, siad"},
  {question: "___________ sé an páiste murach go raibh sé ag éisteacht le ceol ard.", answer: "chloisfeadh ", hint1: "dearfach"},
  {question: " ___________ tú dá n-osclófá an doras sin. (siad) ", answer: "chloisfidís", answer2: "chloisfeadh siad", hint1: "dearfach, siad"},
  {question: "___________ mé ag glaoch murach go raibh tromchodladh orthu. (siad)", answer: "chloisfidís", answer2: "chloisfeadh siad", hint1: "dearfach, siad"},
  {question: "___________ gach scairt gháire uatha agus iad ag fanacht leis an toradh. (tú)", answer: "chloisfeá", answer2: "chloisfeadh tú", hint1: "dearfach, tú"},
  {question: "___________ é ach amháin go rabhamar ag caint eadrainn féin ag an am. (sinn)", answer: "chloisfimis", answer2: "chloisfeadh muid", hint1: "dearfach, muid"},
  {question: "___________ sé aon rud a bheadh ag dul thar bhráid.", answer: "chloisfeadh ", hint1: "dearfach"},
];

var cloisMCNi = [
  {question: "____ ___________ an gadaí ag teacht isteach ach amháin go raibh mé i mo dhúiseacht. (mé)", answer: "ní chloisfinn", answer2: "ní chloisfeadh mé", hint1: "mé, diúltach"},
  {question: "____ ___________ ceol mar sin in aon áit eile. (tú)", answer: "ní chloisfea", answer2: "ní chloisfeadh tú", hint1: "tú, diúltach"},
  {question: "____ ___________ sinn ach amháin go raibh siad ag fanacht linn. (siad)", answer: "ní chloisfidís", answer2: "ní chloisfeadh siad", hint1: "siad, diúltach"},
  {question: "____ ___________ seisean stoirm thintrí lasmuigh dá mbeadh sé ina chodladh. ", answer: "ní chloisfeadh", hint1: "diúltach"},
  {question: "____ ___________ uatha murach go raibh siad ag lorg rud éigin. (sinn)", answer: "ní chloisfimis", answer2: "ní chloisfeadh muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ an fón ag bualadh dá mbeinn fós istigh sa teach tábhairne. (mé)", answer: "ní chloisfinn", answer2: "ní chloisfeadh mé", hint1: "mé, diúltach"},
  {question: "____ ___________ Nóra aon rud timpeall uirthi dá mbeadh sí dírithe ar a cuid staidéir. ", answer: "ní chloisfeadh", hint1: "diúltach"},
  {question: "____ ___________ í muna gcuirfeá cluas le héisteacht ort féin. (tú)", answer: "ní chloisfea", answer2: "ní chloisfeadh tú", hint1: "tú, diúltach"},
  {question: "____ ___________ ceol chomh maith leis sin ach go fíor annamh. (tú)", answer: "ní chloisfea", answer2: "ní chloisfeadh tú", hint1: "tú, diúltach"},
  {question: "____ ___________ é ach amháin go raibh an fhuinneog ar oscailt. (sinn)", answer: "ní chloisfimis", answer2: "ní chloisfeadh muid", hint1: "sinn, diúltach"},
];

var cloisMCBriatharSaor = [
  {question: "___________ an chaint dá mbeadh an fhuinneog ar oscailt. (dearfach)", answer: "chloisfí", hint1: "dearfach"},
  {question: "____ ___________ faic faoin eachtra murach go raibh tuairisceoir ar an láthair. (diúltach) ", answer: "ní chloisfí", hint1: "diúltach"},
  {question: "___________ an fón ag bualadh dá mbeadh an raidió ar siúl. (diúltach)", answer: "ní chloisfí", hint1: "diúltach"},
  {question: "____ ___________ na páistí ag súgradh sa chlós dá mbeadh an scoil ar oscailt. (dearfach)", answer: "chloisfí", hint1: "dearfach"},
  {question: "____ ___________ torann ar bith dá mbeadh an fhuinneog dúnta. (diúltach)", answer: "ní chloisfí", hint1: "diúltach"},
  {question: "____ ___________ an gadhar i gcéin is i gcóngar dá bhfágfaí leis féin sa ghairdín é. (dearfadh)", answer: "chloisfí", hint1: "dearfach"},
  {question: "___ ___________ an gadaí ag briseadh isteach murach an t-aláram a bheith ar siúl. (diúltach) ", answer: "ní chloisfí", hint1: "diúltach"},
  {question: "Dá mbeidís sa teach ___________  iad. (dearfach) ", answer: "chloisfí", hint1: "dearfach"},
  {question: "Dá mbeadh lucha sa chistin___________ iad. (dearfach) ", answer: "chloisfí", hint1: "dearfach"},
  {question: "____ ___________ iad dá mbeadh gaoth anoir ag séideadh. (diúltach)", answer: "ní chloisfí", hint1: "diúltach"},
];

var cloisMCCeisteach = [
  {question: "___ ___________ sé mé dá rachainn isteach sa seomra ina bhfuil sé? (dearfach)", answer: "an gcloisfeadh", hint1: "dearfach"},
  {question: "____ ___________ é sin dá mbeadh an doras dúnta? (tú, dearfach)", answer: "an gcloisfeá", answer2: "an gcloisfeadh tú", hint1: "dearfach, tú"},
  {question: "____ ___________sí an fón fiú dá mbeadh sí ina codladh? (diúltach)", answer: "nach gcloisfeadh", hint1: "diúltach"},
  {question: "____ ___________ an t-aláram in aon áit sa bhfoirgneamh? (tú, diúltach).", answer: "nach gcloisfeá", answer2: "nach gcloisfeadh tú", hint1: "diúltach, tú"},
  {question: "____ ___________  tú dá rachfá isteach ar do bharraicíní? (briathar saor, dearfach).", answer: "an gcloisfí", hint1: "dearfach, briathar saor"},
  {question: "____ ___________  sí sin biorán ag titim? (diúltach)", answer: "nach gcloisfeadh", hint1: "diúltach"},
  {question: "____ ___________ i gceart é gan chluasáin? (tú, dearfach).", answer: "an gcloisfeá", answer2: "an gcloisfeadh tú", hint1: "dearfach, tú"},
  {question: "____ ___________ sinn dá leanaimis orainn ag béicíl in ard ár gcinn is ár ngutha? (siad, dearfach)", answer: "an gcloisfidís", answer2: "an gcloisfeadh siad", hint1: "dearfach, siad"},
  {question: "____ ___________ an páiste tú dá rachfá isteach ina sheomra san oíche? (dearfach).", answer: "an gcloisfeadh", hint1: "dearfach"},
  {question: "____ ___________ na madraí uaidh seo dá mbeidís i ndiaidh na gcaorach? (tú, diúltach).", answer: "nach gcloisfeá", answer2: "nach gcloisfeadh tú", hint1: "diúltach, tú"},
];

var cloisMCSpleach = [
  {question: "Bhí mé cinnte ____ ___________ éinne tú ach bhí dul amú orm. (diúltach)", answer: "nach gcloisfeadh", hint1: "diúltach"},
  {question: "Bhí mé ag súil  ____ ___________ an madra in áit éigin ach níor chuala. (mé, dearfach)", answer: "go gcloisfinn", hint1: "dearfach, mé"},
  {question: "Nach raibh a fhios agat ____ ___________ sí an scéal luath nó mall? (dearfach)", answer: "go gcloisfeadh", hint1: "dearfach, said"},
  {question: "Mhionnaigh is mhódaigh sí  ____ ___________ sí an fón pé am a bhuailfeadh sé. (dearfach)", answer: "go gcloisfeadh", hint1: "dearfach, said"},
  {question: "Bhí mé ag súil ____ ___________an madra ag tafann. (siad, diúltach)", answer: "nach gcloisfidís", answer2: "nach gcloisfeadh siad", hint1: "diúltach, said"},
  {question: "Bhí a fhios agam go maith ____ ___________ ag teacht isteach mé. (siad, dearfach)", answer: "go gcloisfidís", answer2: "go gcloisfeadh siad", hint1: "dearfach, said"},
  {question: "Bhí mé ag súil ____ ___________ uaidh ina dhiaidh sin ach níor chuala. (mé, dearfach)", answer: "go gcloisfinn", answer2: "go gcloisfeadh mé", hint1: "diúltach, mé"},
  {question: "Dúirt siad ____ ___________ uatha go foirmeálta laistigh de sheachtain. (mé, dearfach)", answer: "go gcloisfinn", answer2: "go gcloisfeadh mé", hint1: "diúltach, mé"},
  {question: "Bhí a fhios agam go maith ___ ___________ aon rud eile uatha sin. (siad, diúltach)", answer: "nach gcloisfidís", answer2: "nach gcloisfeadh siad", hint1: "diúltach, said"},
  {question: "Bhí a fhios agam ___ ___________an léachtóir sin ó bhun an tseomra. (tú, diúltach)", answer: "nach gcloisfeá", answer2: "nach gcloisfeadh tú", hint1: "diúltach, tú"},
];

var cloisMCExtraQuestions = [
  {question: "___________ é dá mbeadh sé sa teach. (mé, dearfach)", answer: "chloisfinn", answer2: "chloisfeadh mé", hint1: "mé, dearfach"},
  {question: "An dóigh leat____ ___________ go soiléir é gan chluasáin. (tú, dearfach) ", answer: "go gcloisfeá", answer2: "go gcloisfeadh tú", hint1: "tú, dearfach"},
  {question: "____ ___________ an stoirm ón seomra taobh thiar.  (tú, diúltach)", answer: "nach gcloisfeá", answer2: "nach gcloisfeadh tú", hint1: "tú, diúltach"},
  {question: "____ ___________sinn murach gur thit Breandán i ndiaidh a chúil. (siad, diúltach)", answer: "ní chloisfidís", answer2: "ní chloisfeadh siad", hint1: "siad, diúltach"},
  {question: "____ ___________an gadaí ag an bhfuinneog murach an madra. (sinn, diúltach)", answer: "ní chloisfimis", answer2: "ní chloisfeadh muid", hint1: "sinn, diúltach"},
  {question: "Bhí teannas sa seomra agus ___________ biorán ag titim. (tú, dearfach)", answer: "chloisfeá", hint1: "tú, diúltach"},
  {question: "___ ___________ na Fianna ag teacht amach as an gcoill le titim na hoíche. (tú, dearfach) ", answer: "chloisfeá", answer2: "chloisfeadh tú", hint1: "tú, dearfach"},
  {question: "____ ___________ mórán cainte faoi Éirinn i Londain faoi láthair? (tú, dearfach)", answer: "an gcloisfeá", answer2: "an gcloisfeadh tú", hint1: "tú, dearfach"},
  {question: "Dá gcuirfinn an scéal sin amach an dóigh leat ___ ___________ sé é? (dearfadh)", answer: "go gcloisfeadh", hint1: "diúltach"},
  {question: "Tá mé cinnte ___ ___________é dá mbeadh sé sa seomra. (mé, dearfach)", answer: "go gcloisfinn", answer2: "go gcloisfeadh mé", hint1: "mé, dearfach"},
];


var cloisQuiz = [
  {question: "___________ mé an scéal sin fiche uair cheana. (mé, aimsir chaite, dearfach)", answer: "chuala", hint1: "aimsir chaite, dearfach"},
  {question: "_____ __________ tú an méid a tharla do Shinéad le gairid? (aimsir chaite, dearfach)", answer: "ar chuala", hint1: "aimsir chaite, dearfach"},
  {question: "____ ___________ siad mé ag teacht isteach. (aimsir chaite, diúltach)", answer: "níor chuala", hint1: "aimsir chaite, diúltach"},
  {question: "___  ___________ an pléasc fiche míle ó bhaile. (briathar saor, aimsir chaite)", answer: "chualathas", hint1: "aimsir chaite, briathar saor"},
  {question: "____ ___________ an coileach ag glaoch le breacadh an lae gach maidin. (mé, dearfach)", answer: "cloisim", answer2: "cloiseann mé", hint1: "aimsir laithreach, dearfach, mé"},
  {question: "______ ___________ mé scéal ná duan ó Liam ó d’imigh sé. (aimsir chaite, diúltach)", answer: "níor chuala", hint1: "aimsir chaite, diúltach"},
  {question: "___________ ceannlínte na nuachta gach maidin sula bhfágaimid an teach. (sinn, dearfach)", answer: "cloisimid", answer2: "cloiseann muid", hint1: "aimsir laithreach, dearfach, muid"},
  {question: "____ ___________aon rud faoin scéal sin níos mó. (briathar saor, aimsir láithreach, diúltach)", answer: "níor chloistear", hint1: "briathar saor, diúltach"},
  {question: "____ ___________ na páistí béal dorais ag screadaíl gach oíche. (sinn, dearfach)", answer: "cloisimid", answer2: "cloiseann muid", hint1: "aimsir laithreach, dearfach, sinn"},
  {question: "Tá mé cinnte____ ___________ sí mé ach níl sí ag ligean faic uirthi féin. (dearfach, aimsir láithreach)", answer: "go gcloiseann", hint1: "aimsir laithreach, dearfach"},
  {question: "___ ___________ uaidh lá de na laethanta seo. (sinn, dearfadh)", answer: "cloisfimid", answer2: "cloisfidh muid", hint1: "aimsir fháistineach, dearfach, sinn"},
  {question: "____ ___________ bonnán na dtraenacha go rialta ar maidin. (briathar saor, aimsir láithreach, dearfach)", answer: "cloistear", hint1: "aimsir laithreach, briathar saor, dearfach"},
  {question: "Táim cinnte ______ ___________ é dá mbeadh sé in aon chóngar dínn. (sinn, dearfach) ", answer: "go gcloisfimis", answer2: "go gcloisfeadh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú é má bhíonn an doras dúnta? (aimsir fháistineach, dearfach)", answer: "an gcloisfidh", hint1: "aimsir fháistineach, dearfach"},
  {question: "Is cinnte ____ ___________é dá mbeadh sé anseo go rialta. (briathar saor, dearfach)", answer: "go gcloisfí", hint1: "briathar saor, dearfach"},
  {question: "____ ___________ tú an scéal sin riamh cheana? (diúltach)", answer: "nár chuala", hint1: "diúltach"},
  {question: "____ ___________ faoi ach amháin go raibh mé ag caint le Nóra inné. (mé, aimsir fháistineach, diúltach)", answer: "ní chloisfinn", answer2: "ní chloisfeadh mé", hint1: "aimsir fháistineach, diúltach, mé"},
  {question: "____ ___________ tú gan an áis éisteachta? (siad, modh coinníollach, dearfach)", answer: "an gcloisfidís", answer2: "an gcloisfeadh siad", hint1: "modh coinníollach, dearfach, siad"},
  {question: "___________ é leis an ngleo ar fad a bhí timpeall. (tú, modh coinníollach, diúltach)", answer: "ní chloisfeá", answer2: "ní chloisfeadh tú", hint1: "modh coinníollach, diúltach, tú"},
];

//DÉAN
//déan AC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACQuestions = [
  {question: "___________ mé é sin go minic cheana.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ sí gach rud go slachtmhar.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ sé gach a dúradh leis a dhéanamh.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ muid ár ndícheall leis ach níor éirigh linn.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ tú an rud ceart.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ siad botún ach cén dochar?", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ sí é de réir na rialacha a bhí leagtha síos di.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ tú gaisce, bail ó Dhia ort.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ mé gearán ach bhí sé fuar agam.", answer: "Rinne", hint1: "dearfach"},
  {question: "___________ sí cás maith ach ní bhfuair sí aon éisteacht.", answer: "Rinne", hint1: "dearfach"},
];

//déan AC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACNi = [
  {question: "____ ___________ mé dochar ar bith dó.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ sé aon rud mar sin riamh cheana. ", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ sí aon rud as ord.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ siad ach cupán amháin a bhriseadh.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ sí faic ach leabhar a léamh.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ siad stop ná staonadh nó gur bhain siad a gceann scríbe amach.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ siad aon ghearán leis an mbainistíocht mar gheall ar an áit.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ tusa aon rud as bealach.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ mé dearmad ar an rud a dúirt sé riamh.", answer: "ní dhearna", hint1: "diúltach"},
  {question: "____  ___________ tusa botún mar sin riamh.", answer: "ní dhearna", hint1: "diúltach"},
];

//dean AC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACBriatharSaor = [
  {question: "___________ a leithéid sin riamh cheana. (diúltach)", answer: "ní dhearnadh", hint1: "diúltach"},
  {question: "___________ a leithéid sin riamh cheana. (diúltach)", answer: "rinneadh", hint1: "dearfach"},
  {question: "___ ___________ obair mhór leis an turgnamh sin. (dearfach)", answer: "rinneadh", hint1: "dearfach"},
  {question: "___ ___________ an obair sin ar fad le linn laethanta saoire na Cásca. (dearfach)", answer: "rinneadh", hint1: "dearfach"},
  {question: "___________ scrios ar an áit le linn na stoirme. (dearfadh)", answer: "rinneadh", hint1: "dearfach"},
  {question: "___________ aon damáiste don teach ach scriosadh an garáiste . (diúltach)", answer: "ní dhearnadh", hint1: "diúltach"},
  {question: "____ ___________ aon rud as ord ar an turas scoile. (diúltach)", answer: "ní dhearnadh", hint1: "diúltach"},
  {question: "___________ aon dochar do na hainmhithe ach scriosadh an cró. (diúltach)", answer: "ní dhearnadh", hint1: "diúltach"},
  {question: "___________ scéal mór de cé nár tharla mórán. (dearfach)", answer: "rinneadh", hint1: "dearfach"},
  {question: "____ ___________ damáiste mór don chistin nuair a chuaigh an sorn trí thine. (dearfach)", answer: "rinneadh", hint1: "dearfach"},
];

//dean AC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACCeisteach = [
  {question: "____ ___________ tú an obair sin ar fad leat féin? (dearfach)", answer: "an ndearna", hint1: "dearfach"},
  {question: "____ ___________ sé é sin d’aon ghnó (ceann ar aghaidh)? (dearfach)", answer: "an ndearna", hint1: "dearfach"},
  {question: "____ ___________ siad aon rud as bealach? (dearfach)", answer: "an ndearna", hint1: "dearfach"},
  {question: "____ ___________ an damáiste sin ar fad ag an deireadh seachtaine? (briathar saor,dearfach)", answer: "an ndearnadh", hint1: "briathar saor, dearfach"},
  {question: "____ ___________sé an obair ar fad as a stuaim féin? (dearfach)", answer: "an ndearna", hint1: "dearfach"},
  {question: "____ ___________  sí botún mór agus a béal a oscailt sa chéad áit? (diúltach)", answer: "nach ndearna", hint1: "diúltach"},
  {question: "____ ___________ an stoirm srios dochreidte? (diúltach)", answer: "nach ndearna", hint1: "diúltach"},
  {question: "____ ___________ siad an rud céanna anuraidh? (diúltach)", answer: "nach ndearna", hint1: "diúltach"},
  {question: "____ ___________ botún leis na figiúirí sin? (briathar saor, dearfach)", answer: "an ndearnadh", hint1: "briathar saor, dearfach"},
  {question: "____ ___________siad an glantachán i gceart? (dearfach)", answer: "an ndearna", hint1: "dearfach"},
];

//dean AC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACSpleach = [
  {question: "Dúirt sí ____ ___________ sí gach ar iarradh uirthi. (dearfach)", answer: "go ndearna", hint1: "dearfach"},
  {question: "Shéan siad ____ ___________ siad aon rud nach raibh ceadaithe. (dearfach)", answer: "go ndearna", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ sé go rómhaith sa chomórtas amhránaíochta. (dearfach)", answer: "go ndearna", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ tú do dhícheall agus go n-éireoidh leat. (dearfach)", answer: "go ndearna", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ mórán dochair do na tithe ar an oileán. (briathar saor, dearfach)", answer: "go ndearnadh", hint1: "briathar saor, dearfach"},
  {question: "Tá mé cinnte ____ ___________ sé a sheacht ndícheall. (dearfach)", answer: "go ndearna", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________ siad faic na ngrást le mí anuas. (diúltach)", answer: "nach ndearna ", hint1: "diúltach"},
  {question: "Chuala mé ____ ___________ siad faic na ngrást le mí anuas. (diúltach)", answer: "nach ndearna ", hint1: "diúltach"},
  {question: "Tá a fhios agam go maith ____ ___________tusa é. (diúltach)", answer: "nach ndearna ", hint1: "diúltach"},
  {question: "An bhfuil tú cinnte ____ ___________tú i gceart é? (dearfach)", answer: "go ndearna", hint1: "dearfach"},
];

//dean AC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//dean AC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanACExtraQuestions = [
  {question: "", answer: "rinne", hint1: "dearfach"},
  {question: "", answer: "rinne", hint1: "dearfach"},
  {question: "", answer: "ní dhearna", hint1: "diúltach"},
  {question: "", answer: "ní dhearna", hint1: "diúltach"},
  {question: "", answer: "an ndearna", hint1: "dearfach"},
  {question: "", answer: "an ndearna", hint1: "dearfach"},
  {question: "", answer: "nach ndearna", hint1: "diúltach"},
  {question: "", answer: "rinneadh", hint1: "briathar saor, dearfach"},
  {question: "", answer: "nach ndearna", hint1: "diúltach"},
  {question: "", answer: "go ndearna", hint1: "dearfach"},
];

//dean AL Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALQuestions = [
  {question: "___________ an botún áirithe sin go minic. (mé)", answer: "déanaim", hint1: "mé"},
  {question: "___________ sí sárobair i gcónaí.", answer: "déanann", hint1: "dearfach"},
  {question: "___________ an rud céanna gach Satharn. (sinn)", answer: "déanaimid", hint1: "sinn"},
  {question: "___________ sí a dícheall i gcónaí.", answer: "déanann", hint1: "dearfach"},
  {question: "___________ lón le tógáil liom ag obair gach maidin. (mé)", answer: "déanaim", hint1: "mé"},
  {question: "___________ cinnte de go gcuirim an t-aláram ar siúl gach oíche. (mé)", answer: "déanaim", hint1: "mé"},
  {question: "___________ siad arán baile cúpla uair sa tseachtain.", answer: "déanann", hint1: "dearfach"},
  {question: "___________ sé iarracht mhór i gcónaí.", answer: "déanann", hint1: "dearfach"},
  {question: "___________ siad obair mhaith de ghnáth.", answer: "déanann", hint1: "dearfach"},
  {question: "___________ siad gach rud de réir an leabhair i gcónaí.", answer: "déanann", hint1: "dearfach"},
];

//dean AL Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALNi = [
  {question: "____ ___________ sí aon rud a iarrtar uirthi.", answer: "ní dhéanann", hint1: "diúltach"},
  {question: "____ ___________ sé dinnéar dó féin sa bhaile ach go hannamh.", answer: "ní dhéanann", hint1: "diúltach"},
  {question: "____ ___________ ach na rudaí is mian liom féin. (mé)", answer: "ní dhéanaim", hint1: "mé"},
  {question: "____ ___________ mórán oibre ag an deireadh seachtaine. (sinn)", answer: "ní dhéanaimid", answer2: "ní dhéanann muid", hint1: "sinn"},
  {question: "____ ___________ sé sin aon difríocht domsa.", answer: "ní dhéanann", hint1: "diúltach"},
  {question: "____ ___________ riamh suas ár n-intinn go dtí go mbíonn gach rud soiléir. (sinn)", answer: "ní dhéanaimid", answer2: "ní dhéanann muid", hint1: "sinn"},
  {question: "____ ___________ aon obair ar an Domhnach. (sinn)", answer: "ní dhéanaimid", answer2: "ní dhéanann muid", hint1: "sinn"},
  {question: "____ ___________aon staidéar oíche Dé hAoine. (mé)", answer: "ní dhéanaim", hint1: "mé"},
  {question: "____ ___________ sé tada eile ach clabhsán.", answer: "ní dhéanann", hint1: "diúltach"},
  {question: "____ ___________ sé sin aon difríocht.", answer: "ní dhéanann", hint1: "diúltach"},
];

//dean AL Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALBriatharSaor = [
  {question: "___________ im agus cáis as bainne. (dearfach).", answer: "déantar", hint1: "dearfach"},
  {question: "___________ caranna Volkswagen sa Ghearmáin. (dearfach)", answer: "déantar", hint1: "dearfach"},
  {question: "___________ gnó mór ar an idirlíon roimh Nollaig. (dearfach)", answer: "déantar", hint1: "dearfach"},
  {question: "___________go leor cainte ar an raidió faoi staid na tíre. (dearfach)", answer: "déantar", hint1: "dearfach"},
  {question: "___________gach iarracht na bóithre a choimeád sábháilte. (dearfach).", answer: "déantar", hint1: "dearfach"},
  {question: "_____ ___________caranna in Éirinn níos mó. (diúltach).", answer: "ní dhéantar", hint1: "diúltach"},
  {question: "____ ___________dearmad ar laochra spóirt riamh ina gceantair féin. (diúltach).", answer: "ní dhéantar", hint1: "diúltach"},
  {question: "____ ___________ ach caint faoi ghéarchéim na haeráide. (diúltach)", answer: "ní dhéantar", hint1: "diúltach"},
  {question: "____ ___________mórán iarrachta an áit a choimeád glan. (diúltach).", answer: "ní dhéantar", hint1: "diúltach"},
  {question: "____ ___________ gearán faoin mbialann sin riamh. (diúltach).", answer: "ní dhéantar", hint1: "diúltach"},
];

//dean AL Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALCeisteach = [
  {question: "___________ tú do lón féin gach lá? (dearfach).", answer: "an ndéanann", hint1: "dearfach"},
  {question: "____ ___________ sé aon rud seachas staidéar? (dearfach)", answer: "an ndéanann", hint1: "dearfach"},
  {question: "_____ ___________ tusa cairde go héasca? (dearfach)", answer: "an ndéanann", hint1: "dearfach"},
  {question: "_____ ___________aon rud faoi na daoine a bhíonn ag rothaíocht ar na cosáin anseo timpeall? (briathar saor, dearfach)", answer: "an ndéantar", hint1: "dearfach, briathar saor"},
  {question: "_____ ___________ sibhse obair dheonach riamh? (dearfach).", answer: "an ndéanann", hint1: "dearfach"},
  {question: "_____ ___________ sí gach a n-iarrtar uirthi? (diúltach).", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "____ ___________ siad an botún céanna i gcónaí? (diúltach).", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "____ ___________ gearán faoi sin leis na gardaí go minic! (briathar saor, diúltach)", answer: "nach ndéantar", hint1: "diúltach, briathar saor"},
  {question: "____ ___________siad a ndícheall i gcónaí? (diúltach).", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "____ ___________ meastóireacht rialta ar a gcuid oibre? (briathar saor, diúltach).", answer: "nach ndéantar", hint1: "diúltach, briathar saor"},
];

//dean AL Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALSpleach = [
  {question: "Tá mé cinnte____ ___________ sé a sheacht ndícheall i gcónaí. (dearfach)", answer: "go ndéanann", hint1: "dearfach"},
  {question: "Deir siad ____ ___________ siad aon rud as bealach riamh. (diúltach)", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "Deir sé ____ ___________ tú sárobair i gcónaí. (dearfach)", answer: "go ndéanann", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ iarracht cheart na fadhbanna a réiteach. (briathar saor, dearfach)", answer: "go ndéantar", hint1: "dearfach, briathar saor"},
  {question: "Ceapann sí ____ ___________ aon duine i gceart é ach amháin í féin. (diúltach)", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ sé sin aon difríocht. (dearfach)", answer: "go ndéanann", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ sé sin aon difríocht di féin. (diúltach)", answer: "nach ndéanann", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ aon iarracht cheart na himreoirí óga sa chlub a thabhairt chun cinnn. (briathar saor, dearfach)", answer: "go ndéantar", hint1: "dearfach, briathar saor"},
  {question: "Ní dóigh liom ____ ___________ aon iarracht cheart na himreoirí óga sa chlub a thabhairt chun cinnn. (briathar saor, dearfach)", answer: "go ndéanann", hint1: "dearfach"},
  {question: "Deir siad ____ ___________sé iarracht níos fearr nuair a bhíonn sé faoi bhrú. (dearfach)", answer: "go ndéanann", hint1: "dearfach"},
];

//dean AL Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//dean AL Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanALExtraQuestions = [
  {question: "___________Tomás an t-uafás oibre. (dearfach)", answer: "déanann", hint1: "dearfach"},
  {question: "___________ siad an obair bhaile díreach tar éis scoile. (dearfach).", answer: "déanann", hint1: "dearfach"},
  {question: "____ ___________ sé sin aon mhaitheas d’éinne. (diúltach)", answer: "ní dhéanann", hint1: "diúltach"},
  {question: "____ ___________ rudaí mar sin riamh. (sinn, diúltach)", answer: "ní dhéanaimid", answer2: "ní dhéanann muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ ach an obair atá leagtha amach dom. (mé, diúltach)", answer: "ní dhéanaim", hint1: "mé, diúltach"},
  {question: "_____ ___________ tú obair dheonach riamh? (dearfach)", answer: "an ndéanann", hint1: "dearfach"},
  {question: "___________ aon dochar don teach riamh? (briathar saor, dearfach)", answer: "an ndéantar", hint1: "briathar saor diultach"},
  {question: "___ ___________ meastóireacht ar an gcúrsa gach bliain? (briathar saor, diúltach)", answer: "nach ndéantar", hint1: "briathar saor, diúltach"},
  {question: "Tá mé cinnte ___ ___________ sí a dícheall. (dearfach)", answer: "go ndéanann", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith _____ ___________ sé aon difríocht duitse. (diúltach)", answer: "nach ndéanann", hint1: "diúltach"},
];

//dean AF Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFQuestions = [
  {question: "___________ mé é sin amárach.", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________ mé é chomh luath agus is féidir liom.", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________ sé sin maitheas duit.", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________ é anois díreach. (sinn) ", answer: "déanfaimid", answer2: "déanfaidh muid", hint1: "sinn"},
  {question: "___________ sí bean mhaith fós. ", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________ sé é má bhíonn seans aige.", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________mé margadh leat má éisteann tú.", answer: "déanfaidh", hint1: "dearfach"},
  {question: "___________ an scéal sin a fhiosrú. (sinn)", answer: "déanfaimid", answer2: "déanfaidh muid", hint1: "sinn"},
  {question: "___________ gach is féidir linn a dhéanamh. (sinn)", answer: "déanfaimid", answer2: "déanfaidh muid", hint1: "sinn"},
  {question: "___________ mé duit é a luaithe agus is féidir liom.", answer: "déanfaidh", hint1: "dearfach"},
];

//dean AF Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFNi = [
  {question: " ____ ___________ mé faic eile go fóill.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ sé a leithéid sin go brách arís.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ mé aon rud eile go dtí amárach.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ scéal mór de. Ní fiú é. (sinn)", answer: "ní dhéanfaimid", answer2: "ní dhéanfaidh muid", hint1: "sinn"},
  {question: "____ ___________ sé sin aon mhaitheas duit.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ dearmad go brách ar an oíche sin.  (sinn)", answer: "ní dhéanfaimid", answer2: "ní dhéanfaidh muid", hint1: "sinn"},
  {question: "____ ___________ an botún sin arís. (sinn)", answer: "ní dhéanfaimid", answer2: "ní dhéanfaidh muid", hint1: "sinn"},
  {question: "____ ___________ tú é sin gan chabhair.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ an t-ologón aon mhaitheas d’éinne.", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ Brian ach a laghad agus is féidir leis.", answer: "ní dhéanfaidh", hint1: "diúltach"},
];

//dean AF Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFBriatharSaor = [
  {question: "___________ an margadh luath nó mall. (dearfach)", answer: "déanfar", hint1: "dearfach"},
  {question: "____ ___________ gach rud de réir na rialacha atá leagtha síos. (dearfach)", answer: "déanfar", hint1: "dearfach"},
  {question: "____ ___________ an gnó ar an idirlíon. (dearfach)", answer: "déanfar", hint1: "dearfach"},
  {question: "_____ ___________ gach iarracht an fhadhb a réiteach. (dearfach)", answer: "déanfar", hint1: "dearfach"},
  {question: "___________ praiseach de muna mbíonn siad cúramach. (dearfach)", answer: "déanfar", hint1: "dearfach"},
  {question: "___________ aon rud anois go dtí maidin amárach. (diúltach)", answer: "ní dhéanfar", hint1: "diúltach"},
  {question: "___________ aon rud mar gheall ar na bóithre i mbliana. (diúltach)", answer: "ní dhéanfar", hint1: "diúltach"},
  {question: "____ ___________ aon dul chun cinn gan imreoirí óga a fháil. (diúltach)", answer: "ní dhéanfar", hint1: "diúltach"},
  {question: "____ ___________ an obair sin go dtí tar éis na laethanta saoire. (diúltach)", answer: "ní dhéanfar", hint1: "diúltach"},
  {question: "_____ ___________ aon rud faoi na gearáin sin. (diúltach)", answer: "ní dhéanfar", hint1: "diúltach"},
];

//dean AF Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFCeisteach = [
  {question: "___ ___________ tú é nó an bhfágfaidh tú é? (dearfach)", answer: "an ndéanfaidh", hint1: "dearfach"},
  {question: "____ ___________ sé sin an beart go fóill? (dearfach)", answer: "an ndéanfaidh", hint1: "dearfach"},
  {question: "____ ___________ sí an beart an uair seo? (dearfach)", answer: "an ndéanfaidh", hint1: "dearfach"},
  {question: "____ ___________tú iarracht an rothar a dheisiú? (dearfach)", answer: "an ndéanfaidh", hint1: "dearfach"},
  {question: "____ ___________ iarracht mhór amháin eile sula bhfágfaimid é? (sinn, dearfach).", answer: "an ndéanfaimid", answer2: "an ndéanfaidh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ tú é sin gach aon deacracht. (diúltach).", answer: "nach ndéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ár ndícheall agus cad eile is féidir a dhéanamh? (sinn, diúltach).", answer: "nach ndéanfaimid", answer2: "nach ndéanfaidh muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ aon athrú eile ar an bhfoireann? (briathar saor, dearfach)", answer: "an ndéanfar", hint1: "briathar saor, dearfach"},
  {question: "____ ___________na gardaí tuilleadh fiosrúcháin faoi scéal? (diúltach).", answer: "nach ndéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ é sin i ndeireadh na dála ar aon nós? (briathar saor, diúltach).", answer: "nach ndéanfar", hint1: "briathar saor, diúltach"},
];

//dean AF Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFSpleach = [
  {question: "Ní dóigh liom ____ ___________ siad anocht é. (dearfach)", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ siad i gceart é an uair seo. (dearfach)", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Deir sé ____ ___________ sé é tar éis dinnéir. (dearfach) ", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ sí go maith sna scrúduithe. (dearfach)", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ an obair ar an gcósán roimh dheireadh na bliana. (briathar saor, dearfach)", answer: "go ndéanfar", hint1: "dearfach, briathar saor"},
  {question: "Tá súil agam  ____ ___________aon dochar don teach a fhad is atáimid imithe. (briathar saor, diúltach) ", answer: "nach ndéanfar", hint1: "diúltach, briathar saor"},
  {question: "Tá sí cinnte ____ ___________sí an botún sin arís. (diúltach)", answer: "nach ndéanfaidh", hint1: "diúltach"},
  {question: "Deir siad ____ ___________ siad arís é. (diúltach)", answer: "nach ndéanfaidh", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________ sibh go maith ag an bhFleadh Cheoil. (dearfach)", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Tá súil agam____ ___________mé amadán díom féin anocht thar aon oíche eile. (diúltach)", answer: "nach ndéanfaidh", hint1: "diúltach"},
];

//dean AF Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//dean AF Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanAFExtraQuestions = [
  {question: "Fág go fóill é. ___________ anocht é. (sinn, dearfach)", answer: "déanfaimid", answer2: "déanfaidh muid", hint1: "sinn, dearfach"},
  {question: "___________ mé mo dhícheall. Ní féidir liom níos mó a dhéanamh. (dearfach)", answer: "déanfaidh", hint1: "dearfach"},
  {question: "____ ___________ sé sin aon mhaitheas duitse. (diúltach)", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________aon rud go dtí go mbeidh an t-eolas ar fad againn. (sinn, diúltach)", answer: "ní dhéanfaimid", answer2: "ní dhéanfaidh muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ é luath nó mall. (briathar saor, dearfach)", answer: "déanfar", hint1: "briathar saor, dearfach"},
  {question: "______ ___________ stróic oibre tar éis dóibh an cluiche a bhuachan. (briathar saor, diúltach) ", answer: "ní dhéanfar", hint1: "briathar saor, diúltach"},
  {question: "Tá mé cinnte ____ ___________ tú do sheacht ndícheall sa rás. (dearfach)", answer: "go ndéanfaidh", hint1: "dearfach"},
  {question: "Tá súil agam____ ___________ go maith anocht. (sinn, dearfach) ", answer: "go ndéanfaimid", answer2: "go ndéanfaidh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________é sin in am is i dtráth. (briathar saor, dearfach)", answer: "déanfar", hint1: "briathar saor, dearfach"},
  {question: "____ ___________ tú é sin dom inniu? (dearfach)", answer: "an ndéanfaidh", hint1: "dearfach"},
];

//dean MC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCQuestions = [
  {question: "___________ aon rud ar mhaithe leatsa. (mé)", answer: "dhéanfainn", hint1: "mé"},
  {question: "___________ sé aon rud chun é féin a shábháil.", answer: "dhéanfadh", hint1: "dearfach"},
  {question: "___________ é dá n-íocfaí i gceart muid. (sinn)", answer: "dhéanfaimis", answer2: "dhéanfadh muid", hint1: "sinn"},
  {question: "___________ aon rud don chraic (siad)", answer: "dhéanfaidís", hint1: "siad"},
  {question: "___________ sí a bealach féin dá mbeadh sí ag iarraidh dul ann.", answer: "dhéanfadh", hint1: "dearfach"},
  {question: " ___________ é agus fáilte dá mbeidís á iarraidh. (mé)", answer: "dhéanfainn", hint1: "mé"},
  {question: "___________ aon rud a bheadh ag teastáil uait. (siad)", answer: "dhéanfaidís", hint1: "siad"},
  {question: "___________ é dá mbeifeá ag iarraidh é a dhéanamh. (tú)", answer: "dhéanfá", hint1: "tú"},
  {question: "___________é dá dteipfeadh ar gach rud eile. (sinn)", answer: "dhéanfaimis", answer2: "dhéanfadh muid", hint1: "sinn"},
  {question: "___________ sé aon rud i bhfaiteadh na súl.", answer: "dhéanfadh", hint1: "dearfach"},
];

//dean MC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCNi = [
  {question: "____ ___________é sin ar ór ná ar airgead. (mé)", answer: "Ní dhéanfainn", hint1: "mé"},
  {question: "____ ___________sí botún mar sin riamh ná choiche.", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________rud chomh suarach sin ar ór na cruinne. (siad)", answer: "ní dhéanfaidís", hint1: "siad"},
  {question: "____ ___________sé dom é cé go raibh mé ag impí air cabhrú liom.", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________ é sin ach amháin dá mbeadh teipithe ar gach seift eile. (tú)", answer: "ní dhéanfá", hint1: "tú"},
  {question: "____ ___________rud mar sin aon chiall.", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________é sin ach amháin dá mbeimis i dtrioblóid cheart. (sinn)", answer: "Ní dhéanfaimis", answer2: "Ní dhéanfadh muid", hint1: "sinn"},
  {question: "____ ___________éinne le ciall a leithéid de rud.", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________ sé aon chiall an plean a chaitheamh san aer anois.", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________ an bia sin aon dochar duit.", answer: "Ní dhéanfadh", hint1: "diúltach"},
];

//dean MC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCBriatharSaor = [
  {question: "___________ é dá mbeadh sé níos éasca. (dearfach)", answer: "dhéanfaí", hint1: "dearfach"},
  {question: "____ ___________ praiseach den scéal dá ndéarfaidís aon rud eile. (dearfach)", answer: "dhéanfaí", hint1: "dearfach"},
  {question: "___________ i gceart é da nglacfaidís a gcuid ama leis. (dearfach)", answer: "dhéanfaí", hint1: "dearfach"},
  {question: "____ ___________scrios orthu dá mbeadh foireann cheart ina gcoinne. (dearfach)", answer: "dhéanfaí", hint1: "dearfach"},
  {question: "____ ___________ praiseach de gach rud dá leanfaidís orthu. (dearfach)", answer: "dhéanfaí", hint1: "dearfach"},
  {question: "____ ___________ praiseach de gach rud dá leanfaidís orthu. (dearfach)", answer: "ní dhéanfaí", hint1: "diúltach"},
  {question: "___ ___________ an té murach go raibh gach duine á éileamh. (diúltach)", answer: "ní dhéanfaí", hint1: "diúltach"},
  {question: "___________  aon dul chun cinn murach an teacht aniar a bhí sa phobal. (diúltach)", answer: "ní dhéanfaí", hint1: "diúltach"},
  {question: "___________ aon rud mar sin in aon scoil in Éirinn. (diúltach)", answer: "ní dhéanfaí", hint1: "diúltach"},
  {question: "____ ___________ fiosruchán mar sin murach go raibh amhras an-mhór ar na gardaí. (diúltach)", answer: "ní dhéanfaí", hint1: "diúltach"},
];

//dean MC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCCeisteach = [
  {question: "", answer: "an ndéanfá", hint1: "tú, dearfach"},
  {question: "", answer: "an ndéanfaidís", hint1: "siad, dearfach"},
  {question: "", answer: "an ndéanfadh", hint1: "dearfach"},
  {question: "", answer: "an ndéanfadh", hint1: "dearfach"},
  {question: "", answer: "an ndéanfadh", hint1: "dearfach"},
  {question: "", answer: "Nach ndéanfainn", hint1: "diúltach, mé"},
  {question: "", answer: "Nach ndéanfaidís", hint1: "diúltach, siad"},
  {question: "", answer: "Nach ndéanfadh", hint1: "diúltach"},
  {question: "", answer: "Nach ndéanfadh", hint1: "diúltach"},
  {question: "", answer: "Nach ndéanfaí", hint1: "briathar saor, diúltach"},
];

//ith MC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCSpleach = [
  {question: "Dúirt sé ____ ___________ sé é ach ní dhearna. (dearfach)", answer: "go ndéanfadh", hint1: "dearfach"},
  {question: "Tá mé cinnte  ____ ___________ aon rud chun an duais a bhuachan. (siad, dearfach)", answer: "go ndéanfaidís", hint1: "siad, dearfach"},
  {question: "Gheall siad ____ ___________ é an chéad rud ar maidin. (siad, dearfach)", answer: "go ndéanfaidís", hint1: "siad, dearfach"},
  {question: "Dúirt sé  ____ ___________ sé aon rud a theastaigh uaim a dhéanamh. (dearfach)", answer: "go ndéanfadh", hint1: "dearfach"},
  {question: "Mhaigh siad ____ ___________rud mar sin ar ór na cruinne. (diúltach)", answer: "nach ndéanfaidís", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________ sise aon dochar d’aon neach beo. (diúltach)", answer: "nach ndéanfadh", hint1: "diúltach"},
  {question: "Dúirt tú ____ ___________ arís é ach ní mar sin a tharla. (tú, diúltach)", answer: "nach ndéanfá", hint1: "tú, diúltach"},
  {question: "Dúirt sé ____ ___________ sé aon iarracht í a stopadh. (diúltach)", answer: "nach ndéanfadh", hint1: "diúltach"},
  {question: "Bhíomar cinnte ___ ___________ an bheirt acu am i bpríosún. (dearfach)", answer: "go ndéanfadh", hint1: "dearfach"},
  {question: "Dúirt sí ___ ___________sí gach rud in aon lá amháin. (dearfach)", answer: "go ndéanfadh", hint1: "dearfach"},
];

//dean MC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//dean MC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var deanMCExtraQuestions = [
  {question: "Fág marbh é. ___________ sé aon mhaitheas duit ar aon nós. (diúltach)", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________ sí go han-mhaith dá ndéanfadh sí aon iarracht cheart. (dearfach)", answer: "Dhéanfadh", hint1: "dearfach"},
  {question: "Tá siad an-deas. ___________ rud ar bith duit.  (siad, dearfach)", answer: "Dhéanfaidís", hint1: "siad, dearfach"},
  {question: "____ ___________sé é dá mbeadh eagla air go mbéarfaí amuigh air. (diúltach)", answer: "Ní dhéanfadh", hint1: "diúltach"},
  {question: "____ ___________é dá mbeadh géarghá leis. (briathar saor, dearfach)", answer: "Dhéanfaí", hint1: "briathar saor, dearfach"},
  {question: "___ ___________ aon dul chun cinn dá mbeadh gach duine diúltach faoi. (briathar saor, diúltach)", answer: "Ní dhéanfaí", hint1: "briathar saor, diúltach"},
  {question: "___ ___________ sí rud mar sin dá mbeadh sí ar buile? (dearfach)", answer: "An ndéanfadh", hint1: "dearfach"},
  {question: "____ ___________ éinne botún beag mar sin? (diúltach)", answer: "Nach dhéanfadh", hint1: "diúltach"},
  {question: "Dúirt mé ___ ___________ é ar dtús ach d’athraigh mé m’intinn. (dearfadh)", answer: "go ndéanfainn", hint1: "dearfach"},
  {question: "Bhí a fhios agam go maith ___ ___________é. (siad, diúltach)", answer: "nach ndéanfaidís", hint1: "siad, diúltach"},
];

//Déan Quiz
var deanQuiz = [
  {question: "___________ mé mo dhícheall ach theip orm. (mé, dearfach)", answer: "rinne", hint1: "dearfach"},
  {question: "_____ __________ siad a seacht ndícheall ach níor éirigh leo. (dearfach)", answer: "rinne", hint1: "dearfach"},
  {question: "____ ___________ mé tada eile le seachtain anuas. (diúltach)", answer: "Ní dhearna", hint1: "diúltach"},
  {question: "Bhí a fhios acu go dtarlódh sé sin ach ___  ___________ siad tada faoi. (diúltach) ", answer: "Ní dhearna", hint1: "diúltach"},
  {question: "____ ___________ praiseach den obair mhór a bhí déanta roimhe sin. (briathar saor, dearfach)", answer: "rinneadh", hint1: "briathar saor, dearfach"},
  {question: "______ ___________ obair chomh maith leis seo le fada an lá. (briathar saor, aimsir chaite, diúltach)", answer: "Ní dhearnadh", hint1: "briathar saor, diúltach"},
  {question: "___________ siad a ndícheall i gcónaí. (dearfach)", answer: "rinne", hint1: "dearfach"},
  {question: "____ ___________ seisean tada eile ach caint gach lá. (aimsir láithreach, diúltach)", answer: "Ní dhéanann", hint1: "aimsir láithreach, diúltach"},
  {question: " ____ ___________ an botún sin go mion minic. (briathar saor, dearfach, aimsir láithreach)", answer: "déantar", hint1: "briathar saor, dearfach, aimsir láithreach"},
  {question: "____ ___________ mé an botún sin go brách arís. (diúltach)", answer: "ní dhéanfaidh", hint1: "diúltach"},
  {question: "____ ___________ mórán eile ach staidéar i rith na seachtaine. (mé, diúltach)", answer: "ní dhéanaim", hint1: "mé, diúltach"},
  {question: "___ ___________ tú mórán staidéir san oíche de ghnáth? (dearfach) ", answer: "An ndéanann", hint1: "dearfach"},
  {question: "____ ___________ tú é sin an chéad rud maidin amárach? (diúltach)", answer: "Nach ndéanfaidh", hint1: "diúltach"},
  {question: "___________ mé duit é chomh luath is a bhíonn an t-am agam. (dearfach)", answer: "Déanfaidh", hint1: "dearfach"},
  {question: "____ ___________ anois é agus beimid críochnaithe leis. (dearfach)", answer: "Déanfaimid", answer2: "Déanfaidh muid", hint1: "dearfach"},
  {question: "____ ___________é dá mbeadh an t-am agam. (briathar saor, dearfach)", answer: "Dhéanfainn", hint1: "briathar saor, dearfach"},
  {question: "____ ___________ é dá mbeadh aon dul as acu? (siad, diúltach)", answer: "Ní dhéanfaidís", hint1: "siad, diúltach"},
  {question: "____ ___________ é luath no mall. (briathar saor, dearfach)", answer: "Déanfar", hint1: "briathar saor, dearfach"},
  {question: "Bhí a fhios agam ____ ___________i gceart é dá bhfágfaí fúthu féin é. (briathar saor, diúltach)", answer: "nach ndéanfaí", hint1: "briathar saor, diúltach"},
  {question: "Gheall sí ___________ sí dom é chomh luath in Éirinn is a d’fhéadfadh sí. (dearfach)", answer: "go ndéanfadh", hint1: "dearfach"},
];

//FAIGH
var faighACQuestions = [
  {question: "___________ mé bronntanas deas do mo bhreithlá.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ siad an ceann is fearr orainn.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ tú an rud a bhí ag dul duit.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ freagra ar ais ar deireadh. (sinn)", answer: "fuaireamar", hint1: "dearfach, sinn"},
  {question: "___________ tusa an dara duais.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ torthaí na scrúduithe inné. (sinn)", answer: "fuaireamar", hint1: "dearfach"},
  {question: "___________ siad bróga nua sa siopa.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ sé gach a raibh ag dul dó.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ sí luach a saothair.", answer: "fuair", hint1: "dearfach"},
  {question: "___________ amach ar deireadh cé a bhí taobh thiar de. (sinn)", answer: "fuaireamar", hint1: "dearfach, sinn"},
];

var faighACNi = [
  {question: "____ ___________ mé amach riamh cé a rinne é.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ sí aon fhreagra ar a hiarratas.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ aon sásamh uaidh. (sinn)", answer: "ní bhfuaireamar", hint1: "diúltach"},
  {question: "____ ___________ siad aon áit cheart le fanacht i mBaile Átha Cliath.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ sí aon scéal faoin madra a chaill sí.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ aon fhreagra go fóill. (sinn)", answer: "ní bhfuaireamar", hint1: "diúltach"},
  {question: "____ ___________ siad aon rud ceart le hithe.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ mé aon rud a bhí uaim sa siopa sin.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ siad a gcearta riamh san áit sin.", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____  ___________ aon duais an uair seo. (sinn)", answer: "ní bhfuaireamar", hint1: "diúltach"},
];

var faighACBriathorSaor = [
  {question: "___________ tásc ná tuairisc air ón lá a d’imigh sé. (diúltach)", answer: "ní bhfuarthas", hint1: "diúltach"},
  {question: "___________ an t-airgead a chaill mé san ionad siopadóireachta. (dearfach)", answer: "fuarthas", hint1: "dearfach"},
  {question: "Bhí sé os comhair na cúirte agus ___________ ciontach é.", answer: "fuarthas", hint1: "dearfach"},
  {question: "Cuardaíodh an teach ó bhun go barr ach ____ ___________ aon rud ann. (diúltach)", answer: "ní bhfuarthas", hint1: "diúltach"},
  {question: "___________ piscín beag sa pháirc agus níl a fhios ag éinne cé leis é.", answer: "fuarthas", hint1: "dearfach"},
  {question: "Tar éis an lá a chaitheamh á chuardach ___________ é ar deireadh.", answer: "fuarthas", hint1: "dearfach"},
  {question: "____ ___________ amach riamh cé a rinne an slad sa halla.", answer: "ní bhfuarthas", hint1: "diúltach"},
  {question: "Cailleadh é agus ____ ___________ ar ais é riamh ó shin.", answer: "ní bhfuarthas", hint1: "diúltach"},
  {question: "____ ___________ amach riamh cár chuir sí na fáinní cluaise i bhfolach.", answer: "ní bhfuarthas", hint1: "diúltach"},
  {question: "___________ sionnach marbh ar thaobh an bhóthair.", answer: "fuarthas", hint1: "dearfach"},
];

var faighACCeisteach = [
  {question: "____ ___________ tú amach aon rud faoin timpiste? (dearfach)", answer: "an bhfuair", hint1: "dearfach"},
  {question: "____ ___________ tú aon scéal ó Chathal? (dearfach)", answer: "an bhfuair", hint1: "dearfach"},
  {question: "____ ___________ Síle a leabhar ar ais fós? (dearfach)", answer: "an bhfuair", hint1: "dearfach"},
  {question: "____ ___________ siad an méid a bhí uatha? (diúltach)", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "____ ___________  tú amach aon rud nua fúthu?", answer: "an bhfuair", hint1: "dearfach"},
  {question: "____ ___________ an bheirt fhear ciontach as an mbean óg a mharú? (briathar saor, dearfach)", answer: "an bhfuarthas", hint1: "dearfach, briathar saor."},
  {question: "____ ___________ aon rud sa seomra? (dearfach)", answer: "An bhfuair siad", hint1: "dearfadh"},
  {question: "____ ___________ tú do dhóthain fós? (diúltach)", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "____ ___________ corp an fhir a thit le faill fós? (briathar saor, dearfach)", answer: "an bhfuarthas", hint1: "dearfach, briathar saor."},
  {question: "____ ___________ amach cad ba chúis leis an tinneas a bhí orthu (dearfach)", answer: "An bhfuair siad", hint1: "dearfach"},
];

var faighACSpleach = [
  {question: "Tá súil agam ____ ___________ tú é. (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ tú an fliú. (diúltach)", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "An fíor ____ ___________ Breandán post nua? (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ tú an rud céanna is a fuair mise. (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "An dóigh leat ____ ___________ sí gach a raibh uaithi? (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________tú aon drochscéal. (diúltach)", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "Tá a fhios agam ____ ___________ tásc ná tuairisc orthu ó shin. (diúltach, briathar saor)", answer: "nach bhfuarthas", hint1: "diúltach, briathar saor"},
  {question: "An dóigh leat ____ ___________ sí mórán airgid as an leabhar a scríobh sí? (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "An gceapann tú ____ ___________sí an scoláireacht? (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "Deirtear ____ ___________siad bás den ocras. (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
];

var faighACCoibhneasta = [
  {question: "B’shin ____ ___________ sa chófra. (briathar saor)", answer: "a bhfuarthas", hint1: "briathar saor"},
  {question: "B’shin  ____ ___________ sí sa teach sin. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Chaill siad gach ____ ___________ siad sa chasaíne. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Tá gach ____ ___________ siad ar maidin imithe anois. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Tá gach  ____ ___________ sí riamh fós aici. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Tá gach ____ ___________ an madra ite aige. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Tá gach ____ ___________ siad ite acu. ", answer: "a bhfuair", hint1: "dearfach"},
  {question: "B’shin ____ ___________ tar éis na hiarrachta ar fad a rinneadh. (briathar saor)", answer: "a bhfuarthas", hint1: "briathar saor"},
  {question: "B’shin  ____ ___________ na gadaithe sa teach.", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Tá gach ____ ___________ caillte arís.", answer: "a bhfuarthas", hint1: "briathar saor"},
];

var faighACExtraQuestions = [
  {question: "___________ mé litir sa phost ar maidir. ", answer: "fuair", hint1: "dearfach"},
  {question: "____ ___________ tú aon scéal ó do chara fós?", answer: "an bhfuair", answer2: "nach bhfuair", hint1: "ceisteach"},
  {question: "____ ___________ mé néal codlata aréir. (diúltach) ", answer: "ní bhfuair", hint1: "diúltach"},
  {question: "____ ___________ aon chuireadh don phósadh sin. (sinn, diúltach) ", answer: "ní bhfuaireamar", hint1: "diúltach, sinn"},
  {question: "____ ___________ tú do charr ar ais fós? (diúltach)", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "Tá súil agam  ____ ___________ tú d’fhón ar ais. (dearfach)", answer: "go bhfuair", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ siad oiread is iasc amháin ón loch i mbliana. (diúltach) ", answer: "nach bhfuair", hint1: "diúltach"},
  {question: "____ ___________ bosca mór seacláide nuair a bhíomar críochnaithe. (dearfach)", answer: "fuaireamar", hint1: "dearfach"},
  {question: "Tá ____ ___________ siad de mhilseáin ite acu.", answer: "a bhfuair", hint1: "dearfach"},
  {question: "Ní fiú a bheith ag caint faoi na rudaí ____ ___________ . (sinn, diúltach)", answer: "nach bhfuaireamar", hint1: "diúltach, sinn"},
];

var faighALQuestions = [
  {question: "___________ sí páipéar nuachta gach maidin agus í ag dul ag obair.", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ ár gcuid nuachta ó na meáin shóisialta den chuid is mó. (sinn)", answer: "faighimid", hint1: "dearfach, sinn"},
  {question: "___________ sí lón sa bhialann beagnach gach lá.", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ sé airgead maith ar an obair a dhéanann sé.", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ iasacht ón gcomhar creidmheasa ó am go chéile. (mé)", answer: "faighim", hint1: "dearfach, mé"},
  {question: "___________ tú luach do shaothair i gcónaí.", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ bronntanas Nollag gach bliain. (sinn)", answer: "faighimid", hint1: "dearfach"},
  {question: "___________ siad leabhair ón leabharlann gach seachtain.", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ an-deacair é uaireanta. (mé)", answer: "faighim", hint1: "dearfach"},
  {question: "___________ sé bainne ón siopa gach tráthnóna.", answer: "faigheann", hint1: "dearfach"},
];

var faighALNi = [
  {question: "____ ___________ sí aon mholadh riamh as a cuid oibre.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ siad sin torthaí maithe sna scrúduithe riamh.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ aon rud sa bhreis uatha sin riamh. (sinn)", answer: "ní fhaighimid", hint1: "diúltach"},
  {question: "____ ___________ siad aon rud nach mbíonn ag dul dóibh.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ ach drochnuacht san áit seo. (sinn)", answer: "ní fhaighimid", hint1: "diúltach"},
  {question: "Bíonn sí i gcónaí gnóthach. ____ ___________ sí sos riamh.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ tú aon rud nach mbíonn tuillte go maith agat.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ sé codladh na hoíche, fiú, leis an méid imní atá air.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ na páistí sin cead a gcos riamh.", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "____ ___________ daoine áirithe a gcearta riamh.", answer: "ní fhaigheann", hint1: "diúltach"},
];

var faighALBriathorSaor = [
  {question: "___________ ór i mianaigh san Afraic Theas.", answer: "faightear", hint1: "dearfach"},
  {question: "____ ___________ fíoruisce glégheal ón tobar sin.", answer: "faightear", hint1: "dearfach"},
  {question: "___________ amach faoi na pleananna rúnda i gcónaí.", answer: "faightear", hint1: "dearfach"},
  {question: "___________ sméara dubha deasa ó na driseacha sa bhfómhar.", answer: "faightear", hint1: "dearfach"},
  {question: "___________ úlla ó Ard Mhacha.", answer: "faightear", hint1: "dearfach"},
  {question: "____ ___________ torthaí arda sa scoil sin riamh. (diúltach)", answer: "ní fhaightear", hint1: "diúltach"},
  {question: "____ ___________ muisiriúin a fhásann go fiáin sa pháirc sin níos mó.", answer: "ní fhaightear", hint1: "diúltach"},
  {question: "____ ___________ ach corrcheann anois is arís.", answer: "ní fhaightear", hint1: "diúltach"},
  {question: "___________ sionnaigh marbh ar an mbóthar sin go rialta.", answer: "faightear", hint1: "dearfach"},
  {question: "____ ___________ fuil as cloch!", answer: "ní fhaightear", hint1: "diúltach"},
];
var faighALCeisteach = [
  {question: "___________ tú uair an chloig saor ag am lóin? (dearfach).", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "____ ___________ éinne an rud atá uathu? (dearfach)", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "_____ ___________ sí a deis go rímhinic? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "_____ ___________tú an seans chun dul ar ais abhaile go minic? (dearfach)", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "_____ ___________ na micléinn seachtain léitheoireachta i mí Eanáir? (dearfach).", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "_____ ___________ an traonach in Éirinn níos mó (diúltach, briathar saor).", answer: "nach bhfaightear", hint1: "dearfach"},
  {question: "____ ___________ Éamonn áit ar an bhfoireann go rialta? (diúltach).", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "____ ___________ tú do chuid glasraí díreach ón bhfeirm? (dearfach)", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "____ ___________ mórán de na micléinn an freagra ceart ar an gceist sin? (dearfach).", answer: "an bhfaigheann", hint1: "dearfach"},
  {question: "____ ___________ é sin uathu gach bliain? (sinn, diúltach).", answer: "nach bhfaighimid", hint1: "diúltach, sinn"},
];

var faighALSpleach = [
  {question: "Cén fáth ____ ___________ tú rothar nua duit féin? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "Is dóigh liom ____ ___________ sí an traein isteach gach maidin.", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "An bhfuil tú cinnte ____ ___________ sé síob abhaile gach lá? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "Tá a fhios agam go maith ____ ___________ an páiste sin cead a chinn i gcónaí? (dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "Tá sé cruthaithe ____ ___________ daoine bochta bás ag aois níos óige ná daoine saibhre. (dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "An bhfuil tú cinnte ____ ___________ siad airgead breise ar an obair sin? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "Tá a fhios agam ____ ___________ airgead an-mhaith ach is obair chrua í. (mé, dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ sí sásamh as na cuimhní cinn atá aici. (dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "Deirtear ____ ___________sé pinsean ó rialtas na Breataine freisin. (dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________siad bia folláin ar scoil gach lá? (dearfach)", answer: "go bhfaigheann", hint1: "dearfach"},
];

var faighALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var faighALExtraQuestions = [
  {question: "___________Siobhán a cuid glasraí sa mhargadh sráide. (dearfach) ", answer: "faigheann", hint1: "dearfach"},
  {question: "___________ ár ndóthain le hithe san áit ach seachas sin níl rudaí go maith anseo. (sinn, dearfach).", answer: "faighimid", hint1: "dearfach, sinn"},
  {question: "___________ gach duine an méid atá ag dul dóibh. (dearfach) ", answer: "faigheann", hint1: "dearfach"},
  {question: "____ ___________ tú ríomhphost uaidh ó am go chéile? (dearfach)", answer: "an bhfaigheann", hint1: "dearfach, ceisteach"},
  {question: "____ ___________ sí scéal uaidh ach anois is arís. (diúltach) ", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "An bhfuil tú cinnte _____ ___________ sí an lámh in uachtar air go minic? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "_____ ___________ sí airgead óna tuismitheoirí go rialta. (diúltach) ", answer: "ní fhaigheann", hint1: "diúltach"},
  {question: "___________ siúcra as biotas. (briathar saor)", answer: "faightear", hint1: "dearfach, briathar saor"},
  {question: "Táim cinnte ____ ___________ siadsan aon chúnamh ó éinne? (diúltach)", answer: "nach bhfaigheann", hint1: "diúltach"},
  {question: "_____ ___________ tusa an bus isteach gach maidin? ", answer: "an bhfaigheann", hint1: "dearfach"},
];

var faighAFQuestions = [
  {question: "___________ lón istigh i lár na cathrach níos déanaí.", answer: "gheobhaimid", hint1: "dearfach"},
  {question: "___________ tú ardmholadh má dhéanann tú é sin.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ tú amach é sách luath.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ mé tuairisc air sin duit maidin amárach.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ sí gach a bhfuil uaithi sa siopa sin.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ tú bás luath má leanann tú leis sin.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "Níl a fhios agam ach ___________ mé amach duit é.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ sé post maith amach anseo má leanann sé air mar sin.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "Ná bí buartha. ___________ amach é níos déanaí. (sinn)", answer: "gheobhaimid", hint1: "dearfach"},
  {question: "Fan soicind agus ___________ mé mála duit.", answer: "gheobhaidh", hint1: "dearfach"},
];

var faighAFNi = [
  {question: "____ ___________ tú aon leabhar maith ar an seilf sin.", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ Cathal amach faoina chuid torthaí go dtí amárach.", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "Ní fiú a bheith ag éisteach leis seo. ____ ___________ aon sásamh uaidh. (sinn)", answer: "ní bhfaighimid", hint1: "diúltach"},
  {question: "____ ___________ amach cé a rinne é sin go brách. (sinn)", answer: "ní bhfaighimid", hint1: "diúltach"},
  {question: "____ ___________ tú aon toradh ar an obair sin. ", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ sí an eochair sin ar ais níos mó.", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ tú aon rud amach muna gcuireann tú ceist.", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "Tá sé imithe. ____ ___________ anocht é ach go háirithe. (sinn)", answer: "ní bhfaighimid", hint1: "diúltach"},
  {question: "____ ___________ tú bus eile anois go dtí maidin amárach.", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ an bus sin. Beidh sé róluath dúinn. (sinn)", answer: "ní bhfaighimid", hint1: "diúltach"},
];

var faighAFBriathorSaor = [
  {question: "___________ é luath nó mall. (dearfach)", answer: "gheofar", hint1: "dearfach"},
  {question: "____ ___________ amach mar gheall air sin riamh ná choíche. (diúltach)", answer: "ní bhfaighfear", hint1: "diúltach"},
  {question: "___________ é má leanann siad orthu den chuardach. (dearfach)", answer: "gheofar", hint1: "dearfach"},
  {question: "_____ ___________ amach cé a ghoid an pictiúr sin go brách. (diúltach)", answer: "ní bhfaighfear", hint1: "diúltach"},
  {question: "_____ ___________ aon torthaí ar na hiarrachtaí laga sin atá ar bun acu . (diúltach)", answer: "ní bhfaighfear", hint1: "diúltach"},
  {question: "____ ___________ cúnamh nuair a bheidh sé ródhéanach. (dearfach)", answer: "gheofar", hint1: "dearfach"},
  {question: "____ ___________ amach é má leanann sé air ag fiosrú. (dearfach)", answer: "gheofar", hint1: "dearfach"},
  {question: "___________ faic na ngrást san áit sin. (diúltach)", answer: "ní bhfaighfear", hint1: "diúltach"},
  {question: "___________ é ar deireadh má leanann siad orthu ag cuardach. (dearfach)", answer: "gheofar", hint1: "dearfach"},
  {question: "Tá siad amuigh i lár na farraige in áit éigin agus _____ ___________ go brách arís iad.", answer: "ní bhfaighfear", hint1: "diúltach"},
];

var faighAFCeisteach = [
  {question: "___ ___________ sé aon toradh air sin, dar leat? (dearfach)", answer: "an bhfaighidh", hint1: "dearfach"},
  {question: "____ ___________ siad an chéad duais, dar leat? (dearfach)", answer: "an bhfaighidh", hint1: "dearfach"},
  {question: "____ ___________ siad rud éigin as? (diúltach)", answer: "nach bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ tú anocht é, an gceapann tú? (dearfach).", answer: "an bhfaighidh", hint1: "dearfach"},
  {question: "____ ___________ Tadhg cúiteamh airgid as ana málaí a cailleadh ag an aerfort? (diúltach).", answer: "nach bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ tú rud éigin deas dom? (diúltach).", answer: "nach bhfaighidh", hint1: "diúltach"},
  {question: "____ ___________ siad na torthaí go luath? (dearfach).", answer: "an bhfaighidh", hint1: "dearfach"},
  {question: "____ ___________ suíochán ansiúd in aice na fuinneoige? (sinn, dearfach)", answer: "an bhfaighidh", hint1: "dearfach, sinn"},
  {question: "____ ___________ lá saor Dé Máirt an gceapann tú? (sinn, dearfach).", answer: "an bhfaighidh", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú rud éigin deas duit féin leis an airgead sin? (diúltach).", answer: "nach bhfaighidh", hint1: "diúltach"},
];

var faighAFSpleach = [
  {question: "Tá a fhios agam ____ ___________ sé an ceann sin ar ais.", answer: "", hint1: "(diúltach)"},
  {question: "An fíor ____ ___________ breis airgid ar an obair seo?", answer: "", hint1: "(sinn, dearfach)"},
  {question: "Tá mé cinnte ____ ___________ sí ceann eile go brách? ", answer: "", hint1: "(diultach)"},
  {question: "Is dócha ____ ___________ tú an rud céanna is a fuair tú anuradh.", answer: "", hint1: "dearfach"},
  {question: "Is dóigh liom ____ ___________ radharc maith air ón áit seo.", answer: "", hint1: "(sinn, dearfach)"},
  {question: "Tá gach seans ann  ____ ___________ siad amach mar gheall air.", answer: "", hint1: "(dearfach)"},
  {question: "Tá mé cinnte éinne  ____ ___________  amach mar gheall ar an gceann sin.", answer: "", hint1: "(diúltach)"},
  {question: "An dóigh leat ____ ___________ an grúpa sin an chéad duais?", answer: "", hint1: "(dearfach)"},
  {question: "Caithfidh ____ ___________ciontach iad. Féachann sé an-dubh is bán domsa.", answer: "", hint1: "(briathar saor, dearfach)"},
  {question: "An dóigh leat ____ ___________sé a mhisneach ar ais go brách?", answer: "", hint1: "(dearfach)"},
];

var faighAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var faighAFExtraQuestions = [
  {question: "Ná bí buartha, ___________ mé ceann eile duit. (dearfach)", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ tacsaí go dtí an aerfort seachas bus. (sinn, dearfach)", answer: "gheobhaimid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú aon fhreagra uaidh sin go brách. (diúltach)", answer: "ní bhfaighidh", hint1: "diúltach"},
  {question: "B’fhéidir ____ ___________ tú an seans arís muna dtógann tú anois é? (diúltach)", answer: "nach bhfaighidh", hint1: "diúltach"},
  {question: "___________ adhmad luachmhar ón bhforaois sin amach anseo. (briathar saor, dearfach) ", answer: "gheofar", hint1: "dearfach, briathar saor"},
  {question: "______ ___________ tú caifé le tógáil linn le do thoil? ", answer: "an bhfaighidh", hint1: "dearfach"},
  {question: "______ ___________ bronntanas Nollag di i mbliana. (sinn, dearfach)", answer: "an bhfaighimid", hint1: "dearfach"},
  {question: "____ ___________ tusa pé rud atá uait ar aon nós? (diúltach)", answer: "nach bhfaighidh", hint1: "diúltach"},
  {question: "Táimid beagnach ann. ___________ boladh úr na farraige go luath anois. (sinn, dearfach)", answer: "gheobhaimid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú sos go brách muna gcríochnaíonn tú é sin go tapaidh? (diúltach)", answer: "ní bhfaighidh", hint1: "diúltach"},
];

var faighMCQuestions = [
  {question: "___________ carr nua dá mbeadh an t-airgead agam. (mé)", answer: "gheobhainn", hint1: "dearfach, mé"},
  {question: "___________ sé duais dó sin dá gcuirfeadh sé snas air.", answer: "gheobhadh", hint1: "dearfach"},
  {question: "___________ airgead maith air sin dá ndíolfaidís é. (siad)", answer: "gheobhaidís", hint1: "dearfach, siad"},
  {question: "___________ sí an traein go Béal Feirste ach amhain go raibh an bus níos tapúla. ", answer: "gheobhadh", hint1: "dearfach"},
  {question: "Tá sé daor. ___________ dhá cheann sa siopa eile ar an bpraghas sin. (tú)", answer: "gheofá", hint1: "dearfach, tú"},
  {question: " ___________ duine margadh ceart go leor dá mbeadh sé istigh in am.", answer: "gheobhadh", hint1: "dearfach"},
  {question: "___________ sí bronntanas dó dá mbeadh aon mheas aici air. ", answer: "gheobhadh", hint1: "dearfach"},
  {question: "___________ ceann nua duit dá mbeadh an ceann sin briste. (mé)", answer: "gheobhainn", hint1: "dearfach"},
  {question: "___________ síob ar ais dá mbeadh ceann ag teastáil uainn. (sinn)", answer: "gheobhaimis", answer2: "gheobhadh muid", hint1: "dearfach, sinn"},
  {question: "___________ tuilleadh oibrithe don tionscnamh seo dá mbeinn féin i gceannas air. (mé)", answer: "gheobhainn", hint1: "dearfach"},
];

var faighMCNi = [
  {question: "____ ___________ sé é sin dá gcaithfeadh sé fiche bliain á lorg.", answer: "ní bhfaigheadh", hint1: "diúltach"},
  {question: "____ ___________ deoch dó ach amháin go raibh a fhios agam go raibh sé briste. (mé)", answer: "ní bhfaighinn", hint1: "diúltach, mé"},
  {question: "____ ___________ an diabhal an ceann is fearr uirthi sin. ", answer: "ní bhfaigheadh", hint1: "diúltach"},
  {question: "____ ___________ an freagra go brách murach go raibh míniú air ar an idirlíon. (siad)", answer: "ní bhfaighidís", answer2: "Ní bhfaigheadh siad", hint1: "diúltach, siad"},
  {question: "Ní leabhar luachmhar é. ____ ___________ mórán air sa siopa athláimhe. (tú) ", answer: "ní bhfaighfeá", hint1: "diúltach, tú"},
  {question: "____ ___________ Seán ceann nua go brách dá mbeadh aon dul as aige.", answer: "ní bhfaigheadh", hint1: "diúltach"},
  {question: "____ ___________ sin aon toradh dá mbeidís ag gabháil dó go lá Philib an Chleite. (siad)", answer: "ní bhfaighidís", answer2: "Ní bhfaigheadh siad", hint1: "diúltach, siad"},
  {question: "____ ___________ post mar sin gan céim mháistreachta a bheith agat. (tú)", answer: "ní bhfaighfeá", hint1: "diúltach"},
  {question: "____ ___________ an diabhal an ceann is fearr ar asal.", answer: "ní bhfaigheadh", hint1: "diúltach"},
  {question: "____ ___________ sí an chéad áit murach gur tharraing an bheirt eile siar.", answer: "ní bhfaigheadh", hint1: "diúltach"},
];

var faighMCBriatharSaor = [
  {question: "___________ é dá mbeadh sé ann.", answer: "gheofaí", hint1: "dearfach"},
  {question: "____ ___________ ceann chomh maith sin arís ach amháin trí sheans.", answer: "ní bhfaighfí", hint1: "diúltach"},
  {question: "___________ rudaí suimiúla sa seansiopa sin dá mbeadh an t-am ag duine dul tríd.", answer: "gheofaí", hint1: "dearfach"},
  {question: "____ ___________ an seodra sa teach riamh murach gur inis an tseanbhean dom faoi sula bhfuair sí bás.", answer: "ní bhfaighfí", hint1: "diúltach"},
  {question: "____ ___________ na drugaí sa teach murach gur chuir fear an tí ann iad. ", answer: "ní bhfaighfí", hint1: "diúltach"},
  {question: "____ ___________ ciontach é murach go raibh an giúiré lánchinnte go ndearna sé é.", answer: "ní bhfaighfí", hint1: "diúltach"},
  {question: "___________ amach é dá mbeadh aon duine sách cliste ann chun dul ag obair ar an gcás.", answer: "gheofaí", hint1: "dearfach"},
  {question: "___________ é gan dabht dá mbeadh sé ann.", answer: "gheofaí", hint1: "dearfach"},
  {question: "____ ___________ aon locht ar Eithne mar cheannaire dá gceapfaí don bpost í.", answer: "ní bhfaighfí", hint1: "diúltach"},
  {question: "___________ lochtanna air fiú dá mbeadh sé foirfe.", answer: "gheofaí", hint1: "dearfach"},
];

var faighMCCeisteach = [
  {question: "___ ___________ lá saor dá ndéanfá obair bhreise san oíche? (tú, diúltach)", answer: "nach bhfaighfeá", hint1: "diúltach, tú"},
  {question: "____ ___________ Seán scoláireacht dá mbeadh a chuid torthaí beagáinín ní ba fhearr? (dearfach)", answer: "an bhfaigheadh", hint1: "dearfach"},
  {question: "____ ___________ éinne acu an freagra sin ceart, dar leat? (dearfach)", answer: "an bhfaigheadh", hint1: "dearfach"},
  {question: "____ ___________ aon duine an réiteach ar an bhfadhb sin dá gcuirfidís chuige? (diúltach).", answer: "nach bhfaigheadh", hint1: "diúltach"},
  {question: "____ ___________  margadh maith dá mbeifeá istigh in am? (dearfach, tú).", answer: "an bhfaighfeá", hint1: "dearfach"},
  {question: "____ ___________  sí é dá gcuirfeadh sí chuige i gceart?", answer: "an bhfaigheadh", hint1: "dearfach"},
  {question: "____ ___________ plumaí ag fás go fiáin sna díoga dá ndéanfaí cuardach ceart? (diúltach, briathar saor).", answer: "an bhfaighfí", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ an lámh in uachtar orthu dá leanfaí tamall eile leis an iarracht mhór sin? (diúltach, briathar saor)", answer: "nach bhfaighfí", hint1: "diúltach"},
  {question: "____ ___________ an litir dá mbeadh an seoladh ceart uirthi? (diúltach, tú).", answer: "nach bhfaighfeá", hint1: "diúltach"},
  {question: "____ ___________ Nóirín pas sa scrúdú dá mbeadh an aiste istigh in am aici? (diúltach).", answer: "nach bhfaigheadh", hint1: "diúltach"},
];

var faighMCSpleach = [
  {question: "Bhí mé cinnte ____ ___________ sí an chéad duas ach ní bhfuair.", answer: "go bhfaigheadh", hint1: "dearfach"},
  {question: "Cheap mé  ____ ___________ éinne an freagra ceart ar an gceist sin. (diúltach)", answer: "nach bhfaigheadh", hint1: "diúltach"},
  {question: "An dóigh leat ____ ___________ sé é dá rachadh sé á lorg?  ", answer: "go bhfaigheadh", hint1: "dearfach"},
  {question: "Bhí a fhios agam go maith ____ ___________ an freagra ceart. (tú, diúltach) ", answer: "nach bhfaighfeá", hint1: "diúltach"},
  {question: "Bhí a fhios acu ____ ___________an chéad áit ba chuma cad a dhéanfaidís. (siad, diúltach)", answer: "nach bhfaighidís", answer2: "nach bhfaigheadh siad", hint1: "diúltach, siad"},
  {question: "Bhí mé cinnte ____ ___________ sí an ríomhaire a chaill sí ar ais. (dearfach)", answer: "go bhfaigheadh", hint1: "dearfach"},
  {question: "Níor cheap mé  ____ ___________ sé an ceann is fearr uirthi. (dearfach)", answer: "go bhfaigheadh", hint1: "dearfach"},
  {question: "Dúirt sé ____ ___________ sé é ach ní bhfuair. (dearfach)", answer: "go bhfaigheadh", hint1: "dearfach"},
  {question: "Cheap siad ___ ___________ freagra sásúil ach ní bhfuair. (siad, dearfach)", answer: "go bhfaighidís", answer2: "go bhfaigheadh siad", hint1: "dearfach"},
  {question: "Bhí a fhios agam ___ ___________é luath nó mall. (briathar saor, dearfach)", answer: "go bhfaighfí", hint1: "dearfach, briathar saor"},
];

var faighMCExtraQuestions = [
  {question: "_______________ é dá mbeadh an t-airgead agam ach níl. (mé, dearfach)", answer: "Gheobhainn", hint1: "mé, dearfach"},
  {question: "_______________ sí é dá ndéanfadh sí cuardach ceart (dearfach)", answer: "Gheobhadh", hint1: "dearfach"},
  {question: "____ _____________ sin an freagra ceart, fiú dá mbeidísag obair air, go brách na breithe (siad, diúltach)", answer: "Ní bhfaighidís", hint1: "siad, diúltach"},
  {question: "___ ________________ sí seans eile ach amháin gur impigh sí ar na moltóirí féachaint uirthi arís (diúltach)", answer: "Ní bhfaigheadh", hint1: "diúltach"},
  {question: "__________________ dreancaidí ón madra bocht sin. (tú, dearfach)", answer: "Gheofá", hint1: "tú, dearfach"},
  {question: "___________________ iad dá mbeadh an toil ann chun an áit a chuardach i gceart (briathar saor, dearfach)", answer: "Gheofaí", hint1: "briathar saor, dearfach"},
  {question: "Dá __________________ an chéad duais bheidís ar bís. (siad dearfach)", answer: "bhfaighdís", hint1: "siad, dearfach"},
  {question: "_____ ____________ airgead mór ar theach mar sin? (tú, diúltach)", answer: "Nach bhfaighfeá", hint1: "tú, diúltach"},
  {question: "Bhí mé ag súil _____ ___________ sé aitheantas ar an obair mhór a rinne sé. (dearfach)", answer: "Go bhfaigheadh", hint1: "dearfach"},
  {question: "____ ____________ áit níos fearr ar domhan (tú, diúltach)", answer: "Ní bhfaighfeá", hint1: "tú, diúltach"},
];

var faighQuiz = [
  {question: "___________ mé an méid a bhí uaim ar deireadh thiar thall.", answer: "fuair", hint1: "aimsir chaite"},
  {question: "___________ an spreagadh ó na moltóirí sa chéad bhabhta den gcomórtas. (sinn, aimsir chaite)", answer: "fuaireamar", answer2: "fuair muid", hint1: "sinn, dearfach"},
  {question: "___ ___________ siad leath den mhéid a bhí ag dul dóibh? (diúltach, aimsir chaite)", answer: "ní bhfuair", hint1: "diúltach, aimsir chaite"},
  {question: "___  ___________ tú aon deis chun an obair a chríochnú? (ceist, aimsir chaite)", answer: "an bhfuair", hint1: "ceist, aimsir chaite"},
  {question: "____ ___________ siad gach a raibh ag teastáil uatha. (diúltach, aimsir chaite)", answer: "ní bhfuair", hint1: "diúltach, aimsir chaite"},
  {question: "______ ___________ sibh lón san áit ina bhfuil sibh ag obair? (aimsir láithreach) ", answer: "an bhfaigheann", hint1: "aimsir laithreach"},
  {question: "______ ___________ tú do chuid feola ón mbúistéir sin? (aimsir láithreach)", answer: "an bhfaigheann", hint1: "aimsir laithreach"},
  {question: "____ ___________gach éinne a dhéanann obair dheonach san áit aitheantas foirmeálta ina dtuairisc bhliantúil? (diúltach, aimsir láithreach)", answer: "nach bhfaigheann", hint1: "diúltach, aimsir laithreach"},
  {question: "____ ___________ siad tuarastal ard ón gcomhlacht a bhfuil siad ag obair dóibh? (dearfach, aimsir láithreach)", answer: "an bhfaigheann", hint1: "dearfach, aimsir laithreach"},
  {question: "___________ mé é sin duit an chéad rud maidin amárach.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ sé breith a bhéil féin ag deireadh an lae. (dearfach)", answer: "gheobhaidh", hint1: "dearfach, aimsir fháistineach"},
  {question: "___________ rud éigin le hithe go luath anois. (sinn, aimsir fháistineach)", answer: "gheobhaimid", answer2: "gheobhaidh muid", hint1: "sinn, aimsir fháistineach"},
  {question: "___________ réidh leis na cinn sin go luath. (briathar saor, aimsir fháistineach)", answer: "gheofar", hint1: "briathar saor, aimsir fháistineach"},
  {question: "______ ___________ é sin ar ais dom chomh luath agus is féidir leat? (tú, aimsir fháistineach) ", answer: "an bhfaighidh", hint1: "tú, aimsir fháistineach"},
  {question: "___________ ceann nua murach go bhfuil mé an-tógtha leis an sean-cheann seo. (mé, modh coinníollach)", answer: "gheobhainn", hint1: "mé, modh coinníollach"},
  {question: "____ ___________an duais fiú muna mbeadh istigh ar an gcomórtas ach iad féin. (diúltach, modh coinníollach)", answer: "ní bhfaighidís", answer2: "ní bhfaigheadh siad", hint1: "diúltach, modh coinníollach"},
  {question: "____ ___________ éinne beo an ceann is fearr ar Mhaebh an lá sin? (diúltach, modh coinníollach)", answer: "ní bhfaigheadh", hint1: "diúltach, modh coinníollach"},
  {question: "___________ ceann nua duit dá mbeadh an ceann sin briste. (mé)", answer: "gheobhainn", hint1: "mé"},
  {question: "Níl a fhios agam ach ___________ mé amach duit é.", answer: "gheobhaidh", hint1: "dearfach"},
  {question: "___________ siad bróga nua sa siopa.", answer: "fuair", hint1: "dearfach"},
];

//feic AC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACQuestions = [
  {question: "___________ mé strainséir ag teacht i mo threo.", answer: "Chonaic", hint1: "dearfach"},
  {question: "___________ sé an timpiste ag tarlú.", answer: "Chonaic", hint1: "dearfach"},
  {question: "___________ sí gach ar tharla.", answer: "Chonaic", hint1: "dearfach"},
  {question: "___________ na céadta rón ar an trá. (sinn)", answer: "Chonaiceamar", answer2: "Chonaic muid", hint1: "sinn"},
  {question: "___________ an radharc ba dheise in Éirinn.  (sinn)", answer: "Chonaiceamar", answer2: "Chonaic muid", hint1: "sinn"},
  {question: "___________ siad an bus ag dul síos an bóthar.", answer: "Chonaic", hint1: "dearfach"},
  {question: "___________ an tarbh ag déanamh orainn.(sinn)", answer: "Chonaiceamar", answer2: "Chonaic muid", hint1: "sinn"},
  {question: "___________ mé Niamh sa chathair inné.", answer: "Chonaic", hint1: "dearfach"},
  {question: "___________ soilse na cathrach i bhfad uainn.(sinn)  ", answer: "Chonaiceamar", answer2: "Chonaic muid", hint1: "sinn"},
  {question: "___________ sí an bád amuigh sa chuan.", answer: "Chonaic", hint1: "dearfach"},
];

//feic AC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACNi = [
  {question: "____ ___________ mé tú le fada.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ sí an bus ag teacht.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ an taobh istigh den chaisleán. (sinn)", answer: "ní fhacamar", answer2: "Ní fhaca muid", hint1: "sinn"},
  {question: "____ ___________ aon áit chomh taibhseach leis riamh. (sinn)", answer: "ní fhacamar", answer2: "Ní fhaca muid", hint1: "sinn"},
  {question: "____ ___________ mé Brian le fada.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ siad na pictiúir ‘sna nuachtáin.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ sé go raibh an solas dearg ag an gcrosbhóthar.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ mé Máire í féin ach chonaic mé a deirfiúr.", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ an dainséar a bhí ag stánadh idir an dá shúil orainn. (sinn)", answer: "ní fhacamar", answer2: "Ní fhaca muid", hint1: "sinn"},
  {question: "____  ___________ mé é go dtí go raibh sé ródhéanamh.", answer: "ní fhaca", hint1: "diúltach"},
];

//feic AC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACBriatharSaor = [
  {question: "___________ an solas a bhí againn ar deireadh thiar. (dearfach)", answer: "chonacthas", hint1: "dearfach"},
  {question: "____ ___________ an bád ag dul i bhfarraige le breacadh an lae. (dearfach)", answer: "chonacthas", hint1: "dearfach"},
  {question: "___ ___________ beirt ógánach ag briseadh isteach sa teach. (dearfach)", answer: "chonacthas", hint1: "dearfach"},
  {question: "___ ___________ í taobh thiar den gcuirtín. (dearfach)", answer: "chonacthas", hint1: "dearfach"},
  {question: "___________ go raibh scláta briste agus braon anuas sa teach. (dearfadh)", answer: "chonacthas", hint1: "dearfach"},
  {question: "___________ an grúpa beag a bhí i bhfolach sa gharáiste. (diúltach)", answer: "ní fhacthas", hint1: "diúltach"},
  {question: "____ ___________ aon locht ar an gcapall an lá áirithe sin. (diúltach)", answer: "ní fhacthas", hint1: "diúltach"},
  {question: "___________ an scrios a rinneadh thuas staighre go dtí an lá dar gcionn. (diúltach)", answer: "ní fhacthas", hint1: "diúltach"},
  {question: "___________ sneachta mar seo in Éirinn le fada an lá. (diúltach)", answer: "ní fhacthas", hint1: "diúltach"},
  {question: "____ ___________ é féin ná a shamhail ón lá a d’imigh sé. (diúltach)", answer: "ní fhacthas", hint1: "diúltach"},
];

//feic AC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACCeisteach = [
  {question: "____ ___________ tú Orla le déanaí? (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________ tú aon rud as an ngáth aréir? (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________ tú mo spéaclaí in aon áit? (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________ an ceann sin cheana? (sinn, diúltach)", answer: "nach bhfacamar", answer2: "nach bhfaca muid", hint1: "sinn, diúltach"},
  {question: "____ ___________sibh an páiste nua fós? (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________  tú an dath a chuir sí ar a cuid gruaige? (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________ tú ag teacht é? (diúltach)", answer: "nach bhfaca", hint1: "diúltach"},
  {question: "____ ___________ sé an rud a bhí soiléir do gach duine eile? (diúltach)", answer: "nach bhfaca", hint1: "diúltach"},
  {question: "____ ___________ tú an bheirt acu ag cogarnaíl thíos ag bun an tseomra? (diúltach)", answer: "nach bhfaca", hint1: "diúltach"},
  {question: "____ ___________sibh an drochchuma a bhí ar an spéir sular fhág sibh? (diúltach)", answer: "nach bhfaca", hint1: "diúltach"},
];

//feic AC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACSpleach = [
  {question: "Dúirt siad ____ ___________ siad Séamas ag an gceolchoirm. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
  {question: "Shéan sí ____ ___________ sí Breandán an lá sin. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ mé an madra sin ag dul síos an bóthar. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ mé cluiche chomh maith leis riamh. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
  {question: "Mhaígh siad ____ ___________ siad an buachaill atá ar iarraidh istigh i lár na cathrach. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
  {question: "Dúirt siad ____ ___________ siad é. (diúltach)", answer: "nach bhfaca ", hint1: "diúltach"},
  {question: "Táim cinnte ____ ___________ mé aon charr lasmuigh den teach. (diúltach)", answer: "nach bhfaca ", hint1: "diúltach"},
  {question: "Dúirt sí ____ ___________sí fear chomh breá leis riamh. (diúltach)", answer: "nach bhfaca ", hint1: "diúltach"},
  {question: "Dúirt sé ____ ___________sé an rothar ag teacht ina threo. (diúltach)", answer: "nach bhfaca ", hint1: "diúltach"},
  {question: "Táimid cinnte ____ ___________ sa teach tábhairne aréir é. (sinn, diúltach)", answer: "nach bhfacamar", answer2: "nach bhfaca muid", hint1: "diúltach, sinn"},
];

//feic AC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//feic AC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicACExtraQuestions = [
  {question: "___________ na faoileáin thart ar an mbád iascaigh agus é ag teacht isteach. (sinn, dearfach)", answer: "chonaiceamar", answer2: "chonaic muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ a leithéid de radharc riamh. (sinn, diúltach)", answer: "ní fhacamar", answer2: "Ní fhaca muid", hint1: "sinn, diúltach"},
  {question: "___________mé Tomás ag an gcluiche. (dearfach) ", answer: "chonaic", hint1: "dearfach"},
  {question: "___________ mé Máire le fada anois. (diúltach)", answer: "ní fhaca", hint1: "diúltach"},
  {question: "____ ___________ tú an fear leis an ngeanc agus é ag lorg troda. (dearfach)", answer: "an bhfaca", hint1: "dearfach"},
  {question: "____ ___________sibh mé agus mé ag glaoch oraibh in ard mo chinn is mo ghutha? (diúltach) ", answer: "nach bhfaca", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________an dream a thosaigh an trioblóid. (sinn, dearfach)", answer: "go bhfacamar", answer2: "go bhfaca muid", hint1: "sinn, dearfach"},
  {question: "___ ___________ann é cé go bhfuil sé ag séanadh go raibh sé amuigh an oíche sin. (briathar saor, dearfach)", answer: "chonacthas ", hint1: "briathar saor, dearfach"},
  {question: "____ ___________seó chomh maith leis ar an mbaile seo le fada an lá. (briathar saor, diúltach)", answer: "ní fhacthas", hint1: "briathar saor, diúltach"},
  {question: "Ní dóigh liom ____ ___________mé an ceann áirithe sin riamh cheana. (dearfach)", answer: "go bhfaca", hint1: "dearfach"},
];

//feic AL Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALQuestions = [
  {question: "___________ ag teacht aníos an bóthar anois é. (mé)", answer: "feicim", hint1: "mé"},
  {question: "___________ sí go maith é ach níl sí ag ligean uirthi féin.", answer: "feiceann", hint1: "dearfach"},
  {question: "___________ an ghrian ag éirí ag bun na spéire gach maidin. (sinn)", answer: "feicimid", answer2: "feiceann muid", hint1: "sinn"},
  {question: "___________ an cuan ó fhuinneog na cistine. (sinn)", answer: "feicimid", answer2: "feiceann muid", hint1: "sinn"},
  {question: "___________ sionnach ag teacht isteach sa ghairdín le titim na hoíche. (sinn)", answer: "feicimid", answer2: "feiceann muid", hint1: "sinn"},
  {question: "___________ sí chomh maith is atá a cuid cairde ag déanamh.", answer: "feiceann", hint1: "dearfach"},
  {question: "___________siad na báid ag teacht isteach sa chuan óna seomra suite.", answer: "feiceann", hint1: "dearfach"},
  {question: "___________ francaigh ag teacht amach ón díog ó am go chéile. (sinn)", answer: "feicimid", answer2: "feiceann muid", hint1: "sinn"},
  {question: "___________ athruithe móra san áit seo le cúpla bliain anuas. (mé)", answer: "feicim", hint1: "mé"},
  {question: "___________ sí an ghealach ag seoladh léi trasna na spéire.", answer: "feiceann", hint1: "dearfach"},
];

//feic AL Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALNi = [
  {question: "____ ___________ an pointe atá á dhéanamh agat. (mé)", answer: "ní fheicim", hint1: "mé"},
  {question: "____ ___________ sé é féin mar imreoir proifisiúnta.", answer: "ní fheiceann", hint1: "dearfach"},
  {question: "____ ___________ sí an rud atá os a comhair amach.", answer: "ní fheiceann", hint1: "dearfach"},
  {question: "____ ___________ aon fhiúntas sa mholadh atá agat. (sinn)", answer: "ní fheicimid", answer2: "ní fheiceann muid", hint1: "sinn"},
  {question: "____ ___________ aon rud faoi láthair ach caithfimid a bheith foighneach. (sinn)", answer: "ní fheicimid", answer2: "ní fheiceann muid", hint1: "sinn"},
  {question: "____ ___________ siad chomh tábhachtach is atá turasóireacht don cheantar.", answer: "ní fheiceann", hint1: "dearfach"},
  {question: "____ ___________ mo chuid eochracha in aon áit. (mé)", answer: "ní fheicim", hint1: "mé"},
  {question: "____ ___________Deirdre ach uair sa bhliain nuair a thagann sí abhaile. (sinn)", answer: "ní fheicimid", answer2: "ní fheiceann muid", hint1: "sinn"},
  {question: "____ ___________ an chúis ghearáin atá agat. (mé)", answer: "ní fheicim", hint1: "mé"},
  {question: "____ ___________ siad go bhfuilimid dáiríre faoin gceist seo.", answer: "ní fheiceann", hint1: "dearfach"},
];

//feic AL Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALBriatharSaor = [
  {question: "___________ na coiníní ag teacht amach le breacadh an lae. (dearfach).", answer: "feictear", hint1: "dearfach"},
  {question: "___________ dó anois go bhfuil ag teip ar an bplean cliste a bhí aige. (dearfach)", answer: "feictear", hint1: "dearfach"},
  {question: "___________ na fáinleoga ag neadú sa scioból ag tús an tsamhraidh. (dearfach)", answer: "feictear", hint1: "dearfach"},
  {question: "___________go soiléir anois an t-athrú atá ag teacht ar an aimsir. (dearfach)", answer: "feictear", hint1: "dearfach"},
  {question: "___________an feabhas a thagann ar na daoine a dhéanann cleachtadh. (dearfach).", answer: "feictear", hint1: "dearfach"},
  {question: "_____ ___________aon dul chun cinn go dtí go mbíonn sé beagnach críochnaithe. (diúltach).", answer: "ní fheictear", hint1: "diúltach"},
  {question: "____ ___________aon sneachta in Éirinn ach uair anois is arís. (diúltach).", answer: "ní fheictear", hint1: "diúltach"},
  {question: "____ ___________ an traonach sa chuid is mó den tír níos mó. (diúltach)", answer: "ní fheictear", hint1: "diúltach"},
  {question: "____ ___________an t-arm ar na sráideanna níos mó. (diúltach).", answer: "ní fheictear", hint1: "diúltach"},
  {question: "____ ___________ dóibh go bhfuil aon fhiúntas ag baint le cúrsaí Ollscoile. (diúltach).", answer: "ní fheictear", hint1: "diúltach"},
];

//feic AL Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALCeisteach = [
  {question: "___________tú an pointe atá mé á dhéanamh? (dearfach).", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "____ ___________ tú an spúnóg sin ar an mbord? (dearfach)", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "_____ ___________ sibh an teach sin ar thaobh na láimhe deise? (dearfach)", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "_____ ___________tú an líne dhearg sin ar chlé? (dearfach)", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "_____ ___________ tú ansin ar an léarscáil é? (dearfach).", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "_____ ___________ sibh fós go bhfuil dul amú oraibh? (diúltach).", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "____ ___________ tú an tábhacht mór atá leis? (diúltach).", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "____ ___________ sibh an gliondar a thagann ina súile nuair a mholtar í? (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "____ ___________siad an dochar atá á dhéanamh acu don timpeallacht? (diúltach).", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "____ ___________ sibh Micheál gach dara lá? (diúltach).", answer: "nach bhfeiceann", hint1: "diúltach"},
];

//feic AL Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALSpleach = [
  {question: "Ceapaim____ ___________ an ceann atá i gceist agat ach níl mé cinnte. (mé, dearfach)", answer: "go bhfeicim", hint1: "mé, dearfach"},
  {question: "Deir siad ____ ___________ siad francaigh sa teach go rialta. (dearfach)", answer: "go bhfeiceann", hint1: "dearfach"},
  {question: "Deir gach duine ____ ___________ tusa í go rialta. (dearfach)", answer: "go bhfeiceann", hint1: "dearfach"},
  {question: "An bhfuil tú cinnte ____ ___________tú an ceann ceart? (dearfach)", answer: "go bhfeiceann", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ sí é sa choláiste go rialta. (dearfach)", answer: "go bhfeiceann", hint1: "dearfach"},
  {question: "Táim geall le bheith cinnte ____ ___________ siad an fhadhb atá acu. (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "Deir siad ____ ___________ siad strainséirí sa áit riamh ar éigean. (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "Tá siad á rá ____ ___________ siad aon dul chun cinn le bliain anuas. (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "Tá an chuma orthu ____ ___________siad go bhfuil siad imithe ar strae. (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "Deir siad ____ ___________siad faic leis an gceo atá sa áit. (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
];

//feic AL Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//feic AL Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicALExtraQuestions = [
  {question: "___________anois é ag teacht sa treo seo. (mé, dearfach)", answer: "feicim", hint1: "mé, dearfach"},
  {question: "___________ na buntáistí ach tá míbhuntáistí ag baint leis freisin. (sinn, dearfach).", answer: "feicimid", answer2: "feiceann muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ sí fós aon rud mícheart leis an rud a dúirt sí. (diúltach) ", answer: "ní fheiceann", hint1: "diúltach"},
  {question: "____ ___________ Úna ach go fíorannamh. (sinn, diúltach)", answer: "ní fheicimid", answer2: "Ní fheiceann muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ tú na faoileáin go léir sa chuan? (dearfach) ", answer: "an bhfeiceann", hint1: "dearfach"},
  {question: "_____ ___________ sibh an drochchuma atá uirthi leis an bpian? (diúltach)", answer: "nach bhfeiceann", hint1: "diúltach"},
  {question: "___________ an bhean sídhe níos mó. (briathar saor, diúltach) ", answer: "ní fheictear", hint1: "briathar saor, diúltach"},
  {question: "___ ___________ broic ag trasnú an bhóthair ó am go chéile? (briathar saor, dearfach)", answer: "feictear", hint1: "briathar saor, dearfach"},
  {question: "Deir sí___ ___________ sí rudaí aisteacha ag tarlú sa teach go minic. (dearfach)", answer: "go bhfeiceann", hint1: "dearfach"},
  {question: "Deir sé _____ ___________ sé Tomás riamh na laethanta seo. (diúltach) ", answer: "nach bhfeiceann", hint1: "diúltach"},
];

//feic AF Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFQuestions = [
  {question: "___________ mé anocht tú.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ tú é ar ball anois.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ sé an phraiseach atá déanta aige sách luath.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ na hoileáin ó bharr an chnoic seo. (sinn)", answer: "feicfimid", answer2: "feicfidh muid", hint1: "sinn"},
  {question: "___________ siad tú muna mbíonn tú an-chúramach.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ tú slua mór at teacht amach as an séipéal ar ball.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________an chathair ar fad ó bharr an túir seo. (sinn)", answer: "feicfimid", answer2: "feicfidh muid", hint1: "sinn"},
  {question: "___________ sibh é má fhéachann sibh go géar ar an bpictiúr.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ tú é anois i gceann nóiméid.", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ na réalta ar ball mar tá an spéir glan. (sinn)", answer: "feicfimid", answer2: "feicfidh muid", hint1: "sinn"},
];

//feic AF Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFNi = [
  {question: " ____ ___________ tú fear chomh breá leis arís i do shaol.", answer: "ní fheicfidh", hint1: "diúltach"},
  {question: "____ ___________ tú é muna mbíonn tú ag faire go géar air.", answer: "ní fheicfidh", hint1: "diúltach"},
  {question: "____ ___________ an ghealach anocht mar tá an spéir scamallach. (sinn)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn"},
  {question: "____ ___________ an cluiche i gceart ón áit seo. (sinn)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn"},
  {question: "____ ___________ cur i láthair chomh maith leis sin go ceann i bhfad eile. (sinn)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn"},
  {question: "____ ___________ an áit i gceart leis an gceo atá ann faoi láthair.  (sinn)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn"},
  {question: "____ ___________ tú anocht é seachas aon oíche eile.", answer: "ní fheicfidh", hint1: "diúltach"},
  {question: "____ ___________ tú an bus muna gcoimeádann tú súil ghéar amach.", answer: "ní fheicfidh", hint1: "diúltach"},
  {question: "____ ___________ é sin arís go ceann píosa maith eile. (sinn)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn"},
  {question: "____ ___________ tú é go dtí go mbeidh sé ródhéanach.", answer: "ní fheicfidh", hint1: "diúltach"},
];

//feic AF Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFBriatharSaor = [
  {question: "___________ na fianna ag teacht anuas ó na sléibhte go luath anois. (dearfach)", answer: "feicfear", hint1: "dearfach"},
  {question: "____ ___________ tú mar sheoinín ceart má leanann tú ort mar sin. (dearfach)", answer: "feicfear", hint1: "dearfach"},
  {question: "____ ___________ an éiginnteacht ina shúile agus ní chreidfidh éinne é. (dearfach)", answer: "feicfear", hint1: "dearfach"},
  {question: "_____ ___________ tríd an ráiméis sin agus caithfear i dtraipisí é. (dearfach)", answer: "feicfear", hint1: "dearfach"},
  {question: "___________ go luath gur mó de cheataí ná de chabhair é. (dearfach)", answer: "feicfear", hint1: "dearfach"},
  {question: "___________ tada sa spéir anocht mar tá sí róscamallach. (diúltach)", answer: "ní fheicfear", hint1: "diúltach"},
  {question: "___________ capall chomh maith sin ar ráschúrsa go ceann i bhfad eile. (diúltach)", answer: "ní fheicfear", hint1: "diúltach"},
  {question: "____ ___________ é má choimeádann tú faoi do chóta é. (diúltach)", answer: "ní fheicfear", hint1: "diúltach"},
  {question: "____ ___________ tú má fhanann tú anseo sa dorchadas. (diúltach)", answer: "ní fheicfear", hint1: "diúltach"},
  {question: "_____ ___________ sa phictiúr tú muna seasann tú amach. (diúltach)", answer: "ní fheicfear", hint1: "diúltach"},
];

//feic AF Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFCeisteach = [
  {question: "___ ___________ tú an Arc de Triomphe nuair a bheidh tú i bPáras? (dearfach)", answer: "an bhfeicfidh", hint1: "dearfach"},
  {question: "____ ___________ tú Seán go luath? (dearfach)", answer: "an bhfeicfidh", hint1: "dearfach"},
  {question: "____ ___________ tú éinne de mhuintir Uí Chléirigh ann? (dearfach)", answer: "an bhfeicfidh", hint1: "dearfach"},
  {question: "____ ___________San Francisco le linn ár gcúirte go Meiriceá? (sinn, dearfach)", answer: "an bhfeicfimid", answer2: "an bhfeidfidh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ é sách luath? (sinn, diúltach).", answer: "nach bhfeicfimid", answer2: "nach bhfeidfidh muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ sibh iad ag an gceolchoirm anocht? (diúltach).", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "____ ___________na rudaí sin ar fad ag an taispeántas? (briathar saor, diúltach).", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "____ ___________ sibh iad ag an aerphort? (diúltach)", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "____ ___________gach duine é má fhágann tú ansin ar an bhfuinneog é? (diúltach).", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "____ ___________ an t-oileán go luath anois? (sinn, dearfach).", answer: "an bhfeicfimid", answer2: "an bhfeidfidh muid", hint1: "sinn, dearfach"},
];

//feic AF Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFSpleach = [
  {question: "Ní dóigh liom ____ ___________ tú anocht í. (dearfach)", answer: "go bhfeicfidh", hint1: "dearfach"},
  {question: "Ceapann sé ____ ___________ sé arís iad go ceann i bhfad. (diúltach)", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "Ní dóigh liom ____ ___________ ceann chomh maith leis go ceann píosa maith eile. (sinn, dearfach)", answer: "go bhfeicfimid", answer2: "go bhfeicfidh muid", hint1: "sinn, dearfach"},
  {question: "Guíonn sí gach oíche ____ ___________ sí a máthair arís. (dearfach)", answer: "go bhfeicfidh", answer2: "go bhfeice", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ sí go luath é. (dearfach)", answer: "go bhfeicfidh", hint1: "dearfach"},
  {question: "Tá súil agam  ____ ___________siad tuilleadh fadhbanna. (diúltach)", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________mé na botúin chéanna arís is arís eile. (diúltach)", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________ sí go bhfuil dul amú uirthi go luath. (dearfach)", answer: "go bhfeicfidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ éinne go bhfuil dhá stoca éagsúla orm. (diúltach)", answer: "nach bhfeicfidh", hint1: "diúltach"},
  {question: "Tá súil agam____ ___________go soiléir ar an mbóthar tú leis an seaicéad lonrúil sin. (briathar saor, dearfach)", answer: "go bhfeicfear", hint1: "briathar saor, dearfach"},
];

//feic AF Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//feic AF Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicAFExtraQuestions = [
  {question: " ___________ mé amárach tú, le cúnamh Dé. (dearfach)", answer: "feicfidh", hint1: "dearfach"},
  {question: "___________ soilse na cathrach go luath anois. (sinn, dearfach)", answer: "feicfimid", answer2: "feicfidh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ arís é go ceann píosa maith eile. (briathar saor, diúltach)", answer: "ní fheicfear", hint1: "briathar saor, diúltach"},
  {question: "____ ___________tú bus eile ar an mbóthar seo go dtí maidin amárach. (diúltach)", answer: "ní fheicfidh", hint1: "diúltach"},
  {question: "Tá mé lán-chinnte ____ ___________ tú athruithe móra laistigh de bhliain. (dearfach) ", answer: "go bhfeicfidh", hint1: "dearfach"},
  {question: "______ ___________ siad go bhfuilimid i dtrioblóid má ghéillimid orlach dóibh. (dearfach) ", answer: "feicfidh", hint1: "dearfach"},
  {question: "____ ___________ tú go dtí deireadh na bliana mar sin. (sinn, diúltach)", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn, diúltach"},
  {question: "___________ an damáiste mór atá déanta aige laistigh de chúpla bliain. (briathar saor, dearfach) ", answer: "feicfear", hint1: "briathar saor, dearfach"},
  {question: "Tá a fhios agam go maith ____ ___________ sé é mar tá súil ghéar aige. (dearfach)", answer: "go bhfeicfidh", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith ____ ___________ sé é mar tá súil ghéar aige. (dearfach)", answer: "nach bhfeicfear", hint1: "briathar saor, diúltach"},
];

//feic MC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCQuestions = [
  {question: "___________ é dá mbeadh sé ag an gcluiche.", answer: "D’fheicfinn", hint1: "mé"},
  {question: "___________ é dá mbeadh sé sa seomra.", answer: "D’fheicfinn", hint1: "mé"},
  {question: "___________ sé fadhbanna ag baint le gach réiteach a bheadh againn.", answer: "D’fheicfeadh", hint1: "dearfach"},
  {question: "___________ na caoirigh dá mbeidís fós sa pháirc.", answer: "D’fheicfidís", hint1: "siad"},
  {question: "___________ an ghealach murach na scamaill sa spéir.", answer: "D’fheicfimis", answer2: "D’fheicfeadh muid", hint1: "sinn"},
  {question: "___________ an cuan go léir murach an ceo a tháinig anuas.", answer: "D’fheicfidís", hint1: "siad"},
  {question: "___________ na páistí na bronntanais murach go raibh siad i bhfolach san áiléar.", answer: "D’fheicfeadh", hint1: "dearfach"},
  {question: "___________ sí an féar ag fás, bhí sí chomh géar sin.", answer: "D’fheicfeadh", hint1: "dearfach"},
  {question: "___________é ag sleamhnú isteach an cúl doras dá mbeadh sé déanach.", answer: "D’fheicfimis", answer2: "D’fheicfeadh muid", hint1: "sinn"},
  {question: "___________ sí áileacht na dúiche dá seasfadh sí ag an bhfuinneog.", answer: "D’fheicfeadh", hint1: "dearfach"},
];

//feic MC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCNi = [
  {question: "____ ___________seisean rudaí a bheadh ag cur isteach ar dhaoine eile.", answer: "ní fheicfeadh", hint1: "diúltach"},
  {question: "____ ___________sí locht ar aon duine, ba chuma céarbh é.", answer: "ní fheicfeadh", hint1: "diúltach"},
  {question: "____ ___________sin eilifint sa seomra.", answer: "ní fheicfidís", hint1: "siad"},
  {question: "____ ___________sé na fadhbanna móra mar bheadh sé róthógtha leis na mionsonraí.", answer: "ní fheicfeadh", hint1: "diúltach"},
  {question: "____ ___________ é murach gur taispeánadh dúinn é.", answer: "ní fheicfimis", hint1: "sinn"},
  {question: "____ ___________é, bhí sé chomh beag sin.", answer: "ní fheicfeá", hint1: "tú"},
  {question: "____ ___________rud mar sin na laethanta seo ar chor ar bith.", answer: "ní fheicfeá", hint1: "tú"},
  {question: "____ ___________é murach gur thit mé thairis.", answer: "ní fheicfinn", hint1: "mé"},
  {question: "____ ___________ bean chomh cineálta léi dá siúlfá an domhan ar fad.", answer: "ní fheicfeá", hint1: "tú"},
  {question: "____ ___________ sé a spéaclaí faoin mbord fiú dá mbeadh sé fós á lorg.", answer: "ní fheicfeadh", hint1: "diúltach"},
];

//feic MC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCBriatharSaor = [
  {question: "___________ é ach amháin go raibh an áit dubh dorcha.", answer: "d’fheicfí", hint1: "dearfach"},
  {question: "____ ___________ iad dá mbeadh seaicéid lonrúla orthu.", answer: "d’fheicfí", hint1: "dearfach"},
  {question: "___________ an madra murach gur thosaigh sé ag tafann.", answer: "ní fheicfí ", hint1: "diúltach"},
  {question: "____ ___________é dá bhfanfadh sé ina thost.", answer: "ní fheicfí ", hint1: "diúltach"},
  {question: "____ ___________ í sa leabharlann dá mbeadh sí ann.", answer: "d’fheicfí", hint1: "dearfach"},
  {question: "____ ___________an poll sa bhóthar murach an sneachta a thit an mhaidin sin.", answer: "d’fheicfí", hint1: "dearfach"},
  {question: "___ ___________ é dá mbeadh éinne ag faire amach ceart dó.", answer: "d’fheicfí", hint1: "dearfach"},
  {question: "___________  é dá gcuirfí i bhfolach i gceart é.", answer: "ní fheicfí ", hint1: "diúltach"},
  {question: "___________ é murach gur sheas sé amach.", answer: "ní fheicfí ", hint1: "diúltach"},
  {question: "____ ___________é ach amháin gur sheas sé amach ón slua.", answer: "ní fheicfí ", hint1: "diúltach"},
];

//feic MC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCCeisteach = [
  {question: "___ ___________ é gan do chuid spéaclaí?", answer: "an bhfeicfeá", hint1: "tú, dearfach"},
  {question: "____ ___________ an uimhir ar an mbus agus é ag teacht i do threo?", answer: "an bhfeicfeá", hint1: "tú, dearfach"},
  {question: "____ ___________sí an mála dá mbeadh sé leagtha ar an mbord?", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "____ ___________ láithreach é dá dtiocfaidís isteach?", answer: "nach bhfeicfidís", hint1: "siad, diúltach"},
  {question: "____ ___________  níos fearr ná sin in aon áit?", answer: "nach bhfeicfeá", hint1: "tú, diúltach"},
  {question: "____ ___________  an pharáid dá rachaimis isteach sa bhaile mór ar a trí a chlog?", answer: "an bhfeicfimis", answer2: "an bhfeicfeadh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ mórán daoine sa séipéal na laethanta seo?.", answer: "an bhfeicfeá", hint1: "tú, dearfach"},
  {question: "____ ___________duine dall é sin?", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "____ ___________ é dá mbeadh sé tite isteach faoin suíochán?", answer: "an bhfeicfeá", hint1: "tú, dearfach"},
  {question: "____ ___________ é dá mbeadh sé fágtha ansin?", answer: "nach bhfeicfidís", hint1: "siad, diúltach"},
];

//feic MC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCSpleach = [
  {question: "Dúirt sí ____ ___________ sí Seán an oíche sin dá mbeadh sé ann.", answer: "go bhfeicfeadh", hint1: "dearfach"},
  {question: "Ní dóigh liom  ____ ___________ éinne eile é sin.", answer: "go bhfeicfeadh", hint1: "dearfach"},
  {question: "Táim cinnte ____ ___________ Seán é dá mbeadh sé ann.", answer: "go bhfeicfeadh", hint1: "dearfach"},
  {question: "Tá a fhios agam  ____ ___________ é dá mbeadh sé sa siopa.", answer: "go bhfeidfimis", answer2: "go bhfeicfeadh muid", hint1: "sinn, dearfach"},
  {question: "Dúirt siad ____ ___________é murach go raibh an áit ródhorcha.", answer: "go bhfeicfidís", hint1: "siad, dearfach"},
  {question: "Tá a fhios agam ____ ___________ sin aon rud mícheart leis.", answer: "nach bhfeicfidís", hint1: "siad, diúltach"},
  {question: "Mhaígh Brian ____ ___________ Deirdre na himpleachtaí a bhain leis an ráiteas.", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "Is léir ____ ___________ é dá mbeadh sé taobh thiar den gcófra.", answer: "nach bhfeicfí", hint1: "briathar saor, diúltach"},
  {question: "Tá a fhios agam ___ ___________ Diarmaid aon difríocht idir an dá dhath sin.", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam go maith ___ ___________é.", answer: "nach bhfeicfidís", hint1: "siad, diúltach"},
];

//feic MC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

//feic MC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var feicMCExtraQuestions = [
  {question: "___________ sé é dá mbeadh sé á lorg.", answer: "d’fheicfeadh", hint1: "dearfach"},
  {question: "____ ___________ é dá mbeadh sé fágtha ar an urlár.", answer: "d’fheicfidís", hint1: "siad, dearfach"},
  {question: "___________ seisean é fiú dá mbeadh sé ag stánadh idir an dá shúil air.", answer: "ní fheicfeadh ", hint1: "diúltach"},
  {question: "____ ___________é dá mbeadh sé rófhada uainn.", answer: "ní fheicfimis", answer2: "ní fheicfeadh", hint1: "sinn, diúltach"},
  {question: "____ ___________é dá mbeadh tóirse agat?", answer: "an bhfeicfeá", hint1: "tú, dearfach"},
  {question: "___ ___________éinne é sin dá mbeadh aon chiall aige?", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "___ ___________ é dá mbeadh an aimsir níos fearr agus an ceobhrán imithe?", answer: "d’fheicfí", hint1: "briathar saor, dearfach"},
  {question: "Táim cinnte ____ ___________ Seán aon fhadhb leis sin.", answer: "nach bhfeicfeadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam ___ ___________ Nóra láithreach go raibh fadhb againn.", answer: "go bhfeicfeadh", hint1: "dearfach"},
  {question: "Bhí mé ag súil ___ ___________an doras briste.", answer: "nach bhfeicfidís", hint1: "siad, diúltach"},
];

//Feic Quiz
var feicQuiz = [
  {question: "", answer: "an bhfaca", hint1: "dearfach"},
  {question: "", answer: "Chonacthas", hint1: "briathar saor, aimsir chaite"},
  {question: "", answer: "chonaic", hint1: "aimsir chaite, dearfach"},
  {question: "", answer: "ní fhaca", hint1: "aimsir chaite, diúltach"},
  {question: "", answer: "feicim", hint1: "mé, aimsir chaite"},
  {question: "", answer: "ní fheicimid", answer2: "ní fheiceann muid", hint1: "sinn, aimsir láithreach"},
  {question: "", answer: "feictear", hint1: "briathar saor, dearfach"},
  {question: "", answer: "nach bhfeiceann", hint1: "diúltach, aimsir láithreach"},
  {question: "", answer: "go bhfeicim", hint1: "mé, aimsir láithreach"},
  {question: "", answer: "go bhfeiceann", hint1: "siad, dearfach"},
  {question: "", answer: "feicfimid", answer2: "feicfidh muid", hint1: "sinn, dearfach"},
  {question: "", answer: "ní fheicfimid", answer2: "ní fheicfidh muid", hint1: "sinn, diúltach"},
  {question: "", answer: "an bhfeicfimid", answer2: "An bhfeicfidh muid", hint1: "briathar saor, dearfach"},
  {question: "", answer: "feicfear", hint1: "briathar, dearfach"},
  {question: "", answer: "feicfidh", hint1: "aimsir fháistineach, dearfach"},
  {question: "", answer: "d’fheicfinn", hint1: "mé, dearfach"},
  {question: "", answer: "an bhfeicfimis", answer2: "an bhfeicfeadh muid", hint1: "sinn, dearfach"},
  {question: "", answer: "ní fheicfidís", answer2: "ní fheicfeadh siad", hint1: "siad, diúltach"},
  {question: "", answer: "d’fheicfeadh", hint1: "dearfach"},
  {question: "", answer: "nach bhfeicfidís", answer2: "nach bhfeicfeadh siad", hint1: "siad, diúltach"},
];

//ITH
//ith AC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACQuestions = [
  {question: "___________ mé bricfeasta maith sular fhág mé an teach.", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ sé le fonn ar cuireadh roimhe.", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ ár sáith ag deireadh an lae. (sinn)", answer: "d'itheamar", answer2: "d'ith muid", hint1: "sinn, dearfach"},
  {question: "___________ sí na méara di féin fad a bhí sí ag fanacht.", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ sé a chuid agus d’fhág sé ina dhiaidh sin.", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ an t-asal an coirce go heireaball. ", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ ár gcuid agus bhuaileamar bóthar. (sinn)", answer: "d'itheamar", answer2: "d'ith muid", hint1: "sinn, dearfach"},
  {question: "___________ an leon mo lón.", answer: "d'ith", hint1: "dearfach"},
  {question: "___________ an greim a cuireadh os ár gcomhair. (sinn)", answer: "d'itheamar", answer2: "d'ith muid", hint1: "sinn, dearfach"},
  {question: "___________ siad an béile go craosta. ", answer: "d'ith", hint1: "dearfach"},
];

//ith AC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACNi = [
  {question: "____ ___________ aon bhricfeasta an mhaidin sin. (sinn)", answer: "níor itheamar", answer2: "níor ith muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ an páiste a dhinnéar.", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ mé aon rud as an ngnáth. ", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ siad an cabáiste a tugadh dóibh.", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ mé aon rud an lá sin.", answer: "níor ith", hint1: "diúltach"},
  {question: "Dúirt sí go raibh ocras uirthi ach ____ ___________ sí mórán. ", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ sé ach greim beag.", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ aon rud roimh an gcluiche. (sinn)", answer: "níor itheamar", answer2: "níor ith muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sibh mórán an mhaidin sin.", answer: "níor ith", hint1: "diúltach"},
  {question: "____  ___________ seacláid ná aon mhilseáin ar feadh trí mhí. (sinn)", answer: "níor itheamar", answer2: "níor ith muid", hint1: "diúltach, sinn"},
];

//ith AC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACBriatharSaor = [
  {question: "___________ gach a raibh sa chuisneoir. (dearfach)", answer: "itheadh", hint1: "dearfach"},
  {question: "___________ cuid mhaith den mbia. (dearfach)", answer: "itheadh", hint1: "dearfach"},
  {question: "___________ gach a raibh ar an bpláta. (dearfach)", answer: "itheadh", hint1: "dearfach"},
  {question: "Fágadh nimh amach do na francaigh ach ____ ___________ é. (diúltach)", answer: "níor itheadh", hint1: "diúltach"},
  {question: "___________ aon cheann de na seacláidí a bhí sa bhosca. (diúltach)", answer: "níor itheadh", hint1: "diúltach"},
  {question: "___________ oiread is blúire den mbia. (diúltach)", answer: "níor itheadh", hint1: "diúltach"},
  {question: "____ ___________ na prátaí go léir. (dearfach)", answer: "itheadh", hint1: "dearfach"},
  {question: "____ ___________ na húlla ar fad a bhí ar an gcrann. (dearfach)", answer: "itheadh", hint1: "dearfach"},
  {question: "____ ___________ ach píosa beag den gcíste milis a fágadh dóibh. (diúltach)", answer: "níor itheadh", hint1: "diúltach"},
  {question: "___________ ach leath den mbia a fágadh amach dóibh. (diúltach)", answer: "níor itheadh", hint1: "diúltach"},
];

//ith AC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACCeisteach = [
  {question: "____ ___________ tú do dhinnéar go fóill? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ sibh an lón a cuireadh os bhur gcomhair? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ tú do lón tamall ó shin? (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "____ ___________ tú an císte agus ar thaitin sé leat? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ na beithígh an sadhlas go léir? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ sibh aon rud go fóill?", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ siad dinnéar mór tamall ó shin? (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "____ ___________ an bia a d’fhág mé sa chuisneoir? (briathar saor, dearfach)", answer: "ar itheadh", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ sibh na héisc ar fad a fuair mé inné? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ siad gach a cuireadh rompu? (diúltach)", answer: "nár ith", hint1: "diúltach"},
];

//ith AC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACSpleach = [
  {question: "Dúirt sé ____ ___________ na seilidí an leitís. (dearfach)", answer: "gur ith", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ an madra an bhróg. (dearfach)", answer: "gur ith", hint1: "dearfach"},
  {question: "Shéan sé ____ ___________ sé gach a raibh sa chuisneoir. (dearfach)", answer: "gur ith", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ siad mórán an lá sin. (dearfach)", answer: "gur ith", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ siad na muisiriúin sin? (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________tú bricfeasta mór sular fhág tú. (dearfach)", answer: "gur ith", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ na seilidí na luibheanna ar fad a chuireamar sa ghairdín. (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "Dúirt sí ____ ___________ sí ach fíorbheagán le seachtain? (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________siad an cabáiste a tugadh dóibh. (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "Bhí sé cinnte ____ ___________na páistí na torthaí a tugadh dóibh. (diúltach)", answer: "nár ith", hint1: "diúltach"},
];

//ith AC Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACCoibhneasta = [
];

//ith AC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithACExtraQuestions = [
  {question: "___________ mé mo bhricfeasta go luath an mhaidin sin. (dearfach) ", answer: "d'ith", hint1: "dearfach"},
  {question: "____ ___________ an béile a cuireadh os ár gcomhair. (sinn, dearfach)", answer: "d'itheamar", answer2: "d'ith muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ mé aon ghreim ceart le trí lá. (diúltach) ", answer: "níor ith", hint1: "diúltach"},
  {question: "____ ___________ aon rud go dtí tar éis an chluiche. (sinn, diúltach) ", answer: "níor itheamar", answer2: "níor ith muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ tú do lón inniu? (dearfach)", answer: "ar ith", hint1: "dearfach"},
  {question: "____ ___________ tú do dhóthain ar maidin. (diúltach)", answer: "nár ith", hint1: "diúltach"},
  {question: "____ ___________ gach luibh a bhí sa ghairdín againn. (briathar saor, dearfach) ", answer: "itheadh", hint1: "briathar saor"},
  {question: "____ ___________ an fheoil ar chor ar bith. (briathar saor, diúltach)", answer: "níor itheadh", hint1: "briathar saor"},
  {question: "Bhí mé cinnte ____ ___________ an t-arán ar fad aréir. (sinn, diúltach)", answer: "gur itheamar", answer2: "gur ith muid", hint1: "sinn"},
  {question: "____ ___________ siad aon chuid den mbia a d’fhág mé amach dóibh. (diúltach)", answer: "níor ith", hint1: "diúltach"},
];

//ith AL Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALQuestions = [
  {question: "___________ sí a lón sa bhialann beagnach gach lá. ", answer: "itheann", hint1: "dearfach"},
  {question: "___________ subh go minic leis an mbricfeasta. (mé)", answer: "Ithim", answer2: "itheann mé", hint1: "dearfach, mé"},
  {question: "___________ siad mil lena gcuid leite.", answer: "itheann", hint1: "dearfach"},
  {question: "___________ brugair is sceallóga i bhfad rómhinic. (sinn)", answer: "ithimid", answer2: "itheann muid", hint1: "dearfach, sinn"},
  {question: "___________ béile sa bhialann béal dorais sula dtéimid isteach san amharclann. (sinn)", answer: "ithimid", answer2: "itheann muid", hint1: "dearfach, sinn"},
  {question: "___________ bia folláin don gcuid is mó. (mé)", answer: "Ithim", answer2: "itheann mé", hint1: "dearfach, mé"},
  {question: "___________ siad feoil uair sa ló ar a laghad. ", answer: "itheann", hint1: "dearfach"},
  {question: "___________ go leor torthaí úra de ghnáth. (sinn)", answer: "ithimid", answer2: "itheann muid", hint1: "dearfach, sinn"},
  {question: "Téimid amach sa choill agus ___________ sméara dubha sa bhfómhar.", answer: "ithimid", answer2: "itheann muid", hint1: "dearfach, sinn"},
  {question: "___________sé dinnéar mór gach oíche.", answer: "itheann", hint1: "dearfach"},
];

//ith AL Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALNi = [
  {question: "____ ___________ mórán sula dtéim amach ar maidin.", answer: "ní ithim", answer2: "ní itheann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ sé arán a thuilleadh.", answer: "ní itheann", hint1: "diúltach"},
  {question: "____ ___________ ach lón éadrom i lár an lae. (sinn)", answer: "ní ithimid", answer2: "ní theann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ mórán glasraí, faraor. (mé)", answer: "ní ithim", answer2: "ní itheann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ siad bia ceart folláin riamh ar éigean. ", answer: "ní itheann", hint1: "diúltach"},
  {question: "____ ___________ siad ach leite don mbricfeasta.", answer: "ní itheann", hint1: "diúltach"},
  {question: "____ ___________ aon rud roimh dhul ag snámh gach maidin. (sinn)", answer: "ní ithimid", answer2: "ní theann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ mórán feola níos mó. (mé)", answer: "ní ithim", answer2: "ní itheann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ an madra ach bia speisialta.", answer: "ní itheann", hint1: "diúltach"},
  {question: "____ ___________ siad ná ní ólann siad tar éis a seacht a chlog sa tráthnóna.", answer: "ní itheann", hint1: "diúltach"},
];

//ith AL Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALBriatharSaor = [
  {question: "___________ turcaí ag dinnéar na Nollag de gháth. (dearfach)", answer: "itear", hint1: "dearfach"},
  {question: "___________ i bhfad níos mó bia ón iasacht le blianta beaga anuas in Éirinn.", answer: "itear", hint1: "dearfach"},
  {question: "____ ___________ feithidí mar bhia in Éirinn fós. (diúltach)", answer: "ní itear", hint1: "diúltach"},
  {question: "___ ___________ an oiread céanna prátaí in Éirinn níos mó is a ití fadó. (diúltach)", answer: "ní itear", hint1: "diúltach"},
  {question: "___________ i bhfad níos mó ríse in Éirinn na laethanta seo. (dearfach)", answer: "itear", hint1: "dearfach"},
  {question: "____ ___________ dinnéar mór i lár an lae ach go hannamh na laethanta seo. (diúltach)", answer: "ní itear", hint1: "diúltach"},
  {question: "___________ éisc don réamhchúrsa go minic ag ócáidí foirmeálta. (dearfach)", answer: "itear", hint1: "dearfach"},
  {question: "____ ___________ uachtar reoite le rúbarb te go minic.", answer: "itear", hint1: "dearfach"},
  {question: "___________ sliogéisc go minic sna bialanna na laethanta seo. (dearfach)", answer: "itear", hint1: "dearfach"},
  {question: "____ ___________ go leor glasraí úra de réir na saineolaithe bia. (diúltach)", answer: "ní itear", hint1: "diúltach"},
];

//ith AL Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALCeisteach = [
  {question: "___________ tú mórán milseán? (dearfach).", answer: "an itheann", hint1: "dearfach"},
  {question: "____ ___________ sibh sa bhialann sin riamh? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "_____ ___________ sibh sicín don dinnéar go minic? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "_____ ___________sibh bágún agus cabáiste go minic? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "_____ ___________ tú sliogéisc riamh? (diúltach).", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "_____ ___________ tú bricfeasta friochta go minic (diúltach).", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "____ ___________ go leor bia atá folláin go rialta? (sinn, diúltach).", answer: "nach n-ithimid", answer2: "ní n-itheann muid", hint1: "diúltach"},
  {question: "____ ___________ sionnaigh chathrach gach saghas bia a fhaigheann siad? (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "____ ___________tú lón maith go rialta? (dearfach).", answer: "an itheann", hint1: "dearfach"},
  {question: "____ ___________siad madraí sa tSín? (diúltach).", answer: "nach n-itheann", hint1: "diúltach"},
];

//ith AL Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALSpleach = [
  {question: "Ní dóigh liom ____ ___________ sé aon bhia ceart folláin. (dearfach)", answer: "go n-itheann", hint1: "dearfach"},
  {question: "Deir siad ____ ___________ siad lón mór gach lá. (dearfach)", answer: "go n-itheann", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ siad dinnéar ceart leath an ama. (dearfach)", answer: "go n-itheann", hint1: "dearfach"},
  {question: "Deirtear ____ ___________ sí i bhfad an iomarca bia. (dearfach)", answer: "go n-itheann", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ i bhfad níos mó glasraí san Áis ná mar a itear anseo. (briathar saor, dearfach)", answer: "go n-ithtear", hint1: "dearfach, briathar saor"},
  {question: "Deir siad ____ ___________ siad seacláid riamh. (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "Deir sé ____ ___________ sé mórán don mbricfeasta. (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "Deirtear ____ ___________ mórán níos mó ná a leath den mbia a cheannaítear sna siopaí. (briathar saor, diúltach)", answer: "nach n-ithtear", hint1: "diúltach, briathar saor"},
  {question: "Tá a fhios agam ____ ___________na beithígh ach féar glas i rith an tsamhraidh. (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
  {question: "Táim cinnte ____ ___________siad ach an bia a mholtar dóibh. (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
];

//ith AL Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALCoibhneasta = [
];

//ith AL Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithALExtraQuestions = [
  {question: "___________sé agus ólann sé gach a chuirtear os a chomhair. (dearfach) ", answer: "itheann", hint1: "dearfach"},
  {question: "___________ siad dinnéar mór ag an deireadh seachtaine de ghnáth. (dearfach).", answer: "itheann", hint1: "dearfach"},
  {question: "___________ sé leath a dhóthain do dhuine a dhéanann an oiread sin oibre. (diúltach) ", answer: "ní itheann", hint1: "diúltach"},
  {question: "____ ___________ ach bia ceart folláin chomh fada agus is féidir é. (sinn, diúltach)", answer: "ní ithimid", answer2: "ní itheann muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ bia próiseáilte ach go hannamh. (sinn, diúltach) ", answer: "ní ithimid", answer2: "ní itheann muid", hint1: "sinn, diúltach"},
  {question: "_____ ___________ an oiread sin feola sa tSeapáin. (briathar saor, diúltach)", answer: "ní itear", hint1: "briathar saor"},
  {question: "___________ na seilidí na luibheanna a chuirimid sa ghairdín gach bliain. (dearfach) ", answer: "itheann", hint1: "dearfach"},
  {question: "___________ tú iasc go minic? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "____ ___________tusa aon rud ach truflais riamh? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "Deirtear _____ ___________ siad ach díreach an méid bia atá riachtanach dóibh. (diúltach)", answer: "nach n-itheann", hint1: "diúltach"},
];

//ith AF Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFQuestions = [
  {question: "___________ béile deas le chéile níos déanaí. (sinn)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "sinn"},
  {question: "___________ tú an iomarca má leanann tú ort mar sin.", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ sé beo tú má fhaigheann sé amach mar gheall air.", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ siad é a luaithe is a bhíonn ocras orthu.", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ lón áit éigin i lár na cathrach. (sinn)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "sinn"},
  {question: "___________ an dinnéar timpeall a sé tráthnóna. (sinn)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "sinn"},
  {question: "___________ mé ceann eile acu sin má bhíonn sé ar fáil.", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ sí é má bhíonn ocras uirthi.", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ dinnéar na Nollag i dteach Mháire i mbliana. (sinn)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "sinn"},
  {question: "___________ an sionnach na sicíní.", answer: "íosfaidh", hint1: "dearfach"},
];

//ith AF Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFNi = [
  {question: "____ ___________ sí é muna mbíonn blas air..", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ mé píosa de choinín go brách arís.", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ aon rud eile go dtí maidin amárach. (sinn)", answer: "ní íosfaimid", answer2: "ní íosfaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ an leon ach an méid atá uaidh. ", answer: "ní íosfaigh", hint1: "diúltach"},
  {question: "____ ___________ tú san áit sin arís go ceann píosa fada, déarfainn. ", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ siad é muna dtaitníonn sé leo.", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ an dinnéar go dtí go dtagann gach duine isteach. (sinn)", answer: "ní íosfaimid", answer2: "ní íosfaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ na capaill an féar sin. ", answer: "ní íosfaigh", hint1: "diúltach"},
  {question: "____ ___________ na héin an bia a chuir tú amach dóibh.", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ sí aon rud go dtí go mbíonn babhta traenála curtha di aici. ", answer: "ní íosfaidh", hint1: "diúltach"},
];

//ith AF Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFBriatharSaor = [
  {question: "___________ na húlla sna crainn muna gclúdaíonn tú iad le heangach. (dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "____ ___________ na prátaí sin ar fad as seo go ceann seachtaine. (dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "___________ gach rud atá ag fás sa ghairdín. (dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "_____ ___________ an bia sin ar fad roimh dheireadh na hoíche. (dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "_____ ___________ prátaí in Éirinn go brách na breithe . (dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "____ ___________ leath den mbia atá leagtha amach ansin. (diúltach)", answer: "ní íosfar", hint1: "diúltach"},
  {question: "____ ___________ na putóga má bhíonn a fhios acu céard iad féin. (diúltach)", answer: "ní íosfar", hint1: "diúltach"},
  {question: "___________ é muna mbíonn sé céad faoin gcéad ceart. (diúltach)", answer: "ní íosfar", hint1: "diúltach"},
  {question: "___________ an ceann muice is cuma conas a dhéanfaidh tú suas é. (diúltach)", answer: "ní íosfar", hint1: "diúltach"},
  {question: "_____ ___________ aon rud go dtí go ndéarfaidh an t-athair an t-altú roimh bhia. (diúltach)", answer: "ní íosfar", hint1: "diúltach"},
];

//ith AF Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFCeisteach = [
  {question: "___ ___________ tú é sin ar fad leat féin? (dearfach)", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú do dhinnéar sula dtéann tú go dtí an cluiche? (dearfach)", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "____ ___________ siad é sin ar fad, an dóigh leat? (diúltach)", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "____ ___________ an sionnach an coinín? (dearfach).", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "____ ___________ rud éigin sula mbuailfimid bóthar? (sinn, dearfach).", answer: "an íosfaimid", answer2: "an íosfaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú rud éigin sula dtéann tú amach? (diúltach).", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ siad an rud a d’ullmhaigh mé dóibh? (diúltach).", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ lón roimh an gcruinniú? (sinn, diúltach)", answer: "nach n-íosfaimid", answer2: "nach n-íosfaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ é má fhágann tú amuigh mar sin é? (briathar saor, diúltach).", answer: "nach n-íosfar", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ na préacháin aon bhia atá fágtha ar an mbord sa ghairdín? (diúltach).", answer: "nach n-íosfaidh", hint1: "diúltach"},
];

//ith AF Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFSpleach = [
  {question: "Deir siad ____ ___________ siad gach rud a thabharfar dóibh. (dearfach)", answer: "go n-íosfaidh", hint1: "dearfach"},
  {question: "Táim cinnte ____ ___________ an bia go léir atá sa mhála sin. (briathar saor, sinn, dearfach)", answer: "go n-íosfar", hint1: "dearfach, briathar saor"},
  {question: "Is dócha ____ ___________ sibh dinnéar mór ina dhiaidh sin. (dearfach) ", answer: "go n-íosfaidh", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ an bia ar fad atá againn. (briathar saor,dearfach)", answer: "go n-íosfar", hint1: "dearfach, briathar saor"},
  {question: "Deir sí ____ ___________ sí a dinnéar níos déanaí. (dearfach)", answer: "go n-íosfaidh", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith  ____ ___________ siad a leath den méid sin. (diúltach) ", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "Deir siad  ____ ___________  siad é ach níl a fhios agam faoi sin. (diúltach)", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________ siad na seacláidí go léir. (diúltach)", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________an bia go léir a cheannaigh sibh. (briathar saor, diúltach)", answer: "nach n-íosfar", hint1: "diúltach, briathar saor"},
  {question: "Tá súil agam ____ ___________siad an blúire deiridh a fágadh domsa. (diúltach)", answer: "nach n-íosfaidh", hint1: "diúltach"},
];

//ith AF Coibhneasta, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFCoibhneasta = [
];

//ith AF Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithAFExtraQuestions = [
  {question: " ___________ mé é sin níos déanaí. (dearfach)", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ dinnéar sa chathair níos déanaí. (sinn, dearfach)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ siad aon rud ar maidin. (diúltach)", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "____ ___________ ach a leath den méid a cheannaigh tú. (briathar saor, diúltach)", answer: "ní íosfar", hint1: "diúltach, briathar saor"},
  {question: "___________ tú é sin go léir? (dearfach) ", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "______ ___________ na beithigh an méid sin in aon seachtain amháin? (diúltach) ", answer: "nach n-íosfaidh", hint1: "diúltach"},
  {question: "Tá mé cinnte______ ___________ gach aon bhlúire de sin. (briathar saor, dearfach)", answer: "go n-íosfar", hint1: "dearfach"},
  {question: "___________ beo tú muna gcríochnaíonn tú an obair sin inniu. (briathar saor, dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "Tá a fhios agam nach bhfuil sé róbhlasta ach ___________ é. (briathar saor, dearfach)", answer: "íosfar", hint1: "dearfach"},
  {question: "____ ___________ béile maith anocht le cúnamh Dé. (sinn, dearfach)", answer: "íosfaimid", answer2: "íosfaidh muid", hint1: "dearfach, sinn"},
];

//ith MC Dearfach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCQuestions = [
  {question: "___________ anois é dá mbeadh sé agam. (mé)", answer: "d'íosfainn", answer2: "d'íosfadh mé", hint1: "mé"},
  {question: "___________ eireaball muice. An bhfuil a fhios sin agat? (tú)", answer: "d'íosfá", answer2: "d'íosfadh tú", hint1: "tú"},
  {question: "___________ sé pé rud a thabharfaí dó. ", answer: "d'íosfadh", hint1: "dearfach"},
  {question: "___________ é cinnte dá mbeadh sé ar fáil. (sinn) ", answer: "d'íosfaimid", answer2: "d'íosfadh muid", hint1: "sinn"},
  {question: "___________ do lámh. Bhí siad chomh hocrach sin. (siad)", answer: "d'iosfaidís", answer2: "d'íosfadh siad", hint1: ""},
  {question: " ___________ sí é dá mbeadh ocras uirthi.", answer: "d'íosfadh", hint1: "dearfach"},
  {question: "___________ sionnach aon ainmhí eile a mharódh sé féin. ", answer: "d'íosfadh", hint1: "dearfach"},
  {question: "___________ aon rud ach turnapaí. (siad)", answer: "d'iosfaidís", answer2: "d'íosfadh siad", hint1: ""},
  {question: "___________ uachtar reoite dá mbeadh an aimsir go deas te. (sinn)", answer: "d'íosfaimid", answer2: "d'íosfadh muid", hint1: "sinn"},
  {question: "___________ tú dá mbeadh a fhios acu gur tusa a rinne é. (siad)", answer: "d'iosfaidís", answer2: "d'íosfadh siad", hint1: ""},
];

//ith MC Diúltach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCNi = [
  {question: "____ ___________ é ach amháin go raibh mé stiúctha leis an ocras. (mé) ", answer: "ní íosfainn", answer2: "ní íosfadh mé", hint1: "mé"},
  {question: "____ ___________ sí aon rud an tráthnóna áirithe sin. ", answer: "ní íosfadh", hint1: "diúltach"},
  {question: "____ ___________ bia a bhí as dáta. ", answer: "ní íosdá", answer2: "ní íosfadh tú", hint1: "tú"},
  {question: "____ ___________ sé aon rud a tugadh dó. ", answer: "ní íosfadh", hint1: "diúltach"},
  {question: "____ ___________ sé aon rud a tugadh dó. ", answer: "ní íosfadh", hint1: "diúltach"},
  {question: "____ ___________ aon rud dá mbeadh a fhios againn go raibh cluiche againn. (sinn)", answer: "ní íosfaimis", answer2: "ní íosfadh muid", hint1: "sinn"},
  {question: "____ ___________ an gnáthbhia a bhíonn againn in Éirinn. (siad)", answer: "ní íosfaidís", answer2: "ní íosfadh siad", hint1: "siad"},
  {question: "____ ___________ sí é sin fiú dá mbeadh sí ag fáil bháis den ocras.", answer: "ní íosfadh", hint1: "diúltach"},
  {question: "____ ___________ greim eile sa bhialann sin ina dhiaidh sin. (siad) ", answer: "ní íosfaidís", answer2: "ní íosfadh siad", hint1: "siad"},
  {question: "____ ___________ éinne bia mar sin na laethanta seo. ", answer: "ní íosfadh", hint1: "diúltach"},
];

//ith MC Briathar Saor, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCBriatharSaor = [
  {question: "___________ é dá mbeadh aon chuma air. (dearfach) ", answer: "d'íosfaí", hint1: "dearfach"},
  {question: "____ ___________ i bhfad níos mó bia dá mbeadh teacht air. (dearfach) ", answer: "d'íosfaí", hint1: "dearfach"},
  {question: "___________ na héisc murach go raibh drochbholadh uatha. (dearfach) ", answer: "d'íosfaí", hint1: "dearfach"},
  {question: "____ ___________ a raibh sa teach dá dtiocfaidís ar fad ar ais. (dearfach)", answer: "d'íosfaí", hint1: "dearfach"},
  {question: "____ ___________ an fheoil murach go raibh sí fós reoite. (diúltach) ", answer: "ní íosfaí", hint1: "diúltach"},
  {question: "____ ___________ an bia a bhí ann mar bhí meath ag teacht air. (diúltach) ", answer: "ní íosfaí", hint1: "diúltach"},
  {question: "___________ é dá mbeadh an dara rogha ag aon duine acu. (diúltach) ", answer: "ní íosfaí", hint1: "diúltach"},
  {question: "___________ an t-iasc dá mba amach as reoiteoir a tháinig sé. (diúltach) ", answer: "ní íosfaí", hint1: "diúltach"},
  {question: "____ ___________é dá mbeadh níos fearr ar fáil. (diúltach) ", answer: "ní íosfaí", hint1: "diúltach"},
  {question: "___________ aon rud a tháinig amach as canna ina dhiaidh sin. (diúltach)", answer: "ní íosfaí", hint1: "diúltach"},
];

//ith MC Ceisteach, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCCeisteach = [
  {question: "___ ___________ béile deas anois dá mbeadh sé ar fáil? (tú, dearfach)", answer: "an íosfá", answer2: "an íosfadh tú", hint1: "tú"},
  {question: "____ ___________ sise an oiread sin? (dearfach)", answer: "an íosfadh", hint1: "dearfach"},
  {question: "____ ___________ cosa froganna mar réamhchúrsa dar leat? (siad, dearfach)", answer: "an íosfaidís", answer2: "an íosfadh said", hint1: "siad"},
  {question: "____ ___________ seisean bágún fiú más Giúdach é? (dearfach).", answer: "an íosfadh", hint1: "dearfach"},
  {question: "____ ___________  sibh maicréil (ronnaigh; murlais) úra dá bhfaighinn iad don dinnéar? (dearfach).", answer: "an íosfadh", hint1: "dearfach"},
  {question: "____ ___________mo dhuine a dhá oiread sin dá gcuirfí os a chomhair é? (diúltach)", answer: "nach n-íosfadh", hint1: "diúltach"},
  {question: "____ ___________ é dá mbeadh sé ar fáil? (briathar saor, diúltach).", answer: "nach n-íosfaí", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ rud ar bith tar éis teacht abhaile dóibh? (siad, diúltach)", answer: "nach n-íosfaidís", answer2: "nach n-íosfadh said", hint1: "siad"},
  {question: "____ ___________éinne an t-arán a d’ullmhaigh sé dóibh? (diúltach).", answer: "nach n-íosfadh", hint1: "diúltach"},
  {question: "____ ___________ é dá mbeadh mo bholg ceart? (mé, diúltach).", answer: "nach n-íosfainn", hint1: "diúltach, mé"},
];

//ith MC Spleách, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCSpleach = [
  {question: "Cheap mé ____ ___________ sí é ach níor ith. (dearfach) ", answer: "go n-íosfadh", hint1: "dearfach"},
  {question: "Dúirt sí  ____ ___________ sí é ach d’ith. (diúltach)", answer: "nach n-íosfadh", hint1: "diúltach"},
  {question: "Tá a fhios agat ____ ___________ é dá mbeinn ábalta. (mé, dearfach)  ", answer: "go n-íosfainn", hint1: "mé"},
  {question: "Bhíomar a’ rá ____ ___________ é ach theip orainn. (sinn, dearfach) ", answer: "go n-íosfaimis", hint1: "sinn"},
  {question: "Mhódaigh siad ____ ___________san áit sin go brách arís. (siad, diúltach)", answer: "nach n-íosfaidís", hint1: "siad, diúltach"},
  {question: "Cheap sé ____ ___________ é ach níor ith. (mé, dearfach)", answer: "go n-íosfainn", hint1: "mé"},
  {question: "Dúirt siad  ____ ___________ feoil go brách arís. (siad, diúltach) ", answer: "nach n-íosfaidís", hint1: "siad, diúltach"},
  {question: "Cheap mé ____ ___________ gach rud ach níor itheadh. (briathar saor, dearfach)", answer: "go n-íosfaí", hint1: "briathar saor, dearfach"},
  {question: "Dúramar ___ ___________ é ach is amhlaidh a chaitheamar amach é. (sinn, dearfach)", answer: "go n-íosfaimid", answer2: "go n-íosfadh muid", hint1: "sinn"},
  {question: "Dúirt siad ___ ___________aon rud a tháinig amach as canna. (siad, diúltach)", answer: "nach n-íosfaidís", hint1: "siad, diúltach"},
];

//ith MC Extra Questions, if there are 2 possible answers, copy in ' answer2: "", ' after 'answer:'
var ithMCExtraQuestions = [
  {question: "___________ é dá mbeadh teacht agam air. (mé, dearfach) ", answer: "d'íosfainn", hint1: "mé, dearfach"},
  {question: "___________é dá mbeadh ocras orthu. (siad, dearfach).", answer: "d'íosfaidís", hint1: "siad, dearfach"},
  {question: "___ ___________  ach blúire beag de. (siad, diúltach) ", answer: "ní íosfaidís", hint1: "siad, diúltach"},
  {question: "____ ___________ é dá mbeadh aon rogha eile againn? (sinn, diúltach)", answer: "ní íosfaimis", hint1: "sinn, diúltach"},
  {question: "____ ___________ ubh amh? (tú, dearfach) ", answer: "an íosfá", answer2: "an íosfadh tú", hint1: "tú, dearfach"},
  {question: "An gceapann tú _____ ___________ an madra bia mar sin? (dearfach)", answer: "go n-íosfadh", hint1: "dearfach"},
  {question: "Tá mé a’ rá leat _____ ___________ é dá dtabharfaí dom é. (mé, dearfach) ", answer: "go n-íosfainn", hint1: "mé "},
  {question: "Dúirt sé ____ ___________ sé bia dá leithéid riamh arís. (diúltach)", answer: "nach n-íosfadh", hint1: "diúltach"},
  {question: "Cheap sí ____ ___________ é ach bhí dul amú uirthi. (sinn, diúltach)", answer: "nach íosfaimis", hint1: "sinn, diúltach"},
  {question: "Bhí mé cinnte_____ ___________ é ach níor ith. (siad, dearfach) ", answer: "go n-íosfaidís", hint1: "siad, dearfach"},
];

//Ith Quiz
var ithQuiz = [
  {question: "___________ siad é go craosach. (dearfach, aimsir chaite)", answer: "d'ith", hint1: "dearfach, aimsir chaite"},
  {question: "___________ ár gcuid agus bhailíomar linn. (sinn, aimsir chaite)", answer: "d'itheamar", hint1: "sinn, aimsir chaite"},
  {question: "___ ___________ mé an méid a cuireadh os mo chomhair. (dearfach)", answer: "d'ith", hint1: "dearfach, aimsir chaite"},
  {question: "___  ___________ gach rud agus glanadh na plátaí. (dearfach, briathar saor) ", answer: "itheadh", hint1: "dearfach, briathar saor"},
  {question: "Bhí go leor bia ann ach ____ _______ aon chuid de. (diúltach, briathar saor)", answer: "níor itheadh", hint1: "diúltach, briathar saor"},
  {question: "______ ___________aon rud ceart le trí lá anuas. (sinn, diúltach) ", answer: "níor itheamar", hint1: "sinn, diúltach"},
  {question: "______ ___________ bricfeasta maith gach maidin. (sinn, dearfach)", answer: "d'itheamar", hint1: "sinn, dearfach"},
  {question: "____ ___________mo lón sa bhialann de ghnáth (mé, dearfach)", answer: "ithim", hint1: "mé, dearfach"},
  {question: "____ ___________go leor torthaí agus glasraí gach lá. (sinn, dearfach)", answer: "ithimid", hint1: "sinn, dearfach"},
  {question: "___________ sibhse lón i lár an lae de ghnáth? (dearfach)", answer: "an itheann", hint1: "dearfach"},
  {question: "___________ seisean i bhfad an iomarca bia d’fhear atá chomh beag leis? (diúltach, aimsir láithreach)", answer: "nach n-itheann", hint1: "diúltach, aimsir laithreach"},
  {question: "___________ tú aon bhlas eile sula dtéann tú a chodladh anocht? (dearfach) ", answer: "an íosfaidh", hint1: "dearfach"},
  {question: "___________ rud éigin anois sula i bhfad. (sinn, dearfach)", answer: "íosfaimid", answer2: "íosfaidh muis", hint1: "sinn, dearfach"},
  {question: "______ ___________ sí é má thugann tú di é. (dearfach) ", answer: "íosfaidh", hint1: "dearfach"},
  {question: "___________ mé aon rud eile anois go maidin amárach. (diúltach)", answer: "ní íosfaidh", hint1: "diúltach"},
  {question: "Fág sa chuisneoir é mar tá mé cinnte____ ___________é. (diúltach, briathar saor)", answer: "nach n-íosfar", hint1: "diúltach, briathar saor"},
  {question: "____ ___________é sin fiú dá mbeinn ag fáil bháis den ocras. (diúltach, mé)", answer: "ní íosfainn", hint1: "diúltach, mé"},
  {question: "___________ sí é cé go raibh ocras uirthi. (diúltach)", answer: "ní íosfadh", hint1: "diúltach"},
  {question: "Tá mé a’ rá leat ___________ é dá mbeadh ocras orthu. (dearfach, siad)", answer: "go n-íosdaidís", hint1: "dearfach, siad"},
  {question: "___________ é muna raibh aon rud eile ar fáil? (diúltach, tú)", answer: "nach n-íosfá", hint1: "diúltach, tú"},
];

//TABHAIR
var tabhairACQuestions = [
  {question: "___________ mé bronntanas deas do Niamh don Nollaig.", answer: "thug", hint1: "dearfach"},
  {question: "___________ sí amach dom mar bhí mé déanach.", answer: "thug", hint1: "dearfach"},
  {question: "___________ seans maith dó ach níor ghlac sé leis. (sinn)", answer: "thugamar", answer2: "thug muid", hint1: "dearfach, sinn"},
  {question: "___________ sí stracfhéachaint air ach ní raibh aon suim aici ann. ", answer: "thug", hint1: "dearfach"},
  {question: "___________ sé an leabhar ar iasacht dom. ", answer: "thug", hint1: "dearfach"},
  {question: "___________ aghaidh ar an Róimh ina dhiaidh sin. (sinn)", answer: "thugamar", answer2: "thug muid", hint1: "dearfach"},
  {question: "___________ sí íde na muc is na madraí dúinn. ", answer: "thug", hint1: "dearfach"},
  {question: "___________ tú an ceann sin dom cheana.", answer: "thug", hint1: "dearfach"},
  {question: "___________ bata is bother dóibh mar bhí an teach scriosta acu. (sinn)", answer: "thugamar", answer2: "thug muid", hint1: "dearfach"},
  {question: "___________ aire mhaith don mhadra a fhad is a bhí sé againn.", answer: "thugamar", answer2: "thug muid", hint1: "dearfach"},
];

var tabhairACNi = [
  {question: "____ ___________ sí aon eolas breise dúinn faoin eachtra.", answer: "níor thug", hint1: "diúltach"},
  {question: "____ ___________ aon aird ar an gclampar a bhí taobh thiar dínn. (sinn)", answer: "níor thugamar", answer2: "níor thug muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ mé faoi deara go raibh sé briste go dtí anois.", answer: "níor thug", hint1: "diúltach"},
  {question: "____ ___________ mé faoi deara ansin tú. ", answer: "níor thug", hint1: "diúltach"},
  {question: "____ ___________ siad aon chabhair dúinn lá an ghátair.", answer: "níor thug", hint1: "diúltach"},
  {question: "____ ___________ isteach don mbrú a cuireadh orainn. (sinn)", answer: "níor thugamar", answer2: "níor thug muid", hint1: "diúltach"},
  {question: "____ ___________ aon rud as an ngnách faoi deara an oíche sin. (sinn)", answer: "níor thugamar", answer2: "níor thug muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sí aon litir dom go fóill ar aon nós.", answer: "níor thug", hint1: "diúltach"},
  {question: "____ ___________ siad aon seans dom an aiste a chríochnú.", answer: "níor thug", hint1: "diúltach"},
  {question: "____  ___________ siad aon bhreithmheas ar an obair ar fad a bhí déanta againn. ", answer: "níor thug", hint1: "diúltach"},
];

var tabhairACBriathorSaor = [
  {question: "___________ ard-mholadh dóibh as an taighde a rinne siad. (dearfach)", answer: "tugadh", hint1: "dearfach"},
  {question: "____ ___________ cluas le héisteacht dúinn ach b’shin a raibh ann. (dearfach)", answer: "tugadh", hint1: "dearfach"},
  {question: "___ ___________ aon fhianaise faoin eachtra os comhair na cúirte. (diúltach)", answer: "níor tugadh", hint1: "diúltach"},
  {question: "___ ___________ aon rud le fios domsa faoin scéal. (diúltach)", answer: "níor tugadh", hint1: "diúltach"},
  {question: "___________ íde na muc is na madraí dúinn ar fad. (dearfadh)", answer: "tugadh", hint1: "dearfach"},
  {question: "___________ beirt os comhair na cúirte mar gheall ar an eachtra . (dearfach)", answer: "tugadh", hint1: "dearfach"},
  {question: "____ ___________ aon suntas don scéal ag an am. (diúltach)", answer: "níor tugadh", hint1: "diúltach"},
  {question: "___________ dúinn ach an chluas bhodhar. (diúltach)", answer: "níor tugadh", hint1: "diúltach"},
  {question: "___________ gach cabhair agus cúnamh dóibh ach ba chuma leo. (dearfach)", answer: "tugadh", hint1: "dearfach"},
  {question: "____ ___________ fios fátha an scéil dúinn an chéad lá. (dearfach)", answer: "tugadh", hint1: "dearfach"},
];

var tabhairACCeisteach = [
  {question: "____ ___________ tú an leabhar ar ais do Mháire? (dearfach)", answer: "ar thug", hint1: "dearfach"},
  {question: "____ ___________ na torthaí amach inné? (briathar saor, diúltach)", answer: "nár tugadh", hint1: "diúltach"},
  {question: "____ ___________ tusa cabhair di leis an aiste a scríobh sí? (dearfach)", answer: "ar thug", hint1: "dearfach"},
  {question: "____ ___________ aon chabhair duit? (siad, dearfach)", answer: "ar thugadar", answer2: "ar thug siad", hint1: "dearfach"},
  {question: "____ ___________tú a dhóthain bia don madra sin ar maidin? (diúltach)", answer: "nár tugadh", hint1: "diúltach"},
  {question: "____ ___________  na bronntanais amach fós? (briathar saor, diúltach)", answer: "nár tugadh", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ sibh cuairt ar an oileán riamh? (dearfach)", answer: "ar thug", hint1: "dearfach"},
  {question: "____ ___________ praghas ró-ard dó ar an gcarr sin? (sinn, diúltach)", answer: "ar thugamar", answer2: "ar thug muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ tú an t-airgead ar ais dó? (dearfach)", answer: "ar thug", hint1: "dearfach"},
  {question: "____ ___________ na Gardaí rabhadh dó sular thóg siad é? (diúltach)", answer: "ar thug", hint1: "diúltach"},
];

var tabhairACSpleach = [
  {question: "Dúirt sí ____ ___________ sí amach dá hiníon. (diúltach)", answer: "gur thug", hint1: "diúltach"},
  {question: "Mhaígh sé ____ ___________ aon rud le n-ithe dóibh an lá ar fad. (briathar saor, diúltach)", answer: "nár tugadh", hint1: "diúltach, briathar saor"},
  {question: "Bhí a fhios agam ____ ___________ ár ndóthain airde ar an deacracht sin. (sinn, diúltach)", answer: "nár thugamar", answer2: "nár thug muid", hint1: "diúltach"},
  {question: "Mhaígh siad ____ ___________ bia ceart dóibh i rith na seachtaine. (briathar saor, diúltach)", answer: "nár tugadh", hint1: "diúltach"},
  {question: "Ní fíor ____ ___________ aon droch-shampla dóibh. (briathar saor, dearfach)", answer: "gur thug", hint1: "dearfach"},
  {question: "Creidim ____ ___________ cothrom na féinne dóibh go léir. (briathar saor, dearfach)", answer: "gur thug", hint1: "dearfach"},
  {question: "An é ____ ___________ tú an rothar faoi deara? (diúltach)", answer: "nár thug", hint1: "diúltach"},
  {question: "Dúirt siad ____ ___________ aon chuireadh dóibh dul ann. (briathar saor, diúltach)", answer: "nár tugadh", hint1: "diúltach"},
  {question: "Dúramar ____ ___________an múinteoir aon obair bhaile dúinn. (diúltach)", answer: "nár thug", hint1: "diúltach"},
  {question: "Lig sé air ____ ___________fear an phoist an litir dó. (diúltach)", answer: "nár thug", hint1: "diúltach"},
];

var tabhairACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tabhairACExtraQuestions = [
  {questions: "___________ mé gach a raibh agam dóibh. (dearfach) ", answer: "thug", hint1: "dearfach"},
  {questions: "____ ___________ cuairt ar an áit sin cúpla uair. (sinn, dearfach) ", answer: "thugamar", answer2: "thug muid", hint1: "dearfach, sinn"},
  {questions: "____ ___________aon aird ar an madra a bhí ag tafann lasmuigh. (diúltach) ", answer: "níor thugamar", answer2: "níor thug muid", hint1: "diúltach"},
  {questions: "___________ mé cúpla iarracht air ach theip glan orm. (dearfach) ", answer: "thug", hint1: "dearfach"},
  {questions: "___________ gach seans dó ach níor éist sé le héinne. (briathar saor, dearfach)", answer: "tugadh", hint1: "dearfach"},
  {questions: "____ ___________tú an peann ar ais dom? (dearfach) ", answer: "ar thug", hint1: "dearfach"},
  {questions: "____ ___________ go leor seansanna dó cheana? (briathar saor, diúltach) ", answer: "nár tugadh", hint1: "diúltach"},
  {questions: "___ ___________ tú an leabhar ar ais don leabharlann fós? (diúltach) ", answer: "nár thug", hint1: "diúltach"},
  {questions: "Dúirt sí ____ ___________sí isteach don mbrú a cuireadh uirthi. (diúltach)", answer: "nár thug", hint1: "diúltach"},
  {questions: "____ ___________ aon rogha dó agus b’éigean dó é a dhéanamh. (sinn, diúltach)", answer: "níor thugamar", answer2: "níor thug muid", hint1: "diúltach"},
];

var tabhairALQuestions = [
  {question: "___________ bia do na héin i rith an gheimhridh. (mé) ", answer: "tugaim", answer2: "tugann mé", hint1: "dearfach, mé"},
  {question: "___________ sí togha na haire do na páistí óga. ", answer: "tugann", hint1: "dearfach"},
  {question: "___________ aghaidh ar an bhFleadh Cheoil gach bliain. (sinn)", answer: "tugaimid", answer2: "tugann muid", hint1: "dearfach, sinn"},
  {question: "___________ tusa aire mhaith duit féin i gcónaí. ", answer: "tugann", hint1: "dearfach"},
  {question: "___________ an ceol sin ardú croí dom gach uair a chloisim é. ", answer: "tugann", hint1: "dearfach"},
  {question: "___________ cuairt ar mo dheirfiúr sna Stáit Aontaighe ó am go chéile. (mé)", answer: "tugaim", answer2: "tugann mé", hint1: "dearfach, mé"},
  {question: "___________ sí gach rud faoi deara cé go bhfuil sí an-óg fós.", answer: "tugann", hint1: "dearfach"},
  {question: "___________ gach séisiúr a dhraíocht féin leis.", answer: "tugann", hint1: "dearfach"},
  {question: "___________ sí glasraí dúinn óna gairdín féin uaireanta.  ", answer: "tugann", hint1: "dearfach"},
  {question: "___________ cuairt ghearr ghairid ar an áit ó am go chéile. (sinn)", answer: "tugaimid", answer2: "tugann muid", hint1: "dearfach, sinn"},
];

var tabhairALNi = [
  {question: "____ ___________ sé aon aire dó féin. ", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________ milseáin do na páistí riamh. (mé)", answer: "ní thugaim", answer2: "ní thugann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ amach do dhaoine toisc botún a bheith déanta acu. (sinn)", answer: "ní thugaimid", answer2: "ní thugann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sí a focal ach amháin nuair a bhíonn sí an-chinnte. ", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________ aon aird ar na daoine a bhíonn i gcónaí ag gearán. (sinn) ", answer: "ní thugaimid", answer2: "ní thugann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ an chuach aon aire dá gearcaigh féin. ", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________ an múinteoir aon leid faoi na scrúduithe roimhré.", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________siad ach féar glas do na beithigh sa samhradh. ", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________ isteach do dhaoine drochbhéasacha riamh. (sinn)", answer: "ní thugaimid", answer2: "ní thugann muid", hint1: "diúltach"},
  {question: "____ ___________ an scéal sin aon sásamh intinne domsa.", answer: "ní thugann", hint1: "diúltach"},
];

var tabhairALBriatharSaor = [
  {question: "___________ duaiseanna amach sa scoil ag deireadh na bliana. (dearfach).", answer: "tugtar", hint1: "dearfach"},
  {question: "____ ___________ aon éisteacht do mhionlaigh sa tír sin. (diúltach)", answer: "ní thugtar", hint1: "diúltach"},
  {question: "_____ ___________ cothrom na féinne do na daltaí ar fad sa scoil. (dearfach)", answer: "tugtar", hint1: "dearfach"},
  {question: "_____ ___________’leibide’ ar dhuine nach bhfuil ciall ná réasún aige. (dearfach)", answer: "tugtar", hint1: "dearfach"},
  {question: "_____ ___________ an oiread sin teifeach isteach sa tír seo. (diúltach).", answer: "ní thugtar", hint1: "diúltach"},
  {question: "_____ ___________ aon ugach do scoláirí a bhíonn fiáin. (diúltach).", answer: "tugtar", hint1: "diúltach"},
  {question: "____ ___________ breith a mbéal féin do mhicléinn ollscoile go minic. (dearfach).", answer: "tugtar", hint1: "dearfach"},
  {question: "____ ___________ aon aird ar an luasteorainn ar an mbóthar contúirteach sin. (diúltach)", answer: "ní thugtar", hint1: "diúltach"},
  {question: "____ ___________scoláireacht don duine is fearr Gaeilge gach bliain. (dearfach).", answer: "tugtar", hint1: "dearfach"},
  {question: "____ ___________ na mílte daoine isteach go Sceilg Mhichíl gach bliain. (dearfach).", answer: "tugtar", hint1: "dearfach"},
];

var tabhairALCeisteach = [
  {question: "___________ tú aire mhaith don madra? (dearfach).", answer: "an dtugann", hint1: "dearfach"},
  {question: "____ ___________ sé misneach duit nuair a fhéachann tú air? (diúltach)", answer: "nach dtugann", hint1: "diúltach"},
  {question: "_____ ___________ tú bia don gcat fiáin sin gach lá? (dearfach)", answer: "an dtugann", hint1: "dearfach"},
  {question: "_____ ___________sibh cuairt ar an áit go minic? (dearfach)", answer: "an dtugann", hint1: "dearfach"},
  {question: "_____ ___________ an bhean sin isteach riamh? (dearfach).", answer: "an dtugann", hint1: "dearfach"},
  {question: "_____ ___________ tú an difríocht atá eatarthu faoi deara? (diúltach).", answer: "nach dtugann", hint1: "diúltach"},
  {question: "____ ___________ gach aon chabhair agus cúnamh dóibh? (briathar saor, diúltach).", answer: "nach dtugtar", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ sibh aire mhaith dá chéile? (diúltach)", answer: "nach dtugann", hint1: "diúltach"},
  {question: "____ ___________cothrom na féinne do gach duine faoi láthair? (sinn, diúltach).", answer: "nach dtugaimid", answer2: "nach dtugann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ i bhfad an iomarca saoirse do dhéagóirí óga na laethanta seo? (briathar saor, dearfach).", answer: "an dtugann", hint1: "dearfach, briathar saor"},
];

var tabhairALSpleach = [
  {question: "Deirtear ____ ___________ sí suas an-éasca. (dearfach)", answer: "go dtugann", hint1: "dearfach"},
  {question: "Deir sé ____ ___________ sé isteach don dream sin riamh. (diúltach)", answer: "nach dtugann", hint1: "diúltach"},
  {question: "Deir siad ____ ___________ siad an chluas bhodhar do dhaoine a bhíonn ag gearán de shíor. (dearfach)", answer: "go dtugann", hint1: "dearfach"},
  {question: "Glacaim leis ____ ___________ siad mórán trioblóide dúinn riamh. (diúltach)", answer: "nach dtugtar", hint1: ""},
  {question: "Cloisim ____ ___________ na torthaí amach go dtí ard-tráthnóna. (briathar saor, diúltach)", answer: "nach dtugann", hint1: "diúltach, briathar saor"},
  {question: "Deirtear liom ____ ___________ mil cosaint duint ar thinneas. (dearfach)", answer: "go dtugann", hint1: "dearfach"},
  {question: "Aithnítear ____ ___________ crios sábhála an-chosaint duit i gcás timpiste. (dearfach)", answer: "go dtugann", hint1: "dearfach"},
  {question: "Deir sí ____ ___________ aon aird ar bhotúin ghramadaí a fhad a bhíonn an téacs intuigthe. (briathar saor, diúltach)", answer: "nach dtugtar", hint1: "diúltach, briathar saor"},
  {question: "Tá a fhios agam ____ ___________ciall ar dhaoine áirithe riamh. (diúltach)", answer: "nach dtugann", hint1: "diúltach"},
  {question: "Tá sé intuigthe ____ ___________siad cabhair do dhaoine óga i gcónaí. (mé, diúltach)", answer: "go dtugann", hint1: "diúltach"},
];

var tabhairALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tabhairALExtraQuestions = [
  {question: "___________sé ardú croí dom é sin a chloisteáil. (dearfach) ", answer: "tugann", hint1: "dearfach"},
  {question: "___________ sé seo aon fhaoiseamh duit ón bpian? (dearfach).", answer: "an dtugann", hint1: "dearfach"},
  {question: "___ ___________ siadsan na difríochtaí beaga sin faoi deara. (diúltach) ", answer: "ní thugann", hint1: "diúltach"},
  {question: "____ ___________ an duine cróga suas ró-éasca? (diúltach)", answer: "ní thugann", hint1: ""},
  {question: "An é ____ ___________ tú aon aird ar na rudaí atá timpeall ort? (diúltach) ", answer: "nach dtugann", hint1: "diúltach"},
  {question: "_____ ___________ suas ar deireadh ar an duine nach bhfuil sásta cabhrú leis féin. (briathar saor, dearfach)", answer: "tugtar", hint1: "dearfach, briathar saor"},
  {question: "Deirtear ___________ drochíde do theifigh ar fud an domhain. (briathar saor, dearfach) ", answer: "go dtugtar", hint1: "dearfach, Briathar saor"},
  {question: "___ ___________ tú síob isteach dóibh go minic? (dearfach)", answer: "an dtugann", hint1: "dearfach"},
  {question: "___ ___________ sé an dara rogha dom go minic ach é a chaitheamh amach. (diúltach)", answer: "ní thugann", hint1: "diúltach"},
  {question: "Is minic _____ ___________ aon aitheantas don duine ciúin díograiseach. (briathar saor, diúltach) ", answer: "nach dtugtar", hint1: "diúltach, briathar saor"},
];

var tabhairAFQuestions = [
  {question: "___________ mé lámh chúnta duit níos déanaí. ", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ mé m’fhocal nach ndéanfaidh mé é sin arís.", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ mé seans amháin eile duit mar sin.", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ aghaidh ar Shligeach an chéad rud ar maidin. (sinn) ", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "___________ sé droim láimhe duine má théann tú chuige le scéal mar sin. ", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ ar ais duit é nuair a bheimid críochnaithe leis. (sinn)", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "___________ faoin gceist sin a luaithe is a bhíonn an ceann seo críochnaithe againn. (sinn)", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "___________ mé aire mhaith do do theach a fhad a bhíonn tú imithe.", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ an chéad duais don gceann seo. (sinn)", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "Níl a fhios agam ach ___________ mé buille faoi thuairim. ", answer: "tabharfaidh", hint1: "dearfach"},
];

var tabhairAFNi = [
  {question: " ____ ___________ mé aon rud dó ar iasacht go brách arís.", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ tú faoi deara é muna mbíonn tú an-chúramach.", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ aon fhreagra orthu sin go fóill. (sinn) ", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "diúltach"},
  {question: "____ ___________ siad faoin obair muna n-íoctar i dtosach iad.  ", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ mé le rá é nach ndearna mé beart de réir mo bhriathair. ", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ isteach dóibh sin más féidir linn. (sinn) ", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "diúltach"},
  {question: "____ ___________ pingin rua dó go dtí go mbíonn an obair críochnaithe i gceart aige. (sinn)", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ sé é sin ar ais duit go brách. ", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ mé aon rud eile dó le déanamh go fóill. ", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ a oiread is seans amháin eile dóibh. (sinn)", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "diúltach"},
];

var tabhairAFBriathorSaor = [
  {question: "___________ ach seans amháile eile dó. (diúltach)", answer: "ní thabharfar", hint1: "diúltach"},
  {question: "____ ___________ aitheantas oifigiúil dó in am is i dtráth. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "___________ na duaiseanna amach tar éis lóin. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "_____ ___________ duit ach a laghad agus is féidir. (diúltach)", answer: "ní thabharfar", hint1: "diúltach"},
  {question: "___________ gach cúnamh don té atá foighneach. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "___________ tús áite do dhaoine a bhfuil ceol acu. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "____ ___________ an chéad duais don gcapall glas, ceapaim. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "Cailleadh mo mhálaí ag an aerfort ach ___________ abhaile iad níos déanaí. (dearfach)", answer: "tabharfar", hint1: "dearfach"},
  {question: "____ ___________ bricfeasta duit má fhanann tú sa leaba ródhéanach. (diúltach)", answer: "ní thabharfar", hint1: "diúltach"},
  {question: "_____ ___________ cead duit dul amach san oíche nuair a bheidh tú san arm. (diúltach)", answer: "ní thabharfar", hint1: "diúltach"},
];

var tabhairAFCeisteach = [
  {question: "___ ___________ tú faoi chéim mháistreachta ina dhiaidh seo? (dearfach)", answer: "an dtabharfaidh", hint1: "dearfach"},
  {question: "____ ___________ roinnt leabhar linn ar laethanta saoire? (sinn, dearfach)", answer: "an dtabharfaimid", answer2: "an dtabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tú suas ar an gceist sin go brách? (dearfach)", answer: "an dtabharfaidh", hint1: "dearfach"},
  {question: "____ ___________ do mháthair aire don madra duit? (diúltach)", answer: "nach dtabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ amach duit muna mbíonn an obair déanta agat? (briathar saor, dearfach).", answer: "an dtabharfar", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ an corn sin don luthchleasaí is fearr? (briathar saor, diúltach).", answer: "nach dtabharfar", hint1: "diúltach"},
  {question: "____ ___________ faoin obair an chéad rud maidin amárach? (sinn, dearfach).", answer: "an dtabharfaimid", answer2: "an dtabharfaidh muid", hint1: "dearfach"},
  {question: "____ ___________ isteach iad i gcomhair chupán tae? (sinn, dearfach)", answer: "an dtabharfaimid", answer2: "an dtabharfaidh muid", hint1: "dearfach"},
  {question: "____ ___________ tú aire mhaith do mo mhadra a fhad is atáim imithe? (diúltach).", answer: "nach dtabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ tú mo mhála ar ais leat nuair a bheidh tú ag teacht abhaile? (diúltach).", answer: "nach dtabharfaidh", hint1: "diúltach"},
];

var tabhairAFSpleach = [
  {question: "Deir sí ____ ___________ sé aon aird ar na daoine sin níos mó. (diúltach)", answer: "nach dtabharfaidh", hint1: "diúltach"},
  {question: "Creidim ____ ___________ aitheantas speisialta di ag an searmanas. (briathar saor, dearfach)", answer: "go dtabharfar", hint1: "dearfach, briathar saor"},
  {question: "Deir sé ____ ___________ sé an dara rogha dóibh. (diúltach) ", answer: "nach dtabharfaidh", hint1: "diúltach"},
  {question: "Tá gach éinne á rá ____ ___________ bata is bóthar dó ag deireadh na seachtaine. (briathar saor, dearfach)", answer: "go dtabharfar", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith ____ ___________ aon aird orm. (briathar saor, diúltach)", answer: "nach dtabharfar", hint1: "diúltach"},
  {question: "Bíonn sé ag rá  ____ ___________sé a chara abhaile in éineacht leis. (dearfach) ", answer: "go dtabharfaidh", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________aon éisteacht cheart dóibh. (briathar saor, dearfach)", answer: "go dtabharfar", hint1: "dearfach"},
  {question: "Tá mé cinnte ____ ___________ sí cathaoireacha breise isteach ón ngaráiste. (dearfach)", answer: "go dtabharfaidh", hint1: "dearfach"},
  {question: "Tá súil ag an bpobal ____ ___________ deontas breise dóibh chun an obair a chríochnú. (briathar saor, dearfach)", answer: "go dtabharfar", hint1: "dearfach"},
  {question: "Deir siad ____ ___________an dara rogha dúinn ach géilleadh. (briathar saor, diúltach)", answer: "nach dtabharfar", hint1: "diúltach"},
];

var tabhairAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tabhairAFExtraQuestions = [
  {question: "___________ mé iasacht duit más maith leat. (dearfach)", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "___________ seans amháin eile dóibh. (sinn, dearfach)", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ isteach ná ní ghéillfimid orlach dóibh. (sinn, diúltach)", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ siadsan aon rud amach saor in aisce. (diúltach)", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "____ ___________ duais speisialta dóibh ag deireadh na bliana. (briathar saor, dearfach)", answer: "tabharfar", hint1: "dearfach, briathar saor"},
  {question: "Tá súil agam ______ ___________ siad drochíde don bpáiste bocht. (diúltach) ", answer: "nach dtabharfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú an leabhar ar ais dom a luaithe is a bhíonn tú críochnaithe leis? (diúltach)", answer: "nach dtabharfaidh", hint1: "dearfach"},
  {question: "Deir sí____ ___________ sí isteach agus go leanfaidh sí uirthi. (diúltach) ", answer: "nach dtabharfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú rud éigin deas abhaile leat don dinnéar? (diúltach)", answer: "nach dtabharfaidh", hint1: "dearfach"},
  {question: "____ ___________ suas air go fóill. (sinn, diúltach)", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "dearfach"},
];

var tabhairMCQuestions = [
  {question: "___________ aon rud ach an leabhar sin a fháil ar ais. (mé) ", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach, mé"},
  {question: "___________ duit é dá mbeadh sé agam. (mé)", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach, mé"},
  {question: "___________ timpeall cead Euro ar cheann mar sin. (mé) ", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach"},
  {question: "___________ sí an carr duit ar iasacht murach an t-árachas. ", answer: "thabharfadh", hint1: "dearfach"},
  {question: "___________ caoga Euro air sin sna siopaí móra. (tú) ", answer: "thabharfá", answer2: "thabharfadh tú", hint1: "dearfach, tú"},
  {question: " ___________ aon rud dóibh dá dtabharfaidís an madra ar ais dúinn. (sinn) ", answer: "thabharfaimis", answer2: "thabharfadh muid", hint1: "dearfach, sinn"},
  {question: "___________ aire mhaith dó dá mbeadh sé againn. (sinn) ", answer: "thabharfaimis", answer2: "thabharfadh muid", hint1: "dearfach"},
  {question: "___________ faoi dá gceapfainn go raibh aon seans agam. (mé) ", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach"},
  {question: "___________ airgead maith dóibh dá mbeidís sásta an obair a dhéanamh i gceart. (sinn)", answer: "thabharfaimis", answer2: "thabharfadh muid", hint1: "dearfach"},
  {question: "___________ tinneas cinn duit dá mbeifeá ag éisteacht leo. (siad) ", answer: "thabharfaidís", answer2: "thabharfadh siad", hint1: "dearfach, siad"},
];

var tabhairMCNi = [
  {question: "____ ___________ aon rud le fios dó sin. (mé) ", answer: "ní thabharfainn", answer2: "ní thabharfadh mé", hint1: "diúltach, mé"},
  {question: "____ ___________ aon aird orthu. Caint san aer í sin. (mé)", answer: "ní thabharfainn", answer2: "ní thabharfadh mé", hint1: "diúltach, mé"},
  {question: "____ ___________ de shásamh dóibh é. (mé) ", answer: "ní thabharfainn", answer2: "ní thabharfadh mé", hint1: "diúltach"},
  {question: "____ ___________ Máire aon fhreagra ar mo cheist. ", answer: "ní thabharfadh", hint1: "diúltach"},
  {question: "____ ___________ aon aird orainn cé go rabhamar ag impí orthu gan é a dhéanamh. (siad)  ", answer: "ní thabharfaidís", answer2: "ní thabharfadh siad", hint1: "diúltach"},
  {question: "____ ___________ sé aon eolas breise seachas an méid a bhí sa ráiteas oifigiúil.", answer: "ní thabharfadh", hint1: "diúltach"},
  {question: "____ ___________ Mairéad leasainm mar sin ar éinne. ", answer: "ní thabharfadh", hint1: "diúltach"},
  {question: "____ ___________ obair dóibh sin mar gheall ar an droch-cháil atá orthu. (sinn) ", answer: "ní thabharfaims", answer2: "ní thabharfadh muid", hint1: "diúltach"},
  {question: "____ ___________ aon lacáiste dúinn ar an bpraghas sin. (siad)", answer: "ní thabharfaidís", answer2: "ní thabharfadh siad", hint1: "diúltach"},
  {question: "____ ___________ le rá é gur theip orthu ina gcuid iarrachtaí. (siad) ", answer: "ní thabharfaidís", answer2: "ní thabharfadh siad", hint1: "diúltach, siad"},
];

var tabhairMCBriatharSaor = [
  {question: "___________ bata is bóthar dóibh dá mbeidis trioblóideach mar sin. (dearfach) ", answer: "thabharfaí", hint1: "dearfach"},
  {question: "____ ___________ aitheantas d’obair ar an gcaighdeán sin dá mbeadh na gnáthmholtóirí ann i mbliana. (dearfach) ", answer: "thabharfaí", hint1: "dearfach"},
  {question: "___________ cead duit dul isteach in áit atá chomh dainséarach sin. (diúltach) ", answer: "ní thabharfaí", hint1: "diúltach"},
  {question: "____ ___________ aon aird air murach go raibh cuma scanraithe air. (diúltach)", answer: "ní thabharfaí", hint1: "diúltach"},
  {question: "____ ___________ cead isteach sa chlub di gan Gaeilge a bheith aici. (diúltach) ", answer: "ní thabharfaí", hint1: "diúltach"},
  {question: "____ ___________ an capall go dtí an ráschúrsa sin murach go mbeadh seans maith aige. (diúltach) ", answer: "ní thabharfaí", hint1: "diúltach"},
  {question: "___________ gach cabhair dóibh dá ndéanfaidís aon iarracht iad féin. (dearfach) ", answer: "thabharfaí", hint1: "dearfach"},
  {question: "___________ na báid isteach dá mbeadh aon bhaol stoirme ann. (dearfach) ", answer: "thabharfaí", hint1: "dearfach"},
  {question: "____ ___________ aon aird ar na botúin bheaga sin de ghnáth. (diúltach) ", answer: "ní thabharfaí", hint1: "diúltach"},
  {question: "___________ aon aird uirthi murach go raibh sí chomh mór sin trína chéile. (diúltach)", answer: "ní thabharfaí", hint1: "diúltach"},
];

var tabhairMCCeisteach = [
  {question: "___ ___________ dó é dá mbeadh sé á lorg? (tú, dearfach)", answer: "an dtabharfá", answer2: "an dtabharfadh tú", hint1: "dearfach, tú"},
  {question: "____ ___________ sé cabhair dúinn dá mbemis á lorg? (dearfach)", answer: "an dtabharfadh", hint1: "dearfach"},
  {question: "____ ___________ cead dúinn dá lorgóimis é go béasach? (briathar saor, dearfach)", answer: "an dtabharfaí", hint1: "dearfach, briathar saor"},
  {question: "____ ___________ sé isteach dá gcuirfí ina luí air go raibh sé mícheart? (dearfach).", answer: "an dtabharfadh", hint1: "dearfach"},
  {question: "____ ___________  sí misneach duit dá mbeifeá in isle brí? (diúltach).", answer: "nach dtabharfadh", hint1: "diúltach"},
  {question: "____ ___________  duit é dá mbeadh sé acu? (siad, diúltach)", answer: "an dtabharfaidis", answer2: "an dtabharfadh siad", hint1: "diúltach, siad"},
  {question: "____ ___________ faoi deara é dá mbeadh sé fágtha ar an mbord? (tú, diúltach).", answer: "an dtabharfá", answer2: "an dtabharfadh tú", hint1: "diúltach"},
  {question: "____ ___________ isteach ar an oileán iad dá mbeadh aon spéis acu dul ann? (briathar saor, diúltach)", answer: "nach dtabharfaí", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ sé uaidh é dá rachaimis chuige? (dearfach).", answer: "an dtabharfadh", hint1: "dearfach"},
  {question: "____ ___________ éisteacht dóibh dá ndéanfaidís a gcás i gceart? (briathar saor, dearfach).", answer: "an dtabharfaí", hint1: "dearfach"},
];

var tabhairMCSpleach = [
  {question: "Gheall siad ____ ___________ dúinn é. (siad, dearfach) ", answer: "go dtabharfaidís", answer2: "go dtabharfadh siad", hint1: "dearfach"},
  {question: "Tugadh le fios  ____ ___________ deontas dúinn chun an obair a chríochnú. (briathar saor, diúltach)", answer: "nach dtabharfaí", hint1: "diúltach"},
  {question: "Bhí a fhios agam ____ ___________ sí dom é. (diúltach)  ", answer: "nach dtabharfadh", hint1: "diúltach"},
  {question: "Dúirt siad ____ ___________ aire mhaith dó. (siad, dearfach) ", answer: "go dtabharfaidís", answer2: "go dtabharfadh siad", hint1: "dearfach"},
  {question: "Bhí a fhios agam ____ ___________seans eile dó. (briathar saor, dearfach)", answer: "go dtabharfaí", hint1: "dearfach, briathar saor"},
  {question: "Mhaígh siad ____ ___________ suas ar ór ná ar airgead. (siad, diúltach)", answer: "nach dtabharfaidís", answer2: "nach dtabharfadh siad", hint1: "diúltach"},
  {question: "Bhí sé soiléir ____ ___________ mo dhuine isteach luath nó mall. (dearfach) ", answer: "go dtabharfadh", hint1: "dearfach"},
  {question: "Dúramar ____ ___________ ceann eile dóibh ina dhiaidh sin. (sinn, dearfach)", answer: "go dtabharfaimis", answer2: "go dtabharfadh muid", hint1: "dearfach"},
  {question: "Tá seans maith ann ___ ___________ duit é dá rachfá á lorg. (siad, dearfach)", answer: "go dtabharfaidís", answer2: "go dtabharfadh siad", hint1: "dearfach"},
  {question: "Ní raibh aon seans ann ___ ___________sé isteach ar an gceann sin. (dearfach)", answer: "go dtabharfadh", hint1: "dearfach"},
];

var tabhairMCExtraQuestions = [
  {question: "___________ aon rud ach an leabhar sin a fháil ar ais. (mé, dearfach) ", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach, mé"},
  {question: "____ ___________ faoi dá mbeadh aon duine eile á dhéanamh. (mé, dearfach) ", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "dearfach, mé"},
  {question: "____ ___________ sé aon rud duit dá mbeadh sé aige.  (dearfach) ", answer: "thabharfadh", hint1: "dearfach"},
  {question: "____ ___________ sí an seod sin uaithi ar ór na cruinne. (diúltach) ", answer: "ní thabharfadh", hint1: "diúltach"},
  {question: "____ ___________ar ais dom é. (siad, diúltach) ", answer: "ní thabharfaidís", answer2: "ní thabharfadh siad", hint1: "diúltach"},
  {question: "Dúirt sé ____ ___________ sé dom é ach níor thug. (dearfach)", answer: "go dtabharfadh", hint1: "dearfach"},
  {question: "Cheapas ___ ___________ sé sin ábhar misnigh dó ach bhí dul amú orm. (dearfach) ", answer: "go dtabharfadh", hint1: "dearfach"},
  {question: "____ ___________ sí seans dom é a dhéanamh. (diúltach)", answer: "ní thabharfadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam ___ ___________ freagra díreach orainn. (siad, diúltach)", answer: "nach dtabharfaidís", answer2: "nach dtabharfadh siad", hint1: "dearfach"},
  {question: "___ ___________faoi dá mbeinn féin sásta cabhrú leat? (tú, dearfach)", answer: "an dtabharfá", answer2: "an dtabharfadh siad", hint1: "dearfach, tú"},
];

var tabhairQuiz = [
  {question: "___________ gach cabhair agus cúnamh dó ach bhí sé fuar agam. (mé, aimsir chaite, dearfach)", answer: "thugas", answer2: "thug mé", hint1: "mé, aimsir chaite, dearfach"},
  {question: "_____ __________ bia agus deoch dóibh sula ndeachaigh siad abhaile. (sinn, aimsir chaite, dearfach)", answer: "thugamar", answer2: "thug muid", hint1: "sinn, aimsir chaite, dearfach"},
  {question: "___________ gach rud dóibh ach níor spéis leo an scolaíocht. (briathar saor, aimsir chaite, dearfach)", answer: "tugadh", hint1: "briathar saor, aimsir chaite, dearfach"},
  {question: "___  ___________ aon rud le n-ithe dúinn ó mhaidin. (briathar saor, aimsir chaite, diúltach) ", answer: "níor thugadh", hint1: "briathar saor, aimsir chaite, diúltach"},
  {question: "____ ___________ sí an leabhar ar ais dom go fóill. (aimsir chaite, diúltach)", answer: "níor thug", hint1: "aimsir chaite, diúltach"},
  {question: "______ ___________ an-aird ar na rudaí beaga sin. (mé, aimsir láithreach, dearfach) ", answer: "ní thugaim", answer2: "ní thugann mé", hint1: "mé, aimsir laithreach, dearfach"},
  {question: "___________ sí bronntanas deas dom gach Nollaig. (dearfach)", answer: "tugann", hint1: "dearfach"},
  {question: "____ ___________íde na much do na daoine a bhíonn ag obair san áit sin. (briathar saor, aimsir láithreach, dearfach)", answer: "tugtar", hint1: "briathar saor, aimsir laithreach, dearfach"},
  {question: "____ ___________ aire mhaith don madra gach lá. (mé, dearfach)", answer: "tugaim", hint1: "mé, dearfach"},
  {question: "____ ___________ lón linn gach maidin. (sinn, dearfach)", answer: "tugaimid", answer2: "tugann muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ mé dóibh é go dtí go mbeidh mé críochnaithe leis. (diúltach) ", answer: "ní thabharfaidh", hint1: "diúltach"},
  {question: "___ ___________ aghaidh ar Mhaigh Eo ag tús na seachtaine seo chugainn. (sinn, dearfach) ", answer: "tabharfaimid", answer2: "tabharfaidh muid", hint1: "sinn, dearfach"},
  {question: "____ ___________ aon seans eile duit muna dtógann tú anois é. (briathar saor, aimsir fháistineach, diúltach)", answer: "ní thabharfar", hint1: "briathar saor, aimsir fháistineach, diúltach"},
  {question: "______ ___________ aon fhreagra orthu go dtí go mbeimid cinnte. (sinn, diúltach) ", answer: "ní thabharfaimid", answer2: "ní thabharfaidh muid", hint1: "sinn, diúltach"},
  {question: "Buail ar an doras agus ___________ Síle an rothar duit. (dearfach)", answer: "tabharfaidh", hint1: "dearfach"},
  {question: "____ ___________duit é agus fáilte dá mbeadh sé agam. (mé, dearfach)", answer: "thabharfainn", answer2: "thabharfadh mé", hint1: "mé, dearfach"},
  {question: "____ ___________ Seán an greim as a bhéal duit. (modh coinníollach, dearfach)", answer: "thabharfadh", hint1: "modh coinníollach, dearfach"},
  {question: "Dúirt sé____ ___________ sé suas an t-ól ach ní mar sin a tharla. (dearfach)", answer: "go dtabharfadh", hint1: "dearfach"},
  {question: "Gheall siad ____ ___________an leabhar d’aon duine eile. (siad, modh coinníollach, diúltach) ", answer: "nach dtabharfaidís", answer2: "nach dtabharfadh siad", hint1: "siad, modh coinníollach, diúltach"},
  {question: "___________ aon rud ar iasach dóibh siúd. (tú, modh coinníollach, diúltach)", answer: "thabharfá", answer2: "thabharfadh tú", hint1: "tú, modh coinníollach, diúltach"},
];

//TAR
var tarACQuestions = [
  {question: "___________ sé isteach. Dúirt sé a chuid agus d’imigh sé.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ an bháisteach roimh dheireadh an chluiche.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ biseach uirthi laistigh de sheachtain san ospidéal.", answer: "tháinig", hint1: "dearfach"},
  {question: "D’imigh sin is___________ seo. ", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ olc orthu nuair a dúradh é sin.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ tuirse ar an bpáiste agus thit sí ina codladh.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ abhaile go luath an tráthnóna áirithe sin. (sinn)", answer: "thángamar", answer2: "tháinig muid", hint1: "dearfach"},
  {question: "___________ siad chomh fada leis an líne agus stop siad.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ an dubh ar na prátaí in Éirinn in 1845.", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ feabhas mór uirthi le bliain anuas.", answer: "tháinig", hint1: "dearfach"},
];

var tarACNi = [
  {question: "____ ___________ éinne amach roimh dheireadh an chluiche.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ aon athrú ar an scéal ó shin i leith.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ ar fheagra na ceist sin fós. (sinn)", answer: "níor thángamar", hint1: "diúltach"},
  {question: "____ ___________ aon cheathanna inniu sa taobh seo tíre.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ mé abhaile an oíche sin.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ na Gardaí ar an té a bhí freagrach as fós.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ deireadh leis an aighneas a bhí eatarthu fós.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ éinne amach inár gcoinne.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ duine ná deoraí amach le fáiltiú rompu abhaile.", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____  ___________ abhaile go dtí go rabih sé anonn go maith san oíche. (sinn)", answer: "níor thángamar", hint1: "diúltach, sinn"},
];

var tarACBriathorSaor = [
  {question: "___________ ar chorp fhir i dteach tréigthe aréir. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "Lorgaíodh é an lá ar fad agus ___________ air déanach tráthnóna. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "___________ ar an airgead a goideadh i gcúinne na páirce. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "___________ ar dhéagóir a bhí ar iarraidh le seachtain inniu. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "Cuardaíodh an áit ar fad ach ____ ___________ ar aon rud. (diúltach)", answer: "níor thángthas", hint1: "diúltach"},
  {question: "___________ ar an mbád a chuaigh go tóin poill aréir. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "Tá an thaighneas ag dul ar aghaidh agus ____ ___________ ar aon réiteach. (diúltach)", answer: "níor thángthas", hint1: "diúltach"},
  {question: "Chuaigh na cainteanna ar aghaidh ar feadh seachtaine ach ___________ ar chomhaontú ar deireadh. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "___________ ar chnámha i bpoll portaigh gar don teach. (dearfach)", answer: "thángthas", hint1: "dearfach"},
  {question: "____ ___________ ar réiteach na faidhbe sin go fóill.", answer: "níor thángthas", hint1: "diúltach"},
];

var tarACCeisteach = [
  {question: "____ ___________ na cailíní abhaile fós? (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did the girls come home yet?"},
  {question: "____ ___________ tú ar an bpeann a chaill tú fós? (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did you find the pen you lost yet?"},
  {question: "____ ___________ an t-otharcharr go han-tapaidh? (diúltach)", answer: "nár tháinig", hint1: "diúltach", translation: "Did the ambulance not come very quickly?"},
  {question: "____ ___________ an bháisteach san áit ina raibh sibhse? (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did the rain come where you were?"},
  {question: "____ ___________ athrú ar bith ar an áit ón uair a d’imigh mise. (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did the place change at all since I left?"},
  {question: "____ ___________ Liam abhaile fós? (diúltach)", answer: "ar tháinig", hint1: "diúltach", translation: "Did Liam not go home yet?"},
  {question: "____ ___________ siad ar ais óna laethanta saoire go fóill? (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did they come back from holidays yet?"},
  {question: "____ ___________ ar na coirp a bádh sa bhfarraige fós? (briathar saor, dearfach)", answer: "ar thángthas", hint1: "dearfach", translation: "Have the bodies that were lost at sea been found yet?"},
  {question: "____ ___________ sí abhaile riamh ón uair a d’fhág sí? (dearfach)", answer: "ar tháinig", hint1: "dearfach", translation: "Did she ever come back since the time she left?"},
  {question: "Is cuma ____ ___________ amach as slán ag deireadh an lae? (sinn, dearfadh)", answer: "nár thángamar", hint1: "dearfach", translation: "It doesn't matter that we came safe at the end of the day."},
];

var tarACSpleach = [
  {question: "Dúirt do dheartháir liom ____ ___________ tú abhaile don deireadh seachtaine. (dearfach)", answer: "gur tháinig", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ feabhas ar bith ar an scéal ó shin. (dearfach)", answer: "gur tháinig", hint1: "dearfach"},
  {question: "Táim beagnach cinnte ____ ___________ aon duine slán ón timpiste? (diúltach)", answer: "nár tháinig", hint1: "diúltach"},
  {question: "Ar chuala tú ____ ___________ siad ar ais arís tar éis seachtaine? (dearfach)", answer: "gur tháinig", hint1: "dearfach"},
  {question: "____ ___________ éinne in éineacht leat? (diúltach)", answer: "nár tháinig", hint1: "diúltach"},
  {question: "Chuala mé ____ ___________ar an leabhar sin a bhí ar iarraidh ón leabharlann fós. (briathar saor, diúltach)", answer: "nár thángthas", hint1: "diúltach"},
  {question: "Chuala mé ____ ___________ slua mór cairde isteach sa chúirt leo. (dearfach)", answer: "gur tháinig", hint1: "dearfach"},
  {question: "Dúirt sí ____ ___________ ach slua an-bheag go dtí an ceolchoirm? (diúltach)", answer: "nár tháinig", hint1: "diúltach"},
  {question: "Ba léir ____ ___________an ghomh air nuair a chonaic sé iad ag déanamh air? (dearfach)", answer: "gur tháinig", hint1: "dearfach"},
  {question: "An bhfuil tú cinnte ____ ___________aon duine isteach tríd an doras sin? (diúltach)", answer: "nár tháinig", hint1: "diúltach"},
];

var tarACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tarACExtraQuestions = [
  {question: "___________ sí isteach déanach agus chuaigh sí suas go barr an ranga.", answer: "tháinig", hint1: "dearfach"},
  {question: "____ ___________ aon athrú air le dhá lá anois. (diúltach)", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ aon bhriseadh ar an aimsir an tseachtain ar fad. (diúltach) ", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ aon duien slán ón timpiste traenach. (diúltach) ", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ ar eochracha a cailleadh ar an trá inniu? (briathar saor, dearfach)", answer: "ar thángthas", hint1: "dearfach"},
  {question: "____ ___________ do dheirfiúr abhaile i mbliana fós? (dearfach)", answer: "ar tháinig", hint1: "dearfach"},
  {question: "____ ___________ ar an madra a d’imigh ar strae fós? (briathar saor, diúltach) ", answer: "ar thángthas", hint1: "diúltach, briathar saor"},
  {question: "____ ___________ ach slua beag go dtí an cluiche sin. (diúltach)", answer: "níor tháinig", hint1: "diúltach"},
  {question: "___________ sé slán ar éigean. (dearfach)", answer: "tháinig", hint1: "dearfach"},
  {question: "___________ dath an bháis uirthi nuair a chuala sí an scéal. (dearfach)", answer: "tháinig", hint1: "dearfach"},
];

var tarALQuestions = [
  {question: "___________ Séamas ar scoil ar a rothar.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ na páistí ar scoil gach maidin sa bhus scoile. ", answer: "tagann", hint1: "dearfach"},
  {question: "___________ na fáinleoga ar ais go dtí an áit chéanna gach bliain.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ isteach luath gach maidin chun an obair a chríochnú. (sinn)", answer: "tagaimid", hint1: "dearfach, sinn"},
  {question: "___________ go maith os cionn milliún cuairteoirí go dtí an tír seo gach bliain.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ siad isteach de réir a chéile.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ an aois ar gach duine ar deireadh thiar thall.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ na fianna anuas ó na sléibhte sa gheimhreadh.", answer: "tagann", hint1: "dearfach"},
  {question: "___________ athrú ar an aimsir sa bhfómhar de ghnáth. ", answer: "tagann", hint1: "dearfach"},
  {question: "___________ na mílte daoine go Fleadh Cheoil na hÉireann gach bliain.", answer: "tagann", hint1: "dearfach"},
  {question: "Dá fhad é an lá ___________ an oíche.", answer: "tagann", hint1: "dearfach"},
];

var tarALNi = [
  {question: "____ ___________ Deirdre isteach chugainn ach anois is arís.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ sí isteach in am riamh.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ na héin bheaga isteach sa ghairdín níos mó. ", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ an bus anuas an bóther seo níos mó.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ aon athrú ar an scéal ó bhliain go bliain. ", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ isteach ach daoine a bhfuil fíor-spéis acu san ealaín.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ siad isteach anseo rómhinic.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ an traein sin go dtí cearthrú chun a seacht.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ aon sneachta go dtí tar éis na Nollag de ghnáth.", answer: "ní thagann", hint1: "diúltach"},
  {question: "____ ___________ ráflaí amach ón Rialtas ach anois is arís.", answer: "ní thagann", hint1: "diúltach"},
];

var tarALCeisteach = [
  {question: "___________ an fharraige isteach chomh fada seo? (dearfach).", answer: "an dtagann", hint1: "dearfach"},
  {question: "____ ___________ tusa isteach ar do rothar go rialta? (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "_____ ___________ do dheartháir abhaile ó na Stáit Aontaithe go rialta? (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "_____ ___________dath dearg ar na duilleoga sin sa bhfómhar? (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "_____ ___________ tú go ceolchoirmeacha anseo sa cheoláras go rialta? (dearfach).", answer: "an dtagann", hint1: "dearfach"},
  {question: "_____ ___________ mórán cuairteoirí go dtí an taobh seo tíre? (dearfach).", answer: "an dtagann", hint1: "dearfach"},
  {question: "____ ___________ sí sa tríú háit go rialta? (diúltach).", answer: "nach dtagann", hint1: "diúltach"},
  {question: "Ceist mhór! ____ ___________ ciall le haois? (dearfach)", answer: "an dtagann", hint1: "dearfach"},
  {question: "____ ___________ mórán cuairteoirí isteach go Coláiste na Tríonóide gach bliain? (dearfach).", answer: "an dtagann", hint1: "dearfach"},
  {question: "____ ___________ go leor daoine ón gCraobh sin de Chomhaltas go Fleadh Cheoil na hÉireann gach bliain? (diúltach).", answer: "nach dtagann", hint1: "diúltach"},
];

var tarALSpleach = [
  {question: "Ní dóigh liom ____ ___________ siad go Páirc an Chrócaigh go rómhinic. (dearfach)", answer: "go dtagann", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ náire orthu sin riamh.", answer: "go dtagann", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ an bus sin timpeall anseo ach dhá lá sa tseachtain. (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "An bhfuil a fhios agat ____ ___________ laigeacht orm aon uair a chloisim faoi rudaí mar sin? (dearfach)", answer: "go dtagann", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ an traein sin isteach déanach go minic. (dearfach)", answer: "go dtagann", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________ aon bhus aníos an bóther sin níos mó. (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "Deirtear ____ ___________ ciall roimh aois ach níl a fhios agam faoi sin. (dearfach)", answer: "go dtagann", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________ sí ar ais go hÉirinn níos mó. (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
  {question: "An bhfuil sé fíor ____ ___________an bhean sídhe nuair atá duine ag fáil bháis? (dearfach)", answer: "go dtagann", hint1: "dearfach"},
  {question: "Tá a fhios go maith agam ____ ___________seisean isteach in am riamh? (diúltach)", answer: "nach dtagann", hint1: "diúltach"},
];

var tarALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tarALExtraQuestions = [
  {question: "___________fás ar gach neach beo de réir a nádúir féin. (dearfach) ", answer: "tagann", hint1: "dearfach"},
  {question: "Dá fhad é an lá ___________ an oíche. (dearfach).", answer: "tagann", hint1: "dearfach"},
  {question: "___ ___________ tú go Baile Átha Cliath go minic? (dearfach) ", answer: "an dtagann", hint1: "dearfach"},
  {question: "____ ___________ aimsir mar seo gach bliain? (dearfach)", answer: "an dtagann", hint1: "dearfach"},
  {question: "An é ____ ___________ sioc trom sa Gheimhreadh níos mó. (diúltach) ", answer: "nach dtagann", hint1: "diúltach"},
  {question: "_____ ___________ sí isteach anseo go rómhinic. (diúltach)", answer: "ní thagann", hint1: "diúltach"},
  {question: "Tá mé beagnach cinnte _____ ___________ an bus sin isteach ar a ceathrú tar éis a hocht. (dearfach) ", answer: "go dtagann", hint1: "dearfach"},
  {question: "___________ easpa misnigh orm nuair a chloisim drochscéalta mar sin. (dearfach)", answer: "tagann", hint1: "dearfach"},
  {question: "___________ fadhbanna chun cinn ar bhonn laethúil ach bímid ábalta deileáil leo. (diúltach)", answer: "tagann", hint1: "diúltach"},
  {question: "___________ sé ar bhoinn airgid anois is arís agus é ar an trá. (dearfach) ", answer: "tagann", hint1: "dearfach"},
];

var tarAFQuestions = [
  {question: "___________ sí isteach nuair a bheidh sí críochnaithe.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ siad abhaile arís ag deireadh na míosa.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ feabhas ort le cleachtadh.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ an samhradh is fásfaidh an féar. ", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ abhaile go luath arís anocht. (sinn)", answer: "tiocfaimid", hint1: "dearfach, sinn"},
  {question: "___________ athrú ar an aimsir ag deiredh na seachtaine seo.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ lá na cinniúna luath nó mall.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ do lá. Bí foighneach.", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ mé in éineacht leat má fhanann tú cúpla nóiméad. ", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___________ go dtí an cheist sin ar ball beag. (sinn)", answer: "tiocfaimid", hint1: "dearfach, sinn"},
];

var tarAFNi = [
  {question: "____ ___________ aon athrú ar an aimsir go ceann cúpla lá eile.", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ sí ar ais go dtí an tseachtain seo chugainn.", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ ciall chuige sin go brách. ", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ aon bháisteach inniu. ", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ aon athrú ar an bplean atá leagtha amach don turas. ", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ ar ais anseo go brách na breithe. (sinn)", answer: "ní thiocfaimid", hint1: "diúltach"},
  {question: "____ ___________ an madra isteach má bhíonn eagla air.", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ feabhas ort muna gcloíonn tú leis an mbia ceart. ", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ air gan an áit a chuardach go mion. (sinn)", answer: "ní thiocfaimid", hint1: "diúltach"},
  {question: "____ ___________ aon toradh ar na hiarrachtaí sin atá ar bun acu.", answer: "ní thiocfaidh", hint1: "diúltach"},
];

var tarAFBriathorSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tarAFCeisteach = [
  {question: "___ ___________ tú amach le haghaidh lóin níos déanaí? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "____ ___________ do chara in éineacht linn? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "____ ___________ abhaile díreach tar éis an cluiche? (sinn, diúltach)", answer: "nach dtiocfaimid", answer2: "nach dtiocfaimid", hint1: "sinn"},
  {question: "____ ___________ siad ar ais go brách arís, dar leat? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú go dtí an ceolchoirm linn? (diúltach).", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ sibh linn go dtí an chóisir níos déanaí? (diúltach).", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ an freagra céanna suas arís má leanaimid mar seo? (diúltach).", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ sé sin ar réiteach na faidhbe go brách? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "Nach cuma? ____ ___________ duine éigin eile isteach ina áit siúd? (diúltach).", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ aon rud ón bhfiosrúchán atá ar siúl faoi láthair, dar leat? (dearfach).", answer: "an dtiocfaidh", hint1: "dearfach"},
];

var tarAFSpleach = [
  {question: "Níl an chuma air ____ ___________ sé ar ais anocht. (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "An dóigh leat ____ ___________ siad ar ais go brách? (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Tá mé nach mór cinnte ____ ___________ siad ar ais níos déanaí. (dearfach) ", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Deirtear ar réamhfháisnéis na haimsire ____ ___________ báisteach throm anocht. (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Is cosúil ____ ___________ aon athrú ar an scéal go ceann tamaill eile. (diúltach)", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "Deir sí  ____ ___________ sí abhaile arís go dtí go mbeidh a cúrsa críochnaithe aici. (diúltach) ", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "Is cosúil  ____ ___________  na torthaí amach go dtí deireach na míosa seo. (diúltach)", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "Tá mé cinnte ____ ___________ sí ar ais sar i bhfad? (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________siad air. Tá sé rófhada caillte. (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Níl sé soiléir ____ ___________aon rud fiúntach as an taighde sin. (dearfach)", answer: "go dtiocfaidh", hint1: "dearfach"},
];

var tarAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tarAFExtraQuestions = [
  {question: "___________ mé ar ais níos déanaí. (dearfach)", answer: "tiocfaidh", hint1: "dearfach"},
  {question: "___ ___________ aon rud as an gcás sin. (diúltach)", answer: "ní thiocfaidh", hint1: "diúltach"},
  {question: "Tá súil agam ____ ___________ tú ar ais chugainn go luath. (dearfach)", answer: "go thiocfaidh", hint1: "dearfach"},
  {question: "____ ___________ tú isteach go lár na cathrach liom? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "___________ aon athrú ar an scéal i mbliana, dar leat? (dearfach) ", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "______ ___________ tú ar ais arís go luath? (diúltach) ", answer: "an dtiocfaidh", hint1: "diúltach"},
  {question: "___________ ar an bhfreagra ceart pé fada gearr a thógfaidh sé. (sinn, dearfach)", answer: "tiocfaimid", answer2: "tiocfaidh muid", hint1: "dearfach"},
  {question: "____ ___________ an madra ar ais , dar leat? (dearfach)", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "Tá mé lánchinnte ____ ___________ siad ar ais go brách arís. (diúltach)", answer: "nach dtiocfaidh", hint1: "diúltach"},
  {question: "____ ___________ ar ais le chéile san áit seo tar éis an chluiche? (sinn, diúltach)", answer: "nach thiocfaimid", answer2: "ní thiocfaidh muid", hint1: "diúltach"},
];

var tarMCQuestions = [
  {question: "___________ sí isteach dá mbeadh tuirse uirthi. ", answer: "thiocfadh", hint1: "dearfach"},
  {question: "___________ i gcabhair air dá mbeadh a fhios agam go raibh sé istigh ann. (mé)", answer: "thiocfainn", hint1: "dearfach, mé"},
  {question: "___________ leat go hiomlán sa mhéid a dúirt tú. (mé)", answer: "thiocfainn", hint1: "dearfach, mé"},
  {question: "___________ amach arís dá mbeidís scanraithe. (siad) ", answer: "thiocfaidís", hint1: "dearfach, siad"},
  {question: "___________ an t-otharcharr dá gcuirfí glaoch air. ", answer: "thiocfadh", hint1: "dearfach"},
  {question: " ___________ na bláthanna amach dá mbeadh an aimsir níos fearr.", answer: "thiocfadh", hint1: "dearfach"},
  {question: "___________ ar ais anseo dá mbeadh ceol ann. (siad)", answer: "thiocfaidís", hint1: "siad"},
  {question: "___________ ar ais dá mbeadh a fhios agat go raibh sé seo. (tú)", answer: "thiocfá", hint1: "dearfach, tú"},
  {question: "___________ ar ais dá mbrisfeadh an carr síos. (siad)", answer: "thiocfaidís", hint1: "siad"},
  {question: "___________ sí isteach dá mbeadh sí fuar. ", answer: "thiocfadh", hint1: "dearfach"},
];

var tarMCNi = [
  {question: "____ ___________ sí in éineacht liom ar ór ná ar airgead. ", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ leat sa chiall a bhain tú as sin.", answer: "ní thiocfainn", hint1: "diúltach"},
  {question: "____ ___________ an saol idir é féin agus a chuid bia. ", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ éinne isteach agus an madra ag an ngeata. ", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ ar ais mar gheall ar an drochchuma a bhí ar an áit. (siad) ", answer: "ní thiocfaidís", answer2: "ní thiocfadh siad", hint1: "diúltach, siad"},
  {question: "____ ___________ aon sionnach gar den teach mar gheall ar na madraí.", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ isteach mar bhí siad róchúthalach. (siad)", answer: "ní thiocfaidís", hint1: "diúltach, siad"},
  {question: "____ ___________ sí abhaile mar bhí sí róghnóthach dar léi féin. ", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ an tarbh amach as an bpáirc beag ná mór. ", answer: "ní thiocfadh", hint1: "diúltach"},
  {question: "____ ___________ ar ais murach go raibh an ceol ar fheabhas. (sinn)", answer: "ní thiocfaimís", hint1: "diúltach, sinn"},
];

var tarMCBriatharSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var tarMCCeisteach = [
  {question: "___ ___________ ar ais go hÉirinn dá mbeadh post maith ar fáil duit? (tú)", answer: "an dtiocfá", hint1: "dearfach, tú"},
  {question: "____ ___________ _____ go dtí an ceolchoirm dá mbeadh traein ar fáil dúinn? (sibh)", answer: "an dtiocfadh sibh", hint1: "dearfach, sibh"},
  {question: "____ ___________ sa bhus liomsa dá mbeadh tú gan charr? (tú)", answer: "an dtiocfá", hint1: "dearfach, tú"},
  {question: "____ ___________ isteach dá mbeadh ocras orthu? (siad, diúltach).", answer: "nach dtiocfaidís", hint1: "diúltach"},
  {question: "____ ___________  níos mó cuairteoirí dá mbeadh an aimsir níos fearr in Éirinn? (dearfach).", answer: "an dtiocfadh", hint1: "dearfach"},
  {question: "____ ___________  an madra isteach dá gcuirfinn bia os a chomhair? ", answer: "an dtiocfadh", hint1: "dearfach"},
  {question: "____ ___________ ar réiteach na faidhbe dá mbeadh na bunfhíricí acu? (siad, diúltach).", answer: "nach dtiocfaidís", hint1: "diúltach"},
  {question: "____ ___________ ar ais leat dá mbeadh a fhios agam go raibh tú leat féin? (mé, diúltach)", answer: "nach dtiocfainn", hint1: "diúltach"},
  {question: "____ ___________ ar ais ar aon nós? (siad, diúltach).", answer: "nach dtiocfaidís", hint1: "diúltach"},
  {question: "____ ___________ an cat isteach dá bhfágfainn an fhuinneog ar oscailt? (dearfach).", answer: "an dtiocfadh", hint1: "dearfach"},
];

var tarMCSpleach = [
  {question: "Bhí a fhios agam go maith ____ ___________ sí ar ais go luath. (diúltach) ", answer: "nach dtiocfadh", hint1: "diúltach"},
  {question: "Dúirt siad  ____ ___________ go dtí an teach tábhairne, ach níor tháinig. (siad, dearfach)", answer: "go dtiocfaidís", hint1: "dearfach"},
  {question: "Bhí mé ag súil ____ ___________ sé in éineacht linn, ach níor tháinig?  ", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "Bhí a fhios agam ____ ___________ aon mhaith as a chuid iarrachtaí. (diúltach) ", answer: "nach dtiocfadh", hint1: "diúltach"},
  {question: "Cheap siad ____ ___________in éineacht leo ach, buíochas le Dia, níor tháinig. (tú, dearfach)", answer: "go dtiocfá", answer2: "go dtiocfadh tú", hint1: "dearfach"},
  {question: "Bhí mé cinnte ____ ___________ ar ais go brách arís. (siad, diúltach)", answer: "nach dtiocfaidís", hint1: "diúltach"},
  {question: "Bhí mé ag súil  ____ ___________ feabhas ar an aimsir, ach níor tháinig. (dearfach) ", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "Bhí siad ag rá ____ ___________ an fhírinne amach, ach níor tháinig. (dearfach)", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "Tá a fhios agat ___ ___________ idir tú féin is do ghrá geal. (mé, diúltach)", answer: "nach dtiocfainn", hint1: "diúltach, mé"},
  {question: "Dúirt siad go léir ___ ___________sé, ach tháinig. (diúltach)", answer: "nach dtiocfadh", hint1: "diúltach"},
];

var tarMCExtraQuestions = [
  {question: "___________ amach dá mbeadh an aimsir níos fearr. (siad, dearfach) ", answer: "thiocfaidís", hint1: "dearfach"},
  {question: "Dá ____ ___________ Seán in éineacht linn bheadh an-spórt againn. ", answer: "dtiocfadh", hint1: "dearfach"},
  {question: "____ ___________ ar ais dá mbeadh an aimsir geallta go maith don deireadh seachtaine. (sinn)  ", answer: "thiocfaimis", hint1: "dearfach, sinn"},
  {question: "Nach raibh a fhios go maith agat ____ ___________ éin isteach tríd an bhfuinneog sin? (dearfach) ", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "____ ___________do chara linn dá mbeadh spás againn dó sa charr? ", answer: "an dtiocfadh", hint1: "dearfach"},
  {question: "Dúirt sí ____ ___________ sí isteach an chéad rud ar maidin, ach níor tháinig. (dearfach)", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "___ ___________ linn ar ór na cruinne. (siad, diúltach) ", answer: "ní thiocfaidís", hint1: "diúltach, siad"},
  {question: "____ ___________ leat sa mhéid a dúirt tú ansin. (mé, diúltach)", answer: "ní thiocfainn", hint1: "diúltach"},
  {question: "___ ___________ in éineacht linn dá dtabharfaimis cuireadh dóibh? (siad, dearfach)", answer: "an dtiocfaidís", hint1: "dearfach"},
  {question: "Bhí a fhios agam go maith ___ ___________sibh ar ais go luath. (diúltach)", answer: "nach dtiocfadh", hint1: "diúltach"},
];

var tarQuiz = [
  {question: "___________ sí isteach ach choimeád sí a béal dúnta. (dearfach)", answer: "tháinig", hint1: "dearfach"},
  {question: "_____ __________ ar aon réiteach ar an bhfadhb go fóill. (sinn, diúltach)", answer: "níor thángamar", answer2: "níor tháinig muid", hint1: "sinn, diúltach"},
  {question: "Tá a fhios agam___ ___________ siad ar ais ag gearán an lá dar gcionn. (dearfach, aimsir chaite)", answer: "gur tháinig", hint1: "dearfach, aimsir chaite"},
  {question: "___  ___________ siad ar chorp an fhir a báitheadh riamh. (diúltach) ", answer: "níor tháinig", hint1: "diúltach"},
  {question: "____ ___________ ciall roimh aois. (diúltach, aimsir láithreach)", answer: "ní thagann", hint1: "diúltach, aimsir laithreach"},
  {question: "______ ___________ an sneachta rómhinic in Éirinn. (diúltach, aimsir láithreach) ", answer: "ní thagann", hint1: "diúltach, aimsir laithreach"},
  {question: "Tá a fhios agam ______ ___________ sé timpeall ach anois is arís. (diúltach, aimsir láithreach)", answer: "nach dtagann", hint1: "diúltach, aimsir laithreach"},
  {question: "____ ___________tú abhaile go minic? (dearfach, aimsir láithreach)", answer: "nach dtagann", hint1: "dearfach, aimsir laithreach"},
  {question: "____ ___________ go dtí an phictiúrlann liom? (tú, dearfach, modh coinníollach)", answer: "an dtiocfá", hint1: "tú, dearfach"},
  {question: "Ní dóigh liom ____ ___________ sí ar ais anocht.", answer: "go dtiocfaidh", hint1: "dearfach"},
  {question: "Cén t-am ____ ___________ an bus gach maidin? ", answer: "a thagann", hint1: "dearfach"},
  {question: "Seo é an tobar beannaithe ___ ___________ na céadta daoine chuige gach bliain. (dearfach) ", answer: "a dtagann**", hint1: "dearfach"},
  {question: "___________ _________ ar ais go háit mar seo. Tá sí ró-iarghúlta. (mé, modh coinníollach)", answer: "ní thiocfainn", hint1: "mé, modh coinníollach"},
  {question: "Bhí a fhios agam ______ ___________ sí linn dá bhfaigheadh sí an seans. (dearfach) ", answer: "go dtiocfadh", hint1: "dearfach"},
  {question: "______ ___________ tú ar ais go dtí mo theachsa níos déanaí? ", answer: "an dtiocfaidh", hint1: "dearfach"},
  {question: "Bhí tuairim mhaith agam ____ ___________aon athrú ar a intinn siúd. (diúltach, modh coinníollach)", answer: "nach dtiocfadh", hint1: "diúltach, modh coinníollach"},
  {question: "____ ___________ feabhas ar an aimsir anois bheadh linn. (dearfach)", answer: "dá dtiocfadh", hint1: "dearfach"},
  {question: "___________ sí abhaile gach seachtain is cuma cad é a bhíonn ar siúl aici. ", answer: "tagann", hint1: "dearfach"},
  {question: "_____ ___________ ar ais anois d’fhéadfaimis é seo a chríochnú go luath. (tú, modh coinníollach)", answer: "dá dtiocfá", hint1: "tú modh coinníollach"},
  {question: "Bhí a fhios agam go maith _____ ___________ i ngiorracht scread asail den áit. (siad)", answer: "nach dtiocfaidís", hint1: "siad"},
];

//TÉIGH
var teighACQuestions = [
  {question: "___________ sí go dtí an siopa chun arán a cheannach.", answer: "chuaigh", hint1: "dearfach"},
  {question: "___________ an t-am thart go tapaidh.", answer: "chuaigh", hint1: "dearfach"},
  {question: "___________ i mbun staidéir ar an gceist láithreach. (sinn)", answer: "chuamar", answer2: "chuaigh muid", hint1: "dearfach"},
  {question: "___________ an bád go tóin poill sa stoirm. ", answer: "chuaigh", hint1: "dearfach"},
  {question: "___________ siad go dtí an phictiúrlann aréir. ", answer: "chuaigh", hint1: "dearfach"},
  {question: "___________ siad i mbun oibre láithreach.", answer: "chuaigh", hint1: "dearfach"},
  {question: "___________ go dtí an Spáinn ar ár laethanta saoire. (sinn)", answer: "chuamar", answer2: "chuaigh muid", hint1: "dearfach"},
  {question: "___________ an chaint sin i bhfeidhm orm go mór.", answer: "chuaigh", hint1: "dearfach"},
  {question: "D’éistíomar leis ach ___________ ina choinne sa deireadh. (sinn)", answer: "chuamar", answer2: "chuaigh muid", hint1: "dearfach"},
  {question: "Bhí mé beagnach ann ach ___________ réiteach na faidhbe sa bhfraoch orm. ", answer: "chuaigh", hint1: "dearfach"},
];

var teighACNi = [
  {question: "____ ___________ aon rud ar strae orm fós, ach go háirithe.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ fear an phoist thar an doras fós.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ amach in aon chor aréir. D’fhanamar sa bhaile. (sinn)", answer: "ní dheachamar", answer2: "ní dheachaigh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ siad in aon áit. D’fhan siad anseo. ", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ sí thar lear go dtí go raibh sí anonn go maith sna blianta.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ rófhada ar strae, ach ní bhfuaireamar an áit. (sinn)", answer: "ní dheachamar", answer2: "ní dheachaigh muid", hint1: "diúltach"},
  {question: "____ ___________ mé isteach go dtí go raibh sé ródhéanach.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ an scéal sin i bhfeidhm uirthi go rómhaith.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ siad thar fóir leis an scéal riamh.", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____  ___________ chomh fada le Port Láirge ina dhiaidh sin agus uile. (sinn)", answer: "ní dheachamar", answer2: "ní dheachaigh muid", hint1: "diúltach, sinn"},
];

var teighACBriathorSaor = [
];

var teighACCeisteach = [
  {question: "____ ___________ tú abhaile díreach aréir? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
  {question: "____ ___________ tú ar ais go Luimneach ó shin? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
  {question: "____ ___________ sibh ag snámh sa linn nua fós? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
  {question: "____ ___________ ar strae nó cad a tharla dúinn? (sinn, dearfach)", answer: "an ndeachamar", answer2: "an ndeachaigh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ sibh in aon áit dheas don samhradh? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
  {question: "____ ___________  abhaile luath aréir? (sinn, diúltach)", answer: "nach ndeachamar", answer2: "nach ndeachaigh muid", hint1: "diúltach"},
  {question: "____ ___________ tusa go Nua Eabhrac nuair a bhí tú sa chéad bhliain? (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "____ ___________ an bheirt eile abhaile leatsa aréir? (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "____ ___________ an tseachtain sin thart go han-tapaidh? (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "____ ___________ tú ann leat féin? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
];

var teighACSpleach = [
  {question: "An bhfuil tú cinnte ____ ___________ sí isteach ann? (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "Tá a fhios agam go maith ____ ___________ tú ann. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Bhí mé cinnte ____ ___________ sé abhaile leis an gcuid eile. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Ceapaim ____ ___________ sí go dtí an dochtúir tráthnóna inné. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________ an cóisir go maith duit ag an deireadh seachtaine. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Deirtear liom ____ ___________ an scéal i bhfeidhm go mór ar an lucht éisteachta. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "An bhfuil a fhios agat ____ ___________ gar do lár na cathrach, fiú? (sinn, diúltach)", answer: "nach ndeachamar", answer2: "nach ndeachaigh muid", hint1: "diúltach, sinn"},
  {question: "Tá súil agam ____ ___________ aon rud ar strae uirthi. (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "Tá a fhios ag gach éinne ____ ___________seisean ar aghaidh chun a chéim a chríochnú. (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "Dúradh liom ____ ___________sí faoi scian san ospidéal inné. (dearfach)", answer: "go ndeachaigh", hint1: "diúltach"},
];

var teighACCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighACExtraQuestions = [
  {question: "___________ mé isteach agus dhún mé an doras. (dearfach) ", answer: "chuaigh", hint1: "dearfach"},
  {question: "____ ___________ ar fad abhaile i dteannta a chéile. (dearfach) ", answer: "chuaigh", answer2: "chuaigh muid", hint1: "dearfach"},
  {question: "____ ___________sí sin ar aon chúrsa Gaeltachta. (diúltach) ", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "____ ___________ abhaile go dtí go raibh sé an-déanach san oíche. (sinn, diúltach) ", answer: "ní dheachamar", answer2: "ní dheachaigh muid", hint1: "diúltach"},
  {question: "____ ___________ tú go dtí an cluich Dé Domhnaigh? (dearfach)", answer: "an ndeachaigh", hint1: "dearfach"},
  {question: "Cloisim ____ ___________ an rang ar fad amach le chéile ag deireadh na scrúduithe. (dearfach) ", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Chuala mé ____ ___________ na páipéir ar fad ar strae ar na Gardaí. (dearfach) ", answer: "go ndeachaigh", hint1: ""},
  {question: "Cá ___________ tú aréir? ", answer: "ndeachaigh", hint1: ""},
  {question: "Tá súil agam ____ ___________siad thar fóir leis an bpleidhcíocht. (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "Dúirt sí ____ ___________ sí ann in aon chor. (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
];

var teighALQuestions = [
  {question: "___________ sí abhaile gach deireadh seachtaine. ", answer: "téann", hint1: "dearfach"},
  {question: "___________ sé sa tseans go rómhinic. ", answer: "téann", hint1: "dearfach"},
  {question: "___________ siad timpeall na tíre ag bailiú amhrán ó sheandaoine.", answer: "téann", hint1: "dearfach"},
  {question: "___________ ar cuairt chuici anois is arís. (mé)", answer: "téim", answer2: "téann mé", hint1: "dearfach, mé"},
  {question: "___________ amach le chéile cúpla uair sa bhliain. (sinn)", answer: "téimid", answer2: "téann muid", hint1: "dearfach, sinn"},
  {question: "___________ ag siopadóireacht gach maidin Dé Sathairn. (mé)", answer: "téim", answer2: "téann mé", hint1: "dearfach, mé"},
  {question: "___________ daoine i dtaithí air tar éis tamaill.", answer: "téann", hint1: "dearfach"},
  {question: "___________ scéalta amach fúithi ó am go chéile.", answer: "téann", hint1: "dearfach"},
  {question: "___________ sé dian orm é a admháil ach tá sé fíor.  ", answer: "téann", hint1: "dearfach"},
  {question: "___________ sí i mbun a cuid oibre le stuaim.", answer: "téann", hint1: "dearfach"},
];

var teighALNi = [
  {question: "____ ___________ daoine isteach ar an oileán sin ach amháin sa samhradh. ", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ thar lear ach uair sa bhliain. (sinn)", answer: "ní théimid", answer2: "ní théann muid", hint1: "diúltach"},
  {question: "____ ___________ mórán daoine isteach san óstán sin. ", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ sí a chodladh go dtí uair an mheán oíche. ", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ an bád amach ach tí lá sa tseachtain. ", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ thar fóir leis an magadh  nuair a bhíonn seisean i láthair. (sinn)", answer: "ní théimid", answer2: "ní théann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ na páistí amach ag súgradh ar an mbóthar níos mó.", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ sí i bhfeidhm ar dhaoine níos mó. ", answer: "ní théann", hint1: "diúltach"},
  {question: "____ ___________ ar laethanta saoire go rómhinic níos mó. (sinn)", answer: "ní théimid", answer2: "ní théann muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ focal cineálta ar strae riamh.", answer: "ní théann", hint1: "diúltach"},
];

var teighALBriatharSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighALCeisteach = [
  {question: "___________ tú go dtí do chuid léachtaí go rialta? (diúltach).", answer: "nach dtéann", hint1: "diúltach"},
  {question: "____ ___________ ar an turas céanna sin go rómhinic? (sinn, diúltach)", answer: "nach dtéimid", answer2: "nach dtéann muid", hint1: "diúltach, sinn"},
  {question: "_____ ___________ tú ar ais go Corcaigh riamh? (dearfach)", answer: "an dtéann", hint1: "dearfach"},
  {question: "_____ ___________seisean fiáin aon uair a mbíonn deoch aige? (diúltach)", answer: "nach dtéann", hint1: "diúltach"},
  {question: "_____ ___________ tú go dtí an ionad siopadóireachta sin riamh? (dearfach).", answer: "an dtéann", hint1: "dearfach"},
  {question: "_____ ___________ tú isteach ansin i gcomhair lóin riamh? (dearfach).", answer: "an dtéann", hint1: "dearfach"},
  {question: "____ ___________ go dtí an Fleadh Cheoil gach bliain? (sinn, diúltach).", answer: "nach dtéimid", answer2: "nach dtéann muid", hint1: "diúltach"},
  {question: "____ ___________ tusa go dtí an amharclann go rialta? (dearfach)", answer: "an dtéann", hint1: "dearfach"},
  {question: "____ ___________bád farantóireachta ó Chorcaigh go Santander dhá lá sa tseachtain? (diúltach).", answer: "nach dtéann", hint1: "diúltach"},
  {question: "____ ___________ siad ar ais go dtí an áit chéanna gach bliain? (dearfach).", answer: "an dtéann", hint1: "dearfach"},
];

var teighALSpleach = [
  {question: "Deirtear liom ____ ___________ siad go dtí an Meánoirthear go rialta. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "An fíor ____ ___________ sí amach ag siúl i lár na hoíche? (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "Deirtear ____ ___________ airgead amú ón siopa go rialta. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "Ní dóigh liomsa ____ ___________ an scaif sin leis an gcóta beag ná mór. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "An bhfuil a fhios agat ____ ___________ go dtí an trá ach go hannamh. (sinn, diúltach)", answer: "nach dtéimid", answer2: "nach dtéann muid", hint1: "diúltach, sinn"},
  {question: "Tá a fhios agam ____ ___________ sí ar an mbus níos mó. (diúltach)", answer: "nach dtéann", hint1: "diúltach"},
  {question: "Cloisim ____ ___________ siad ag siúl go luath gach maidin. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ siad amach ag iascaireacht níos mó. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "Nach bhfeiceann tú ____ ___________an dá rud sin le chéile? (diúltach)", answer: "nach dtéann", hint1: "diúltach"},
  {question: "Tá mé á rá leat ____ ___________ag argóint leis sin níos mó. (mé, diúltach)", answer: "nach dtéim", answer2: "nach dtéann mé", hint1: "diúltach, mé"},
];

var teighALCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighALExtraQuestions = [
  {question: "___________ag siopadóireacht gach maidin Dé Sathairn. (sinn, dearfach) ", answer: "téimid", answer2: "téann muid", hint1: "dearfach, sinn"},
  {question: "___________ go dtí na rásaí capall chomh minic agus is féidir liom. (mé, dearfach).", answer: "téim", answer2: "téann mé", hint1: "dearfach, mé"},
  {question: "___ ___________ ann ach anois is arís. (mé, diúltach) ", answer: "ní théim", answer2: "ní théann mé", hint1: "diúltach, mé"},
  {question: "____ ___________ tú go dtí na ranganna sin maidin Dé Sathairn níos mó? (dearfach)", answer: "an dtéann", hint1: "dearfach"},
  {question: "Cloisim ____ ___________ sí as a meabhair má chuirtear an cheist sin uirthi. (dearfach) ", answer: "go dtéann", hint1: "dearfach"},
  {question: "Deir siad _____ ___________ siad ag seoltóireacht gach deireadh seachtaine. (dearfach)", answer: "go dtéann", hint1: "dearfach"},
  {question: "___________ sibh thar lear i gcomhair laethanta saoire gach bliain? (dearfach) ", answer: "an dtéann", hint1: "dearfach"},
  {question: "___________ go dtí an club sin níos mó. (sinn, diúltach)", answer: "ní théimid", answer2: "ní théann muid", hint1: "diúltach, sinn"},
  {question: "___________ tú ann níos mó? (dearfach)", answer: "an dtéann", hint1: "dearfach"},
  {question: "Tá a fhios agam _____ ___________ sé dian uirthi é a admháil. (dearfach) ", answer: "go dtéann", hint1: "dearfach"},
];

var teighAFQuestions = [
  {question: "___________ amach níos déanaí. (sinn)", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach"},
  {question: "___________ mé in éineacht leat.", answer: "rachaidh", hint1: "dearfach"},
  {question: "___________ an madra ar strae muna gcoimeádann tú súil ghéar air.", answer: "rachaidh", hint1: "dearfach"},
  {question: "Is in olcas a ___________ an scéal muna stopann siad anois. ", answer: "rachaidh", hint1: "dearfach"},
  {question: "___________ ag snámh ina dhiaidh seo. (sinn) ", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach"},
  {question: "___________ tú i dtaithí air de réir a chéile.", answer: "rachaidh", hint1: "dearfach"},
  {question: "___________ na ba isteach thar an gclaí seo.", answer: "rachaidh", hint1: "dearfach"},
  {question: "___________ isteach níos déanaí. (sinn)", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach"},
  {question: "___________ sa tóir air láithreach. (sinn)", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach"},
  {question: "___________ tú ar strae ansin muna mbíonn tú an-aireach.", answer: "rachaidh", hint1: "dearfach"},
];

var teighAFNi = [
  {question: "Ná bí buartha, ____ ___________ aon rud amú ort.", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ sé siúd níos faide leis an scéal.", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ an scéal amach má choimeádann tusa do bhéal dúnta. ", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ ann go dtí go mbeimid críochnaithe anseo. (sinn) ", answer: "ní rachaimid", answer2: "ní rachaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ isteach sa phluais sin. Tá sí ródhainséarach. (sinn) ", answer: "ní rachaimid", answer2: "ní rachaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ ar aghaidh níos faide go dtí go mbeidh gach duine anseo. (sinn) ", answer: "ní rachaimid", answer2: "ní rachaidh muid", hint1: "diúltach"},
  {question: "____ ___________ sé i bhfad má fhanann sé leis an bplean sin.", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ mise ansin arís go brách na breithe. ", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ sí siúd rófhada amú, táim cinnte. ", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "Táim ar mo sháimhín só anseo agus ____ ___________ mé amach arís go maidin. ", answer: "ní rachaidh", hint1: "diúltach"},
];

var teighAFBriathorSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighAFCeisteach = [
  {question: "___ ___________ tú ar ais ann arís an bhliain seo chugainn? (dearfach)", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ éinne eile in éineacht leat? (dearfach)", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ siad ar strae ansin, an dóigh leat? (dearfach)", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ an bád sin i bhfad amach sula gcasfaidh sí ar ais? (dearfach)", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ ann uair amháin eile? (sinn, dearfach).", answer: "an rachaimid", answer2: "an rachaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ tusa isteach im’ áitse? (dearfach).", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ mórán den airgead a bailíodh chun sochair do dhaoine gan dídean? (dearfach).", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ ar fad ann le chéile? (dearfach)", answer: "an rachaimid", answer2: "an rachaidh muid", hint1: "dearfach"},
  {question: "____ ___________ an madra sin ar mire má ligeann tú amach é? (diúltach).", answer: "nach rachaidh", hint1: "diúltach"},
  {question: "____ ___________ siad ar strae má leanann siad orthu suas an cosán sin? (diúltach).", answer: "nach rachaidh", hint1: "diúltach"},
];

var teighAFSpleach = [
  {question: "Tá súil agam ____ ___________ siad timpeall an oileáin ar fad. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
  {question: "Ní dóigh liom ____ ___________ an bus gar don staid ina mbeidh an cluiche ar siúl. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
  {question: "Tá a fhios agam ____ ___________ sí as a meabhair má chloiseann sí é sin. (dearfach) ", answer: "go rachaidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ an scéal níos faide ná seo anois. (diúltach)", answer: "go rachaidh", hint1: "diúltach"},
  {question: "Táim den tuairim ____ ___________ sí ar saoire ag deireadh na míosa. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
  {question: "Tá súil agam  ____ ___________na ba isteach ar an líne traenach. (diúltach) ", answer: "nach rachaidh", hint1: "diúltach"},
  {question: "Tá súil le Dia agam ____ ___________gach rud go maith dóibh. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
  {question: "Deir siad ____ ___________ siad ann ach níl a fhios agam fúthu. (dearfach)", answer: "nach rachaidh", hint1: "dearfach"},
  {question: "Tá a fhios agam go maith ____ ___________ siad in aon ghiorracht den áit. (diúltach)", answer: "nach rachaidh", hint1: "diúltach"},
  {question: "Tá a fhios agam ____ ___________siad isteach luath nó mall. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
];

var teighAFCoibhneasta = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighAFExtraQuestions = [
  {question: "___________ mé in éineacht leat níos déanaí. (dearfach)", answer: "rachaidh", hint1: "dearfach"},
  {question: "___________ ar ais an bealach céanna a thángamar. (sinn, dearfach)", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ an bus seo caol díreach isteach i lár na cathrach. (dearfach)", answer: "rachaidh", hint1: "dearfach"},
  {question: "____ ___________ ar ais ansin go deo arís. (sinn, diúltach)", answer: "ní rachaimid", answer2: "ní rachaidh muid", hint1: "diúltach, sinn"},
  {question: "____ ___________ abhaile go dtí níos déanaí? (sinn, diúltach) ", answer: "ní rachaimid", answer2: "ní rachaidh muid", hint1: "diúltach"},
  {question: "______ ___________ mé thar do dhoras gan bualadh isteach chugat. (diúltach) ", answer: "ní rachaidh", hint1: "diúltach"},
  {question: "____ ___________ tú ar saoire eile roimh dheireadh na bliana? (dearfach)", answer: "an rachaidh", hint1: "dearfach"},
  {question: "____ ___________ tú go dtí an amharclann oíche amárach? (dearfach) ", answer: "an rachaidh", hint1: "dearfach"},
  {question: "Tá súil agam ____ ___________ an cat isteach tríd an bhfuinneog. (diúltach)", answer: "nach rachaidh", hint1: "diúltach"},
  {question: "Glacaim leis ____ ___________ tú ar ais i mbun oibre arís go luath. (dearfach)", answer: "go rachaidh", hint1: "dearfach"},
];

var teighMCQuestions = [
  {question: "___________ in éineacht leat dá mbeadh an t-am agam. (mé) ", answer: "rachainn", hint1: "dearfach, mé"},
  {question: "___________ sise ann dá mbeadh an t-airgead aici.", answer: "rachadh", hint1: "dearfach"},
  {question: "___________ go dtí an cluiche dá mbeadh mórán spéise acu sa pheil. (siad) ", answer: "rachaidís", answer2: "rachadh siad", hint1: "dearfach, siad"},
  {question: "___________ in aon áit chun bualadh leo sin arís. (mé)  ", answer: "rachainn", hint1: "dearfach, mé"},
  {question: "___________ go dtí an trá dá mbeadh an aimsir níos fearr. (mé) ", answer: "rachainn", hint1: "dearfach, mé"},
  {question: " ___________ sí go hifreann agus ar ais chun an páiste a shábháil. ", answer: "rachadh", hint1: "dearfach"},
  {question: "___________ sibh ann dá mbeadh Baile Átha Cliath ag imirt. ", answer: "rachadh", hint1: "dearfach"},
  {question: "___________ go Corcaigh dá mbeadh suíochán ar fáil ar an traein. (mé) ", answer: "rachainn", hint1: "dearfach"},
  {question: "___________ i bhfad níos mó daoine go dtí an fhéile dá mbeadh a fhios acu fúithi.", answer: "rachadh", hint1: "dearfach"},
  {question: "___________ an madra amach thar gheata mar sin. ", answer: "rachadh", hint1: "dearfach"},
];

var teighMCNi = [
  {questions: "____ ___________ trasna an bhóthair leis. (mé) ", answer: "ní rachainn", hint1: "diúltach, mé"},
  {questions: "____ ___________ go dtí an Astráil sa samhradh mar bíonn an aimsir róthe. (mé)", answer: "ní rachainn", hint1: "diúltach, mé"},
  {questions: "____ ___________ Máire in aon áit gan Diarmaid.", answer: "ní rachadh", hint1: "diúltach"},
  {questions: "____ ___________ isteach ann gan chúis mhaith. (siad) ", answer: "ní rachaidís", hint1: "diúltach"},
  {questions: "____ ___________ an páiste isteach ar scoil gan a mháthair.  ", answer: "ní rachadh", hint1: "diúltach"},
  {questions: "____ ___________ sé isteach sa leabharlann mar bhí sé róthuirseach.", answer: "ní rachadh", hint1: "diúltach"},
  {questions: "____ ___________ éinne isteach sa bhád mar bhí droch chuma uirthi. ", answer: "ní rachadh", hint1: "diúltach"},
  {questions: "____ ___________ ag snámh sa linn sin ar ór ná ar airgead. (mé) ", answer: "ní rachainn", hint1: "diúltach, mé"},
  {questions: "____ ___________ sí isteach go lár na cathrach léi féin. ", answer: "ní rachadh", hint1: "diúltach"},
  {questions: "____ ___________ an bád amach an lá sin mar bhí drochaimsir geallta. ", answer: "ní rachadh", hint1: "diúltach"},
];

var teighMCBriatharSaor = [
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
  {question: "", answer: "", hint1: ""},
];

var teighMCCeisteach = [
  {question: "___ ___________ go Meirceá Theas ar laethanta saoire? (tú, dearfach)", answer: "an rachfá", hint1: "dearfach, tú"},
  {question: "____ ___________ na sionnaigh isteach tríd an bhfuinneog i ndiaidh na sicíní? (diúltach)", answer: "nach rachadh", hint1: "diúltach"},
  {question: "____ ___________ slua maith daoine ann dá mbeadh busanna ar fáil dóibh? (dearfach)", answer: "an rachadh", hint1: "dearfach"},
  {question: "____ ___________ amú dá bhfágfaí leo féin iad? (siad, diúltach).", answer: "nach rachaidís", answer2: "nach rachadh siad", hint1: "diúltach, siad"},
  {question: "____ ___________  sé dian air dá mbeadh air filleadh abhaile arís? (diúltach).", answer: "nach rachadh", hint1: "diúltach"},
  {question: "____ ___________  sibhse go Páras linn dá n-eagróinnse an turas? (dearfach)", answer: "an rachadh", hint1: "dearfach"},
  {question: "____ ___________ glan as a meabhair dá gcloisfidís é sin? (siad, diúltach).", answer: "nach rachadh", hint1: "diúltach, siad"},
  {question: "____ ___________ i bhfad níos mó daoine go dtí an cruinniú dá mbeadh sé ar siúl san oíche? (diúltach)", answer: "nach rachadh", hint1: "diúltach"},
  {question: "____ ___________ Seán ar thuras mar sin, dar leat? (dearfach).", answer: "an rachadh", hint1: "dearfach"},
  {question: "____ ___________ caint mar sin síos go maith lena mhuintir féin, dar leat? (dearfach).", answer: "an rachadh", hint1: "dearfach"},
];

var teighMCSpleach = [
  {question: "Dúirt sí ____ ___________ sí ann ach ní dheachaigh. (dearfach) ", answer: "go rachadh", hint1: "dearfach"},
  {question: "Chuala mé  ____ ___________ sí isteach sa bhád ar ór na cruinne. (diúltach)", answer: "nach rachadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam ____ ___________ go dtí an ceolchoirm le chéile. (siad, dearfach)  ", answer: "go rachaidís", answer2: "go rachadh said", hint1: "dearfach, siad"},
  {question: "Bhí an scéal amuigh ____ ___________ an Taoiseach go dtí an cruinniú sin. (diúltach) ", answer: "nach rachadh", hint1: ""},
  {question: "Chuala mé ____ ___________sé ar ais go dtí an áit riamh arís. (diúltach)", answer: "nach rachadh", hint1: "diúltach"},
  {question: "Bhí a fhios agam ____ ___________ an nuacht sin an-dian air. (dearfach)", answer: "go rachadh", hint1: "dearfach"},
  {question: "Bhí sé de cháil orthu ____ ___________ pingin amú orthu riamh! (diúltach) ", answer: "nach rachadh", hint1: "diúltach"},
  {question: "Ba é an nós a bhí ann ná ____ ___________ éinne amach oíche Nollag. (diúltach)", answer: "nach rachadh", hint1: "diúltach"},
  {question: "Dúirt siad ___ ___________ ann dá bhfaighidís an seans. (dearfach)", answer: "nach rachadh", hint1: "dearfach"},
  {question: "Bhí a fhios agam ___ ___________sé ar strae sa cheist sin mar bhí sí an-deacair. (dearfach)", answer: "go rachadh", hint1: "dearfach"},
];

var teighMCExtraQuestions = [
  {question: "___________ go hÁrainn dá mbeinn timpeall an cheantair sin. (mé, dearfach) ", answer: "rachainn", answer2: "rachadh mé", hint1: "dearfach, mé"},
  {question: "____ ___________ amach sa bhád dá mbeadh an aimsir ní ba chiúine. (sinn, dearfach) ", answer: "rachaimís", answer2: "rachadh muid", hint1: "dearfach, sinn"},
  {question: "____ ___________ ceist mar sin dian air le freagairt go macánta.  (dearfach) ", answer: "rachadh", hint1: "dearfach"},
  {question: "____ ___________ sí in aon áit riamh gan a fón póca. (diúltach) ", answer: "ní rachadh", hint1: "diúltach"},
  {question: "____ ___________thar an táirseach sin arís fiú dá dtabharfaidís míle Euro dom. (mé, diúltach) ", answer: "ní rachainn", answer2: "ní rachadh mé", hint1: "diúltach"},
  {question: "____ ___________ abhaile a fhad is a bhí aon chomhluadar fágtha san áit. (siad, diúltach)", answer: "ní rachaidís", answer2: "ní rachadh siad", hint1: "diúltach"},
  {question: "___ ___________ go dtí an cluiche dá n-eagróimis bus don ghrúpa ar fad? (tú, dearfach) ", answer: "an rachfá", answer2: "an rachadh tú", hint1: "dearfach, tú"},
  {question: "Níl mé cinnte ach dúirt siad ____ ___________ ann. (siad, dearfach)", answer: "go rachaidís", answer2: "go rachadh siad", hint1: "dearfach, siad"},
  {question: "Nach raibh a fhios agat go maith ___ ___________ ann liom féin. (mé, diúltach)", answer: "nach rachainn", answer2: "nach rachadh mé", hint1: "diúltach"},
  {question: "Bhí eagla orm ___ ___________ar strae sa cheo an oíche sin. (siad, dearfach)", answer: "go rachaidís", answer2: "go rachadh siad", hint1: "dearfach"},
];

var teighQuiz = [
  {question: "___________ mé isteach agus ní raibh éinne istigh romham. (dearfach)", answer: "chuaigh", hint1: "dearfach"},
  {question: "_____ __________ ar laethanta saoire go dtí an Fhrainc anuraidh. (sinn, dearfach)", answer: "chuamar", answer2: "chuaigh muid", hint1: "sinn, dearfach"},
  {question: "___ ___________ sí in aon áit an oíche sin ina dhiaidh sin is uile. (diúltach)", answer: "ní dheachaigh", hint1: "diúltach"},
  {question: "___  ___________ amach ar chor ar bith oíche Dé Sathairn seo caite. (sinn, diúltach) ", answer: "ní dheachamar", answer2: "ní dheachaigh muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ tú go dtí an cluiche an Domhnach seo caite? (dearfach)", answer: "an dheachaigh", hint1: "dearfach"},
  {question: "______ ___________ éinne eile isteach in éineacht leat? (diúltach) ", answer: "an dheachaigh", hint1: "diúltach"},
  {question: "Dúirt sé liom ___ ___________ sé caol díreach abhaile an oíche sin. (dearfach)", answer: "go ndeachaigh", hint1: "dearfach"},
  {question: "Chuala mé____ ___________rudaí go rómhaith dóibh ag an deireadh seachtaine. (diúltach)", answer: "nach ndeachaigh", hint1: "diúltach"},
  {question: "____ ___________ tú go dtí an Iodáil ar laethanta saoire gach bliain? (dearfach)", answer: "an dtéann", hint1: "dearfach"},
  {question: "____ ___________ suas an bealach sin gach uair. (sinn, diúltach)", answer: "ní théimid", answer2: "ní théann muid", hint1: "sinn, diúltach"},
  {question: "____ ___________ sí abhaile gach aon deireadh seachtaine. (dearfach) ", answer: "téann", hint1: "dearfach"},
  {question: "Ceapaim ___ ___________ siad ar chúrsa Gaeltachta beagnach gach bliain. (dearfach) ", answer: "go dtéann", hint1: "dearfach"},
  {question: "____ ___________ mé isteach chugat ar ball beag. (dearfach)", answer: "rachaidh", hint1: "dearfach"},
  {question: "______ ___________ an capall sin isteach sa stábla go héasca an uair seo. (diúltach) ", answer: "rachaidh", hint1: "diúltach"},
  {question: "___________ go léir isteach i dteannta a chéile i gceann cúpla nóiméad. (dearfach)", answer: "rachaimid", answer2: "rachaidh muid", hint1: "dearfach"},
  {question: "____ ___________an madra sin abhaile le duine ar bith dá bhfágfaí amuigh mar sin é. (dearfach)", answer: "rachadh", hint1: "dearfach"},
  {question: "Dúirt siad ____ ___________ go dtí an léacht ach chuaigh. (siad, diúltach)", answer: "nach rachaidís", answer2: "nach rachadh siad", hint1: "siad, diúltach"},
  {question: "____ ___________ aon duine le haon chiall ag snámh in áit mar sin. (diúltach)", answer: "ní rachadh", hint1: "diúltach"},
  {question: "____ ___________ ann dá mbeadh Seán ag dul ann freisin? (tú, dearfach) ", answer: "an rachfá", answer2: "an rachadh tú", hint1: "tú, dearfach"},
  {question: "Dúirt siad ___ ___________ go dtí an Rúis i lár an gheimhridh go brách arís. (siad, diúltach)", answer: "nach rachaidís", answer2: "nach rachadh siad", hint1: "siad, diúltach"},
];
