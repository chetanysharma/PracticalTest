<template>
  <div class="login">
    <div class="login-block">
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Email" id="Email" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import api from '../../sevice'
export default {
    name: "login",
    data() {
        return {
            userList: [],
            email: ""
        }
    },
    methods: {
        login() {
            try{
                let authenticate = this.userList.find(el => el.email === this.email)
                console.log('authenticate', authenticate)
                if(authenticate) {
                    this.$store.commit("setAuthentication", true)
                    this.$store.commit("setactiveUser", authenticate)
                    this.$router.replace({name: "Dashboard"})
                } else {
                    this.email =""
                    console.log('Incorrect Password')
                }
            } catch(error) {
                console.log('error while login')
            }
        },
        async getUsers() {
            try {
                const response = await api.getUsers()
                this.userList = response.data.map(el =>{
                    return {
                        email: el.email,
                        id: el.id,
                        name: el.name
                    }
                })
                console.log('users', response.data)
            } catch(error) {
                console.log('error')
            }
        }
    },
    created() {
        this.getUsers()
    }
};
</script>

<style scoped>


.login-block {
  width: 320px;
  padding: 20px;
  background: white;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;
  margin-top: 15%;
}

.login-block h1 {
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}

.login-block input {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: Montserrat;
  padding: 0 20px 0 50px;
  outline: none;
}

.login-block input#Email {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#Email:focus {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px bottom no-repeat;
  background-size: 16px 80px;
}
.login-block input:active,
.login-block input:focus {
  border: 1px solid #ff656c;
}

.login-block button {
  width: 100%;
  height: 40px;
  background: #ff656c;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #e15960;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: Montserrat;
  outline: none;
  cursor: pointer;
}

.login-block button:hover {
  background: #ff7b81;
}
</style>
