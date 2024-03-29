# Hópverkefni 2

## Upplýsingar um hvernig keyra skuli verkefnið

[Smelltu hér ](https://notendur.hi.is/bra26/vefforritun/Hopverkefni2/index.html) til að komast á slóð verkefnisins keyrandi á vef.

- Þrjú atriði sem við höfum ofarlega í huga við vinnslu við verkefnið.
  - Verkefnið sjálft felst í því að smíða prótótýpu af fyrirlestravef fyrir áfangann, Vefforritun 1.
  - Gögn sem notast er við í verkefninu byggjast á námsefni vetrarins.
  - Verkefni skal skilast snyrtilega af hendi.

Til þess að keyra verkefnið sjálft (án þess að smella á vefsíðuslóð) skal fylgja eftirfarandi skrefum:

* Skal fara á gefna slóð verkefnisins okkar á github.com (https://github.com/Bragiar/Hopverkefni-2) sem inniheldur eftirfarandi tól:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með öllum sass skrám og `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `browser-sync` til að keyra verkefni, og vakta skrár
  - `rollup` til að þjappa öllum javascript skrám í eina möppu
  - `rollup-watch` til að fylgjast með breytingum á javascript skrám og þýða
  - `sass` til að keyra fyrstu þýðingu á sass skrám
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass`, `sass-watch`, `browser-sync` og `rollup-watch` allt saman

* Clone-a verkefnið.

* Sækja þarf `node-modules` möppu sem inniheldur fjöldan allan af undirmöppum og skrám. Mappan fæst á vefslóðinni: https://nodejs.org/en/, svo hægt sé að keyra verkefnið með npm í `terminal` (fyrir Apple notendur)/`Command prompt` (fyrir Windows notendur).
  - Keyra skal verkefnið með npm skipunum í ofangreindum skelum með eftirfarandi hætti:
    - Komast í verkefnamöppu í skelinni. Því næst skal keyra verkefnið með:
     - Fyrst: `npm install`.
     - Setja upp `browser-sync` með skipuninni `npm install browser-sync`
     - Svo að lokum þarf að keyra `browser-sync`með skipuninni `npm run browser-sync`.


## Lýsing á uppsetningu verkefnis

### Bakendi
Hvað varðar bakenda verkefnisins þá er skiptist hann niður í fimm möppur sem sumar skiptast niður í undirmöppur sem inniheldur hver sína skrá/skrár. Möppurnar fimm eru:

* `dist/`: `dist/` er mappa sem er ekki gefin, heldur myndast við keyrslu sass og/eða rollup og inniheldur samþjappaðan kóða sem fyrrnefndu forritin búa til. Mappan inniheldur þrjár skrár:
  - `bundle.js`: `rollup` sækir allar JavaScript  skrár verkefnisins úr /src/lib/ og þjappar saman í eina stóra bundle.js skrá sem vísað er til í HTML
  - `bundle.js.map`: skrá sem `rollup` býr til.
  - `styles.css`: Myndast við keyrslu `npm run sass`.
* `img/` mappa. Í henni má finna allar myndir sem við notum í verkefninu, 22 talsins. Þær koma frá eftirfarandi vefslóðum:
  - https://unsplash.com/photos/xekxE_VR0Ec
  - https://unsplash.com/photos/C4G18Paw0d4
  - https://unsplash.com/photos/iar-afB0QQw

* `node_modules/` er mappa sem myndast þ.s. við höfum gefið `package.json`. Sláum inn `npm install` og þá hleðst allt úr `package.json` inn í `node_modules/`. Getum líka gert látið rollup inn í `node_modules`.

* `src` möppu sem er að vísu gefin. Hún inniheldur tvær möppur `lib` og `styles` og loks eina skrá `index.js`

  - `lib/` mappa sem inniheldur tvær gefnar `.js` skrár og þrjár aðrar `.js` skrár sem við bjuggum sjálfir til. Skrárnar eru:
    - `content`: Skrá sem inniheldur hvað gera skal við ákveðna hluti innan verkefnisins t.d. ef smellt er á takka eða hversu stórt að stærð fyrirlesturinn sjálfur eigi að vera á fyrirlestrarvefsíðuni.
    - `helpers.js`: Skrá sem er að hluta til gefin. Inniheldur fallið `empty(element)` sem var gefið. Bjuggum sjálfir til annað fall sem heitir `el(name,... children)`. Það er tekur inn nafn á elementi og börn ef send eru með inn. Að hluta til gefin skrá í verkefninu.
    - `filter`: Skrá fyrir takka. Stutt lýsing: Stjórnar því hvað gerist ef takkar eru toggled, untoggled, hidden og/eða unhidden á ákveðnum tímapunkti. Ekki gefin skrá í verkefninu.
    - `list.js`: Skrá sem skilgreinir hluti sem notaðir eru í HTML-inu t.d.
    - `storage`: Skrá sem hefur m.a. það hlutverk að sækja gögn og vista í localStorage

  - `styles/`: Mappa sem inniheldur tvær gefnar `.scss` skrár og þrjár aðrar `.scss` skrár sem við bjuggum sjálfir til. Skrárnar eru:
    -  `config.scss`: Skrá sem inniheldur skilgreiningar á litum, gutter, hámarksleturstærð og leturgerð svo eitthvað sé nefnt.
    - `fyrirlestrar.scss`: Skrá inniheldur skilgreiningar sem varða stærð, lögun, bili og öðrum upplýsingum t.d. á tökkum á upphafssíðunni.
    - `fyrirlestur.scss`: Skrá sem inniheldur hvernig lögun hluta innan hvers fyrirlesturs er ásamt bili, lit o.fl.
    - `header.scss`: Skrá sem inniheldur upplýsingar varðandi stærð og gerð haus verkefnisins.
    - `styles.scss`: Skrá sem skilgreinir grunnupplýsingar verkefnisins. Meðal annars hámarksstærð mynda (.img) og grunnstærð almenns leturs.

 * `utlit/`: `utlit/` er fimmta og síðasta mappan. `utlit/` var gefin í upphafi verkefnis. Inniheldur skjáskot af verkefninu þegar það er opnað í misstórum gluggum. Verkefnið er ekki alltaf eins heldur aðlagar það sig að stærð gluggans.

 ### Framendi
 Framendin lýsir því hvernig notandinn býður notandans þegar hann opnar verkefnið. Framendin skiptist í tvennt, í forsíðu/fyrirlestrar og undirsíður/fyrirlestra.

 * Forsíða/Fyrirlestrar (`fyrirlestur.html`)
  - Forsíðan inniheldur haus. Hausinn inniheldur mynd í bakgrunn, heiti áfangans í hástöfum efst og nafnið síðunni sem í þessu tilfelli er: Fyrirlestrar.
  - Forsíðan inniheldur þrjá takka: HTML, CSS og JavaScript. Ef ekki er ýtt á neinn takka (líkt og verkefnið er upphafsstillt þá fást allir fyrirlestrarnir upp, þ.e. allir HTML fyrirlestrarnir, allir CSS fyrirlestrarnir o.s.frv.). Ef valin er eingöngu ein fyrirlestrategund svo sem CSS þá koma eingöngu CSS fyrirlestrar upp. Þannig að lokum má segja að forsíðan getur sett takmarkanir á hvað kemur upp.
  - Forsíðan inniheldur þrjár tegundir fyrirlestra: HTML, CSS og JavaScript. Þeir birtast fyrir neðan takkana.

* Undirsíður/Fyrirlestur.
  - Undirsíðurnar innihalda hver sinn haus. Hausinn inniheldur mynd í bakgrunn. Inniheldur heiti tegund fyrirlestur efst í hástöfum og heiti fyrirlestursins í feitletruðu- og stóru letri
  - Undirsíður eru allir þeir fyrirlestrar sem notandinn getur valið að horfa á. Fyrir neðan haus undirsíðunnar er fyrirlesturinn sjálfur (Talsettur) og fyrir neðan talsetta myndbandið er efni fyrirlestrarins skjalað og vel sett upp.

## Grunnupplýsingar

### Nafn og netfang höfunda

- Arnari Inga Njarðarsyni
    - (ain1@hi.is)
- Árna Frey Magnússyni
    - (afm7@hi.is)
- Braga Arnarsyni
    - (bra26@hi.is)
