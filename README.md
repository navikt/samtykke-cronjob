# samtykke-cronjob
CRON jobber for NAV's digitale samtykkeløsning for brukertester. Jobbene er satt til å kjøre en gang hver midnatt kl: 00:00. 

## Jobber
- DELETE HTTP kall som ber [samtykke-api](https://github.com/navikt/samtykke-api) om å slette alle samtykker som har utløpt og all relatert data.

## Kom i gang med utvikling

### Forutsetninger
- Node v18+
- Yarn v1.22+

### Kjør jobbene lokalt
For å kunne kjøre jobbene lokalt og oppnå ønsket adferd må [samtykke-api](https://github.com/navikt/samtykke-api) også kjøres lokalt.

Last ned avhengigheter \
`yarn install`

Kjør jobbene \
`yarn dev`

## Testmiljø på NAIS
Testmiljøet til jobbene lever i `dev-gcp` clusteret på NAIS og er konfigurert som en [Naisjob](https://doc.nais.io/naisjob/?h=naisjo). For å kunne inspisere Naisjob'en må [naisjob](https://doc.nais.io/device/?h=naisde) være aktivert og du må være medlem av av team-researchops. Kontakt i `#researchops` eller `#samtykke-løsning` på Slack for å få tilgang.

## For NAV-ansatte
Interne henvendelser kan sendes på Slack via kanalene `#researchops` eller `#samtykke-løsning`.