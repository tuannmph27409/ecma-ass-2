
const Navigation = function () {
    return /*html*/`
    <div class="w-full bg-[#1A94FF]">
        <div class="flex justify-around h-[100px] w-[1200px] mx-auto">
            <div class="my-auto">
                <a href="/">
                    <img src="../src/images/Tiki.png" alt="" class="w-[60px] h-[40px] mb-[11px]">
                </a>
                <img src="../src/images/Freeship.png" alt="" class="w-[83px] h-[12px]">
            </div>

            <div class="my-auto flex">
                <input type="text" class="outline-0 w-[500px] h-[40px] pl-5">
                <button class="bg-[#0D5CB6] h-[40px] w-[120px] text-white flex hover:bg-blue-900">
                    <img src="../src/images/Search.png" alt="" class="w-[20px] h-[20px] mt-[11px] ml-5">
                    <p class="text-[13px] font-normal leading-[15px] mt-3 ml-1">Tìm kiếm</p>
                </button>
            </div>

            <div class="flex text-white my-auto">
                <img src="../src/images/Account.png" alt="" class="w-[32px] h-[32px] mr-2 ml-[-100px]">
                <div>
                    <div class="leading-[16px] text-[11px] font-normal">
                        <a href="" class="hover:text-red-500">Đăng nhập</a> / <a href="" class="hover:text-red-500">Đăng
                            kí</a>
                    </div>
                    <div>
                        <a href="" class="leading-[20px] text-[13px] font-normal flex hover:text-red-500">
                            <p>Tài khoản</p>
                            <img src="../src/images/Detail.png" alt="" class="w-[16px] h-[16px] mt-1">
                        </a>
                    </div>
                </div>

                <div class="my-auto text-white flex hover:text-red-500">
                    <img src="../src/images/Cart.png" alt="" class="w-[32px] h-[32px] ml-5">
                    <a href="" class="text-[11px] mt-4 ml-1 font-normal leading-[14px]">Giỏ hàng</a>
                </div>
                <div class="my-auto text-white flex hover:text-red-500">
                    <a href="/admin" class="text-[11px] mt-5 ml-5 font-normal leading-[14px]">Admin</a>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full bg-[#F5F5FA] flex">
        <div class="w-[1050px] mx-auto p-1">
            <a href="/" class="text-[13px] font-normal leading-[20px] hover:text-red-500 text-[#808089]">Trang chủ</a>
        </div>
    </div>
    
    `
}

export default Navigation;

// return /*html*/`

    
    

// `






// {/* <header class="bg-sky-500/100 flex justify-between ">
//     <div>
//       <img src="img/2228f38cf84d1b8451bb49e2c4537081.png" alt="">
//       <a href="">FreeShip</a>
//     </div>

//     <div class="">
//       <input type="text" class="w-5/5	width: 40% h-9" >
//       <button class="text-white h-9 bg-blue-800 w-1/4 background-color: rgb(30 64 175) hover:bg-sky-700	background-color: rgb(3 105 161);"> <i class="fa-solid fa-magnifying-glass text-white"></i> Tìm kiếm</button>
      
      
//     </div>

//     <div>
//     <i class="fa-regular fa-user"></i>
//           <a href="">Đăng ký </a>
//           <a href="">Đăng nhập</a>
//       <a href=""></a>
//     </div>
//   </header> */}


{/* <header class="bg-sky-500/100 flex gap-2">
    
    <div>
    <a href="" class="text-white text-5l p4u">
    <div class="">
    <img class="max-w-screen-sm	max-width: 640px;" src="../img/2228f38cf84d1b8451bb49e2c4537081.png" alt="">
    Feeship</a>
    </div>

    </div>
    
    <div class="px-5 py-8 w-6/12 ">
    <input type="text" class="w-2/4	width: 50% h-9" > 
    <button class="text-white h-9 bg-blue-800 w-1/4 background-color: rgb(30 64 175) hover:bg-sky-700	background-color: rgb(3 105 161);"> <i class="fa-solid fa-magnifying-glass text-white"></i> Tim kiem</button>
    </div>


    <div>
    <i class="fa-regular fa-user"></i>
    <a href="">Đăng ký </a>
    <a href="">Đăng nhập</a>
    </div>

    <div>
    <i class="fa-solid fa-cart-shopping"></i>
    <a href="">Giỏ hàng</a>
    </div>

</header> */}



{/* <div class="bg-sky-500/100 ">
  <header class="py-6 mx-20">
  <nav class="flex flex-row ">
    <div class="logo basis-2/6  text-xl font-semibold  ">
      <img class="w-1/6" src="./img/2228f38cf84d1b8451bb49e2c4537081.png" alt="">
      <p>freeship</p>
    </div>
 

    <div class="button flex ">
      <div>
        <input type="text" class="w-10/12">
        <button>Tim kiem</button>
      </div>

      <div>
        <i class="fa-regular fa-user"></i>
        <a href="">Đăng ký </a>
        <a href="">Đăng nhập</a>

        <i class="fa-solid fa-cart-shopping"></i>
        <a href="">Giỏ hàng</a>
      </div>
    </div>
    </nav>
  </header>
</div> */}