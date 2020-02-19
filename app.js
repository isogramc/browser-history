$(function() {
    $( ".content" ).html( "<p>Select a ghostbuster to find out more about them</p>" );

    var container = document.querySelector('.gallery'),
    imgs = document.querySelectorAll('img'),
    textWrapper = document.querySelector('.highlight'),
    content = document.querySelector('.content');

function updateText(content){
  textWrapper.innerHTML = content;
}

function requestContent(file){

  console.log(file);

  var str1 = "<p>Peter Venkman, Ph.D., is a fictional character from the Ghostbusters franchise. He appears in the films Ghostbusters, Ghostbusters II and Ghostbusters: Afterlife and in the animated television series The Real Ghostbusters. In both live action films, he was portrayed by Bill Murray, and was voiced in the animated series first by Lorenzo Music and then by Dave Coulier. He is a parapsychologist and the leader of the Ghostbusters.</p>"; 
  var str2 = "<p>Ray is an expert on paranormal history and metallurgy. He is characterized by his almost childlike enthusiasm towards his work, and his forthright acceptance of paranormal activity. As a result, Peter once during the movie referred to him as \"the heart of the Ghostbusters\". Ray has extensive knowledge of the Bible (to the point of even quoting a specific book and chapter – \"I remember Revelation 7:12\"—about the end of the world, though the passage he quotes is actually Revelation 6:12), but is an agnostic, commenting when asked if he believes in God, \"Never met Him\". As revealed in Ghostbusters: The Video Game, Ray attended a seminary at some stage in his life. He is known for his wordy and overly technical explanations of scientific and paranormal phenomena. Ray, along with Egon, is responsible for pioneering the Ghostbusters' theories and designing and building the equipment used for catching and containing ghosts.</p>";
  var str3 = "<p>Egon Spengler, PhD is a fictional character from the Ghostbusters franchise. He appears in the films Ghostbusters and Ghostbusters II, in the animated television series The Real Ghostbusters and Extreme Ghostbusters, in the video games Ghostbusters: The Video Game and Beeline's Ghostbusters. Spengler was portrayed by Harold Ramis in the films and voiced by him in Ghostbusters: The Video Game and Lego Dimensions, and voiced by Maurice LaMarche in the cartoon series. He is a member of the Ghostbusters and one of the three doctors of parapsychology, along with Dr. Peter Venkman and Dr. Ray Stantz.</p>"; 
  var str4 = "<p>Winston Zeddemore is a fictional character appearing in the Ghostbusters films, TV series, and video games.[1] He was played by Ernie Hudson in both movies and was voiced by Arsenio Hall in the first two seasons of The Real Ghostbusters. Buster Jones provided Winston's voice in the remaining seasons, and he reprised the role in a cameo on Extreme Ghostbusters. Hudson returned to provide his appearance and voice to Zeddemore in 2009's Ghostbusters: The Video Game.</p>";

  switch(file) {
    case "peter":
      $('.content').html(str1);
      break;
    case "ray":
      $('.content').html(str2);
      break; 
    case "egon":
      $('.content').html(str3);  
      break; 
    case "winston":
      $('.content').html(str4); 
      break;
    default: 
      $('.content').html("<p>Select a ghostbuster to find out more about them</p>");
      break;   
  }
  
}


function removeCurrentClass(){
  for(var i = 0; i < imgs.length; i++){
    imgs[i].classList.remove('current');
  }
}

function addCurrentClass(elem){
  removeCurrentClass();
  var element = document.querySelector("." + elem);
  element.classList.add('current');
}

container.addEventListener('click', function(e){
  if(e.target != e.currentTarget){
    e.preventDefault();
    var data = e.target.getAttribute('data-name');
    addCurrentClass(data);
    history.pushState({page: data}, data, "?page="+data);
    updateText(data);
    requestContent(data);
    document.title = "Ghostbuster | " + data;
  }
  e.stopPropagation();
}, false);

window.onpopstate = function(event) {

  //alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
  
    var data = event.state.page;

    addCurrentClass(data);
    updateText(data);
    requestContent(data);
    document.title = "Ghostbuster | " + data;

}
  });