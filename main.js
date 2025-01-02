function changeImage(){
    const image =document.querySelector('.image')
    const url =prompt("pleas Enter Your image URL")
    image.setAttribute('src',url)
    const border=prompt('Enter your border color')
    image.style.border = ` 3px solid ${border}`
    const width =prompt("enter the width of your image (in pixels)")
    image.style.width= `${width}px `
    const height =prompt("enter the height of your image(in pixels)")
    image.style.height=`${height}px`
    const radius =prompt("enter your border radius size (in pixels")
    image.style.radius=`${radius}px`
    image.style.padding ="10px"
    image.style.backgroundColor="blue"

    
}
