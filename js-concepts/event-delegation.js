{/* <ul id="category">
<li id="laptop">laptop</li>
<li id="camera">camera</li>
<li id="shoes">shoes</li>
</ul>

document.querySelector('#category').addEventListener(
    'click', (e) => {
      if(e.target.tagName == 'LI') {
        console.log('e.target.id',e.target.id);
        window.location.href = "/" + e.target.id;
      }
    }
); */}

<div>
    <ul id="form">
     <input type="text" id="name" data-uppercase/>
     <input type="text" id="pan"/>
     <input type="text" id="mobile"/>
    </ul>
  </div>

document.querySelector('#form').addEventListener(
    'keyup', (e) => {
       if(e.target.dataset.uppercase != undefined) {
         e.target.value = e.target.value.toUpperCase();
       }
      }
    );