<template>
  <div>
        index
        <Topbar @search="onSearch"/>
        <List :list="list"/>
  </div>
</template>
<script>
import '../../css/index.less';
import Topbar from '../index/topbar.vue';
import List from '../index/list.vue';
export default {
    name: 'App',
    data () {
        return {
            list: []
        }
    },
    components: {
        Topbar,
        List
    },
    methods: {
        onSearch (event) {
            const { val } = event;
            this.list.push({
                key: `key_${this.list.length}`,
                val
            })
        }
    },
}
</script>
