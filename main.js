const arrProducts=[
   {id:100,name:"Corona Extra",price:"10.90$",description:"Corona Extra Mexican Lager Beer",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/Uf19e57b665464ac6bfc4fd0c0d070deft.jpeg_300x300.jpeg",img:"https://s.alicdn.com/@sc04/kf/U6bb354edd1c84f13baa154a85639ce49e.jpg_300x300.jpg"},
   {id:101,name:"Carlsberg",price:"12.90$",description:"Probably The Best Beer In The World ",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U1c8a8a1174a04d169b00fe5fc95ff80eF.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U6a15adf4a6344b7a904dd5b0a60d9be6K.jpg_300x300.jpg"},
   {id:102,name:"Mont Des Cats",price:"9.90$",description:" Belgian Ale - Strong Pale ",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U6dcb12b84e6d4bd8990a0204e795e2a6a.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U09560b73079a47158b92071ae15be1ddR.jpg_300x300.jpg"},
   {id:103,name:"Peroni",price:"11.90$",description:"best beer in the world ",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/Ub8aef573ceda4108a8bc90152b625055j.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U1ba322caf63f44adb512873d7ca4fb80B.jpg_300x300.jpg"},
   {id:104,name:"Punk IPA",price:"15.90$",description:"best beer in the world ",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U6dd8c947629548ada59389e815612535U.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/Uf3f5d51f49f04217b4bebffa815b47d4S.jpg_300x300.jpg"},
   {id:105,name:"Weihenstephaner",price:"8.90$",description:"German Bavarian Beer",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U062b06cf6a9b45f689ec647760602df65.jpeg_300x300.jpeg",img:"https://s.alicdn.com/@sc04/kf/U5670d9b0b89c47e2b36b5fb64412be44s.jpg_300x300.jpg"},
   {id:106,name:"Heineken",price:"19.90$",description:"best beer in the world ",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U3012580e73214f848c82d37d64a1e256z.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U708da83e8d484de48adcae7f35394ddaR.jpeg_300x300.jpeg"},
   {id:107,name:"Miller Lite",price:"13.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:108,name:"Asahi",price:"11.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:109,name:"Skol",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},

   {id:110,name:"Harbin",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:111,name:"Guinness",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:112,name:"Carlsberg",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:114,name:"BrewDog",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:115,name:"Tsingtao",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:116,name:"Brahma",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:117,name:"Tecate",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:118,name:"Michelob",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:119,name:"Busch",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},

   {id:120,name:"Tuborg",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:121,name:"Estrella Damm",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:122,name:"Sabeco",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:123,name:"Saigon",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:124,name:"Amstel",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:125,name:"Aguila",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:126,name:"Tiger",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:127,name:"Antarctica",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:128,name:"Mahou",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:129,name:"Sapporo",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},

   {id:130,name:"XXXX",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:131,name:"Kingfisher",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:132,name:"Cass",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:133,name:"Yanjing",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:134,name:"333' export",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:135,name:"Baltika",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:136,name:"Dos Equis XX",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:137,name:"Castle",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:138,name:"Foster's",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:139,name:"Carling",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},

   {id:140,name:"Beck's",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:141,name:"Carling",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:142,name:"Tecate",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:143,name:"Carlsberg",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:144,name:"Harbin",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:145,name:"Skol",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:146,name:"Guinness",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:147,name:"Asahi",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:148,name:"Modelo",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:149,name:"Kirin",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},
   {id:150,name:"Snow",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},   
   {id:151,name:"Snow",price:"10.90$",description:"best beer in the world ",category:"beer",pic:"../IMG/beer-img/beer(2).png",img:"../IMG/beer-img/glass-beer.png"},


   
   {id:200,name:"Catena",price:"300.00$",description:"High altitude wine",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/U654b4f25734441ab8991f365826a4b19V.png_300x300.png",img:"https://s.alicdn.com/@sc04/kf/Ucf7ee113ca794c029979fb400c9e9cf6w.png_300x300.png"},
   {id:201,name:"Brano",price:"799.90$",description:"Italian DOCG wine",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/Uf6f42c77f36e4e1b9205ea6788dd69b1t.png_300x300.png",img:"https://s.alicdn.com/@sc04/kf/U6c25978068c74b49886f3f29aa175a9fp.jpg_300x300.jpg"},
   {id:202,name:"Henschke",price:"149.90$",description:"Henschke Henry's Seven",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/Ueea366a8148f4725bc22c094879466e3c.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U59a98caea7294ef89d5d051bf004fd02H.jpg_300x300.jpg"},
   {id:203,name:"Victoria",price:"150.90$",description:"the finest wines available to humanity",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/U2301d4756f934045b23207882f83d0c0q.png_300x300.png",img:"https://s.alicdn.com/@sc04/kf/U139bda11d9a74065ad17516d315afe529.jpg_300x300.jpg"},
   {id:204,name:"Penfolds",price:"80.90$",description:"the finest wines available to humanity",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/U517db6ddb06c428b8fde3a50adac1e2cS.png_300x300.png",img:"https://s.alicdn.com/@sc04/kf/Uacb0bb1f782f4e79a7f8ec8d962b5fdby.png_300x300.png"},
   {id:205,name:"CVNE",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/H347a52c349f946e89cec654b3632b37fP.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/H6c4f4dff92bb4ab8ab6f8b33d50129777.jpg_300x300.jpg"},
   {id:206,name:"Antinori",price:"56.90$",description:"the finest wines available to humanity",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/H20a47327d4f84b71a64dec7cd2d9917aj.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/H8d6c3c87ac424e5fa883a5dd7679f4c9a.jpg_300x300.jpg"},
   {id:207,name:"Miller Lite",price:"99.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:208,name:"Château",price:"15.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:209,name:"Skol",price:"73.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},

   {id:210,name:"Errazuriz",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:211,name:"Guinness",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:212,name:"Yalumba",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:214,name:"BrewDog",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:215,name:"Planeta",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:216,name:"Brahma",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:217,name:"Tecate",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:218,name:"Michelob",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:219,name:"Busch",price:"10.90$",description:"the finest wines available to humanity",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},

   {id:220,name:"Ridge",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:221,name:"Estrella Damm",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:222,name:"Sabeco",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:223,name:"Saigon",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:224,name:"Chapoutier",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:225,name:"Aguila",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:226,name:"Tiger",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:227,name:"Antarctica",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:228,name:"Mahou",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:229,name:"Ridge",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},

   {id:230,name:"XXXX",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:231,name:"Kingfisher",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:232,name:"Cass",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:233,name:"Yanjing",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:234,name:"333' export",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:235,name:"Baltika",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:236,name:"Dos Equis XX",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:237,name:"Castle",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:238,name:"Foster's",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:239,name:"Carling",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},

   {id:240,name:"Symington",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:241,name:"Carling",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:242,name:"Tecate",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:243,name:"Carlsberg",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:244,name:"Harbin",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:245,name:"Gaja",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:246,name:"Guinness",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:247,name:"Montes",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:248,name:"Modelo",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:249,name:"Nederburg",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},
   {id:250,name:"Esporão",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},   
   {id:251,name:"Esporão",price:"10.90$",description:"the finest wines available to humanity & wine glass",category:"wine",pic:"../IMG/beer-img/wine.png",img:"../IMG/beer-img/wine.png"},



   {id:300,name:"Jack Daniel's",price:"170$",description:"Tennessee whiskey",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/U1a24dd107023486ca20a7df92f647f1eu.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/Ub9f9de85670b493aaac1966106a6ce5fd.jpg_300x300.jpg"},
   {id:301,name:"Smirnoff",price:"10.90$",description:"Grain Spirit Vodka",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/Ufc39020255d14153b91fac7ef7821085S.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/Hac8999dab39044dfa8484a4ba6f0e996J.jpg_300x300.jpg"},
   {id:302,name:"Tesla Tequila",price:"10.90$",description:"de agava anajo",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/H5d4dcdc3f4a74652a94eb13bb2b6d419q.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/Hdbc84057575e4213851f97f2c36e8978m.jpg_300x300.jpg"},
   {id:303,name:"Hennessy",price:"10.90$",description:"Original Hennessy",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/U93462825625145aaa3f6e7eeb23df1c2m.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U77b49751919149cfaed54ab05ff4aff9y.jpg_300x300.jpg"},
   {id:304,name:"Johnnie Walker",price:"10.90$",description:" Blue Label whisky",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/Uf3e47b13c3704ce0912e111e3487c473O.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/Ueb506660c0514e198c49ec5b56d05afd8.jpg_300x300.jpg"},
   {id:305,name:"Bacardi",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/U7c72c24f05c74e51b81a1e227995db20L.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U1edd61c7a4b643d0be439b917ce5c8c10.jpg_300x300.jpg"},
   {id:306,name:"Jameson Irish",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/U75a0a2ed4de446858a7a21d24ebdcab4z.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U229c409affc44cafa47da269d67d9108I.png_300x300.png"},
   {id:307,name:"Chivas",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/HTB1qIWUatzvK1RkSnfoq6zMwVXaF.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/HTB1d5CNasfrK1RkSmLyq6xGApXa1.jpg_300x300.jpg"},
   {id:308,name:"Camarena",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:309,name:"Spirit",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},

   {id:310,name:"Caol Ila",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:311,name:"Corbin Cash",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:312,name:"Cruzan",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:314,name:"BrewDog",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:315,name:"Planeta",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:316,name:"Mezcales",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:317,name:"Aberlour",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:318,name:"1800 Tequila",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:319,name:"Absolut Vodka",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},

   {id:320,name:"Angel’s Envy ",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:321,name:"Appleton Estate ",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:322,name:"Sabeco",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:323,name:"Saigon",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:324,name:"Chapoutier",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:325,name:"Aguila",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:326,name:"Tiger",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:327,name:"Antarctica",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:328,name:"Mahou",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:329,name:"Ridge",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},

   {id:330,name:"Ardbeg",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:331,name:"Kingfisher",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:332,name:"Cass",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:333,name:"Yanjing",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:334,name:"333' export",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:335,name:"Baltika",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:336,name:"Dos Equis XX",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:337,name:"Castle",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:338,name:"Foster's",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:339,name:"Carling",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},

   {id:340,name:"Symington",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:341,name:"Carling",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:342,name:"Tecate",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:343,name:"The Balvenie",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:344,name:"Harbin",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:345,name:"Gaja",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:346,name:"Guinness",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:347,name:"Montes",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:348,name:"Modelo",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:349,name:"Nederburg",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},
   {id:350,name:"Bacardi ",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"},  
   {id:351,name:"Bacardi ",price:"10.90$",description:"American Amber Ale",category:"liquor",pic:"../IMG/beer-img/liquor.png",img:"../IMG/beer-img/liquor2.png"}, 



   {id:400,name:"Jumex",price:"$29.00",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Ueacde5347787433b990bb638a55a6c8fs.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U455a5f3f7c8340fb88df2daca1fb73b2V.jpg_300x300.jpg"},
   {id:401,name:"Finata",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/H56a183106be94abcae0772b1de975c2d7.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/H1738d2a639304dec95d942edf2bf850dc.jpg_300x300.jpg"},
   {id:402,name:"Aloe Vera",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Ha05d4854338d49969bd4ec3d222789aaZ.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/H6fa9b930b6984698b74e29f19b4b7fe5R.jpg_300x300.jpg"},
   {id:403,name:"Agua pe coco",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/U3995b327cbea4b99a4d1b8de210330e7c.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U88627e6bd33045f6ae87a925a4d819718.jpg_300x300.jpg"},
   {id:404,name:"Wana",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Ufddbf9e18ee243c5916ea38bc0784e76j.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U6be46a4a20824cba9757b794be49a558N.jpg_300x300.jpg"},
   {id:405,name:"Mott’s",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Ude4597450d2b40a7b5a4dfc4f633d73fg.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U46ccb388af904ff095fc55e0db6e34759.jpg_300x300.jpg"},
   {id:406,name:"Sula",price:"10.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/U0c3f27a0c4b24e118fd3a0f8ee6bc9eaI.jpg_300x300.jpg",img:"https://s.alicdn.com/@sc04/kf/U71750a2ac4144d9a87e3a3e7b8e6df49A.jpg_300x300.jpg"},
   {id:407,name:"Ceres Fruit Juices",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:408,name:"Del Monte",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:409,name:"Jumex",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},

   {id:410,name:"Shloer",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:411,name:"Capri Sun",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:412,name:"Cruzan",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:414,name:"BrewDog",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:415,name:"Planeta",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:416,name:"Mezcales",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:417,name:"Aberlour",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:418,name:"1800 Tequila",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:419,name:"Absolut Vodka",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},

   {id:420,name:"Angel’s Envy ",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:421,name:"Appleton Estate ",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:422,name:"Sabeco",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:423,name:"Saigon",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:424,name:"Chapoutier",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:425,name:"Aguila",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:426,name:"Tiger",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:427,name:"Antarctica",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:428,name:"Mahou",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:429,name:"Ridge",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},

   {id:430,name:"Ardbeg",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:431,name:"Kingfisher",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:432,name:"Cass",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:433,name:"Yanjing",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:434,name:"333' export",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:435,name:"Baltika",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:436,name:"Dos Equis XX",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:437,name:"Castle",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:438,name:"Foster's",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:439,name:"Carling",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},

   {id:440,name:"Symington",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:441,name:"Carling",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:442,name:"Tecate",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:443,name:"The Balvenie",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:444,name:"Harbin",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:445,name:"Gaja",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:446,name:"Guinness",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:447,name:"Montes",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:448,name:"Modelo",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:449,name:"Nederburg",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},
   {id:450,name:"Bacardi ",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"},  
   {id:451,name:"Bacardi ",price:"10.90$",description:"fruit juice",category:"extras",pic:"../IMG/beer-img/extras.png",img:"../IMG/beer-img/extras.png"}      
]
// let arrCART=[
//  {id:100,name:"Corona ",price:"10.90$",description:"Corona Extra Mexican Lager Beer",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U62f857cbb4fa4e82b76add1787f99403W.jpg_300x300.jpg"},
//  {id:201,name:"Brano",price:"799.90$",description:"Italian DOCG wine & wine glass",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/Uf6f42c77f36e4e1b9205ea6788dd69b1t.png_300x300.png" },
//  {id:300,name:"Jack Daniel's",price:"170$",description:"Tennessee whiskey",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/Ub9f9de85670b493aaac1966106a6ce5fd.jpg_300x300.jpg"},
//  {id:400,name:"Jumex",price:"29.90$",description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Hfeaf8c6446a44d999f00a6777e51033ap.jpg_300x300.jpg"}
// ];

const cityCards=[
   {
      pic:"https://cdn.pixabay.com/photo/2019/10/19/03/05/australia-canberra-4560441_960_720.jpg",
      city:"Australia",
      capital:"TSB Canberra",
      line:"CWSM is a speciality bottle store, offering Canberra District wines, spirits, beers and cider. With over 60 local wineries and 800 lines"
   },
   {
      pic:"https://cdn.pixabay.com/photo/2017/09/21/22/24/la-paz-2773765__340.jpg",
      city:"Bolivia",
      capital:"TSB La Paz",
      line:"Siga leyendo para descubrir el mejor lugar para tomar una copa en La Paz, la capital de facto de Bolivia"
   },
   {
      pic:"https://cdn.pixabay.com/photo/2017/05/30/04/36/volcano-2355772__340.jpg",
      city:"Costa Rica",
      capital:"TSB San Jose",
      line:"Centro Comercial La Paco Local 8 Carretera vieja a Sta Ana, frente a Chez Christophe Carretera JF Kennedy, San José, Escazú"
   },
   {
      pic:"https://cdn.pixabay.com/photo/2017/01/14/20/55/cairo-1980350__340.jpg",
      city:"Egypt",
      capital:"TSB Cairo",
      line:"تسوق المشروبات من أكبر تشكيلة من البيرة والنبيذ والمشروبات الروحية وأنواع المشروبات الكحولية في مصر"
   },
   {
      pic:"https://cdn.pixabay.com/photo/2020/10/31/00/06/tricycle-5700034__340.jpg",
      city:"Ethiopia",
      capital:"TSB Addis Ababa",
      line:"Rungo Liquor መደብር ፣ አዲስ አበባ ፣ ኢትዮጵያ። 205 መውደዶች · 1 ስለዚህ ጉዳይ ማውራት · 108 እዚህ ነበሩ። ወይን ፣ ቢራ እና መናፍስት መደብር።"
   },
   {
      pic:"https://cdn.pixabay.com/photo/2018/03/19/22/05/panoramic-3241421__340.jpg",
      city:"Israel",
      capital:"TSB Jerusalem",
      line:"חנות יין בוטיק מקוונת עם נגיעה אישית. יינן מקומי וטי אס בי יעזרו לך למצוא את היין הישראלי המושלם שלך."
   },
   {
      pic:"https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW4lMjB0b2t5b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      city:"Japan",
      capital:"TSB Tokyo",
      line:"東京では迷子になりやすいです。巨大な高層ビル、ネオンが灯る看板、フクロウとメイドカフェ、アニメショップがあります"
   },
   {
      pic:"https://images.unsplash.com/photo-1516630294856-68665df1db49?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxLT2lnZnRYWjZ6VXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      city:"Norway",
      capital:"TSB Oslo",
      line:" Leter du etter norsk brennevin? Hos TSB finner du en flott samling av norsk brennevin fra toppmerker som du kan få levert på døren"
   }
   
]
let cols=document.getElementsByClassName("cols");

for(let i = 0 ; i < cityCards.length; i++){
   cols[0].innerHTML+=`
   <div class="col" ontouchstart="this.classList.toggle('hover');">
   <div class="container">
     <div class="front" style="background-image: url(${cityCards[i].pic})">
       <div class="inner">
         <p>${cityCards[i].city}</p>
         <span>${cityCards[i].capital}</span>
       </div>
     </div>
     <div class="back">
       <div class="inner">
         <p>${cityCards[i].line}</p>
       </div>
     </div>
   </div>
 </div>
     `;
   };
 




function getProducts(array,section){
   for (let i = 0; i < array.length; i++) {
      section.innerHTML +=`
      <article class="con-pro">
      <img src="${array[i].pic}" alt="" class="pic ${array[i].name}">
      <img src="${array[i].img}" alt="" class="img ${array[i].name}">
      <h3>${array[i].name} ${array[i].category}</h3>
      <p>${array[i].price}</p>
      <p>${array[i].description}</p>
      <button type="button" class="btn ${array[i].name}">Add To Cart</button>
      </article>
      `}
       
  
}


function addItemToCart(arrBtn,arrItem){
   for (let i = 0; i < arrBtn.length; i++) {
      arrBtn[i].addEventListener("click",()=>{
         arrCART.push(arrItem[i]);
         console.log(arrCART);
      })
      
   }
}

function shortItemByCategory(category,array){
   for (let i = 0; i < arrProducts.length; i++) {
      if(arrProducts[i].category == category){
         array.push(arrProducts[i])
      }
      
   }
}




 
          

          
    
     
       
  



