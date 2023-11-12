<template>
  <div class="about">
    <!-- <Title title="Sobre " title_white="mim" back-text="currículo" /> -->
    <SkyPortifolio>
      <template #text>
        <Projectslist />
      </template>
    </SkyPortifolio>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import SkyPortifolio from "@/components/SkyPortifolio.vue";
import Projectslist from "@/components/Projectslist.vue";
</script>

<style lang="scss" scoped></style>
