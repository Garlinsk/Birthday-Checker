var male =DayOfTheWeek{"Sunday","Monday","Tuesday" ,"Wenesday","Thursday,"Friday","Saturday"}
var female =DayOfTheWeek{Sunday","Monday","Tuesday" ,"Wenesday","Thursday,"Friday","Saturday"}
let male =akanName{
    Sunday: Kwasi

    Monday: Kwadwo
    
    Tuesday: Kwabena
    
    Wednesday: Kwaku
    
    Thursday:  Yaw
    
    Friday: Kofi
    
    Saturday: Kwame
    
    }
if female =akanName{
    Sunday: Akosua

Monday: Adwoa

Tuesday: Abenaa

Wednesday: Akua

Thursday:  Yaa

Friday: Afua

Saturday: Ama

}
let DayOfTheWeek (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7