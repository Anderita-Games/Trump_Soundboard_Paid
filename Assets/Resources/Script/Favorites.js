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

var sounder : String;
var date : String;
var second : int;
var number;

var help : GameObject; //toggle thingy
var bruh = 1;
function Update () {
	Debug.Log(PlayerPrefs.HasKey("favoritestring1"));
	if (PlayerPrefs.HasKey("favoritestring1")) {
		Debug.Log("it true");
		sound1 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring1"), AudioClip);
		tsound1.text = sound1.name;
	}else {
		sound1 = null;
		tsound1.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring2")) {
		sound2 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring2"), AudioClip);
		tsound2.text = sound2.name;
	}else {
		sound2 = null;
		tsound2.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring3")) {
		sound3 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring3"), AudioClip);
		tsound3.text = sound3.name;
	}else {
		sound3 = null;
		tsound3.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring4")) {
		sound4 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring4"), AudioClip);
		tsound4.text = sound4.name;
	}else {
		sound4 = null;
		tsound4.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring5")) {
		sound5 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring5"), AudioClip);
		tsound5.text = sound5.name;
	}else {
		sound5 = null;
		tsound5.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring6")) {
		sound6 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring6"), AudioClip);
		tsound6.text = sound6.name;
	}else {
		sound6 = null;
		tsound6.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring7")) {
		sound7 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring7"), AudioClip);
		tsound7.text = sound7.name;
	}else {
		sound7 = null;
		tsound7.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring8")) {
		sound8 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring8"), AudioClip);
		tsound8.text = sound8.name;
	}else {
		sound8 = null;
		tsound8.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring9")) {
		sound9 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring9"), AudioClip);
		tsound9.text = sound9.name;
	}else {
		sound9 = null;
		tsound9.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring10")) {
		sound10 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring10"), AudioClip);
		tsound10.text = sound10.name;
	}else {
		sound10 = null;
		tsound10.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring11")) {
		sound11 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring11"), AudioClip);
		tsound11.text = sound11.name;
	}else {
		sound11 = null;
		tsound11.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring12")) {
		sound12 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring12"), AudioClip);
		tsound12.text = sound12.name;
	}else {
		sound12 = null;
		tsound12.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring13")) {
		sound13 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring13"), AudioClip);
		tsound13.text = sound13.name;
	}else {
		sound13 = null;
		tsound13.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring14")) {
		sound14 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring14"), AudioClip);
		tsound14.text = sound14.name;
	}else {
		sound14 = null;
		tsound14.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring15")) {
		sound15 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring15"), AudioClip);
		tsound15.text = sound15.name;
	}else {
		sound15 = null;
		tsound15.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring16")) {
		sound16 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring16"), AudioClip);
		tsound16.text = sound16.name;
	}else {
		sound16 = null;
		tsound16.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring17")) {
		sound17 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring17"), AudioClip);
		tsound17.text = sound17.name;
	}else {
		sound17 = null;
		tsound17.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring18")) {
		sound18 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring18"), AudioClip);
		tsound18.text = sound18.name;
	}else {
		sound18 = null;
		tsound18.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring19")) {
		sound19 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring19"), AudioClip);
		tsound19.text = sound19.name;
	}else {
		sound19 = null;
		tsound19.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring20")) {
		sound20 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring20"), AudioClip);
		tsound20.text = sound20.name;
	}else {
		sound20 = null;
		tsound20.text = "N/A";
	}
	if (PlayerPrefs.HasKey("favoritestring21")) {
		sound21 = Resources.Load("Sounds/Sound Bites/Other/" + PlayerPrefs.GetString("favoritestring21"), AudioClip);
		tsound21.text = sound21.name;
	}else {
		sound21 = null;
		tsound21.text = "N/A";
	}
}

function Right() {
	Application.LoadLevel("MainMenu");
}

function sounds1() {
	GetComponent.<AudioSource>().PlayOneShot(sound1);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound1.name);
	number = 1;
	Adder();
}

function sounds2() {
	GetComponent.<AudioSource>().PlayOneShot(sound2);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound2.name);
	number = 2;
	Adder();
}

function sounds3() {
	GetComponent.<AudioSource>().PlayOneShot(sound3);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound3.name);
	number = 3;
	Adder();
}

function sounds4() {
	GetComponent.<AudioSource>().PlayOneShot(sound4);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound4.name);
	number = 4;
	Adder();
}

function sounds5() {
	GetComponent.<AudioSource>().PlayOneShot(sound5);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound5.name);
	number = 5;
	Adder();
}

function sounds6() {
	GetComponent.<AudioSource>().PlayOneShot(sound6);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound6.name);
	number = 6;
	Adder();
}

function sounds7() {
	GetComponent.<AudioSource>().PlayOneShot(sound7);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound7.name);
	number = 7;
	Adder();
}

function sounds8() {
	GetComponent.<AudioSource>().PlayOneShot(sound8);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound8.name);
	number = 8;
	Adder();
}

function sounds9() {
	GetComponent.<AudioSource>().PlayOneShot(sound9);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound9.name);
	number = 9;
	Adder();
}

function sounds10() {
	GetComponent.<AudioSource>().PlayOneShot(sound10);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound10.name);
	number = 10;
	Adder();
}

function sounds11() {
	GetComponent.<AudioSource>().PlayOneShot(sound11);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound11.name);
	number = 11;
	Adder();
}

function sounds12() {
	GetComponent.<AudioSource>().PlayOneShot(sound12);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound12.name);
	number = 12;
	Adder();
}

function sounds13() {
	GetComponent.<AudioSource>().PlayOneShot(sound13);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound13.name);
	number = 13;
	Adder();
}

function sounds14() {
	GetComponent.<AudioSource>().PlayOneShot(sound14);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound14.name);
	number = 14;
	Adder();
}

function sounds15() {
	GetComponent.<AudioSource>().PlayOneShot(sound15);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound15.name);
	number = 15;
	Adder();
}

function sounds16() {
	GetComponent.<AudioSource>().PlayOneShot(sound16);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound16.name);
	number = 16;
	Adder();
}

function sounds17() {
	GetComponent.<AudioSource>().PlayOneShot(sound17);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound17.name);
	number = 17;
	Adder();
}

function sounds18() {
	GetComponent.<AudioSource>().PlayOneShot(sound18);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound18.name);
	number = 18;
	Adder();
}

function sounds19() {
	GetComponent.<AudioSource>().PlayOneShot(sound19);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound19.name);
	number = 19;
	Adder();
}

function sounds20() {
	GetComponent.<AudioSource>().PlayOneShot(sound20);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound20.name);
	number = 20;
	Adder();
}

function sounds21() {
	GetComponent.<AudioSource>().PlayOneShot(sound21);
	PlayerPrefs.SetString("beforecurrent", PlayerPrefs.GetString("currentnoise"));
	PlayerPrefs.SetString("currentnoise", sound21.name);
	number = 21;
	Adder();
}

function Adder () {
	PlayerPrefs.SetInt(PlayerPrefs.GetString("currentnoise"), PlayerPrefs.GetInt(PlayerPrefs.GetString("currentnoise")) + 1); 
	PlayerPrefs.SetInt("FTotal", PlayerPrefs.GetInt("FTotal") + 1);
	Checker();
	date = System.DateTime.UtcNow.ToString("mm");
	//Debug.Log(System.DateTime.UtcNow.ToString("mm"));
	second = parseFloat(System.DateTime.UtcNow.ToString("ss"));
}

function Checker () {
	if (PlayerPrefs.GetString("beforecurrent") == PlayerPrefs.GetString("currentnoise") && date == System.DateTime.UtcNow.ToString("mm")) {
	Debug.Log(second);
		if (second <= parseFloat(System.DateTime.UtcNow.ToString("ss")) && parseFloat(System.DateTime.UtcNow.ToString("ss")) < (second + 1)) {
			Debug.Log("Deleting Favorite...");
			if (PlayerPrefs.GetString("favoritestring" + number.ToString())) {
				PlayerPrefs.DeleteKey("favoritestring" + number.ToString());
				Debug.Log("Deleted '" + PlayerPrefs.GetString("currentnoise") + "' from favorite " + number);
			}else {
				Debug.Log("Deletion failed...");
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
 //Loads random page
}

function Mute() {
	GetComponent.<AudioSource>().Stop();
}
