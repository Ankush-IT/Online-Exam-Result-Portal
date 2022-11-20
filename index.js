function result()
{
    var student= 
    {
     DAVID: {
        math: "100",
        pythics : "45",
        literature : "92"
     },
      SHAWN : {
        math: "95",
        pythics : "80",
        literature : "100"
     },
     BELLA : {
        math: "76",
        pythics : "100",
        literature : "88"
     }
    }

    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=student[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML=`<hr> There is no information about this student.<hr>`;
    } else {
        output.innerHTML= `<hr> Math score is ${definition.math}. <hr> Pythics score is ${definition.pythics}. <hr> Literature score is ${definition.literature}. <hr>` ;
    };
};