new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        test: async function testAPI() {
            const response = await fetch('http://localhost:3000/', {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': "GET"
                },
            })

            const json = await response.json()
            
            this.message = json.message
        }
    }
})