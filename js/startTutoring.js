function startTutoringClicked()
{
    // alert(localStorage.getItem("lastIndexUpdated"));
    localStorage.setItem("lastIndexUpdated","empty");
    var lastIndex;
    if(localStorage.getItem("lastIndexUpdated")!="empty")
    {
        lastIndex = localStorage.getItem("lastIndexUpdated");
    }
    var arr = [uq, dq];

    var rand;
    while ((rand = Math.floor(Math.random() * arr.length)) === lastIndex) ;
    // console.log(rand,lastIndex);
    arr[(lastIndex = rand)]();
    localStorage.setItem("lastIndexUpdated",lastIndex);
} 

function uq(){
    window.location.href = "UQ.html";
}

function dq(){
    window.location.href = "DQ.html";
}

function call(){
    // alert("call called");
    RadioValidator();
    return false;
}

function RadioValidator()
{
    // alert("rv called");
    var ShowAlert = '';
    var AllFormElements = window.document.getElementById("FormID").elements;
    for (i = 0; i < AllFormElements.length; i++) 
    {
        if (AllFormElements[i].type == 'radio') 
        {
            var ThisRadio = AllFormElements[i].name;
            var ThisChecked = 'No';
            var AllRadioOptions = document.getElementsByName(ThisRadio);
            for (x = 0; x < AllRadioOptions.length; x++)
            {
                if (AllRadioOptions[x].checked && ThisChecked == 'No')
                {
                    ThisChecked = 'Yes';
                    break;
                } 
            }   
            var AlreadySearched = ShowAlert.indexOf(ThisRadio);
            if (ThisChecked == 'No' && AlreadySearched == -1)
            {
            ShowAlert = ShowAlert + ThisRadio + ' radio button must be answered\n';
        }     
        }
    }
    if (ShowAlert != '')
    {
        alert("Values not entered!!");
        return false;
    }
    else
    {
        // return true;
        callSubmitModal();
    }
}


function callSubmitModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
    //new Submit Modal
    modal = document.getElementById("mySubmitModal");
    modal.style.display = "block";

}

function changeCategory(){
    window.location.href = "dashboard_new.html";
}

function nextQuestion(){
    startTutoringClicked();
}