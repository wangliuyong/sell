export function saveLocalStorage(id,key,value){
  let seller=window.localStorage._seller_;

  if(!seller){
    seller={};
    seller[id]={};
    seller[id][key]=value;
  }else{
    seller=JSON.parse(seller);
    if(!seller[id]){
      seller[id]={};
    }
  }
  seller[id][key]=value;
  window.localStorage._seller_=JSON.stringify(seller)
}


export function getLocalStorage(id,key,def){
  let seller=window.localStorage._seller_;
  if(!seller){
    return def;
  }else{
    if(!seller[id]){
      return def;
    }else{
      if(!seller[id][key]){
        return def;
      }else{
        return seller[id][key];
      }
    }
  }
}
