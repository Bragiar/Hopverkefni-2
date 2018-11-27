# Hópverkefni 2

Unnið af:
- Arnari Inga Njarðarsyni
    - (ain1@hi.is)
- Árna Frey Magnússyni
    - (afm7@hi.is)
- Braga Arnarsyni
    - (bra26@hi.is)

## Upplýsingar um hvernig keyra skuli verkefnið

[Hér má nálgast verkefnið okkar: ](https://notendur.hi.is/bra26/vefforritun/Hopverkefni1/)

- Þrjú atriði sem við höfum ofarlega í huga við vinnslu verkefnisins.
  - Verkefnið sjálft felst í því að smíða prótótýpu af fyrirlestravef fyrir áfangann, Vefforritun 1.
  - Gögn sem notast er við í verkefninu byggjast á námsefni vetrarins.
  - Verkefni skal skilast snyrtilega af hendi.

Til þess að keyra verkefnið sjálft (án þess að smella á vefsíðuslóð) þá skal fylgja eftirfarandi skrefum. 

* Skal fara á gefna slóð verkefnisins okkar á github.com (https://github.com/Bragiar/Hopverkefni-2) sem inniheldur eftirfarandi tól:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

* Clone-a verkefnið.
* Setja upp: 
* `rollup` til að pakka saman JavaScript kóða.
  - Fyrir `rollup` gerir maður t.a.m. `npm install rollup` og þá fer `rollup` í `package.json` og í `node modules`. 
* `babel` til að _transpila_ kóða.


* Sækja þarf `node-modules` möppu sem inniheldur fjöldan allan af undirmöppum og skrám. Mappan fæst á vefslóðinni: https://nodejs.org/en/, svo hægt sé að keyra verkefnið með npm í `terminal` (fyrir Apple notendur)/`Command prompt` (fyrir Windows notendur).
  - Keyra skal verkefnið með npm skipunum í ofangreindum skelum með eftirfarandi hætti:
    - Komast í verkefnamöppu í skelinni. Því næst skal keyra verkefnið með: 
    - Fyrst: `npm install` og loks að lokum: `npm run dev`.

## Lýsingu á uppsetningu verkefnis

Hvað varðar innviði verkefnisins þá er skiptist bakendi verkefnisins upp í fimm möppur sem sumar skiptast upp í undirmöppur:
* `dist/` möppu sem er ekki gefin. Hún myndast við keyrslu `npm run sass` skipunina. Mappan inniheldur þrjár skrár:
  - `bundle.js`: Stór `.js` skrá sem inniheldur allar helstu grunnupplýsingar hvað varðar virkni og byggingu vefsins. `rollup` býr til þessa JavaScript skrá.
  - `bundle.js.map`: JavaScript skrá sem `rollup` býr til.
  - `styles.css`: `npm run sass` myndast við keyrslu þessarar skrá.

* `img/` mappa. Í henni má finna allar myndir sem við notum í verkefninu, 22 talsins. Þær koma frá eftirfarandi vefslóðum:
  - https://unsplash.com/photos/xekxE_VR0Ec
  - https://unsplash.com/photos/C4G18Paw0d4
  - https://unsplash.com/photos/iar-afB0QQw

* `node_modules/` möppu myndast þ.s. við höfum gefið `package.json`. Sláum inn `npm install` og þá hleðst allt úr `package.json` inn í `node_modules/`. Getum líka gert látið rollup inn í `node_modules`.

* `src` möppu sem er að vísu gefin. Hún inniheldur tvær möppur `lib` og `styles` og loks eina skrá `index.js` 

* `lib` mappa sem inniheldur tvær gefnar `.js` skrár og þrjár aðrar `.js` skrár sem við bjuggum sjálfir til. Skrárnar eru:
  - `content`: Skrá sem inniheldur hvað gera skal við ákveðna hluti innan verkefnisins t.d. ef smellt er á takka eða hversu stórt að stærð fyrirlesturinn sjálfur eigi að vera á fyrirlestrarvefsíðuni. 
  - `helpers.js`: Skrá sem er að hluta til gefin. Inniheldur fallið `empty(element)` sem var gefið. Bjuggum sjálfir til annað fall sem heitir `el(name,... children)`. Það er tekur inn nafn á elementi og börn ef send eru með inn. Að hluta til gefin skrá í verkefninu.
  - `filter`: Skrá fyrir takka. Stutt lýsing: Stjórnar því hvað gerist ef takkar eru toggled, untoggled, hidden og/eða unhidden á ákveðnum tímapunkti. Ekki gefin skrá í verkefninu.
  - `list.js`: Skrá sem skilgreinir hluti sem notaðir eru í HTML-inu t.d.
  - `storage`: Skrá sem hefur m.a. það hlutverk að sækja gögn og vista í localStorage

 * `styles`: Mappa sem inniheldur tvær gefnar `.scss` skrár og þrjár aðrar `.scss` skrár sem við bjuggum sjálfir til. Skrárnar eru:
  -  `config.scss`: Skrá sem inniheldur skilgreiningar á litum, gutter, hámarksleturstærð og leturgerð svo eitthvað sé nefnt.
  - `fyrirlestrar.scss`: Skrá inniheldur skilgreiningar sem varða stærð, lögun, bili og öðrum upplýsingum t.d. á tökkum á upphafssíðunni.
  - `fyrirlestur.scss`: Skrá sem inniheldur hvernig lögun hluta innan hvers fyrirlesturs er ásamt bili, lit o.fl.
  - `header.scss`: Skrá sem inniheldur upplýsingar varðandi stærð og gerð haus verkefnisins. 
  - `styles.scss`: Skrá sem skilgreinir grunnupplýsingar verkefnisins. Hámarksstærð mynda (.img) og grunnstærð almenns leturs.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS og JavaScript er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni
* Leyfilegt er að halda eftir þessari verkefnalýsingu en hún skal þá koma _á eftir_ ykkar lýsingu

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

Setja þarf upp

* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða

og bæta við í tól að ofan.

## Mat

* 30% - `README` eftir forskrift, tæki og tól uppsett. Snyrtilegt, gilt (skv. eslint) JavaScript. Snyrtilegt, gilt (skv. stylelint) CSS/Sass, gilt og aðgengilegt HTML. Git notað
* 30% – Yfirlitssíða með síu
* 30% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður

## Sett fyrir

Verkefni sett fyrir á Uglu föstudaginn 9. nóvember 2018.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 29. nóvember 2018, seinustu dæmatímar eru þann fimmtudag.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `gorri4`, `mimiqkz`, `hinriksnaer`, `gunkol`, `freyrdanielsson` og `osk`
* Slóð á verkefnið keyrandi á vefnum

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

## Myndir

Myndir frá:

* https://unsplash.com/photos/xekxE_VR0Ec
* https://unsplash.com/photos/C4G18Paw0d4
* https://unsplash.com/photos/iar-afB0QQw

---

> Útgáfa 0.2

### Útgáfusaga

| Útgáfa | Lýsing                                |
|--------|---------------------------------------|
| 0.1    | Fyrsta útgáfa                         |
| 0.2    | Setja inn auka efni í `lectures.json` |
