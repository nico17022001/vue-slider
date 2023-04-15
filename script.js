const { createApp } = Vue;

createApp({


  data() {
    return {
      imgCompilation: [
        "img/01.webp",
        "img/02.webp",
        "img/03.webp",
        "img/04.webp",
        "img/05.webp"
      ],
      contatore: 0,
      autoPlay: true,
    }
  },

  methods: {
    incrementatore(funzione) {
      funzione ? this.contatore++ : this.contatore--;
      if (this.contatore === this.imgCompilation.length) {
        this.contatore = 0
      }
      if (this.contatore < 0) {
        this.contatore = this.imgCompilation.length - 1
      }
    },

    

    // creo una funzione nella quale richiamo la funzione incrementatore ogni 3 secondi 
    loop() {
      setInterval(() => {
        if (this.autoPlay == true) {
          this.incrementatore(true)
        }
      }, 3000)
    }
  },

  mounted() {
    this.loop()
  }

}).mount("#app")













