// declare arrays that will hold lists of student data
let students = [],nameArr = [], emailArr = [], avatarArr = [], dateArr = [];
// get the student data by selecting the elements that hold the data 
let names = document.querySelectorAll('h3'), dates = document.querySelectorAll('span.date'), emails = document.querySelectorAll('span.email'), avatars = document.querySelectorAll('img.avatar');
// run a for loop to push all of the student data into a single JSON object array
for (i=0; i<names.length; i++) {
	dateArr.push(dates[i].innerHTML);
	nameArr.push(names[i].innerHTML); 
	emailArr.push(emails[i].innerHTML);
	avatarArr.push(avatars[i].src);
    students.push(
    	{
    		"name" : nameArr[i], 
    		"email" : emailArr[i], 
    		"avatar" : avatarArr[i], 
    		"joinDate" : dateArr[i]
    	});
}
// function to alphabetize the student names, credit to Matti Virkkunen, https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}
// set the students array to the alphabetized function
students = students.sort(function(a, b) {
  return compareStrings(a.name, b.name);
})

let deciStudents = Math.ceil((students.length)/10); // create a variable that sets the math ceiling on the number of page links that will be created
const pageDiv = document.querySelector('div.page'); // select the page class div
pageDiv.innerHTML = ""; // reset all of the html between the page class div
const pageHead = document.createElement('div'); //create a div
pageHead.className = 'page-header cf'; // give div the page-header class
const studentH2 = document.createElement('h2'); // create an h2 element
studentH2.textContent = "Students"; // add text to h2
const studentList = document.createElement('ul'); // create a ul
studentList.className = "student-list"; // give ul class student-list
pageDiv.appendChild(pageHead); // append the page head to the page div
pageHead.appendChild(studentH2); // append the h2 tag to the page head
pageDiv.appendChild(studentList); // append the student-list ul to the page div
const paginationDiv = document.createElement('div'); // create a new div
paginationDiv.className = 'pagination'; // give it the class pagination
const li = document.createElement('li'); // create a li
const a = document.createElement('a'); // create an a
const ul = document.createElement('ul'); // create a new ul
pageDiv.appendChild(paginationDiv); // append the pagination div to the page div
paginationDiv.appendChild(ul); //append the ul to the pagination div
// declare a function that appends all components of a student li item
const appendStudentItem = () => {
	const studentLi = document.createElement('li');
	studentLi.className = 'student-item cf';
	const listDiv = document.createElement('div');
	listDiv.className = 'student-details';
	const studentAvatar = document.createElement('img');
	studentAvatar.className = 'avatar';
	const studentName = document.createElement('h3');
	const studentEmail = document.createElement('span');
	studentEmail.className = 'email';
	const joinedDetails = document.createElement('div');
	joinedDetails.className = 'joined-details';
	const dateSpan = document.createElement('span');
	dateSpan.className = 'date';
	studentAvatar.src = students[z].avatar;
	studentName.innerHTML = students[z].name;
	studentEmail.innerHTML =  students[z].email;
	dateSpan.innerHTML = students[z].joinDate;
	studentList.appendChild(studentLi);
	studentLi.appendChild(listDiv);
	studentLi.appendChild(joinedDetails).appendChild(dateSpan);
	listDiv.appendChild(studentAvatar);
	listDiv.appendChild(studentName);
	listDiv.appendChild(studentEmail);
}
// a for loop that appends the student li items based on length of the student data array
for (z=0; z<students.length; z++) {
	appendStudentItem();
}
// create a for loop that adds page numbers dynamically to the bottom of the page
// The loop runs as many times as the value of the calculated deciStudents variable and adds links with those values as text
for (i = 1; i<=deciStudents; i++) {
	const li = document.createElement('li');
	const a = document.createElement('a');
	a.textContent = i;
	ul.appendChild(li).appendChild(a);
}
// place all page links in an array
const allAs = document.getElementsByTagName('a');
allAs[0].className = "active"; // make the first page link 'active' by default
// Set the default number of li student items to display when the page loads
if (document.querySelector('a.active').textContent == '1') {
	for (let i=0; i<students.length; i++) {
		if (i > (((document.querySelector('a.active').textContent)*10)-1)) {
			document.querySelector('ul.student-list').children[i].style.display = 'none';
		} else {
			document.querySelector('ul.student-list').children[i].style.display = 'block';
		}
	}	
}
//Create a for loop that checks if the pages were clicked, remove active class from all As and add to clicked a
for (let q=0; q<allAs.length; q++) {
	allAs[q].addEventListener('click', () => {
		document.querySelector('a.active').classList.remove("active");
		allAs[q].classList.add("active");
			for (let i=0; i<students.length; i++) {
				// math function to determine which li items to display based on the page number selected
				if (i > (((document.querySelector('a.active').textContent)*10)-1) || i < (((document.querySelector('a.active').textContent)*10)-10)) {
					document.querySelector('ul.student-list').children[i].style.display = 'none';
				} else {
					document.querySelector('ul.student-list').children[i].style.display = 'block';
				}
			}	
	});	
}

// SEARCH BUTTON FUNCTIONALITY // Save it for later

/*
//on click of search button
searchButton.addEventListener('click', () => {
	// get input value
	let searchTerm = searchInput.value;
	console.log(searchTerm);
	//clear the input
	searchInput.value = "";
	let studentString = JSON.stringify(students);
	console.log($.inArray(searchTerm, studentString));
})
//get the value that is in the input box
//test this value against the iteration of the students array
//display any thing that matches the input and hide everything else
*/

/* CODE FOR THE SEARCH BAR
const pageHeader = document.querySelector('div.page-header');
const search = document.createElement('div');
search.className = "student-search";
const searchInput = document.createElement('input');
searchInput.placeholder = "search for students..."
const searchButton = document.createElement('button');
searchButton.textContent = "Search";
search.appendChild(searchInput);
search.appendChild(searchButton);

//placeholder search for students

pageHeader.append(search);

*/