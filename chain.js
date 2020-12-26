class Chain{
    constructor(bodya,bodyb)
    {
        var op={
            bodyA:bodya,
            bodyB:bodyb,
            lenth:10,
            stiffness:0.05
        }
        this.chain=Constraint.create(op);
        World.add(world,this.chain);
    }
    display()
    {
     strokeWeight(4);
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}