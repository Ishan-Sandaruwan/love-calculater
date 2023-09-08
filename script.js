const cal = document.getElementById("cal");
const persentage = document.getElementById("percentage");

cal.addEventListener("click",function(event){
    if(document.getElementById("n1").value !== "" && document.getElementById("n2").value !== ""){
        event.preventDefault();
        var count = Math.random();
        count = count * 100 + Math.round(Math.random()) ;
        count = Math.floor(count);
        document.getElementById("answer").style.display = "block" ;
        persentage.innerText=count;
    }else{
        alert("please fill the names ");
    }
})