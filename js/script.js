document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       SCROLL ANIMATION
    ====================================== */

    const fadeElements = document.querySelectorAll(".fade-up");

    if (fadeElements.length > 0) {

        if ("IntersectionObserver" in window) {

            const fadeObserver = new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            fadeObserver.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


            fadeElements.forEach(function (element) {

                fadeObserver.observe(element);

            });

        } else {

            fadeElements.forEach(function (element) {

                element.classList.add("show");

            });

        }

    }



    /* =====================================
       CONSTRUCTION PROCESS
    ====================================== */

    const processSlides =
        document.querySelectorAll(".process-slide");

    const processNavs =
        document.querySelectorAll(".process-nav");

    const processStep =
        document.querySelector(".process-step span");

    const processTitle =
        document.querySelector(".process-title");

    const processDescription =
        document.querySelector(".process-description");

    const progressBar =
        document.querySelector(
            ".process-progress .progress-bar span"
        );

    const progressPercent =
        document.querySelector(
            ".progress-label strong"
        );


    const processData = [

        {
            number: "01",
            title: "現地調査・整地",
            description:
                "現場の状況を確認し、建設予定地の地盤状況や周辺環境、法令上の条件を調査し、安全かつ円滑な施工計画の基礎となる情報を収集します。",
            progress: 0
        },

        {
            number: "02",
            title: "基礎工事",
            description:
                "建物を支える基礎をづくり、地盤の特性に合わせた鉄筋コンクリート基礎工事により、建物の安全性を足元から確実に支えます。",
            progress: 15
        },

        {
            number: "03",
            title: "鉄骨工事",
            description:
                "建物の骨格となる鉄骨を現場で正確に組み上げ、安全で強固な構造体を形成する重要な工程です。",
            progress: 30
        },

        {
            number: "04",
            title: "型枠工事",
            description:
                "高い精度で枠を組み上げてコンクリートの流し込みを支え、美しい仕上がりと建物の強度を左右する大切な工程です。",
            progress: 45
        },

        {
            number: "05",
            title: "コンクリート工事",
            description:
                "高品質な生コンクリートを現場で緻密に打設・締固めを行い、建物の寿命と耐震性を根本から支える頑強なコンクリート構造体を築き上げます。",
            progress: 60
        },

        {
            number: "06",
            title: "開口・内装工事",
            description:
                "開口部の確実な建具取付けと内装の細部までこだわり抜いた仕上げにより、居住空間の快適性と安全性を形にします。",
            progress: 75
        },

        {
            number: "07",
            title: "外装工事",
            description:
                "外壁や外装の仕上げ材を丁寧に施工し、建物の美観を高めながら雨風や紫外線から躯体を守ります。",
            progress: 90
        },

        {
            number: "08",
            title: "外構工事",
            description:
                "敷地全体の機能性と意匠性を考慮し、境界ブロック、舗装、植栽などを施工して外部空間の価値を高めます。",
            progress: 100
        }

    ];


    function showProcess(index) {

        if (!processData[index]) {
            return;
        }


        processSlides.forEach(function (slide, slideIndex) {

            if (slideIndex === index) {

                slide.classList.add("active");

            } else {

                slide.classList.remove("active");

            }

        });


        processNavs.forEach(function (nav, navIndex) {

            nav.classList.remove("active");
            nav.classList.remove("completed");


            if (navIndex < index) {

                nav.classList.add("completed");

            }


            if (navIndex === index) {

                nav.classList.add("active");

            }

        });


        if (processStep) {

            processStep.textContent =
                processData[index].number;

        }


        if (processTitle) {

            processTitle.textContent =
                processData[index].title;

        }


        if (processDescription) {

            processDescription.textContent =
                processData[index].description;

        }


        if (progressBar) {

            progressBar.style.width =
                processData[index].progress + "%";

        }


        if (progressPercent) {

            progressPercent.textContent =
                processData[index].progress + "%";

        }

    }


    processNavs.forEach(function (nav) {

        nav.addEventListener("click", function () {

            const index =
                parseInt(
                    nav.getAttribute("data-slide"),
                    10
                );


            if (!isNaN(index)) {

                showProcess(index);

            }

        });

    });


    if (processSlides.length > 0) {

        showProcess(0);

    }



    /* =====================================
       PROJECT FILTER
    ====================================== */

    const filterButtons =
        document.querySelectorAll(
            ".projects-filter button"
        );

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                button.getAttribute("data-filter");


            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            projectCards.forEach(function (card) {

                const category =
                    card.getAttribute("data-category");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });



    /* =====================================
       HEADER
    ====================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    const dropdownToggle =
        document.querySelector(".dropdown-toggle");

    const dropdownMenu =
        document.querySelector(".dropdown-menu");


    const allNavLinks =
        nav
            ? nav.querySelectorAll(".nav-list > li > a")
            : [];


    const normalNavLinks =
        nav
            ? nav.querySelectorAll(
                ".nav-list > li:not(.nav-dropdown) > a"
            )
            : [];


    const dropdownLinks =
        dropdownMenu
            ? dropdownMenu.querySelectorAll("a")
            : [];



    /* =====================================
       ACTIVE RESET
    ====================================== */

    function resetNavActive() {

        /*
         * 通常ナビ
         */

        allNavLinks.forEach(function (link) {

            link.classList.remove("active");

        });


        /*
         * ドロップダウン4項目
         */

        dropdownLinks.forEach(function (link) {

            link.classList.remove("active");

        });

    }



    /* =====================================
       HAMBURGER
    ====================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                const opened =
                    nav.classList.contains("active");


                if (opened) {

                    /*
                     * ハンバーガーを閉じる
                     */

                    nav.classList.remove("active");

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                } else {

                    /*
                     * ハンバーガーを開く
                     */

                    nav.classList.add("active");

                    menuToggle.classList.add("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    }



/* =====================================
   通常ナビ
====================================== */

normalNavLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /*
             * リンク先を取得
             */

            const href =
                link.getAttribute("href");


            /*
             * activeをリセット
             */

            allNavLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            /*
             * クリックしたナビをactive
             */

            link.classList.add("active");

            /*

dropdownToggle.classList.remove("active");

dropdownToggle.classList.remove("open");

dropdownMenu.classList.remove("open");

dropdownToggle.setAttribute(
    "aria-expanded",
    "false"
);




            /*
             * スマホのハンバーガーメニューを閉じる
             */

            if (nav && menuToggle) {

                nav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            /*
             * 外部ページへのリンク
             *
             * contact.html などは
             * 通常のページ遷移にする
             */

            if (
                href &&
                !href.startsWith("#")
            ) {

                return;

            }


            /*
             * 同一ページ内リンク
             */

            if (
                href &&
                href.charAt(0) === "#"
            ) {

                event.preventDefault();

                const target =
                    document.querySelector(href);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});




/* =====================================
   ABOUT LINK
   親項目はAbout Usへ移動し、子項目は各会社情報へ移動
====================================== */

if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (event) {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (nav && menuToggle) {
            nav.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }

        // Mobile displays the submenu links directly; keep the parent as an About link.
        if (isMobile || !dropdownMenu) return;

        // First desktop click opens the submenu. A later click follows the About link.
        if (!dropdownMenu.classList.contains("open")) {
            event.preventDefault();
            dropdownMenu.classList.add("open");
            dropdownToggle.classList.add("open", "active");
            dropdownToggle.setAttribute("aria-expanded", "true");
        }
    });
}

/* =====================================
   DROPDOWN LINKS
====================================== */

dropdownLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /*
             * 目的地
             */

            const href =
                link.getAttribute("href");


            /*
             * 4項目のactiveを解除
             */

            dropdownLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            /*
             * 通常ナビのactiveを解除
             */

            normalNavLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            /*
             * 地域に根差してのactiveを解除
             */

            dropdownToggle.classList.remove("active");

            dropdownToggle.classList.remove("open");


            /*
             * ドロップダウンを閉じる
             */

            dropdownMenu.classList.remove("open");

            dropdownToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            /*
             * クリックした4項目だけactive
             */

            link.classList.add("active");


            /*
             * スマホのハンバーガーだけ閉じる
             */

            if (nav && menuToggle) {

                nav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            /*
             * 目的地へ移動
             */

            if (href && href.charAt(0) === "#") {
                const target = document.getElementById(href.slice(1));
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }

        }
    );

});

    /* =====================================
       HEADER OUTSIDE CLICK
    ====================================== */

    document.addEventListener(
        "click",
        function (event) {

            /*
             * ハンバーガーが開いている場合
             *
             * メニュー内部をクリックしても
             * 閉じない
             */

            if (
                nav &&
                menuToggle &&
                nav.classList.contains("active")
            ) {

                if (
                    nav.contains(event.target) ||
                    menuToggle.contains(event.target)
                ) {

                    return;

                }

            }


            /*
             * ハンバーガーの外側をクリックしたら
             * ハンバーガーだけ閉じる
             */

            if (
                nav &&
                menuToggle &&
                nav.classList.contains("active") &&
                !nav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                nav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (
                dropdownMenu &&
                dropdownToggle &&
                !dropdownMenu.contains(event.target) &&
                !dropdownToggle.contains(event.target)
            ) {
                dropdownMenu.classList.remove("open");
                dropdownToggle.classList.remove("open");
                dropdownToggle.setAttribute("aria-expanded", "false");
            }

        }
    );



    /* =====================================
       ESC KEY
    ====================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (nav) {

                    nav.classList.remove("active");

                }


                if (menuToggle) {

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );



    /* =====================================
       IMAGE FALLBACK
    ====================================== */

    const visualCards =
        document.querySelectorAll(
            ".service-card, .project-card"
        );


    visualCards.forEach(function (card) {

        card.querySelectorAll("img").forEach(
            function (image) {

                image.addEventListener(
                    "load",
                    function () {

                        card.classList.add("show");

                    }
                );


                if (image.complete) {

                    card.classList.add("show");

                }

            }
        );

    });


});
