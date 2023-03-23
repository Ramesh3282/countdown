var ele=document.getElementById("countdown")
function fun1(callBack){
    ele.textContent=10
   
    setTimeout(callBack,1000)
}

function fun2(callBack){
    ele.textContent=9
 
    setTimeout(callBack,1000)
}
function fun3(callBack){
    ele.textContent=8
    setTimeout(callBack,1000)
}

function fun4(callBack){
    ele.textContent=7
    setTimeout(callBack,1000)
}
function fun5(callBack){
    ele.textContent=6
    setTimeout(callBack,1000)
}


function fun6(callBack){
    ele.textContent=5
    setTimeout(callBack,1000)
}

function fun7(callBack){
    ele.textContent=4
    setTimeout(callBack,1000)
}

function fun8(callBack){
    ele.textContent=3
    setTimeout(callBack,1000)
}

function fun9(callBack){
    ele.textContent=2
    setTimeout(callBack,1000)
}

function fun10(callBack){
    ele.textContent=1
    setTimeout(callBack,1000)
}
   
function fun11(callBack){
    ele.textContent="Happy independence day"
    
    
}



function countDown(){
    fun1(()=>{
        fun2(()=>{
            fun3(()=>{
                fun4(()=>{
                    fun5(()=>{
                        fun6(()=>{
                            fun7(()=>{
                                fun8(()=>{
                                    fun9(()=>{
                                        fun10(()=>fun11())
                                    })})
                            })
                        })
                    })
                })
            })
        })

    })
}

countDown()