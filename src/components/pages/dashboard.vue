<template>
  <div id="dashboard">
        <h2>{{this.$store.state.activeUser.name}} Post , </h2>
          <!-- <div v-for="(post, index) in posts" :key="index">  -->
              <h3>{{posts.title}}</h3>
              <p>{{posts.body}}</p>
          <!-- </div> -->
          <div v-if="show">
              <textarea rows="2" v-model="title" cols="20" placeholder="Title"></textarea><br><br>
              <textarea rows="6" v-model="body" cols="50" placeholder="Body"></textarea>
          </div>
          <button class="button button1" @click="createPost">Create Post</button>
  </div>
</template>

<script>
import api from '../../sevice'
export default {
    name:"dashboard",
    data() {
        return {
            posts:[],
            show: false,
            title: "",
            body: ""
        }
    },
    methods: {
        async createPost() {
            try {
                this.show = true
                if (this.title && this.body) {
                    let userId = this.$store.state.activeUser.id
                    let payload = {
                        title:this.title,
                        body: this.body,
                        userId: userId
                    }
                    await api.createPost(payload)
                    this.show = false
                    this.getPosts()
                }
            } catch (error) {
                console.log('error while create post')
            }
        },
        async getPosts() {
            try {
                let userId = this.$store.state.activeUser.id
                const response = await api.getPosts(userId)
                this.posts = response.data
                console.log('posts', this.posts)
            } catch (error) {
                console.log('error while get posts')
            }
        }
    },
    created() {
        this.getPosts()
    }
}
</script>

<style scoped>
#dashboard {
    margin: 10% 10% 10% 10%
}
.button {
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15x;
  margin: 10px 0px;
  cursor: pointer;
  border-radius: 15%
}
.button1 {background-color: #008CBA;}
</style>