// should return 5 random users
fetch('https://randomuser.me/api/?results=5')
.then(response => console.log(response))
.catch(err => console.log('err: ', err))
