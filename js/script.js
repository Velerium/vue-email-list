Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails: [],
            i: 0,
            emailNum: 0,
        },

        methods: {
            getEmails: function() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                });
            },

            recalc: function() {

                this.emails = [],
                this.i = 0;

                while (this.i < this.emailNum) {
                    this.getEmails();
                    this.i++;
                }
            },

        },

    }
);
