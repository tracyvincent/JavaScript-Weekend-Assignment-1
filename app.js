var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5];

var claims = [
	new Claim("Kristin Moen", "Primary Care", 820),
	new Claim("Randy Irwin", "Optical", 250),
	new Claim("Jennifer Nicholson", "Specialist", 1000),
	new Claim("Renee Avelsgard", "Emergency", 1500),
	new Claim("Tony Hasselius", "Primary Care", 960),
];

claims = initialList.concat(claims);

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered

function findPercent(claimRequest){
	var percent = 0.00
	switch (claimRequest.visitType){
	case "Optical":
		percent = 0.00;
		break;
	case "Specialist":
		percent = 0.10;
		break;
	case "Emergency":
		percent = 1.00
		break;
	case "Primary Care":
		percent = 0.50;
}	return percent;

}

//function to determine amount covered
function findAmount(claimRequest){
	coveredPercent = findPercent(claimRequest);
	var coveredCost = Math.round(claimRequest.visitCost * coveredPercent);
	var coveredMessage = ("Paid out $" + (coveredCost).toLocaleString() + " for " + claimRequest.patientName);
	$('ul').append("<li>" + coveredMessage + "</li>");
	console.log(coveredMessage);
return coveredCost
}

$(document).ready(function(){
for (i = 0; i < claims.length; i++){
	totalPayedOut += findAmount(claims[i]);
};
$('body').append("<p>$" + (Number(totalPayedOut).toLocaleString()) + "</p>");
console.log('$' + (Number(totalPayedOut).toLocaleString()));
});
