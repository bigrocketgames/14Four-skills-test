function selectClick(e) {
  contactsRightInfoList = document.getElementsByClassName("contact-right")


  for (let i=0; i < contactsRightInfoList.length; i++) {
    var hiddenPanel = contactsRightInfoList[i].getElementsByClassName("hidden-contact-details")[0]

    if (e.value === "Phone") {
      var phoneEl = hiddenPanel.getElementsByClassName("contact-phone")[0]
      
      phoneEl.remove()

      contactsRightInfoList[i].insertBefore(phoneEl, contactsRightInfoList[i].firstChild)

      var emailEl = contactsRightInfoList[i].getElementsByClassName("contact-email")[0]
      
      emailEl.remove()

      hiddenPanel.insertBefore(emailEl, hiddenPanel.firstChild)
    } else {
      var emailEl = hiddenPanel.getElementsByClassName("contact-email")[0]
      
      emailEl.remove()

      contactsRightInfoList[i].insertBefore(emailEl, contactsRightInfoList[i].firstChild)

      var phoneEl = contactsRightInfoList[i].getElementsByClassName("contact-phone")[0]
      
      phoneEl.remove()

      hiddenPanel.insertBefore(phoneEl, hiddenPanel.firstChild)
    }
    

  }
}

function clickContact(e) {
  var thisPanel = e.getElementsByClassName("hidden-contact-details")[0]
  var thisContactRow = e.getElementsByClassName("contact-row")[0]
  var contactRows = document.getElementsByClassName("contact-row")

  if (thisPanel.classList.contains("show")) {
    thisPanel.classList.remove("show")
    thisContactRow.classList.remove("active-contact")

    for (let i=0; i < contactRows.length; i++) {
      contactRows[i].classList.remove("inactive-contact")
    }

  } else {
    // Ensure any other contacts are turned off before showing the current one
    var hiddenPanels = document.getElementsByClassName("hidden-contact-details")
    for (let i=0; i < hiddenPanels.length; i++) {
      hiddenPanels[i].classList.remove("show")
      contactRows[i].classList.remove("active-contact")
      contactRows[i].classList.add("inactive-contact")
    }

    // Make other contacts appear inactive

    thisPanel.classList.add("show")
    thisContactRow.classList.remove("inactive-contact")
    thisContactRow.classList.add("active-contact")
  }
}