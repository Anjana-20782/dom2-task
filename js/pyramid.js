document.getElementById("star").addEventListener(`click`,()=>{

    let x=parseInt(document.getElementById("number").value)
    if(x>=50)
    
        return alert("invalid reference")
        let inner=""
        for(i=1;i<=x;i++)
        {
            str="";
            for(j=i;j<x;j++)
            {
                str+=" "

            }
            for(k=1;k<=i;k++)
            {
                str+="* "
            }
            inner+=str + "\n"
        }
    
        document.getElementById("result").innerHTML=`<pre>${inner}</pre>`
});