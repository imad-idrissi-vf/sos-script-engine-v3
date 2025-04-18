import type { Calamity } from "@/types/calamity"

export const calamities: Calamity[] = [
  {
    id: "stroomstoring",
    label: "Stroomstoring",
    start: "vraag0",
    summaryTemplate:
      "[${label}] – {ruimte woning} \nBW geeft aan een {type calamiteit} te hebben. Het is een {individueel of collectief} probleem. {samenvatting van antwoorden}. BW is gewezen op evt. kosten.",
    vragen: {
      vraag0: {
        label: "Contactgegevens",
        tekst:
          "Goedemiddag, u spreekt met het noodnummer van de woningbouw. Kunt u uw naam, postcode, huisnummer en telefoonnummer doorgeven?",
        opties: {
          "Gegevens doorgegeven": "vraag0b",
        },
      },
      vraag0b: {
        label: "Bereikbaarheid",
        tekst:
          "De dienstdoende spoedmonteur belt voordat hij vertrekt, vaak via een anoniem nummer. Blijf dus goed bereikbaar. Bij geen gehoor mag de monteur niet uitrijden.",
        opties: {
          Begrepen: "vraag1",
        },
      },
      vraag1: {
        label: "Soort storing",
        tekst: "Gaat het om een gedeeltelijke of volledige stroomuitval?",
        opties: {
          Gedeeltelijk: "vraag2a",
          Volledig: "vraag2b",
        },
      },
      vraag2a: {
        label: "Lokalisatie",
        tekst: "Kunt u aangeven welke kamers getroffen zijn?",
        opties: {
          "Alleen woonkamer": "vraag3a",
          "Meerdere kamers": "vraag3b",
          "Alleen stopcontacten": "vraag3c",
        },
      },
      vraag2b: {
        label: "Buren controleren",
        tekst: "Hebben uw buren ook geen stroom?",
        opties: {
          "Ja, buren hebben ook geen stroom": "vraag3d",
          "Nee, alleen bij ons": "vraag3e",
          "Weet ik niet": "vraag3f",
        },
      },
      vraag3a: {
        label: "Woonkamer diagnose",
        tekst: "Controleer of alle apparaten in de woonkamer zijn uitgeschakeld. Werkt de verlichting nog?",
        opties: {
          "Ja, verlichting werkt nog": "vraag4a",
          "Nee, verlichting werkt ook niet": "vraag4b",
        },
      },
      vraag3b: {
        label: "Meterkast controleren",
        tekst: "Kunt u naar uw meterkast gaan en controleren of er groepen zijn uitgeschakeld?",
        opties: {
          "Ja, er zijn groepen uitgeschakeld": "vraag4c",
          "Nee, alle groepen staan aan": "vraag4d",
        },
      },
      vraag3c: {
        label: "Apparaten testen",
        tekst: "Heeft u geprobeerd verschillende apparaten in verschillende stopcontacten te testen?",
        opties: {
          "Ja, niets werkt": "vraag4e",
          "Sommige stopcontacten werken wel": "vraag4f",
        },
      },
      vraag3d: {
        label: "Wijkprobleem",
        tekst: "Het lijkt op een wijkprobleem. Ik ga dit direct doorgeven aan onze technische dienst.",
        opties: {
          "Oké, wat kan ik verwachten?": "vraag4g",
        },
      },
      vraag3e: {
        label: "Huisaansluiting",
        tekst:
          "Het probleem lijkt bij uw huisaansluiting te liggen. Kunt u controleren of de hoofdschakelaar in uw meterkast nog aan staat?",
        opties: {
          "Ja, hoofdschakelaar staat aan": "vraag4h",
          "Nee, hoofdschakelaar staat uit": "vraag4i",
        },
      },
      vraag3f: {
        label: "Buren controleren",
        tekst: "Het is belangrijk om te weten of het een wijkprobleem is. Kunt u even bij uw buren informeren?",
        opties: {
          "Ik ga dat nu doen": "vraag4j",
          "Dat is niet mogelijk": "vraag4k",
        },
      },
      vraag4a: {
        label: "Stopcontacten probleem",
        tekst:
          "Het lijkt erop dat alleen de stopcontacten in de woonkamer een probleem hebben. Dit kan duiden op een defecte groep.",
        opties: {
          "Wat moet ik nu doen?": "vraag5a",
        },
      },
      vraag4b: {
        label: "Groep uitgevallen",
        tekst:
          "Het lijkt erop dat de hele groep voor de woonkamer is uitgevallen. Kunt u in de meterkast kijken of er een groep is uitgeschakeld?",
        opties: {
          "Ja, er is een groep uitgeschakeld": "vraag5b",
          "Nee, alle groepen staan aan": "vraag5c",
        },
      },
      vraag4c: {
        label: "Groepen resetten",
        tekst: "Probeer de uitgeschakelde groepen weer in te schakelen. Lukt dat?",
        opties: {
          "Ja, groepen blijven aan": "vraag5d",
          "Nee, groepen schakelen direct weer uit": "vraag5e",
        },
      },
      vraag4d: {
        label: "Hoofdschakelaar",
        tekst: "Controleer of de hoofdschakelaar volledig is ingeschakeld.",
        opties: {
          "Ja, hoofdschakelaar staat volledig aan": "vraag5f",
          "Nee, er lijkt een probleem met de hoofdschakelaar": "vraag5g",
        },
      },
      vraag4e: {
        label: "Groep uitgevallen",
        tekst:
          "Het lijkt erop dat er een groep is uitgevallen die de stopcontacten bedient. Kunt u in de meterkast kijken?",
        opties: {
          "Ik ga nu kijken": "vraag5h",
        },
      },
      vraag4f: {
        label: "Specifieke stopcontacten",
        tekst: "Dit duidt op een probleem met specifieke stopcontacten. Welke stopcontacten werken wel en welke niet?",
        opties: {
          "Patroon beschrijven": "vraag5i",
          "Geen duidelijk patroon": "vraag5j",
        },
      },
      vraag4g: {
        label: "Verwachtingen",
        tekst: "We sturen een monteur naar de wijk. De verwachte hersteltijd is 2-4 uur.",
        opties: {
          Begrepen: "vraag5k",
        },
      },
      vraag4h: {
        label: "Monteur sturen",
        tekst: "We moeten een monteur sturen om uw huisaansluiting te controleren. Bent u de komende uren thuis?",
        opties: {
          "Ja, ik ben thuis": "vraag5m",
          "Nee, ik moet weg": "vraag5n",
        },
      },
      vraag4i: {
        label: "Hoofdschakelaar resetten",
        tekst: "Probeer de hoofdschakelaar weer in te schakelen. Lukt dat?",
        opties: {
          "Ja, stroom is terug": "vraag5o",
          "Nee, schakelt direct weer uit": "vraag5p",
        },
      },
      vraag4j: {
        label: "Wachten op info",
        tekst: "Prima, belt u ons terug nadat u bij de buren heeft geïnformeerd?",
        opties: {
          "Ja, ik bel terug": "kostenmelding1",
        },
      },
      vraag4k: {
        label: "Monteur sturen",
        tekst: "Dan sturen we een monteur om het probleem te onderzoeken. Bent u de komende uren thuis?",
        opties: {
          "Ja, ik ben thuis": "vraag5q",
          "Nee, ik moet weg": "vraag5r",
        },
      },
      vraag5a: {
        label: "Advies stopcontacten",
        tekst:
          "We sturen een monteur om de stopcontacten te controleren. Gebruik in de tussentijd geen verlengsnoeren vanuit andere kamers, dit kan gevaarlijk zijn.",
        opties: {
          "Begrepen, wanneer komt de monteur?": "kostenmelding2",
        },
      },
      vraag5b: {
        label: "Groep inschakelen",
        tekst: "Probeer deze groep weer in te schakelen. Let op: schakel eerst alle apparaten in die kamer uit.",
        opties: {
          "Groep blijft aan": "kostenmelding3",
          "Groep schakelt weer uit": "kostenmelding4",
        },
      },
      vraag5c: {
        label: "Monteur nodig",
        tekst: "Dit is een complexer probleem. We moeten een monteur sturen. Bent u vandaag beschikbaar?",
        opties: {
          "Ja, ik ben thuis": "kostenmelding5",
          "Nee, ik ben niet thuis": "kostenmelding6",
        },
      },
      vraag5d: {
        label: "Probleem opgelost",
        tekst: "Mooi dat het probleem is opgelost. Als het nogmaals gebeurt, neem dan direct contact met ons op.",
        opties: {
          Begrepen: "kostenmelding3",
        },
      },
      vraag5e: {
        label: "Monteur nodig",
        tekst: "Er lijkt een serieuzer probleem te zijn. We sturen een monteur vandaag nog langs.",
        opties: {
          Begrepen: "kostenmelding4",
        },
      },
      vraag5f: {
        label: "Verder onderzoek",
        tekst: "We moeten verder onderzoek doen. Een monteur zal langskomen om het probleem te analyseren.",
        opties: {
          Begrepen: "kostenmelding5",
        },
      },
      vraag5g: {
        label: "Hoofdschakelaar probleem",
        tekst: "Een probleem met de hoofdschakelaar vereist directe aandacht. We sturen een monteur met spoed.",
        opties: {
          Begrepen: "kostenmelding6",
        },
      },
      vraag5h: {
        label: "Meterkast check",
        tekst: "Laat me weten wat u in de meterkast aantreft. Zijn er groepen uitgeschakeld?",
        opties: {
          "Ja, groepen uitgeschakeld": "vraag4c",
          "Nee, alles lijkt in orde": "kostenmelding5",
        },
      },
      vraag5i: {
        label: "Patroon analyse",
        tekst:
          "Dit specifieke patroon kan wijzen op een probleem met een bepaalde groep. We sturen een monteur voor inspectie.",
        opties: {
          Begrepen: "kostenmelding2",
        },
      },
      vraag5j: {
        label: "Complexe situatie",
        tekst: "Zonder duidelijk patroon is het lastig te diagnosticeren. Een monteur zal ter plaatse moeten kijken.",
        opties: {
          Begrepen: "kostenmelding2",
        },
      },
      vraag5k: {
        label: "Wijkprobleem bevestigd",
        tekst: "We houden u op de hoogte van de voortgang. De monteur zal eerst de hoofdleiding controleren.",
        opties: {
          Begrepen: "kostenmelding1",
        },
      },
      vraag5m: {
        label: "Monteur planning",
        tekst: "De monteur komt vandaag tussen 13:00 en 17:00 uur. Zorg dat iemand aanwezig is.",
        opties: {
          Begrepen: "kostenmelding5",
        },
      },
      vraag5n: {
        label: "Afspraak maken",
        tekst: "We zullen telefonisch contact opnemen om een afspraak in te plannen.",
        opties: {
          Begrepen: "kostenmelding6",
        },
      },
      vraag5o: {
        label: "Probleem opgelost",
        tekst: "Goed dat de stroom weer terug is. Houd in de gaten of het probleem terugkeert.",
        opties: {
          Begrepen: "kostenmelding3",
        },
      },
      vraag5p: {
        label: "Ernstig probleem",
        tekst: "Dit wijst op een serieus probleem. We sturen met spoed een monteur.",
        opties: {
          Begrepen: "kostenmelding4",
        },
      },
      vraag5q: {
        label: "Monteur planning",
        tekst: "De monteur komt vandaag tussen 13:00 en 17:00 uur. Zorg dat iemand aanwezig is.",
        opties: {
          Begrepen: "kostenmelding5",
        },
      },
      vraag5r: {
        label: "Afspraak maken",
        tekst: "We zullen telefonisch contact opnemen om een afspraak in te plannen.",
        opties: {
          Begrepen: "kostenmelding6",
        },
      },
      kostenmelding1: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten1",
        },
      },
      kostenmelding2: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten2",
        },
      },
      kostenmelding3: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten3",
        },
      },
      kostenmelding4: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten4",
        },
      },
      kostenmelding5: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten5",
        },
      },
      kostenmelding6: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten6",
        },
      },
      afsluiten1: {
        label: "Gesprek afsluiten",
        tekst: "Bedankt voor uw melding. We wachten op uw terugkoppeling na controle bij de buren.",
        opties: {},
      },
      afsluiten2: {
        label: "Monteur inplannen",
        tekst:
          "De monteur komt vandaag tussen 13:00 en 17:00 uur. Zorg dat iemand aanwezig is. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten3: {
        label: "Probleem opgelost",
        tekst:
          "Mooi dat het probleem is opgelost. Als het nogmaals gebeurt, neem dan direct contact met ons op. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten4: {
        label: "Monteur sturen",
        tekst:
          "Er lijkt een serieuzer probleem te zijn. We sturen een monteur vandaag nog langs. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten5: {
        label: "Monteur inplannen",
        tekst:
          "De monteur komt vandaag tussen 13:00 en 17:00 uur. Zorg dat iemand aanwezig is. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten6: {
        label: "Afspraak maken",
        tekst: "We zullen telefonisch contact opnemen om een afspraak in te plannen. Bedankt voor uw melding.",
        opties: {},
      },
    },
  },
  {
    id: "gaslek",
    label: "Gaslek",
    start: "vraag0",
    summaryTemplate:
      "[${label}] – {ruimte woning} \nBW geeft aan een {type calamiteit} te hebben. Het is een {individueel of collectief} probleem. {samenvatting van antwoorden}. BW is gewezen op evt. kosten.",
    vragen: {
      vraag0: {
        label: "Contactgegevens",
        tekst:
          "Goedemiddag, u spreekt met het noodnummer van de woningbouw. Kunt u uw naam, postcode, huisnummer en telefoonnummer doorgeven?",
        opties: {
          "Gegevens doorgegeven": "vraag0b",
        },
      },
      vraag0b: {
        label: "Bereikbaarheid",
        tekst:
          "De dienstdoende spoedmonteur belt voordat hij vertrekt, vaak via een anoniem nummer. Blijf dus goed bereikbaar. Bij geen gehoor mag de monteur niet uitrijden.",
        opties: {
          Begrepen: "vraag1",
        },
      },
      vraag1: {
        label: "Veiligheid eerst",
        tekst: "Voor uw veiligheid, bent u momenteel buiten de woning?",
        opties: {
          "Ja, ik ben buiten": "vraag2a",
          "Nee, ik ben binnen": "vraag2b",
        },
      },
      vraag2a: {
        label: "Locatie gaslucht",
        tekst: "Goed dat u buiten bent. Waar in de woning heeft u de gaslucht geroken?",
        opties: {
          "In de keuken": "vraag3a",
          "Bij de CV-ketel": "vraag3b",
          "In meerdere ruimtes": "vraag3c",
          "Buiten bij de meter": "vraag3d",
        },
      },
      vraag2b: {
        label: "Direct evacueren",
        tekst:
          "Voor uw veiligheid moet u direct de woning verlaten. Open ramen en deuren als dat veilig kan, raak geen elektrische apparaten aan en gebruik geen open vuur.",
        opties: {
          "Ik ga nu naar buiten": "vraag2a",
          "Ik kan niet naar buiten": "noodgeval",
        },
      },
      vraag3a: {
        label: "Keuken gaslek",
        tekst: "Heeft u gecontroleerd of er een fornuis of andere gastoestellen in de keuken aanstaan of lekken?",
        opties: {
          "Ja, er staat niets aan": "vraag4a",
          "Er staat iets aan/open": "vraag4b",
        },
      },
      vraag3b: {
        label: "CV-ketel probleem",
        tekst: "Wanneer heeft u de CV-ketel voor het laatst laten onderhouden?",
        opties: {
          "Minder dan een jaar geleden": "vraag4c",
          "Meer dan een jaar geleden": "vraag4d",
          "Weet ik niet": "vraag4e",
        },
      },
      vraag3c: {
        label: "Verspreid gaslek",
        tekst: "Dit kan duiden op een serieus lek. Is de hoofdgaskraan afgesloten?",
        opties: {
          "Ja, hoofdkraan is dicht": "vraag4f",
          "Nee, nog niet": "vraag4g",
          "Weet ik niet waar die zit": "vraag4h",
        },
      },
      vraag3d: {
        label: "Buitenleiding",
        tekst: "Dit kan duiden op een lek in de aanvoerleiding. Ruikt u de gaslucht in een specifiek gebied buiten?",
        opties: {
          "Ja, bij de meter": "vraag4i",
          "Ja, in de tuin/oprit": "vraag4j",
          "Verspreid over een groter gebied": "vraag4k",
        },
      },
      noodgeval: {
        label: "Noodgeval",
        tekst: "Dit is een noodsituatie. Ik schakel direct de hulpdiensten in. Blijf aan de lijn terwijl ik 112 bel.",
        opties: {
          Begrepen: "kostenmelding7",
        },
      },
      vraag4a: {
        label: "Monteur sturen keuken",
        tekst:
          "We sturen met spoed een monteur om het gaslek in de keuken te onderzoeken. Blijf buiten tot de monteur arriveert.",
        opties: {
          "Hoe lang duurt het?": "kostenmelding8",
        },
      },
      vraag4b: {
        label: "Toestel afsluiten",
        tekst:
          "Als het veilig is, kunt u kort naar binnen gaan om het toestel af te sluiten of de gaskraan dicht te draaien? Zo niet, blijf buiten.",
        opties: {
          "Ik heb het afgesloten": "kostenmelding9",
          "Ik blijf liever buiten": "kostenmelding10",
        },
      },
      vraag4c: {
        label: "Recent onderhoud",
        tekst:
          "Ondanks recent onderhoud kan er een probleem zijn. We sturen een monteur om de CV-ketel te controleren.",
        opties: {
          Begrepen: "kostenmelding8",
        },
      },
      vraag4d: {
        label: "Achterstallig onderhoud",
        tekst: "Bij achterstallig onderhoud is er een verhoogd risico. We sturen met spoed een monteur.",
        opties: {
          Begrepen: "kostenmelding9",
        },
      },
      vraag4e: {
        label: "Onderhoud onbekend",
        tekst: "Voor uw veiligheid sturen we een monteur om de CV-ketel te inspecteren.",
        opties: {
          Begrepen: "kostenmelding10",
        },
      },
      vraag4f: {
        label: "Hoofdkraan dicht",
        tekst: "Goed dat u de hoofdkraan heeft dichtgedraaid. We sturen een monteur om het lek op te sporen.",
        opties: {
          Begrepen: "kostenmelding7",
        },
      },
      vraag4g: {
        label: "Hoofdkraan sluiten",
        tekst: "Als het veilig is, sluit dan de hoofdgaskraan. Deze bevindt zich meestal bij de gasmeter.",
        opties: {
          "Ik heb de kraan gesloten": "kostenmelding8",
          "Ik kan de kraan niet vinden": "kostenmelding9",
        },
      },
      vraag4h: {
        label: "Hoofdkraan locatie",
        tekst: "De hoofdgaskraan bevindt zich meestal bij de gasmeter. Als u deze niet kunt vinden, blijf dan buiten.",
        opties: {
          Begrepen: "kostenmelding10",
        },
      },
      vraag4i: {
        label: "Lek bij meter",
        tekst: "Een lek bij de meter is ernstig. We sturen met spoed een monteur en informeren het gasbedrijf.",
        opties: {
          Begrepen: "kostenmelding7",
        },
      },
      vraag4j: {
        label: "Lek in tuin",
        tekst: "Een lek in de tuin kan wijzen op een probleem met de aanvoerleiding. We sturen met spoed een monteur.",
        opties: {
          Begrepen: "kostenmelding8",
        },
      },
      vraag4k: {
        label: "Wijdverspreid lek",
        tekst: "Dit kan wijzen op een groter probleem. We informeren direct het gasbedrijf en sturen een monteur.",
        opties: {
          Begrepen: "kostenmelding9",
        },
      },
      kostenmelding7: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten7",
        },
      },
      kostenmelding8: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten8",
        },
      },
      kostenmelding9: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten9",
        },
      },
      kostenmelding10: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten10",
        },
      },
      afsluiten7: {
        label: "Monteur onderweg",
        tekst:
          "De monteur is binnen 30 minuten bij u. Blijf buiten en houd afstand van de woning. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten8: {
        label: "Controle nodig",
        tekst:
          "Goed dat u het heeft afgesloten. We sturen alsnog een monteur om te controleren of alles veilig is. Deze komt binnen een uur. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten9: {
        label: "Spoed monteur",
        tekst:
          "U doet er goed aan buiten te blijven. We sturen met spoed een monteur die binnen 30 minuten bij u zal zijn. Blijf op een veilige afstand van de woning. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten10: {
        label: "Spoed monteur",
        tekst:
          "U doet er goed aan buiten te blijven. We sturen met spoed een monteur die binnen 30 minuten bij u zal zijn. Blijf op een veilige afstand van de woning. Bedankt voor uw melding.",
        opties: {},
      },
    },
  },
  {
    id: "waterlek",
    label: "Waterlek",
    start: "vraag0",
    summaryTemplate:
      "[${label}] – {ruimte woning} \nBW geeft aan een {type calamiteit} te hebben. Het is een {individueel of collectief} probleem. {samenvatting van antwoorden}. BW is gewezen op evt. kosten.",
    vragen: {
      vraag0: {
        label: "Contactgegevens",
        tekst:
          "Goedemiddag, u spreekt met het noodnummer van de woningbouw. Kunt u uw naam, postcode, huisnummer en telefoonnummer doorgeven?",
        opties: {
          "Gegevens doorgegeven": "vraag0b",
        },
      },
      vraag0b: {
        label: "Bereikbaarheid",
        tekst:
          "De dienstdoende spoedmonteur belt voordat hij vertrekt, vaak via een anoniem nummer. Blijf dus goed bereikbaar. Bij geen gehoor mag de monteur niet uitrijden.",
        opties: {
          Begrepen: "vraag1",
        },
      },
      vraag1: {
        label: "Ernst van de situatie",
        tekst: "Hoe ernstig is het waterlek op dit moment?",
        opties: {
          "Druppelend (langzaam)": "vraag2a",
          "Stromend (constant)": "vraag2b",
          "Spuitend (onder druk)": "vraag2c",
        },
      },
      vraag2a: {
        label: "Druppelend lek",
        tekst: "Weet u waar het lek precies vandaan komt?",
        opties: {
          "Kraan of wastafel": "vraag3a",
          "Leiding of koppelstuk": "vraag3b",
          "Radiator of verwarmingssysteem": "vraag3c",
          "Weet ik niet": "vraag3d",
        },
      },
      vraag2b: {
        label: "Stromend lek",
        tekst: "Heeft u de hoofdwaterkraan al dichtgedraaid?",
        opties: {
          "Ja, water is gestopt": "vraag3e",
          "Ja, maar water stroomt nog": "vraag3f",
          "Nee, nog niet": "vraag3g",
          "Weet niet waar die zit": "vraag3h",
        },
      },
      vraag2c: {
        label: "Spuitend lek",
        tekst: "Dit is een ernstige situatie. Heeft u de hoofdwaterkraan al dichtgedraaid?",
        opties: {
          "Ja, water is gestopt": "vraag3i",
          "Nee, nog niet": "vraag3j",
          "Kan de hoofdkraan niet bereiken": "vraag3k",
        },
      },
      vraag3a: {
        label: "Kraan of wastafel",
        tekst: "Kunt u de afsluitkraan onder de wastafel of kraan dichtdraaien?",
        opties: {
          "Ja, dat is gelukt": "kostenmelding11",
          "Nee, dat lukt niet": "kostenmelding12",
        },
      },
      vraag3b: {
        label: "Leiding of koppelstuk",
        tekst: "Probeer de hoofdkraan te sluiten. Lukt dat?",
        opties: {
          "Ja, dat is gelukt": "kostenmelding11",
          "Nee, dat lukt niet": "kostenmelding12",
        },
      },
      vraag3c: {
        label: "Radiator",
        tekst: "Probeer de radiatorkraan dicht te draaien. Lukt dat?",
        opties: {
          "Ja, dat is gelukt": "kostenmelding11",
          "Nee, dat lukt niet": "kostenmelding12",
        },
      },
      vraag3d: {
        label: "Onbekende locatie",
        tekst: "Probeer de hoofdkraan te vinden en te sluiten. Lukt dat?",
        opties: {
          "Ja, dat is gelukt": "kostenmelding11",
          "Nee, dat lukt niet": "kostenmelding12",
        },
      },
      vraag3e: {
        label: "Water gestopt",
        tekst: "Goed dat u de kraan heeft dichtgedraaid. Houd de situatie in de gaten.",
        opties: {
          Begrepen: "kostenmelding11",
        },
      },
      vraag3f: {
        label: "Water stroomt nog",
        tekst: "Er is mogelijk een ernstig probleem. We sturen direct een loodgieter.",
        opties: {
          Begrepen: "kostenmelding12",
        },
      },
      vraag3g: {
        label: "Hoofdkraan sluiten",
        tekst: "Sluit direct de hoofdkraan. Deze bevindt zich meestal in de meterkast of bij de watermeter.",
        opties: {
          "Ik heb de kraan gesloten": "kostenmelding11",
          "Ik kan de kraan niet vinden": "kostenmelding12",
        },
      },
      vraag3h: {
        label: "Locatie hoofdkraan",
        tekst:
          "De hoofdkraan bevindt zich meestal in de meterkast of bij de watermeter. Probeer deze te vinden en te sluiten.",
        opties: {
          "Ik heb de kraan gesloten": "kostenmelding11",
          "Ik kan de kraan niet vinden": "kostenmelding12",
        },
      },
      vraag3i: {
        label: "Water gestopt",
        tekst: "Goed dat u de kraan heeft dichtgedraaid. Houd de situatie in de gaten.",
        opties: {
          Begrepen: "kostenmelding11",
        },
      },
      vraag3j: {
        label: "Hoofdkraan sluiten",
        tekst: "Sluit direct de hoofdkraan. Deze bevindt zich meestal in de meterkast of bij de watermeter.",
        opties: {
          "Ik heb de kraan gesloten": "kostenmelding11",
          "Ik kan de kraan niet vinden": "kostenmelding12",
        },
      },
      vraag3k: {
        label: "Niet bereikbaar",
        tekst: "Omdat u de hoofdkraan niet kunt bereiken, sturen we direct een loodgieter.",
        opties: {
          Begrepen: "kostenmelding12",
        },
      },
      kostenmelding11: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten11",
        },
      },
      kostenmelding12: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten12",
        },
      },
      afsluiten11: {
        label: "Probleem tijdelijk opgelost",
        tekst:
          "Goed dat u de kraan heeft kunnen afsluiten. We sturen een loodgieter langs om het probleem definitief op te lossen. Deze komt vandaag nog.",
        opties: {},
      },
      afsluiten12: {
        label: "Loodgieter met spoed",
        tekst:
          "We sturen een loodgieter met spoed naar u toe. Probeer het water op te vangen met handdoeken of emmers. De loodgieter is binnen 2 uur bij u.",
        opties: {},
      },
    },
  },
  {
    id: "inbraak",
    label: "Inbraak",
    start: "vraag0",
    summaryTemplate:
      "[${label}] – {ruimte woning} \nBW geeft aan een {type calamiteit} te hebben. Het is een {individueel of collectief} probleem. {samenvatting van antwoorden}. BW is gewezen op evt. kosten.",
    vragen: {
      vraag0: {
        label: "Contactgegevens",
        tekst:
          "Goedemiddag, u spreekt met het noodnummer van de woningbouw. Kunt u uw naam, postcode, huisnummer en telefoonnummer doorgeven?",
        opties: {
          "Gegevens doorgegeven": "vraag0b",
        },
      },
      vraag0b: {
        label: "Bereikbaarheid",
        tekst:
          "De dienstdoende spoedmonteur belt voordat hij vertrekt, vaak via een anoniem nummer. Blijf dus goed bereikbaar. Bij geen gehoor mag de monteur niet uitrijden.",
        opties: {
          Begrepen: "vraag1",
        },
      },
      vraag1: {
        label: "Politie contact",
        tekst: "Heeft u al contact opgenomen met de politie?",
        opties: {
          "Ja, politie is gebeld": "vraag2a",
          "Nee, nog niet": "vraag2b",
        },
      },
      vraag2a: {
        label: "Veiligheid",
        tekst: "Goed dat u de politie heeft gebeld. Bent u op een veilige locatie?",
        opties: {
          "Ja, ik ben veilig": "vraag3a",
          "Nee, ik voel me niet veilig": "vraag3b",
        },
      },
      vraag2b: {
        label: "Politie bellen",
        tekst:
          "Het is belangrijk om eerst de politie te bellen via 0900-8844 of bij spoed 112. Wilt u dat ik in de lijn blijf terwijl u de politie belt?",
        opties: {
          "Ja, blijf aan de lijn": "vraag3c",
          "Nee, ik bel zelf": "vraag3d",
        },
      },
      vraag3a: {
        label: "Schade inventarisatie",
        tekst: "Kunt u beschrijven welke schade er is aan uw woning?",
        opties: {
          "Gebroken raam": "vraag4a",
          "Geforceerde deur": "vraag4b",
          "Beide/meerdere schades": "vraag4c",
          Anders: "vraag4d",
        },
      },
      vraag3b: {
        label: "Directe actie",
        tekst:
          "Uw veiligheid gaat voor alles. Verlaat de woning als dat mogelijk is en wacht op een veilige plek op de politie.",
        opties: {
          "Ik ga naar buiten": "vraag4e",
          "Ik kan niet naar buiten": "vraag4f",
        },
      },
      vraag3c: {
        label: "Wachten op politie",
        tekst: "Ik blijf aan de lijn terwijl u de politie belt.",
        opties: {
          "Politie is onderweg": "vraag4a",
        },
      },
      vraag3d: {
        label: "Zelf politie bellen",
        tekst: "Bel eerst de politie en neem daarna weer contact met ons op.",
        opties: {
          "Ik heb de politie gebeld": "vraag4a",
        },
      },
      vraag4a: {
        label: "Raam beveiligen",
        tekst: "We sturen iemand om het raam tijdelijk te beveiligen. Heeft de politie al aangegeven wanneer ze komen?",
        opties: {
          "Ja, politie komt binnenkort": "kostenmelding13",
          "Nee, nog niet bekend": "kostenmelding14",
        },
      },
      vraag4b: {
        label: "Deur beveiligen",
        tekst: "We sturen iemand om de deur tijdelijk te beveiligen. Heeft de politie al aangegeven wanneer ze komen?",
        opties: {
          "Ja, politie komt binnenkort": "kostenmelding13",
          "Nee, nog niet bekend": "kostenmelding14",
        },
      },
      vraag4c: {
        label: "Meerdere schades",
        tekst:
          "We sturen iemand om de schade tijdelijk te beveiligen. Heeft de politie al aangegeven wanneer ze komen?",
        opties: {
          "Ja, politie komt binnenkort": "kostenmelding13",
          "Nee, nog niet bekend": "kostenmelding14",
        },
      },
      vraag4d: {
        label: "Anders",
        tekst: "Beschrijf de schade. Heeft de politie al aangegeven wanneer ze komen?",
        opties: {
          "Politie komt binnenkort": "kostenmelding13",
          "Nee, nog niet bekend": "kostenmelding14",
        },
      },
      vraag4e: {
        label: "Veiligheid",
        tekst: "Ga naar een veilige plek en wacht op de politie.",
        opties: {
          "Ik ben veilig": "kostenmelding13",
        },
      },
      vraag4f: {
        label: "Niet naar buiten",
        tekst: "Blijf waar u bent en wacht op de politie.",
        opties: {
          "Ik wacht op de politie": "kostenmelding14",
        },
      },
      kostenmelding13: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten13",
        },
      },
      kostenmelding14: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: {
          Begrepen: "afsluiten14",
        },
      },
      afsluiten13: {
        label: "Monteur onderweg",
        tekst:
          "Onze beveiligingsmonteur is binnen een uur bij u om de schade te beveiligen. Wacht op de politie en raak zo min mogelijk aan.",
        opties: {},
      },
      afsluiten14: {
        label: "Monteur en politie",
        tekst:
          "Onze beveiligingsmonteur is binnen een uur bij u. We adviseren u om nogmaals contact op te nemen met de politie voor een update.",
        opties: {},
      },
    },
  },
  {
    id: "cvww",
    label: "CV / Warm Water",
    start: "vraag0",
    summaryTemplate:
      "[${label}] – {ruimte woning} \nBW geeft aan een {type calamiteit} te hebben. Het is een {individueel of collectief} probleem. {samenvatting van antwoorden}. BW is gewezen op evt. kosten.",
    vragen: {
      vraag0: {
        label: "Contactgegevens",
        tekst:
          "Goedemiddag, u spreekt met het noodnummer van de woningbouw. Kunt u uw naam, postcode, huisnummer en telefoonnummer doorgeven?",
        opties: {
          "Gegevens doorgegeven": "vraag0b",
        },
      },
      vraag0b: {
        label: "Bereikbaarheid",
        tekst:
          "De dienstdoende spoedmonteur belt voordat hij vertrekt, vaak via een anoniem nummer. Blijf dus goed bereikbaar. Bij geen gehoor mag de monteur niet uitrijden.",
        opties: {
          Begrepen: "vraag1",
        },
      },
      vraag1: {
        label: "Soort storing",
        tekst: "Waar ervaart u op dit moment een storing in?",
        opties: {
          Verwarming: "vraag2a",
          "Warm water": "vraag2b",
        },
      },
      vraag2a: {
        label: "Installatietype verwarming",
        tekst:
          "Weet u of uw woning gebruikmaakt van een collectief verwarmingssysteem of een eigen (individuele) installatie?",
        opties: {
          "Collectief systeem (bijv. stadsverwarming, ketelhuis)": "vraag3a",
          "Eigen cv-ketel (individueel)": "vraag3b",
          "Weet ik niet": "vraag3c",
        },
      },
      vraag2b: {
        label: "Installatietype warm water",
        tekst: "Weet u of het warm water afkomstig is van een collectieve installatie of een eigen geiser/boiler?",
        opties: {
          "Collectieve voorziening": "vraag3d",
          "Eigen geiser of boiler": "vraag3e",
          "Weet ik niet": "vraag3f",
        },
      },
      vraag3a: {
        label: "Collectieve verwarming",
        tekst:
          "Hebben uw buren ook geen verwarming? Zijn de leidingen koud? Bevindt zich in uw woning een resetbare unit?",
        opties: {
          "Ja, buren hebben ook storing": "vraag4a",
          "Nee, alleen ik heb storing": "vraag4b",
          "Weet ik niet": "vraag4c",
        },
      },
      vraag3b: {
        label: "Individuele verwarming",
        tekst:
          "Is de waterdruk in de ketel minimaal 1,5 bar? Heeft u de ketel al gereset (stekker eruit voor 1 minuut)?",
        opties: {
          "Ja, beide gecontroleerd": "vraag4d",
          "Nee, nog niet gedaan": "vraag4e",
        },
      },
      vraag3c: {
        label: "Installatie onbekend",
        tekst: "Bij twijfel over het systeem adviseren wij dit eerst te controleren met uw woningcorporatie of buren.",
        opties: {
          Begrepen: "kostenmelding1",
        },
      },
      vraag3d: {
        label: "Collectief warm water",
        tekst:
          "Hebben buren ook geen warm water? Zijn leidingen koud? Is er een unit in uw woning die u kunt resetten?",
        opties: {
          "Ja, buren ook storing": "vraag4f",
          "Nee, alleen ik heb storing": "vraag4g",
          "Weet ik niet": "vraag4h",
        },
      },
      vraag3e: {
        label: "Individuele warmwatervoorziening",
        tekst: "Staat de geiser/boiler aan? Is er voldoende ventilatie aanwezig in de ruimte?",
        opties: {
          "Ja, alles staat aan en goed geventileerd": "vraag4i",
          "Nee, apparaat uit of slechte ventilatie": "vraag4j",
        },
      },
      vraag3f: {
        label: "Warmwatersysteem onbekend",
        tekst: "Bij twijfel adviseren wij dit eerst te controleren bij uw woningcorporatie of buren.",
        opties: {
          Begrepen: "kostenmelding2",
        },
      },
      vraag4a: {
        label: "Collectieve melding",
        tekst: "Wij registreren uw melding en geven deze door aan de beheerder van de collectieve installatie.",
        opties: {
          Begrepen: "kostenmelding3",
        },
      },
      vraag4b: {
        label: "Individuele storing",
        tekst:
          "Omdat het probleem alleen bij u speelt, kan een monteur worden ingeschakeld. Let op: mogelijk voor eigen rekening.",
        opties: {
          Begrepen: "kostenmelding4",
        },
      },
      vraag4c: {
        label: "Advies buren/systeemcheck",
        tekst: "Vraag indien mogelijk na bij buren of informeer bij uw woningcorporatie welk systeem u heeft.",
        opties: {
          "Ik ga dit doen": "kostenmelding5",
        },
      },
      vraag4d: {
        label: "Technisch onderzoek nodig",
        tekst: "Aangezien het probleem aanhoudt, kan een monteur langskomen om dit te beoordelen.",
        opties: {
          Begrepen: "kostenmelding6",
        },
      },
      vraag4e: {
        label: "Zelf actie nodig",
        tekst: "Wij adviseren eerst zelf bij te vullen en te resetten. Dit lost vaak het probleem op.",
        opties: {
          "Ik ga dit doen": "kostenmelding7",
        },
      },
      vraag4f: {
        label: "Collectieve melding",
        tekst: "Uw melding wordt doorgegeven aan de beheerder van het collectieve systeem.",
        opties: {
          Begrepen: "kostenmelding8",
        },
      },
      vraag4g: {
        label: "Mogelijk individueel",
        tekst: "Als alleen u storing ervaart, kan een monteur worden ingeschakeld. Dit kan kosten met zich meebrengen.",
        opties: {
          Begrepen: "kostenmelding9",
        },
      },
      vraag4h: {
        label: "Systeem onduidelijk",
        tekst: "Informeer bij uw buren of woningcorporatie om te achterhalen welk systeem van toepassing is.",
        opties: {
          Begrepen: "kostenmelding10",
        },
      },
      vraag4i: {
        label: "Apparaat actief",
        tekst: "Mogelijk is er een technische storing. Een monteur kan langskomen voor controle.",
        opties: {
          Begrepen: "kostenmelding11",
        },
      },
      vraag4j: {
        label: "Mogelijk onveilige situatie",
        tekst:
          "Bij twijfel over ventilatie of bij klachten zoals hoofdpijn of misselijkheid: kies ook de calamiteit 'CO₂ / LPG'.",
        opties: {
          "Geen klachten, doorgaan": "kostenmelding12",
          "Wel klachten": "redirect_co2",
        },
      },
      redirect_co2: {
        label: "Veiligheidswaarschuwing",
        tekst: "U wordt doorverwezen naar het CO₂ / LPG protocol. Volg de instructies daar zorgvuldig op.",
        opties: {},
      },
      kostenmelding1: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten1" },
      },
      kostenmelding2: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten2" },
      },
      kostenmelding3: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten3" },
      },
      kostenmelding4: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten4" },
      },
      kostenmelding5: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten5" },
      },
      kostenmelding6: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten6" },
      },
      kostenmelding7: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten7" },
      },
      kostenmelding8: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten8" },
      },
      kostenmelding9: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten9" },
      },
      kostenmelding10: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten10" },
      },
      kostenmelding11: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten11" },
      },
      kostenmelding12: {
        label: "Kostenmelding",
        tekst:
          "Let op: Als blijkt dat het probleem door eigen toedoen komt of er geen sprake is van spoed, kunnen kosten worden doorbelast door uw woningcorporatie.",
        opties: { Begrepen: "afsluiten12" },
      },
      afsluiten1: { label: "Afsluiten", tekst: "U bent geïnformeerd. Bedankt voor uw melding.", opties: {} },
      afsluiten2: { label: "Afsluiten", tekst: "Wij adviseren eerst uw systeem te controleren. Bedankt.", opties: {} },
      afsluiten3: {
        label: "Afsluiten",
        tekst: "De melding is doorgestuurd naar de juiste partij. Bedankt.",
        opties: {},
      },
      afsluiten4: {
        label: "Afsluiten",
        tekst: "De monteur is ingepland. U wordt verder geïnformeerd. Bedankt.",
        opties: {},
      },
      afsluiten5: {
        label: "Afsluiten",
        tekst: "Let op dat kosten kunnen ontstaan. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten6: {
        label: "Afsluiten",
        tekst: "Er wordt actie ondernomen. U ontvangt bericht van ons. Bedankt.",
        opties: {},
      },
      afsluiten7: { label: "Afsluiten", tekst: "U kunt indien nodig opnieuw contact opnemen. Bedankt.", opties: {} },
      afsluiten8: { label: "Afsluiten", tekst: "Uw melding is doorgezet naar de beheerder. Bedankt.", opties: {} },
      afsluiten9: {
        label: "Afsluiten",
        tekst: "Let op: kosten kunnen worden doorbelast. Bedankt voor uw melding.",
        opties: {},
      },
      afsluiten10: { label: "Afsluiten", tekst: "U wordt verder geholpen. Bedankt voor uw melding.", opties: {} },
      afsluiten11: { label: "Afsluiten", tekst: "U wordt geïnformeerd over de vervolgstappen. Bedankt.", opties: {} },
      afsluiten12: { label: "Afsluiten", tekst: "Wij nemen uw melding in behandeling. Bedankt.", opties: {} },
    },
  },
]
