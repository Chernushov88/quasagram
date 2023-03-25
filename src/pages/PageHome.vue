<template>
  <q-page class="constrain q-pa-md">

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          bordered
          flat
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://scontent.fbrs5-1.fna.fbcdn.net/v/t31.18172-1/337974_100694096723149_626109477_o.jpg?stp=c52.14.172.172a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YFfulzeZfSwAX85qNBL&_nc_ht=scontent.fbrs5-1.fna&oh=00_AfB8v_HiwQTSWqPsjCf49ByC6b8VZ_6hwg4gkGlngPzRpQ&oe=64464B9E">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">serhii__chrnyshov</q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-img
            :src="post.imageUrl"
          />

          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
          </q-card-section>

        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://scontent.fbrs5-1.fna.fbcdn.net/v/t31.18172-1/337974_100694096723149_626109477_o.jpg?stp=c52.14.172.172a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YFfulzeZfSwAX85qNBL&_nc_ht=scontent.fbrs5-1.fna&oh=00_AfB8v_HiwQTSWqPsjCf49ByC6b8VZ_6hwg4gkGlngPzRpQ&oe=64464B9E">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">serhii__chrnyshov</q-item-label>
            <q-item-label caption>
              Danny Connell
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>

  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 1591776655504,
          location: 'San Francisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1591776655504,
          location: 'San Francisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 1591776655504,
          location: 'San Francisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 4,
          caption: 'Golden Gate Bridge',
          date: 1591776655504,
          location: 'San Francisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>
