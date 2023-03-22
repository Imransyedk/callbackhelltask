setTimeout(()=>{
    document.getElementById("main").innerHTML=10;
    setTimeout(()=>{
        document.getElementById("main").innerHTML=9;
   
        setTimeout(()=>{
            document.getElementById("main").innerHTML=8;
            setTimeout(()=>{
                document.getElementById("main").innerHTML=7;
                setTimeout(()=>{
                    document.getElementById("main").innerHTML=6;
                    setTimeout(()=>{
                        document.getElementById("main").innerHTML=5;
                        setTimeout(()=>{
                            document.getElementById("main").innerHTML=4;
                            setTimeout(()=>{
                                document.getElementById("main").innerHTML=3;
                                setTimeout(()=>{
                                    document.getElementById("main").innerHTML=2;
                                    setTimeout(()=>{
                                        document.getElementById("main").innerHTML=1;
                                        setTimeout(()=>{
                                            document.getElementById("main").innerHTML="Happy Independence Day";
                                            
                                        },11000)
                                    },10000)
                                },9000)
                            },8000)
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000);