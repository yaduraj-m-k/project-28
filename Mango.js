class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        this.image=loadImage("sprites/mango.png")
        World.add(world,this.body)

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}