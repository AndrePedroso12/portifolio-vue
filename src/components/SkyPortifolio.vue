<template>
  <div class="parallax">
    <div class="parallax__layer parallax__layer__0">
      <img src="src/assets/images/parallax/mountBg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__1">
      <img src="src/assets/images/parallax/mountMg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__2">
      <img src="src/assets/images/parallax/cloud2.webp" />
    </div>
    <div class="parallax__layer parallax__layer__3">
      <img src="src/assets/images/parallax/mountFg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__4">
      <img src="src/assets/images/parallax/cloud3.webp" />
    </div>
    <div class="parallax__layer parallax__layer__5">
      <!-- <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true"
      /> -->
      <p>Transformando<br />Ideias</p>
    </div>
    <div class="parallax__layer parallax__layer__6">
      <img src="src/assets/images/parallax/cloud1.webp" />
    </div>

    <div class="parallax__cover">
      <div class="parallax__cover-text">
        <p>Em projetos</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.parallax {
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(68, 143, 198);
  background: radial-gradient(
    circle,
    rgba(68, 143, 198, 1) 0%,
    rgba(33, 93, 145, 1) 100%
  );
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer img,
.parallax__layer p {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.parallax__layer p {
  color: white;
  left: 0;
  text-align: center;
  font-size: 6rem;
  right: auto;
  font-weight: 900;
  line-height: 0.9;
  bottom: 72%;
  text-transform: uppercase;
}
.parallax__cover {
  background: #fff;
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 2000px;
  z-index: 2;
  box-shadow: 0px -20px 20px 20px #fff;
  & p {
    top: 0;
    background-attachment: fixed;
    position: relative;
    background-image: url("src/assets/images/parallax/cloud-mask.webp");
    background-size: cover;
    background-position: bottom center;
    background-attachment: fixed;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    // color: green;
    left: 0%;
    text-align: center;
    font-size: 6rem;
    right: 50%;
    font-weight: 900;
    line-height: 0.9;
    bottom: 84%;
    text-transform: uppercase;

    &::before {
      content: "Em projetos";
      color: var(--primary);
      position: absolute;
      z-index: -1;
    }
  }
}

.parallax__layer__0 {
  transform: translateZ(-300px) scale(4);
}

.parallax__layer__1 {
  transform: translateZ(-250px) scale(3.5);
}

.parallax__layer__2 {
  transform: translateZ(-200px) translateY(-32rem) scale(3);
}

.parallax__layer__3 {
  transform: translateZ(-150px) scale(2.5);
}

.parallax__layer__4 {
  transform: translateZ(-100px) scale(2);
}

.parallax__layer__5 {
  transform: translateZ(-50px) scale(1.5);
}

.parallax__layer__6 {
  transform: translateZ(0px) scale(1);
}
</style>
