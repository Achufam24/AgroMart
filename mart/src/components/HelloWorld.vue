<template>
  <div style="margin-top:0;">
    <section>
      <div class="center1">
        <h1 style="font-size: 40px; margin-top: 17rem">Welcome to AgroMart</h1>
        <p style="font-size: 20px">Your Customer is right here!</p>
        <router-link to="/Video"> Learn How to trade &#x2193;</router-link>
      </div>
    </section>
    <div>
      <div class="row3">
        <h1 style="text-align: center">
          Improve Your Sales with <span style="color: green">AgroMart</span>
        </h1>
        <p class="col-6-sm-10">
          Strategies and plans alone are not enough to succeed in today’s agriculture
          market. Execution excellence within organizations creates marketplace
          differentiation and enables superior business performance. AgroMart deploys a
          combination of the four Agro-Market™ Solutions below to drive performance
          through execution.
        </p>
        <router-link
          to="/Register"
          style="margin-top: 2rem; text-decoration: none; color: #003e51"
          >Learn More <i class="bi bi-arrow-right"></i
        ></router-link>
      </div>
      <div class="grid-container">
        <div class="card">
          <i class="bi bi-activity"></i>
          <p>Market Analytis and Insughts</p>
          <router-link to="/about"
            >Learn More <span class="arrow">&#8594;</span></router-link
          >
        </div>
        <div class="card">
          <i class="bi bi-building"></i>
          <p>Market connections</p>
          <router-link to="/about"
            >Learn More <span class="arrow">&#8594;</span></router-link
          >
        </div>

        <div class="card">
          <i class="bi bi-cart4"></i>
          <p>Marketplace for all</p>
          <router-link to="/about"
            >Learn More <span class="arrow">&#8594;</span></router-link
          >
        </div>
        <div class="card">
          <i class="bi bi-exclamation-triangle-fill"></i>
          <p>Agro Sales Consultation</p>
          <router-link to="/about"
            >Learn More <span class="arrow">&#8594;</span></router-link
          >
        </div>
      </div>
      <div>
        <div>
          <div class="row2">
            <img
              src="@/assets/pig-man.jpeg"
              class="img-fluid"
              alt=""
              style="width: 400px; margin-left: 6rem"
            />
            <div
              class="col-6-sm-10"
              style="margin-top: 3rem; margin: 2rem 4rem 0rem 4rem"
            >
              <h3>
                Delivering Results through <span style="color: green">Execution</span>
              </h3>
              <p
                style="text-align: center !important; font-size: 1rem; margin-top: 1.5rem"
              >
                Since 1997, AgroMart has improved the business results of agricultural
                companies through execution excellence. Clients in all segments of
                agriculture trust AgroMart with business-critical initiatives, where
                execution matters most.
              </p>
            </div>
          </div>
          <router-link
            to="/about"
            style="
              margin-top: 2rem;
              text-decoration: none;
              margin-left: 6.2rem;
              color: #003e51;
            "
            >Learn More
            <i
              class="bi bi-arrow-right"
              style="font-size: 1.5rem; margin-left: 0.7rem; color: green"
            ></i
          ></router-link>
        </div>
      </div>
    </div>
    <!-- Faq Accordion-->
    <div class="faq">
      <h3>Frequently Asked Questions</h3>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is AgroMart?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <p>
                At AgroMart we allow users to post their Agro products and their products
                is displayed on the marketplace
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How do i trade at AgroMart?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <p>
                At AgroMart we allow users to post their Agro products and their products
                is displayed on the marketplace
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How Much does AgroMart collect for Commission?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <p>
                At AgroMart we allow users to post their Agro products and their products
                is displayed on the marketplace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components:{Footer},
  data() {
    return {
      ShowModal: true,
      video: "https://www.w3schools.com/tags/movie.mp4",
    };
  },
  methods: {
    changeVideo() {
      this.video = "http://techslides.com/demos/sample-videos/small.mp4";
    },
    toggleModal() {
      this.ShowModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  /*background-image: url("~@/assets/banner.png");
background-image: url('~@/assets/logo.png');
background-size:cover;*/
  width: 100%;
  height: 670px;
  direction: ltr;
  background: url("@/assets/agric.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.center1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}
.center1 button {
  border: none;
  outline: none;
  height: 2rem;
  border-radius: 8px;
  background: #fff;
  color: green;
  font-weight: 800;
  border-radius: 3px 20px 9px 12px;
}
.row2 {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}
.row2 img {
  height: 60vh !important;
  border-radius: 30px 60px 90px;
}
.row3 {
  margin-top: 6rem;
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  height: auto;
  justify-content: center;
  align-content: center;
  grid-template-columns: auto auto;
  gap: 10px;
  grid: 2;
  padding: 10px;
  margin-top: 5rem;
}
.card {
  width: 400px;
  height: 200px;
  border-radius: 15px;
  background: #fff;
}
.card:hover {
  background: #003e51;
  color: #fff;
  &.card a {
    color: #fff;
    .arrow {
      color: #fff;
    }
  }
}
.card i {
  font-size: 50px;
}
.row3 i {
  margin-left: 0.8rem;
  font-size: 1.6rem;
  color: green;
}
.arrow {
  color: green;
  font-size: 1.8rem;
}
.card a {
  text-decoration: none;
  color: #003e51;
}
.center1 a {
  background: #fff;
  color: #003e51;
  padding: 5px;
  border-radius: 10px;
  text-decoration: none;
}
.faq {
  margin: 8rem;
}
.accordion {
  color: #003e51;
  border: 1px solid green;
}
.accordion-item button {
  color: green;
}

@media only screen and (max-width: 700px) {
  .row2,
  .grid-container {
    display: flex;
    flex-direction: column !important;
  }
  .card {
    width: 100%;
  }
  .row2 img {
    display: none;
  }
  .row3 {
    margin: 0.5rem;
    margin: 3rem;
  }
  .faq {
    margin-top: 4rem !important;
    margin: 0.6rem;
  }
}
</style>
