<template>
  <section id="mywork" class="my-5">
    <div class="text-center py-5">
      <div class="text-h4">My Work</div>
      <div class="text-h6 font-weight-light">web | mobile | print</div>
    </div>
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(img, i) in source.imgs" :key="i"
      >
        <v-sheet color="white" height="100%">
          <v-row class="fill-height align-center justify-center">
            <div class="display-3">
              <v-img 
                :src="source.path + img" 
                contain
              ></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: 'MyWork',
  props: ['source']
}
</script>

<style scoped>
</style>
