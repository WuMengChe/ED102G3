new Vue({
    el: '#bg_stage',
    data: {
        members: ['會員管理', '管理員管理'],
        lists: ['題庫管理', '行業管理', '課程管理', '文章檢舉管理', '留言檢舉管理', '訂單管理', '明信片素材管理', '公告管理'],

        account: true,
        administrator: false,
        quiz: false,
        industry: false,
        skill_class: false,
        article_report: false,
        message_report: false,
        order_mem: false,
        postcard_material: false,
        announcement: false,
        types: ['實作型', '研究型', '文藝型', '社會型', '企業型', '事務型'],
        typeValues: ['R', 'I', 'A', 'S', 'E', 'C'],

        orders: [],
        orderList: [],



    },
    methods: {
        show(index) {
            if (index == 0) {
                this.account = true;
                this.administrator = false;
                this.quiz = false;
                this.industry = false;
                this.skill_class = false;
                this.article_report = false;
                this.message_report = false;
                this.order_mem = false;
                this.postcard_material = false;
                this.announcement = false;

            } else {
                this.account = false;
                this.administrator = true;
                this.quiz = false;
                this.industry = false;
                this.skill_class = false;
                this.article_report = false;
                this.message_report = false;
                this.order_mem = false;
                this.postcard_material = false;
                this.announcement = false;
            }
            // alert(index);

        },
        showBoard(index) {
            switch (index) {
                case 0:
                    this.quiz = true;
                    this.account = false;
                    this.administrator = false;
                    this.industry = false;
                    this.skill_class = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 1:
                    this.industry = true;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.skill_class = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 2:
                    this.skill_class = true;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 3:
                    this.skill_class = false;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = true;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 4:
                    this.skill_class = false;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = false;
                    this.message_report = true;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 5:
                    this.skill_class = false;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = true;
                    this.postcard_material = false;
                    this.announcement = false;
                    break;
                case 6:
                    this.skill_class = false;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = true;
                    this.announcement = false;
                    break;
                case 7:
                    this.skill_class = false;
                    this.account = false;
                    this.administrator = false;
                    this.quiz = false;
                    this.industry = false;
                    this.article_report = false;
                    this.message_report = false;
                    this.order_mem = false;
                    this.postcard_material = false;
                    this.announcement = true;
                    break;
            }

        },
        SearchMEM: function(e) {
            e.preventDefault();
            $.ajax({
                url: 'backstage_memberSearch.php',
                type: "POST",
                data: new FormData(document.getElementById("search_mem_form")),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data) {
                    $("#oneMem").html(data)
                },
            })
        },


        // detail() {
        //     $(".orderDetail1").show();
        // },
        edit(e) {
            e.target.innerText = "確認";
            $('select').show();
        }

    },
    mounted() {
        axios
            .get('../backstage_order.php?{ORD_NO}')
            .then((res) => { this.orders = res.data; });
        axios
            .get('../backstage_orderDetail.php')
            .then((res) => { this.orderList = res.data; });
    },
    computed: {

    },

});