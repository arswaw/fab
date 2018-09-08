new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        test: async function testAPI() {
            const response = await fetch('http://127.0.0.1:3000/', {
                mode: 'cors',
                credentials: "same-origin",
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