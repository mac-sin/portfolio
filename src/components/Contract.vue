<template>
    <section id="contract" class="my-5">
        <div class="text-center py-5">
            <div class="text-h4">Contract</div>
        </div>

        <v-form
            class="mt-5 contract-form"
            action="javascript:void(0)"
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
        >
            <v-text-field
                outlined
                label="name"
                ref="name"
                v-model="name"
                :rules=[rules.required]
                required
                :disabled="loading"
                @keyup.enter="validate"
            ></v-text-field>

            <v-text-field
                outlined
                label="email"
                ref="email"
                v-model="email"
                :rules="emailRules"
                required
                :disabled="loading"
            ></v-text-field>

            <v-textarea
                outlined
                label="Message"
                v-model="message"
                :rules=[rules.required]
                required
                :disabled="loading"
                @keyup.enter="validate"
            ></v-textarea>

            <v-btn 
                outlined block class=""
                :disabled="false"
                @click="validate"
            >
                submit
            </v-btn>
        </v-form>
    </section>
</template>

<script>
export default {
    name: "Contract",

    data: () => ({
        loading: false,
        valid: true,
        lazy: false,
        rules: { required: value => !!value || '必須輸入 required', },
        emailRules: [
            v => !!v || '必須輸入 required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        name: null,
        email: null,
        message: null,
        isSuccess: false,
        errorText: "",
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.errorText = null;
                this.fetch();
            }
        },

        async fetch() {
            this.loading = true;
            this.errorText = null;
            const client = { name: this.name, email: this.email, message: this.message }
            // eslint-disable-next-line no-console
            console.log( client );
        },
    },

}
</script>

<style scoped>
.contract-form {
    max-width: 500px;
    margin: auto;
}
</style>