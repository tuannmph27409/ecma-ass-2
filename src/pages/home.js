import axios from "axios";
import Navigation from "../components/navigation"
import footer from "../components/footer";
import "../style/footer.css"

import { useEffect, useState } from "../../lib";
// import data from '../../db.json' assert {type: "json"}

var HomePage = function () {

  const [data, setData] = useState([])
  
    useEffect(function() {
        // fetch('http://localhost:3000/books')
        // .then(function(res) {
        //     return res.json()
        // })
        // .then(function(dataFetch) {
        //     setData(dataFetch)
        // });
        axios.get('http://localhost:3000/books')
        .then(function(dataAxios) {
            setData(dataAxios.data)
        })
    }, [])
    
  


  return /*html*/`
    ${Navigation()}

    <div class="flex flex-row ">
    <div class="menu basis-1/4 grid justify-items-center">
    <section class="">
        <a href=""><h1 class="text-black-700 font-bold ">Danh mục sản phẩm</h1></a>
        <ul class="grid grid-cols-1 pl-5">
            <li><a class="text-black-500 " href="/">English Books</a></li>
            <li><a class="text-black-500" href="/products">Sách tiếng việt</a></li>
            <li><a class="text-black-500" href="#">Văn phòng phẩm </a></li>
            <li><a class="text-black-500" href="#">Quà lưu niệm</a></li>
        </ul>
    </section>
    </div>

    <div class="noidung basis-2/4 grid justify-items-center justify-items-stretch">
    <div>
      <h1 class="text-black-700 font-bold text-2xl px-3 py-5">Nhà Sách Tiki</h1>
      <img class="w-1/2 md:w-full" src="img/Rectangle.png" alt="">
    </div>

    <div class="justify-self-auto">
      <ul class="flex flex gap-4 px-3 py-5 ">
        <li class="hover:text-blue-500 underline"><a href="#">Phổ Biến</a></li>
        <li class="hover:text-blue-500"><a href="#">Bán Chạy</a></li>
        <li class="hover:text-blue-500"><a href="#">Hàng mới</a></li>
        <li class="hover:text-blue-500"><a href="#">Giá Thấp</a></li>
        <li class="hover:text-blue-500"><a href="#">Giá Cao</a></li>
      </ul>
    </div>

      <div class="grid grid-cols-4 gap-2">
            ${data.map(function (book, index) {
    return /*html*/`
                <div class="">
                <a href="/product_sdy/${book.id}?id_categories=${book.categories?.id}">
                    <img src="${book.images?.[0].base_url}"/>
                    <h3>${book.name}</h3>
                    <span class="text-red-500 boid">${book.original_price}đ</span>
                </a>
                </div>
              
                
                `
  }).join('')}
       
    </div>
    </div>
    </div>
    <div class="container">
    ${footer()}
    </div>`
    
    
}

export default HomePage