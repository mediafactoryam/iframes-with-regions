const data = {
    ajapnyak: {
        title: "Աջափնյակ",
        texts: [
            { text: 'Խաչատրյան փողոց հ․2-րդ նրբանցք հ․ 11 բնակելի տուն հասցեում, Յուրիկ Ասատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան վերնահարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Շահումյան փողոցի հ․16 փողոց հ․84/4 հասցեի դիմաց, Վազգեն Շահգելդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, գոյություն ունեցող շինության վրա իրականացրել է վերնահարկի և տանիքի կառուցման աշխատանքներ', link: '' },
            { text: 'Սիլիկյան 7-րդ փողոց հ․63 հողամաս հասցեում, Հրայր Թորգոմյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պարսպի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Միրաքյան փողոց հ․68/1 հասցեում, Գևորգ Դավթյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե սյուներով և հեծաններով քարե շարվածքով պարսպի կառուցման աշխատանքներ', link: '' },
            { text: 'Մարգարյան փողոց հ․41/5 հասցեում դիմաց, Անահիտ Հարությունյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է աստիճանավանդակի վերակառուցման, թվով երկու պատուհանների բացվածքների կառուցման աշխատանքներ', link: '' },
            { text: 'Բաշինջաղյան փողոց հ․114 հասցեում, Նորայր Ասատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Խաչատրյան փողոցի հ․14 հասցեում, Մխիթար Բալաբեկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով, մետաղական կոսնտրուկցիաներով վերնահարկի կառուցման, տանիքի վերակառուցման աշխատանքներ', link: '' },
            { text: 'Շինարարների փողոց հ․27 շենքի հասցեի մուտքի դիմաց, Ռաֆայել Պապոյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ավտոտնակի տանիքի վերակառուցման աշխատանքներ՝ ֆիզիկական չափերի փոփոխմամբ', link: '' },
            { text: 'Սիլիկյան 4-րդ փողոց հ․18 հասցեում, Անատոլի Եղիազարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է կրպակի վերակառուցման աշխատանքներ', link: '' },
            { text: 'Մարգարյան նրբանցք հ․6 շենք հ․615 բնակարան հասցեում, Ամալյա Անտոնյան առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է պատուհանների ֆիզիկական չափերի փոփոխման և բետոնե հարթակի կառուցման աշխատանքներ', link: '' },
            { text: 'Հասրաթյան փողոց հ․13/7 հասցեում, Աղասի Բանգոյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքի կառուցման աշխատանքներ', link: '' },
            { text: 'Մարգարյան փողոց 2-րդ նրբանցք հ․ 10 շենքի ետնամաս հասցեում, Հովհաննես Սահակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե կոնստրուկցիաներով և միջնորմային սալիկներով խորդանոցի կառուցման աշխատանքներ', link: '' },
            { text: 'Բեկնազարյան փողոցի հ․38/14 հասցեում, Տարոն Թամրազյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հիմքի կառուցման աշխատանքներ', link: '' },
            { text: 'Վշտունու փողոց հ․1-ին նրբանցք հ․ 17 բնակելի տուն հասցեում, Հովհաննես Դավթյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հիմքերի և երկաթբետոնե սյուների կառուցման աշխատանքներ', link: '' },
            { text: 'Մարգարյան 1-ին նրբանցք հ․6 և հ․8 շենքերի միջև ընկած տարածք հասցեում, Աշոտ Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցողբետոնե հիմքի վրա քարե շարվածքով շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Հալաբյան փողոցի հ․5/3 հասցեում, Արթուր Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյությունունեցող շինության մոտաղական կոնստրուկցիաներով տանիքի կառուցման աշխատանքներ', link: '' },
            { text: 'Մարգարյան փողոց հ․2-րդ նրբանվք հ․198 շենքի հարակից տարածք հասցեում, Արթուր Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող ավտոտնակի ընդլայնման, մասնավորապես՝ քարե շարվածքով պատերի կառուցման աշխատանքներ', link: '' },
        ]
    },
    davitashen: {
        title: "Դավթաշեն",
        texts: [
            { text: 'Դավթաշեն 4-րդ թաղամաս հ․38 շենքի հ․ 53 բնակարան հասցեում, Սարգիս Գազանճեանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Դավթաշեն 4-րդ թաղամաս հ․37 շենքի հարևանությամբ հասցեում, Էդուարդ Հարությունյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե սալերի տեղադրման աշխատանքներ', link: '' },
            { text: 'Դավթաշեն 1-ին փողոց հ․2-րդ նրբանցք հ․ 38 բնակելի տուն հասցեում, Օթար Շախպազյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Տ․Պետրոսյան փողոցի հ․83 հասցեում, 30․01․2020թ․ տրված հ․ 01/18-Մ-614-72 շինարարության թույլտվությամբ իրականացվող աշխատանքների ընթացքում համաձայնեցված նախագծի պահանջներից դուրս «ԱՐԿԱԴԱ ՔՈՆՍԹՐԱՔՇՆ» ՍՊԸ տնօրեն Տիգրան Բայբուրտյանն իրականացրել է նկուղային հարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Չաուշի փողոց հ․30 հասցեում, Նորայր Ղուկասյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կրպակի կառուցման աշխատանքներ', link: '' },
            { text: 'Դավթաշեն 4-րդ թաղամաս հ․4ա շենքի հ․2 հասցեում, Հրաչյա Ծատուրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հատակի նիշի իջեցման աշխատանքներ', link: '' },]
    },
    qanaqer_zeytun: {
        title: "Քանաքեռ֊Զեյթուն",
        texts: [
            { text: 'Իլիչի փողոց հ․68 տուն հասցեում, Արմեն Աբգարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ավտոտնակի տանիքի վերակառուցման՝ ֆիզիկական չափերի փոփոխման աշխատանքներ', link: '' },
            { text: 'Հասրաթյան փողոց հ․9/3 հասցեում, Լիլիթ Զաքարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, գոյություն ունեցող շինության վրա իրականացրել է քարե պատերի կառուցման, դռան և պատուհանների բացվածքի իրականացման աշխատանքներ', link: '' },
            { text: 'Լեփսիուսի փողոց 17 շենքի հ․15/1 հասցեի հարևանությամբ, Աննա Խանգելդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բետոնե հիմքով և մետաղական կոնստրուկցիաներով մոտավորապես 1մ բարձրությամբ, 18մ երկարությամբ, 30քմ մակերեսով ցանկապատի կառուցման աշխատանքներ', link: '' },
            { text: 'Վարշավյան փողոց հ․83 բնակելի տուն հասցեում, Արմինե Ավարջակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե հարթակի կառուցման աշխատանքներ', link: '' },
            { text: 'Բուսաբանական փողոց հ․18 տըուն հասցեում, Սմբատ Կարապետյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության տանիքի և պատշգամբի վերակառուցման, մասնավորապես՝ երկաթբետոնե հարթակի և պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Պ․Սևակի փողոց հ․47/1 հասցեում, Սոֆյա Կիրակոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Ներսիսյան փողոց հ․6ա շենքի հ․ 45 հասցեում, Ծովինար Մարուքյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է նկուղայիյ տարածքի հտակի նիշի իջեցման, արտաքին պատի վրա դռան բացվածքի իրականացման և դռան տեղադրման աշխատանքներ', link: '' },
            { text: 'Կամարակի 1-ին փողոց հ․ 30/1 բնակելի տուն հասցեում, Սվետլանա Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով և քարե շարվածքով շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Լեփսիուսի փողոց հ․3/2 հասցեին կից, Արամ Իսրաելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության տանիքի մետաղական հենակմախքի մոնտաժման աշխատանքներ', link: '' },
            { text: 'Դրոյի փողոց հ․8 շենքի հ․5 բնակարան հասցեին կից, Մարգո Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե պատի կառուցման աշխատանքներ ', link: '' },]
    },
    avan: {
        title: "Ավան",
        texts: [
            { text: 'Ա․Շահինյան փողոցի հ․ 1-ին նրբանցք հ․ 25/17 հասցեում, Անուշ Թառանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Ավան 4-րդ փողոց 4-րդ նրբանցք հ․ 14/1 հասցեում, Սուսաննա Կուզոյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է 25քմ մակերեսով շինության պատերի և երկաթբետոնե ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Իսահակյան թաղամաս հ․10 հասցեում, Հակոբ Խաչիկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, 190ամ բարձրությամբ և 80 ամ լայնությամբ գյութոյւն ունեցող բացվածքի վրա իրականացրել է մուտքի դռան տեղադրման աշխատանքներ', link: '' },
            { text: 'Դավիթ Մալյան փողոցին կից հ․ 33/3 հասցեում, Սամվել Հովսեփյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ցեմենտավազե շաղախով պարսպի հիմքի կառուցման աշխատանքներ', link: '' },
            { text: 'Ավան 8-րդ փողոց հ․6 տուն հասցեում, Մուրադ Սարգսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է 23մ երկարությամբ և 1 մ բարձրությամբ պատերի և ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Ավան 7-րդ փողոց հ․1-ին նրբանցք հ․9/1 հասցեում, Մարինա Սեդրակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շվաքարանի վերակառուցման, մասնավորապես՝ հին շվաքարանի քանդման և նոր շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Աճառյան փողոց հ․82 հասցեում, Կարեն Գոմկցյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ցեմենտավազե բլոկով պատի կառուցման աշխատանքներ', link: '' },
            { text: 'Ավան 7-րդ փողոց հ․160 հասցեում, Տիգրան Համբարձումյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ծածկի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Թումանյան թաղամաս հ․13/6 հասցեում, Ալբերտ Շխյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման աշխատանքներ', link: '' },
        ]
    }
    ,
    kentron:
    {
        title: "Կենտրոն",
        texts: [
            { text: 'Թաիրով փողոցի հ․10 հասցեում, Լիլյա Սիմոնյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Անտառային փողոցի հ․45/3 հասցեում, Արթուր Մանուկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է սահմանազատող երկաթբետոնե պարսպի կառուցման աշխատանքներ', link: '' },
            { text: 'Աբովյան փողոց հ․66 շենքի հ․14 ձեղնահարկ հասցեում, Էլիզա Նազարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է արտաքին պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Պուշկինի փողոցի հ․46 շենքի հ․11 բնակարան հասցեում, Կարինե Հարությունյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, արտաքին պատի վրա իրականացրել է ծածկի մետաղկան հենակմախքի կառուցման աշխատանքներ', link: '' },
            { text: 'Տպագրիչների փողոց հ․9 հասցեում, Աշոտ Այվազյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող ավտոտնակի տանիքի վերակառուցման աշխատանքներ', link: '' },
            { text: 'Աղայան փողոցի հ․7 շենքի հ․11/1 բնակարան հասցեում, Սառա Մասսուդխան Բահմանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ներքին վերահատակագծման՝ սանհանգույցի կառուցման աշխատանքներ', link: '' },
            { text: 'Բուզանդի փողոց հ․36 հասցեում, Արֆլեդ Նալբանդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Վարդանանց փողոց հ․18 շենք հասցեում, Վահագն Ատոմյանի լ/ա Հրաչյա Ատոմյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, մուտքային հատվածում իրականացրել է քարե շարվածքով պատի կառուցման աշխատանքներ', link: '' },
            { text: 'Մ․Հերացու փողոցի հ․2 հասցեում, 05․05․2014թ․ համաձայնեցված հ․ 01/18-05/2-18833-348 նախագծի պահանջներից դուրս, «5»-«6» և «Գ»-«Ե» առանցքներով պարփակված հատվածում «ՀԱՊԿ» ակադեմիա հիմնադրամի տնօրեն Մհեր Շահգելդյան իրականացրել է հարկերի կառուցման աշխատանքներ, ինչպես նաև «1»-«3» և «Գ»-«Ե» առանցքներով պարփակված հատվածում նախատեսված եռանկյան կառուցապատումը ստացվել է ուղղանկյունաձև', link: '' },
            { text: 'Կողբացու փողոց հ․75 շենքի հ․6 նկուղային տարածքին կից, Մարինե Սարգսյանի լ/ա Դավիթ Թովմասյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, մուտքային հատվածում իրականացրել է շվաքարանի մետաղական հենակմախքի մոնտաժման աշխատանքներ', link: '' },
            { text: 'Եկմալյան փողոց հ․1/1 շենքի հ․104-106 բնակարան հասցեում, Շուշանիկ Աֆյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականցրել է բնակարանի վերակառուցման, մասնավորապես՝ ծածկի և պատուհանների վերափոխման, վերակառուցման աշխատանքներ', link: '' },
            { text: 'Սևանի փողոց հ․11/1 հասցեում, Սուսաննա Կարապետյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան մի հատվածի քանդման, նույն հատվածում քարե շարվածքով վերակառուցման աշխատանքներ', link: '' },
            { text: 'Թումանյան փողոցի հ․64ա շենքի հ․ 9 հասցեում, Էդվարդ Գրեգորին առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է միջհարկային ծածկի բետոնացման աշխատանքներ', link: '' },
            { text: 'Այգեստան փողոցի հ․12 հասցեում, Էմելիա Հակոբյան լ/ա Արման Բաղդասարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան պատշգամբի մետաղական կոնստրուկցիաներով ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Խանջյան փողոցի հ․8/1 սրճարան հասցեում, Արման Նալբանդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, գոյություն ունեցող շինության ներքին հատվածում իրականացրել է քարե շարվածքով պատի կառուցման աշխատանքներ', link: '' },
            { text: 'Արշակունյաց պողոտայի հ․16/2 հասցեում, «ԿԱՄՕՅԼ» ՍՊԸ տնօրեն Կամո Մելքոնյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող տարածքի և շինության սալիկաբոնդով և քարե սալերով երեսապատման շինարարական աշխատանքներ', link: '' },
            { text: 'Պուշկին, Տերյան և Արամի փողոցների միջանկյալ հողամաս հասցեում, ՎԴ/4997/05/20 վարչական գործով 22․09․2020թ․ տրված հ․01/18-Ղ-246-480 շինարարության թույլտվությունը կասեցվել է, սակայն Ղևոնդ Ղալումյանը երկաթբետոնե հիմքերով իրականացրել է երկրորդ հարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Պռոշյան փողոցի հ․9 հասցեում, Յհովհաննէս Գազանճեանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մուտքի կազմակերպման և գոյություն ունեցող պատշգամբի քարե շարվածքով պատի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Ամիրյան փողոցի հ․10/2 հասցեում, Գաբրիել Գաբրիելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող ավտոտնակի ընդլայնման, մասնավորապես՝ մետաղական կոնստրուկցիաներով վերակառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Արշակունյաց պողոտայի հ․8 շենքի հ․11 հասցեում, Արմեն Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է պատշգամբի վերակառուցման, մասնավորապես՝ քարե շարվածքի քանդման, նոր քարե շարվածքով պատի կառուցման ախատանքներ', link: '' },
            { text: 'Կորյունի փողոց հ․5 շենքի հ․44 բնակարան հասցեում, Արա Շահնազարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակարանի փայտե հատակի վերակառուցման, մասնավորապես՝ բետոնե հարթակի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Արամի փողոց հ․86 շենքի հ․99 հասցեում, Գառնիկ Ավետիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, բնակարանի տանիքային հատվածում իրականացրել է գոյություն ունեցող ծածկի տակ քարե շարվածքի կառուցման և ցուցափեղկի տեղադրման շինարարական աշխատանքներ', link: '' },
            { text: 'Բաղրամյան 1-ին փակուղի հ․7 տուն հասցեում, Տիրայր Գրիգորյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող ավտոտնակի ճակատային հատվածում իրականացրել է քարե պատի կառուցման, պատուհանների և դռան տեղադրման աշխատանքներ', link: '' },
            { text: 'Մյասնիկյան պողոտայի հ․ 9/10 բնակելի տուն հասցեում, Շուբհանշու Սինղն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է պատի կառուցման, աստիճանավանդակի տեղադրման, ձեղնահարկում քարե պատի կառուցման աշխատանքներ', link: '' },
            { text: 'Արշակունյաց պողոտայի հ․ 18/4 հասցեում, «Ջերմուկ գրուպ» ՓԲԸ տնօրեն Վահագն Արսենյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Անտառային փողոցի հ․45/4 բնակելի տուն հասցեում, Հեղինե Սեդրակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, բնակելի տան 3-րդ հարկում իրականացրել է երկաթբետոնե հիմնասյուների կառուցման աշխատանքներ', link: '' },
        ]
    },
    norq_marash: {
        title: "Նորք֊Մարաշ",
        texts: [
            { text: 'Նորքի 10-րդ փողոց հ․11 տուն հասցեում, Անդրանիկ Համբարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության մուտքի վերակառուցման՝ մետաղապլաստե ցուցափեղկի տեղադրման, դռան բացվածքի իրականացման և մետաղական շերտավարագույրի տեղադրման աշխատանքներ', link: '' },
            { text: 'Նորքի 7-րդ փողոց հ․76 բնակելի տուն հասցեում, Վլադիմիր Մուրադյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է կցակառույցի կառուցման աշխատանքներ', link: '' },
        ]
    },
    nor_norq: {
        title: "Նոր Նորք",
        texts: [
            { text: 'Ա․Հովհաննիսյան փողոցի հ․19 հասցեում, Գայանե Ավետիսյանառանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության վերնահարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Մինսկի փողոց հ․27/6 հասցեում, Մարտիրոս Բաբայան առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Մոլդովական փողոց հ․26/2 շենքի հ․2 բնակարան հասցեում, Ռուզան Բարսամյանն առանց համապատասխան քաաքաշինական փաստաթղթերի, իրականացրել է կցակառույցի վերակառուցման, մասնավորապես՝ արտաքին պատի վերակառուցման աշխատանքներ', link: '' },
            { text: 'Նանսենի փողոց հ․1/10 հասցեում, Կարեն Եսայանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Մոլդովական փողոց հ․30 շենքին հարակից հասցեում, Գևորգ Գևորգյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող շինության վերակառուցման, մասնավորապես՝ հին պատի քանդման և նոր պատի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Բակունցի փողոց հ․4 շենքի հ․20 բնակարանի տանիքում, Միշա Առաքելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով և թիթեղյա ծածկով տանիքի կառուցման աշխատանքներ', link: '' },
            { text: 'Նորքի 9-րդ զանգված հ․13 շենքի հ․76 ավտոտնակ հասցեում, Ռուբեն Անտոնյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է ավտոտնակի դիմային հատվածի վերակառուցման, մասնավորապես՝ մետաղական դարպասների փոխարեն իրականացրել է նոր ցուցափեղկի տեղադրման շինարարական աշխատանքներ', link: '' },
            { text: 'Նոր Նորք վարչական շրջանի 8-րդ զանգված Մինսկի հ․ 5/11 հասցեում, , Արտեմ Գրիգորյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է թիթեղյա տանիքը երկաթբետոնե սալերով փոխարինման աշխատանքներ', link: '' },
            { text: 'Գյուրջյան փողոց հ․10/21 հասցեում, Սուսաննա Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման, մասնավորապես՝ շինության հիմքերի կառուցման, երկաթբետոնե սյուների հենակմախքի մոնտաժման, քարե շարվածքով պատի կառուցման, պատուհանների բացվածքի նախատեսմամբ շինարարական աշխատանքներ', link: '' },
            { text: 'Բագրևանդ թաղամաս հ․68/4 հասցեում, 09․07․2020թ․համաձայնեցված հ․ 01/18-05/1-Գ-3381-589 նախագծի պահանջներից դուրս Ռաֆայել Գյուրջյանն իրականացրել է թվով 2 շվաքարանի և աստիճանավանդակի կառուցման աշխատանքներ', link: '' },
            { text: 'Դավիթ Բեկ փողոցի հ․97/21 հասցեի հարակից հասցեում, Լիանա Մանուկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող շինության տանիքի կառուցման աշխատանքներ', link: '' },
            { text: 'Նոր Նորքի 8-րդ միկրոշրջան հ․ 22 շենքի հ․1 բնակարան հասցեում, Լարիսա Եթարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, մետաղական թիթեղներով և կոնստրուկցիաներով իրականացրել է շվաքարանի կառուցման աշխատանքներ', link: '' },
        ]
    },
    shengavit: {
        title: "Շենգավիթ",
        texts: [
            { text: 'Պոպովի փողոց հ․23 բնակարան հասցեում, Սամվել Աթաբեկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Մադոյան փողոց հ․8/1 հասցեում, Ռուդոլֆ Մելիքյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է նախկինում գոյություն ունեցող պատշգամբի ապամոնտաժման և նոր պատշգամբի մետաղկան կոնստրուկցիայի կառուցման աշխատանքներ', link: '' },
            { text: 'Սևանի փողոց հ․2-րդ նրբանցք հ․30/2 հասցեում, Նազելինա Դանիելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան 2-րդ հարկի, նախկինում գոյություն ունեցող պատի ավելացման, քարե շարվածքի կառուցման աշխատանքներ', link: '' },
            { text: 'Շարուրի փողոց հ․37/33 հասեում,  «Ռոյալ Փրինթ» ՍՊԸ տնօրեն Հովհաննես Ամլիկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության, ինչպես նաև պահակակետի կառուցման աշխատանքներ', link: '' },
            { text: 'Արարատյան փողոց հ․53 տուն հասցեում, Սարգիս Տեր-Պետրոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է նախկինում գոյություն ունեցող պատերի քանդման և նոր քարե կառույցի իրականացման աշխատանքներ', link: '' },
            { text: 'Մանանդյան փողոց հ․14 շենքի հարևանությամբ, Գագիկ Պետրոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքի շինարարական աշխատանքներ', link: '' },
            { text: 'Կաշեգործների փողոց հ․229/2 հասցեում, Երվանդ Հակոբյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է նախկինում գոյություն ունեցող շինության քանդման, նույն տեղում նոր հիմքերի բետոնացման և քարե շարվածքի իրականացման աշխատանքներ', link: '' },
            { text: 'Ֆրունզեի փողոց հ․4/3 շենքի հ․51 ոչ բնակելի տարածք հասցեում, Կառլեն Թադևոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության ճակատային հատվածի վերակառուցման, մասնավորապես՝ պատի մասնակի քանդման և նոր ցուցափեղկի տեղադրման աշխատանքներ', link: '' },
            { text: 'Եղբայրության փողոց հ․14 շենքի հ․37 հասցեում, Վարուժան Վարդանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրելլ է հիմնական պատի քանդման և մուտքի կազմակերպման աշխատանքներ', link: '' },
            { text: 'Շիրակի փողոց հ․9/3 հասցեում, Միքայել Առաքելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության վերնահարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Չեխովի փողոց հ․15 շենքի հ․ 90 հասցեում, Աննա Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է հիմնական կրող պատի քանդման աշխատանքներ', link: '' },
            { text: 'Ներքին Չարբախ 9-րդ փողոցի հ․17/1 հասցեում, Վահրամ Զարգարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է պարսպի կառուցման աշխատանքներ', link: '' },
            { text: 'Նորագավիթ փողոցի հ․1/6 հասցեում, Հրաչյա Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության վերնահարկի կառուցման աշխատանքներ', link: '' },
        ]
    },
    erebouni: {
        title: "Էրեբունի",
        texts: [
            { text: 'Խորենացու փողոցի հ․219/11 հասցեում, Արսեն Բարսեղյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Նոր-Արեշ 50-րդ փողոց հ․47/3 հասցեում, Ասլան Թովմասյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է կցակառույց շինության հիմքերի բետոնացման, մետաղական դարպասների տեղադրման, կողային պատերի կառուցմա աշխատանքներ', link: '' },
            { text: 'Տիգրան Մեծի պողոտա հ․13 բնակելի տուն հասցեում, Նունե Մելքոնյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության արտաքին պատի վերակառուցման աշխատանքներ', link: '' },
            { text: 'Տիգրան Մեծի պողոտա հ․54/14 կաթսայատուն հասցեին հարակից, Արթուր Բակլաչյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է համայնքային նշանակության հողամասի զավթում, որը ծանրաբեռնված է մետաղական կրպակովղս', link: '' },
            { text: 'Արցախի փողոց հ․28/2 հասցեում, Անդրանիկ Հովակիմյանի լ/ա Արմեն Ջանինյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հեծանների կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Նոր Արեշ 12-րդ փողոց հ․23 հասցեում, Նելլի Հակոբյանի լ/ա Հովհաննես Դուրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, ինքնակամ շինության վրա իրականացրել է տանիքի կառուցման աշխատանքներ', link: '' },
            { text: 'Երկաթուղայինների 7-րդ փողոց հ․3 բնակելի տուն հասցեում, Սամվել Սարգսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է դռան բացվածքի և երկաթբետոնե աստիճանավանդակի, հիմնասյուների կառուցման աշխատանքներ', link: '' },
            { text: 'Լիսինյան փողոց հ․13 հասցեում, Անանիա Թագվորյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման, հիմքերի բետոնացման, կողային պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Քրիստափորի փողոց հ․10/2 հասցեում, հասարակական նշանակության շինության կառուցման համար 12․07․2019թ․ համաձայնեցված հ․01/18-05/1-Գ4225-632 նախագծի պահանջներից դուրս Գագիկ Գրիգորյանն իրականացրել է տանիքային հատվածում շինության և վերելակի հորի կառուցման աշխատանքներ', link: '' },
            { text: 'Արցախի փողոցի հ․20 շենքի հ․58 հասցեում, Հրանուշն (ազգանունը նշված չէ) առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է պատշգամբի ընդլայնման և դռան տեղադրման աշխատանքներ', link: '' },
        ]
    },
    nubarashen: {
        title: "Նուբարաշեն",
        texts: [
            { text: 'Նուբարաշեն 6-րդ փողոց հ․1/4 հասցեում, Մարինե Պարունակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շվաքարանի կառուցման, մետաղական ցանկապատի մոնտաժման շինարարական աշխատանքներ', link: '' },
            { text: 'Նուբարաշեն 11-րդ փողոց հ․14/1 հասցեում, Գեղամ Քերոբյանի լ/ա Աշոտ Քերոբյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է վերնահարկի կառուցման շինարարական աշխատանքներ', link: '' },
        ]
    },
    malatia_sebastia: {
        title: "Մալաթիա֊Սեբաստիա",
        texts: [
            { text: 'Սեբաստիա փողոց իհ․86 շենքին կից հասցեում, Կարեն Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով շվաքարանի հենակմախքի կառուցման աշխատանքներ', link: '' },
            { text: 'Շերամի փողոց հ․104/12 հասցեում, Խաչատւր Նավասարդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պատերի, մետաղական կոնստրուկցիաներով տանիքի, ցուցափեղկերի տեղադրման աշխատանքներ', link: '' },
            { text: 'Բ-2 թաղամաս հ․131/3 հասցեում, Կարեն Համբարձումյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Կուրղինյան փողոց հ․4/3 հասցեում, Նաիրա Լևոնյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության վերակառուցման, մասնավորապես՝ ցուցափեղկի բացվածքների իրականացման և տեղադրման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ 4-րդ փողոց հ․6 տուն հասցեում, Վազգեն Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է վերնահարկի կառուցման, մասնավորապես՝ դիմային և կողային պատերի իրականացման աշխատանքներ', link: '' },
            { text: 'Անդրանիկի փողոց հ․43 հասցեի հետնամասում, Արտակ Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պատերի կառուցման և մետաղական դարպասի տեղադրման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ թաղամաս 1-ին փողոց հ․1/184 հասցեում, Մարատ Նիկողոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հիմքի, կողային պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Շահումյան 4-րդ փողոց հ․45 բնակելի տանը կից, Սամվել Մանիջոյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պատի և երկաթբետոնե սյուների կառուցման աշխատանքներ', link: '' },
            { text: 'Րաֆֆու փողոց հ․91 շենքի հարևանությամբ, Արտակ Շահնազարյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Զոհրապի փողոց հ․1 բնակելի տուն հասցեում, Ջանիկ Հարությունյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է վերնահարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Օտյան փողոց հ․104 տան դիմաց, Հայկ Պողոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, գոյություն ունեցող ավտոտնակում իրականացրել է վերակառուցման, մասնավորապես՝ կողային հատվածի քարե շարվածքով պատի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Րաֆֆու փողոց հ․77/2 շենքի հ․3 տարածք հասցեում, Մանվել Մանվելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքի և մետաղական շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Կուրղինյան փողոցի հ․29 շենքի հ․4 բնակարանի բաց տարածք հասցեում, Վերգուշ Ավետյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Լենինգրադյան փողոցի հ․1/5 հասցեում, Ալեքսանդր Ղալաչյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով շվաքարանի կառուցման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ թաղամաս 2-րդ փողոց 3-րդ նրբանցք հ․ 5 հասցեում, Թամարա Ծառուկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան և սահմանազատող պարսպի կառուցման աշխատանքներ', link: '' },
            { text: 'Ամառանոցային թաղամաս հ․2-2 հողամաս հասցեում, Հասմիկ Նիկոյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով շինության պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Անդրանիկի փողոց հ․75/15 հասցեում, Նունե Ալեքսանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության 2-րդ հարկի քարե շարվածքով պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ տեղամաս հ․43 և հ․ 43-1ա հասցեում, Սեդրակ Սահակյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով շինության պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ թաղամաս հ․43-3 հասցեում, Աննա Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հիմքերի, կողաին պատերի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Անդրանիկի փողոց հ․58/2 հասցեում, Արման Հակոբյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով հենակմախքի կառուցման, շինության կողային և դիմային հատվածում քարե պատերի կառուցման, մետաղական տանիքածածկի տեղադրման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ տեղամաս հ․43 և հ․ 43-1ա հասցեի հողատարածքում, Լևոն Հակոբյանը, Շուշանիկ Սարգսյանը և Իրինա Գևորգյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել են բետոնե հիմքերի և քարե շարվածքով շինության պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ թաղամաս հ․49/7 հասցեում, առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացվել է շինության կառուցման,մասնավորապես՝ շինության հիմքերի, կողային պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Բաբաջանյան փողոցի հ․58/1 հասցեում, Արսեն Սարգսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե սյուների կառուցման աշխատանքներ', link: '' },
            { text: 'Ծերենցի փողոց հ․75/3 հասցեում, Արմեն Ալեքսանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան վերնահարկի կառուցման աշխատանքներ', link: '' },
            { text: 'Իսակովի պողոտայի հ․40 շենքի դիմաց հասցեում, Ահարոն Դանջելո-Լոցենկոն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է գոյություն ունեցող շինության վերակառուցման, մասնավորապես՝ կողային պատերի և տանիքածածկի մետաղական կոնստրուկցիաների կառուցման աշխատանքներ', link: '' },
            { text: 'Հաղթանակ 1-ին փողոց հ․1/26 հասցեում, Վահե Պետրոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է մետաղական կոնստրուկցիաներով շվաքարանի հենակմախքի կառուցման աշխատանքներ', link: '' },
            { text: 'Անդրանիկի փողոց հ․158/8 հասցեի շինությանը կից, Սյուզաննա Պետրոսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է կցակառույց շինության մետաղական հենակմախքի մոնտաժման, ծածկի տեղադրման, պատերի կառուցման աշխատանքներ', link: '' },
        ]
    },
    arabkir: {
        title: "Արաբկիր",
        texts: [
            { text: 'Հրաչյա Քոչար 13 շենքի հ․33 արվեստանոց հասցեում, Սաթիկ Սերյանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է հասարակական նշանակության տարածքը պատշգամբի վերակառուցման, ընդլայնման աշխատանքներ՝ կողային և դիմային պատերի կառուցմամբ և երեսպատմամբ', link: '' },
            { text: 'Բաբայան փողոց հ․36/6 հասցեում, Ռոժե Խոդավերդյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության հիմքի բետոնացման շինարարական աշխատանքներ', link: '' },
            { text: 'Այգեձորի փողոց 1-ին նրբանցք հ․22 շենք հ․83 ոչ բնակելի տարածք հասցեում, Սուրեն Խալաթյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, արտաքին պատի վրա իրականացրել է բացվածքի իրականացման և ցուցափեղկի տեղադրման աշխատանքներ', link: '' },
            { text: 'Թբիլիսյան խճուղի հ․․3/20 հասցեում, «ԿԱԷՌ ԲԻԼԴ» ՍՊԸ տնօրեն Կարեն Կարախանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է երկաթբետոնե հիմքերի, մետաղական կոնստրուկցիաներով շինության կառուցման աշխատանքներ', link: '' },            
            { text: 'Սևանի փողոց հ․11/1 հասցեում, Արտակ Խաչատրյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան մի հատվածի քանդման, նույն հատվածում քարե շարվածքով վերակառուցման աշխատանքներ', link: '' },
            { text: 'Թբիլիսյան խճուղի հ․27/9 հասցեին հարակից, Հայկ Զոհրաբյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է շինության տանիքի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Ազատության պողոտայի հ․7 հասցեում, «ԳՄՎ» ՍՊԸ տնօրեն Արեգ Միրիջանյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է քարե շարվածքով թվով 2 քարե օժանդակ շինության կառուցման աշխատանքներ', link: '' },
            { text: 'Բարբյուսի փողոց հ․62/1 հասցեում, 08․06․2020թ․ տրված հ․ 01/18-Ա-3590-679 շինարարության թույլտվությունը 25․09․2020թ․ հ․ՎԴ/4427/05/20 վարչական գործով կասեցվել է, սակայն Անթրանիկ Արթինն իրականացրել է միջհարկային ծածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Արաբկիր 21-րդ փողոց հ․ 28 բնակելի տուն հասցեում, 13․07․2020թ․ տրվել է հ․ 01/18-Մ-5085-34 քանդման թույլտվությամբ իրականացվող շինարարական աշխատանքների ընթացքում «2020 ԿՈՆՍՏՐՈՒԿՑԻՈՆ» ՍՊԸ տնօրեն Արտյոմ Օհանյանն իրականացրել է երկաթբետոնե հիմքերի և պատերի կառուցման աշխատանքներ', link: '' },
            { text: 'Բաղրամյան պողոտայի հ․49/1 հասցեում, ԱՁ Նարեկ Հելելյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է տաղավարի վերակառուցման, մասնավորապես՝ կողային հատվածում ցուցփեղկի տեղադրման աշխատանքներ', link: '' },
            { text: 'Շիրվանզադե փողոցի հ․24/30 շենքի նկուղ հասցեում, Մամիկոն Գևորգյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է հատակի նիշի իջեցման աշխատանքներ', link: '' },
            { text: 'Ղափանցյան փողոց հ․59/10 հասցեին կից, Սուրիկ Մանուկյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան կառուցման, մասնավորապես՝ քարե շարվածքով պատերի և տանիքածածկի կառուցման աշխատանքներ', link: '' },
            { text: 'Ղափանցյան փողոց հ․59/10 ամառանոց հասցեում, Հրանտիկ Հովհաննիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան կառուցման աշխատանքներ', link: '' },
            { text: 'Շրջանցիկ թունել հ․7/9 հասցեում, Մելիքսեթ Հարությունյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան կառուցման, մասնավորապես՝ քարե շարվածքով պատերի կառուցման շինարարական աշխատանքներ', link: '' },
            { text: 'Զարյան փողոցի հ․ 64/1 հասցեում, Նորայր Ներսիսյանն առանց համապատասխան քաղաքաշինական փաստաթղթերի, իրականացրել է բնակելի տան տանիքի վերակառուցման՝ ֆիզիկական չափերի փոփոխման, քարե շարցվածքի միջոցով պատի կառուցման, ինչպես նաև մետաղական կոնստրուկցիաներով հենակմախքի մոնտաժման, մետաղական թիթեղների տեղադրման շինարարական աշխատանքներ', link: '' },
        ]
    }

}
