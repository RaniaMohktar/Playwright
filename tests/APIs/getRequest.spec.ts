import { test, expect } from '@playwright/test';

test('try getRequest', async ({ request }) => {
const respone =await request.get('https://fakestoreapi.com/products');
const responsebody =await respone.json();
 //console.log(responsebody);
 expect(respone.status()).toBe(201);




//     const response= await request.get("https://fakestoreapi.com/products");
//    const responseBody= await response.json();
//    console.log(responseBody);
//    expect(response.status()).toBe(201);


});