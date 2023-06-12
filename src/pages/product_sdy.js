import Navigation from "../components/navigation";
import axios from "axios";
import footer from "../components/footer";
import {useState, useEffect} from "../../lib";

const ProductPage_sdy = function(id){
    const param = new URLSearchParams(location.search)
    const id_cate = param.get('id_categories')
    const [data, setData] = useState([])
    const [book, setBook] = useState([])
    const [sl, setsl] = useState(0)
    const [relatedBook, setRelatedBook] = useState([])

    
    
    useEffect(function () {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(function (dataAxios) {
                setBook(dataAxios.data)

            })
    }, [])
    useEffect(function(){
        axios.get(`http://localhost:3000/books?categories.id=${id_cate}`)
        .then(function(data){
            setRelatedBook(data.data)
        })
    }, [])

    console.log(book)
    console.log(relatedBook)
    return /*html*/`
    
    ${Navigation()}
      <div class="w-full mb-[100px]">
      <div class="w-[1000px] mx-auto">
          <div class="flex">
              <div class="border-r-[1px] w-[500px] mx-auto">
                  <img src="${book.images?.[0].base_url}" class="w-[444px] h-[444px]" alt="" srcset="">
  
                  <div class="flex w-[64px] h-[64px]">
                      ${book.images?.slice(0, 4).map(function (image) {
                        return `
                         <img class="w-[64px] h-[64px]" src="${image.base_url}" alt="">`
                        }).join('')}
                  </div>
              </div>
  
              <div>
                  <div class="flex text-[13px] leading-[20px] font-normal pl-3 pt-3">
                      <p class="text-[#242424]">Tác giả:</p>
                      <a href="" class="text-[#0D5CB6] ml-1 hover:text-red-500">${book.authors ? book.authors[0].name
            : "Không có tác giả"}</a>
                  </div>
  
                  <div class="pl-3">
                      <h1 class="uppercase text-[23px] leading-[32px] font-normal text-[#242424]">${book.name}</h1>
                      <p class="text-[15px] leading-[24px] font-normal text-[#787878]">Đã bán: ${book.quantity_sold ?
            book.quantity_sold?.value : "0"
        }</p>
                  </div>
  
                  <div class="flex bg-[#FAFAFA] rounded-[4px] w-[479px] h-[103px] m-3 p-1">
                      <h1 class="text-[32px] leading-[40px] font-normal text-[#FF424E] pt-3">${book.current_seller?.price}₫
                      </h1>
                      <p class="text-[13px] leading-[20px] font-normal text-[#808089] pt-8 pl-2">
                          <del>${book.original_price}₫</del>
                      </p>
                      <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-8 ml-2">
                          <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5"></p>
                      </div>
                  </div>
  
                  <div class="border-t-[1px] p-5">
                      <p class="text-[15px] leading-[24px] font-normal text-[#000000] ">Số lượng:</p>
        
                      <div class="flex pt-2">
                          <button class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                              <p>-</p>
                          </button>
  
                          <div>
                              <input type="text" class="border-[1px] border-[#ECECEC] bg-[#FFFFFF] h-[30px] w-[30px] outline-0"
                                  value="0">
                          </div>
  
                          <button class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                              <p>+</p>
                          </button>
                      </div>
  
                      <div class="w-[300px] h-[48px] bg-[#FF3945] rounded-[4px] mt-3">
                          <a href="" class="text-[14px] leading-[24px] font-normal text-[#FFFFFF] capitalize">
                              <p class="w-[300px] h-[48px] rounded-[4px] text-center pt-3 hover:text-black hover:bg-green-500">chọn mua</p>
                          </a>
                      </div>
                  </div>
              </div>
          </div>

          <div class="mx-auto mt-10">
            <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Sản phẩm tương tự</h1>
            <div class="flex mx-auto">
                <div class="grid grid-cols-6 gap-2 mx-auto">
                    ${relatedBook.slice(0,6).map(function(book) {
            return /*html*/`
            <div class="m-3">
            <div class="w-[220px] h-[400px] mx-auto p-9">
            <a href="/product_sdy/${book.id}?id_categories=${book.categories?.id}">
                <img src="${book.images?.[0].base_url}" class="w-[200px] h-[200px]" />
                <h3>${book.name}</h3>
                </a>
            </div>

        
        </div>
                    `
        }).join('')}
                </div>
            </div>
        </div>

      <div class="mx-auto mt-1">
            <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Thông tin chi tiết</h1>

            <div class="flex w-[auto] h-[auto] rounded-[4px] mt-3">
                <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                    <p class="mt-[10px] ml-5">${book.specifications?.[0]?.attributes[0]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[1]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[2]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[3]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[4]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[5]?.name ?? ''}</p>
                    <p class="mt-[20px] ml-5">${book.specifications?.[0]?.attributes[6]?.name ?? ''}</p>
                </div>

                <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                    <p class="mt-[10px]">${book.specifications?.[0]?.attributes[0]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[1]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[2]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[3]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[4]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[5]?.value ?? ''}</p>
                    <p class="mt-[20px]">${book.specifications?.[0]?.attributes[6]?.value ?? ''}</p>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Mô tả sản phẩm</h1>

            <div class="text-[14px] leading-[21px] font-normal text-[#333333] p-1">
                <p>${book.description}</p>
            </div>
        </div>
    </div>
</div>
            

        ${footer()}
    `
    
}


export default ProductPage_sdy