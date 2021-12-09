<template>
  <div>
      <input v-model="val" /><button type="button" @click="search">搜索</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Topbar',
  data() {
      return {
          val: ''
      }
  },
  methods: {
      ...mapMutations([
          'search_add_mutation'
      ]),
      search() {
          const { val } = this;
          if (!val) {
              return
          }
          this.search_add_mutation({ val, key: val })
          this.val = ''
      }
  },
}
</script>
