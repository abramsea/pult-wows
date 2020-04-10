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
            name: "Gametrix vTrack MKI",
            image: "9.png",
            link: "naushniki-gametrix-vtrack-mki",       
        },

        {
            name: "Beyerdynamic DT 290 MK II",
            image: "10.png",
            link: "garnitura-biamp-dt-290-mk-ii--200-80-ohm-",       
        },

        {
            name: "KOSS GMR-540-ISO",
            image: "11.png",
            link: "naushniki-koss--gmr-540-iso",       
        },

        {
            name: "Sennheiser GSP 300",
            image: "12.png",
            link: "naushniki-sennheiser-gsp-300",       
        },

        {
            name: "Sennheiser GSP 350",
            image: "13.png",
            link: "naushniki-sennheiser-gsp-350",       
        },

        {
            name: "KOSS GMR-545-AIR USB",
            image: "14.png",
            link: "naushniki-koss-gmr-545-air-usb",       
        },

        {
            name: "Beyerdynamic Custom GAME",
            image: "15.png",
            link: "naushniki-beyerdynamic-custom-game",       
        },

        {
            name: "Ritmix RH-575M GAMING",
            image: "16.png",
            link: "naushniki-ritmix-rh-575m-gaming",       
        },


        {
            name: "Ritmix RH-570M GAMING",
            image: "17.png",
            link: "naushniki-ritmix-rh-570m-gaming",       
        },

        {
            name: "Superlux HMC631 Dark Grey",
            image: "18.png",
            link: "igrovaya-garnitura-superlux-hmc631-dark-grey",       
        },

        {
            name: "Audio Technica ATH-G1",
            image: "19.png",
            link: "igrovaya-garnitura-audio-technica-ath-g1",       
        },

        {
            name: "Superlux HMC681EVO",
            image: "20.png",
            link: "igrovaya-garnitura-superlux-hmc681evo",       
        },

        {
            name: "Audio Technica ATH-G1WL",
            image: "21.png",
            link: "igrovaya-garnitura-audio-technica-ath-g1wl",       
        },

        {
            name: "Superlux HMD660X",
            image: "22.png",
            link: "igrovaya-garnitura-superlux-hmd660x",       
        },

        {
            name: "Superlux HMC660X",
            image: "23.png",
            link: "igrovaya-garnitura-superlux-hmc660x",       
        },

        {
            name: "Superlux HMC631 White",
            image: "24.png",
            link: "igrovaya-garnitura-superlux-hmc631-white",       
        },

        {
            name: "Superlux HMC660E",
            image: "25.png",
            link: "igrovaya-garnitura-superlux-hmc660e",       
        },

        {
            name: "Sennheiser GAME ZERO black",
            image: "26.png",
            link: "naushniki-sennheiser-g4me-zero-black",       
        },

        {
            name: "Sennheiser GAME ONE white",
            image: "27.png",
            link: "naushniki-sennheiser-g4me-one-white",       
        },

        {
            name: "Razer ManO'War (RZ04-01490100-R3G1)",
            image: "28.png",
            link: "naushniki-razer-mano-war",       
        },

        {
            name: "KOSS SB-45 USB",
            image: "29.png",
            link: "naushniki-koss-sb-45-usb",       
        },

        {
            name: "Razer Thresher 7.1 USB (RZ04-02230100-R3M1)",
            image: "30.png",
            link: "naushniki-razer-thresher-7-1-usb--rz04-02230100-r3m1",       
        },

        {
            name: "Koss SB-45",
            image: "31.png",
            link: "naushniki-koss-sb45",       
        },

        {
            name: "KOSS GMR-545-AIR",
            image: "32.png",
            link: "naushniki-koss-gmr-545-air",       
        },

        {
            name: "KOSS GMR-540-ISO USB",
            image: "33.png",
            link: "naushniki-koss-gmr-540-iso-usb",       
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
