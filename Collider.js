AFRAME.registerComponent("swimming-fishes",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`;

      var posX =(Math.random() * 3000 + (-1000));      
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.swimmingFishes(id, position);
        }
    },
    swimmingFishes:(id, position)=> { 
    
        var terrainEl = document.querySelector("#terrain");
    
        var fishEl = document.createElement("a-entity");
    
        fishEl.setAttribute("id",id);
        fishEl.setAttribute("scale",{x:500, y:500, z:500});
        fishEl.setAttribute("position",position);
        
        fishEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
        
        fishEl.setAttribute("animation-mixer",{});   
    
        terrainEl.appendChild(fishEl);
      }

})