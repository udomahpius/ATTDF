const partnershipgallary = [
    {
        id:1,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
        download:`<a href="" download="" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-1.jpg"
    },
    {
        id:2,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-2.jpg"
    },
    {
        id:3,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-3.jpg"
    },
    {
        id:4,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-4.jpg"
    },
    {
        id:5,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-5.jpg"
    },
    {
        id:6,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-6.jpg"
    },
    {
        id:7,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-7.jpg"
    },
    {
        id:8,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-8.jpg"
    },
    {
        id:9,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-9.jpg"
    },
    {
        id:10,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-10.jpg"
    },
    {
        id:11,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-11.jpg"
    },
    {
        id:12,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-12.jpg"
    },
    {
        id:13,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-13.jpg"
    },
    {
        id:14,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-14.jpg"
    },
    {
        id:15,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-15.jpg"
    },
    {
        id:16,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-16.jpg"
    },
    {
        id:17,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-17.jpg"
    },
    {
        id:18,
        text:"",
        download:`<a href="" download="" class="btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/img-18.jpg"
    },
]



const displaygallary = (() =>{
    let gallaryElement = document.querySelector(".gallery");

    partnershipgallary.map((gallary) =>{
        const {id, text, download, img} = gallary

        gallaryElement.innerHTML +=`
         <div class="col-lg-6 col-xl-4">
                        <div class="gallery-item wow fadeIn" data-wow-delay="0.1s">
                            <div class="overflow-hidden p-4 pb-0">
                                <img src=${img} class="img-fluid w- glightbox" alt="">
                            </div>
                            <div class="p-4">
                                <p class="mb-0">${text}</p>
                                <a >${download}</a>
                            </div>
                        </div>
         </div>
        `

    })
})
displaygallary()