<template>
<div id ="login">
    <v-card id="loginCard">
        <v-card-title>Login</v-card-title>
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
                class="mr-4"
                @click="$router.push('games')"
                >
                Submit
                </v-btn>
            </v-form>
    </v-card>
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
        //if further validation necessary
        // validate () {
        // if (this.$refs.form.validate()) {
    
        // }
    }
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

#loginCard {
margin-left: 35%;
margin-top: 200px;
padding-top: 80px;
padding-left: 40px;
padding-right: 40px;
width: 450px;
height: 400px;
}

</style>