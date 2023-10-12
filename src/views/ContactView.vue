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
          <a href="">editorcle@gmail.com</a>
        </div>
      </div>
      <div class="contact-button">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <div>
          <p>Whatsapp</p>
          <a href="">+55 19 99816-1087</a>
        </div>
      </div>
    </div>
    <div class="form">
      <form>
        <input type="text" name="name" placeholder="Seu Nome" />
        <input type="text" name="name" placeholder="E-mail" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
</script>

<style lang="scss" scoped>
.contact {
  padding: 0 5rem;
  color: var(--black);
  display: flex;
  flex-wrap: nowrap;
  & .description {
    width: 34%;
    & h2 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 30px;
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
  }

  & .form {
    width: 30%;
    & input {
      border: 1px solid #111;
      width: 100%;
      background: #252525;
      color: #fff;
      padding: 11px 26px;
      border-radius: 30px;
      outline: none !important;
      transition: 0.3s;
    }
  }
}
</style>
