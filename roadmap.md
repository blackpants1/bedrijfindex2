Gebruik dit design bij het gehele proces:
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            DutchBiz
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/categories" className="text-gray-600 hover:text-blue-900">
              Categories
            </Link>
            <Link href="/popular" className="text-gray-600 hover:text-blue-900">
              Popular
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-900">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="hero-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10L10 0ZM0 10V20H10L0 10Z" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Find the Best Dutch Businesses
            </h1>
            <div className="max-w-3xl mx-auto flex">
              <Input
                type="text"
                placeholder="Search for businesses..."
                className="flex-grow rounded-r-none text-gray-900"
              />
              <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Restaurants", "Tech Startups", "Retail", "Services"].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Trending Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Amsterdam Tech Hub",
                "Rotterdam Port Logistics",
                "Utrecht Culinary Delights",
              ].map((business) => (
                <div key={business} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{business}</h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <Link
                      href={`/business/${business.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-900 font-semibold flex items-center hover:underline"
                    >
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">Our Story</Link></li>
                <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2">
                <li><Link href="/add-business" className="hover:underline">Add Your Business</Link></li>
                <li><Link href="/advertising" className="hover:underline">Advertising</Link></li>
                <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="hover:underline">Help Center</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} DutchBiz Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
 



**Roadmap voor bedrijfindex.nl**

---

**Fase 1: Projectopzet en Ontwerp**

- **1.1 Keuze van Technologieën**
  - Gebruik de nieuwste versie van Next.js (bij voorkeur Next.js 13 met de App Router) voor de meest recente functies in SSR en SSG.
  - Zorg dat Node.js en alle dependencies up-to-date zijn.

- **1.2 Plannen van de Projectstructuur**
  - Ontwerp een schaalbare en onderhoudbare map- en bestandsstructuur.
  - Bepaal hoe gegevens worden beheerd, bijvoorbeeld door gebruik van JSON-bestanden voor initiële gegevens en integratie van de DataforSEO API voor dynamische gegevens.

- **1.3 UI/UX Ontwerp**
  - Ontwerp wireframes voor:
    - Homepagina
    - "Bedrijven in [Plaats]" indexpagina's
    - Categoriepagina's zoals `/bedrijven/[plaats]/[categorie]`
    - Individuele bedrijfspagina's met uitgebreide informatie
  - Zorg voor een responsief ontwerp dat gebruiksvriendelijk is op zowel desktop als mobiel.

---

**Fase 2: Gegevensintegratie**

- **2.1 Gegevens Parsing en Conversie**
  - Converteer `plaatsen.csv` en `gmb.csv` naar JSON voor eenvoudige toegang binnen Next.js.
  - Gebruik bibliotheken zoals `csvtojson` om dit proces te automatiseren.

- **2.2 Structureren van Gegevens**
  - Organiseer de gegevens in objecten en arrays:
    ```json
    {
      "plaatsen": ["Amsterdam", "Rotterdam", ...],
      "categorieën": ["Reclamebureau", "Restaurant", ...]
    }
    ```

- **2.3 Opslag van Gegevens**
  - Plaats de JSON-bestanden in een `data/` directory binnen het project.
  - Overweeg het gebruik van TypeScript voor typeveiligheid.

---

**Fase 3: Automatische Paginageneratie**

- **3.1 Dynamische Routes**
  - Maak gebruik van Next.js dynamische routing:
    - `/bedrijven/[plaats]/[categorie]/index.js` voor pagina's zoals `/bedrijven/amsterdam/reclamebureau`.
    - `[bedrijfId].js` voor individuele bedrijfspagina's.

- **3.2 getStaticPaths en getStaticProps**
  - Gebruik `getStaticPaths` om tijdens de build alle combinaties van plaatsen en categorieën te genereren.
  - Implementeer `getStaticProps` om basisgegevens op te halen en door te geven aan de pagina's.

- **3.3 Incremental Static Regeneration (ISR)**
  - Schakel ISR in om pagina's periodiek bij te werken met nieuwe gegevens van DataforSEO.

---

**Fase 4: Implementatie van SSR en SSG**

- **4.1 SSG voor Statische Pagina's**
  - Genereer statische pagina's voor combinaties van plaatsen en categorieën.
  - Gebruik SSG om deze pagina's tijdens de build te creëren voor optimale SEO-prestaties.

- **4.2 SSR voor Dynamische Inhoud**
  - Implementeer SSR op pagina's waar actuele gegevens van DataforSEO nodig zijn, zoals bedrijfslijsten en individuele bedrijfspagina's.
  - Gebruik `getServerSideProps` om gegevens in real-time op te halen.

- **4.3 Hybride Benadering**
  - Combineer SSG en SSR waar nodig, bijvoorbeeld door statische pagina's te voorzien van dynamische componenten die op de client worden geladen.

---

**Fase 5: SEO-optimalisatie**

- **5.1 Dynamische Meta Tags**
  - Gebruik de Next.js `Head`-component om meta-titels, beschrijvingen en Open Graph-tags dynamisch in te stellen op basis van plaats en categorie.

- **5.2 URL-Structuur**
  - Zorg voor SEO-vriendelijke en leesbare URL's, bijvoorbeeld `/bedrijven/amsterdam/reclamebureau`.

- **5.3 XML Sitemaps en Robots.txt**
  - Genereer een XML-sitemap met alle belangrijke pagina's.
  - Maak een `robots.txt`-bestand om zoekmachines te informeren over welke pagina's geïndexeerd moeten worden.

- **5.4 Gestructureerde Gegevens**
  - Implementeer JSON-LD schema markup voor bedrijven (`LocalBusiness` schema) om de zichtbaarheid in zoekresultaten te verbeteren.

---

**Fase 6: API-integratie met DataforSEO**

- **6.1 Opzetten van de DataforSEO API-client**
  - Installeer de benodigde pakketten en configureer de API-client.
  - Beveilig API-sleutels met behulp van omgevingsvariabelen.

- **6.2 Gegevensophaling van Google My Business via DataforSEO**
  - **6.2.1 Zoekopdrachten Formuleren**
    - Voor pagina's zoals `/bedrijven/amsterdam/reclamebureau`, stel een API-aanvraag samen om bedrijven in Amsterdam binnen de categorie 'reclamebureau' op te halen.
  - **6.2.2 Ophalen van Bedrijfsgegevens**
    - Haal de volgende gegevens op:
      - Bedrijfsnaam
      - Logo
      - Beschrijving
      - Website
      - Telefoonnummer
      - E-mailadres
      - Adres
      - Reviews en beoordelingen

- **6.3 Weergave van Gegevens op de Website**
  - **6.3.1 Lijstpagina's**
    - Toon een overzicht van bedrijven met essentiële informatie op de categoriepagina's.
  - **6.3.2 Individuele Bedrijfspagina's**
    - Geef gedetailleerde informatie weer, inclusief:
      - Volledige beschrijving
      - Contactgegevens
      - Reviews en beoordelingen
      - Kaartlocatie
  - **6.3.3 UI-componenten**
    - Ontwerp herbruikbare componenten voor bedrijfskaarten, reviewsecties, enz.

- **6.4 Caching en Prestatieoptimalisatie**
  - **6.4.1 Implementatie van Caching**
    - Gebruik server-side caching om de respons van de DataforSEO API te cachen.
  - **6.4.2 Optimalisatie van API-aanroepen**
    - Beperk het aantal API-aanroepen door batching en het hergebruiken van gegevens waar mogelijk.

---

**Fase 7: Geavanceerde Functies en Verbeteringen**

- **7.1 Zoekfunctionaliteit**
  - **7.1.1 Real-time Zoeken**
    - Implementeer een zoekbalk die gebruikers toestaat om te zoeken op bedrijfsnaam, categorie of locatie.
    - Gebruik DataforSEO om zoekresultaten dynamisch op te halen.
  - **7.1.2 Autocompletie**
    - Voeg autocompletie toe voor veelvoorkomende zoektermen en locaties.

- **7.2 Paginering en Lazy Loading**
  - **7.2.1 Paginering**
    - Voeg paginering toe aan resultatenpagina's om de laadtijd te verbeteren.
  - **7.2.2 Lazy Loading**
    - Gebruik lazy loading voor afbeeldingen en lijsten om prestaties te optimaliseren.

- **7.3 Gebruikersbeoordelingen en Interactie**
  - **7.3.1 Weergave van Reviews**
    - Toon gebruikersreviews en beoordelingen op bedrijfspagina's.
  - **7.3.2 Review-integratie**
    - Overweeg om gebruikers toe te staan reviews te plaatsen, met passende moderatie.

---

**Fase 8: Testen en Validatie**

- **8.1 Functionele Testen**
  - Test alle functionaliteiten, inclusief gegevensophaling, weergave en interacties.

- **8.2 Prestatie- en Belastbaarheidstesten**
  - Zorg dat de applicatie soepel blijft werken onder hoge belasting.

- **8.3 SEO-validatie**
  - Controleer of alle pagina's correct worden geïndexeerd en of meta-tags correct zijn ingesteld.

---

**Fase 9: Naleving en Juridische Overwegingen**

- **9.1 Naleving van Google My Business Richtlijnen**
  - **9.1.1 Gebruiksvoorwaarden**
    - Zorg dat het gebruik van Google My Business-gegevens via DataforSEO voldoet aan de servicevoorwaarden van Google.
  - **9.1.2 Toestemming en Rechten**
    - Bevestig dat je de rechten hebt om de opgehaalde gegevens te gebruiken en weer te geven.

- **9.2 Privacy en Gegevensbescherming**
  - **9.2.1 AVG-compliance**
    - Zorg dat de applicatie voldoet aan de Algemene Verordening Gegevensbescherming (AVG).
  - **9.2.2 Privacybeleid**
    - Stel een duidelijk privacybeleid op dat gebruikers informeert over hoe gegevens worden verzameld en gebruikt.

---

**Fase 10: Lancering en Nazorg**

- **10.1 Finale Controle**
  - Voer een volledige audit uit van de applicatie, inclusief functionaliteit, prestaties en SEO.

- **10.2 Deploy en Monitoring**
  - Deploy de applicatie naar de productieomgeving.
  - Stel monitoring in voor uptime, prestaties en fouten.

- **10.3 Gebruikersfeedback en Iteratie**
  - Verzamel feedback van gebruikers om de applicatie verder te verbeteren.

---

**Aanvullende Overwegingen**

- **Automatisering van Paginageneratie**
  - **Bulkgeneratie**
    - Gebruik scripts om automatisch routes en pagina's te genereren voor alle combinaties van plaatsen en categorieën.
  - **Unieke Inhoud**
    - Voeg unieke beschrijvingen en metadata toe aan elke pagina om duplicatie te voorkomen.

- **SEO-optimalisatie Maximaliseren**
  - **Content Kwaliteit**
    - Zorg voor hoogwaardige inhoud op elke pagina om de ranking te verbeteren.
  - **Linkbuilding**
    - Implementeer een interne linkstructuur die gebruikers en crawlers helpt om de site te navigeren.

- **Schaalbaarheid en Prestaties**
  - **Server Resources**
    - Optimaliseer serverresources om grote hoeveelheden verkeer en data aan te kunnen.
  - **CDN Gebruik**
    - Overweeg het gebruik van een Content Delivery Network om laadtijden te verbeteren.

---

Door deze aangepaste roadmap te volgen, integreer je DataforSEO om bedrijven direct uit Google My Business op te halen. Dit stelt je in staat om gebruikers actuele en gedetailleerde bedrijfsinformatie te bieden op pagina's zoals `/bedrijven/amsterdam/reclamebureau`, inclusief reviews, logo's, beschrijvingen, websites, contactgegevens en adressen. Deze aanpak verhoogt niet alleen de waarde voor gebruikers, maar verbetert ook de SEO en zichtbaarheid van je website op Google.

Relevante informatie over API

API DataforSEO:
API Username: roy@clickwave.nl
API Secret: a1d062bd9d93719d


curl --location --request POST 'https://api.dataforseo.com/v3/business_data/google/my_business_info/task_post' \
--header 'Authorization: Basic bG9naW46cGFzc3dvcmQ=' \
--header 'Content-Type: application/json' \
--data-raw '[{"keyword":"reclamebureau barneveld", "location_code":2528, "language_code":"nl"}]'



example output: 

{
  "keyword": "reclamebureau barneveld",
  "se_domain": "google.nl",
  "location_code": 2528,
  "language_code": "nl",
  "check_url": "https://www.google.nl/maps?cid=1239719648900193366&hl=nl&gl=NL",
  "datetime": "2024-11-11 20:00:53 +00:00",
  "item_types": [
    "google_business_info"
  ],
  "items_count": 1,
  "items": [
    {
      "type": "google_business_info",
      "rank_group": 1,
      "rank_absolute": 1,
      "position": "left",
      "title": "Van Laar Reklame",
      "description": null,
      "category": "Reclamebureau",
      "category_ids": [
        "advertising_agency"
      ],
      "additional_categories": null,
      "cid": "1239719648900193366",
      "feature_id": "0x47c64c73469f1bbb:0x11345e73cdc49c56",
      "address": "Bellstraat 15, 3771 AH Barneveld",
      "address_info": {
        "borough": null,
        "address": "Bellstraat 15",
        "city": "Barneveld",
        "zip": "3771 AH",
        "region": null,
        "country_code": "NL"
      },
      "place_id": "ChIJuxufRnNMxkcRVpzEzXNeNBE",
      "phone": "+31342400968",
      "url": "http://www.vanlaarreklame.nl/",
      "contact_url": null,
      "contributor_url": "https://maps.google.com/maps/contrib/105379335269913696568",
      "domain": "www.vanlaarreklame.nl",
      "logo": "https://lh4.googleusercontent.com/-JLh5LGEHe_Y/AAAAAAAAAAI/AAAAAAAAAAA/J7bhnQy2qo4/s44-p-k-no-ns-nd/photo.jpg",
      "main_image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lThMQh0oCooXvPwDkR-X5w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=117.68265&pitch=0&thumbfov=100",
      "total_photos": 2,
      "snippet": "Bellstraat 15, 3771 AH Barneveld",
      "latitude": 52.137370499999996,
      "longitude": 5.5972063,
      "is_claimed": true,
      "questions_and_answers_count": null,
      "attributes": {
        "available_attributes": {
          "accessibility": [
            "has_wheelchair_accessible_entrance",
            "has_wheelchair_accessible_parking"
          ]
        },
        "unavailable_attributes": null
      },
      "place_topics": null,
      "rating": {
        "rating_type": "Max5",
        "value": 4.7,
        "votes_count": 13,
        "rating_max": null
      },
      "hotel_rating": null,
      "price_level": null,
      "rating_distribution": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 12
      },
      "people_also_search": [
        {
          "cid": "15358358114073474714",
          "feature_id": "0x0:0xd523d9552a96769a",
          "title": "Van de Pol Reclame",
          "rating": {
            "rating_type": "Max5",
            "value": 4.8,
            "votes_count": 5,
            "rating_max": null
          }
        },
        {
          "cid": "5604047141823433365",
          "feature_id": "0x0:0x4dc5932f18edca95",
          "title": "Reclame Company",
          "rating": {
            "rating_type": "Max5",
            "value": null,
            "votes_count": null,
            "rating_max": null
          }
        },
        {
          "cid": "17439666823105154712",
          "feature_id": "0x0:0xf206249388590e98",
          "title": "Van Essen van Raay B.V.",
          "rating": {
            "rating_type": "Max5",
            "value": 4.7,
            "votes_count": 15,
            "rating_max": null
          }
        },
        {
          "cid": "17633065473135902289",
          "feature_id": "0x0:0xf4b53b9fb3787e51",
          "title": "Bouwbedrijf Van Laar Barneveld",
          "rating": {
            "rating_type": "Max5",
            "value": 3,
            "votes_count": 1,
            "rating_max": null
          }
        },
        {
          "cid": "5667535836597801897",
          "feature_id": "0x0:0x4ea721d0c43553a9",
          "title": "Rijken Reclame B.V.",
          "rating": {
            "rating_type": "Max5",
            "value": 5,
            "votes_count": 2,
            "rating_max": null
          }
        }
      ],
      "work_time": {
        "work_hours": {
          "timetable": {
            "sunday": null,
            "monday": [
              {
                "open": {
                  "hour": 8,
                  "minute": 0
                },
                "close": {
                  "hour": 17,
                  "minute": 0
                }
              }
            ],
            "tuesday": [
              {
                "open": {
                  "hour": 8,
                  "minute": 0
                },
                "close": {
                  "hour": 17,
                  "minute": 0
                }
              }
            ],
            "wednesday": [
              {
                "open": {
                  "hour": 8,
                  "minute": 0
                },
                "close": {
                  "hour": 17,
                  "minute": 0
                }
              }
            ],
            "thursday": [
              {
                "open": {
                  "hour": 8,
                  "minute": 0
                },
                "close": {
                  "hour": 17,
                  "minute": 0
                }
              }
            ],
            "friday": [
              {
                "open": {
                  "hour": 8,
                  "minute": 0
                },
                "close": {
                  "hour": 17,
                  "minute": 0
                }
              }
            ],
            "saturday": null
          },
          "current_status": "close"
        }
      },
      "popular_times": null,
      "local_business_links": null,
      "is_directory_item": false,
      "directory": null
    }
  ]
}

   




info:
Based on the provided roadmap for bedrijfindex.nl, I'll outline the key steps and provide code snippets for implementing the project using the latest version of Next.js (Next.js 13 with App Router). Let's go through the main phases and highlight important code examples.

## Fase 1: Projectopzet en Ontwerp

For this phase, we'll focus on setting up the Next.js project with the App Router.

First, create a new Next.js project:

```bash
npx create-next-app@latest bedrijfindex
```

When prompted, choose the following options:
- Use TypeScript
- Use ESLint
- Use Tailwind CSS (for styling)
- Use `src/` directory
- Use App Router
- Customize the default import alias

Now, let's set up the basic project structure:

```
src/
  app/
    layout.tsx
    page.tsx
    bedrijven/
      [plaats]/
        [categorie]/
          page.tsx
        page.tsx
      page.tsx
  components/
  lib/
  types/
```

## Fase 2: Gegevensintegratie

For converting CSV to JSON, you can use the `csvtojson` library. Install it with:

```bash
npm install csvtojson
```

Create a script to convert your CSV files to JSON:

```typescript
// src/scripts/convertCsvToJson.ts
import csv from 'csvtojson';
import fs from 'fs';
import path from 'path';

async function convertCsvToJson(inputFile: string, outputFile: string) {
  const jsonArray = await csv().fromFile(inputFile);
  fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2));
}

convertCsvToJson(
  path.join(process.cwd(), 'data', 'plaatsen.csv'),
  path.join(process.cwd(), 'data', 'plaatsen.json')
);

convertCsvToJson(
  path.join(process.cwd(), 'data', 'gmb.csv'),
  path.join(process.cwd(), 'data', 'gmb.json')
);
```

## Fase 3: Automatische Paginageneratie

For dynamic routing, create the following files:

```typescript
// src/app/bedrijven/[plaats]/[categorie]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Implement logic to generate all combinations of plaats and categorie
}

export async function generateMetadata({ params }: { params: { plaats: string, categorie: string } }): Promise<Metadata> {
  // Generate metadata based on plaats and categorie
}

export default function BedrijvenPage({ params }: { params: { plaats: string, categorie: string } }) {
  // Implement page content
}
```

## Fase 4: Implementatie van SSR en SSG

For SSG with ISR:

```typescript
// src/app/bedrijven/[plaats]/page.tsx
import { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  // Generate static params for all plaatsen
}

export async function generateMetadata({ params }: { params: { plaats: string } }): Promise<Metadata> {
  // Generate metadata for the plaats
}

export default async function PlaatsPage({ params }: { params: { plaats: string } }) {
  // Fetch and display data for the plaats
}
```

## Fase 5: SEO-optimalisatie

Implement JSON-LD schema markup:

```typescript
// src/components/LocalBusinessSchema.tsx
import { LocalBusiness, WithContext } from 'schema-dts';

interface LocalBusinessSchemaProps {
  business: {
    name: string;
    description: string;
    address: string;
    telephone: string;
    url: string;
  };
}

export default function LocalBusinessSchema({ business }: LocalBusinessSchemaProps) {
  const schema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    address: business.address,
    telephone: business.telephone,
    url: business.url,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

## Fase 6: API-integratie met DataforSEO

Set up the DataforSEO API client:

```typescript
// src/lib/dataForSeoClient.ts
import axios from 'axios';

const dataForSeoClient = axios.create({
  baseURL: 'https://api.dataforseo.com/',
  auth: {
    username: process.env.DATAFORSEO_LOGIN!,
    password: process.env.DATAFORSEO_PASSWORD!,
  },
});

export async function getBusinessesForLocation(location: string, category: string) {
  try {
    const response = await dataForSeoClient.post('/v3/business_data/google/my_business/search', {
      location_name: location,
      keyword: category,
      language_name: 'Dutch',
      limit: 20,
    });
    return response.data.tasks[0].result;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return null;
  }
}
```

## Fase 7: Geavanceerde Functies en Verbeteringen

Implement a search functionality:

```typescript
// src/components/Search.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/zoeken?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek bedrijven..."
      />
      <button type="submit">Zoeken</button>
    </form>
  );
}
```

## Fase 8: Testen en Validatie

For testing, you can use Jest and React Testing Library. Add a test file:

```typescript
// src/app/bedrijven/[plaats]/[categorie]/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react';
import BedrijvenPage from '../page';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('BedrijvenPage', () => {
  it('renders the page with correct plaats and categorie', () => {
    render(<BedrijvenPage params={{ plaats: 'amsterdam', categorie: 'reclamebureau' }} />);
    expect(screen.getByText('Reclamebureaus in Amsterdam')).toBeInTheDocument();
  });
});
```

These code snippets provide a starting point for implementing the key features of bedrijfindex.nl using Next.js 13 with the App Router. Remember to adapt and expand these examples to fit the specific requirements of your project.

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/23260276/a9e60f31-228b-4793-a114-bcc4ab853ca7/paste.txt
[2] https://nextjs.org/docs/13
[3] https://nextjs.org/docs/app/building-your-application/routing
[4] https://nextjs.org/docs/pages/building-your-application/data-fetching
[5] https://nextjs.org/docs/app/building-your-application/optimizing/metadata
[6] https://nextjs.org/docs/13/app/api-reference/file-conventions/metadata/sitemap
[7] https://nextjs.org/docs/pages/building-your-application/upgrading/version-13
[8] https://nextjs.org/blog/next-13
[9] https://dev.to/niazmorshed2007/a-comprehensive-guide-to-nextjs-13-app-router-part-1-41ki
[10] https://nextjs.org/docs/13/app/building-your-application/data-fetching/fetching
[11] https://dataforseo.com/blog/a-kickstart-guide-to-using-dataforseo-apis
[12] https://nextjsstarter.com/blog/seo-nextjs-best-practices-elevate-your-search-rank/
[13] https://dev.to/adrianbailador/metadata-and-dynamic-metadata-in-nextjs-3e9m
[14] https://dev.to/paulund/nextjs-add-xml-sitemap-2b2n

