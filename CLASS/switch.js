let state = {
    item: [],
  };
  const addProduct = (type,product) => {
    switch(type){
      case "add":{
        let updatedItem=[...state.item,product]
        state={
          item:updatedItem
        }
       
        break;     
      }
  
      case "delete":{
  
        const updatedProduct=state.item.filter((item)=>{
          return item.id!=product.id
        })
        state={
          item:updatedProduct
        }
      }
    }
  };
  let product1 = {
    id: 1,
    name: "abc",
    price: 100,
  };
  let product2 = {
    id: 2,
    name: "xyz",
    price: 200,
  };
  addProduct("add",product1);
  addProduct("add",product2);
  console.log(state)
  addProduct("delete",product2);
  console.log(state)
  
  // addProduct("update",product1);
  // addProduct("read",product1);