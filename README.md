# **Jaxx Revolutions**

A repo for the first production version of jaxx.io, the home website of Jaxx Liberty is a blockchain/cryptocurrency wallet app made by Decentral Inc., a company founded by Anthony Di Iorio.

Unlike [Jaxx_Revolutions_1](https://github.com/masonmedia/jaxx_revolutions_1), my original, animated version of the same site, the production version was redacted, removing homepage banner animation which included: a an animated SVG stroke-drawing effect of the Jaxx Liberty logo (using vivus.js), which then was filled with the logo's original colors, and then individual letters exploded out of the screen, along with a slower general progression between entrances/exits of the timeline elements.

The redaction made the production site timeline move much faster. Management decided the original animated elegance was both unnecessary, and somehow impeded users from "quickly getting what they want". Sadly this aesthetic and control from the top down suffocated the site and its 3 other successors.

## **Layout and Frameworks**

The site uses Bootstrap 4.1. Layout uses native Bootstrap classes, flexbox, and 'functional' css.

## **CSS**

1. Functional [Atomic] css: the site employs the atomic css approach where small, single purpose classes are used based on visual function. Classes are referenced once in the CSS then used repeatedly in the HTML so as to avoid class repetition in the stylesheet.

*Note: the HTML can get heavy with classes specifically when it comes to spacing (padding and margin styles). Effort has been made to keep styles 'functional' as much as possible, with added stylesheet classes only when necessary.*

2. One stylesheet is used with an effort at organizing structure vertically based on relationship to HTML and page order. Starts with resets and global elements, proceeding to more specific styles.

3. Animate.css is used minimally, mainly for the homepage testimonials carousel animations..

4. Naming conventions: 

    - titles and headings: `site-title`, `page-title`, `section-title`, `section-sub-title`
    - fonts: `Oswald` from Google fonts is the primary theme font.
    - background images: `bg-img-...`
    - background colors: `bg-...`
    - logos and icons: `jaxx-logo` and `jaxx-icon`

5. `vh` height units
    - `vh` is used for base layout heights, with a focus on .min-100, .min-70, and .min-50 classes respectively. A current problem with Google Chrome (as of Sept 18, 2018) is that vh units on mobile cause the browser to repaint elements causing janky scroll behaviour.
    - a slightly non-semantic fix for mobile was to apply media queries for all of these classes which convert them to `height: auto` or `height: 100%`. This improves mobile scrolling.

## **JS**

**Multiple JS plugins are used on the site.**

1. Animisation: a jquery plugin that adds css transition effects to page entrances/exits. Data-attrributes are embedded in HTML with css effects (largely based on animate.css).
    - `.animsition` class is added to the body along with data atrributes are added to <a> links along with an `.animsition-link` class. These allow the addition of specific entrance and exit transition effects to be applied whenever a link is clicked, and additionally when a page loads. Different effects are added on each menu (and footer) link.

2. Scroll Magic: adds animations that are activated based on scroll position in concert with GSAP (See below). 
    - most used is a `.slide-in-left` and `.slide-in-right` effect, with judicious use of `.fade-in-down`, `.fade-in-right` and `fade-in-left`.

3. GSAP (Greensock): Tweening and timeline animation library used mostly for homepage banner animation timeline, and content entrance animations. More at: https://greensock.com/

4. Rellax.js: A Parallax plugin allowing for muliple layering of parallax elements.
    - a `.rellax` class is added to hmtl tags in addition to js init and options
    - a `data-rellax-speed` data attribute is added to hmtl tags to control individual element scroll speeds
    
 
 ## **Google Analytics**
    
1. GA gtag script is added in footer for general analytics, traffic, page views, bounce rate, etc.

2. Onclick events have been added to all <a> and nav links going to the jaxx.io Downloads and Support pages, as well as all footer links to social channels. Tags are organized by category (destination and/or item i.e. Downloads page or Android), and given a label (location on page i.e. menu, section, footer) for analysis: <onclick="googleAnalyticsTrigger('Downloads_Page', 'Footer')">