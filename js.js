// Array

// push thêm phần tử vào cuối
// shift lấy phần tử đầu tiên
// unshift bỏ phần tử đầu
// pop  lấy phần tử cuối cùng 
// slice lấy đi phần tử của 1 mảng (nếu slice(2) là lấy từ vị trí thứ 2 đến hết nếu slice(1,3) là lấy vị trí từ 1 đến 2)
// splice(chỉ mục(vị trị),số lượng xóa,thêm phần tử....) 
// sort ( so sánh oject thì t dùng if)
// reverse đảo ngược
// reduce tính tổng phần tử 
// filter trả về phần tử gốc nếu nó true (còn trong oject lọc điều kiện đúng)
// find trả về phần tử đầu tiên đúng
// map trả về phần tử mới

// kiểu dữ liệu

// number
// string
// boolean

// array
// oject
// function

// undefined (không có gì)
// null 
// NaN (phép tính sai)
// 0
// ''
// false

// cách gọi function
// c1 function tên(value,value2,...){
// }	


// var arr = [{
//     name: 'A',
//     money: 1000
// }, {
//     name: 'C',
//     money: 5000
// }, {
//     name: 'B',
//     money: 3100
// }]
// thêm oject
// var them={name:'An',money:2800}
// arr.push(them)
// console.log(arr)



// sap xep theo tang dan
// var ketqua = arr.sort(function(item,item2){
//     if(item.money > item2.money){
//         return 1
//     }
//     if(item.money < item2.money){
//         return -1
//     }
//     return 0
// })
// console.log(ketqua)



// sap xep theo ten tang dan
// var ketqua = arr.sort(function(item,item2){
//     if(item.name > item2.name){
//         return 1
//     }
//     if(item.name < item2.name){
//         return -1
//     }
//     return 0
// })



// lay ra ong co tien be nhe
// var ketqua = arr.sort(function(item,item2){
//     if(item.money < item2.money){
//         return 1
//     }
//     if(item.money < item2.money){
//         return -1
//     }
//     return 0
// })
// console.log(ketqua[0])



// In ra tat ca cac ong co tien > 3000
// var ketqua = arr.filter(function(item,i){
//     return item.money > 3000
// })
// console.log(ketqua)

// In ra ong co tien dau tien > 3000
// var ketqua = arr.find(function(item,i){
//     return item.money >3000
// })
// console.log(ketqua)

// in ra danh sach cac ban:   them truong phan loai , neu nhu co tien > 3000 => Loai A, con lai la loai B
// var ketqua = arr.map(function(item1,i){

//     if(item1.money >3000){
//         item1.them='A'
//     }else{
//         item1.them='B'
//     }
//     return item1
// })
// console.log(ketqua)