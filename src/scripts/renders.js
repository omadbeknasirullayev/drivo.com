"use strict"

renderCars(compactCars)

function renderCars (cars) {
  cars.forEach((item) => {
      const card = createElement("li", "dream__card--item w-[387px]  bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl px-8 py-6 mb-5 hover:bg-[#299674] max-md:w-[320px] max-[830px]:w-[340px] ", 
      `
      <div class="dream__card--item-info">
            <p class="dream__card--item-title text-2xl font-semibold">${item.title}</p>
            <p class="dream__card--item-type text-[16px] text-[#555555]">${item.type}</p>

            <img src="${item.url}" alt="">
          </div>

          <ul class="dream__card--item-about flex flex-wrap justify-between">
            <li class="w-[50%] mt-5">
              <i class='bx bxs-user'></i>
              <span>5 Seats</span>
            </li>
            <li class="w-[50%] mt-5">
              <i class='bx bx-sitemap'></i>
              <span>Automatic</span>
            </li>
            <li class="w-[50%] mt-5">
              <i class='bx bx-file'></i>
              <span>21+ Years</span>
            </li>
            <li class="w-[50%] mt-5">
              <i class='bx bxs-droplet' ></i>
              
              <span>1-lit / 2.5 km</span>
            </li>
          </ul>
      `
      )
      console.log(card)
      dream__card.append(card)
  })
}

