<template>
  <div>
      <ul v-if="list.length">
          <li v-for="item in list" :key="item.key" @click="itemTap($event)" :data-id="item.key">{{item.val}}</li>
      </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'List',
  computed: mapState({
      list: state => state.list,
  }),
  data () {
      return {}
  },
  methods: {
      ...mapMutations([
          'search_reduce_mutation'
      ]),
    itemTap(e) {
        const { id } = e.target.dataset
        this.search_reduce_mutation({ key: id })
    }
  },
}
</script>
