<template>
  <h1>Bonjour {{ firstName }}</h1>
  <p v-bind:id="count2">Comment ça va ?</p>

  <p>compteur 1 : {{ count }}</p>
  <p>compteur 2 : {{ count2 }}</p>
  <p v-bind:id="`p-${count2}`">Compteur 2</p>  <!--  2points indique que c'est dinamique    -->
  <p :id="`p-${count2}`">Compteur 2.1</p> <!-- avec les 2 points: prend la valeur -->
  <p id="`p-${count2}`">Compteur 2.2</p>  <!-- sans les 2 points: prend la chaine de caractère -->
  <p :style="{color: count2 > 5 ? 'red': 'green'}">Compteur 2.2</p> 

  
  <!-- ************************* -->

  <button v-on:click="increment">Incrementer</button>
  <button v-on:click="decrement">Decrementer</button>
  <!-- equivalent -->
  <button @click="increment">Incrementer</button>
  <button @click="count2++">Incrementer</button>
  <button @click="decrement">Decrementer</button>

  <div v-show="count2 >= 5">Bravo, vous avez cliqué plus de 5 fois</div>
  <div v-if="count2 >= 5">Bravo, vous avez cliqué plus de 5 fois</div>
  <div v-else>Vous avez cliqué moins de 5 fois</div>

  <!-- ************************* -->
</template>

<script setup>
import { ref } from 'vue'

const firstName = "John";
const count = ref(0)
const count2 = ref(0)
count.value = 3

setInterval(() => {
  count.value++
}, 1000);

const increment = () => {
  count2.value++
}
const decrement = () => {
  count2.value--
}
const decrement2 = (event) => {
  console.log(event)
  count2.value--
}

</script>

<style>
  h1{
    color: red;
  }
</style>