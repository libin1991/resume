module.exports = {
    apps: [{
        name: "resume",
        script: "resume.js"
    }],
    deploy: {
        // "production" is the environment name
        production: {
            // SSH key path, default to $HOME/.ssh
            key: "/Users/Administrator/.ssh",
            // SSH user
            user: "root",
            // SSH host
            host: ['47.105.68.42'],
            // SSH options with no command-line flag, see 'man ssh'
            // can be either a single string or an array of strings
            ssh_options: "StrictHostKeyChecking=no",
            // GIT remote/branch
            ref: "github/master",
            // GIT remote
            repo: "git@github.com:chandlerCao/resume.git",
            // path in the server
            path: "/software/nginx-1.15.7/html/"
        },
    }
}