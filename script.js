//Q.1.
    const myResume={
        "basics": {
            "name": "Gurumoorthi T",
            "email": "gurumcsnsk@gmail.com",
            "phone": 9659070104,
            "degree": "MSC-CS",
            "location": {
              "address": "Palladam",
              "postalCode": 641664,
              "city": "Palladam",
              "state": "Tamilnadu",
              "country": "India"
            },
            "profiles": [
              {
                
                "github":"https://github.com/Gurumoorthi1990"
              }
            ]
          },
          
          "education": [
            {
              "institution": "RVS CAS",
              "department": "Computer Science",
              "studyType": "fulltime",
              "batch start year": 2011,
              "batch end year": 2012,
              "CGPA": 7.8,
            }
          ],
          "skills": [
            {
              "name": "javascript",
              "level": "beginer",
              
            }
          ],
          "languages": [
            {
              "language": "Tamil,Enlish",
            }
          ],
          "interests": [
            {
              "name": "travelling",
            }
          ]
        }
        console.log(myResume);

//Question 2:
//for the given JSON iterate over all for loops

    //2nd loop
    //for loop
    var mydetails1 = [{
    "Name":"Gurumoorthi T",
    "Age":34,
    "Degree":"MSC",
    "Address":"Palladam",
    "Number":"+919659070104"
    
    }]
    for(var i=0;i<mydetails1.length;i++){
        console.log(mydetails1[i]);
        
    }

    
    
    /*******************************************/
   //for in loop
var mydetails = {
    "Name":"Gurumoorthi T",
    "Age":34,
    "Degree":"MSC",
    "Address":"Palladam",
    "Number":"+919659070104"
    };
    
    for (var i in mydetails){
    console.log(i,mydetails[i]);
    }
    /************************************************/   
   
    //3rd for of loop:
    
    const result23 = [60,80,90,96,95]
    for(var newresult23 of result23){
        console.log(newresult23);
    }
    /*******************************************/
    //4th for each loop
    var result24 = [99,100,100]
    result24.forEach(numbers=>{console.log(numbers)});

