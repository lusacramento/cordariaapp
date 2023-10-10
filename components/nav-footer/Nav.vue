<template>
  <nav class="nav navbar navbar-expand-lg align-content-center">
    <div class="container-fluid">
      <nuxt-link
        id="link-principal"
        to="/"
        class="navbar-brand logo-cordaria"
        :class="{ active: isActiveTheProject }"
        aria-current="page"
      >
        <img
          :src="icons.cordaria.url"
          :alt="icons.cordaria.altText"
          class="img img-fluid"
          @mouseover="icons.cordaria.url = imageMouseOver(icons.cordaria)"
          @mouseleave="icons.cordaria.url = imageMouseLeave(icons.cordaria)"
        />
      </nuxt-link>
      <button
        class="navbar-dark navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showMenu()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        class="navbar-collapse"
        :class="{ collapse: isCollapse }"
      >
        <div class="container-fluid justify-content-end">
          <ul class="navbar-nav" :class="{ collapseColor: !isCollapse }">
            <li class="nav-item">
              <nuxt-link
                to="/"
                class="nav-link the-project-link"
                :class="{
                  theProjectLinkActive: isActiveTheProject,
                }"
                aria-current="page"
                ><span>O Projeto</span></nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/a-pesquisa"
                class="nav-link the-research-link"
                :class="{ theResearchLinkActive: isActiveTheResearch }"
                aria-current="page"
              >
                <span>A Pesquisa</span></nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/a-pratica"
                class="nav-link the-pratice-link"
                :class="{ thePraticeLinkActive: isActiveThePratice }"
                ><span>A Prática</span></nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/o-tutorial"
                class="nav-link the-tutorial-link"
                :class="{ theTutorialLinkActive: isActiveTheTutorial }"
                ><span>O Tutorial</span></nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/dicas"
                class="nav-link clues-link"
                :class="{ cluesLinkActive: isActiveClues }"
                ><span>Dicas</span></nuxt-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link email-link" :href="icons.email.href">
                <img
                  class="img img-fluid"
                  :src="icons.email.url"
                  :alt="icons.email.altText"
                  @mouseover="icons.email.url = imageMouseOver(icons.email)"
                  @mouseleave="icons.email.url = imageMouseLeave(icons.email)"
                />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link insta-link"
                href="https://instagram.com/cordaria.app"
                target="_blank"
              >
                <img
                  class="img img-fluid"
                  :src="icons.insta.url"
                  :alt="icons.insta.altText"
                  @mouseover="icons.insta.url = imageMouseOver(icons.insta)"
                  @mouseleave="icons.insta.url = imageMouseLeave(icons.insta)"
                />
              </a>
            </li>
            <li class="align-items-center d-flex">
              <a
                class="nav-link insta-link"
                :href="icons.github.url"
                target="_blank"
                ><svg
                  class="align-items-center"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 496 512"
                  @mouseover="icons.github.fill = svgMouseOver()"
                  @mouseleave="icons.github.fill = svgMouseLeave()"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path :d="icons.github.d" :fill="icons.github.fill" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import cordariaIconDisabled from '@/assets/imgs/logo-cordaria-disabled.png'
import cordariaIconEnabled from '@/assets/imgs/logo-cordaria-enabled.png'
import emailIconDisabled from '@/assets/imgs/email-icon-disabled.png'
import emailIconEnabled from '@/assets/imgs/email-icon-enabled.png'
import instaIconDisabled from '@/assets/imgs/logo-insta-disabled.png'
import instaIconEnabled from '@/assets/imgs/logo-insta-enabled.png'

export default {
  // eslint-disable-next-line require-await
  name: 'NavBarCordaria',
  props: {
    baseUrl: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      icons: {
        cordaria: {
          url: cordariaIconDisabled,
          altText: 'Logotipo do Cordaria',
          enabled: cordariaIconEnabled,
          disabled: cordariaIconDisabled,
        },

        email: {
          href: 'mailto:japraticouhoje@cordaria.com.br',
          url: emailIconDisabled,
          altText: 'Ícone contato',
          enabled: emailIconEnabled,
          disabled: emailIconDisabled,
        },

        insta: {
          url: instaIconDisabled,
          altText: 'Ícone Instagram',
          enabled: instaIconEnabled,
          disabled: instaIconDisabled,
        },

        github: {
          fill: '',
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
          url: 'https://github.com/lusacramento/cordariaapp',
          enabled: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
          altText: 'Icone GitHub',
        },
      },
      currentUrl: this.baseUrl,
      isActiveTheProject: false,
      isActiveTheResearch: false,
      isActiveThePratice: false,
      isActiveTheTutorial: false,
      isActiveClues: false,
      isOverIconMenu: false,
      isOverIcontEmail: false,
      isOverIconInstagram: false,
      isCollapse: true,
    }
  },
  watch: {
    $route() {
      this.iniciateActive()
    },
  },
  // eslint-disable-next-line require-await
  async mounted() {
    this.currentUrl = await this.getUrl()
    this.iniciateActive()
    this.icons.github.fill = this.icons.github.disabled
  },

  methods: {
    getUrl: function async() {
      return window.location.href
    },
    imageMouseOver(img) {
      return img.enabled
    },
    imageMouseLeave(img) {
      return img.disabled
    },

    svgMouseOver(svg) {
      return this.icons.github.enabled
    },

    svgMouseLeave(svg) {
      return this.icons.github.disabled
    },

    showMenu() {
      this.isCollapse = !this.isCollapse
    },

    removeAllActive() {
      this.isActiveTheProject = false
      this.isActiveTheResearch = false
      this.isActiveThePratice = false
      this.isActiveTheTutorial = false
      this.isActiveClues = false
      this.isOverIconMenu = false
    },

    iniciateActive() {
      this.removeAllActive()
      // console.log("base url:", this.baseUrl);
      switch (window.location.href) {
        case `${this.baseUrl}`:
          this.isActiveTheProject = true
          break
        case `${this.baseUrl}a-pesquisa`:
          this.isActiveTheResearch = true
          break
        case `${this.baseUrl}a-pratica`:
          this.isActiveThePratice = true
          break
        case `${this.baseUrl}o-tutorial`:
          this.isActiveTheTutorial = true
          break
        case `${this.baseUrl}dicas`:
          this.isActiveClues = true
          break
        default:
          break
      }
    },
  },
}
</script>

<style>
.nav {
  font-size: var(--font-size-nav);
  font-family: var(--font-semibold);
  margin-left: 5px;
  margin-right: 5px;
}

.collapseColor {
  background-color: var(--bg-nav-collapse) !important;
  display: block;
  padding: 10px;
  width: 200px !important;
  border-radius: 15pt;
  color: rgba(255, 255, 255, 1) !important;
}

.nav-link {
  color: var(--font-color-nav) !important;
  margin: 0 10px;
}

.theProjectLinkActive {
  color: var(--the-project-color) !important;
}
.the-project-link:hover {
  color: var(--the-project-color) !important;
}

.theResearchLinkActive {
  color: var(--the-research-color) !important;
}
.the-research-link:hover {
  color: var(--the-research-color) !important;
}

.thePraticeLinkActive {
  color: var(--the-pratice-color) !important;
}
.the-pratice-link:hover {
  color: var(--the-pratice-color) !important;
}

.theTutorialLinkActive {
  color: var(--the-tutorial-color) !important;
}
.the-tutorial-link:hover {
  color: var(--the-tutorial-color) !important;
}

.cluesLinkActive {
  color: var(--clues-color) !important;
}
.clues-link:hover {
  color: var(--clues-color) !important;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.089);
}

@media (min-width: 991.98px) {
  .logo-cordaria {
    margin-left: 115px;
  }
}

@media (max-width: 576px) {
  .logo-cordaria {
    margin-left: 28px;
  }
}
</style>
