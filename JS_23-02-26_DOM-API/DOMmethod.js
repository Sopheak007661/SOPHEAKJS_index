function Change_Style(){
    const show = document.querySelector("h1");
    show.innerHTML = "PSP.com";
    show.innerHTML = "PSP wellcom to JS";

}

function chang_video(){
    
    const new_video = document.getElementById("my-video-mp4");
    new_video.src="../Image/Caton2.mp4";

   
}

function
show_date(){
   const text = document.getElementById("pi");
   text.innerHTML = "Date : " + Date();
}
function print_page(){
  window.print();
}
function Change_Style(){
  const tittle = document.querySelector("h1");
  tittle.style.width = "200px";
  tittle.style.height = "50px";
  tittle.style.padding = "30px";
  const style_new = document.querySelector("video");
  style_new.className = "w-xl h-xl rounded-4xl rounded-t-4xl bg-blue-200";
  
}
/////method 1 of show and hide video
// function show_video(){
//   const show = document.querySelector("video");
//   show.style.display = "block";
// }
// function hide_video(){
//   const hide = document.querySelector("video");
//   hide.style.display = "none";
// }

////Method 2 of showing and hiding video 
function show_video(){
  const show = document.querySelector("video");
  show.style.visibility = "visible";
}
function hide_video(){
  const hide = document.querySelector("video");
  hide.style.visibility = "hidden";
}



// {
//   function showTime() {
// 	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
// 	showTime();
// }, 1000);

// const name = document.getElementById('name');
// const password = document.getElementById('password')
// const form = document.getElementById('form')

// form.addEventListener('submit',(e)=>{
//   let messages = []
//   if(name.value === '' || name.value == null){
//     messages.push('Name is required');
    
//   }
//   if (password.length <= 6){
//     messages.push('password must be long than 6 characters')
    
//   }
//   if (password.length >=20){
//     messages.push('password must be less than 6 characters')
//   }
//   if(password === 'password'){
//     messages.push('password can not be password!!!')
//   }
//   if (messages.lenght > 0){
//     e.proventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
  
// })
// }