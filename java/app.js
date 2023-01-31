let st = false
let randomName = document.getElementById("randomName")
let Chosen
let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
let li4 = document.getElementById('li4')
let li5 = document.getElementById('li5')
let i = 0
let li1_1
let li2_2
let li3_3 
let li4_4 
let li5_5 
let counter = false

function getname() {
    fetch('./Json/names.json').then(responce=>responce.json()).then(data=>{
        
        let name = data
        
        let r = 0 + Math.floor(Math.random() * 27);
        
        console.log(name.studentName[r].firstName)
        
        Chosen = name.studentName[r].firstName

    })

}

function math() {

    if(i == 5){ 
        i = 0
    }
    else if(i==i)
    {
        i++
    }
    console.log(i)
}

function yes(){
        if (counter == true){
        let li6 = Chosen
        li5_5 = li5.textContent
        li5.textContent = li6
        
            li4.textContent = li5_5
        // li5_5  = Chosen
        li1.textContent = li2_2
        li2.textContent = li3_3
        li3.textContent = li4_4
        // li5.textContent = Chosen
        li4_4 = li4.textContent
        li3_3 = li3.textContent
        li2_2 = li2.textContent
        // li4_4 = li4.textContent
    }
}

randomName.addEventListener("click", function() {
    getname()
    math()
if(counter == false){
    if( i==1 ){
        li1.textContent = Chosen
        li1_1=Chosen
    } else if( i==2 ){
        li2.textContent = Chosen
        li2_2=Chosen
    }else if( i==3 ){
        li3.textContent = Chosen
        li3_3=Chosen
    }else if( i==4 ){
        li4.textContent = Chosen
        li4_4=Chosen
    }else if(i==5){
        li5.textContent = Chosen
        counter = true
    }
}

if(st == true){
    yes()
}
st = true


})

getname()