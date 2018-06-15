// should return 5 random users
fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('err: ', err))
