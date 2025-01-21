<script setup>
import { ref } from 'vue';

let modalActive = ref(false);

document.body.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
        modalActive.value = false;
    }
})

</script>

<template>
  <div class="container" >
    <button class="button is-primary" @click="modalActive = true">Modal Active</button>
  </div>

  <div class="modal" :class="{ 'is-active': modalActive }">
    <div class="modal-background" @click="modalActive = false"></div>
    <div class="modal-content">
      <p class="image is-4by3">
        <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="modalActive = false"></button>
  </div>
</template>

<style></style>
