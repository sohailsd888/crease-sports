# Crease Sports — Play Your Next Level

Responsive frontend concept built with HTML, CSS and modern JavaScript. No framework, installation, build step or backend is required.

## Run
Open `dist/index.html` directly, use VS Code Live Server, or run `python -m http.server 5500 --directory dist` and visit http://localhost:5500.

## Pages
- Home 1 and Home 2, with their own campaign and video layouts.
- Products: 48 items, 12 each for cricket, football, badminton and fitness.
- About Us, Services and four linked service detail pages.
- Brands: 16 named catalogue brands, with search and sport filters.
- Team Orders: teamwear/equipment planning and a downloadable brief.
- Contact Us, Privacy Policy and four equipment guides.

No dashboard or login page is included. The old Blogs address redirects to Brands.

## Design and motion
Locally bundled Teko headings, Space Grotesk body text and Caveat handwritten accents. Larger body, navigation and control text; responsive photo heroes on every main page; scroll reveals; image hover motion; moving ticker; reading progress and back-to-top control. Reduced-motion preferences disable entrance animations and background autoplay. Home 2's muted video has explicit play/pause control; practice films use native video controls. Videos pause when the document is hidden; the background film pauses when it leaves the viewport.

## Source
`dist/*.html`: markup. `dist/styles.css`: base design. `dist/redesign.css`: current typography, layout and motion. `dist/v2-fonts.css`: additional local font declarations. `dist/products-data.js`: product records. `dist/app.js`: catalogue, bag and form logic. `dist/experience.js`: dropdown, motion, film controls and journal filters.

Bag, favorites and theme/direction preferences use localStorage when available. Forms generate downloadable text drafts and do not send messages or place orders. No checkout or payment is processed. Replace illustrative store details, descriptions, pricing and service availability before commercial launch.

## Media credits
The original cricket campaign hero was created using built-in image generation. Equipment SVGs are original code-native illustrations. Lifestyle photographs are used as editorial sports imagery, not as product images or endorsements.

Sports photos from Unsplash (URLs identify the original photo records):
- Football action: https://unsplash.com/photos/1574629810360-7efbbe195018
- Gym: https://images.unsplash.com/photo-1534438327276-14e5300c3a48
- Training: https://images.unsplash.com/photo-1517836357463-d25dfeac3438
- Stadium: https://images.unsplash.com/photo-1540747913346-19e32dc3e97e
- Runners: https://images.unsplash.com/photo-1552674605-db6ffd4facb5
- Shoe campaign: https://images.unsplash.com/photo-1542291026-7eec264c27ff
- Football stadium: https://images.unsplash.com/photo-1522778119026-d647f0596c20
- Badminton photo: https://www.pexels.com/photo/badminton-rackets-and-shuttlecocks-on-a-white-background-6307231/
- Cricket practice film: Dhanush N / Pexels, https://www.pexels.com/video/cricket-training-session-with-players-practicing-37115439/ . Local 1280×720 H.264, 20.64 seconds, no audio. Poster is a frame from the film.

Google Fonts are bundled locally. SIL Open Font License files are in `dist/assets/fonts/` alongside Teko, Space Grotesk, Caveat, Barlow Condensed and DM Sans.

## Validation
JavaScript syntax passed. All page IDs, local links, anchors, poster/image/video/font assets and navigation targets were checked. A Node DOM harness checked initialisation on all 11 content pages; menu/dropdown and Escape behavior; theme/RTL; product filters and bag details; blog category filters; video play/pause state; and downloadable form drafts. Video format and dimensions were checked with ffprobe. Browser visual/responsive QA was unavailable in this environment.

## Choice World reference refinement

The supplied screenshot and https://choiceworld.netlify.app/ informed the rounded plain two-row Home dropdown, accent underline, softer card shapes, split Home 1 hero and contact-rich footer. Home 1 now has a horizontally scrollable photo gallery; Home 2 includes kit-planning cards; About adds an editorial collage; Products adds equipment guides; Services adds six FAQs; Contact adds direct contact cards and a store-visit checklist.

The footer provides a reserved .example email, a clearly marked placeholder phone number, illustrative address and hours, and social links to platform homepages. These are examples, not verified shop contacts or social accounts. Update them together on all pages when real shop details are supplied.

All eleven content pages passed link/asset/ID checks, footer contact checks, and a check for duplicate photography within each page. There are 29 distinct photographic assets in use. Catalogue variants now use twelve distinct equipment SVG assets, with the 5 kg dumbbell correctly labelled. The DOM interaction harness also checks pointer opening, outside closing, ArrowDown focus and Escape closing for the new dropdown, plus gallery movement in RTL. Browser visual verification remains unavailable.

Additional locally bundled Pexels photographs (editorial inspiration only; people and shops do not represent Crease staff or premises):
- `cricket-portrait.jpg`: https://www.pexels.com/photo/35801178/
- `cricket-field.jpg`: https://www.pexels.com/photo/4770740/
- `cricket-team.jpg`: https://www.pexels.com/photo/21415109/
- `cricket-nets.jpg`: https://www.pexels.com/photo/12704362/
- `cricket-player.jpg`: https://www.pexels.com/photo/35801176/
- `football-squad.jpg`: https://www.pexels.com/photo/30584997/
- `football-duo.jpg`: https://www.pexels.com/photo/31543186/
- `football-training.jpg`: https://www.pexels.com/photo/35779796/
- `football-coach.jpg`: https://www.pexels.com/photo/16543167/
- `football-community.jpg`: https://www.pexels.com/photo/16499012/
- `badminton-action.jpg`: https://www.pexels.com/photo/8796050/
- `badminton-court.jpg`: https://www.pexels.com/photo/32975183/
- `badminton-woman.jpg`: https://www.pexels.com/photo/8007421/
- `badminton-focus.jpg`: https://www.pexels.com/photo/8007212/
- `badminton-serve.jpg`: https://www.pexels.com/photo/8007076/
- `badminton-victory.jpg`: https://www.pexels.com/photo/29873465/
- `sports-retail.jpg`: https://www.pexels.com/photo/26891191/
- `shop-interior.jpg`: https://www.pexels.com/photo/4914811/
- `gym-session.jpg`: https://www.pexels.com/photo/1552242/
- `strength-space.jpg`: https://www.pexels.com/photo/1954524/
- `fitness-movement.jpg`: https://www.pexels.com/photo/416778/

## Image fitting and theme update

The top announcement strip and centred frontend-concept footer line have been removed from all 11 content pages. Footer backgrounds, text, icons, borders and secondary labels now use explicit light/dark theme tokens. `dist/media-theme.css` provides full-source contain framing, portrait-friendly card heights, complete image dimensions and dedicated video framing. Banner footage uses contained media, with text over a separate gradient. Hover effects no longer enlarge photos beyond their frames.

There are 61 unique editorial photo placements across the site, including the new animated Home 2 photo interlude. No photo or video source is reused across the content pages. The original cricket film appears only on Home 1. Home 2 uses a badminton background film and separate football drills film; the journal uses a separate football practice film. The three new videos are local, silent H.264 excerpts with distinct poster frames and user playback controls. Existing product catalogue images intentionally retain consistent product identities.

Validation: all page/asset/anchor checks, image decode and unique-source/hash checks passed; all 11 content pages passed the DOM interaction harness; all four video sources have distinct posters. Source photos and the user’s six screenshots were inspected. A live browser rendering check was unavailable.

Additional photographic media in use:
- `cricket-37144640.jpg`: https://www.pexels.com/photo/37144640/
- `cricket-36088041.jpg`: https://www.pexels.com/photo/36088041/
- `cricket-36088039.jpg`: https://www.pexels.com/photo/36088039/
- `cricket-32801556.jpg`: https://www.pexels.com/photo/32801556/
- `cricket-32801390.jpg`: https://www.pexels.com/photo/32801390/
- `cricket-31171122.jpg`: https://www.pexels.com/photo/31171122/
- `cricket-13067379.jpg`: https://www.pexels.com/photo/13067379/
- `badminton-12887090.jpg`: https://www.pexels.com/photo/12887090/
- `badminton-12886742.jpg`: https://www.pexels.com/photo/12886742/
- `badminton-5204828.jpg`: https://www.pexels.com/photo/5204828/
- `badminton-13701956.jpg`: https://www.pexels.com/photo/13701956/
- `badminton-6878017.jpg`: https://www.pexels.com/photo/6878017/
- `badminton-8496276.jpg`: https://www.pexels.com/photo/8496276/
- `badminton-12630112.jpg`: https://www.pexels.com/photo/12630112/
- `badminton-8007408.jpg`: https://www.pexels.com/photo/8007408/
- `badminton-8007419.jpg`: https://www.pexels.com/photo/8007419/
- `fitness-17782876.jpg`: https://www.pexels.com/photo/17782876/
- `fitness-20566196.jpg`: https://www.pexels.com/photo/20566196/
- `fitness-20044110.jpg`: https://www.pexels.com/photo/20044110/
- `fitness-36096460.jpg`: https://www.pexels.com/photo/36096460/
- `fitness-5327469.jpg`: https://www.pexels.com/photo/5327469/
- `fitness-13318591.jpg`: https://www.pexels.com/photo/13318591/
- `fitness-4959808.jpg`: https://www.pexels.com/photo/4959808/
- `football-38675955.jpg`: https://www.pexels.com/photo/38675955/
- `football-30726604.jpg`: https://www.pexels.com/photo/30726604/
- `football-9669683.jpg`: https://www.pexels.com/photo/9669683/
- `football-30585366.jpg`: https://www.pexels.com/photo/30585366/
- `football-30584998.jpg`: https://www.pexels.com/photo/30584998/
- `football-32285126.jpg`: https://www.pexels.com/photo/32285126/
- `cricket-30678437.jpg`: https://www.pexels.com/photo/30678437/
- `cricket-35887587.jpg`: https://www.pexels.com/photo/35887587/
- `fitness-414029.jpg`: https://www.pexels.com/photo/414029/
- `fitness-2261477.jpg`: https://www.pexels.com/photo/2261477/

Additional film credits:
- Football practice: Tima Miroshnichenko / Pexels, https://www.pexels.com/video/football-players-practicing-6077696/
- Football drills: Tima Miroshnichenko / Pexels, https://www.pexels.com/video/football-players-having-training-6077689/
- Badminton rally: Pexels, https://www.pexels.com/video/teammates-playing-badminton-together-8053487/

## Photographic catalogue and cinema refresh

The current design is completed by `dist/premium.css` and `dist/cinema.js`. Home 1 now uses a three-scene full-width campaign: outdoor cricket footage, football photography and a running/fitness scene. It has sport selectors, previous/next buttons, matching shopping links, automatic timing, a motion pause control, document-visibility handling and a reduced-motion default. The new headline uses two balanced rows.

All 12 product records, all 20 static product cards, product search/filter results, quick view and bag thumbnails now use real equipment photographs instead of SVG illustrations. Product weights and specific material claims were removed where the photograph does not verify them. Product imagery remains consistent when the same item appears in multiple catalogue contexts.

Card media now fills its frame with cover fitting and explicit focal positioning, replacing the earlier blanket contain rule that introduced side gaps. About is rebuilt as a compact photographic story, three values cards and a native training-film player. Services also adds a separate outdoor cricket reel. There are 7 distinct video sources across the site. Portrait film players use portrait-shaped elements rather than black side bars.

The footer’s explanatory example annotations are removed. Its bottom row is © 2026 Crease Sports. All rights reserved. at the left and a functioning Privacy Policy link at the right. The new `privacy-policy.html` describes the actual browser-local storage and draft behavior and includes photographic attribution. Contact values are still the existing reserved example domain and placeholder phone; no real store details were invented.

Validation: all 12 content pages passed heading, ID, link, anchor, asset, footer and privacy-link checks; 12 unique JPG product assets were decoded and verified; all 20 static cards were checked; 7 distinct videos were found. Shared interactions passed on every page. Dedicated hero tests checked scene changes, shopping-link changes, labels, pause/resume, automatic cycling, visibility and reduced motion. Source photos and all seven supplied screenshots were inspected. Live browser visual/responsive verification was unavailable.

Real product photographs: 
- `product-cricket-bat.jpg`: https://www.pexels.com/photo/20652481/
- `product-football.jpg`: https://www.pexels.com/photo/3999307/
- `product-racket.jpg`: https://www.pexels.com/photo/6307230/
- `product-dumbbell.jpg`: https://www.pexels.com/photo/38721839/
- `product-cricket-ball.jpg`: https://www.pexels.com/photo/30401506/
- `product-jersey.jpg`: https://www.pexels.com/photo/18256096/
- `product-shuttle.jpg`: https://www.pexels.com/photo/16688911/
- `product-mat.jpg`: https://www.pexels.com/photo/6193815/
- `product-street-ball.jpg`: https://www.pexels.com/photo/364308/
- `product-control-racket.jpg`: https://www.pexels.com/photo/12058678/
- `product-compact-dumbbell.jpg`: https://www.pexels.com/photo/11618178/
- `product-academy-bat.jpg`: “A Modern Cricket Bat” by Arv94, https://commons.wikimedia.org/wiki/File:A_Modern_Cricket_Bat.jpg — CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/ . Resized from 6000×4000 to 1500×1000; the resized photograph retains the source licence. Attribution is accessible in the site’s Privacy Policy photography section.

Additional film sources:
- `cricket-outdoors.mp4`: https://www.pexels.com/video/cricket-practice-in-outdoor-net-session-37317943/ — local silent excerpt, distinct poster.
- `strength-session.mp4`: https://www.pexels.com/video/intense-gym-workout-with-dumbbells-35075300/ — local silent excerpt, distinct poster.
- `cricket-campaign.mp4`: https://www.pexels.com/video/dynamic-cricket-practice-session-on-green-field-36754728/ — local silent excerpt, distinct poster.

## Expanded catalogue and final card polish — October 19, 2026

The catalogue now contains 48 products: 12 each for cricket, football, badminton and fitness. Existing IDs 1–12 are preserved for saved kit bags and favourites. There are 36 additional distinct equipment photographs, with source URLs in `dist/catalogue-sources.json` and a link from the photography credits. Product names identify the pictured branded equipment. Prices remain illustrative; there is no stock confirmation or payment processing.

Removed the decorative numerical overlays from sport category photos and About values photos, and removed numerical prefixes from service image labels and Home 2 image-card captions. Sport-card arrows remain aligned at the upper right. All hero banners now have a straight edge rather than mismatched rounded lower corners.

The shop now shows 48 total items and 12 on each sport tab. Static catalogue markup and interactive results both include all 48 products. Studio equipment photographs use a white, fully fitted frame in cards, quick view and bag thumbnails so narrow rackets and wider shoes remain intact. Lifestyle photos retain their focal cropping. Product text and price rows align consistently; quick-view actions are also exposed on keyboard focus. Search, sorting, saved items and kit bag interactions continue to work with the expanded catalogue.

Validation passed: all 12 content pages, local links/anchors/media, 48 unique decoded photo assets, 12 records per sport, distinct IDs, static card coverage and badge removal. Shared interaction checks covered each sport filter, empty results, all three sorts, a new-item search, quick view, favourites and bag persistence. Hero controls, pause/visibility handling and both motion preferences passed. The two supplied screenshots and the 36-photo contact sheet were inspected. Browser visual/responsive verification was unavailable.

## Targeted presentation fixes — October 21, 2026

Removed the shopping-page Photography credits link and its quick-view counterpart. Required image attribution remains with the existing policy information, now labelled Media sources. Replaced the Home dropdown's text glyph with a 16px SVG chevron on all 12 content pages, retaining its expanded-state rotation and existing keyboard/menu behavior.

Home 2's hero now uses a flexible two-row layout with the background-film controls in normal flow, so the controls and headline cannot occupy the same area as content wraps. Removed the decorative vertical side caption, added modest heading line spacing, and allowed its image callout to grow with content. These layout rules are scoped to Home 2. The One more over card now uses the previously unused, sharper `cricket-36950379.jpg` match photograph, with a 65% vertical focal point that keeps the pitch visible. Photo reference: https://www.pexels.com/photo/36950379/ .

Validation: local asset/link/anchor checks across 12 pages, all shared interaction checks, the expanded catalogue interactions and hero motion checks passed. Product data is byte-for-byte unchanged and every footer matches the previous version. The local source photo was inspected. The three newly referenced screenshots were missing from scratch, so the fixes were based on the identified components and existing source. Browser visual/responsive verification was unavailable.

## Crease Sports vector identity — October 21, 2026

Replaced the original text-built C/slash logo with an original angular C monogram, paired crease/speed strokes and an outlined italic Crease wordmark. The orange mark is paired with forest-green lettering on light backgrounds and warm-white lettering in dark mode. All 24 header/footer instances across the 12 content pages reference the same light/dark SVG assets. The browser favicon now uses the matching mark. Header and footer sizes have explicit responsive dimensions to prevent layout jumps.

Assets: `dist/assets/crease-logo-light.svg`, `crease-logo-dark.svg`, `crease-mark.svg` and `favicon.svg`. Transparent PNG wordmark exports are also included at 1344px wide. The wordmark and subtitle are vector outlines derived from the bundled Teko and Space Grotesk fonts; their font licence files remain included. The SVGs do not depend on fonts loading at display time. The angular mark is original vector artwork.

Verification: SVG XML/outlines, all 24 placements and favicon references passed. Link/asset checks, catalogue/shared interactions and hero-motion checks passed. Header logos were visually checked in both themes and the dark footer was checked in the managed browser preview. Catalogue data, shop logic, page content and footer contact information remain unchanged. Mobile CSS sizing is included; browser device emulation was not used.

## Illustrated cricket and sports-store logo — October 21, 2026

The current logo replaces the angular C monogram with an illustrated equipment badge: a willow cricket bat, stitched red cricket ball, badminton racket and football inside an ivory/orange circular medallion. Its horizontal arrangement follows the supplied shop-logo reference: illustrated badge at left, title-case Crease Sports name at right, and Cricket & Sports Store beneath. The wordmark uses outlined Space Grotesk lettering in forest green/cream with orange Sports lettering.

All 24 header/footer placements and the favicon use the illustrated identity. Existing light/dark asset names remain stable. The full original transparent illustration is `dist/assets/crease-equipment-emblem.png`; a small embedded copy is used for website SVGs. `crease-logo-light.png` and `crease-logo-dark.png` are 1680px-wide transparent exports created using the original illustration for clarity. The SVG wordmarks include an embedded PNG illustration and outlined lettering; they are not entirely vector illustrations. The original generation prompt is in `dist/assets/crease-logo-design-notes.md`.

Validation: all 24 logo placements, embedded assets, SVG XML and favicon references passed; full catalogue/page asset checks, shared interactions and hero controls passed. The header was checked in both themes and the light footer was visually checked in the managed browser. Product records, application scripts and non-logo page content remain unchanged.

## Stylish wordmark and readable tagline — October 21, 2026

The current branding refines the equipment illustration with fewer decorative details and replaces the plain title-case font with outlined Barlow Condensed Black lettering, slanted forward by 18%. CREASE uses forest-green/cream lettering and SPORTS uses orange, with a thin orange separator above the subtitle. The Cricket & Sports Store tagline uses Barlow Condensed SemiBold at a 19-unit cap height, up from 8.2. Its rendered desktop cap height is approximately 11.4px rather than 4.5px. The desktop logo is now 264px wide; the compact mobile footprint remains 141px so the existing menu controls still fit.

Light/dark logos, the matching badge/favicon, all 24 placements and transparent PNG exports are updated. SVG clipping cleans the badge's outer edge while preserving the bat grip. PNG wordmarks are now 1760×448 and use the full-resolution generated illustration. Current assets, generation method and the exact prompt are documented in assets/crease-logo-design-notes.md. Existing Barlow font licences remain included.

The header was visually checked in light/dark themes and the dark footer was checked in the managed browser. No catalogue data or interaction code changed. All shared page/asset and interaction checks passed.

## Brands and Team Orders — October 22, 2026

Services is replaced by Team Orders and Blogs by Brands. Navigation, footer and related calls to action use the new destinations. Home 1's journal preview is replaced by a three-brand equipment preview. The 17-brand directory supports search, sport filters, empty/reset states and catalogue deep links through the brand query parameter. Team Orders has a dedicated team hero, kit options, planning steps, FAQs and the existing downloadable brief flow. No order is sent and no payment is processed. The old URLs redirect for compatibility. No dashboard is added.

Validation: page IDs/headings, links, anchors, local media and navigation passed for the website and uploaded copy. Existing catalogue filters, bag, shared controls and hero motion passed. Browser checks covered both new page layouts, brand sport/search/reset behavior, Yonex navigation to eight matching products, and generation of a team-order brief. Responsive rules are included; device emulation was unavailable.

## Final presentation pass — October 23, 2026

This version uses the latest user-supplied project and preserves all its original media, including assets/cricket.webp. Services and its four detail pages, the compact heading hierarchy and the distinct hero layouts remain included.

Login markup, links and assets are removed. The placeholder Crease Selection brand is removed; its twelve catalogue items remain available without an invented brand label, preserving all 48 products and existing item IDs. Brands now lists 16 named brands. The user’s cricket image is used consistently in the hero, featured cards, catalogue, quick view and bag.

The offset orange About outline is removed and its caption stays inside a rounded clipped frame. The narrow top reading-progress rule is hidden. Product hero images use their natural aspect ratios with captions in normal flow, avoiding the old white padding and mismatched sizing. Home 2’s film now displays at 16:9, with its caption below, so both players and the complete video frame remain visible. Other photos keep bounded focal cropping. polish.css provides image/card hover feedback and readable entrance motion; polish.js adds staggered reveals with reduced-motion handling and safe visibility fallback.

Validation: all 17 content pages, links, IDs, assets and anchors passed. All 48 product images and 16 brand entries were verified. Existing catalogue, bag, shared navigation and hero controls passed, including reduced-motion hero defaults. New reveal checks cover visible cards, reduced-motion changes and observer failure. Browser checks confirmed no Login links, the clean About frame, a -7px product hero hover lift, the replacement cricket photo, brand filtering and its eight-product Yonex destination, full 16:9 video framing and pause behavior. Source media hashes match the user’s folder. Responsive styles are included; device emulation was unavailable.
