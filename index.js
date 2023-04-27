function scuberGreetingForFeet(numberInFeet){
  if (numberInFeet <= 400){
    return 'This one is on me!'
}
  else if (numberInFeet >= 400 && numberInFeet <= 2000){
    return 'That will be twenty bucks.'
}
  else if (numberInFeet >= 2001 && numberInFeet <= 2500){
    return "I will gladly take your thirty bucks."
  }
  else (numberInFeet >= 2501)
    return 'No can do.'
  }

  let favoriteCity = 'NYC'

  function ternaryCheckCity(favoriteCity){
    return favoriteCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  }


function switchOnCharmFromTip(generous){
  switch (generous){
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you."

      default: 
      return "Bye."
  }
}
