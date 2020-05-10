class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
      
    Fly() {

    this.Sling.bodyA = null;    
        
    }
    display(){
        if (this.Sling.bodyA){
 var posA = this.Sling.bodyA.position;
        var posB = this.Sling.pointB;
        fill("white");
        strokeWeight(4);
        line(posA.x, posA.y,posB.x, posB.y);
        }
       
    }
    
}