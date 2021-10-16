document.addEventListener('DOMContentLoaded', () => {
  const speakerObj = [
    {
      name: 'David Attenborough',
      img: './images/David.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
    {
      name: 'Vanessa Nakate',
      img: './images/Vanessa.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
    {
      name: 'Disha Ravi',
      img: './images/disha.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
    {
      name: 'Boyan Slat',
      img: './images/Boyan.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
    {
      name: 'Greta Thunberg',
      img: './images/greta.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
    {
      name: 'Luisa Neubauer',
      img: './images/luisa.jpg',
      job: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
      desc: ' Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.',
    },
  ];
  const contSpeaker = document.createElement('div');
  contSpeaker.className = 'speakers-cont';

  const speakerSection = document.querySelector('.guest');
  speakerSection.appendChild(contSpeaker);
  for (let i = 0; i < speakerObj.length; i += 1) {
    const singleSpeakerCont = document.createElement('div');
    singleSpeakerCont.className = 'speaker-cont';
    const contImageSpeak = document.createElement('div');
    contImageSpeak.className = 'img-cont';
    const contSpeakerInfo = document.createElement('div');
    contSpeakerInfo.className = 'info-cont';
    const backImg = document.createElement('div');
    backImg.className = 'img-bck';
    const speakerImg = document.createElement('img');

    speakerImg.className = 'img-speaker';
    speakerImg.setAttribute('alt', `${speakerObj[i].name}`);
    speakerImg.setAttribute('src', `${speakerObj[i].img}`);
    const nameSpeaker = document.createElement('h1');
    nameSpeaker.className = 'name-speaker';
    nameSpeaker.textContent = `${speakerObj[i].name}`;
    const jobSpeaker = document.createElement('h5');
    jobSpeaker.className = 'job-speaker';
    jobSpeaker.textContent = `${speakerObj[i].job}`;
    const infoSpeaker = document.createElement('p');
    infoSpeaker.className = 'info-speaker';
    infoSpeaker.textContent = `${speakerObj[i].desc}`;

    const contSpeaker = document.querySelector('.speakers-cont');

    contSpeaker.appendChild(singleSpeakerCont);
    singleSpeakerCont.appendChild(contImageSpeak);
    singleSpeakerCont.appendChild(contSpeakerInfo);
    contImageSpeak.appendChild(backImg);
    contImageSpeak.appendChild(speakerImg);
    contSpeakerInfo.appendChild(nameSpeaker);
    contSpeakerInfo.appendChild(jobSpeaker);
    contSpeakerInfo.appendChild(infoSpeaker);
  }
});
