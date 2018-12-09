<template>
  <div class="demo">
    <h1>Latest Vue.js commit</h1>
    <template v-for="branch in branches">
      <div :key="branch">
        <input type="radio"
          :id="branch"
          :value="branch"
          name="branch"
          v-model="currentBranch"
          >
        <label :for="branch">{{ branch }}</label>
      </div>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits" :key="record.sha">
        <a
          :href="record.html_url"
          target="_blank"
          class="commit">
          {{ record.sha.slice(0, 7) }}
        </a>
        - <span class="message"> {{ record.commit.message | truncate }} </span><br>
        by <span class="author">
            <a :href="record.author.html_url">
              {{ record.commit.author.name }}
            </a>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
          </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'

const apiUrl = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

@Component({
  filters: {
    truncate (v: string): string {
      const newLine = v.indexOf('\n')
      return newLine > 0 ? v.slice(0, newLine) : v
    },
    formatDate (v: string): string {
      return v.replace(/T|Z/g, ' ')
    }
  }
})
export default class Gitsub extends Vue {
  branches: Array<string> = ['master', 'dev']
  currentBranch: string = 'master'
  commits: Array<any> = []

  created () {
    this.fetchData()
  }

  @Watch('currentBranch')
  fetchData () {
    const xhr = new XMLHttpRequest()
    let _this = this
    xhr.open('GET', `${apiUrl}${_this.currentBranch}`)
    xhr.onload = () => {
      _this.commits = JSON.parse(xhr.responseText)
      console.log(_this.commits[0].html_url)
    }
    xhr.send()
  }
}
</script>

<style scoped>
.demo {
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
  color: #f66;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author, .date {
  font-weight: bold;
}
</style>
