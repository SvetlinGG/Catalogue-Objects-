function catalogue(products){
    let productArr =[];
    //let catalogObj = {};
    for ( let names of products){
        let [ productName, price] = names.split(' : ');
        price = Number(price);
        productArr.push({name:productName, price:price});
        
    }
    let sortedProduct = productArr.sort((a,b) => a.name.localeCompare(b.name));
    let currentLetter ='';
    for ( let product of sortedProduct){
        let firstLetter = product.name[0];
        if ( firstLetter != currentLetter){
            currentLetter = firstLetter;
            console.log(currentLetter);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);