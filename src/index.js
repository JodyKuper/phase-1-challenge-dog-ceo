const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

const dogImage = document.getElementById('dog-image-container')

const fetchImage = () =>{
 return (fetch(imgUrl)
.then(response => response.json())
.then(dog => console.log))


// .then(dog => fetchedImage(json)) 
// .then(dog => { console.log(json)
// })
// .then(dog => console.log(json))
}
// debugger

const fetchedImage =(img) => {
    const dogA = document.createElement('img')
    
    dogImage.appendchild(dogA)

}