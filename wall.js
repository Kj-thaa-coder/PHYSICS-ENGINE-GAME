class Wall{


    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.height=height;
this.width = width;
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);




}
display()
{


    
    var pinpos=this.body.position;

    push()
    translate(pinpos.x, pinpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    fill("gray")
    rect(0,0,this.width, this.height);
    pop()
    
    }




    

}




