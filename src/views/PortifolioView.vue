<template>
  <div class="about">
    <SkyPortifolio>
      <template #text>
        <Projectslist />
      </template>
    </SkyPortifolio>
  </div>
</template>

<script setup lang="ts">
import SkyPortifolio from "@/components/SkyPortifolio.vue";
import Projectslist from "@/components/Projectslist.vue";
</script>

<style lang="scss" scoped></style>
