var emailGood=false, zipGood=false, stateGood=false, addressGood=false, cityGood=false;

var fnameGood=false, lnameGood=false, unameGood=false, bGood = false;

var phoneGood = false, pass1good = false, pass2good = false;

var genderGood = false, maritalGood = false;

function validate() {
    document.getElementById("userName").onblur =valuname;
    document.getElementById("password").onblur = valPass1;
    document.getElementById("repeatPassword").onblur = valrepeatpass;
    document.getElementById("firstName").onblur = valFname;
    document.getElementById("lastName").onblur = valLname;
    document.getElementById("addressline1").onblur = valaddress;
    document.getElementById("city").onblur = valcity;
    document.getElementById("zipCode").onblur = valZipCodes;
    document.getElementById("pn").onblur = valPN;
    document.getElementById("state").onblur = valstate;
    document.getElementById("email").onblur = valEmail;
    document.getElementById("maritalStatus").onblur = valm;
    document.getElementById("birthDay").onblur = valbday;
    document.getElementById("gender").onblur = valgender;
    document.getElementById("submit").onblur = activateSubmit;
        }
function valuname()
{
    var user = document.getElementById("userName");
    var userVal = document.getElementById("userV");
    var useriVal = document.getElementById("userIV");

    if (user.value.length < 6)
    {

        showElement(useriVal);
        hideElement(userVal);

        unameGood=false;
        activateSubmit();
        return false;
    }

    hideElement(useriVal);
    showElement(userVal);

    unameGood=true;
    activateSubmit();
    return true;
}

function valFname() {
    var fname = document.getElementById("firstName");
    var fnameVal = document.getElementById("FNV");
    var fnameIval = document.getElementById("FNIV");

    if (fname.value === ""){
        showElement(fnameIval);
        hideElement(fnameVal);

        fnameGood = false;
        activateSubmit();
        return false;
    }

    showElement(fnameIval);
    hideElement(fnameVal);

    fnameGood = true;
    activateSubmit();
    return true;
}
function valLname() {
    var lname = document.getElementById("lastName")
    var lnameVal = document.getElementById("LNV")
    var lnameIval = document.getElementById("LNIV")

    if (fname.value === ""){
        showElement(lnameIval);
        hideElement(lnameVal);

        lnameGood = false;
        activateSubmit();
        return false;
    }

    showElement(lnameIval);
    hideElement(lnameVal);

    lnameGood = true;
    activateSubmit();
    return true;
}
function valfname() {
    var fname = document.getElementById("firstName")
    var fnameVal = document.getElementById("FNV")
    var fnameIval = document.getElementById("FNIV")

    if (fname.value === ""){
        showElement(fnameIval);
        hideElement(fnameVal);

        fnameGood = false;
        activateSubmit();
        return false;
    }

    showElement(fnameIval);
    hideElement(fnameVal);

    fnameGood = true;
    activateSubmit();
    return true;
}
function valPN()
{
    var pN = document.getElementById("pn");

    var INVAL = document.getElementById("PIV");

    var val = document.getElementById("PV");

    var pNValue = (pN.value);


    const reg1 = new RegExp(/^\d{3}-\d{3}-\d{4}$/);

    const reg2 = new RegExp(/^\d{3}\d{3}\d{4}$/);


    if (reg1.test(pNValue)) {

        hideElement(INVAL);
        showElement(val);

        phoneGood = true;
        activateSubmit();
        return true;

    }
    else if (reg2.test(phoneNumberValue))
    {
        var p1 = (pN.value).substring(0,3);
        var p2 = (pN.value).substring(3,6);
        var p3 = (pN.value).substring(6,10);

        phoneNumber.value = p1 + "-" + p2 + "-" + p3;

        hideElement(INVAL);
        showElement(val);

        phoneGood = true;
        activateSubmit();
        return true;

    }
    else
    {
        showElement(INVAL);
        hideElement(val);
        phoneGood = false;
        activateSubmit();
        return false;

    }
}
function valaddress(){
    var a = document.getElementById("addressline1")
}
function valZipCodes() {
    var zipC = document.getElementById(zipCodes);
    var zval = document.getElementById(zipV);
    var zinval = document.getElementById(zipIV);
    let zcvalue = zipC.value;
    var zstyle1 = new RegExp(/^\d{5}$/);
    var zstyle2 = new RegExp(/^\d{5}-\d{4}$/);
    var zstyle3 = new RegExp(/^\d{5}\d{4}$/);

    if(zstyle1.test(zcvalue)){
        hideElement(zinval);
        showElement(zval);

        zipGood = true;
        activateSubmit();
        return true;
    }
    if (zstyle2.test(zcvalue)){
        hideElement(zinval);
        showElement(zval);

        zipGood = true;
        activateSubmit();
        return true;
    }
}
function valPass1()
{
    var p = document.getElementById("password");
    var piv = document.getElementById("passIV");
    var pV = document.getElementById("passV");

    if (!p.value)
    {
        showElement(piv);

        hideElement(pV);


        pass1good = false;
        activateSubmit();
        return false;

    }
    if ((p.value.length) < 8)
    {


        showElement(piv);
        hideElement(pV);
        pass1good = false;
        activateSubmit();
        return false;
    }
    if ((p.value).search(/\d/) === -1) {

        showElement(piv);
        hideElement(pV);
        pass1good = false;
        activateSubmit();
        return false;
    } else if ((p.value).search(/\W/) === -1) {

        showElement(piv);
        hideElement(pV);
        pass1good = false;
        activateSubmit();
        return false;

    } else if ((p.value).search(/[a-z]/) === -1) {

        showElement(piv);
        hideElement(pV);
        pass1good = false;
        activateSubmit();
        return false;

    } else if ((p.value).search(/[A-Z]/) === -1) {

        showElement(piv);
        hideElement(pV);
        pass1good = false;
        activateSubmit();
        return false;

    }

    showElement(piv);
    hideElement(pV);
    pass1good = true;
    activateSubmit();
    return true;


}
function valrepeatpass() {
    var p = document.getElementById("password");
    var rp = document.getElementById("repeatpassword")
    var piv = document.getElementById("rpassIV");
    var pV = document.getElementById("rpassV");

    if (rp.value === p.value){
        showElement(piv);
        hideElement(pV);
        pass2good = true;
        activateSubmit();
        return true;
    }
    else {
        showElement(piv);
        hideElement(pV);
        pass2good = false;
        activateSubmit();
        return false;

    }

}
function valEmail(){
    var email = document.getElementById("email");


    var emailFormat = new RegExp(/^.+@.+\..+$/);

    var emailIV = document.getElementById("EIV");

    var emailV = document.getElementById("EIV");

    if (emailFormat.test(email.value) === true)
    {

        hideElement(emailIV);
        showElement(emailV);

        emailGood = true;
        activateSubmit();
        return true;
    }
    else
    {

        showElement(emailIV);
        hideElement(emailV);

        emailGood = true;
        activateSubmit();
        return false;
    }
}
function valstate() {
    var stateVal = document.getElementById("state");
    var stateIV = document.getElementById("sIV");
    var stateV = document.getElementById("sV");

    if (stateVal.value === "Blank"){
        showElement(stateIV);
        hideElement(stateV);

        stateGood = false;
        activateSubmit();
        return false;
    }
    else{
        hideElement(stateV);
        showElement(stateIV);

        stateGood = true;
        activateSubmit();
        return true;
    }
}
function valcity() {
    var cityVal = document.getElementById("city");
    var cityIV = document.getElementById("CIV");
    var cityV = document.getElementById("CV");

    if (cityVal === ""){
        showElement(CIV);
        hideElement(CV);

        cityGood = false;
        activateSubmit();
        return false;
    }
    else {
        showElement(CIV);
        hideElement(CV);

        cityGood = true;
        activateSubmit();
        return true;
    }
}
function valbday() {
    var bD = document.getElementById("birthday");
    var bDiv = document.getElementById("biv");
    var bDv = document.getElementById("bv");
    var paturn = new RegExp(/^\d{4}-\d{2}-\d{2}$/);

    if(paturn.test(bD.value)){
        showElement(bDv);
        hideElement(bDiv);

        bGood = true;
        activateSubmit();
        return = true;
    }
    else{
        showElement(bDv);
        hideElement(bDiv);

        bGood = false;
        activateSubmit();
        return = false;
    }
}
function valm() {
    var m = document.getElementById("maritalStatus");
    var miv = document.getElementById("msiv");
    var mv =  document.getElementById("msv");

    if (m.value === "Blank"){
        showElement(miv);
        hideElement(mv);

        maritalGood = false;
        activateSubmit();
        return = false;
    }
    else{
        showElement(miv);
        hideElement(mv);

        maritalGood = true;
        activateSubmit();
        return = true;
    }
}
function valgender() {
    var g = document.getElementById("gender");
    var giv = document.getElementById("genderIV");
    var gv =  document.getElementById("genderV");

    if (g.value === "Blank"){
        showElement(giv);
        hideElement(gv);

        genderGood = false;
        activateSubmit();
        return = false;
    }
    else {
        showElement(giv);
        hideElement(gv);

        genderGood = true;
        activateSubmit();
        return = true;
    }
}

function hideElement(element) {
    element.classList.remove("show");
    element.classList.add("hide");
}
function showElement(element) {
    var elem = element;

    elem.classList.remove("hide");
    elem.classList.add("show");
}
function activateSubmit() {
    let submitButton = document.getElementById("submit");

    var submitReady = document.getElementById("submitReady");

    if (!fnameGood) {



        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    if (!phoneGood)
    {


        submitButton.disabled = true;
        hideElement(submitReady);
        return false;

    }

    if (!lnameGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }

    if (!zipGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }

    if (!unameGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    } else if (!pass1good) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    } else if (!pass2good) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    } else if (!bGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    } else if (!genderGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    if (!stateGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    else if (!emailGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    else if (!addressGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    else if (!cityGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }
    else if (!maritalGood) {

        submitButton.disabled = true;
        hideElement(submitReady);
        return false;
    }


    showElement(submitReady);

    submitButton.disabled = false;
}

function resetVars() {
    unameGood=false;
    fnameGood=false;
    lnameGood=false;
    emailGood=false;
    pass1good=false;
    pass2good=false;
    stateGood=false;
    addressGood=false;
    cityGood=false;
    phoneGood=false;
    zipGood=false;
    genderGood=false;
    maritalGood=false;
    resetSpans();
    activateSubmit();
}
function resetSpans()
{
    hideElement(document.getElementById("userIV"));
    hideElement(document.getElementById("userV"));

    hideElement(document.getElementById("FNIV"));
    hideElement(document.getElementById("FNV"));

    hideElement(document.getElementById("LNIV"));
    hideElement(document.getElementById("LNV"));

    hideElement(document.getElementById("EIV"));
    hideElement(document.getElementById("EV"));

    hideElement(document.getElementById("passIV"));
    hideElement(document.getElementById("passV"));

    hideElement(document.getElementById("rPassIV"));
    hideElement(document.getElementById("rPassV"));

    hideElement(document.getElementById("BirthErr"));
    hideElement(document.getElementById("BirthValid"));

    hideElement(document.getElementById("alIV"));
    hideElement(document.getElementById("alV"));

    hideElement(document.getElementById("CIV"));
    hideElement(document.getElementById("CV"));

    hideElement(document.getElementById("sIV"));
    hideElement(document.getElementById("sV"));

    hideElement(document.getElementById("zipIV"));
    hideElement(document.getElementById("zipV"));

    hideElement(document.getElementById("PIV"));
    hideElement(document.getElementById("PV"));

    hideElement(document.getElementById("genderIV"));
    hideElement(document.getElementById("genderV"));

    hideElement(document.getElementById("msiv"));
    hideElement(document.getElementById("msv"));


}
