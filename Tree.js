class Tree{
    constructor(x,y,height,width){
    var options={
        isStatic:true,
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image=loadImage("sprites/tree.png")
    World.add(world,this.body)
    }
    display(){
        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)
        pop();
    }
}