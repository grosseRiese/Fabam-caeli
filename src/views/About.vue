<template>
  <section class="about-section">
    <img src="../assets/img/graphics-header.svg" alt="" class="top-about">

    <button class="btn-menu" @click="$router.push('/Nav')">
      <img src="../assets/img/navicon.svg" />
    </button>

    <article class="article-text">
      <h1 class="h1-about">Vårt Kaffe</h1>
      <h4 class="h4-about">
        Pumpkin spice mug, barista cup, sit
        macchiato, kopi-luwak, doppio, grounds
        dripper, crema, strong whipped, variety
        extra iced id lungo half and half mazagran.
        Pumpkin spice.
      </h4>
      <section class="paragraf-about"> 
        <p >
              Que dark fair trade, spoon decaffeinated, barista
              wings whipped, as rich aftertaste, con panna milk
              black, arabica white rich beans single shot extra
              affogato. So affogato macchiato sit extraction
              instant grinder seasonal organic, turkish single shot,
              single origin, and robusta strong to go so dripper.
              Viennese froth, grounds caramelization skinny
              aromatic cup kopi-luwak, fair trade flavour,
              frappuccino medium, café au lait flavour cultivar ut
              bar instant kopi-luwak.
        </p>

        <p>
              Roast id macchiato, single shot siphon mazagran
              milk fair trade est aroma a half and half and, so,
              galão iced to go, whipped as cream cup pumpkin
              spice iced. At extra, rich grinder, brewed to go,
              steamed half and half at, that, percolator macchiato
              trifecta and body as arabica dripper. In galão black
              java milk sit trifecta, robusta, acerbic café au lait instant shop latte.
            <br />
            <br />Stop right there criminal scum! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.
        </p>
      </section>
      <section class="eva-info">
        <img class="eva-img" src="../assets/img/eva-cortado.jpg" alt="Eva Cortado" />
        <h2 class="eva-info-h2">Eva Cortado</h2>
        <h5 class="eva-info-h5">VD & Grundare</h5>
      </section>
    </article>
    <img src="../assets/img/graphics-footer.svg" class="foot-about" alt="">
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './../scss/variables';
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.about-section {
    display: grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows: auto;
    grid-template-areas:"img-top img-top img-top"
                        "article-cntr article-cntr article-cntr"
                        "img-fot img-fot img-fot";
    align-content: center;
    margin: auto;                    
    background-color:$ab-pink;
    min-height:95vh;
    width: 35%;
    max-width: 35%;
    min-width: 35%;
    height: auto; 

    .top-about{
      grid-area: img-top;
      position: relative;
      width: 100%;
    }

    .btn-menu{
        position: absolute; 
        margin-top: 1rem;
        margin-left: 1rem;
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 1.6vw;
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: white;
    }

    .article-text{
      grid-area: article-cntr ;
      display: grid;
      grid-template-columns:  auto auto auto;
      grid-template-rows: auto;
      grid-template-areas:"title title title"
                          "h4-txt h4-txt h4-txt"
                          "parag parag parag"
                          ". vd-img .";
      margin: 0rem 2rem ;
        .h1-about{
          grid-area: title;
          font-family: 'PT Serif', serif;
          font-weight: bold;
          font-size: 42px;
          line-height: 120%;
        }
        .h4-about{
          grid-area: h4-txt;
          font-family: Work Sans;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
        }
        .paragraf-about{
          grid-area: parag;
          font-family: Work Sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
        }
        .eva-info{
          grid-area: vd-img;
          text-align: center;

          .eva-img{
            height: 74px;
            width: 74px;
            left: 151px;
            top: 815px;
            border-radius: 50px;
          }
          .eva-info-h2{
            font-family: PT Serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 35px;
            letter-spacing: 0em;
            text-align: center;
          }
          .eva-info-h5{
            font-family: Work Sans;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: center;
          }
        }
    }
    
    .foot-about{
      grid-area:img-fot;
      width: 100%;

    }

}
</style>