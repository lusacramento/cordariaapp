<template>
  <div class="box-title container-fluid d-flex justify-content-center mb-4">
    <div
      class="row text-center justify-content-center align-items-center"
      :class="outboxColor"
    >
      <div
        class="boxes outbox"
        @mouseover="icon.url = imageMouseOver(icon)"
        @mouseleave="icon.url = imageMouseLeave(icon)"
      >
        <div class="boxes inbox d-flex align-items-center" :class="inboxColor">
          <div v-if="leftLogo" class="px-1">
            <img class="img img-fluid icon" :src="icon.url" :alt="icon.altText" />
          </div>
          <div v-html="titleText" />
          <div v-if="rightLogo" class="px-1">
            <img class="img img-fluid icon" :src="icon.url" :alt="icon.altText" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconCordariaEnabled from "@/assets/imgs/icone-cordaria-enabled.png";
import iconCordariaDisabled from "@/assets/imgs/icone-cordaria-disabled.png";
export default {
  props: {
    titleText: {
      type: String,
      default() {
        return "";
      },
    },
    schema: {
      type: String,
      default() {
        return "";
      },
    },
    leftLogo: Boolean,
    rightLogo: Boolean,
  },

  data() {
    return {
      inboxColor: "",
      outboxColor: "",
      icon: {
        url: iconCordariaDisabled,
        altText: "Inicie agora",
        enabled: iconCordariaEnabled,
        disabled: iconCordariaDisabled,
      },
    };
  },

  mounted() {
    this.applySchema();
  },

  methods: {
    applySchema() {
      switch (this.schema) {
        case "the-project":
          this.inboxColor = "inbox-project";
          this.outboxColor = "outbox-project";
          break;
        case "the-tutorial":
          this.inboxColor = "inbox-tutorial";
          this.outboxColor = "outbox-tutorial";
          break;
        case "the-research":
          this.inboxColor = "inbox-research";
          this.outboxColor = "outbox-research";
          break;
        default:
      }
    },
    imageMouseOver(img) {
      return img.enabled;
    },
    imageMouseLeave(img) {
      return img.disabled;
    },
  },
};
</script>

<style scoped>
a {
  font-size: 1.5em !important;
}

.inbox {
  /* background-color: var(--the-project-inbox); */
  padding: 4px 25px;
  color: var(--font-color-h2) !important;
}
.inbox:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--font-color-hover) !important;
}

.outbox {
  /* background-color: var(--the-project-outbox); */
  padding: 0px 10px;
}

.inbox-project {
  background-color: var(--the-project-inbox);
  border-radius: 10px;
}

.outbox-project {
  background-color: var(--the-project-outbox);
  border-radius: 10px;
}

.inbox-tutorial {
  background-color: var(--the-tutorial-inbox);
  border-radius: 10px;
}

.outbox-tutorial {
  background-color: var(--the-tutorial-outbox);
  border-radius: 10px;
}

.inbox-research {
  background-color: var(--the-research-inbox);
  border-radius: 10px;
}

.outbox-research {
  background-color: var(--the-research-outbox);
  border-radius: 10px;
}
</style>
