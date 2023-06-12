import { useState, useEffect } from "../../../lib"
import { router } from "../../../lib"
import axios from "axios"

const BookAdd = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "name": document.querySelector("#name").value,
                "original_price": document.querySelector("#original_price").value,
                // "images": document.querySelector("#images").value,
                "description": document.querySelector("#description").value
            }
            fetch(`http://localhost:3000/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProject)
            })
                .then(() => {
                    alert("Them san pham thanh cong")
                    router.navigate('/admin')
                })
            //   add(newProject).then(() => {
            //     alert("Add New Product successful")
            //     router.navigate('/admin/project')
            //   })
        })


    })

    return /*html*/`
    <h1 class= " text-center text-2xl ">Add New Book</h1>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form id="add-form" class="space-y-4">
                <div>
                <label class="sr-only" for="name">Tên sách</label>
                <input  class="w-full border border-gray-200 p-3 text-sm" placeholder="Tên sách" type="text" id="name" />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label class="sr-only" >Giá thành</label>
                    <input  class="w-full border border-gray-200 p-3 text-sm" placeholder="Giá thành" type="number"
                    id="original_price" />
                </div>
                </div>
                

                <div>
                <label class="sr-only" for="message">Mô tả</label>
                <textarea class="w-full border border-gray-200 p-3 text-sm" placeholder="Mô tả" rows="8"
                    id="description"></textarea>
                </div>
                

                <div class="mt-4">
                <button type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                    <span class="font-medium">ADD NEW</span>
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    

    `
}

export default BookAdd;
// <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                // <div>
                //     <label class="sr-only" >Image</label>
                //     <input  class="w-full border border-gray-200 p-3 text-sm" placeholder="Image" type="text"
                //     id="original_price" />
                // </div>
                // </div>