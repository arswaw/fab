new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        test: async function testAPI() {
            const response = await fetch('http://localhost:3000/')
            this.message = response.json()
        }
    }
})