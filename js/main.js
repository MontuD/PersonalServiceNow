
(function(){


    let RepeatedIssues = ["RSA Account Locked",
    "RSA Soft Token",
    "RSA Pin Reset",
    "AD password resset ",
    "AD Accont Locked",
    "AD Account Disabled",
    "Ping ID Setup",
    "Ping ID Reset ",
    "Ping ID Outside",
    "Canvas Blank Page",
    "Canvas Independence",
    "Canvas Add External Member",
    "Outlook Teams Addin Missing",
    "Outlook Disconnected",
    "Outlook Offline MAC",
    "Outlook Shared Mailbox Add",
    "Outlook Create Shared Mailbox",
    "Intune Setup",
    "MFA Reset",
    "No Wifi Device Detected",
    "Add Home Printer",
    "Add Office Printer",
    "Mercury UI path Offline"];  


    let select = $('#options')[0];


    let option = '';


    RepeatedIssues.forEach(e=>{

       option = `<option> ${e} </option>`;
       select.innerHTML += option;

    });


    $('select').change(function(e){

        console.log()
    
        $('#issue')[0].textContent = e.target.value;
        
    });
        

    console.log(option);

}());




document.getElementById('addissue').addEventListener('click',function(e){

    



    e.preventDefault();

    let gpn =  $("#gpn").val();
    let issue  =  $("#issue").val();
    let date  = new Date();

    let html =  `<div class="card">
        <div id="gpnnumber" class="gpnnumber">${gpn}</div>
        <div id="issuedesc" class="issuedesc"> ${issue}</div>
        <div> ${date}</div>
    </div>`;


    $('.issue-container')[0].innerHTML +=  html;

},false);