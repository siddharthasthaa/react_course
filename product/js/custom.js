class Laptop{
  produts = [
    {id:1, name:'dell',price:40000,quantity:2},
    {id:2, name:'hp', price:50000,quantity:3},
  ]
  show(){
    console.log(this.produts);
  }
  add(new_item){
    this.produts.push(new_item);
    console.log(this.produts);
  }
  remove(id){
    this.produts = this.produts.filter(item => item.id !== id);
    console.log(this.produts);
  }
  update(id,quantity){

  }
}
let obj = new Laptop();
let items = {
  id:3,
  name:'lenovo', 
  price:40000,
  quantity:2,
}
obj.add();
obj.remove();