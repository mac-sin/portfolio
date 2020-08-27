<template>
  <section id="header">
    <div class="d-flex aling-center">
        <v-avatar size="96">
            <img src="static/icons/my_avator_black.png" alt="avator"/>
        </v-avatar>
        <div class="pa-3">
            <div class="py-4 text-h4">Macro Sin</div>
        </div>
    </div>

    <v-img 
        src="static/pexels-pixabay-434337.jpg" 
        aspect-ratio="1.3"
        height="300"
        position="top"
    >
        <div class="ma-5 pa-5 bg-title d-flex justify-center align-stretch">
            <div class="px-4" v-for="(m,i) in menu" :key="i">
                <a :href="'#'+m">{{ m | toUpperCase }}</a>
            </div>
        </div>
    </v-img>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: ['menu'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-title {
    background-color: white;
    opacity: 0.7;
}
a { color: black!important; }
a, a:hover { text-decoration: none; }
</style>
