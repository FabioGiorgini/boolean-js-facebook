//1° PUNTO
//Inserire nome utente e immagine da user

//2° PUNTO
//Rendere dinamica la lista dei post

//3° PUNTO
//Fare in modo che la data del post venga inserita da funzione con davanti la scritta "Data del post: "

//4° PUNTO
//Aggiungere nuovo post personale in fondo alla lista

//5° PUNTO
//Nascondere post tramite bottone (eye-slash)

const user = {
    name: 'Luca',
    surname: 'Rossi',
    avatar: 'https://3.bp.blogspot.com/-fDaYbjlbfls/XFXcYDcNFmI/AAAAAAABv4g/wIylZ5bp74IOD48MAKsdQoidvA4KrrBHgCLcBGAs/s320/animoji-zepeto.webp'
};
const posts = [
    {
      author: 'Luca Bianchi',
      avatar: 'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
      visible: true,
      desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      image: 'https://uploads.nonsprecare.it/wp-content/uploads/2013/04/Bosco-1.jpg',
      date: '20/11/2020 10:30:32'
    },
    {
      author: 'Mario Verdi',
      avatar: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
      visible: true,
      desc: 'Such a good day! Hello World',
      image: 'https://www.trovafrasi.com/wp-content/uploads/2020/04/frasi-sul-cielo-stellato.jpg',
      date: '20/11/2020 11:15:24'
    },{
      author: 'Asia Mattei',
      avatar: 'https://st3.depositphotos.com/3369547/12852/v/950/depositphotos_128525738-stock-illustration-woman-female-avatar-isolated.jpg',
      visible: true,
      desc: 'Another post for today',
      image: 'https://www.abruzzomagazine.it/wp-content/uploads/2020/02/Foto-3-Boolean-Careers.jpg',
      date: '19/11/2020 22:28:55'
    },
  ];

//3° PUNTO
//Fare in modo che la data del post venga inserita da funzione con davanti la scritta "Data del post: "
function formattaData(date){
  return 'La data del post è ' + date;
}

//4° PUNTO
//Aggiungere nuovo post personale in fondo alla lista
function aggiungiPost(){
  const post = document.getElementById('inputPost').value;
  //IN FONDO ALLA LISTA
  // posts.push({
  //   author: user.name + " " + user.surname,
  //   avatar: user.avatar,
  //   visible: true,
  //   desc: post,
  //   image: 'https://www.abruzzomagazine.it/wp-content/uploads/2020/02/Foto-3-Boolean-Careers.jpg',
  //   date: dayjs().format("DD/MM/YYYY HH:mm:ss")
  // });
  //IN CIMA ALLA LISTA
  posts.unshift({
    author: user.name + " " + user.surname,
    avatar: user.avatar,
    visible: true,
    desc: post,
    image: 'https://www.abruzzomagazine.it/wp-content/uploads/2020/02/Foto-3-Boolean-Careers.jpg',
    date: dayjs().format("DD/MM/YYYY HH:mm:ss")
  });
  document.getElementById("inputPost").value="";
  loadPosts();
}

//5° PUNTO
//Nascondere post tramite bottone (eye-slash)
function nascondiPost(i){
  document.getElementById("post_"+i+"").classList.add("not-displayable");
}

//FUNZIONE PER 2 e 4° PUNTO
function loadPosts(){
  document.getElementById("postsList").innerHTML = '';
  posts.forEach((post, i) => {
    document.getElementById("postsList").innerHTML +=
    `<div class="card post" id="post_${i}">
      <div class="card-body">
        <div class="card-title">
          <div class="imgCnt"><img src="${post.avatar}"></div>
          <div class="col-md-10">
	          <h1>${post.author}</h1>
	          <p>${formattaData(post.date)}<i style="margin-left:5px;" class="fas fa-globe-asia"></i></p>
          </div>
          <div class="col-md-1"><i onclick="nascondiPost(${i})" class="fas fa-eye-slash"></i></div>
        </div>
        <p class="card-text">${post.desc}</p>
      </div>
      <div class="post-image"><img src="${post.image}" class="card-img-top"></div>
      <div class="card-footer">
        <div class="reactions flex-item">
          <div class="emoji flex-item">
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e">
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e">
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e">
            <span style="margin-left:10px;">50</span>
          </div>
          <div>Commenti: 1</div>
        </div>
        <div class="actions flex-item">
          <div>
            <i class="far fa-thumbs-up"></i>
            <span>Mi piace</span>
          </div>
          <div>
            <i class="far fa-comment"></i>
            <span>Commenta</span>
          </div>
          <div>
            <i class="fas fa-share"></i>
            <span>Condividi</span>
          </div>
        </div>
      </div>
    </div>`;

  });
}


window.addEventListener('load', function () {
  //1° PUNTO
  //Inserire nome utente e immagine da user
  document.getElementById("headerUserImg").setAttribute("src", user.avatar);
  document.getElementById("headerUserName").innerHTML = user.name;
  document.getElementById("sidebarUserImg").setAttribute("src", user.avatar);
  document.getElementById("sidebarUserName").innerHTML = user.name + " " + user.surname;

  //2° PUNTO
  //Rendere dinamica la lista dei post
  loadPosts();

});
