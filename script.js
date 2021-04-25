const openButton= document.querySelectorAll('[data-post-target]');
const closeButton= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
openButton.forEach(button=>{
    button.addEventListener('click',()=>{
        //get the target from the data attribute in the html
        const post=document.querySelector(button.dataset.postTarget)
        openPost(post)
    })
})
function openPost(post){
    if(post==null)return
    post.classList.add('active')//add the class so we can se the write a post section
    overlay.classList.add('active')//take the variable overlay and add it the class active
}
function closePost(post){
    if(post==null)return
    post.classList.remove('active')//remove the class so we can't se the write a post section
    overlay.classList.add('active')//take the variable overlay and remove the class so we dont see the overlay anymore
}