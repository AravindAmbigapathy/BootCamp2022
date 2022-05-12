const data=`{  
    "firstName": "Arro",    
    "age": 23,  
    "address" : {  
        "streetAddress": "Plot-6, Mohan Nagar",  
        "city": "paris",  
        "state": "France",  
        "postalCode": "201007"  
    }  
}  `
console.log(data);
let jsDats=JSON.parse(data)
console.log(jsDats.age);