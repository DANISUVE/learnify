//Global varaibles for easy management
var currentInput;
var crosswordArray;

//Shows the constructed crossword
function showCrossword(){
	var htmlCrossword = document.getElementById("crossword");
	crosswordArray = generateCrossword();
	for (var i=0; i<crosswordArray.length; i++) {
		//-1 as parameter to add it at the end
		var row = htmlCrossword.insertRow(-1);
		var rowWord = crosswordArray[i];
		for (var j=0 ; j<rowWord.length; j++){
			var cell = row.insertCell(-1);
			if(rowWord[j] != 0){
                var cellId = String('id' + '_' + i + '_' + j);
                //Here we let the cells allow input text
                cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' 
                                    + 'id="' + cellId + '" onfocus="saveInput(' + "'" + cellId + "'"+ ')">';
			}
			else
				cell.style.backgroundColor = "transparent";
		}
	}
	startNumbers();
}

//Here we stores the id of the selected cell
function saveInput(cellId){
	currentInput = cellId;
}

//Here we stablish where does the words start
function startNumbers(){
	document.getElementById("id_0_6").placeholder = "1";
	document.getElementById("id_1_6").placeholder = "2";
    document.getElementById("id_1_3").placeholder = "3";
    document.getElementById("id_3_2").placeholder = "4";
    document.getElementById("id_6_1").placeholder = "5,6";
    document.getElementById("id_8_5").placeholder = "7";
    document.getElementById("id_8_0").placeholder = "8";
    document.getElementById("id_12_2").placeholder = "9,10";
    document.getElementById("id_14_1").placeholder = "10";
}

//Here we generate the crossword as a grid
function generateCrossword(){
var items = [
                [0,    0,   0,   0,    0,   0,   'o',   0,   0],
                [0,    0,   0,  'p',   0,   0,   'r',  'e', 'd'],
                [0,    0,   0,  'u',   0,   0,   'a',   0,   0],
                [0,    0,  'b', 'r',  'o', 'w',  'n',   0,   0],
                [0,    0,   0,  'p',   0,   0,   'g',   0,   0],
                [0,    0,   0,  'l',   0,   0,   'e',   0,   0],
                [0,   'g', 'r', 'e',  'y',  0,    0,    0,   0],
                [0,   'r',  0,   0,    0,   0,    0,   0,   0],
                ['y', 'e', 'l', 'l',  'o', 'w',   0,   0,   0],
                [0,   'e',  0,   0,    0,  'h',   0,   0,   0],
                [0,   'n',  0,   0,    0,  'i',   0,   0,   0],
                [0,   0,   0,   0,   0,    't',   0,   0,   0],
                [0,   0,  'b',  'l',  'u',    'e',  0, 0, 0],
                [0,   0,  'l',   0,   0,   0, 0, 0, 0],
                [0,   0,  'a',   0,  0,   0, 0, 0, 0],
                [0,   0,  'c',   0,   0,   0, 0, 0, 0],
                [0,   0,  'k',   0,   0,   0, 0, 0, 0]
			];
	return items;
}

//Here we reset all the crossword
function clearCrossword(){
	//Reset to empty
	currentInput = '';
	var htmlCrossword = document.getElementById("crossword");
	htmlCrossword.innerHTML = '';
    showCrossword();
}

//Here we check if the words written are correct
function check(){
	for (var i=0; i<crosswordArray.length; i++) {
		var rowWord = crosswordArray[i];
		for(var j=0; j<rowWord.length; j++){
			if(rowWord[j] != 0){
				var cell = document.getElementById('id' + '_' + i + '_' + j);
				if(cell.value.toLowerCase() != crosswordArray[i][j])
					cell.style.backgroundColor = 'red';
				else
					cell.style.backgroundColor = 'limegreen';
			}
		}
	}
}