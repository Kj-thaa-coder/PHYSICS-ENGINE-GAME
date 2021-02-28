class Pins{


    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:4,
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



    if(this.body.speed>6){
        score = score+1
      }
    
    var pinpos=this.body.position;

    push()
    translate(pinpos.x, pinpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    fill("white")
    rect(0,0,this.width, this.height);
    pop()
    
    }




    

}




