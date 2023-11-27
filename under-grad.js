// function dropDownButton(id){
//   document.getElementById(`${id}`).classList.toggle("drop");
// }


// function dropDownButton(id) {
//   var level = document.getElementById(id);
//   var allLevels = document.querySelectorAll('.level-courses');

//   // Hide all other levels
//   allLevels.forEach(function (item) {
//     if (item !== level) {
//       item.classList.remove('drop');
//     }
//   });

//   // Toggle the class for the selected level
//   level.classList.toggle('drop');
// }
// function dropDownButton(id) {
//   var level = document.getElementById(id);
//   var allLevels = document.querySelectorAll('.level-courses');

//   // Hide all levels
//   allLevels.forEach(function (item) {
//     item.classList.remove('drop');
//   });

//   // Display the selected level
//   level.classList.toggle('drop');
// }
// function dropDownButton(id) {
//   var level = document.getElementById(id);
//   var allLevels = document.querySelectorAll('.level-courses');

//   // Hide all levels
//   allLevels.forEach(function (item) {
//     item.classList.remove('drop');
//   });

//   // Display the selected level
//   level.classList.add('drop');
// }
function dropDownButton(id) {
  var level = document.getElementById(id);
  var allLevels = document.querySelectorAll('.level-courses');

  // Hide all levels
  allLevels.forEach(function (item) {
    item.style.display = 'none';
  });

  // Display the selected level
  level.style.display = 'block';
}



