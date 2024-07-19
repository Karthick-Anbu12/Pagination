
let xhr=new XMLHttpRequest()
xhr.open('get',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true)
xhr.onload =function ()
 {
    if(xhr.status>=200 && xhr.status<300)
    {
     var response=JSON.parse(xhr.responseText);
     let len=response.length;
     let num=len/5
     start=0;
     let container1=document.createElement("div")
     let box=document.createElement("div");
     container1.style.display="flex";
     container1.style.justifyContent="center"
     box.style.lineHeight="20px"
     box.style.display="flex";
     box.style.justifyContent="center";

     for(i=0;i<num ;i++){
     let btn=document.createElement("button");
     btn.className=i;
     btn.innerText=i+1;
     btn.style.backgroundColor="lightblue"
     btn.style.border="2px"
     btn.style.padding="1px"
     btn.style.width="30px"
     btn.style.height="30px"
     btn.style.marginBottom="10px"
     btn.onmousemove=function(){
        this.style.margin="2px"
     }
     btn.onmouseleave=function(){
        this.style.margin="0px"
     }
     btn.onclick=function(){
        let start=parseInt(this.innerText-1)*5;
        let limit=start+5;
        box.innerText=" "
        for(start;start<limit;start++)
        {
        box.innerText+=" Id : "+response[start].id+"\n Name : "+response[start].name+"\n Email : "+response[start].email+"\n"
        document.body.appendChild(box)               
    }
     }

     container1.appendChild(btn);
     document.body.appendChild(container1)
     }
    }
    
 }
 xhr.send()
 


