const arrName = ['Phượng', 'Phương', 'Sang', 'Nguyên'];
document.getElementById("myBtn").onclick=()=>{
  let randomIndex=Math.floor(Math.random()*arrName.length);
  document.getElementById('answer').innerHTML="<span class='color-text'>"+arrName[randomIndex]+"</span> là người chăm học số 1 không ai số 2."
}