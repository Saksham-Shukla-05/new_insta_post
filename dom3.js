let post = document.getElementById("post")
let like = document.getElementById("flike")
let NoOfLikes = document.getElementById("no-of-likes") 
let ShowLike = document.getElementById("like-count")
let gettext = document.getElementById("text")
let postcmnt = document.getElementById("postnow")
let addcmnt = document.getElementById("addcmnt")
let show = document.getElementById("comment")
let mycmnt = document.getElementById("mycmnt")
let username = document.getElementById("username")
let dblclick = 0




addcmnt.addEventListener("click",function(){
    show.style.display="flex"
})

postcmnt.addEventListener("click",function(){
    if(mycmnt.innerHTML.length==0){
        mycmnt.innerHTML=`${username.textContent}  ${gettext.textContent}`
        ShowLike.style.display = "inline-block"
        show.style.display="none"
        console.log("THIS IS MYCONTENT",mycmnt.textContent)
    }

    else
    {
        var newcontent = document.createElement("p")
        newcontent.textContent = `${username.textContent}  ${gettext.textContent}`
        mycmnt.append(newcontent)
        show.style.display="none"
        console.log(newcontent.textContent)
    }
})

post.addEventListener("dblclick",function(){

    
    if(dblclick==0){

            if(like.style.color="white"){
            like.style.color="red"
            ShowLike.style.display = "inline-block"
            NoOfLikes.textContent="1 like"
            dblclick=1
            console.log(dblclick)
        }

        else{
            like.style.color="red"
            ShowLike.style.display = "inline-block"
            NoOfLikes.textContent="1 like"
            dblclick=1
            console.log(dblclick)
        }
    }

    else{
        like.style.color="white"
        // ShowLike.style.display = "none"
        NoOfLikes.textContent="like"
        dblclick=0
    }
})

like.addEventListener("click",function(){
    if(like.style.color=="red"){
        like.style.color="white"
        NoOfLikes.textContent="like"
        // ShowLike.style.display="none"
        console.log("converted to white");
        dblclick=0
    }

    else{
        like.style.color="red"
        NoOfLikes.textContent="1 like"
        ShowLike.style.display="inline-block"
        console.log("converted to red");
        dblclick=1
    }

})