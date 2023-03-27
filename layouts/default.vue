<template>
  <div id="app" class="app container-fluid">
    <div id="nav" class="d-flex justify-content-center">
      <Nav :base-url="baseUrl" />
    </div>
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/nav-footer/Nav";
import Footer from "@/components/nav-footer/Footer";

export default {
  name: "DefaultLayout",
  components: { Footer, Nav },
  data() {
    return {
      baseUrl: "https://beta.cordaria.com.br/",
      isIndex: false,
      indexed: { hid: "null", name: "robots", content: "all" },
      noIndexed: { hid: "null", name: "robots", content: "noindex" },
      metaIndexed: {},
    };
  },

  head() {
    if (!this.isIndex) {
      this.metaIndexed = this.noIndexed;
    } else {
      this.metaIndexed = this.indexed;
    }

    return {
      meta: [
        { charset: "utf-8" },
        { httpEquiv: "content-language", content: "pt-br" },
        { httpEquiv: "content-type", content: "text/html" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Lu Sacramento" },
        {
          name: "copyright",
          content:
            "Copyright © 2021. Cordaria. Todos Diretos Reservados. Feito por Lu Sacramento",
        },
        { name: "generator", content: "Nuxt v.2.15.7" },
        { name: "rating", content: "general" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          integrity:
            "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        },
        this.metaIndexed,
      ],
    };
  },
};
</script>
<style>
/* variables */
:root {
  /* colors */
  --the-project-color: rgba(173, 0, 225, 0.7);
  --the-project-inbox: rgba(82, 10, 108, 1);
  --the-project-outbox: rgba(68, 21, 90, 1);

  --the-research-color: rgba(223, 2, 154, 0.7);
  --the-research-inbox: rgba(223, 2, 154, 0.5);
  --the-research-outbox: rgba(223, 2, 154, 0.5);

  --the-pratice-color: rgba(240, 2, 14, 0.7);
  --the-pratice-degrade: rgba(240, 2, 14, 0.5);
  --the-pratice-inbox: rgba(240, 2, 14, 0.7);
  --the-pratice-outbox: rgba(240, 2, 14, 0.4);

  --the-tutorial-color: rgba(253, 91, 0, 0.7);
  --the-tutorial-inbox: rgba(200, 79, 13, 1);
  --the-tutorial-outbox: rgba(147, 67, 27, 1);

  --clues-color: rgba(255, 139, 0, 0.7);
  --clues-degrade: rgba(255, 139, 0, 0.5);

  --clues-border: 2px solid rgba(255, 139, 0, 0.7);
  --clues-border-nav: 2px solid rgba(128, 128, 128, 0.5);
  --clues-border-estudo: 1px solid rgba(255, 139, 0, 0.7);

  --bg-app: #1c1f26;

  --bg-nav: #1d1e28;
  --bg-nav-collapse: #1d1e28da;
  --borders-nav: 15px solid #1a1b24;

  --border-main: 1px solid #8e8f94;

  --bg-layer-top: #282a36;
  --bg-layer-center: rgb(40, 42, 54);
  --bg-degrade-layer-center: linear-gradient(
    180deg,
    rgba(40, 42, 54, 1) 37%,
    rgba(29, 30, 40, 1) 77%
  );

  /* font styles */
  --font-thin: 100;
  --font-extra-light: 200;
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semi-bold: 600;
  --font-bold: 700;
  --font-extra-bold: 800;
  --font-black: 900;

  /* fonts sizes */
  --font-size-nav: 1.2em;
  --font-size-h1: 2.4em;
  --font-size-h2: 1.5em;
  --font-size-h3: 0.8em;
  --font-size-h4: 1em;
  --font-size-p: 0.9em;
  --font-size-light: 0.9em;

  /* font colors */

  --font-color-nav: #7d7d7d;
  --font-color-h1: #5d5e63;
  --font-color-p: rgba(255, 255, 255, 0.5);
  --font-color-h2: rgba(255, 255, 255, 0.5);
  --font-color-link: rgba(255, 255, 255, 0.5);
  --font-color-hover: rgba(255, 255, 255, 0.7);
}

.title {
  font-family: "Encode Sans";
  font-weight: var(--font-black);
  font-size: var(--font-size-h1);
  color: var(--font-color-h1) !important;
}

p {
  font-family: "Encode Sans";
  font-weight: var(--font-regular);
  font-size: var(--font-size-p);
  color: var(--font-color-p) !important;
}

.large-line-height {
  line-height: 1.7;
}

a {
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  color: var(--font-color-link) !important;
}
a:hover {
  color: var(--font-color-hover) !important;
}

strong {
  font-family: "Encode sans";
  font-weight: var(--font-semi-bold);
  color: rgb(255, 255, 255, 0.7) !important;
}

b {
  font-family: "Encode sans";
  font-weight: var(--font-bold);
  color: rgb(255, 255, 255, 0.7) !important;
}

h2 {
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  font-size: var(--font-size-h2) !important;
  color: var(--font-color-h2);
}

h3 {
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  font-size: var(--font-size-h3) !important;
}

h4 {
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  font-size: var(--font-size-h4) !important;
}
html {
  /* overflow: hidden; */
  background-color: var(--bg-app);
}

@media (min-width: 991.98px) {
  div.app {
    grid-template-rows: 17vh 70vh 11vh;
  }
  /* .layer-top-exercise {
    height: 42vh !important;
  } */
}
div.app {
  display: grid;
  padding: 0;
  margin: 0;

  color: white;
  background-color: var(--bg-app);

  /* grid-template-rows: 17vh 70vh 11vh; */

  grid-template-areas:
    "nav"
    "main"
    "foot";
}

#nav {
  grid-area: nav;
  background-color: var(--bg-nav);
  border-top: var(--borders-nav);
  border-bottom: var(--borders-nav);
}
#main {
  grid-area: main;
  border-top: var(--border-main);
}

#footer {
  grid-area: foot;
  background-color: var(--bg-app) !important;
}

.hideFooter {
  display: none;
}

.layer-top {
  background-color: var(--bg-layer-top);
}

.layer-center {
  width: 80% !important;
  background: var(--bg-layer-center);
  background: var(--bg-degrade-layer-center);
}
.justify {
  text-align: justify;
}

.no-text-decoration {
  text-decoration: none;
}
</style>
