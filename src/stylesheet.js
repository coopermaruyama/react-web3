module.exports = `
.Web3Provider-container {
  font-family: Helvetica, Arial;
  color: hsl(0,0%,50%);
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: hsl(0, 0%, 95%);
  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
}
.Web3Provider-wrapper {
  width: 400px;
  border: 1px solid hsl(207, 90%, 54%);
  border-radius: 20px;
  text-align: center;
  padding: 50px 40px;
  margin: 80px auto;
}
.Web3Provider-image {
  max-height: 175px;
}
.Web3Provider-title {
  margin-top: 50px;
  color: hsl(0,0%,25%);
}
.Web3Provider-message {
  line-height: 27px;
  font-size: 18px;
  color: hsl(0,0%,50%);
}

.web3ConnectButton {
	-moz-box-shadow:inset 0px -3px 7px 0px #29bbff;
	-webkit-box-shadow:inset 0px -3px 7px 0px #29bbff;
	box-shadow:inset 0px -3px 7px 0px #29bbff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));
	background:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
	background:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
	background:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
	background:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
	background-color:#2dabf9;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:9px 23px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;
}
.web3ConnectButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));
	background:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
	background:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
	background:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
	background:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
	background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
	background-color:#0688fa;
}
.web3ConnectButton:active {
	position:relative;
	top:1px;
}

`;
