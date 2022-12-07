<template>
  <div class="wrapper">
    <Splide :options="options" :extensions="extensions">
      <SplideSlide
        v-for="slide in slides"
        :key="slide.alt"
        :data-splide-hash="slide"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          :data-splide-hash="slide.datasplidehash"
        />
      </SplideSlide>
      <!-- <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg"
          alt="Rage Against the Machine"
          data-splide-hash="rage-against-the-machine"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://consequence.net/wp-content/uploads/2022/05/Harry-Styles-2022.jpeg?quality=80"
          alt="Harry Styles"
          data-splide-hash="harry-styles"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg"
          alt="Kid Cudi"
          data-splide-hash="kid-cudi"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/63b/af7004ce-1b0c-4523-8e27-975ccbbb863b_1707461_RETINA_PORTRAIT_16_9.jpg"
          alt="Demi Lovato"
          data-splide-hash="demi-lovato"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/158/c4163788-def4-40a4-af51-df3bc0eaf158_1719771_RETINA_PORTRAIT_16_9.jpg"
          alt="The Mars Volta"
          data-splide-hash="the-mars-volta"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/40c/c3796189-4b81-425d-ab1b-f2b34c38f40c_1714331_RETINA_PORTRAIT_16_9.jpg"
          alt="Post Malone"
          data-splide-hash="post-malone"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/9f3/9b28e63a-467b-4bcc-b86e-0990372789f3_1695141_RETINA_PORTRAIT_16_9.jpg"
          alt="Kendrick Lamar"
          data-splide-hash="kendrick-lamar"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/3c8/535b4cbd-e6c0-4735-adbc-29390b4073c8_1706671_RETINA_PORTRAIT_16_9.jpg"
          alt="Carly Rae Jepsen"
          data-splide-hash="carly-rae-jepsen"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/4b5/1120696d-e3d3-41df-bf8c-f8236b1484b5_1690811_RETINA_PORTRAIT_16_9.jpg"
          alt="Gorillaz"
          data-splide-hash="gorillaz"
        />,
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s1.ticketm.net/dam/a/1ba/96c9fddd-645d-4d41-83b0-962f7308b1ba_1705011_RETINA_PORTRAIT_16_9.jpg"
          alt="Panic! At The Disco"
          data-splide-hash="panic-at-the-disco"
        />,
      </SplideSlide> -->
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import { URLHash } from "@splidejs/splide-extension-url-hash";
export default defineComponent({
  name: "SplideSlides",
  components: {
    Splide,
    SplideSlide,
  },

  props: {
    // "data-splide-hash": String,
  },

  data() {
    return {
      slides: [
        {
          src: "https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg",
          alt: "Rage Against the Machine",
          // data-splide-hash:"rage-against-the-machine"},
          datasplidehash: "rage-against-the-machine",
        },

        {
          src: "https://consequence.net/wp-content/uploads/2022/05/Harry-Styles-2022.jpeg?quality:80",
          alt: "Harry Styles",
          datasplidehash: "harry-styles",
        },

        {
          src: "https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg",
          alt: "Kid Cudi",
          datasplidehash: "kid-cudi",
        },

        {
          src: "https://s1.ticketm.net/dam/a/63b/af7004ce-1b0c-4523-8e27-975ccbbb863b_1707461_RETINA_PORTRAIT_16_9.jpg",
          alt: "Demi Lovato",
          datasplidehash: "demi-lovato",
        },

        {
          src: "https://s1.ticketm.net/dam/a/158/c4163788-def4-40a4-af51-df3bc0eaf158_1719771_RETINA_PORTRAIT_16_9.jpg",
          alt: "The Mars Volta",
          datasplidehash: "the-mars-volta",
        },

        {
          src: "https://s1.ticketm.net/dam/a/40c/c3796189-4b81-425d-ab1b-f2b34c38f40c_1714331_RETINA_PORTRAIT_16_9.jpg",
          alt: "Post Malone",
          datasplidehash: "post-malone",
        },

        {
          src: "https://s1.ticketm.net/dam/a/9f3/9b28e63a-467b-4bcc-b86e-0990372789f3_1695141_RETINA_PORTRAIT_16_9.jpg",
          alt: "Kendrick Lamar",
          datasplidehash: "kendrick-lamar",
        },

        {
          src: "https://s1.ticketm.net/dam/a/3c8/535b4cbd-e6c0-4735-adbc-29390b4073c8_1706671_RETINA_PORTRAIT_16_9.jpg",
          alt: "Carly Rae Jepsen",
          datasplidehash: "carly-rae-jepsen",
        },

        {
          src: "https://s1.ticketm.net/dam/a/4b5/1120696d-e3d3-41df-bf8c-f8236b1484b5_1690811_RETINA_PORTRAIT_16_9.jpg",
          alt: "Gorillaz",
          datasplidehash: "gorillaz",
        },

        {
          src: "https://s1.ticketm.net/dam/a/1ba/96c9fddd-645d-4d41-83b0-962f7308b1ba_1705011_RETINA_PORTRAIT_16_9.jpg",
          alt: "Panic! At The Disco",
          datasplidehash: "panic-at-the-disco",
        },
      ],
    };
  },

  setup() {
    //   const slideHash = [
    //     "rage-against-the-machine",
    //     "harry-styles",
    //     "kid-cudi",
    //     "demi-lovato",
    //     "the-mars-volta",
    //     "post-malone",
    //     "kendrick-lamar",
    //     "carly-rae-jespen",
    //     "gorillaz",
    //     "panic-at-the-disco",
    //   ];

    // const slides = [

    //     {src:"https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg",
    //     alt:"Rage Against the Machine",
    //     data-splide-hash:"rage-against-the-machine"},

    //     {src:"https://consequence.net/wp-content/uploads/2022/05/Harry-Styles-2022.jpeg?quality:80",
    //     alt:"Harry Styles",
    //     data-splide-hash:"harry-styles"},

    //     {src:"https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Kid Cudi"
    //     data-splide-hash:"kid-cudi"},

    //     {src:"https://s1.ticketm.net/dam/a/63b/af7004ce-1b0c-4523-8e27-975ccbbb863b_1707461_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Demi Lovato"
    //     data-splide-hash:"demi-lovato"},

    //     {src:"https://s1.ticketm.net/dam/a/158/c4163788-def4-40a4-af51-df3bc0eaf158_1719771_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"The Mars Volta"
    //     data-splide-hash:"the-mars-volta"},

    //     src:"https://s1.ticketm.net/dam/a/40c/c3796189-4b81-425d-ab1b-f2b34c38f40c_1714331_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Post Malone"
    //     data-splide-hash:"post-malone",

    //     {src:"https://s1.ticketm.net/dam/a/9f3/9b28e63a-467b-4bcc-b86e-0990372789f3_1695141_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Kendrick Lamar"
    //     data-splide-hash:"kendrick-lamar"},

    //     {src:"https://s1.ticketm.net/dam/a/3c8/535b4cbd-e6c0-4735-adbc-29390b4073c8_1706671_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Carly Rae Jepsen"
    //     data-splide-hash:"carly-rae-jepsen"},

    //     {src:"https://s1.ticketm.net/dam/a/4b5/1120696d-e3d3-41df-bf8c-f8236b1484b5_1690811_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Gorillaz"
    //     data-splide-hash:"gorillaz"},

    //     {src:"https://s1.ticketm.net/dam/a/1ba/96c9fddd-645d-4d41-83b0-962f7308b1ba_1705011_RETINA_PORTRAIT_16_9.jpg"
    //     alt:"Panic! At The Disco"
    //     data-splide-hash:"panic-at-the-disco"}

    // <img
    //   src="https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Rage Against the Machine"
    //   data-splide-hash="rage-against-the-machine"
    // />,

    // <img
    //   src="https://consequence.net/wp-content/uploads/2022/05/Harry-Styles-2022.jpeg?quality=80"
    //   alt="Harry Styles"
    //   data-splide-hash="harry-styles"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Kid Cudi"
    //   data-splide-hash="kid-cudi"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/63b/af7004ce-1b0c-4523-8e27-975ccbbb863b_1707461_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Demi Lovato"
    //   data-splide-hash="demi-lovato"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/158/c4163788-def4-40a4-af51-df3bc0eaf158_1719771_RETINA_PORTRAIT_16_9.jpg"
    //   alt="The Mars Volta"
    //   data-splide-hash="the-mars-volta"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/40c/c3796189-4b81-425d-ab1b-f2b34c38f40c_1714331_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Post Malone"
    //   data-splide-hash="post-malone"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/9f3/9b28e63a-467b-4bcc-b86e-0990372789f3_1695141_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Kendrick Lamar"
    //   data-splide-hash="kendrick-lamar"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/3c8/535b4cbd-e6c0-4735-adbc-29390b4073c8_1706671_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Carly Rae Jepsen"
    //   data-splide-hash="carly-rae-jepsen"
    // />,

    // <img
    //   src="https://s1.ticketm.net/dam/a/4b5/1120696d-e3d3-41df-bf8c-f8236b1484b5_1690811_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Gorillaz"
    //   data-splide-hash="gorillaz"
    // />,
    // <img
    //   src="https://s1.ticketm.net/dam/a/1ba/96c9fddd-645d-4d41-83b0-962f7308b1ba_1705011_RETINA_PORTRAIT_16_9.jpg"
    //   alt="Panic! At The Disco"
    //   data-splide-hash="panic-at-the-disco"
    // />,
    // ];

    const options = {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: true,
    };

    return {
      options,
      // slides,
      // slideHash,
      extensions: { URLHash },
    };
  },
  methods: {},
});
</script>
