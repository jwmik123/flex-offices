import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden – FlexHoorn",
  description:
    "Lees de algemene voorwaarden van Flex Offices Hoorn.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Algemene Voorwaarden
          </h1>
          <p className="text-slate-500 mb-12">Flex Offices Hoorn</p>

          <div className="prose prose-slate max-w-none space-y-10 text-slate-700">

            <section>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten
                en diensten van Flex Offices Hoorn, gevestigd te Hoorn, ingeschreven bij de Kamer
                van Koophandel onder nummer [KvK-nummer], hierna te noemen: &ldquo;Verhuurder&rdquo;.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 1 – Definities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Verhuurder:</strong> Flex Offices Hoorn.</li>
                <li><strong>Gebruiker:</strong> de natuurlijke of rechtspersoon die gebruik maakt van een werkplek, kantoorruimte, vergaderruimte of andere faciliteiten.</li>
                <li><strong>Overeenkomst:</strong> iedere afspraak tussen Verhuurder en Gebruiker met betrekking tot het gebruik van een ruimte of dienst.</li>
                <li><strong>Ruimte:</strong> de ter beschikking gestelde werkplek, kantoorruimte, vergaderruimte of overige faciliteiten.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 2 – Toepasselijkheid</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Verhuurder.</li>
                <li>Afwijkingen zijn uitsluitend geldig indien schriftelijk overeengekomen.</li>
                <li>Algemene voorwaarden van Gebruiker worden uitdrukkelijk van de hand gewezen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 3 – Totstandkoming overeenkomst</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Een overeenkomst komt tot stand door schriftelijke bevestiging, digitale bevestiging of feitelijk gebruik van de ruimte.</li>
                <li>Verhuurder behoudt zich het recht voor een aanvraag zonder opgaaf van redenen te weigeren.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 4 – Duur en beëindiging</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>De overeenkomst wordt aangegaan voor de overeengekomen duur (bijvoorbeeld per uur, dag, maand of jaar).</li>
                <li>Maandabonnementen zijn maandelijks opzegbaar met een opzegtermijn van één maand, tenzij anders overeengekomen.</li>
                <li>Bij wanbetaling of ernstige overtreding van deze voorwaarden kan Verhuurder de overeenkomst per direct beëindigen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 5 – Tarieven en betaling</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Alle vermelde tarieven zijn exclusief btw, tenzij anders aangegeven.</li>
                <li>Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan.</li>
                <li>Bij niet-tijdige betaling is Gebruiker van rechtswege in verzuim en is wettelijke handelsrente verschuldigd.</li>
                <li>Incassokosten komen volledig voor rekening van Gebruiker.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 6 – Gebruik van de ruimte</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gebruiker dient de ruimte zorgvuldig en overeenkomstig de bestemming te gebruiken.</li>
                <li>
                  Het is niet toegestaan:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Overlast te veroorzaken;</li>
                    <li>Illegale activiteiten te verrichten;</li>
                    <li>Wijzigingen aan te brengen zonder schriftelijke toestemming;</li>
                    <li>De ruimte onder te verhuren zonder toestemming.</li>
                  </ul>
                </li>
                <li>Gebruiker is verantwoordelijk voor gedragingen van medewerkers, bezoekers en derden.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 7 – Toegang en openingstijden</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Toegang wordt verleend conform de overeengekomen tijden of het gekozen abonnement.</li>
                <li>Verhuurder behoudt zich het recht voor openingstijden aan te passen.</li>
                <li>Bij misbruik kan toegang tijdelijk of definitief worden ontzegd.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 8 – Aansprakelijkheid</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verhuurder is niet aansprakelijk voor verlies, diefstal of beschadiging van eigendommen van Gebruiker.</li>
                <li>Verhuurder is uitsluitend aansprakelijk voor directe schade indien sprake is van opzet of grove nalatigheid.</li>
                <li>De aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering wordt uitgekeerd.</li>
                <li>Gebruiker vrijwaart Verhuurder voor aanspraken van derden voortvloeiend uit het gebruik van de ruimte.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 9 – Internet en faciliteiten</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Internettoegang wordt aangeboden als aanvullende service zonder gegarandeerde beschikbaarheid.</li>
                <li>Het is niet toegestaan het netwerk te gebruiken voor illegale activiteiten of het verspreiden van schadelijke software.</li>
                <li>Verhuurder is niet aansprakelijk voor storingen in internet, stroom, verwarming of andere voorzieningen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 10 – Huisregels</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gebruiker dient zich te houden aan de geldende huisregels.</li>
                <li>De huisregels maken integraal onderdeel uit van deze algemene voorwaarden.</li>
                <li>Verhuurder kan huisregels wijzigen indien noodzakelijk voor een ordelijk gebruik van het pand.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 11 – Overmacht</h2>
              <p>
                Verhuurder is niet aansprakelijk voor tekortkomingen als gevolg van overmacht, waaronder
                maar niet beperkt tot brand, waterschade, pandemieën, overheidsmaatregelen, storingen of
                andere omstandigheden buiten haar invloedssfeer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 12 – Privacy</h2>
              <p>
                Persoonsgegevens worden verwerkt conform de geldende privacywetgeving (AVG). Meer
                informatie is opgenomen in de privacyverklaring op de website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Artikel 13 – Toepasselijk recht en geschillen</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Op alle overeenkomsten is Nederlands recht van toepassing.</li>
                <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Noord-Holland.</li>
              </ul>
            </section>

          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-block bg-slate-900 text-white px-8 py-3 font-medium hover:bg-slate-700 transition-colors duration-200"
            >
              ← Terug naar home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
