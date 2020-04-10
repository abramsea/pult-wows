"use strict"

    let products = [
        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "5.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },
        
        {
            name: "Audio Technica ATH-ADG1X",
            image: "6.png",
            link: "naushniki-audio-technica-ath-adg1x",       
        },

        {
            name: "Klipsch KG-200",
            image: "7.png",
            link: "naushniki-klipsch-kg-200",       
        },

        {
            name: "KOSS SB-49",
            image: "8.png",
            link: "naushniki-koss-sb-49",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "9.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "10.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "11.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "12.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "13.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "14.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "15.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "16.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },


        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "17.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "18.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "19.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "20.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "21.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "22.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "23.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "24.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "25.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "26.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "27.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "28.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "29.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "30.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "31.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "32.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        },

        {
            name: "Beyerdynamic MMX 300 (2. Generation)",
            image: "33.png",
            link: "naushniki-beyerdynamic-mmx-300--2--generation",       
        }
    ]

    let items = products.map(function(item){
        return `
        <div class="product-card">
            <img src="images/${item.image}" alt="${item.name}" class="product-card__image">
            <h3 class="product-card__title">${item.name}</h3>
        <a target="_blank" href="https://pult.ru/product/${item.link}" class="product-card__button">Смотреть в каталоге</a>
    </div>
        `
    });

    $(".products__row_scripted").append(items);
