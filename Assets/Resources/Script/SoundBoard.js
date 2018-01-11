#pragma strict
var sound1 : AudioClip;
var sound2 : AudioClip;
var sound3 : AudioClip;
var sound4 : AudioClip;
var sound5 : AudioClip;
var sound6 : AudioClip;
var sound7 : AudioClip;
var sound8 : AudioClip;
var sound9 : AudioClip;
var sound10 : AudioClip;  //Var name may vary >:)
var sound11 : AudioClip;
var sound12 : AudioClip;
var sound13 : AudioClip;
var sound14 : AudioClip;
var sound15 : AudioClip;
var sound16 : AudioClip;
var sound17 : AudioClip;
var sound18 : AudioClip;
var sound19 : AudioClip;
var sound20 : AudioClip;
var sound21 : AudioClip;

var tsound1 : UnityEngine.UI.Text;
var tsound2 : UnityEngine.UI.Text;
var tsound3 : UnityEngine.UI.Text;
var tsound4 : UnityEngine.UI.Text;
var tsound5 : UnityEngine.UI.Text;
var tsound6 : UnityEngine.UI.Text;
var tsound7 : UnityEngine.UI.Text;
var tsound8 : UnityEngine.UI.Text;
var tsound9 : UnityEngine.UI.Text;
var tsound10 : UnityEngine.UI.Text;  
var tsound11 : UnityEngine.UI.Text;
var tsound12 : UnityEngine.UI.Text;
var tsound13 : UnityEngine.UI.Text;
var tsound14 : UnityEngine.UI.Text;
var tsound15 : UnityEngine.UI.Text;
var tsound16 : UnityEngine.UI.Text;
var tsound17 : UnityEngine.UI.Text;
var tsound18 : UnityEngine.UI.Text;
var tsound19 : UnityEngine.UI.Text;
var tsound20 : UnityEngine.UI.Text;
var tsound21 : UnityEngine.UI.Text;

var right : String; //Bottom Buttons
var left : String;

var sounder : String;
var date : String;
var second : int;

var category : String; //trump category

var help : GameObject; //toggle thingy

function Start () {
	tsound1.text = sound1.name; 
	tsound2.text = sound2.name; 
	tsound3.text = sound3.name; 
	tsound4.text = sound4.name; 
	tsound5.text = sound5.name; 
	tsound6.text = sound6.name; 
	tsound7.text = sound7.name; 
	tsound8.text = sound8.name; 
	tsound9.text = sound9.name; 
	tsound10.text = sound10.name; 
	tsound11.text = sound11.name; 
	tsound12.text = sound12.name; 
	tsound13.text = sound13.name; 
	tsound14.text = sound14.name; 
	tsound15.text = sound15.name; 
	tsound16.text = sound16.name; 
	tsound17.text = sound17.name; 
	tsound18.text = sound18.name; 
	tsound19.text = sound19.name; 
	tsound20.text = sound20.name; 
	tsound21.text = sound21.name; 
	
	while (1 > 0) {
		yield WaitForSeconds (1);
		PlayerPrefs.SetInt("Time", PlayerPrefs.GetInt("Time") + 1);
	}
}

function Right() {
	Application.LoadLevel(right);
}

function Left() {
	Application.LoadLevel(left);
}

function sounds1() {
	GetComponent.<AudioSource>().PlayOneShot(sound1);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound1.name);
	Adder();
}

function sounds2() {
	GetComponent.<AudioSource>().PlayOneShot(sound2);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound2.name);
	Adder();
}

function sounds3() {
	GetComponent.<AudioSource>().PlayOneShot(sound3);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound3.name);
	Adder();
}

function sounds4() {
	GetComponent.<AudioSource>().PlayOneShot(sound4);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound4.name);
	Adder();
}

function sounds5() {
	GetComponent.<AudioSource>().PlayOneShot(sound5);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound5.name);
	Adder();
}

function sounds6() {
	GetComponent.<AudioSource>().PlayOneShot(sound6);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound6.name);
	Adder();
}

function sounds7() {
	GetComponent.<AudioSource>().PlayOneShot(sound7);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound7.name);
	Adder();
}

function sounds8() {
	GetComponent.<AudioSource>().PlayOneShot(sound8);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound8.name);
	Adder();
}

function sounds9() {
	GetComponent.<AudioSource>().PlayOneShot(sound9);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound9.name);
	Adder();
}

function sounds10() {
	GetComponent.<AudioSource>().PlayOneShot(sound10);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound10.name);
	Adder();
}

function sounds11() {
	GetComponent.<AudioSource>().PlayOneShot(sound11);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound11.name);
	Adder();
}

function sounds12() {
	GetComponent.<AudioSource>().PlayOneShot(sound12);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound12.name);
	Adder();
}

function sounds13() {
	GetComponent.<AudioSource>().PlayOneShot(sound13);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound13.name);
	Adder();
}

function sounds14() {
	GetComponent.<AudioSource>().PlayOneShot(sound14);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound14.name);
	Adder();
}

function sounds15() {
	GetComponent.<AudioSource>().PlayOneShot(sound15);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound15.name);
	Adder();
}

function sounds16() {
	GetComponent.<AudioSource>().PlayOneShot(sound16);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound16.name);
	Adder();
}

function sounds17() {
	GetComponent.<AudioSource>().PlayOneShot(sound17);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound17.name);
	Adder();
}

function sounds18() {
	GetComponent.<AudioSource>().PlayOneShot(sound18);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound18.name);
	Adder();
}

function sounds19() {
	GetComponent.<AudioSource>().PlayOneShot(sound19);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound19.name);
	Adder();
}

function sounds20() {
	GetComponent.<AudioSource>().PlayOneShot(sound20);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound20.name);
	Adder();
}

function sounds21() {
	GetComponent.<AudioSource>().PlayOneShot(sound21);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound21.name);
	Adder();
}

function Adder () {
	PlayerPrefs.SetInt(PlayerPrefs.GetString("currentnoise"), PlayerPrefs.GetInt(PlayerPrefs.GetString("currentnoise")) + 1);
	PlayerPrefs.SetInt("Total", PlayerPrefs.GetInt("Total") + 1);
	if (category != "") {
		PlayerPrefs.SetInt(category, PlayerPrefs.GetInt(category) + 1);
	}
	Checker();
	date = System.DateTime.UtcNow.ToString("mm");
	//Debug.Log(System.DateTime.UtcNow.ToString("mm"));
	second = parseFloat(System.DateTime.UtcNow.ToString("ss"));
}

function Checker () {
	if (PlayerPrefs.GetString("beforecurrent") == PlayerPrefs.GetString("currentnoise") && date == System.DateTime.UtcNow.ToString("mm")) {
	Debug.Log(second);
		if (second <= parseFloat(System.DateTime.UtcNow.ToString("ss")) && parseFloat(System.DateTime.UtcNow.ToString("ss")) < (second + 1)) {
			Debug.Log("Adding Favorite...");
			var bruh = 0;
			var number = 1;
			while (bruh == 0) {
				if (PlayerPrefs.GetString("favoritestring" + number.ToString()) == "") {
					PlayerPrefs.SetString("favoritestring" + number.ToString(), PlayerPrefs.GetString("currentnoise"));
					Debug.Log("Added '" + PlayerPrefs.GetString("currentnoise") + "' to favorite " + number);
					Debug.Log("favoritestring" + number.ToString());
					bruh = 1;
				}else if (number == 22) {
					Debug.Log("Adding failed...");
					bruh = 1;
				}
				number ++;
			}
		} 
	}
}

function HelpToggle() {
	if (help.active == true) {
		help.SetActive (false);
	}else if (help.active == false) {
		help.SetActive (true);
	}
}

function MainMenu () {
	Application.LoadLevel("MainMenu");
}

function RandomPage () {
	var number = Random.Range(1,49);
	Application.LoadLevel("All" + number);
}
function Mute() {
	GetComponent.<AudioSource>().Stop();
}