class GitHub{
    constructor(){
        this.client_id = 'bdfce4b10c9b7513cfc9'
        this.clinet_secret = 'd6d0350300725120132254ab3bbfd8da2cce3689'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        // we will be handling 2 Req: 1--> getting user profile data 2--> to the latest top 5 repos of the user
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id} & client_secret = ${this.clinet_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id = ${this.client_id} & client_secret = ${this.clinet_secret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {//creating an object
            profile, //in ES6 internally it's considered as   profile: profile
            repos
        }
    }
    //async and await allows us to format asynchronous operations really nicely, here we are finally returning an object..if there were no async and await then we would have written callbacks seperately for every response
}