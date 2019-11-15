<template>
  <div class="container">
    <!-- eslint-disable   -->
    <div v-if="found">
        <h1 class="splash">{{ titleName }}</h1>
        <h5 class="mtop45">{{ subtitle }}</h5>

        <button class="loginBtn loginBtn--facebook" v-on:click="fblogin()">
            Login with Facebook
        </button>

        <button class="loginBtn loginBtn--google" v-on:click="fblogout()">
            Login with Google
        </button>
        <div class="line"><span>OR</span></div>
        <button class="loginBtn loginBtn--form">
            Login with Form
        </button>
        <div class="line"><span>OR</span></div>
        <div class="line2"><span>Enter with your access code</span></div>
        <input type="password" name="" class="loginBtn">
        <style>
            body {
                background: url({{ htmlvenue }}) no-repeat center center fixed;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                height: 100%;
                overflow: hidden;
                text-align: center;
                color: #FFF;
            }
            input.loginBtn {
                color: #000!important;
            }
            .line2 span {
                background: #333;
                opacity: 0.6;
                padding: 5px;
            }
            .mtop45 {
                margin-top: 45px;
            }
            .splash {
                margin-top: 15px;
            }
        </style>
    </div>
    <div v-else>
        <h5 class="mtop45"></h5>
        <style>
            .mtop45 {
                margin-top: 45px;
                color: #000;
            }
        </style>
    </div>
  </div>
</template>
<script>
// import { apiurl } from '~/plugins/apiurl.js'

export default {
  data () {
    return {
      titleName: '...',
      htmlvenue: '',
      subtitle: '',
      found: false,
      isFBReady: false
    }
  },
  created () {

  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    fblogin () {
      console.log('Welcome! Fetching your information.... ')
      this.$FB(
        (FB) => {
          FB.login(function (response) {
            console.log(response)
            FB.api('/me?fields=email,name,about,address,birthday,gender,hometown', function (response) {
              console.log(response)
            })
          }, {
            scope: 'email,public_profile',
            auth_type: 'rerequest',
            return_scopes: true
          })
        }
      )
    },
    fblogout () {
      this.$FB(
        (FB) => {
          FB.logout(function (response) {
            console.log(response)
          })
        }
      )
    },
    fetchSomething () {
      const vm = this
      vm.subtitle = 'Connect to WIFI with'
      vm.titleName = 'data.name'
      vm.htmlvenue = 'data.image_back'
      vm.found = true
      // vm.$axios.$get(apiurl + 'venue/splash/' + this.$route.query.mac).then((data) => {
      //   if (data.name !== '') {
      //     vm.subtitle = 'Connect to WIFI with'
      //     vm.titleName = data.name
      //     vm.htmlvenue = data.image_back
      //     vm.found = true
      //   }
      // })
    }
  },
  head () {
    return {
      title: this.titleName
    }
  }
}
</script>
<style lang="css" scoped>
.line2 {
    overflow: hidden;
    text-align: center;
    color:#FFF;
    margin-top: 15px;
    margin-bottom: 15px;
}
.line {
    overflow: hidden;
    text-align: center;
    color:#FFF;
    margin-top: 15px;
    margin-bottom: 15px;
}
.line:before,
.line:after {
    background-color: #FFF;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 27%;
}
.line:before {
    right: 0.5em;
    margin-left: -50%;
}
.line:after {
    left: 0.5em;
    margin-right: -50%;
}
.loginBtn {
  box-sizing: border-box;
  position: relative;
  width: 13em; /* - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}

/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}

/* Form */
.loginBtn--form {
  background-color: #333;
  background-image: linear-gradient(#333, #333);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #333;
}
.loginBtn--form:hover,
.loginBtn--form:focus {
  background-color: #333;
  background-image: linear-gradient(#333, #333);
}

/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}
</style>
