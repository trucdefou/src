/*
 * SW9 content and renderer, extracted from SW9.html.
 * Must be loaded with a plain synchronous <script src> placed exactly where the
 * inline scripts were (after the #sw-sections marker and the #authors / #texte
 * lists, before jquery.js / plugins.js / init.js). No async or defer.
 */

		window.SW_AUTHORS = [
			{
				id: "iryna",
				name: "Iryna Tkachova",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/01/Iryna-Tkachova-Copyright-Privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: `Widersprüche und Gesetzmäßigkeiten gefallen mir am besten.
Oft beschreibe ich das, was unbemerkt bleibt.
Ich lerne Deutsch durch das Schreiben.`,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Liebe in Zeiten der Polykrise\"",
						title: "Liebe in Zeiten der Polykrise",
						category: "Liebe in Zeiten der Polykrise",
						body: `Die Nacht. Die Planetenparade wurde vom aufgewirbelten Staub und Rauch eines zerstörten Bahnhofs bedeckt. Die ohrenbetäubende Stille löste die verkrampften Kiefer aller Überlebenden. Keine Angst. Nur eine stumme Ruhe. Und völlige Gleichgültigkeit gegenüber der Zukunft. Niemand dachte daran, was nach dem Sonnenuntergang sein würde - und ob er für sie überhaupt kommen sollte.
Mama, existiert eine Zahnfee wirklich? Ist sie wirklich zauberhaft?, fragte leise ein sechsjähriges Mädchen in einem zerrissenen Kleid.
Ich denke schon, meine Liebe. Hast du Zweifel?
Aus Angst ist mir mein erster Zahn aufgefallen, aber ich bin mir nicht sicher, ob die Fee zu mir kommt. Hier ist es doch gefährlich. Ich mache mir Sorgen um sie.
Keine Sorgen, meine Kleine. Ein Wunder findet immer den Weg zu deinem Herzen – da bin ich mir sicher. Versteck deinen kleinen Zahnschatz und ruh dich dort unter dem Baum aus. Heute Nacht ist es warm, wir schaffen es ohne Decke.

…Inzwischen hatte sich der Rauch verzogen, und die Planetenparade leuchtete wieder am Nachthimmel. Im Mondlicht wurde deutlich, dass nichts von Menschenhand erschaffenes übrig war, nur ein Dutzend Überlebender. Wer oder wie sie erschaffen wurden, war unklar, doch sicher nicht mit Händen.

Trotz aller Absurdität wollte man lächeln, mit schmutzigen Handflächen über das staubige Gras streichen, sich tief in die Augen sehen und endlich das aussprechen, worüber man sonst schwieg. Niemand erinnerte sich in diesem Moment an Streite. Und obwohl der Nachbar die tausend Euro nicht rechtzeitig zurückgezahlt hatte, war es vollkommen gleichgültig. Darüber wollte man nicht sprechen. Jemand hustete, aber niemand fragte mehr nach einer Diagnose. Keiner sprach darüber, dass es morgen nichts zum Essen gäbe. Es war belanglos. Das Wichtigste war dieser Moment, den jeder wie den letzten erlebte. 

Als sich der Rauch vollständig verzogen hatte, schlief das Mädchen lächelnd und wartete auf die Zahnfee. Jemand drückte seinen Hund fester an sich als zuvor, noch jemand anderes lag im Gras, Arme und Beine von sich gestreckt, und zählte mit weit geöffneten Augen die Sterne. Jemand erinnerte sich an das Elternhaus, an die weichen Kissen im Dorf bei der Großmutter und an das kalte Wasser im Bach mitten im Wald… Früher hatte man nie Zeit dafür gehabt, es gab immer etwas zu tun, immer gab es Termine. Und jetzt war sie plötzlich da, diese Zeit, genau für all das. 

Die Luft in dieser Nacht war von Wärme und stiller Liebe durchtränkt. Nicht von der, die brennt und mit Leidenschaft erfüllt, sondern von jener, die sich leise auf die Schulter setzt und besser beruhigt als jedes Medikament. Die Fee, der Hund, die Eltern, der Bach – all das sind nur Objekte. Objekte einer Liebe, mit der es nicht beängstigend ist zu sterben, ohne die es beängstigend ist zu leben.

Und irgendwo unter dem Baum lag ein kleiner Zahn, sorgfältig versteckt. Niemand wusste, ob die Fee in dieser Nacht kommen würde. Aber das Mädchen lächelte im Schlaf – als ob sie sie längst zwischen den Planeten gefunden hätte.
`
					},
					{
						filterClass: "Text2",
						label: "\"Die Gegenwart beginnt dort, wo das Schreiben endet\"",
						title: "Die Gegenwart beginnt dort, wo das Schreiben endet",
						category: "Die Gegenwart beginnt dort, wo das Schreiben endet",
						body: `Siebenundzwanzig. Eins in zwei Minuten. Sie kennen ihre Zeit erstaunlich genau — sagte Gerald leise und beobachtete die fallenden Blätter der alten Eiche.


Die Sonne schien jetzt sanft und brannte nicht mehr. Die letzten Augustabende waren für Gerald immer etwas Besonderes. Er spürte in ihnen einen Übergang, in dem der heiße Sommer allmählich der herbstlichen Kühle wich.


An diesem Abend trank er einen Kräutertee, notierte Pläne und analysierte sein gelebtes Leben. Die Selbstreflexion über das Vergangene gleitete langsam in Ideen für die Zukunft über. Gerald war vollkommen in diesen Prozess vertieft, und nur die auf seinen Tisch fallenden Eichenblätter hielten seine Verbindung zur umliegenden Realität aufrecht.


Achtundfünfzig — dachte Gerald. — Sie fliegen aus der Vergangenheit in die Zukunft — zurück in die Natur — und er erstarrte für einen Moment.


Wenige Augenblicke später rannte Gerald mit einem Arm voller Blumen zu seiner Mutter, die er gestern nicht einmal zurückgerufen hatte.

— Hallo Mama. Die sind für dich. Einfach so, ohne besonderen Anlass. Ich weiß gut, dass du blaue Wiesenblumen immer geliebt hast.


Die Mutter lächelte verlegen, nahm den Blumenstrauß und fragte ironisch:
— Ich dachte schon, du hättest wegen deines unermüdlichen Schreibens alles um dich herum vergessen. Willst du ewig so weitermachen?


— Nein, Mama. Die Gegenwart beginnt dort, wo das Schreiben endet. Das habe ich heute verstanden.

Die Mutter lächelte wieder und entgegnete:
— Komm, iss deine Lieblingspfannkuchen mit Erdbeeren. Sie sind noch warm.
— Woher wusstest du, dass ich komme? Ich habe ja nicht einmal zurückgerufen.
— Ganz einfach. Ich lebe in der Gegenwart.
`
					}
				]
			},
			{
				id: "pourmohammad",
				name: "Elham Pourmohammad",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Elham-Copyright-privat.png",
				credit: "© Foto Privat",
				email: "",
				active: true,
				bio: `Elham Pourmohammad stammt aus dem Iran, wo sie Psychologie studierte und arbeitete. Schon früh entdeckte sie ihre Liebe zur Literatur und zum Schreiben. In ihren kurzen persischen Geschichten verbindet sie Alltägliches mit feinen, nachdenklichen Beobachtungen. Seit zwei Jahren ist sie Mitglied der Schreibwerkstatt Wiesbaden und wagt dort den Schritt, ihre Gedanken und Erzählungen auch in deutscher Sprache auszudrücken.`,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Die Entstehung einer Biografie an der Kaffeemaschine\"",
						title: "Die Entstehung einer Biografie an der Kaffeemaschine",
						category: "Die Entstehung einer Biografie an der Kaffeemaschine",
						body: `Sarah arbeitet in der Buchhaltung. Sie wurde direkt nach dem Studium in dieser
Firma angestellt . Obwohl sie allein lebt, reicht ihr Gehalt gerade so, um die
Lebenshaltungskosten für sich und ihre Familie im Ausland zu decken.
Ihre Garderobe ist zwar nicht neu, aber immer gebügelt und glänzend sauber.Sie
braucht nicht viele verschiedene Kleidungsstücke, trifft sich fast nie mit Freunden
und macht keine Ausflüge. Außer zur Arbeit geht sie nur manchmal an
besonderen Feiertagen ins Kino – allein.
Den kleinen Rest ihres Gehalts gibt sie für Bücher aus, Romane. Sie hat sich in
jede Figur in den verschiedenen Geschichten verliebt, sich wieder meist
unfreiwillig von ihnen getrennt und nächtelang geweint.Vielleicht ist deshalb ihr
blauer Blick nicht wie der einer jungen Frau zwischen zwanzig und dreißig,
sondern wie der eines Kriegssoldaten im Ruhestand – tief und weise.
Sie ist die beste Zuhörerin der Welt – ohne große emotionale Reaktionen. Man
beginnt ein kleines Gespräch, und nach zwei Stunden hat man ihr alles erzählt,
von Eheproblemen bis zu Bettgeschichten. Sie selbst schreibt jedoch lieber, als zu
reden. Immer wenn sie mit enormer Geschwindigkeit Zahlen tippt, denkt sie an
Buchstaben und Wörter, die sie stattdessen schreiben könnte – eine kurze
Liebesgeschichte oder einen Brief an die Liebe ihres Lebens, die sie nie hatte.

Das ist meine Kollegin Sarah oder Melanie oder Maria, wie ich sie mir vorstelle.
Ich nenne sie Sarah. Eigentlich habe ich sie nie nach ihrem Namen gefragt,
wir tragen keine Namensschilder in unserer Firma. Wir sehen uns nur jeden Tag
um elf Uhr bei der Kaffeemaschine zwischen dem ersten und dem zweiten Stock.
Wir lächeln uns an, während die Kaffeebohnen mit lautem Geräusch zerbrechen,
und hören zu, wie die Tropfen fein säuberlich in unsere Becher fallen. Dann gehen
wir wieder an die Arbeit. Ich hinauf, sie hinunter. Ohne ein einziges Wort zuagen.`
					},
					{
						filterClass: "Text2",
						label: "\"Anna und Lorenzo\"",
						title: "Anna und Lorenzo",
						category: "Anna und Lorenzo",
						body: `Anna stieg aufgeschrekr aus dem Auto und rannte durch die dunkle Gasse zum
Haus und das Auto bog mit hoher Geschwindigkeit um die Ecke und verschwand.
Als Anna die Tür öffnete, blieb sie vor Schreck stehen. Lorenzo saß mit seinem
Wodkaglas auf dem Holzstuhl gegenüber der Tür und starrte Ana an. Nach ein
paar unerträglich langen Minuten sagte Ana mit zitternden Lippen:
„Du hättest jetzt nicht zu Hause sein dürfen.“
Seit zehn Jahren verbrachte Lorenzo die Samstagabende bis zum Morgengrauen im
Spielcasino. Morgens nahm Anna seinen Jacke vom Boden, roch daran und legte
ihn wieder beiseite. Einmal, vor ein paar Jahren, hatte Lorenzo ihr gesagt, sie
könne mitkommen, wenn sie wolle – doch gleich danach hatte er gemurmellt, dass
dieses Viertel für eine feine Dame wie Anna sowieso nicht geeignet sei.
Lorenzo stellte sein Glas auf den Beistelltisch. Beide standen still und wortlos im
kalten, feuchten Flur, der wie in einem Gemälde von Caravaggio nur vom
Kerzenlicht erleuchtet wurde, und sahen sich an. Lorenzo dachte: Das Spiel ist aus.
Wir haben beide verloren.`
					}
					
				]
			},
			{
				id: "chernova",
				name: "Larysa Chernova",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/01/Larysa-Chernova-Copyright-Privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: `Larysa Chernova ist Kunsthistorikerin und Museologin. In der Ukraine hat sie viele Jahre im Museumsbereich gearbeitet und an zahlreichen Kultur- und Kunstprojekten mitgewirkt. Jetzt leitet sie Führungen in der Kunsthalle Mainz und im Museum Reinhard Ernst in Wiesbaden. Sie liebt die Literatur.`,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Alice beim Arzt\"",
						title: "Alice beim Arzt",
						category: "Alice beim Arzt",
						body: `Es war wieder ein sonniger Frühlingstag. Ein Tag, an dem die Luft, erfüllt vom
								Duft der Blumen, einen schwindlig macht.
								Doch Alice's Kopf dröhnte nicht wegen des Frühlingsduftes, sondern wegen
								qualvoller Kopfschmerzen. Schon den dritten Tag wachte sie auf mit den Worten
								„Was zum Teufel?“.
								Schließlich hielt ihr Mann es nicht mehr aus. „Schatz, geh zum Arzt.“
								Hmm, ein guter Ratschlag von jemandem, der noch nie beim Arzt war. „Ich
								schlafe einfach, dann geht alles wieder weg“, war seine typische Reaktion auf
								Schmerzen.
								Leider funktionierte diese fantastische Methode bei Alice nicht. Sie brauchte Zeit.
								Doch die hatte sie im Moment nicht, auf der Arbeit tobte ein Sturm, und ihr Handy
								wurde mit Nachrichten überflutet.
								„Du weißt doch, dass Ärzte eine reine Zeitverschwendung sind“, - sagte Alice und
								stöhnte erneut vor Schmerzen.
								"Na ja, gut, ich gehe", antwortete sie auf den flehenden Blick ihres Mannes,
								"vielleicht habe ich ja dieses Mal Glück."
								Vor dem Sprechzimmer des Neurologen saßen nur zwei Patienten. „Das ist ja
								komisch“, dachte Alice, „sieht aus, als ob heute ein Praktikant die Sprechstunde
								leitet, sonst kommt man bei denen ja gar nicht durch.“
								Als sie dann das Behandlungszimmer betrat, wurde sie nicht von einem
								Praktikanten, sondern von einer hageren, mittelalten Ärztin mit lebhafter Mimik
								und ruckartigen Bewegungen empfangen. Sie gestikulierte so lebhaft, dass Alice
								einen Moment lang den Eindruck hatte, sie hätte nicht zwei, sondern sechs Hände.
								„Was fehlt Ihnen? Setzen Sie sich!“ rief die Ärztin scharf. Ohne Alice Zeit zum
								Antworten zu lassen, fuhr sie fort: „Öffnen Sie den Mund und zeigen sie ihre
								Zunge. Warum ist die Zunge gelb?“, fragte sie streng.
								„Ich weiß nicht“, begann Alice, „vielleicht liegt es am Tee. Ich habe heute Morgen
								Tee getrunken ...“. Die Gesichtszüge der Ärztin verfinsterten sich, ihre schwarzen
								Augen schienen Alice zu durchdringen.
								„Ach, Sie trinken also Chefir?“, fragte sie mit heimlicher Schadenfreude.
								„Ist die etwa mit dem falschen Fuß...?“ - dachte Alice beiläufig.

								„Wie bitte? Ich trinke ganz gewöhnlichen schwarzen Tee“.
								Doch die sechsarmige Ärztin unterbrach sie unsanft und bombardierte sie mit
								weiteren Fragen.
								„Warum sind Ihre Augen rot? Nehmen Sie Drogen?“
								„Nein“, wollte Alice einwenden, doch es war offensichtlich, dass die Ärztin an
								ihren Antworten überhaupt nicht interessiert war.
								Plötzlich sprang sie auf Alice zu und rief: „Hast du dich mal im Spiegel gesehen?
								Dein Gesicht? Es ist nicht symmetrisch! Das ist ein Anzeichen für eine ernste
								Krankheit. Du musst sofort ins Krankenhaus!“ Sie blickte herrisch auf ihr Opfer.
								Alice stockte der Atem, sie brachte kein Wort heraus.
								Inzwischen drückte die Ärztin der schockierten Alice eine Überweisung in die
								Hand und schob sie flott zur Tür hinaus.
								Minutenlang stand Alice wie betäubt da. Ein Kloß steckte ihr im Hals, Tränen
								rannen über ihre Wangen, und Bruchstücke von Sätzen wie „schreckliche
								Krankheit“, „Krankenhaus“, „Drogen“, „schiefes Gesicht“ hallten in ihrem Kopf
								wider.
								Sie holte einen Spiegel hervor und betrachtete ihr Gesicht eingehend. Die Augen
								waren tatsächlich rot, und ob ihr Gesicht symmetrisch war, da war sie sich nicht
								mehr sicher.
								„Hab ich ein symmetrisches Gesicht?“, fragte sie ihren Mann am Telefon.
								„Und wunderschön!“ antwortete er.
								„Nicht schief?“
								„Schatz, du machst mir Angst. Ist alles in Ordnung? Wovon redest du?“
								„Nichts. Ich war beim Arzt und habe viel über mich selbst gelernt“, scherzte Alice
								und beruhigte sich etwas.
								"Hmm. Und deine Kopfschmerzen...??"
								Wow,- dachte Alice plötzlich, was, wenn das eine neue Behandlungsmethode
								wäre? Psychischer Druck und Manipulation, um den Patienten in einen
								Schockzustand zu versetzen, damit er vergisst, wegen welcher Symptome
								er eigentlich gekommen ist?“
								Entschlossen zerknüllte sie die Überweisung ins Krankenhaus und warf sie in den
								Müll.
								Draußen... schien die Sonne sanft, es duftete nach Veilchen...`
					},
					{
						filterClass: "Text2",
						label: "\"Weißes Blatt\"",
						title: "Weißes Blatt",
						category: "Weißes Blatt",
						body: `Vor ihr lag ein Blatt Papier, so weiß wie Schnee.

„Das ist eine Chance“, dachte Lida, „eine Chance, es endlich zu versuchen. Man sagt ja nicht umsonst: ‚Ein Neuanfang ist immer gut.‘“

Sie hatte so lange davon geträumt, sich aber nie getraut, den ersten Schritt zu tun.

"Du wirst keinen Erfolg haben! Du hast das nicht gelernt! Mach dich nicht lächerlich!“, ertönte plötzlich eine andere, scharfe Stimme.

"Warum sagst du das? Ich werde es einfach versuchen“, wandte Lida sanft ein. „Man sagt, man könne es intuitiv tun und müsse nichts wissen.“

Sie zog das Blatt näher an sich und erstarrte. "Wo soll ich nur anfangen?"

„Tja, siehst du, bei dir wird es nicht klappen“, quiekte die Stimme.

„Oh Gott, besser, ich denke an gar nichts“, sagte Lida und tauchte entschlossen ihren Pinsel in die rote Farbe.

"Und warum hast du die Rote genommen?“, fragte die bissige Stimme immer wieder.

Sie wusste es nicht. Vielleicht, weil es die leuchtendste Farbe der Palette war, die Farbe der Energie und des Lebens. Unerwarteterweise malte sie eine große Glasvase mit Früchten in die Mitte. Rotes Glas, durch das das Sonnenlicht scheint, hatte sie schon immer fasziniert.

"Deine Vase ist viel zu groß, wie willst du da eine Komposition gestalten?“, fuhr die Stimme genervt fort.

„Lass das“, winkte Lida scharf ab. 
„Ich bin selbst gespannt, was dabei herauskommt.“ 

Neben die Vase malte sie eine Orange. Es war ihre Lieblingsfrucht.
Dann erschien wie von selbst die Tischplatte, die Lida, ohne nachzudenken, gelb anstrich.
Der Raum wirkte sofort heller, und die Seele fühlte sich warm und sonnig an.

Doch gleichzeitig wirkte die Zeichnung luftlos und trocken. Und dann erschien auf der anderen Seite der Vase eine blau-weiße, durchbrochene Schachtel. Lida dachte nicht über ihren Zweck nach, ihre Hände malten einfach drauflos, und sie erfreute sich nun an der Harmonie der Farben.

Die piepsige Stimme verstummte überraschenderweise; wahrscheinlich erfand sie gerade eine neue kritische Rede.

Währenddessen zeichnete Lida oben auf das Blatt eine Ikone: die Jungfrau Maria mit Jesus. Möge sie das Haus und seine Bewohner beschützen. Daneben malte sie einen Teller mit einer Berglandschaft. Warum? Wusste sie noch nicht.

In der oberen rechten Ecke des Blattes erschien ein Fenster, durch das ein hoher Berg und einige vorbeifliegende Vögel zu sehen waren. 
„Nun, die Komposition nimmt Gestalt an“, lächelte Lida.

Um das Bild zu vollenden, wollte sie ein Ornament auf eine gelbe Tischdecke malen. Doch zu ihrer Überraschung zeichnete ihre Hand Kreise, die viel zu groß waren. „Oh, das sind ja Teller!“, rief Lida aufrichtig überrascht.

Und in diesem Moment wurde ihr bewusst, dass sie intuitiv am Vorabend von Ostern ein Osterstillleben gemalt hatte.

Nun sollten statt Früchten Ostereier in der Vase stehen. Und mit Vergnügen begann sie, die Form der Früchte in die Form der Eier zu verändern. Letztendlich ist es gar nicht so wichtig, was sich in der Vase befindet. 

Sie betrachtete ihre Zeichnung erneut aufmerksam.

Der Tisch ragte über den Rand des Blattes hinaus und bot somit Platz für viele Teller und Personen. Auch das Fenster. Es hätte noch viel größer sein können.

„Wie interessant“, dachte Lida. „Wie unerwartet neue Bedeutungen in einem Bild auftauchen können.“

"Und warum hast du einen Berg gezeichnet, dessen Gipfel nicht zu sehen ist?“, murmelte eine kaum hörbare Stimme.

„Ja, warum eigentlich?“, dachte Lida einen Moment nach. „Vielleicht, weil wir nie wirklich wissen, welches Ergebnis wir erzielen und welchen Gipfel wir bezwingen, wenn wir es nicht versuchen.“

Vor ihr lag nun ein ganz anderes Blatt, nicht mehr weiß, sondern voller Farben, Stimmungen und Bedeutungen. Ihre erste echte Kreation.`
					}
				]
			},
			{
				id: "babenko",
				name: "Olena Babenko",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Olena-Babenko-Copyright-privat.jpeg",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "\"EIN MOMENT DER MEDITATION\"",
						title: "EIN MOMENT DER MEDITATION",
						category: "EIN MOMENT DER MEDITATION",
						body: `Meine Nerven waren am Limit. Immer wieder hörte ich denselben Rat: „Meditier
doch mal!“ Eines Tages beschloss ich, es auszuprobieren.
Dafür musste ich eineinhalb Stunden früher als alle anderen aufstehen. Während die
Familie schläft, zieht niemand an einem oder stört - genau die richtige Zeit, um
Erleuchtung zu erreichen.
Gähnend, mit halb geschlossenen Augen, rollte ich meine Yogamatte aus und legte
ein kleines Kissen hin. Ich setzte mich. Beine im Lotussitz. Hände auf die Knie.
Finger in Mudrahaltung.
Ich schloss die Augen. Oh Gott, wie gut. Fast wie ein Nachtschlaf. Nur nicht
vergessen, das Frühstück zu machen.
Und da kam mir sofort ein Gedanke: "Man könnte ja jetzt schon den Brei kochen.
Während ich meditiere, ist er fertig. Zeit gespart."
Ich sprang auf und lief in die Küche. Herdplatte an, Kochtopf drauf, Brei rein.
Zufrieden kehrte ich zurück. Wieder hinsetzen. Lotussitz. Mudra. Augen zu.
Einatmen. Ausatmen.
Plötzlich ertönte ein klagendes „Miiiaaau!“ Dег Kater. Dieser Schmarotzer hatte
beschlossen, dass jetzt Frühstückszeit war. Ich ignorierte ihn.
"Ruhig... konzentriere dich auf den Punkt zwischen den Augen..."
- MIIIAAAAU!
Als würde er mir mit einem Bohrer ein Loch ins Gehirn machen, dieses Miststück!
"Verschwinde!"- zischte ich halb flüsternd, damit ja niemand aufwacht.
Aber nein. Wieder MIIIAAAAU!“ Jetzt war es kein Kater mehr. Es war ein Angriff
auf mein Nervensystem. Ich öffnete die Augen. Die Katze saß bereits vor dem
Kühlschrank und blickte mich an, als würde ich ihm Geld schulden.
"Na gut, na gut... Нimmeldonnerwetter!" Ich stand auf, gab ihm Futter und setzte
Kater vorsichtshalber nach draußen.
Zurück. Hinsetzen. Lotussitz. Mudra. Augen zu. Einatmen. Ausatmen. Man soll
Gedanken ziehen lassen wie Herbstblätter...Herbstblätter...
Übrigens, das Laub im Hof liegt immer noch da. Seit letztem Jahr.
Wieder abgelenkt. Atmen. Zählen.
Was war als Nächstes? Ach ja, man soll sich einen spirituellen Lehrer vorstellen.
Mein Gehirn suchte verzweifelt nach einem weisen Menschen... und präsentierte mir
das Gesicht des Lehrers meines Sohnes.
Ich riss die Augen auf. Nein. Nicht der. Den habe ich wirklich schon genug im echten
Leben gesehen. Zu viele Elterngespräche... Stopp. Nicht daran denken.

Blätter fallen. Gedanken fliegen. Fliegen...
Oh! Wir wollen ja in den Urlaub fahren – und die Tickets sind noch nicht gebucht!
Stopp! Nicht daran denken.
Einatmen. Ausatmen. Irgendetwas riecht verbrannt.
Ich öffnete die Augen. Der Brei! Ich sprang auf und rannte in die Küche.
Nun gab es verbrannten Brei zum Frühstück. Die Stimmung war endgültig ruiniert.
Also gut. Alle sagen, Meditation soll helfen. Ich muss es wohl nur richtig machen.
Ich lüftete den Raum, setzte mich wieder hin. Vielleicht lag es an der Position?
Man kann ja auch liegend meditieren...
Ich legte mich hin. Augen zu. Einatmen. Ausatmen...
Ich weiß nicht, wie lange ich meditierte, aber ich erinnere mich daran, dass ich mich
plötzlich erleuchtet und voller Energie sah... sogar Buddha persönlich berührte meine
Stirn und segnete mich...Er roch allerdings verdächtig nach dem Aftershave meines
Mannes.
Ich öffnete die Augen. Mein Mann. Er beugte sich über mich. Seine Hand lag leicht
auf meiner Stirn, als wollte er prüfen, ob alles in Ordnung ist. "Warum schläfst du auf
dem Boden? Geht es dir gut?" - fragte er liebevoll. Ich sah auf die Uhr und erschrak:
"Die Kinder müssen versorgt werden!"
Die Kinder sind längst in Schule und Kindergarten. Und das Frühstück steht auf dem
Tisch. Mach dir keine Sorgen,"- sagte er. Da bemerkte ich, dass ich zugedeckt war
und ein Kissen unter dem Kopf hatte. Ich blinzelte überrascht.
"Du hast so süß geschlafen,“ sagte mein Mann, „ich wollte dich nicht stören und habe
es dir ein bisschen bequemer gemacht."
Ich sah ihn an und musste lächeln. Meine Morgenmeditation hatte sich offenbar still
und heimlich in eine Luxus-Ruhe verwandelt.
"Nimm dir heute frei. Und bitte schlaf nicht mehr auf dem Boden. Bitte." ermahnte er
mich süß.
Ich sage euch: Meditation ist eine starke Sache. Nur eine Sitzung und schon habe ich
wunderbar geschlafen, und mein Mann ist noch fürsorglicher geworden.
Ich weiß nicht, ob ich es richtig gemacht...
aber mit dem Ergebnis bin ich sehr zufrieden!`
					},
					{
						filterClass: "Text2",
						label: "\"Unter einem Himmel \"",
						title: "Unter einem Himmel ",
						category: "Unter einem Himmel ",
						body: `Unsere Stimmen klingen verschieden:

sanft... laut...

melodisch... schnell.



Unsere Gesichter sind unterschiedlich.

Unsere Haut hat verschiedene Farben.

Unsere Bräuche, Lieder und Träume sind verschieden.

Wir kommen aus vielen Kulturen,

und alle fließen wie kleine Bäche in einen großen Fluss der Welt.



Wir sind aus verschiedenen Teilen der Erde hierhergekommen.

Von heißen Ebenen,

aus großen Städten oder kleinen Dörfern,

von wilden Meeren oder stillen Flüssen.



Manche kamen, weil sie Abenteuer suchten.

Andere suchten Sicherheit.

Wieder andere folgten einem Traum von einem besseren Leben.



Und jetzt — sind wir hier.

Zusammen.

In diesem Moment.

An diesem kleinen Punkt

auf der großen Weltkarte



Wir sind verschieden.

Aber es gibt etwas, das uns verbindet,

etwas, das größer ist als all unsere Unterschiede.

Etwas, das stärker ist als alle Grenzen.



Wir sind Kinder der einzigen Erde.

Unserer Erde.



Wir leben unter einem Himmel.

Atmen dieselbe Luft.

Schauen auf dieselbe Sonne.

Sehen dieselben Sterne.

Weinen, wenn wir traurig sind,

und lachen, wenn wir uns freuen.



Unsere Herzen — so verschieden sie sind —

schlagen zusammen,

wenn wir Schmerz fühlen,

Hoffnung erleben,

oder Liebe spüren.



Wir sind verschieden.

Aber wenn wir unser Herz öffnen,

sehen wir keinen Fremden mehr.

Wir sehen einen Menschen.



Vielleicht sieht er anders aus,

aber innen ist er wie wir.



Er hat eigene Träume.

Einen eigenen Weg.

Ein eigenes Licht in sich.



Wir erkennen:

Er schreibt seine eigene Geschichte —

und wird Teil unserer gemeinsamen Geschichte.



Wir sind verschieden,

doch das soll uns nicht trennen.

Denn die wahre Schönheit des Lebens

liegt in seiner Vielfalt.

Und die wahre Stärke der Menschheit

liegt in unserer Einheit —

im großen Herz, das fühlen kann.`
					}
				]
			},
			
			{
				id: "fardpour",
				name: "Maryam Fardpour",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Maryan-Copyright-privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [{
					filterClass: "Text1",
					label: "\"Wunderbar wichtig\"",
					title: "Wunderbar wichtig",
					category: "Wunderbar wichtig",
					body: `Vielleicht das eigene Leben, oder das einer/eines Geliebten!
Ich frage mich, ob es noch etwas anderes gibt... noch wunderbarer,
noch wichtiger...
Ja — die Gesundheit!
Die eigene, oder die einer Geliebten!
Der/die/das ... das eigene ... oder das einer/eines Geliebten ...
Heureka!
Die Liebe!
Die Liebe ist das Wunderbarste überhaupt!`
				},
				{
					filterClass: "Text2",
					label: "\"Fiktionale Biografie\"",
					title: "Fiktionale Biografie",
					category: "Fiktionale Biografie",
					body: `Sie schaute mit frisch geschminkten Augen aus dem Fenster.
Es war Vollmond und überall war es hell.
Sie hat mir alles erzählt und ich konnte ihre Freude spüren, wie in
allen vorherigen vierzig Wochen.
Das war die Zeit...
Sie berührte mich mit ihren winzigen Fingern, als sie auf dem Bett lag
und anfing, für mich zu singen.
Weniger als zwei Stunden später war ich da – am Anfang meiner
Biografie...`
				}]
			},
			{
				id: "krugmeister",
				name: "Dünya Krugmeister",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Duenya-Copyright-privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [{
					filterClass: "Text1",
					label: "\"Tabu für Störche\"",
					title: "Tabu für Störche",
					category: "Tabu für Störche",
					body: `Die Federviehfamilien gehen vor das Gericht der Federtiere.
Vater Storch klagt vor Richter Storch:
„Die Menschen auf der Erde vertragen uns nicht.
Sie mischen sich in unsere Angelegenheiten ein.
Sie versuchen uns zu vergiften.
Wir bauen unsere Nester auf den Strommasten der Menschen,
weil wir Familien gründen wollen.
Aber was machen die Menschen mit uns?
Sie zerstören unsere Nester, legen Kugeln hinein und argumentieren:
„Die Stromleitungsmasten sind eine Gefahr für die Storchenfamilien!“
Die Menschen auf der Erde wollen mit uns Krieg führen.
Sie vergiften das Ackerland.
Und wenn wir uns auf ihren Dächern erleichtern, wollen sie uns töten.
Wir sind Federvieh aus verschiedenen Volksstämmen.
Wir haben auch unsere Bedürfnisse:
wir wollen essen, trinken, Liebe haben, Sex machen.
So ist das.`
				},
				{
					filterClass: "Text2",
					label: "\"WEISSES BLATT\"",
					title: "WEISSES BLATT",
					category: "WEISSES BLATT",
					body: `Hallo, hallo liebe Weltbürgerinnen und -bürger.
Ich bin ein einzelnes weißes Blatt Papier auf einem Block,
entstamme der Natur und wurde aus Bäumen gemacht.
Ich bin für die Weltbürgermenschen ein wichtiges Material,
das sie für ihren geistigen Fortschritt benutzen können.
Sie brauchen mich auch auf der Toilette.
Künstler mich, um zum Beispiel ein Bild zu malen
und es an ihre Wand zu hängen.
Andere brauchen mich, um darauf ihr Examen zu schreiben und es
später auch an die Wand zu hängen.
Die Bildung des Weltbürgermenschen ist abhängig von weißem Papier
und von Tinte, und sie benötigen das weiße Blatt, um ihr Leben
zu gestalten, denn sie benutzen mich täglich um auf mir Termine
und Notizen zu machen, ein Arzt zum Beispiel.
Aber auch in der Schule, auf der Arbeit, beim Geburtstag oder der
Trauung und im Urlaub werde ich gebraucht.
Die Weltbürgermenschen wollen sich verständlich machen und
schreiben oder malen auf viele weiße Blätter.
So ist das.
Viele Grüße von ihrem weißen Blatt.`
				}]
			},
			
			{
				id: "rovcanin",
				name: "Saida Rovcanin",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/01/Saida-Rovcanin-Copyright-Privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Arbeit, Liebe, Wissen \"",
						title: "Arbeit, Liebe, Wissen",
						category: "Arbeit, Liebe, Wissen",
						body: `Ein Jahr in Serbien, ohne Job,
doch gab ich nicht auf, ich bleib am Prob ́
B1 bestanden, das Visa in der Hand,
jetzt wartet Deutschland, ein neues Land.
Um sechs Uhr steh ́ ich auf, noch halb im Traum,
weiß kaum, ob Tag oder Nacht ist im Raum.
Doch alles ist gut, ich geb nicht klein bei,
und Mayr mit O.
Auf meiner Arbeit bin ich der Star,
bei den Kindern seh ́ ich immer ganz klar.
Wenn ich den Raum betrete, schreien sie laut,
sie lachen, sie rennen, ich fühl mich vertraut.
Die Liebe zu den Kindern, das ist mein Preis,
jede Umarmung mit ihnen, macht mich ganz heiß.
Und wenn der Tag mal schwer gewesen ist,
füllt ihr Lächeln meine Seele mit Licht.
Im April steht C1 auf dem Dach,
zwei Jahre in Deutschland und ein Vertrag in Sicht,
doch ich warte sehnsüchtig auf „Deutsch – Pass – Grün – Licht“.

Ich bin stark, mach immer weiter,
trotz allem Stress steig ich die Leiter.
Mit Liebe und Wissen im Gepäck,
geht jeder Tag bei mir perfekt.
Die Kinder lachen, rennen und schreien,
doch ihre Liebe lässt mich nicht allein.
Kolleginnen, Eltern, alle sind da,
und stark bin auch ich, das ist wahr.`
					}
				]
			},
			{
				id: "izvarina",
				name: "Mila Izvarina",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/07/Mila-Copyright-privat.png",
				credit: "© Foto privat",
				email: "izvarinamila26@gmail.com",
				active: true,
				bio: `Ich wurde in der Ukraine geboren und bin Ingenieurin von Beruf. Ich habe Jobserfahrung in verschiedenen Bereichen wie der Arbeit mit Ton in einer Keramikwerkstatt, als Angestellterin eines pharmazeutischen Lagers, als Heizungsingenieurin. Neugier ist mein Charakterzug. Ich habe ein ständiges Interesse an allen Kunstformen`,
				texts: [
					{
						filterClass: "Text1",
						label: "\"TEXT OHNE TITEL \"",
						title: "TEXT OHNE TITEL",
						category: "TEXT OHNE TITEL",
						body: `Dieser Frühlingstag hatte vermutlich schon in der Nacht begonnen, einer Nacht, die Ruhe und Harmonie atmete. Der Sternenhimmel funkelte klar und voller Erwartung auf den Sonnenaufgang. Heute gab es keine Bombardierungen, und das kleine Dorf bei Kiew konnte ruhig schlafen.
Maxim, vor kurzem 24 geworden, ein junger IT-Ingenieur, der seit zwei Jahren lebt  zusammen mit seinem Hund am Rand dieses Städtchens  und online arbeitet. Seine Freundin ist Journalistin ,sie lebt und arbeitet in Kiew. 
Er spricht mehrere Fremdsprachen, sogar Chinesisch. Er hat viele Hoffnungen, Ideen und Pläne, aber nicht alles ist logisch… "ich kann – ich will – ich will nicht – ich liebe – ich hasse…" Er hat das Gefühl, dass der Zufall die Welt steuert.Sein Land befindet sich im Krieg mit Russland, das einen brutalen und ungerechten Kampf gegen die Zivilbevölkerung führt. 
Heute verließ er früh das Haus, um notwendige Einkäufe zu erledigen. Er ging langsam durch den Park, bewunderte die satten Farben der erwachenden Natur, und dachte daran, wie schön es sich anfühlt, Mensch zu sein und Teil dieser Welt.
So vor sich hergehend bemerkte er auf einer Bank eine Frau und ihre
16-jährige Tochter mit Down-Syndrom. Das Mädchen war sehr lebhaft, lächelte und wirkte hilflos. Sie begrüßten einander, und als Maxim an ihnen vorbeiging, sprang sie plötzlich auf und lief ihm entgegen, die Arme ausgebreitet.
Ihre Augen leuchteten vor Bewunderung:
 “Darf ich dich umarmen? Du bist so schön…“
Ein Kloß steckte ihm im Hals. Das Mädchen schloss die Augen vor Glück, als er sie umarmte. Einige Sekunden lang herrschte Stille, nur der Wind bewegte die Blätter auf den Bäumen. Die peinlich berührte Mutter rief ihre Tochter zurück. Maxim aber lächelte und ging weiter, erschüttert und auch ein bisschen  glücklich zugleich. Tränen standen ihm in den Augen…Er dachte an seine Mutter und daran, dass er seine Eltern schon lange nicht mehr gesehen hatte. Der Krieg hatte viele Familien getrennt…
In der Ferne waren Sirenen zu hören und dumpfe, entfernte Explosionen.
Als er den Einkaufsladen verließ, schien es ihm für einen Moment, als würde das Licht ausgehen. Militärangehörige vom Rekrutierungsbüro kontrollierten die Dokumente aller Männer im wehrfähigen Alter… wer sie nicht hatte, wurde mitgenommen…
Das war etwas, wovor er  Angst hatte und hoffte, dass es nicht passieren würde. Aber er sah dem Soldaten in die Augen - und machte er einen Schritt nach vorn...
`
					},
					{
						filterClass: "Text2",
						label: "\"Hering\"",
						title: "Hering",
						category: "Hering",
						body: `Wir wohnen in einer ziemlich netten Fünfzimmer-WG im Stadtzentrum. Fünf Zimmer, fünf Personen, fünf alleinstehende Erwachsene: drei Frauen und zwei Männer.
Wir sind sehr unterschiedlich – Vertreter verschiedener Länder, Kulturen und Altersgruppen.In den letzten drei Jahren  haben wir schon einige Mitbewohner kommen und gehen sehen.  Wir  haben uns  bereits ein wenig kennengelernt und leben derzeit eher in parallelen Welten.
Früher war die Atmosphäre in unserer Wohnung lebhafter und wärmer. In der Küche hörte man oft laute Gespräche in einem wilden Mischung lern-deutsche und englischer Sprache und natürlich viel Gelächter. Es gab aber auch Streit, Geschrei, Drohungen und sogar Einsätze mit Polizei und Krankenwagen… Das alles gehörte dazu – und ja, es gibt etwas, an das man sich erinnern kann.
Jetzt ist alles anders... Wir gehen uns nicht auf die Nerven, aber wir sprechen auch weniger miteinander – entsprechend verstehen wir uns auch weniger... Der Hauptgrund war meiner Meinung nach – wie so oft – der Müll und die Reinigung der Gemeinschaftsflächen. Manche Menschen neigen dazu zu denken, dass sie am wenigsten kochen oder z.b. die Toilette benutzen… Schließlich musste sogar der Vermieter eingreifen und einen regelmäßigen Putzplan erstellen. Doch die Atmosphäre blieb kühl und angespannt. Und vor diesem Hintergrund geschah folgende Geschichte.

Eines Tages kam ich mit Einkäufen nach Hause und wollte die Lebensmittel schnell im Kühlschrank verstauen. Auf meinem Regal herrschte totales Chaos, also beschloss ich, sofort Ordnung zu schaffen. Einen Teil  Produkten stellte ich auf den Tisch. In einer Hand hielt ich eine Plastikbox mit Hering – genauer gesagt, die halbe Packung. Mit der anderen Hand räumte ich die Einkäufe aus der Tasche. Der Hering störte mich offensichtlich, also stellte ich ihn für ein paar Minuten auf das obere Regal, das meinem Nachbarn Thomas gehört – einem ehemaligen Soldaten des Bundeswehr im Vorruhestand. Übrigens ist er ein Mensch mit often  Stimmungsschwankungen… Sie kennen doch diesen Typ Mensch. ..Im Grunde ist er nicht schlimmste Mensch, zeigt aber ab und zu  seine Unzufriedenheit mit der Welt und dem Lauf der Dinge.
Ich räumte alles ein, schloss den Kühlschrank und betrat an diesem Tag die Küche nicht mehr.
Am nächsten Tag gegen Mittag war ich zu Hause und wollte mir einen kleinen Snack machen: Brot, Käse, Wurst, Hering, Tee…
Ich öffnete den Kühlschrank – und für paar Sekunden erstarrte.
Das Erste, was mir ins Auge fiel: meine leere, sorgfältig ausgespülte Box vom Hering stand ganz oben auf dem Regal der Chinesin Helen. Und da erinnerte ich mich: Thomas!... Ich hatte gestern den Hering auf sein Regal gestellt. Mein Gott – was bedeutet das? Mein erster Gedanke war, dass er gestern  schlechte Laune hatte  und meinen wunderbaren Hering in den Biomüll geworfen hatte – und die schöne Box einfach auf den Tisch geschmissen hatte…
Aha..Vielleicht Helen hatte sie gewaschen und für sich genommen – damit eine gute Sache nicht verloren geht... Ich stand da und dachte: Nichts Schlimmes, natürlich… Nur schade um das leckere, gesunde Produkt, das im Müll gelandet ist…
In diesem Moment ging plötzlich die Küchentür auf, und Thomas kam herein. 
Wir begrüßten uns. ..Er ging ebenfalls zum Kühlschrank. In seiner Hand hielt er eine Tafel Schokolade, die er sicher in meine leere Box legte, die nun auf Helens Regal stand.
Ich habe  ein Mut gemacht und sagte:
-„Sorry, ich habe gestern hier sauber gemacht und aus Versehen den Hering auf dein Regal gestellt – und es dann komplett vergessen…“
-„Ach so ist das! Dann ist das für dich“, sagte er und reichte mir die Tafel Schokolade mit großen Nüssen.  „Ich dachte, das sei ein Geschenk von Helen.“
         *Ich muss sagen,  früher  war es so, dass wir uns gegenseitig kleine    essbare Geschenke im Kühlschrank hinterließen.

Erleichtert sagte ich: „Puh,Tom, ich bin froh, dass du ihn nicht weggeworfen hast.“
-„Was denn! Der war sehr lecker“, antwortete er und bedankte sich noch einmal lächelnd.
Die Schokolade mit den großen Nüssen gab ich schließlich Helen – sie macht gerade eine Ausbildung und ist oft sehr müde. 
Große Nüsse mag ich einfach nicht besonders.`
					}
				]
			},
			{
				id: "zelenskovska",
				name: "Olga Zelenskovska",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/olha.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "Wunderbar wichtig",
						title: "Wunderbar wichtig",
						category: "Wunderbar wichtig",
						body: `An diesem Abend, zwischen leisen Stimmen und dem Duft von Kerzenlicht, frage ich mich: Was ist im Leben wirklich wunderbar wichtig?

Sind es die großen Erfolge, die glänzenden Momente, die uns Applaus schenken? Oder sind es die leisen Augenblicke, die kaum jemand bemerkt – ein warmes Lächeln, eine sanfte Berührung, ein ehrliches Wort?

Für mich ist wunderbar wichtig das, was unser Herz zum Klingen bringt.

Es ist die Liebe, die uns trägt, auch wenn der Weg steinig wird.

Es ist die Hoffnung, die wie ein kleines Licht in der Dunkelheit brennt.

Es ist der Mut, morgens aufzustehen und an sich selbst zu glauben.

Wunderbar wichtig sind nicht die Dinge, die wir besitzen, sondern die Gefühle, die wir teilen. Ein Gespräch unter Sternen. Ein Blick, der mehr sagt als tausend Worte. Das leise Versprechen:

„Ich bin da.“

Manchmal vergessen wir im Lärm der Welt, wie kostbar das Einfache ist. Doch gerade im Alltäglichen versteckt sich das Wunderbare. In einem Sonnenaufgang. Im Lachen eines Kindes.

Im stillen Frieden eines Moments, der nur uns gehört.

Und vielleicht liegt das Allerwichtigste noch tiefer.

Vielleicht ist wunderbar wichtig das, was bereits in jedem von uns lebt:

diese stille Tiefe,

diese innere Schönheit,

dieses feine Gespür für das Wunderbare.

Die Fähigkeit, einen Augenblick wirklich zu fühlen.

Die Sensibilität, das Leise zu hören.

Die Offenheit, das Leben nicht nur zu sehen, sondern es bewusst wahrzunehmen.

Denn das Wunderbare kommt nicht von außen.

Es beginnt in uns.

Wunderbar wichtig ist das, was bleibt, wenn alles andere vergeht:

Liebe. Vertrauen. Menschlichkeit.

Und die leuchtende Tiefe unserer eigenen Seele.

Und vielleicht ist es genau das, was unser Leben nicht nur bedeutend, sondern wirklich

wunderbar macht.`
					},
					{
						filterClass: "Text2",
						label: "Fiktive Biografie",
						title: "Fiktive Biografie",
						category: "Fiktive Biografie",
						body: `Ich möchte gerne eine Biografie über Lena Morgenstern vorstellen.

Sie ist in einer kleinen Stadt am Meer geboren, wo der Wind Geschichten erzählt und jeder

Sonnenaufgang ein neues Versprechen war. Schon als Kind liebte sie es, Menschen zu

beobachten und sich vorzustellen, welche Wege ihr Leben nehmen würde.

Nach der Schule verließ sie ihre Heimat, um die Welt zu entdecken. Sie lebte in verschiedenen

Ländern, arbeitete als Übersetzerin, Reiseautorin und manchmal einfach als Zuhörerin in

kleinen Cafés. Jede Begegnung brachte ihr eine neue Perspektive und lehrte sie, dass Heimat

nicht ein Ort, sondern ein Gefühl ist.

Mit dreißig Jahren zog sie in eine alte Stadt voller Geschichte und Musik. Dort begann sie, alte

Briefe und vergessene Geschichten zu sammeln und daraus Romane zu schreiben. Ihre Bücher

handeln von Mut, Verlust und der leisen Hoffnung, die Menschen auch in schwierigen Zeiten

begleitet.

Heute lebt sie in einem Haus mit großen Fenstern, vielen Büchern und einer Katze namens

Maja. Sie glaubt daran, dass das Leben kein gerader Weg ist, sondern ein Mosaik aus Zufällen,

Träumen und Entscheidungen. Und sie ist noch lange nicht am Ende ihrer Geschichte

angekommen.`
					}
				]
			},
			{
				id: "zharko",
				name: "Xenia Zharko",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/ksenia.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "\"OXYMORON\"",
						title: "OXYMORON",
						category: "OXYMORON",
						body: `Der Plastik-Ozean, wie immer, niemals leuchtend gelb, wie die Luft, violett wie
eine rote Avocado.
Er rannte, so klein wie ein Elefant, so durchsichtig wie eine Wand.
Rund, in quadratischer Form.
Er fiel nach oben, in die dreieckigen Wolken des Himmels.
So hoch, tief unter der Erde, dass die Flaschen ihre eisernen Schaumstoffohren mit
ihren Augen schlossen, so lecker wie der heute weggeworfene hundertjährige Müll
- gestern.
Und sie schrien lautlos mit all ihren Tentakeln, so leise wie eine Sirene:
Klimawandel!

A us diesem Baum wurden 12.000 Blatt weißes Papier hergestellt
Ich genieße dieses Leben.
Einfach.
Die Sonne. - Den Regen.
Vögel.
Tiere.
Ein heiliger Kreis.
Nein. - Nein.
Sie kommen.
Sie wollen mich töten.
Wir leben in einer Zeit, in der alles geschehen kann.
So einfach.
Im Licht des Tages.
Warum ich?
Ich schreie.
Hilf mir. - Hilfe.
Angst.
Zittern. - Ein Brüllen.
Sie haben mich getötet.
Nicht so einfach.
Und doch glaube ich an eine zweite Chance –
und mit etwas Glück sogar an eine fünfte.
Heiliger runder Kreis.
Ich werde wiedergeboren werden - können.`
					},
					{
						filterClass: "Text2",
						label: "\"WP\"",
						title: "WP",
						category: "WP",
						body: `Ich genieße dieses Leben.
Einfach.
Die Sonne.
Den Regen.
Vögel.
Tiere.
Ein heiliger Kreis.
Nein.
Nein.
Sie kommen.
Sie wollen mich töten.
Wir leben in einer Zeit, in der alles geschehen kann.
So einfach.
Im Licht des Tages.
Warum ich?
Ich schreie.
Hilf mir.
Hilfe.
Angst.
Zittern.
Ein Brüllen.
Sie haben mich getötet.
Nicht so einfach.
Und doch glaube ich an eine zweite Chance –
und mit etwas Glück sogar an eine fünfte.
Heilige Rund.
Ich werde wiedergeboren werden können.

Weißes Papier…
Oder ( Aus diesem Baum wurden 12.000 Weiß Papier hergestellt.)
LG`
					}
				]
			},
			{
				id: "gil",
				name: "Camila Gil",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Camila-Gil-Copyright-privat.png",
				credit: "© Foto privat",
				email: "",
				active: true,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Die gute Fee\"",
						title: "Die gute Fee",
						category: "Die gute Fee",
						body: `Es war einmal eine Prinzessin die eine gute Fee hatte. Die gute Fee war ihre beste Freundin und erfüllte oft ihre Wünsche, natürlich nur, wenn sie mit ihrenWünsche einverstanden war.

Die Prinzessin fühlte sich alleine und wünschte sich einen reichen, hübschen und großenPrinz. Die Fee erklärte ihr, dass die Persönlichkeit des Prinzen viel wichtiger wäre. ob er zu ihr passe, wie er sie behandele, und ob sie sich glücklich fühlen würde, wenn sie zusammen wären. Könne sie mit ihm über alles sprechen, sie selber sein und witzig dazu? Nur wenn die Prinzessin einen Prinzen fände,bei dem all die Fragen mit Ja beantwortet würden, würde die Fee ihren Wunsch erfüllen, für immer verliebt zu sein und die Liebe bis zum Ende ihres Leben zu behalten.

Die Prinzessin sagte, „okay, das wird vielleicht länger dauern bis ich diesen Traumprinz finde.“Deswegen wolle sie sich lieber eine Arbeit wünschen, wo sie nichts machen müsse, viel Geld verdienen, und den ganzen Tag Fernsehen gucken könne.

Die gute Fee hat gelacht, sie angeguckt und gesagt: Prinzessin, glaub mir, das würdest du nicht wirklich wollen. Wenn man jeden Tag das gleiche macht, wenn man keine Ziele, keineneuen Pläne undHerausforderungen hat, wird man depressiv und immer traurig sein. Am Anfang ist das vielleicht sehrangenehm sein, aber mit der Zeit wird es monoton, und Monotonie führt zu Langeweile, und Langeweile bringt Traurigkeit. Wenn man etwas Neues bei der Arbeit lernt, wenn man gut mit den Kollegen klar kommt, wenn man toll zusammenarbeitet undimmer neue Projekte umsetzt, fühlt man sich selbstbewusst, anerkannt und geschätzt. Und diese Gefühle verursachen den höchsten Zweck des Menschseins, glücklich zu sein. Die Fee behauptete: wenn das passiert, werde ich dir denWunsch erfüllen, jeden Tag Lust zu haben, zur Arbeit zu gehen. 

Die Prinzessin überlegte und meinte, dafür müsse sie das Königreich verlassen und verlöre viele Vorteile. Sie wolle lieber die intelligenteste Frau desKönigreichs sein. Die Fee war aber wieder nicht einverstanden.

Sie machte der Prinzessin klar,dass das nicht fair wäre. Um klug und intelligent zu sein, sollte sie viele Bücher lesen, mit vieleninteressanten Leuten sprechen,reisen, verschiedene Kulturen kennen lernen, unterschiedliches Essen ausprobieren, mit Kindernund mit älteren Leuten spannende Diskussionen führen, Filme gucken, Sprachen lernen und immer neue Sachen entdecken. Erst dann würde sieihre Wünsche erfüllen, wenn sie alles Wissen für immer im Kopf behalten und die Erlebnisse nievergessen würde.

Arbeit, Liebe und Wissen. Um das alles zu erreichen, muss man hartund fleißig arbeiten. Wenigkommt vom Sitzen und Abwarten. Wir müssen immer für unsere Träume kämpfen, und einen Weg finden, sie zu verwirklichen.`
					},
					{
						filterClass: "Text2",
						label: "\"Was darf man essen?\"",
						title: "Was darf man essen?",
						category: "Was darf man essen?",
						body: `Essen, essen, essen, 

was darf man denn noch essen?

überlegen hin und her

Antworten, klare, gibt´s kaum mehr

So viele Theorien im Kopf

was kommt am Ende in den Topf?




Viel Eiweiß haben Eier,

gut für Sportler Meier.

Bakterien, Cholesterin

steckt das nicht alles auch noch drin?




Deutsche essen sehr viel Brot

haben damit keine Not.

Meine Heimat findet´s schlecht.

Wer von beiden hat nun recht?




Ohne Fleisch geht’s dir nicht schlecht,

doch viel davon ist auch nicht recht 

And´re sagen Stop! Verzicht!

diesen Krebs, den brauch ich nicht!




Gemüse aus dem Laden?

Pestizide könnten schaden.

Müssen wir erst braten.

Will ich euch nur raten.




Liebe Tomaten, in echt so rot?

Oder ist´s nur ein lockendes Angebot?

Und ich bin bald schon tot?

Ich frage mich, was tut hier not?




Dem Wasser haben wir viel zu verdanken,

aus dem Hahn es zu trinken? Was für Gedanken.

Gibt´s dort nicht auch Bakterien?

Sind das überhaupt Kriterien?




Wasser aus des Plastikflasche,

nehm´ ich nicht in meine Tasche.

Lieber aus Glas

und ohne Gas.




Jeder Arzt und Wissenschaftler,

jeder Mensch und mein Entsafter,

wissen immer allzu gut

was gut mir täte und gut tut.




Wichtig ist, woran ich glaube.

Zu viel Stress ich nicht erlaube.

In Balance zu leben ist mein Plan,

von allem ein bisschen, so fang ich´s an.




Wer fühlt sich nicht in gutem Licht,

nach einem leckeren Gericht?!`
					},
					{
						filterClass: "Text3",
						label: "\"Chuchito\"",
						title: "Chuchito",
						category: "Chuchito",
						body: `Chuchito ist ein kleiner Junge, der sehr gerne alleine reist. Er hat immer das Gefühl, dass er nicht zu einem festen Ort gehört, deswegen hat er sich dafür entscheiden, durch die Welt zu reisen. Als erstes war er in Australien. Dort hat er fliegende Kängurus gesehen und war auf ihnen geflogen. Außerdem gab es da Koalas mit sieben Beinen, und er war überrascht, wie schnell sie gehen konnten. Nach dieser Reise ist er nach Indien mit dem Auto gefahren. Da hat er eine Gruppe von Kindern kennengelernt, die sich jeden Tag getroffen haben, um neue Rezepte zu kochen und gemeinsam zu essen. Chuchito hat mit den Kindern verschiedene Schoko-Gemüse entdeckt. Das sind Gemüse, die sehr gesund sind, aber nach Schokolade schmecken. Nach einer Woche in Indien hat Chuchito ein Fahrrad gefunden, und hat sich entschieden, damit nach Italien zu radeln. In diesem Land war er sehr glücklich, weil es immer nach frischen Brötchen gerochen hat. Er ist in viele Brunnen gesprungen, und hat oft mit Wasser gespi`
					},
					{
						filterClass: "Text4",
						label: "\"Das weiße Blatt\"",
						title: "Das weiße Blatt",
						category: "Das weiße Blatt",
						body: `Es war einmal ein weißes Blatt, das überall herumgelaufen ist. Es hatte viele Freunde: Kugelschreiber, Bleistift und Radiergummi. Eshatte aber auch einen Feind: den Notizblock. Der Block ist sehr arrogant gewesen. Er dachte, dass er besser als alle anderen sei, weil er größer, dicker, und fester dastand. Er hat das weiße Blatt immer gemobbt und ständig gesagt, dass es zuleicht, zu dünn und zu simpel sei.

Das weiße Blatt hat oft mit seinen Freundengespielt, aber immer wenn der Block kam, fühlte es sich traurig, weil der Block das Blatt erniedrigt und immer verletzende Wörter gesagt hat. Das weiße Blatt entschloss sich wegzugehen. Es hatte genug vom Block, und wollte zu einem Ort gehen wo es besser behandelt wurde. Das Blatt ist lange gelaufen und plötzlich fand es eine Welt voller Farbe. Auf dieser Welt gab es Marker, Büroklammern, Glitzeraufkleber und Stempel. Als sie das weiße Blatt kennengelernt haben, waren sie begeistert, weil sie viel zusammenunternehmen konnten. Das weiße Blatt war auf einmal voller Farbe und schön dekoriert. 

In der Welt des Blocks aber war etwas schiefgegangen. Der Block fühlte sich krank, jeden Tag war er geschrumpft und immer kleiner, dünner, und schwächer geworden. Eines Tageshat er an das weiße Blatt gedacht und er hat verstanden, dass ein Block aus vielen weißenBlättern besteht. Ohne sie kann er gar nicht existieren. Mir seinen letzten Kräften beschloss er, das weiße Blatt zu suchen. Als er in der farbige Welt kam, hat er gesehen wie glücklich das weiße Blatt ist. Er verstand plötzlich, dass er sich sehr schlecht benommen hat, und hat das Blatt umVerzeihung gefragt. Er hat sein Leben immer mit dem weißen Blatt verbracht und festgestellt, dass sie einfach zusammengehören. Um als Block überhaupt existieren zu können und groß zu sein, braucht man viele weiße Blätter, die gesund und glücklich sind. 

Das Blatt hat dem Block verziehen und der Blockist zu seiner Normalität zurückgekehrt.

Seit diesem Moment aber halten sie einander wieder fest an den Händen.`
					}
				]
			},
			{
				id: "bikoumu",
				name: "Lionel Bikoumu",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Lionel-Bikoumu-Copyright-privat.png",
				credit: "",
				email: "",
				active: true,
				bio: ``,
				texts: [{
					filterClass: "Text2",
					label: "\"Vergangenheit und Gegenwart\"",
					title: "Vergangenheit und Gegenwart",
					category: "Vergangenheit und Gegenwart",
					body: `„Au clair de la lune, mon ami Pierrot, prête moi ta plume pour écrire un mot, ma
chandelle est morte, je n‘ai plus de feu - Ouvre moi ta porte pour l’amour de Dieu“
Es gibt verschiedene Arten von Schriftstellern. Ich werde mich hier ausschließlich
auf den öffentlichen Schreiber konzentrieren, der anderen seine Feder leiht, wie in
dem berühmten Lied von Lully „Au clair de la lune, mon ami Pierrot“. In diesem
Lied ist Pierrot der öffentliche Schreiber. Er gibt anderen Menschen eine Stimme.
Ich werde euch also die Geschichte eines Schreibers erzählen, der, indem er sich
von seinen eigenen Liebesgeschichten inspirieren ließ, die Geschichten vieler
Menschen bereichern konnte.
Als 18-Jähriger, wurde er zum Militärdienst einberufen. Etwas snobistisch,
affektiert und aus einer wohlhabenden Familie stammend, fand er sich unter
Kameraden wieder, die überwiegend aus der Bauernschaft stammten und ihn wie
einen Außerirdischen betrachteten und schikanierten.
Nachdem sie sich über seine Zerbrechlichkeit amüsiert hatten, bemerkten seine
Kameraden, dass er schriftstellerisches Talent besaß.
„Kannst du gut schreiben?“, fragten sie ihn.
„Vielleicht“, antwortete er.
Sie beauftragten ihn, ihre administrative Korrespondenz zu erledigen. Durch seine
ersten Erfolge ermutigt, erzählten sie ihm ihre Liebesgeschichten. Sie hatten
Häuser, Höfe, Kühe, Schweine und ihre Frauen zurückgelassen um zum Militär zu
gehen. Liebende Frauen lieben aber nicht immer Männer, die in den Kampf
ziehen.
Also baten die Kameraden den jungen Schreiber, ihren Frauen zu schreiben, dass
sie sie liebten, und so kam es, dass er Hunderte von Liebesbriefen verfasste.
Wenn dann die Kameraden zu ihren Frauen zurückkehrten, waren diese noch ganz
erfüllt von den Worten unseres jungen Schreibers. Sie waren in fröhlich verliebter
Stimmung und bereiteten ihren Männern einen leidenschaftlichen und sinnlichen
Empfang.
Auch viele viele Jahre nach dieser Erfahrung beim Militär kommt es
ihm noch heute nicht selten vor, dass er beim in der Stadt Spazierengehen einem
Jugendlichen begegnet und sich fragt:
„Ist er vielleicht aus meiner Feder entstanden...“`
				}]
			},
			
			
			{
				id: "recalde-carballo",
				name: "Luciano Recalde Carballo",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Luciano-Recalde-Copyright-privat.png",
				credit: "© Foto privat",
				email: "lucianorecalde@ateliether.com",
				active: true,
				bio: `Geboren in Asunción, Paraguay, mit Erfahrung als Elektroingenieur und Softwareentwickler. Seit Juni 2025 in Wiesbaden tätig. Liebhaber der Philosophie und jeder Form des Ausdrucks von Gedanken.`,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Das Fenster \"",
						title: "Das Fenster",
						category: "Das Fenster",
						body: `Der laute Verkehr durch das Fenster erinnert mich an diesen Ort.

Heute habe ich nichts gemacht…

Ebenso wie gestern und wahrscheinlich auch morgen.

Jetzt rieche ich nicht den Diesel. Und ich sehe nicht die Blätter der Kastanie,

die ich auf dieser Straße beobachtete.

Ich hatte die Welt immer durch ein Fenster wahrgenommen…

Es ist immer noch so.

Ich war jung und optimistisch, vielleicht zu naiv.

Sie waren alles Fremde, sogar die Vertrautesten. Vor allem die Vertrautesten.

Ich hatte mein Glück gegen Gewissheit eingetauscht.

Oh, dieses Land des traurigen Volkes.

Sie sprachen anders, ganz anders.

Ich verstand alles und trotzdem nichts.

Aber jetzt zeigt es sich mir, weil dieses Fenster klar ist.

Ach man! So sehr wollte ich durch das Glas durchschreiten und diesen Traum leben.

Nie hatte ich mir vorgestellt, was hinter dem Fenster lag.

Nur Schmutz und Verfall!

Wir malen uns die schönsten Sachen ohne Schatten aus.

Die höchsten Werte inspirieren uns.

Wenn wir das Fenster putzen, dann verliert alles seinen Zauber.

Und hier am Fenster liege ich.`
					},
					{
						filterClass: "Text2",
						label: "\"Dem Menschen gehört die Welt \"",
						title: "Dem Menschen gehört die Welt",
						category: "Dem Menschen gehört die Welt",
						body: `Dem Menschen gehört die Welt

das alles und so weiter - all das und mehr



Um zu glauben,

betet der Mensch zu Gott und bekennt

Der Gott nimmt Gestalt an und bestraft

Die Strafe gehört dem Menschen



Um zu leben,

züchtet der Mensch das Tier und frisst es

Das Tier wird verseucht und erkrankt daran

Die Krankheit gehört dem Menschen



Um zu träumen,

malt der Mensch das Ziel und verfolgt es

Das Ziel verwandelt sich in einen Albtraum

Der Albtraum gehört dem Menschen



Um zu schützen,

entwickelt der Mensch die Waffe und schießt

Die Waffe erschafft den Tod

Der Tod gehört dem Menschen



Die Strafe gehört dem Leben

wie der Gott der Sünde



Die Krankheit gehört dem Essen

wie das Tier der Qual



Der Albtraum gehört der Angst

wie das Ziel dem Traum/a



Der Tod gehört der Erde

wie das Fleisch dem Wurm



Die Zeit bringt den Menschen zur Erde

der Mensch gehört der Welt`
					},
					{
						filterClass: "Text3",
						label: "\"Die Suche \"",
						title: "Die Suche",
						category: "Die Suche",
						body: `Niemand auf den Straßen,

Man braucht etwas zu essen. Wer nicht isst, stirbt.

Wir wollen keine Geräusche machen, es ist zu riskant.

Wir möchten nicht die Fremde (die Fremden?) stören.

Ich habe vergessen, wann es das letzte mal war, dass diese Straße ganz voll mit Menschen war.

Weiter, weiter.

Vielleicht können wir frisches Wasser finden.

Noch weiter, immer weiter.

Ich höre etwas in der Distanz.

Ungefähr 500 Meter entfernt.

Vielleicht andere Menschen?… oder nur ein Radio, das läuft, doch niemand hört zu.

Allein der Gedanke daran, dass noch gestern alles anders gewesen war, ruft in mir die Frage hervor, warum ich diese Gelegenheit versäumt habe.

Es waren viele Geräusche, alles war laut und lebendig

Aber heute nicht, heute ist alles geschlossen.

Gar nicht gut.

Es ist Sonntag und wir haben nichts eingekauft.`
					}
				]
			},
			
			
			
			
			{
				id: "rodriguez",
				name: "Rafael Rodriguez",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/01/default.png",
				credit: "",
				email: "",
				active: false,
				bio: ``,
				texts: [
					{
						filterClass: "Text1",
						label: "\"Der heiße Abend\"",
						title: "Der heiße Abend",
						category: "Der heiße Abend",
						body: `Es geschah nach einem kurzen Spiel. Die Gefahr war in dieser flüchtigen Sekunde nicht bedacht, es war einfach passiert.

Als ob die Sonne wusste, was geschehen sollte, strahlte sie an diesem Samstagnachmittag ihr Licht im Überfluss, so dass die Figur die ein verliebtes paar Schwäne mit ihren langen Hälsen machten, auf Liebe deuten ließen. Das Gras am Rande des Weges entlang des unruhigen Ufers bewegte sich sehr freudig mit dem Wind, den die Füße der beiden glücklichen Spaziergänger erzeugten.

Viele Nacktschnecken krochen mitten über den feuchten Bodens, um eine gewisse Eile des Paares zu verhindern. Diese Absichten spürten alle Schmetterlinge die von Blüte zu Blüte flatterten, während der Wind mit den Ärmeln seines weißen Hemdes, mit dem Rocksaum ihres gelben Kleides und ihren offenen Haaren spielte.

Ein kräftiger Arm umrundete ihren Körper. Seine dunkle Hand ruhte auf ihrer rechten Hüfte. Die Adern ihrer zarten linken Hand spürten den Druck zwischen den zwei Stoffschichten in seiner hinteren Jeanstasche während sie unaufmerksam sich in belanglosen Gesprächen vertieften.

Die Schnecken und Schmetterlinge hatten Recht. Die Absichten waren bei beiden so übereinstimmend, dass sie in wenigen Minuten auf dem Bett landeten. Aber, was diese Insekten und die Sonne nicht ahnten, war die Gefahr kurz vor dem Vorspiel.

Plötzlich hörte es sich nicht wie Liebe an, sondern wie eine Art Kampf, aus Leidenschaft und Gewalt. Man hörte Befehle, Geschrei von Schmerz und Leid, Worte gefüllt mit Trost und Mitleid. Es war ein Gemisch aus Liebe, Mitgefühl und starken physischen Schmerzen.

Man konnte anhand des angestrengten Dialogs die Szene sehen, auch ohne dabei zu sein.

Mach die Beine auf, schrie sie ihn an, und näherte sich mit ihrem Gesicht seiner intimsten Zone.

+ Bitte pass auf! Ya! Ya!! So!! So..So ist es gut!

+ Soll ich dir die Haare halten?

- Nein! sagte sie

+ Damit du besser sehen kannst, sagte er.

- Halt still!

+ Oooooch ooooooh aaaaach

+ Neeeeinnn!!

- Drück meinen Kopf nicht so fest, sagte sie.

+ Aaaaachch!!!

+ Aaaauaaaaaaa!!

+ Ja ja ja ja!

Na, gefällt es dir?

+ Ooooch

+ Ohhh Gott, my Gott, neeein!!

+ Ooooohhhh es ist genug!

+ Ja, ja, ja jaaaaaa!

- OK fertig, das Pflaster ist drauf! - Das passiert, wenn man die heiße Tasse Tee im Bett auf dem Schoß hält, sagte sie.

+ Ja genau, es passiert immer dann, wenn ich einen schönen Abend mit dieser wunderschönen Frau haben möchte! + Du hattest die Decke bewegt...

- Ich hatte nicht gewusst, wo du deine heiße Tasse hattest!

+ Ja, du warst in Eile!

- Stimmt! Aber sorry, ich war auch bereits auf meiner Entdeckungsreise!!`
					}
				]
			},
			{
				id: "nufer",
				name: "Armin Nufer",
				photo: "https://armin-nufer.de/wp-content/uploads/2026/06/Armin-Nufer-Foto-Reinhold-Fischenich-Juli-25-DSC_6706-Ausschnitt.jpg",
				credit: "© Foto Reinhold Fischenich",
				email: "",
				active: true,
				bio: `seit 45 Jahren Literaturleidenschaft, seit 40 Jahren Schauspieler, Sprecher, Rezitator, Regisseur., seit 10 Jahren Initiator und Leiter von Kunst- und Kulturprojekten mit Migrant*innen und Deutschkurs-Lehrer. `,
				texts: [{
					filterClass: "Text1",
					label: "\"Ja. Das. Alles.\"",
					title: "Ja. Das. Alles.",
					category: "Ja. Das. Alles.",
					body: `Arme wie Fächer von Palmen an Gestaden des Meers.
								Fächerarme.
								Gestreckte Kuppen. Kuppen! Honig. Klee. Schatten in der Hitze.
								Tuch, Finger, Maulbeere, Maniok und Ohrenlauf.
								Nie. Nie! Nie zuvor. Nie zuvor!
								Bilder verwesen, stehen auf.
								Zerknüllt. Verrutscht. Rausch und Rauch.
								Fluss prallt ans Gestade. Abgebrochene Rillen fügen sich.
								Gräser aus Licht und Freiheit.
								Getragen vom verworrenen Klang der Gewebe, der lockenden Fallen, der Falten aus Zeit.
								Nichts was sich nicht verändert.
								Nichts das sich verändert.
								Farben. Dringend. Vieles dringend.
								Fiktion.
								Geometrie der Ästhetik.
								Falsche Erwartungen und Wünsche.
								Nichts davon.
								Nur.
								Zurückgestellte Defizite.
								Krachende Gedankenäste.
								Richtungen fallen durcheinander.
								Alles ergänzt einander.
								Scheinbar.
								Und alles ist lösbar.
								Maßlos respektvoll.
								Ich leide an den Tränen der Weide, dem Schmerz der Toten, dem Drang des Lebens.
								An der perfekten, an der ungeschriebenen, veränderbaren und frei flirrenden Religion.`
				}]
			},
		];

		/*
		 * SW9 data-driven renderer.
		 * Each biography and each text is defined exactly once in SW_AUTHORS (above).
		 * The repetitive author/grid/text markup is generated here at parse time,
		 * before plugins.js / init.js initialise isotope on document-ready.
		 *
		 * Para agregar un autor o un texto: editar solo el array SW_AUTHORS.
		 * Los cuerpos de texto se escriben como texto plano. Reglas:
		 *   - una linea en blanco separa parrafos (cada bloque -> <p>)
		 *   - un salto de linea simple dentro de un bloque -> <br>
		 *   - una linea con [pagebreak], *** o el caracter de avance de pagina (\f)
		 *     inserta un salto de pagina para impresion (<div class="page-break">)
		 * Asi se puede copiar y pegar texto de Word directamente.
		 */
		(function () {
			"use strict";

			var AUTHORS = (typeof SW_AUTHORS !== "undefined" && SW_AUTHORS) || [];

			function esc(s) {
				return String(s == null ? "" : s)
					.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;");
			}

			function escAttr(s) {
				return esc(s).replace(/"/g, "&quot;");
			}

			var PAGE_BREAK_RE = /^(\f|\[pagebreak\]|\*{3,}|={3,})$/;

			// Plain text -> HTML paragraphs. Blank line = new <p>; single newline = <br>.
			// firstClass is applied to the first real paragraph (e.g. "text").
			function renderParagraphs(text, firstClass) {
				if (!text) return "";
				var normalized = String(text).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
				var blocks = normalized.split(/\n[ \t]*\n/);
				var html = "";
				var firstDone = false;
				for (var i = 0; i < blocks.length; i++) {
					var block = blocks[i].replace(/^\n+|\n+$/g, "");
					var trimmed = block.replace(/^\s+|\s+$/g, "");
					if (trimmed === "") continue;
					if (PAGE_BREAK_RE.test(trimmed)) {
						html += '<div class="page-break"></div>';
						continue;
					}
					var inner = esc(block).replace(/\n/g, "<br>");
					var cls = (!firstDone && firstClass) ? ' class="' + firstClass + '"' : "";
					html += "<p" + cls + ">" + inner + "</p>";
					firstDone = true;
				}
				return html;
			}

			function creditSpan(credit) {
				if (!credit) return "";
				return '<span style="position: absolute; bottom: 10px; left: 10px; color: white;' +
					' background: rgba(0,0,0,0.5); padding: 0px 5px; border-radius: 5px;' +
					' font-weight: bold; font-size: 10px;">' + esc(credit) + "</span>";
			}

			function emailBlock(email) {
				if (!email) return "";
				return '' +
					'<div class="tokyo_tm_short_info">' +
					'<div class="tokyo_tm_info">' +
					"<ul>" +
					'<li class="null-margin nullpadding">' +
					'<span class="email-span">Email:</span> ' + esc(email) +
					"</li>" +
					"</ul>" +
					"</div>" +
					"</div>";
			}

			// Each text gets a deterministic filter class. Reuse the author's existing
			// class if present, otherwise generate one.
			function textClass(author, index) {
				var t = author.texts[index];
				if (t && t.filterClass) return t.filterClass;
				return "text" + (index + 1);
			}

			function filterTabs(author) {
				var out = "";
				for (var i = 0; i < author.texts.length; i++) {
					var t = author.texts[i];
					var label = t.label || t.title || ("Text " + (i + 1));
					out += '<li><a href="#" data-filter=".' + escAttr(textClass(author, i)) +
						'">' + esc(label) + "</a></li>";
				}
				return out;
			}

			function textItem(author, index) {
				var t = author.texts[index];
				var category = t.category || t.title || "";
				return '' +
					'<li class="' + escAttr(textClass(author, index)) + '">' +
					'<div class="inner">' +
					'<div class="entry tokyo_tm_portfolio_animation_wrap" data-title="' +
					escAttr(author.name) + '" data-category="' + escAttr(category) + '">' +
					'<div class="list">' +
					"<ul>" +
					'<li style="width: 100%;">' +
					'<div class="list_inner">' +
					'<h3 class="title">' + esc(t.title) + "</h3>" +
					"<br>" +
					renderParagraphs(t.body, "text") +
					"</div>" +
					"</li>" +
					"</ul>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</li>";
			}

			function authorSection(author) {
				var tabs = "";
				var items = "";
				for (var i = 0; i < author.texts.length; i++) {
					items += textItem(author, i);
				}
				tabs = filterTabs(author);
				return '' +
					'<div id="' + escAttr(author.id) + '" class="tokyo_tm_section">' +
					'<div class="container">' +
					'<div class="tokyo_tm_portfolio author-card">' +
					'<div class="tokyo_tm_title">' +
					'<div class="title_flex">' +
					'<div class="left"><h3></h3></div>' +
					'<div class="portfolio_filter">' +
					"<ul>" +
					'<li><a href="#" class="current" data-filter="*">Info</a></li>' +
					tabs +
					"</ul>" +
					"</div>" +
					"</div>" +
					"</div>" +
					'<div class="list_wrapper">' +
					'<ul class="portfolio_list gallery_zoom author-ul">' +
					'<div class="tokyo_tm_about two-columns">' +
					'<div class="about_left">' +
					'<div class="top_author_image">' +
					'<img src="' + escAttr(author.photo) + '" alt="" />' +
					creditSpan(author.credit) +
					"</div>" +
					"</div>" +
					'<div class="about_right">' +
					"<h3>" + esc(author.name) + "</h3>" +
					'<div class="about_text">' + renderParagraphs(author.bio) + "</div>" +
					emailBlock(author.email) +
					"</div>" +
					"</div>" +
					items +
					"</ul>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>";
			}

			function gridItem(author) {
				return '' +
					"<li>" +
					'<div class="list_inner nullpadding">' +
					'<a class="author-link author-portrait hover-container" href="#' + escAttr(author.id) + '">' +
					'<img class="img-animation" src="' + escAttr(author.photo) + '" alt="" />' +
					'<div class="hover-overlay">' +
					creditSpan(author.credit) +
					'<span class="author-name-hover">' + esc(author.name) + "</span>" +
					"</div>" +
					"</a>" +
					"</div>" +
					"</li>";
			}

			// Short preview from the first paragraph of a text body.
			function excerpt(body, max) {
				max = max || 120;
				var first = String(body || "").replace(/\r\n/g, "\n").split(/\n[ \t]*\n/)[0] || "";
				first = first.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
				if (first.length <= max) return first;
				var cut = first.slice(0, max);
				var sp = cut.lastIndexOf(" ");
				if (sp > 40) cut = cut.slice(0, sp);
				return cut.replace(/[\s.,;:!?-]+$/, "") + " ...";
			}

			function pad2(n) { return (n < 10 ? "0" : "") + n; }

			// Texte card in the template's "services" style, with a Mehr-lesen popup
			// that holds the full text plus the author photo and bio.
			function texteItem(author, index, number) {
				var t = author.texts[index];
				return '' +
					"<li>" +
					'<div class="list_inner">' +
					'<span class="number">' + pad2(number) + "</span>" +
					'<h3 class="title null-margin">' + esc(t.title) + "</h3>" +
					'<span class="author-name">' + esc(author.name) + "</span>" +
					'<p class="text margin-top-10">' + esc(excerpt(t.body)) + "</p>" +
					'<div class="tokyo_tm_read_more"><a href="#"><span>Mehr lesen</span></a></div>' +
					'<a class="tokyo_tm_full_link" href="#"></a>' +
					'<div class="service_hidden_details">' +
					'<div class="service_popup_informations">' +
					'<div class="descriptions">' +
					renderParagraphs(t.body, "text") +
					"</div>" +
					'<div class="tokyo_tm_about two-columns">' +
					'<div class="about_left">' +
					'<div class="top_author_image">' +
					'<img src="' + escAttr(author.photo) + '" alt="" />' +
					creditSpan(author.credit) +
					"</div>" +
					"</div>" +
					'<div class="about_right">' +
					"<h3>" + esc(author.name) + "</h3>" +
					'<div class="about_text">' + renderParagraphs(author.bio) + "</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</li>";
			}

			// --- Inject generated markup -------------------------------------------

			// 1) Author sections, inserted in document order before the marker.
			var marker = document.getElementById("sw-sections");
			if (marker) {
				var sectionsHtml = "";
				for (var s = 0; s < AUTHORS.length; s++) {
					sectionsHtml += authorSection(AUTHORS[s]);
				}
				marker.insertAdjacentHTML("beforebegin", sectionsHtml);
			}

			// 2) Author grid (only active authors).
			var gridUl = document.querySelector("#authors .list > ul");
			if (gridUl) {
				var gridHtml = "";
				for (var g = 0; g < AUTHORS.length; g++) {
					if (AUTHORS[g].active) gridHtml += gridItem(AUTHORS[g]);
				}
				gridUl.innerHTML = gridHtml;
			}

			// 3) Texte list (all texts of active authors), reusing the same data.
			var texteUl = document.querySelector("#texte .list > ul");
			if (texteUl) {
				var texteHtml = "";
				var num = 0;
				for (var a = 0; a < AUTHORS.length; a++) {
					if (!AUTHORS[a].active) continue;
					for (var ti = 0; ti < AUTHORS[a].texts.length; ti++) {
						num++;
						texteHtml += texteItem(AUTHORS[a], ti, num);
					}
				}
				texteUl.innerHTML = texteHtml;
			}
		})();
