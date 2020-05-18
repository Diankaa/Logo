$(function () {
  function changeStakingProfit(item) {
    const btcValues = {
      day: {
        btt: "134905.51xxx",
        trx: "678.51xxxx",
        usdt: "45608.57xxx",
        btc: "14508.51xxx",
      },
      week: {
        btt: "45879.51xxx",
        trx: "5205.5xxx",
        usdt: "85708.67xxx",
        btc: "145608.5xxxx",
      },
      month: {
        btt: "45908.55xxx",
        trx: "555.516xxx",
        usdt: "14545.5xxxx",
        btc: "26808.4xxxx",
      },
    };

    const trxValues = {
      day: {
        btt: "19908.51xxx",
        trx: "880.51xxxx",
        usdt: "16908.57xxx",
        btc: "14508.51xxx",
      },
      week: {
        btt: "21906.51xxx",
        trx: "12000.5xxx",
        usdt: "55608.77xxx",
        btc: "19908.51xxx",
      },
      month: {
        btt: "13408.55xxx",
        trx: "777.516xxx",
        usdt: "12345.5xxxx",
        btc: "39808.4xxxx",
      },
    };

    let profitValues = "";
    const cryptName =
      item.attr("data-profit-btn") || item.attr("data-staking-profit");

    if (cryptName == "trx") {
      profitValues = trxValues;
    } else {
      profitValues = btcValues;
    }
    const cryptDate =
      item.find(".select-text").attr("data-date") ||
      item.find("option").attr("data-crypt-date");

    const profitBtt = $("[data-" + cryptName + "-btt]").find(".crypt-num__sum");
    const profitUsdt = $("[data-" + cryptName + "-usdt]").find(
      ".crypt-num__sum"
    );
    const profitTrx = $("[data-" + cryptName + "-ytx]").find(".crypt-num__sum");
    const profitBtc = $("[data-" + cryptName + "-btc]").find(".crypt-num__sum");

    const dataDate = profitValues[cryptDate];

    $.each(dataDate, function (crypt, value) {
      const xPosition = value.search("x");
      const valueNum = value.substring(0, xPosition);
      const xLength = value.slice(xPosition).length;

      dataDate[crypt] =
        valueNum +
        "<span class='crypt-num__sum--gray'>" +
        "0".repeat(xLength) +
        "</span>";
      return value;
    });

    profitTrx.html(dataDate.trx);
    profitUsdt.html(dataDate.usdt);
    profitBtc.html(dataDate.btc);
    profitBtt.html(dataDate.btt);
  }

  function changeProfitValue(targetItem) {
    const curAprValue =
      targetItem.find("img").attr("data-profit-cur") ||
      targetItem.find("option").attr("data-profit-crypt");

    const profitAprValue = $(".apr-value");
    const profitRoiValue = $(".roi-value");

    switch (curAprValue) {
      case "(trx)":
        profitAprValue.each(function () {
          $(this).html("230 <span class='profit-value__per'> % </span>");
        });
        profitRoiValue.each(function () {
          $(this).html("330 <span class='profit-value__per'> Days </span>");
        });
        break;
      default:
        profitAprValue.each(function () {
          $(this).html("650 <span class='profit-value__per'> % </span>");
        });
        profitRoiValue.each(function () {
          $(this).html("230 <span class='profit-value__per'> Days </span>");
        });
    }
  }

  function initSelect(item) {
    const select = item.siblings(".select");
    let langArray = [];

    item.find("option").each(function () {
      const getImg = $(this).attr("data-img") || "";
      const text = $(this).text();
      const getCrypt = $(this).attr("data-crypt") || "";
      const getColorText = $(this).attr("data-color");
      const getProfitCrypt = $(this).attr("data-profit-crypt") || "";
      const profitCryptX = $(this).attr("data-profit-x") || "";
      const getCryptDate = $(this).attr("data-crypt-date");
      const className = "select-list__item";
      const img = getImg
        ? `<img src="${getImg}" alt="#" data-crypt="${getCrypt}"
    data-profit-crypt="${getProfitCrypt}"/>`
        : "";
      const crypt = getCrypt
        ? `<span class="select-crypt"> ${getCrypt} </span>`
        : "";
      const profitCrypt = getProfitCrypt
        ? `<span class="text-x text-upper">${profitCryptX}<span class="text-upper text-gray">${getProfitCrypt}</span></span>`
        : "";
      const colorText = getColorText
        ? `</span><span class="text-gray"> ${getColorText} </span>`
        : "";
      const cryptDate = getCryptDate ? `data-date="${getCryptDate}"` : "";

      const item = {
        select: `<li class="${className}"> ${img} 
        <span class="select-text"
        ${cryptDate} > ${text} ${profitCrypt} </span>
        ${colorText}  ${crypt} </li>`,
        list: `${img} <span class="select-text"
      ${cryptDate} > ${text} ${profitCrypt} </span>  ${colorText}`,
      };
      langArray.push(item);
    });

    const selectList = [];
    const currentItem = [];

    langArray.forEach(function (item) {
      selectList.push(item.select);
      currentItem.push(item.list);
    });

    selectList.shift();

    select.find(".select-list").html(selectList);
    select.find(".select-button").html(currentItem[0]);
  }

  $(".main-select").each(function () {
    initSelect($(this));
    changeSelect($(this));

    if ($(this).is("[data-profit]")) {
      changeProfitValue($(this));
    }

    if ($(this).is("[data-staking-profit]")) {
      changeStakingProfit($(this));
    }
  });

  function initDropdown(item) {
    item.find(".select-dropdown").toggle();

    $(window).click(function (e) {
      if (
        !$(e.target).hasClass("select-btn") &&
        !$(e.target).hasClass("select-dropdown")
      ) {
        item.find(".select-dropdown").hide();

        hideArrow(item);
      }
    });
  }

  function changeSelect(item) {
    const customerSelect = item.siblings(".select");
    const customerBtn = customerSelect.find(".select-button");
    console.log(customerBtn);

    customerSelect.find(".select-list li").click(function () {
      let getCurrentcrypt = customerBtn.find("img").attr("data-crypt") || "";
      const currentSelectContent = $(this).clone();
      currentSelectContent.find(".select-crypt").remove();

      const selectContent =
        customerBtn.get(0).innerHTML +
        `<span class="select-crypt"> ${getCurrentcrypt} </span>`;
      $(this).html(selectContent);
      customerBtn.html(currentSelectContent.get(0).innerHTML);

      if (item.is("[data-profit]")) {
        changeProfitValue(customerBtn);
      }

      if (item.is("[data-staking-profit]")) {
        changeStakingProfit(customerBtn);
      }
    });
  }

  function initArrow(item) {
    item.find(".select-arrow").toggleClass("active");
  }

  function hideArrow(item) {
    item.find(".select-arrow").removeClass("active");
  }

  $(".select").each(function () {
    const select = $(this);
    if ($(window).width() > 768) {
      if (select.attr("data-event") == "hover") {
        select
          .mouseenter(function () {
            console.log("y");

            select.find(".select-dropdown").show();
            initArrow(select);
          })
          .mouseleave(function () {
            console.log("s");
            select.find(".select-dropdown").hide();
            hideArrow(select);
          });
      } else {
        select.find(".select-btn").click(function (e) {
          e.preventDefault();
          initDropdown(select);
          initArrow(select);
        });
      }
    } else {
      select.find(".select-btn").click(function (e) {
        e.preventDefault();
        initDropdown(select);
        initArrow(select);
      });
    }
  });

  $(".dashboard__table-body tr").each(function () {
    const tableItem = $(this);
    $(this)
      .find(".select-btn")
      .click(function (e) {
        initArrow(tableItem);
        tableItem.find(".crypt-list").each(function () {
          $(this).toggleClass("active");
        });
      });
  });

  $("#menu-toggle").click(function () {
    $(".header__topmenu").toggleClass("mobile");
    $("body").toggleClass("disabled");
  });

  $(".table-scroll").each(function () {
    const moveBtn = $(this).find(".table-move");

    if (
      $(this).width() <
      parseInt($(this).find(".section-table").css("min-width"))
    ) {
      moveBtn.removeClass("hidden");
      $(this).addClass("scroll-hide");
      $(this).scroll(function () {
        $(this).scrollTop() > 0 || $(this).scrollLeft() > 0
          ? moveBtn.addClass("hidden")
          : moveBtn.removeClass("hidden");
      });
    } else {
      moveBtn.addClass("hidden");
      $(this).find(".dashboard__table-body").css("overflow", "auto");
    }
  });

  $("button").mouseenter(function () {
    const bg = $(this).attr("data-hover");
    console.log(bg);

    $(this).css("background", bg);
  });

  $("button").mouseleave(function () {
    console.log("u");

    const bgg = $(this).attr("data-color");
    $(this).css("background", bgg);
  });
});
