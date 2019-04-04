let quest = {}, answers, choices, correctAnswers = [],examQuestions, headline, clicks, examAnswers, examAnswer2, examAnswer3, allanswers = [],header;

quest.first = ['what floor do you evacuate to if there is a fire on the 5th floor?','1','2','3','B'];
quest.sec = ['hotels should have an Fire Safety Director for how many hours out of the day?','12','8','24','C'];
quest.third = ['In the hotel Where is the floor diagram located?','In my room','Behind the bar','the main entrance','A'];
quest.fourth = ['What questions should you ask the Front Desk agent when checking in?', 'What are the rates for tonight?', 'Where are the emergency exits?', 'Both','B']
quest.five = ['When should you pull the fire alarm?', 'When there is a fire', 'When I feel like it', 'When I dont want to pay for my room','A']
quest.six = ['What is considered the wet staircase?', 'The stairwell that just finished being cleaned/Mopped', 'The stairwell with the dry firehose', 'The Stairwell with easy access','B']
quest.seven = ['when can you use the elevator in a fire emergency?', 'If there is alot of people', 'Never', 'After 12am','B']
quest.eight = ['Which kind of property uses a building evacuation supervisor, a hotel or a office building?', 'Hotel', 'Building', 'Both','B'];

headline = document.getElementById('headline');
answers = document.getElementById('answers')

  for(let key in quest){
    examQuestions = document.createElement('h1');
    examAnswers = document.createElement('p')
    examAnswer2 = document.createElement('p')
    examAnswer3 = document.createElement('p')
    headline.appendChild(examQuestions).appendChild(document.createTextNode(quest[key][0]));
    examAnswers.appendChild(document.createTextNode(` A) ${quest[key][1]} `))
    examAnswer2.appendChild(document.createTextNode(` B) ${quest[key][2]} `))
    examAnswer3.appendChild(document.createTextNode(` C) ${quest[key][3]} `))
    headline.appendChild(examAnswers);
    headline.appendChild(examAnswer2);
    headline.appendChild(examAnswer3);

    allanswers.push(examAnswers);
    console.log(examAnswers.textContent[1]);

    examAnswers.addEventListener('click',(e)=>{
      console.log(e.target);
      if(e.target.textContent[1] !== quest[key][4]){
        e.target.innerHTML = ` ${examAnswers.textContent[1]} )<b>${quest[key][1]}</b> is the wrong answer <img src="https://png.icons8.com/color/50/000000/cancel.png">`;
      }else{
        console.log('correct')
        e.target.innerHTML = ` ${examAnswers.textContent[1]} )<b>${quest[key][1]}</b> Is the correct answer <img src="https://img.icons8.com/color/48/000000/checkmark.png">`;
      }
    })
    examAnswer2.addEventListener('click',(e)=>{
      console.log(e.target.textContent[1], quest[key][0])
      if(e.target.textContent[1] !== quest[key][4]){
        console.log('that answer is wrong')
        e.target.innerHTML = ` ${examAnswer2.textContent[1]} )<b>${quest[key][2]}</b> is the wrong answer <img src="https://png.icons8.com/color/50/000000/cancel.png">`;
      }else{
        console.log('correct');
        e.target.innerHTML = ` ${examAnswer2.textContent[1]} )<b>${quest[key][2]}</b> is the correct answer <img src="https://img.icons8.com/color/48/000000/checkmark.png">`;
      }
    })
    examAnswer3.addEventListener('click',(e)=>{
      console.log(e.target.textContent[1], quest[key][0])
      if(e.target.textContent[1] !== quest[key][4]){
        console.log('that answer is wrong')
        e.target.innerHTML = ` ${examAnswer3.textContent[1]} )<b>${quest[key][3]}</b> is the wrong answer<img src="https://png.icons8.com/color/50/000000/cancel.png">`;
      }else{
        console.log('correct');
        e.target.innerHTML = ` ${examAnswer3.textContent[1]} )<b>${quest[key][3]}</b> is the correct answer<img src="https://img.icons8.com/color/48/000000/checkmark.png">`;

      }
    })
  }
