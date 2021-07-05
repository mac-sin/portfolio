<template>
  <v-app>
    <v-main>
      <v-container>
        <Header :menu="menu"/>
        <MyWork :source="mywork" />
        <Event :source="event"/>
        <Skill />
        <br/><br/>

        <Contact />
        <br/><br/>
        
        <div class="mt-5 pa-3 text-center text-caption">©2020 by macro sin.</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import MyWork from '@/components/MyWork';
import Event from '@/components/Event';
import Skill from '@/components/Skill';
import Contact from '@/components/Contact';

export default {
  name: 'App',

  components: {
    Header,
    MyWork,
    Event,
    Skill,
    Contact,
  },

  data: () => ({
    menu: ['mywork','event','skill','contact'],
    mywork: {
      path: 'static/web_mobile_print/',
      imgs: [
        'skybooks_screen-1.jpg',
        'mylife_screen.jpg',
        'cncbi_screen-1.jpg',
        'leaflet_screen-1.jpg',
        'leaflet_screen-2.jpg',
        'jego_screen-1.jpg',
        'booklet-1.jpg',
        'booklet-2.jpg',
      ],
    },
    event: {
      path: 'static/event/',
      imgs: [
        'bookfair2016-0.jpg',
        'bookfair2016-1.jpg',
        'bookfair2016-2.jpg',
        'bookfair2016-3.jpg',
        'bookfair2016-4.jpg',
        'bookfair2016-5.jpg',
        'bookfair2016-6.jpg',
        'bookfair2016-7.jpg',
        'bookfair2016-8.jpg',
        'bookfair2016-9.jpg',
        'bookfair2015-0.jpg',
        'bookfair2015-2.jpg',
        'bookfair2015-3.jpg',
      ]
    },

  }),

  
};
</script>
