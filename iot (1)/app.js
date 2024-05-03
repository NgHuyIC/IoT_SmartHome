const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// dong ho
function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
  
	const clock = document.querySelector('.clock');
	clock.innerHTML = `
	  <div class="hours">${hours}</div>
	  <div>:</div>
	  <div class="minutes">${minutes}</div>
	  <div>:</div>
	  <div class="seconds">${seconds}</div>
	`;
  }

  
  setInterval(updateClock, 1000);
  /// show 
  function showLivingRoom() {
	document.getElementById("livingRoom").style.display = "block";
  }
  
  function showLivingRoom() {
  
    window.location.href = 'livingroom1.html';
}
function showBedRoom() {
	document.getElementById("bedroom").style.display = "block";
  }
  
  function showBedRoom() {
  
    window.location.href = 'bedroom1.html';
}

function showkitchen() {
	document.getElementById("Kitchen").style.display = "block";
  }
  
  function showkitchen() {
  
    window.location.href = 'kitchen1.html'; 
}

function showStudyRoom() {
	document.getElementById("studyroom").style.display = "block";
  }
  
  function showStudyRoom() {
  
    window.location.href = 'studyroom1.html';
}
  // Tương tự, bạn có thể tạo các hàm showBedRoom(), showDiningRoom(), showKitchen(), và showStudyRoom() cho các trang khác.
  function logout() {
	window.location.href='index.html';
  }

  
  
  
  