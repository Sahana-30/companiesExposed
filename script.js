var secretContainer = $(".secretContainer");
// let my_url="https://headlines.peta.org/donate/?en_txn7=Navigation::top-donate-now-button&supporter.appealCode=IXXXWBXXXXG";
// var JSbutton=$(".button")

  // JSbutton.on("click", chooseWebsite);
$("input[type='button']").click(chooseWebsite);
  
  function chooseWebsite(){
    var questionOne = $("input[name='donationQuestion']:checked").val();

    if (questionOne === "Yes"){
      secretContainer.append(`<h2>Check this website to donate: </h2>
<a style ="color:white" href="https://headlines.peta.org/donate/?en_txn7=Navigation::top-donate-now-button&supporter.appealCode=IXXXWBXXXXG"> Donate Here!</a>`)
      
    // window.open(my_url);
    } else{
      secretContainer.append(`<h2> Thank you for taking your time to check out our website!</h2>`)
    }
  }