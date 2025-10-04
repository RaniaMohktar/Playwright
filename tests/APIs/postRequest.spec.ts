import { test, expect } from '@playwright/test';
const placedata = require('../../TestData/body.json');

//+++++++++++++++++++++++ our parmaters+++++++++++++++++++++
const key={
    "key": "qaclick123"
}


// +++++++++++++++ our body+++++++++++++++++++++++++++++++


  //++++++++++++++++++++ our header +++++++++++++++++++4
  const header1={
    Connection:"keep-alive"
  }
  //+++++++++++++++++++++++++++=our request ++++++++++++++++++++++++

test('try postRequest', async ({ request }) => {
    const response= await request.post("https://rahulshettyacademy.com/maps/api/place/add/json",{
        params :key ,
       data :placedata ,
       headers : header1

    }
    );


   const responseBody= await response.json();
   console.log(responseBody);
   const id =responseBody.place_id;

   //console.log(id);





   //++++++++++++++++++++++=grt request 
   const response2= await request.get("http://rahulshettyacademy.com/maps/api/place/get/json",{
    params : {"place_id" : id,
            "key": "qaclick123"
        }
    

}
);
const responseBody2= await response2.json();
expect(responseBody2.name).toEqual("Rania1");
// console.log(responseBody2);
});