<template>
    <section id="event" class="my-5">
        <div class="text-center py-5">
            <div class="text-h4">Event</div>
            <div class="text-h6 font-weight-light">HK Bookfair 2016 | HK Bookfair 2015</div>
        </div>
        <v-carousel
            height="auto"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            hide-delimiters
        >
            <v-carousel-item
                v-for="(img, i) in source.imgs"
                :key="i"
            >
                <v-img 
                    :src="source.path + img" 
                ></v-img>
            </v-carousel-item>
        </v-carousel>
    </section>
</template>

<script>
export default {
    name: "Event",
    props: ['source']
}
</script>

<style scoped>

</style>