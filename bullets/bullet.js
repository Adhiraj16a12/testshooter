AFRAME.registerComponent("bullets" , {
    init:function(){
        this.shootBullet()
    },
    shootBullet:function(e){
        window.addEventListener("keydown" , (e)=>{
            if(e.key==="z"){
                var bullet = document.createElement("a-entity") 
                console.log("bullet")
                bullet.setAttribute("geometery",{
                    primitive:"sphere" , 
                    radius:0.1
                })
                bullet.setAttribute("material", "color" , "black")
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position" , {
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                bullet.setAttribute("velocity" , {
                    x:0, y:0 , z:-2
                })
                console.log(bullet.getAttribute("velocity"))
                cam.appendChild(bullet)
            }
        })
    }
})