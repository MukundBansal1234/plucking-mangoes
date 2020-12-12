class Elastic {
    constructor(bodyA,pointB){
       
       
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length:50
           
           
            
        }
        this.pointB=pointB;

       this.elastic =Matter.Constraint.create(options);
        World.add(world,this.elastic);
    }
    fly(){
        this.elastic.bodyA = null;
    }
    attach(body){
        this.elastic.bodyA=body;
    }
    display(){
        var pointA= this.elastic.bodyA.position;
        var pointB=this.pointB
        strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}