// work yet to be done
// add a "pause" button ---------------------------------------------------------------------------
// if I create a "stop" button I need to reshow the 'Setup' div and hide the 'prayer' div
// ABSTRACT THESE LISTS OUT TO 1 OR MORE JSON FILES FOR ADDING AND EDITING WITHOUT RECOMPILING THIS SCRIPT FILE EACH TIME:

// LOAD ARRAYS FROM SCRATCH
const wheelPrompts = [{
  name: 'Praise',
  prompt: 'Start your prayer hour by praising the Lord. Praise Him for things that are on your mind right now. Praise Him for one special thing He has done in your life in the past week. Praise Him for His goodness to your family.'
}, {
  name: 'Wait',
  prompt: 'Spend time waiting on the Lord. Be silent and let Him pull together reflections for you.'
}, {
  name: 'Confess',
  prompt: 'Ask the Holy Spirit to show you anything in your life that might be displeasing to Him. Ask Him to point out attitudes that are wrong, as well as specific acts for which you have not yet made a prayer of confession. Now confess that to the Lord so that you might be cleansed.'
}, {
  name: 'Read the Word',
  prompt: 'Spend time reading in the Psalms, in the prophets, and passages on prayer located in the New Testament.'
}, {
  name: 'Ask',
  prompt: 'Make requests on behalf of yourself.'
}, {
  name: 'Intercession',
  prompt: 'Make requests on behalf of others.'
}, {
  name: 'Pray the Word',
  prompt: 'Pray specific passages. Scriptural prayers as well as a number of psalms lend themselves well to this purpose.'
}, {
  name: 'Thank',
  prompt: 'Give thanks to the Lord for the things in your life, on behalf of your family, and on behalf of your church.'
}, {
  name: 'Sing',
  prompt: 'Sing songs of praise or worship or another hymn or spiritual song'
}, {
  name: 'Listen',
  prompt: 'Ask the Lord to speak to you. Have a pen and paper ready to record impressions He gives you.'
}, {
  name: 'Meditate',
  prompt: 'Spend time merging the things you have read, things you have prayed and things you have sung and see how the Lord brings them all together to speak to you.'
}, {
  name: 'Praise Again',
  prompt: 'Praise the Lord for the time you have had to spend with Him and the impressions He has given you. Praise Him for His glorious attributes.'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const modWheelPrompts = [{
  name: 'Praise',
  prompt: 'Start your prayer hour by praising the Lord. Praise Him for things that are on your mind right now. Praise Him for one special thing He has done in your life in the past week. Praise Him for His goodness to your family.'
}, {
  name: 'Sing',
  prompt: 'Sing songs of praise or worship or another hymn or spiritual song.'
}, {
  name: 'Read the Word',
  prompt: 'Spend time reading in the Psalms, in the prophets, and passages on prayer located in the New Testament.'
}, {
  name: 'Listen',
  prompt: 'Ask the Lord to speak to you. Have a pen and paper ready to record impressions He gives you.'
}, {
  name: 'Pray the Word',
  prompt: 'Pray specific passages. Scriptural prayers as well as a number of psalms lend themselves well to this purpose.'
}, {
  name: 'Meditate',
  prompt: 'Spend time merging the things you have read, things you have prayed and things you have sung and see how the Lord brings them all together to speak to you.'
}, {
  name: 'Confess',
  prompt: 'Ask the Holy Spirit to show you anything in your life that might be displeasing to Him. Ask Him to point out attitudes that are wrong, as well as specific acts for which you have not yet made a prayer of confession. Now confess that to the Lord so that you might be cleansed.'
}, {
  name: 'Thank',
  prompt: 'Give thanks to the Lord for the things in your life, on behalf of your family, and on behalf of your church.'
}, {
  name: 'Intercession',
  prompt: 'Make requests on behalf of others.'
}, {
  name: 'Ask',
  prompt: 'Make requests on behalf of yourself.'
}, {
  name: 'Wait',
  prompt: 'Spend time waiting on the Lord. Be silent and let Him pull together reflections for you.'
}, {
  name: 'Praise Again',
  prompt: 'Praise the Lord for the time you have had to spend with Him and the impressions He has given you. Praise Him for His glorious attributes.'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const actsPrompts = [{
  name: 'Adoration',
  prompt: 'Adore God for who He is'
}, {
  name: 'Confession',
  prompt: "Confess to God your failings and ask Him to reveal what you aren't yet aware of"
}, {
  name: 'Thanksgiving',
  prompt: 'Thank God for what He has done'
}, {
  name: 'Submission',
  prompt: 'Submit both your will to Him and your requests to Him'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const prayPrompts = [{
  name: 'Praise',
  prompt: 'Praise God for who He is and what He has done'
}, {
  name: 'Repent',
  prompt: "Repent of your sins and ask God to reveal what you aren't yet aware of"
}, {
  name: 'Ask',
  prompt: 'Ask God for what you need and for the needs of others'
}, {
  name: 'Yield',
  prompt: 'Yield yourself to God'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const lordsPrompts = [{
  name: 'Our Father',
  prompt: 'Our Father in heaven, Your name be honored as holy<br />God, you are holy, separate from us, and morally pure. Let us take a few moments to pray about making you and your name pure in our minds and lives.'
}, {
  name: 'Your Kingdom Come',
  prompt: "Your kingdom come, Your will be done, on earth as it is in heaven<br />God, we look forward to Jesus' return when your kingdom will be fully established. Let us take a few moments and place our hope on the merging of heaven and earth and the new heavens and new earth that you are bringing to us."
}, {
  name: 'Daily Bread',
  prompt: 'Give us today our daily bread<br />We trust you for today. you teach us that today has enough trouble in it already and that today is enough for us to focus on. Provide for our basic needs today. Let us take a few moments to express them to you now.'
}, {
  name: 'Forgive Us',
  prompt: 'And forgive us our debts ...<br />God, we are sinful people, even though we try not to sin. As we reflect for a few moments, please forgive us the following sins...'
}, {
  name: 'As We Forgive',
  prompt: '...As we also have forgiven our debtors<br />God, you teach us that we must forgive as we have been forgiven. We now reflect on those we need to forgive, and we forgive them.'
}, {
  name: 'Deliver Us',
  prompt: 'And do not bring us into temptation, but deliver us from the evil one<br />As we take a few moments to think about upcoming struggles, help us Lord! Guide us away from things that will tempt us. Protect us from Satan in the upcoming challenges.'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const passionPrompts = [{
  name: 'Praise',
  prompt: 'What are the aspects of God I love? What else?<br />Psalm 146:1-2, 1 Corinthians 14:15'
}, {
  name: 'Ask',
  prompt: 'Lay what you think your needs are. What else?<br />James 4:2, John 15:7'
}, {
  name: 'Sentimental Time',
  prompt: 'Relive the glory days. What else?<br />Song of Songs 2:3-4, 3:1-2, Genesis 5:24'
}, {
  name: 'Sins of the flesh',
  prompt: 'Confessions.<br />2 Timothy 2:22, 1 Thessalonians 5:17'
}, {
  name: 'Insightful Confession',
  prompt: 'What else?<br />Psalm 139:23-24, 1 John 1:9'
}, {
  name: 'Others',
  prompt: 'Their stuff<br />Ephesians 6:18-19, Galatians 6:2'
}, {
  name: 'Notice',
  prompt: 'Remembering the miracles He has done.<br />Ephesians 5:20, 1 Thessalonians 5:18'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
const shodankehPrompts = [{
  name: 'For Laborers',
  prompt: 'For God to send laborers into the harvest field. For an increase in disciple-makers and intercessors.<br /><br />He told them, “The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.” (Luke 10:2 NIV)'
}, {
  name: 'For Hearts',
  prompt: 'That God touches the hearts of people and draws them to Himself.<br /><br />“Saul also went to his home at Gibeah, and with him went men of valor whose hearts God had touched.” (1 Samuel 10:26 NIV)'
}, {
  name: 'For Open Doors',
  prompt: 'For open doors for the Gospel<br /><br />“And pray for us, too, that God may open a door for our message, so that we may proclaim the mystery of Christ, for which I am in chains. Pray that I may proclaim it clearly, as I should.” (Colossians 4:3-4 NIV)'
}, {
  name: 'For Persons of Peace',
  prompt: 'To find persons of peace.<br /><br />“When you enter a house, first say, ‘Peace to this house.’ If someone who promotes peace is there, your peace will rest on them; if not, it will return to you. Stay there, eating and drinking whatever they give you, for the worker deserves his wages. Do not move around from house to house.” (Luke 10:5-7 NIV)'
}, {
  name: 'For Broken Strongholds',
  prompt: 'That every stronghold and lie of the enemy is broken.<br /><br />“For though we live in the world, we do not wage war as the world does. The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds. We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.” (2 Corinthians 10:3-5 NIV)'
}, {
  name: 'For Boldness',
  prompt: 'That He would grant boldness in sharing the gospel.<br /><br />“And now, O Lord, hear their threats, and give us, your servants, great boldness in preaching your word…” After this prayer, the meeting place shook, and they were all filled with the Holy Spirit. Then they preached the word of God with boldness. (Acts 4:29,31 NLT)'
}, {
  name: 'For Anointing',
  prompt: 'For fresh anointing and the power of the Holy Spirit on the disciple makers.<br /><br />“The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.” (Luke 4:18 NIV)'
}, {
  name: 'For Increase',
  prompt: 'For an increase in signs, wonders, and miracles.<br /><br />“Stretch out your hand to heal and perform signs and wonders through the name of your holy servant Jesus.” (Acts 4:30 NIV)'
}, {
  name: 'For Protection',
  prompt: 'For protection for workers in the field.<br /><br />“I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves.” (Matthew 10:16 NIV)'
}, {
  name: 'For Resources',
  prompt: 'For resources for the work to be done.<br /><br />“And my God will meet all your needs according to the riches of his glory in Christ Jesus.” (Philippians 4:19 NIV)'
}, {
  name: 'For Multiplication',
  prompt: 'That there will be multiplication in the hearts of people that leads to movements.<br /><br />“Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.” (Matthew 28:19-20 NIV)'
}, {
  name: 'For Other Movements',
  prompt: 'For other movements and disciple-makers all around the world.<br /><br />“We always thank God for all of you and continually mention you in our prayers. We remember before our God and Father your work produced by faith, your labor prompted by love, and your endurance inspired by hope in our Lord Jesus Christ.” (1 Thessalonians 1:2-3 NIV)'
}, {
  name: 'Done',
  prompt: "Thanks for praying with us.<br /><br /><a href='javascript:location.reload(true)' class='button'>Restart</a>"
}]
// FUNCTIONS - STARTING THE WORK HERE
// DISPLAY THE DURATION AND TEMPLATE OPTIONS
function setup () {
  console.log('setup fired')
  setDuration()
  setTemplate()
  generateSelectboxes()
  generateSliders()
  // CUSTOMIZE BUTTON
  const targetDiv = document.getElementById("cboxes");
  const btnCustomize = document.querySelector('#btnCustomize')
  btnCustomize.onclick = function () {
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
    } else {
    targetDiv.style.display = "none";
    }
  }
  // PRAY BUTTON
  const btnPray = document.querySelector('#btnPray')
  btnPray.addEventListener('click', pray)
  document.addEventListener('keypress', function onEvent (event) {
    if (event.key === 'Enter') {
      btnPray.click()
    }
    if (event.key === 'c') {
      btnCustomize.click()
    }
  })
  // PRAYER COUNTER
  const counterContainer = document.querySelector('.website-counter')
  let visitCount = localStorage.getItem('page_view')
  if (visitCount) {
    visitCount = `You've prayed with us ${visitCount} times.`
    counterContainer.innerHTML = visitCount
  }
} // END setup
function setDuration () {
  // SET DURATION - load previous or set 60 minute default
  console.log("setDuration fired");
  if (localStorage.getItem('selected_time') == null) {
  localStorage.setItem('selected_time', 60)
  }
  const selectDurationDiv = document.getElementById('Duration')
  const selectedTime = [...selectDurationDiv.children].filter(child => child.value === (localStorage.getItem('selected_time')))
  if (selectedTime[0]) { selectedTime[0].selected = 'selected' }  
} // END setDuration
function setTemplate () {
  console.log("setTemplate fired");
  // SET TEMPLATE - load from cookie or Prayer Wheel default
  if (localStorage.getItem('selected_template') == null) {
  localStorage.setItem('selected_template', 'Prayer Wheel')
  }
  const selectTemplateDiv = document.getElementById('Template')
  const selectedTemplate = [...selectTemplateDiv.children].filter(child => child.value === (localStorage.getItem('selected_template')))
  if (selectedTemplate[0]) { selectedTemplate[0].selected = 'selected' }
} // END setTemplate
function generateSliders () {
  console.log("generateSliders fired");
  const selectTemplateDiv = document.getElementById('Template')
  const curTemplate = selectTemplateDiv.value
  if (curTemplate === 'wheel') {
    topicPrompts = wheelPrompts
  }
  if (curTemplate === 'modwheel') {
    topicPrompts = modWheelPrompts
  }
  if (curTemplate === 'acts') {
    topicPrompts = actsPrompts
  }
  if (curTemplate === 'pray') {
    topicPrompts = prayPrompts
  }
  if (curTemplate === 'lords') {
    topicPrompts = lordsPrompts
  }
  if (curTemplate === 'passion') {
    topicPrompts = passionPrompts
  }
  if (curTemplate === 'shodankeh') {
    topicPrompts = shodankehPrompts
  }
  const topicTitles = topicPrompts.map((object) => { const title = `${object.name}`; return title })
//  const topics = JSON.stringify(topicTitles);
  const myDiv = document.getElementById('cboxes')
  myDiv.innerHTML = ''
  for (let i = 0; i < topicTitles.length; i++) {
    if (topicTitles[i] === 'Done') {
      myDiv.innerHTML += '<div style="display: none;" class="sliderclass" id="switch'.concat(topicTitles[i], '"><label class="switch"><input type="checkbox" checked name="topic" value="').concat(topicTitles[i], '"><span class="slider"></span></label><p>').concat(topicTitles[i], '</p></div>')
    } else {
      myDiv.innerHTML += '<div class="sliderclass" id="switch'.concat(topicTitles[i], '"><label class="switch"><input type="checkbox" checked name="topic" value="').concat(topicTitles[i], '"><span class="slider"></span></label><p>').concat(topicTitles[i], '</p></div>')
    }
  }
} // END generateSliders
function generateSelectboxes () {
  console.log("generateSelectboxes fired");
  // CREATE CUSTOM SELECT BOX FUNCTIONALITY
  // from https://www.w3schools.com/howto/howto_custom_select.asp
  let i, j, ll, selElmnt, a, b, c /* Look for any elements with the class "custom-select": */
  const x = document.getElementsByClassName('custom-select')
  const l = x.length
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0]
    ll = selElmnt.length
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement('DIV')
    a.setAttribute('class', 'select-selected')
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
    x[i].appendChild(a)
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement('DIV')
    b.setAttribute('class', 'select-items select-hide')
    for (j = 0; j < ll; j++) {
      /* For each option in the original select element,
            create a new DIV that will act as an option item: */
      c = document.createElement('DIV')
      c.innerHTML = selElmnt.options[j].innerHTML
      c.addEventListener('click', function (e) {
        /* When an item is clicked, update the original select box, and the selected item: */
        let y, i, k, s, h, sl, yl
        s = []
        h = {}
        if (!(this.parentElement === null) && !(this.parentElement.parentElement === null)) {
          const sElement = this.parentElement.parentElement.getElementsByTagName('select')
          s = sElement[0]
          sl = s.length
          h = this.parentElement.previousElementSibling
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i
//              if (!(h.innerHTML === null)) {
//              }
              h.innerHTML = this.innerHTML
              y = this.parentElement.getElementsByClassName('same-as-selected')
              yl = y.length
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute('class')
              }
              this.setAttribute('class', 'same-as-selected')
              break
            }
          }
          h.click()
        }
      })
      b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener('click', function (e) {
      /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
      e.stopPropagation()
      closeAllSelect(this)
      const cl = this.nextElementSibling
      cl.classList.toggle('select-hide')
      this.classList.toggle('select-arrow-active')
    })
  }
} // END generateSelectboxes
function closeAllSelect (elmnt) {
  console.log("closeAllSelect fired");
  /* A function that will close all select boxes in the document,
    except the current select box: */
  let i;
  const arrNo = []
  const x = document.getElementsByClassName('select-items')
  const y = document.getElementsByClassName('select-selected')
  const xl = x.length
  const yl = y.length
  for (i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide')
    }
  }
} // END closeAllSelect
/* If the user clicks anywhere outside the select box close all select boxes: */
document.addEventListener('click', closeAllSelect)
// TIME TO PRAY
function pray () {
  console.log("pray fired");
  // increment counter
  let visitCount = localStorage.getItem('page_view')
  visitCount = Number(visitCount) + 1
  localStorage.setItem('page_view', visitCount)
  // end counter
  document.getElementById('background').play()
  const setupElement = document.getElementById('Setup')
  const durationElement = document.getElementById('Duration')
  const templateElement = document.getElementById('Template')
  setupElement.style.display = 'none'
  const totTime = durationElement.value
  const curTemplate = templateElement.value
  const checkboxes = document.querySelectorAll('input[name="topic"]:checked')
  const topics = []
  checkboxes.forEach(function (checkbox) {
    topics.push(checkbox.value)
  })
  localStorage.setItem('selected_time', totTime)
  localStorage.setItem('selected_template', curTemplate)
  console.log('setting selected_time to '+totTime+" and selectedTemplate to "+curTemplate)

  const numTopics = checkboxes.length - 1 // subtract one for the "Done" prompt
  let topTime = totTime / numTopics
  // FOLLOWING LINE IS FOR DIAGNOSTIC PURPOSES
  // document.getElementById("prayerSummary").innerHTML = "Total Time: "+totTime+" Minutes"+"</br>"+"Topics to Pray: "+topics+"</br>"+"Number of Topics: "+numTopics+"</br>"+"Time per Topic: "+topTime+" Minutes";
  // START DISPLAYING PROMPTS
  topTime = topTime * 60000 // convert to milliseconds
  console.log('Total Time: ' + totTime + ' Minutes\nTopics to Pray: ' + topics + '\nNumber of Topics: ' + numTopics + '\nTime per Topic: ' + topTime / 1000 + ' Seconds')
  let i = 0 // the index of the current item to show
  const prayerElement = document.getElementById('prayer')
  prayerElement.style.display = 'flex'
  var psalmNumber = Math.floor(Math.random() * 150)
  const psalmLink1 = "<a href='https://my.bible.com/bible/1713/PSA." + psalmNumber + ".ESV' target='_blank' class='button buttonSmall'>open random Psalm</a> &nbsp; &nbsp; <a href='https://randombibleizer.spiffy.tech' target='_blank' class='button buttonSmall'>open Random Bibleizer</a>"
  var psalmNumber = Math.floor(Math.random() * 150)
  const psalmLink2 = "<a href='https://my.bible.com/bible/1713/PSA." + psalmNumber + ".ESV' target='_blank' class='button buttonSmall'>open random Psalm</a> &nbsp; &nbsp; <a href='https://randombibleizer.spiffy.tech' target='_blank' class='button buttonSmall'>open Random Bibleizer</a>"
//  function listenForActionAudio (action) {
//    try {
//      const objWaitAudio = document.getElementById(action + '-audio')
//      objWaitAudio.addEventListener('load', function () {
//        const soundElement = document.getElementById(action + 'audio')
//        soundElement.play()
//      })
//      console.log('The ' + action + 'action added the event listner.')
//      return true
//    } catch (_a) {
//      console.log('The event listener failed for ' + action)
//      return false
//    }
//  }
  function playActionAudio (action, ms) {
    console.log("playActionAudio fired");
    if (ms === undefined) { ms = 0 }
    const soundElement = document.getElementById(action + '-audio')
    console.log('Fired playActionAudio for ' + action)
    try {
      setTimeout(function () {
        soundElement.play()
        console.log('Played ' + action + '-audio.')
      }, ms)
    } catch (_a) {
      console.log(action + ' audio failed to play.')
    }
  }
  (function displayFunction () {
    console.log("displayFunction fired");
    const mediaLinkElement = document.getElementById('mediaLink')
    const prayerTitleElement = document.getElementById('prayerTitle')
    const prayerPromptElement = document.getElementById('prayerPrompt')
    playActionAudio('ding')
    mediaLinkElement.innerHTML = ''
    const topicPrompt = topicPrompts.filter(function (prompt) { return prompt.name === topics[i] })[0].prompt
    /*
         * This switch sets up whichever action this is. The playActionAudio function uses the first part
         * of the audio ID (from the HTML file) and a number of milliseconds to delay after the ding starts.
         * Each new prayer action created for any of the arrays needs an entry here. But if an item like "Wait"
         * exists in multiple arrays, it only needs to be listed here once.
         */
    switch (topics[i]) {
      case 'Adoration':
        playActionAudio('adoration', 2500)
        break
      case 'Ask':
        playActionAudio('ask', 2500)
        break
      case 'As We Forgive':
        playActionAudio('as we forgive', 2500)
        break
      case 'Confess':
        playActionAudio('confess', 2500)
		mediaLinkElement.innerHTML = '<a href="./confess.html" target="_blank" class="button buttonSmall">Open Self Examination Questions</a>';
        break
      case 'Confession':
        playActionAudio('confession', 2500)
		mediaLinkElement.innerHTML = '<a href="./confess.html" target="_blank" class="button buttonSmall">Open Self Examination Questions</a>';
        break
      case 'Daily Bread':
        playActionAudio('dailybread', 2500)
        break
      case 'Deliver Us':
        playActionAudio('deliverus', 2500)
        break
      case 'Done':
        playActionAudio('done', 2500)
        break
      case 'Family':
        playActionAudio('family', 2500)
        break
      case 'Forgive Us':
        playActionAudio('forgiveus', 2500)
        break
      case 'Guard':
        playActionAudio('guard', 2500)
        break
      case 'Healing':
        playActionAudio('healing', 2500)
        break
      case 'Increase':
        playActionAudio('increase', 2500)
        break
      case 'Insightful Confession':
        playActionAudio('insightfulconfession', 2500)
		mediaLinkElement.innerHTML = '<a href="./confess.html" target="_blank" class="button buttonSmall">Open Self Examination Questions</a>';
        break
      case 'Intercession':
        playActionAudio('intercession', 2500)
        break
      case 'Listen':
        playActionAudio('listen', 2500)
        break
      case 'Love':
        playActionAudio('love', 2500)
        break
      case 'Meditate':
        playActionAudio('meditate', 2500)
        break
      case 'Movement':
        playActionAudio('movement', 2500)
        break
      case 'Notice':
        playActionAudio('notice', 2500)
        break
      case 'Others':
        playActionAudio('others', 2500)
        break
      case 'Our Father':
        playActionAudio('ourfather', 2500)
        break
      case 'Power':
        playActionAudio('power', 2500)
        break
      case 'Praise':
        playActionAudio('praise', 2500)
		mediaLinkElement.innerHTML = '<a href="./praise.html" target="_blank" class="button buttonSmall">Open Attributes of God</a>';
		break
      case 'Praise Again':
        playActionAudio('praise', 2500)
		mediaLinkElement.innerHTML = '<a href="./praise.html" target="_blank" class="button buttonSmall">Open Attributes of God</a>';
        break
      case 'Pray the Word':
        playActionAudio('praytheword', 2500)
        mediaLinkElement.innerHTML = psalmLink1
        break
      case 'Protection':
        playActionAudio('protection', 2500)
        break
      case 'Provision':
        playActionAudio('provision', 2500)
        break
      case 'Read the Word':
        playActionAudio('readtheword', 2500)
        mediaLinkElement.innerHTML = psalmLink2
        break
      case 'Sentimental Time':
        playActionAudio('sentimentaltime', 2500)
        break
      case 'Sing':
        playActionAudio('sing', 2500)
        mediaLinkElement.innerHTML = '<a href="https://www.youtube.com/results?search_query=christian+worship" target="_blank" class="button buttonSmall">Open YouTube</a> &nbsp; &nbsp; <a href="https://music.youtube.com/search?q=genre%3Aworship" target="_blank" class="button buttonSmall">Open YouTube Music</a> &nbsp; &nbsp; <a href="https://open.spotify.com/search/genre%3Aworship/tracks" target="_blank" class="button buttonSmall">Open Spotify</a> &nbsp; &nbsp; <a href="https://music.apple.com/us/station/praise-and-worship-station/ra.1129207194" target="_blank" class="button buttonSmall">Open Apple Music</a>'
        break
      case 'Sins of the flesh':
        playActionAudio('sinsoftheflesh', 2500)
        break
      case 'Submission':
        playActionAudio('submission', 2500)
        break
      case 'Thank':
        playActionAudio('thank', 2500)
        break
      case 'Thanksgiving':
        playActionAudio('thanksgiving', 2500)
        break
      case 'Unreached':
        playActionAudio('unreached', 2500)
        break
      case 'Wait':
        playActionAudio('wait', 2500)
        break
      case 'Your Kingdom Come':
        playActionAudio('yourkingdomcome', 2500)
        break
    }
    ;
    prayerTitleElement.innerHTML = topics[i++]
    prayerPromptElement.innerHTML = topicPrompt
    if (i === topics.length) {
      return
    } else {
      const element = document.getElementById('myBar')
      element.style = ''
      setTimeout(() => element.style = 'transition-duration: ' + ((topTime - 100) / 1000) + 's;width: 100%;', 100)
    }
    ;
    window.setTimeout(displayFunction, topTime)
  })()
}
