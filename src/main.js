import { render } from "../lib"
import HomePage from "./pages/home"
// import ProductPage from "./pages/products"
import ProductPage_sdy from "./pages/product_sdy"
import './style/main.css'
import { router } from '../lib'
import DashBoard from "./pages/admin/dashboard"
import BookUpdate from "./pages/admin/book-update"
import BookAdd from "./pages/admin/book-add"
import TestPage from "./pages/admin/test"


// Khai bao DOM
var app = document.querySelector("#app")

app.innerHTML = ProductPage_sdy()

router.on('/', function () {
    console.log("home page");
    render(HomePage, app)
})

// router.on('/products/:id', function({data}) {
//     console.log("Product page");
//     render(() => ProductPage(data.id), app)
// })

router.on('/product_sdy/:id', function ({ data }) {
    console.log("Product_sdy")
    return render(() => ProductPage_sdy(data.id), app)
})

router.on('/admin', function () {
    return render(DashBoard, app)
})

router.on('/admin/books/add', function () {
    return render(BookAdd, app)
})


router.on('/admin/books/update/:id', function ({ data }) {
    return render(() => BookUpdate(data.id), app)
})

// router.on('/admin/books/:id', function({data}) {
//     render(() => removeBook(data.id), app)
// })

router.resolve()

