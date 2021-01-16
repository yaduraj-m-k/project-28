class Sling{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:0,
            stiffness:0.04
        }
        this.point2= point2;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA= null;
    }
    
    display(){

        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.point2;
            push();
            stroke(48,28,17);
           // if(pointA.x<220){
                strokeWeight(8);
                line(pointA.x,pointA.y,pointB.x+30,pointB.y);
                
            //}
            /*else{
                strokeWeight(4);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                
            }*/
            pop();
        }
    }

    attach(body){
        this.sling.bodyA=body;
    }
}