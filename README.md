# Samtel Group — direct HTML-to-JSX Next.js version

This version follows the original project structure. All 17 pages are converted from PHP/HTML to React JSX, with shared Header and Footer components. It uses plain `<img>` elements, Next.js `Link` components with clean routes, and the original public CSS and JavaScript files.

```text
app/
  page.tsx
  about/page.tsx
  business/page.tsx
  ...remaining supplied pages
components/
  Header.tsx
  Footer.tsx
  Stylesheets.tsx
  LegacyScripts.tsx
public/
  css/       original CSS files, unchanged
  js/        original JavaScript files, unchanged
  fonts/     original font folder, unchanged
  images/    original image folder, unchanged
```

## Start

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Original assets and behavior

- All 104 supplied CSS, JavaScript, font and image files are copied byte for byte. No CSS pruning, image conversion, asset deletion, animation-library replacement or layout overrides are applied.
- Header and Footer preserve their original HTML structure. The homepage header class differs from inner pages as in the source.
- The homepage loads `/css/style.css`, `/css/home-group.css` and `/css/inner.css` in their original order. Inner pages load `/css/style.css` and `/css/inner.css`.
- Scripts load from `public/js`: jQuery, Bootstrap, AOS, smooth scroll, GSAP, ScrollTrigger, ScrollTo, Swiper, common, home-group and inner.
- AOS is the supplied `/js/aos.js`, with `/css/aos.css` included by the original style.css imports. There is no npm AOS package. The supplied fade animations in common.js use GSAP exactly as in the original; AOS is also initialized for any existing or future `data-aos` elements.
- `public/js/next-init.js` is the small Next.js integration adapter. It loads the supplied scripts in order and runs their registered ready callbacks after hydration. The supplied files are not edited.
- The original footer loaded Swiper 11 from a CDN, while the included `js/swiper.js` is an older 4.1.6 file. Local copies of the originally used Swiper 11 JS/CSS are added as `public/js/swiper-bundle.min.js` and `public/css/swiper-bundle.min.css`. The old supplied file remains untouched.
- The source references `SmoothScroll.min.js` with the wrong filename case. The loader uses the actual supplied lowercase `/js/smoothscroll.min.js`.
- Next.js `Link` navigation uses clean routes such as `/about`. The adapter refreshes the original animation and slider setup after navigation and clears previous page listeners. All `javascript:void(0)` destinations are replaced with `#`.
- JSX changes are limited to React attribute names, self-closing tags, React style objects and root-relative asset URLs and Next.js links. Source placeholder content and destinations remain as supplied.

## Validation and original limitations

The production build and TypeScript check passed. Browser checks on Home, About, Business and Investors verified local CSS/JS loading, AOS/GSAP/Swiper globals, original logo sizing and no JavaScript page errors or missing local resources. The mobile home division grid retains its original two columns at 375px.

External font and Fancybox stylesheet imports remain in the original CSS. They require internet access and were blocked by the validation environment; all local asset requests succeeded. Original placeholder links, coming-soon pages and source mobile behavior are retained because this is a direct conversion.
