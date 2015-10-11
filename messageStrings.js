//keywordS means success
//keywordE means error

exports.texts = {
	hero1:"REGISTER to create your account. NAME <FirstNameLastName> to add your name.",
	hero2:"DOB <Month-Day-Year> to add your date of birth. HEIGHT <#height> to add your height.",
	hero3:"VERIFY <#PhoneNumber> to ask for the phonenumber owner to verify you. PROFILE to see your stored info.",
	registerS:"Thank you, your account has been created. Your ID is your phone number.",
	registerE:"Please do not any other keywords next to REGISTER",
	nameE:"Please enter your NAME in the correct format: NAME 'FirstNameLastName' (without the quotes)",
	heightE:"Please enter your HEIGHT in the correct format: HEIGHT '#height' (without the quotes in number format)",
	dobE:"Please enter your Date Of Birth in the correct format: DOB 'MM-DD-YY' (without the quotes)",
	default:"Input not valid. Please enter HERO to get a list of valid commands.",
	verifyE:"Please enter in the correct format: VERIFY '#PhoneNumber' (without the quotes in number format)",
	verifyS: function(phoneNumber){return "You have asked for verification from this number" + phoneNumber + ". Wait for verification.";},
	nameS: function(name){return "Your name is recorded as " + name + ". You are still awaiting for verification.";},
	heightS: function(height){return "Your height is recorded as " + height + ". You are still awaiting for verification.";},
	dobS: function(dob){return "Your date of birth is recorded as " + dob + ". You are still awaitng for verification.";},
	profile: function(name, dob, height){return "Here is your PROFILE: Name: " + name + ". Date Of Birth: " + dob + ". Height: " + height + ".";},
};


