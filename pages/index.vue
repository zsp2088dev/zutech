<template>
  <div>
    <search-box style="margin-top: 30px;" @keyword="setKeyword" />
    <tag-item-list style="margin-top: -35px;" @keyword="setKeyword" />
    <card-item-list :cards="filteredEntries" />
  </div>
</template>
<script>
import CardItemList from '../components/03_organisms/CardItemList'
import { findAllEntries } from '../plugins/contentful'
import TagItemList from '../components/03_organisms/TagItemList'
import SearchBox from '../components/02_molecules/SearchBox'
import { getFilteredEntries } from '../plugins/fuse'
export default {
  components: { SearchBox, TagItemList, CardItemList },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  },
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    filteredEntries() {
      return getFilteredEntries(this.keyword, this.entries)
    },
  },
  methods: {
    setKeyword(keyword) {
      this.keyword = keyword
    },
  },
}
</script>
