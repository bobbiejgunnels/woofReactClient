import React from 'react';

function Home() {
  return (
  	<div className="Whole">
  		<body>
  			<div className="parallax">
  			<h2 className="title">Woof</h2>
  		<header class ="Page">
  		

  		<img className="img" src="https://previews.123rf.com/images/argus456/argus4560812/argus456081200699/4048639-grunge-paw-print-on-a-white-background.jpg"/>
  		</header>
  		</div>
      
      <h4 className="homeinfo">A Single Page React App that consumes my .NET WEBcore API. Allows users to suggest new breeds for the database, and search for breeds.</h4>
  		
      <div className="parallax2">

  		<div className= "infocontainer">
        <h1> Bobbie Gunnels</h1>
          <h2>Bobbiejgunnels@gmail.com</h2>
            <h3>256.689.0111</h3>
            </div>
<div className= "featuredinfosection">
                <div class="col-sm-4">

         <img src="https://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23004_afghan-hound-300x189.jpg" />
             <h2 class="feature content-title">Afghan Hound</h2>
                <p class="content-description">The Afghan Hound is an aloof and dignified aristocrat of sublime beauty. Despite his regal appearance, he is known for his profound loyalty, sensitive nature, and absolute love for those he calls his own.</p>
    </div>

    <div class="col-sm-4">

         <img class="featuredinfo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-h_4tSDln12vIN38d-CHKi0pbphgZgpu1-w&usqp=CAU" />
           <h2 class="feature content-title">Basenji</h2>
              <p class="content-description">The Basenji, Africa’s “Barkless Dog,” is a compact, sweet-faced hunter of intelligence and poise. They are unique and beguiling pets, best for owners who can meet their exercise needs and the challenge of training this catlike canine.</p>
    </div>

    
   <div class="col-sm-4">

         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDmfF2Q1EnoExOCKBjhV4UxFqKq-RfXTrnxA&usqp=CAU" />
            <h2 class="feature content-title">Samyoed</h2>
                <p class="content-description">The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold—Sammies are perfectly beautiful but highly functional.</p>
    </div>
    </div>
      <div className="parallax">
      </div>
  		</div>

  			</body>

  			<footer class="text-muted footer">
          <div class="container footertext">
              &copy; 2020 - Woof  
          </div>
         </footer>
  	</div>
  )
}

export default Home;