<style lang="scss" src="./indexes.scss"></style>
<template>
  <ul class="indexes">
    <li>
      <div class="cols cols-headRow">
        <span
          v-for="(e, index) in headRow"
          :key="index"
          :class="['col', `col-${index + 1}`]"
        >
          <span @click="sortContent(e.sort, e.sortBy, index)" v-html="e.name" />
          <span v-html="e.direction" />
        </span>
      </div>
    </li>
    <li v-for="(e, index) in content" :key="index">
      <indexesItem :e="e" />
    </li>
  </ul>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      headRow: [
        {
          name: 'Cat.',
          sort: false
        },
        {
          name: 'Artist(s)',
          sort: true,
          sortBy: 'artist',
          direction: 'asc'
        },
        {
          name: 'Press',
          sort: true,
          sortBy: 'press',
          direction: 'asc'
        },
        {
          name: 'Title(s)',
          sort: true,
          sortBy: 'title',
          direction: 'asc'
        },
        {
          name: 'Size',
          sort: false
        },
        {
          name: 'Ctry',
          sort: true,
          sortBy: 'country_code',
          direction: 'asc'
        },
        {
          name: 'Subject',
          sort: true,
          sortBy: 'tag'
        },
        {
          name: 'Poster(s)',
          sort: false
        }
      ]
    }
  },
  methods: {
    sortContent(canSort, sortBy, index) {
      if (canSort) {
        const direction =
          this.headRow[index].direction === 'asc' ? 'desc' : 'asc'

        this.headRow[index].direction = direction

        this.$store.commit('ui/sort', [sortBy, direction])
      }
    }
  }
}
</script>
