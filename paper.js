class paper {
    constructor(x,y){
    var options={
    isStatic:false,
    restitution:0.1,
    density:1.8,
    friction:1
    }
    this.body=Bodies.circle(x,y,20,options)
    this.radius=20
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
    //translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    fill("white")  
    ellipse(pos.x,pos.y,this.radius,this.radius)
    pop()  
    }
    }

    