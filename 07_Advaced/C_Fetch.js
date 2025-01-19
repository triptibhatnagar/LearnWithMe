fetch('https://api.github.com/users/triptibhatnagar').then((response) => {//data to be received
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

// 