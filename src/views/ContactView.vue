<template>
  <Title title="Vamos " title_white="Conversar" back-text="Contato" />
  <div class="contact">
    <div class="description">
      <h2>Não seja tímido!</h2>
      <p>
        Caso tenha se interessado em algum projeto ou queira falar sobre
        orçamentos, projetos ou caso queira tirar suas duvidas, entre em contato
      </p>
      <div class="contact-button">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <div>
          <p>E-mail</p>
          <a href="mailto:editorcle@gmail.com">editorcle@gmail.com</a>
        </div>
      </div>
      <div class="contact-button">
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <div>
          <p>Whatsapp</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5519998161087&type=phone_number&app_absent=0"
            >+55 19 99816-1087</a
          >
        </div>
      </div>
    </div>

    <div class="form">
      <form @submit.prevent="sendEmail">
        <div class="div1">
          <input
            type="text"
            name="name"
            v-model="name"
            placeholder="Seu Nome"
            required
          />
        </div>
        <div class="div2">
          <input
            type="text"
            name="company"
            v-model="company"
            placeholder="Empresa"
            required
          />
        </div>

        <div class="div4">
          <textarea
            type="text"
            name="message"
            v-model="message"
            placeholder="Mensagem"
          />
        </div>
        <div class="div5">
          <Button title="Enviar mensagem" icon="fa-paper-plane" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      company: "",
      message: "",
      name: "",
    };
  },

  methods: {
    sendEmail() {
      const message = `Olá, meu nome é: ${encodeURIComponent(
        this.name
      )}, \n Empresa: ${encodeURIComponent(
        this.company
      )},  \n ${encodeURIComponent(this.message)}`;

      const mailtoLink = `https://api.whatsapp.com/send/?phone=5519998161087&text=${message}&type=phone_number&app_absent=0`;

      window.location.href = mailtoLink;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 0 5rem;
  color: var(--black);
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
    align-items: stretch;
  }
  & .description {
    width: 34%;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }
    & h2 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 15px;
      @media (max-width: 768px) {
        font-size: 21px;
      }
    }
    & p {
      font-size: 15px;
    }
    & .contact-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 1rem 0;

      & svg {
        font-size: 2rem;
        color: var(--primary);
        padding-right: 1rem;
      }
      & p {
        text-transform: uppercase;
      }
      & a {
        font-weight: 500;
      }
    }
    & .social li a {
      display: inline-block;
      height: 40px;
      width: 40px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      transition: 0.3s;
      font-size: 17px;
      margin: 0 6px;
      background: #2b2a2a;
      border-radius: 50%;
    }
  }

  & .form {
    width: 60%;
    margin-left: 3rem;
    @media (max-width: 768px) {
      width: 100%;
      margin: 1rem auto 3rem;
    }
    & form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        align-content: flex-start;
      }
    }

    & .div1 {
      grid-area: 1 / 1 / 2 / 2;
      padding-right: 15px;
    }
    & .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }

    & .div4 {
      grid-area: 2 / 1 / 5 / 3;
    }
    & .div5 {
      grid-area: 5 / 2 / 6 / 3;
    }
    & .div1,
    .div2,
    .div3,
    .div4,
    .div5 {
      @media (max-width: 768px) {
        width: 100%;
        padding: 0;
      }
    }

    & input,
    textarea {
      border: 1px solid #111;
      width: 100%;
      background: #252525;
      color: #fff;
      padding: 11px 26px;
      border-radius: 30px;
      outline: none !important;
      transition: 0.3s;
      margin-bottom: 30px;
    }
    & textarea {
      height: 100%;
    }
  }

  & button {
    margin-top: 2rem;
    float: right;
    @media (max-width: 768px) {
      margin: 0 0 3rem 0;
      right: 0;
      float: left;
    }
    & deep:svg {
      width: 1.5rem;
      height: 1.5rem;
      padding: 1rem;
    }
  }
}

#main {
  @media (max-width: 768px) {
    overflow-y: scroll;
  }
}
</style>
