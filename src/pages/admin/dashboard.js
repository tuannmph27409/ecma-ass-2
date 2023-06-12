import { useState, useEffect } from '../../../lib'
import axios from 'axios'

const DashBoard = () => {
    const [data, setData] = useState([])

    useEffect(function () {
        axios.get('http://localhost:3000/books')
            .then(({ data }) => {
                setData(data)
            });
    }, [])

    const removeBook = function (id) {
        const status = confirm("Ban co muon xoa");
        if (status) {
            axios
                .delete(`http://localhost:3000/books/${id}`)
                .then(() => location.reload());
        }
    };

    useEffect(function () {
        const deteleBtns = document.querySelectorAll(".delete-btn");
        // deteleBtns.forEach((btn) => {
        //   btn.onclick = function () {
        //     const id = btn.dataset.id;
        //     removeBook(id);
        //   };
        // });
        for (let btn of deteleBtns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                return removeBook(id)
            })
        }
    });

    return /*html*/`
    <h1 class= " text-center  text-2xl text-teal-500" >DashBoard</h1>
    <div class="p-6">
      
        <a href="/admin/books/add"><button class="p-2 bg-blue-400 rounded-sm">Add New</button></a>      
      
    </div>

    <table class="border-separate border border-slate-400 ...">
        <thead>
            <tr>
                <th class="border border-slate-300 w-[10%]">STT</th>
                <th class="border border-slate-300 w-[55%]">Tên</th>
                <th class="border border-slate-300 w-[10%]">Giá</th>
                <th class="border border-slate-300 w-[10%]">Ảnh</th>
                
                <th class="border border-slate-300 w-[15%]">Thao tác</th>
            </tr>
        </thead>
        <tbody>
        ${data
            .map(function (book, index) {
                return /*html*/`
            <tr>
                <td class="border border-slate-300">${index + 1}</td>
                <td class="border border-slate-300">
                    <a class="" href="/admin/books/${book.id}">${book.name}</a>
                </td>
                <td class="border border-slate-300">
                    ${book.original_price}đ
                </td>
                <td class="border border-slate-300">
                    <img src="${book.images?.[0].base_url}"/>
                </td>
                
                <td class="border border-slate-300">
                <button class="p-2 bg-red-400 rounded-sm"><a class="delete-btn" data-id="${book.id}"> Delete </a></button>
                    -
                <button class="p-2 bg-green-500 rounded-sm"><a href="/admin/books/update/${book.id}">Update</a></button>
                </td>
            </tr>`
            }).join('')}
            
        </tbody>
        </table>
    `
}

export default DashBoard