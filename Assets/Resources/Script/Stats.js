#pragma strict
var time : UnityEngine.UI.Text;
var Total : UnityEngine.UI.Text;
var FTotal : UnityEngine.UI.Text;
var Previous : UnityEngine.UI.Text;

function Start () {
	while (1 > 0) {
		yield WaitForSeconds (1);
		PlayerPrefs.SetInt("Time", PlayerPrefs.GetInt("Time")+1);
	}
}

function Update () {
	time.text = "Time Wasted: " + (PlayerPrefs.GetInt("Time")/60);
	Total.text = "Sounds Played: " + PlayerPrefs.GetInt("Total");
	FTotal.text = "Favorite Sounds Played: " + PlayerPrefs.GetInt("FTotal");
	Previous.text = "Last Noise Played: " + PlayerPrefs.GetInt("currentnoise");
}

function Back () {
	Application.LoadLevel("MainMenu");
}
