<template>
  <div v-motion-slide-visible-top>
    <video ref="video" @ended="handleVideoEnd" autoplay muted>
      <source :src="videoSource" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

// Replace 'your_video.webm' with the actual path to your video file
const videoSource = ref("src/assets/videos/Comp 1.webm");

const videoRef = ref(null);

const handleVideoEnd = () => {
  const video = videoRef.value;

  if (video) {
    // Reverse playback
    video.playbackRate = -1;

    // Restart video from the end
    video.currentTime = video.duration - 0.01;

    // Play the reversed video
    video.play();
  }
};

// Watch for changes in videoSource and restart the video
watchEffect(() => {
  const video = videoRef.value;

  if (video) {
    // Set playback rate back to normal
    video.playbackRate = 1;

    // Restart video from the beginning
    video.currentTime = 0;

    // Play the video
    video.play();
  }
});
</script>
