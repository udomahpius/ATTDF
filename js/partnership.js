const partnershipItem = [
    {
        id:1,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-1.jpg"
    },
    // {
    //     id:2,
    //     download:`<a href="" download="" class="text-white">Download</a>`,
    //     img:"../img/attdf-2.jpg"
    // },
    {
        id:3,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-3.jpg"
    },
    {
        id:4,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-4.jpg"
    },
    {
        id:5,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-5.jpg"
    },
    {
        id:6,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-6.jpg"
    },
    {
        id:7,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-7.jpg"
    },
    {
        id:8,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-8.jpg"
    },
    {
        id:9,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-9.jpg"
    },
    {
        id:10,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-10.jpg"
    },
    {
        id:11,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-11.jpg"
    },
    {
        id:12,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-12.jpg"
    },
    {
        id:13,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-13.jpg"
    },
    {
        id:14,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-14.jpg"
    },
    {
        id:15,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-15.jpg"
    },
    {
        id:16,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-16.jpg"
    },
    {
        id:17,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-17.jpg"
    },
    {
        id:18,
        download:`<a href="" download="" class="text-white">Download</a>`,
        img:"../img/attdf-18.jpg"
    },
]



const displayItem = (() =>{
    let itemElement = document.querySelector(".partnershipCard");

    partnershipItem.map((item) =>{
        const {id, download, img} = item

        itemElement.innerHTML +=`
         <div class="col-lg-6 col-xl-4">
                        <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
                            <div class="blog-img position-relative overflow-hidden">
                                <img src=${img} class="img-fluid w-100 glightbox " alt="">
                                <div class="bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0">${download}</div>
                            </div>
                        </div>
                    </div>
        `

    })
})
displayItem()