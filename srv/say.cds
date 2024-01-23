service srv { 

    // Following function wil be used in url to give input like, http://.../hello(to:World)
    // That will call our Node module and the fucntion will be executed. Which will run and related string will be returned.
    // Here return string is written because that function is returning a string as output.
    function hello(to:String) returns String; 
}