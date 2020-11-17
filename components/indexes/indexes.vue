<style lang="scss" src="./indexes.scss"></style>
<template>
  <ul id="indexList" class="indexes">
    <li>
      <div class="cols cols-headRow">
        <span
          v-for="(e, index) in headRow"
          :key="index"
          :class="['col', `col-${index + 1}`]"
        >
          <span @click="sortContent(e.sort, e.sortBy, index)" v-html="e.name" />

          <span v-if="e.direction === 'asc' && e.direction !== ''" class="sort">
            <arrowUp />
          </span>

          <span
            v-if="e.direction === 'desc' && e.direction !== ''"
            class="sort"
          >
            <arrowDown />
          </span>
        </span>
      </div>
    </li>
    <li v-for="(e, index) in content" :key="index">
      <indexesItem :e="e" :index="index" :active-row="activeIndex" />
    </li>
  </ul>
</template>

<script>
import arrowDown from '~/components/icons/arrowDown.svg?inline'
import arrowUp from '~/components/icons/arrowUp.svg?inline'
export default {
  components: { arrowDown, arrowUp },
  props: {
    content: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: -1,
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
    updateActive(index) {
      this.activeIndex = index
    },
    sortContent(canSort, sortBy, index) {
      if (canSort) {
        const direction =
          this.headRow[index].direction === 'asc' ? 'desc' : 'asc'

        this.headRow[index].direction = direction
        this.activeIndex = -1

        this.$store.commit('ui/sort', [sortBy, direction])
      }
    }
  }
}
</script>
