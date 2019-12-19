<template>
  <div class="container">
    <div class="column">
      <div class="card">
        <div class="column">
          <p class="title">
            Compose email
          </p>
        </div>
        <div class="column">
          <b-field
            horizontal
            label="Subject"
          >
            <b-input
              ref="input_1"
              v-model="subject"
              required
            />
          </b-field>

          <b-field
            horizontal
            label="To"
          >
            <ExisEmailTagInput
              ref="input_2"
              v-model="to"
              type="email"
              icon="email"
              required
            />
          </b-field>
          <b-field
            horizontal
            label="C.C."
          >
            <ExisEmailTagInput
              v-model="cc"
              type="email"
              icon="email"
            />
          </b-field>
          <b-field
            horizontal
            label="B.C.C."
          >
            <ExisEmailTagInput
              v-model="bcc"
              type="email"
              icon="email"
            />
          </b-field>

          <b-field
            horizontal
            label="Body"
          >
            <div class="control">
              <b-input
                ref="input_3"
                type="textarea"
                placeholder="Input mail body here"
                required
                v-model="text"
              />
            </div>
          </b-field>

          <div class="buttons">
            <b-button
              class="is-primary"
              @click="send"
            >
              Submit
            </b-button>
            <button class="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from "axios"
  import ExisEmailTagInput from "@/components/ExisEmailTagInput";
  import {mapActions} from "vuex";

  const endpoint = 'https://tt-email-gateway.nnnco.io/v1/api/emails'

  const randChoice = choices => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

  export default {
    name: 'Compose',
    components: {
      ExisEmailTagInput,
    },
    data() {
      return {
        subject: '',
        text: '',
        to: [],
        cc: [],
        bcc: [],
      }
    },
    methods: {
      ...mapActions(['storeSend']),
      async send() {
        // validation
        if (!(this.text && this.to.length && this.subject)) {
          this.$buefy.notification.open({
            message: "Please complete the form to continue",
            type: 'is-danger',
            hasIcon: true
          })
          // monkey trigger validation method
          if (!this.to.length) {
            this.$refs.input_2.focus()
            this.$refs.input_2.onBlur()
          }
          [1,3].forEach( i => {
            this.$refs[`input_${i}`].focus()
            this.$refs[`input_${i}`].onBlur()
          })
          return
        }

        const data = {
          from: "hello <hello@hello.com>",
          subject: this.subject,
          text: this.text,
          toList: this.to,
          ccList: this.cc,
          bccList: this.bcc,
        }
        try {
          const response = await axios.post(endpoint, data)
          if (response.status === 200) {
            this.$buefy.notification.open({
              message: randChoice([
                'Well-done - Success!',
                'This is a friendly message to make the UI a little bit more appealing. You sent the email!',
                'OMG, I can\'t believe you did it! Sent.',
                'Keep going! You are about to send some more email.',
                'Voila!',
              ]),
              type: 'is-success',
              hasIcon: true
            })
            this.storeSend({email: data})
            this.$router.push({name: 'sent'})
          }

        } catch (e) {
          console.log(e);
          this.$buefy.notification.open({
            message: e.response.data.message,
            type: 'is-danger',
            hasIcon: true
          })

          // todo:  i guess based on e.response.status we could have different
          //   handling of errors but it's really not worth the trouble
        }
      }
    }
  }
</script>


<style lang="sass" scoped>
    ::v-deep textarea.textarea
        min-height: 400px
</style>
