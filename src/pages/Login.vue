<template>
  <div class="login">
    <Navigation/>
    <div class="form">
      <q-form
        @submit.prevent="onSubmit"
      >
        <q-input color="amber-11" dark outlined v-model="username" label="Username" class="input"
                 type="text">
          <template v-slot:prepend>
            <q-avatar>
              <i class="fas fa-user"></i>
            </q-avatar>
          </template>
        </q-input>

        <q-input
          color="amber-11" dark outlined v-model="password" label="Password" class="input"
          type="password"
        >
          <template v-slot:prepend>
            <q-avatar>
              <i class="fas fa-lock"></i>
            </q-avatar>
          </template>
        </q-input>

        <div class="button">
          <q-btn color="secondary" glossy label="Login" type="submit" class="btn-login"
                 size="20px"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    name: "Login",
    components: {Navigation},
    meta: {
      title: 'Login'
    },
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style scoped>
  .login {
    background-color: var(--dark);
    height: 100vh;
  }

  .form {
    width: 30%;
    margin: 10em auto;
  }

  .input {
    margin-bottom: 2em;
    font-size: 1.5rem;

  }


  .q-field--dark {
    color: var(--accent) !important;
  }

  .q-field--outlined {
    border-radius: 5px;
  }

  .q-field--outlined:focus, .q-field--outlined:focus:active {
    border: none;
  }

  .fas {
    font-size: 1.5rem;
  }

  .button {
    width: 100%;
    text-align: center;
  }

.btn-login {
  width: 30%;
}
</style>
