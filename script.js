function Total(){
    var sub1 = parseInt(document.getElementById("pj").value);
    var sub2 = parseInt(document.getElementById("acc").value);
    var sub3 = parseInt(document.getElementById("pcb").value);
    var sub4 = parseInt(document.getElementById("sls").value);
    var sub5 = parseInt(document.getElementById("os").value);
    
   
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }
    else {
      var total= sub1 + sub2 + sub3 + sub4 + sub5 ;
      document.getElementById("total").innerHTML = "P in Java Marks :"+sub1+"<br> Accounting Marks: "+sub2+"<br> PCB Design Marks: "+sub3+"<br> SLS Marks: "+sub4+"<br> Operating System Marks: "+sub5+"<br> Total Marks: "+total;  
    }
  }
   
  function Average(){
    var sub1 = parseInt(document.getElementById("pj").value);
    var sub2 = parseInt(document.getElementById("acc").value);
    var sub3 = parseInt(document.getElementById("pcb").value);
    var sub4 = parseInt(document.getElementById("sls").value);
    var sub5 = parseInt(document.getElementById("os").value);
      
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }
    else {
      var total= sub1 + sub2 + sub3 + sub4 + sub5 ;
      var avg=total/5;
      document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
    }
  }
    
    
  function Grade(){
     var sub1 = parseInt(document.getElementById("pj").value);
    var sub2 = parseInt(document.getElementById("acc").value);
    var sub3 = parseInt(document.getElementById("pcb").value);
    var sub4 = parseInt(document.getElementById("sls").value);
    var sub5 = parseInt(document.getElementById("os").value);
      
     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }else {
       var total= sub1 + sub2 + sub3 + sub4 + sub5 ;
       var avg=total/5;
      
       if(avg>=80 && avg<=100)
       {
         document.getElementById("grade").innerHTML="Your grade is A+";
       }
       else if(avg>=75 && avg<=80)
       {
         document.getElementById("grade").innerHTML="Your grade is A";
       }
       else if(avg>=70 && avg<=75)
       {
         document.getElementById("grade").innerHTML="Your grade is A-";
       }
       else if(avg>=65 && avg<=70)
       {
         document.getElementById("grade").innerHTML="Your grade is D";
       }
       else if(avg>=50 && avg<=60)
       {
         document.getElementById("grade").innerHTML="Your grade is B";
       }
       else if(avg>=40 && avg<=50)
       {
         document.getElementById("grade").innerHTML="Your grade is C";
       }
      
       else {
         document.getElementById("grade").innerHTML="Your grade is F";
       }
      
      
    }
   
   
  }