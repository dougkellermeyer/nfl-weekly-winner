<template>
<div id ="login">
    <h1>Login!</h1>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="blue"
      class="mr-4"
      @click="$router.push('games')"
    >
      Submit
    </v-btn>
  </v-form>
        <router-link to="/games">Games</router-link>
    </div>

</template>

<script>

export default {
  name: 'Login',
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 1) || 'Name must be at least 1 character',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          alert('form complete')
        }
      },
    },
  }
</script>

<style scoped>
#login {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

.container {
display: flex;
flex-direction: column;
}

</style>