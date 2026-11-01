# Arshi Fatima — Professional Cosmetologist (React + Vite)

```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

The site uses hash routing (`/#/hair`), so the `dist` folder works on any static host with no server rules.

## Editing content
- **Prices & descriptions:** `src/data/services.js`
- **Phone, WhatsApp, Instagram, gallery list, notes:** `src/data/site.js`
- The WhatsApp number assumes country code **91** (India). Change `whatsappNumber` if needed.

## Adding photographs
Every image slot shows an "Add … Image" placeholder until a file with the matching name exists.
Drop a **.jpg** into the folder below using the exact file name — no code changes needed.

| Folder | File names |
|---|---|
| `public/images/hero/` | `hero-portrait.jpg`, `arshi-fatima-portrait.jpg`, `booking-banner.jpg` |
| `public/images/gallery/` | `bridal-makeup`, `party-makeup`, `hair-styling`, `hair-colour`, `hair-treatments`, `facial-skincare`, `manicure-pedicure`, `before-after` |
| `public/images/services/` | the service `id` (e.g. `threading.jpg`, `wax-full-leg-normal.jpg`, `normal-facial.jpg`, `body-polishing.jpg`, `normal-manicure.jpg`, `bridal-package-all-in-one.jpg`) plus home tiles `tile-makeup`, `tile-hair`, `tile-skin`, `tile-bridal` |
| `public/images/hair/` | `basic-haircut`, `advanced-haircut`, `normal-hair-spa`, `streax-hair-spa`, `loreal-hair-spa`, `global-colour`, `balayage`, `highlights`, `root-touch-up`, `rebonding-smoothening`, `keratin`, `nanoplastia`, `hair-botox` |
| `public/images/makeup/` | `party-makeup`, `hd-party-makeup`, `haldi-makeup`, `mehndi-makeup`, `sangeet-makeup`, `engagement-makeup`, `hd-engagement-makeup`, `bridal-makeup`, `hd-bridal-makeup` |
| `public/images/brands/` | `loreal-professional.png`, `streax-professional.png`, `schwarzkopf-professional.png` (use only logos you are permitted to display) |

Tip: in `npm run dev`, each placeholder shows the exact path it expects.
Use compressed images (about 1200px on the long edge, under ~250 KB).

## Booking form
There is no server, so the enquiry opens WhatsApp with the details pre-filled. The site never says a booking is confirmed — only that the enquiry is ready to send.
