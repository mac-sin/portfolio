<template>
    <section id="contract" class="ma-5">
        <div class="text-center">
            <div class="text-h4">Contract us</div>
        </div>

        <v-form
            class="mt-5 contract-form"
            autocomplete="off"
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
        >
            <v-progress-linear indeterminate :active="loading" color="cyan" class="mb-5"></v-progress-linear>

            <div v-if="getStatus.errorMessage"
                class="pa-3 text-h6 font-weight-light error--text">
                {{ getStatus.errorMessage }}
            </div>
            <div
                v-if="getStatus.successMessage"
                class="pa-3 text-h6 font-weight-light success--text">
                {{ getStatus.successMessage }}
            </div>

            <v-text-field
                outlined
                label="name"
                ref="client_name"
                v-model.trim="name"
                :rules=[rules.required]
                required
                :disabled="loading"
            ></v-text-field>

            <v-text-field
                outlined
                label="email"
                ref="client_email"
                v-model.trim="email"
                :rules="emailRules"
                required
                :disabled="loading"
            ></v-text-field>

            <v-textarea
                outlined
                label="Message"
                ref="client_message"
                v-model.trim="message"
                :rules=[rules.required]
                required
                :disabled="loading"
            ></v-textarea>

            <v-btn 
                outlined block class=""
                :disabled="loading"
                @click="validate"
            >
                submit
            </v-btn>
        </v-form>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Contract",

    data: () => ({
        loading: false,
        valid: false,
        lazy: false,
        rules: { required: value => !!value || '必須輸入 required', },
        emailRules: [
            v => !!v || '必須輸入 required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        name: null,
        email: null,
        message: null,
    }),

    computed: {
      ...mapGetters(['getClient','getStatus']),
    },

    methods: {
        ...mapActions(['asyncFetchContract']),

        validate() {
            if (this.$refs.form.validate()) {
                this.fetch();
            }
        },

        fetch() {
            this.loading = true;
            const clientForm = { name: this.name, email: this.email, message: this.message }
            this.asyncFetchContract(clientForm)
                .then((result)=> {
                    if (result) {
                        this.$refs.form.reset();
                    }
                    this.loading = false;
                })
        },
    },

}
</script>

<style scoped>
.contract-form {
    max-width: 600px;
    margin: auto;
}
</style>