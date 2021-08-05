<template>
  <div id="tip" class="tip"></div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: {
    tips: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      tip: null,
      timerEstimed: 5,

      timerInterval: 5,
    };
  },
  watch: {
    timerEstimed(newTimerEstimed) {
      return newTimerEstimed;
    },
  },

  mounted() {
    const indexMessage = this.sortIndex(this.tips.length);
    this.tip = this.tips[indexMessage];

    this.showAlert();
  },

  methods: {
    async showAlert() {
      // Use sweetalert2
      await Swal.fire({
        title: `<h1 class="title-tips">Pulo do gato ${this.tip.id}</h1>`,
        icon: "info",
        html: `<p class="text-tips">${this.tip.message}</p>
        <p class="close-tips">Fechando em ${this.timerEstimed} segundos.</p>`,
        showCloseButton: true,
        showConfirmButton: false,
        timer: 5000,
        background: "#000000b8",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          this.timerInterval = setInterval(() => {
            this.timerEstimed = Math.round(Swal.getTimerLeft() / 1000);
            Swal.update({
              html: `<p class="text-tips">${this.tip.message}</p><p class="close-tips">Fechando em ${this.timerEstimed} segundos.</p>`,
            });
          }, 100);
        },
        willClose: () => {
          clearInterval(this.timerInterval);
        },
      });
      // .then((result) => {
      /* Read more about handling dismissals below */
      // if (result.dismiss === Swal.DismissReason.timer) {
      // console.log("FECHAR I was closed by the timer:");
      // }
      // });
    },
    sortIndex(max) {
      const min = Math.ceil(0);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style>
h1.title-tips {
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  color: var(--the-pratice-color);
}
p.text-tips {
  font-family: "Encode Sans";
  font-weight: var(--font-regular);
  color: rgba(128, 128, 128, 1);
  text-align: center;
  padding: 30px 0 0 0;
  font-size: 1.2em;
}
p.close-tips {
  font-family: "Encode Sans";
  font-weight: var(--font-light);

  text-align: end;
  padding: 40px 0 0 0;
  font-size: 0.7em;
}

.swal2-select {
  display: none !important;
}
</style>
