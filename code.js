function grade(){
var e = document.getElementById("selectGrade");
var x= e.options[e.selectedIndex].value;
var y= document.getElementById("first");
var y1= document.getElementById("second");
if(x=='2'){
SecondYear=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Course</li>";
SecondYear1=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Grade</li>";
SecondYear+="<li class='w3-padding-16'>Image Processing</li>";
SecondYear1+="<li class='w3-padding-16'>99</li>";
SecondYear+="<li class='w3-padding-16'>Web Development</li>";
SecondYear1+="<li class='w3-padding-16'>94</li>";
SecondYear+="<li class='w3-padding-16'>OOP - JAVA </li>";
SecondYear1+="<li class='w3-padding-16'>90</li>";
SecondYear+="<li class='w3-padding-16'>Database 1</li>";
SecondYear1+="<li class='w3-padding-16'>85</li>";
SecondYear+="<li class='w3-padding-16'>Math for Informatics</li>";
SecondYear1+="<li class='w3-padding-16'>85</li>";
SecondYear+="<li class='w3-padding-16'>Computer Architecture</li>";
SecondYear1+="<li class='w3-padding-16'>84</li>";
SecondYear+="<li class='w3-padding-16'>Graph Theory</li>";
SecondYear1+="<li class='w3-padding-16'>83</li>";
SecondYear+="<li class='w3-padding-16'>Networks</li>";
SecondYear1+="<li class='w3-padding-16'>82</li>";
SecondYear+="<li class='w3-padding-16'>Logic Programming - Prologue</li>";
SecondYear1+="<li class='w3-padding-16'>80</li>";
SecondYear+="<li class='w3-padding-16'>Operating System 1</li>";
SecondYear1+="<li class='w3-padding-16'>80</li>";
SecondYear+="<li class='w3-padding-16'>Computer Organization</li>";
SecondYear1+="<li class='w3-padding-16'>75</li>";
SecondYear+="<li class='w3-padding-16'>Average</li>";
SecondYear1+="<li class='w3-padding-16'>85</li>";
SecondYear+="</ul>";
SecondYear1+="</ul>";
y.innerHTML=SecondYear;
y1.innerHTML=SecondYear1;
return;
}
if(x=='1'){
ThirdYear=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Course</li>";
ThirdYear1=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Grade</li>";
ThirdYear+="<li class='w3-padding-16'>PHP</li>";
ThirdYear1+="<li class='w3-padding-16'>95</li>";
ThirdYear+="<li class='w3-padding-16'>Database 2</li>";
ThirdYear1+="<li class='w3-padding-16'>91</li>";
ThirdYear+="<li class='w3-padding-16'>Human Rights</li>";
ThirdYear1+="<li class='w3-padding-16'>90</li>";
ThirdYear+="<li class='w3-padding-16'>GUI</li>";
ThirdYear1+="<li class='w3-padding-16'>89</li>";
ThirdYear+="<li class='w3-padding-16'>System Administration</li>";
ThirdYear1+="<li class='w3-padding-16'>88</li>";
ThirdYear+="<li class='w3-padding-16'>Software Engineering</li>";
ThirdYear1+="<li class='w3-padding-16'>84</li>";
ThirdYear+="<li class='w3-padding-16'>Network Administration</li>";
ThirdYear1+="<li class='w3-padding-16'>75</li>";
ThirdYear+="<li class='w3-padding-16'>Operating System 2</li>";
ThirdYear1+="<li class='w3-padding-16'>70</li>";
ThirdYear+="<li class='w3-padding-16'>Average</li>";
ThirdYear1+="<li class='w3-padding-16'>85</li>";
ThirdYear+="</ul>";
ThirdYear1+="</ul>";
y.innerHTML=ThirdYear;
y1.innerHTML=ThirdYear1;
return;
}


if(x=='3'){
ESecond=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Course</li>";
ESecond1=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Grade</li>";
ESecond+="<li class='w3-padding-16'>Industrial Drawing</li>";
ESecond1+="<li class='w3-padding-16'>85</li>";
ESecond+="<li class='w3-padding-16'>Differential Geometry</li>";
ESecond1+="<li class='w3-padding-16'>84</li>";
ESecond+="<li class='w3-padding-16'>Analysis III</li>";
ESecond1+="<li class='w3-padding-16'>82</li>";
ESecond+="<li class='w3-padding-16'>Mechanic Workshop</li>";
ESecond1+="<li class='w3-padding-16'>80</li>";
ESecond+="<li class='w3-padding-16'>Mechanics of Materials</li>";
ESecond1+="<li class='w3-padding-16'>80</li>";
ESecond+="<li class='w3-padding-16'>Architecture Drawing</li>";
ESecond1+="<li class='w3-padding-16'>74</li>";
ESecond+="<li class='w3-padding-16'>Computer Science III</li>";
ESecond1+="<li class='w3-padding-16'>68</li>";
ESecond+="<li class='w3-padding-16'>Mechanics II</li>";
ESecond1+="<li class='w3-padding-16'>67</li>";
ESecond+="<li class='w3-padding-16'>Organic Chemistry</li>";
ESecond1+="<li class='w3-padding-16'>67</li>";
ESecond+="<li class='w3-padding-16'>Numerical Analysis </li>";
ESecond1+="<li class='w3-padding-16'>67</li>";
ESecond+="<li class='w3-padding-16'>Statistics</li>";
ESecond1+="<li class='w3-padding-16'>66</li>";
ESecond+="<li class='w3-padding-16'>Complex Analysis </li>";
ESecond1+="<li class='w3-padding-16'>65</li>";
ESecond+="<li class='w3-padding-16'>Mineral Chemistry";
ESecond1+="<li class='w3-padding-16'>64</li>";
ESecond+="<li class='w3-padding-16'>Electricity II";
ESecond1+="<li class='w3-padding-16'>61</li>";
ESecond+="<li class='w3-padding-16'>Thermodynamic I";
ESecond1+="<li class='w3-padding-16'>61</li>";
ESecond+="<li class='w3-padding-16'>Modern Physics";
ESecond1+="<li class='w3-padding-16'>60</li>";
ESecond+="<li class='w3-padding-16'>Electricity III";
ESecond1+="<li class='w3-padding-16'>60</li>";
ESecond+="<li class='w3-padding-16'>Average Semester III";
ESecond1+="<li class='w3-padding-16'>72.96</li>";
ESecond+="<li class='w3-padding-16'>Average Semester IV";
ESecond1+="<li class='w3-padding-16'>65.96</li>";
y.innerHTML=ESecond;
y1.innerHTML=ESecond1;
return;
}

if(x=='4'){
ESecond=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Course</li>";
ESecond1=" <li class='w3-dark-grey w3-xlarge w3-padding-32'>Grade</li>";
ESecond+="<li class='w3-padding-16'>Computer Science I</li>";
ESecond1+="<li class='w3-padding-16'>83</li>";
ESecond+="<li class='w3-padding-16'>Statics</li>";
ESecond1+="<li class='w3-padding-16'>81</li>";
ESecond+="<li class='w3-padding-16'>Descriptive Geometry</li>";
ESecond1+="<li class='w3-padding-16'>80</li>";
ESecond+="<li class='w3-padding-16'>Perspective</li>";
ESecond1+="<li class='w3-padding-16'>78</li>";
ESecond+="<li class='w3-padding-16'>Algebra I</li>";
ESecond1+="<li class='w3-padding-16'>72</li>";
ESecond+="<li class='w3-padding-16'>Algebra II</li>";
ESecond1+="<li class='w3-padding-16'>70</li>";
ESecond+="<li class='w3-padding-16'>Computer Science II</li>";
ESecond1+="<li class='w3-padding-16'>70</li>";
ESecond+="<li class='w3-padding-16'>Probability</li>";
ESecond1+="<li class='w3-padding-16'>68</li>";
ESecond+="<li class='w3-padding-16'>Mechanics I</li>";
ESecond1+="<li class='w3-padding-16'>65</li>";
ESecond+="<li class='w3-padding-16'>Analysis II </li>";
ESecond1+="<li class='w3-padding-16'>64</li>";
ESecond+="<li class='w3-padding-16'>Electricity I</li>";
ESecond1+="<li class='w3-padding-16'>63</li>";
ESecond+="<li class='w3-padding-16'>General Chemistry II</li>";
ESecond1+="<li class='w3-padding-16'>63</li>";
ESecond+="<li class='w3-padding-16'>General Chemistry I";
ESecond1+="<li class='w3-padding-16'>62</li>";
ESecond+="<li class='w3-padding-16'>Metrology and Optics";
ESecond1+="<li class='w3-padding-16'>60</li>";
ESecond+="<li class='w3-padding-16'>Analysis I";
ESecond1+="<li class='w3-padding-16'>60</li>";
ESecond+="<li class='w3-padding-16'>Average Semester I";
ESecond1+="<li class='w3-padding-16'>70.27</li>";
ESecond+="<li class='w3-padding-16'>Average Semester II";
ESecond1+="<li class='w3-padding-16'>66.65</li>";
y.innerHTML=ESecond;
y1.innerHTML=ESecond1;
return;
}
}

function project(){
var e = document.getElementById("select2");
var x= e.options[e.selectedIndex].value;
var y= document.getElementById("para1");
var y1= document.getElementById("para2");
if(x=='2'){
p="The goal of this project to install and completely deploy the SAMBA server. It includes users authentication, <br>";
p+="file sharing , log management, and using SAMBA for backup.<br>";
p1="A lot of emphasis has been placed on peaceful coexistence between UNIX and Windows. Unfortunately the two systems ";
p1+="come from very different cultures and they have difficulty getting along without mediation. ...and that, of course";
p1+=" getting along without mediation. ...and that, of course, is Samba's job. Samba runs on UNIX platforms, but speaks ";
p1+="to Windows clients like a native. It allows a UNIX system to move into a Windows Network Neighborhood  without ";
p1+="causing a stir. Windows users can happily access file and print services without knowing or caring that those ";
p1+="services are being offered by a UNIX host. Samba is an important component to seamlessly integrate Linux/Unix ";
p1+=" Servers and Desktops into Active Directory environments. It can function both as a domain controller and as a ";
p1+=" regular domain member. "
y.innerHTML=p;
y1.innerHTML=p1;
document.getElementById("tble").innerHTML = "<br>";
document.getElementById("dwn").innerHTML = " ";
document.getElementById("report").href="AbdullahHaidar_SAMBA_Report.pdf";
return;
}
if(x=='1'){
p="This  project  is  intended  to  help  coaches  in  the management of their teams work. It allows them to";
p+="generate  surveys  about  certain  topics  they  are concerned about and possibly have great benefit for";
p+=" the overall working process.";
p+="<br> The final results of the surveys are represented by a radar graph.";
p1="The website use html5, css, and PHP and was made using Laravel framework.<br>The database is implemented  ";
p1+="in MySQL. The jpgrah package is used to represent the statistics in a radar graph";
y.innerHTML=p;
y1.innerHTML=p1;
gg=document.getElementById("tble");
g="<table>";
g+="<tr><td><img src='images/agile1.png' width='500' height='400'></td>";
g+="<td><img src='images/agile2.png' width='500' height='400'></td></tr>";
g+="<tr><td><img src='images/agile3.png' width='500' height='400'></td>";
g+="<td><img src='images/agile4.png' width='500' height='400'></td></tr></table>";
gg.innerHTML=g;
document.getElementById("dwn").innerHTML = "<a href='AbdullahHaidar_Agile.zip' download><button class='w3-button w3-light-grey w3-padding-large w3-section'><i class='fa fa-download'></i> Download Project </button></a>";
document.getElementById("report").href="AbdullahHaidar_Agile_Report.pdf";

return;
}
if(x=='3'){
p="This project deals with Super-Market automation. A Supermarket is a self-service store offering a wide variety ";
p+="of items related to food, household or daily use. Includes both purchase and sale of products. Designed to make the ";
p+="existing system more informative, reliable, fast and easy for all the stake-holders.  ";
p1="The database system is implemented according to Microsoft SQL server. The Graphical user interface was designed <br> ";
p1+="using JavaFx.";
y.innerHTML=p;
y1.innerHTML=p1;
gg=document.getElementById("tble");
g="<table>";
g+="<tr><td><img src='images/sup1.png' width='500' height='400'></td>";
g+="<td><img src='images/sup2.png' width='500' height='400'></td></tr>";
g+="<tr><td><img src='images/sup3.png' width='500' height='400'></td>";
g+="<td><img src='images/sup4.png' width='500' height='400'></td></tr></table>";
gg.innerHTML=g;
document.getElementById("dwn").innerHTML = "<a href='Supermarket.zip' download><button class='w3-button w3-light-grey w3-padding-large w3-section'><i class='fa fa-download'></i> Download Project </button></a>";
document.getElementById("report").href="AbdullahHaidar_Supermarket_Report.pdf";
document.getElementById("project").href="AbdullahHaidar_Supermarket_Report.pdf";
return;
}
}