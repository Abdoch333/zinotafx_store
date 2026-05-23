const products = [
    {
        id: 1,
        name: "حذاء مريح عصري (سلايدز)",
        category: "shoes",
        price: 1900,
        images: [
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/8fe1ec5a-9d8f-4221-8749-58a8c7cd7d5e.jpg",
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/0579f3c3-c03e-4259-addf-04d6ef501979.jpg",
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/1b72631e-e888-41f6-b5ce-771517446396.jpg"
        ],
        tag: "جديد",
        type: "new",
        desc: "حذاء سلايدز عصري ومريح جداً، مثالي للاستخدام اليومي والمنزلي، يتميز بتصميم أنيق وجودة عالية.",
        specs: {
            "المادة": "مطاط عالي الجودة",
            "المقاسات": "40, 41, 42, 43, 44",
            "الألوان": "أزرق، أسود، رمادي"
        },
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["#0000FF", "#000000", "#808080"]
    },
    {
        id: 2,
        name: "صندل عصري مريح",
        category: "shoes",
        price: 2700,
        images: [
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/fcc2d21e-239c-4844-800f-0c051d95cdcf.png",
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/40b827e6-d0e1-4281-b533-b0ae3fca2e87.png"
        ],
        tag: "جديد",
        type: "new",
        desc: "صندل عصري بتصميم عملي ومريح، يتميز بأربطة قابلة للتعديل ونعل متين يوفر الراحة طوال اليوم.",
        specs: {
            "المادة": "مواد صناعية عالية الجودة",
            "المقاسات": "40, 41, 42, 43, 44",
            "الستايل": "ستايلين متاحين"
        },
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["#000000"]
    },
    {
        id: 3,
        name: "طقم كاجوال عصري",
        category: "clothing",
        price: 3800,
        images: [
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/93010cbb-a05e-41e7-bae2-ad84ae699603.jpg",
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/5352efce-9089-4f61-9bcd-7b435dce9646.jpg",
            "https://hsxmoiojpzgjdtpprylz.supabase.co/storage/v1/object/public/images/c3c391c0-ba2e-4ecd-94b7-5cd908b0902d.jpg"
        ],
        tag: "جديد",
        type: "new",
        desc: "طقم ملابس كاجوال بتصميم عصري وأنيق، مصنوع من قماش مريح عالي الجودة، مثالي للإطلالات اليومية المتميزة.",
        specs: {
            "المادة": "قطن مريح عالي الجودة",
            "المقاسات": "M, L, XL, 2XL, 3XL",
            "الألوان": "3 ألوان متاحة"
        },
        sizes: ["M", "L", "XL", "2XL", "3XL"],
        colors: ["#000000", "#FFFFFF", "#A19088"] // ألوان افتراضية (أسود، أبيض، رمادي) - يمكنك تعديلها
    }
];
