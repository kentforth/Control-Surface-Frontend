<template>
  <div class="contact bg-dark">
    <Navigation/>
    <div class="content ">
      <div class="container">
        <q-form
          @submit="sendEmail"
          class="form"
        >

          <div class="name">
            <q-input
              color="amber-11" dark outlined label="Name" class="input"
              v-model.trim="form.name"
              type="text"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              color="amber-11" dark outlined label="Email" class="input"
              v-model.trim="form.email"
              type="email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <q-input
            color="amber-11" dark outlined label="Subject" class="input"
            v-model.trim="form.subject"
            type="text"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />


          <q-input
            v-model="form.message"
            class="message"
            filled
            dark
            type="textarea"
            color="amber-11"
            label="Message"
            label-color="grey-13"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div class="button">
            <q-btn color="secondary" glossy label="Send" type="submit" class="btn-send"
                   size="20px"/>
          </div>
        </q-form>

        <div class="social">
          <a href="https://vk.com/id157065407" target="_blank">
            <i class="fab fa-vk"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    components: {Navigation},
    name: 'Contact',
    meta: {
      title: 'Contact'
    },
    data() {
      return {
        inputModel: '',
        textareaModel: '',
        inputFillCancelled: false,
        textareaFillCancelled: false,
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      sendEmail() {
        this.$q.notify({
                         message: 'Your message has been sent',
                         icon: 'email',
                         color: 'positive',
                         timeout: '1500'
                       });
      }
    }
  }
</script>
<style scoped>

  .form {
    width: 70%;
    margin: 7em auto 0 auto;
  }

  .content {
    padding-top: 3em;
    height: calc(100vh - var(--height));
    width: 100%;
  }

  .input {
    margin-bottom: 2em;
    font-size: 2rem;
  }

  .button {
    text-align: center;
  }

  .btn-send {
    width: 20%;
  }

  .name {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4em;
  }

   .q-field--labeled .q-field__native, .q-field--labeled .q-field__prefix, .q-field--labeled .q-field__suffix{
    padding-bottom: 20px !important;
  }

   .message {
     margin-bottom: 2em;
     font-size: 1.5rem;
   }



      .social {
     width: 100%;
     text-align: center;
     margin-top: 3em;
   }

  .fa-vk {
    color: var(--light);
    font-size: 5rem;
    transition: var(--transition);
  }

  .fa-vk:hover {
    color: var(--secondary);
  }
</style>
