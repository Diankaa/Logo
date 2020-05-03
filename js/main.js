// let langArray = [];
// function initDelect() {}
// $(".main-select").each(function() {
//   $(this).find('option').each(function () {
//     const img = $(this).attr("data-img");
//     console.log($(this));

//     const currency = $(this).attr("data-currency");
//     const text = $(this).text();
//     let colorText = "";
//     if ($(this).attr("data-color")) {
//       colorText = $(this).attr("data-color");
//     }

//     const className = "select-list__item";
//     const item = {
//       select:
//         '<li class="' +
//         className +
//         '"><img src="' +
//         img +
//         '" alt="#" data-cur="' +
//         currency +
//         '"/><span class="select-text">' +
//         text +
//         '</span><span class="select-text--light">' +
//         colorText +
//         '</span><span class="select-currency">' +
//         currency +
//         "</span>",
//       list:
//         '<img src="' +
//         img +
//         '" alt="#" data-cur="' +
//         currency +
//         '"/><span class="select-text">' +
//         text +
//         '</span><span class="select-text--light">' +
//         colorText +
//         "</span>",
//     };
//     langArray.push(item);
//   });
// });

// const selectList = [];
// const currentItem = [];
// langArray.forEach((item) => {
//   selectList.push(item.select);
//   currentItem.push(item.list);
// });

// selectList.shift();
// $("#select-list").html(selectList);

// $(".customer-btn").append(currentItem[0]);

// function initDropdown(item) {
//   item.find(".select-dropdown").toggle();
//   $(window).click(function (e) {
//     if (
//       !$(e.target).hasClass("select-btn") &&
//       !$(e.target).hasClass("select-dropdown")
//     ) {
//       item.find(".select-dropdown").hide();
//     }
//   });
// }

// function changeSelect() {
//   $("#select-list li").click(function () {
//     console.log($(".customer-btn").get(0));

//     const selectImg = $(this).find("img").attr("src");
//     const selectText = $(this).find(".select-text").text();
//     const selectcurrency = $(this).find("img").attr("data-cur");
//     const currentImg = $(".customer-btn").find("img").attr("src");
//     const currentText = $(".customer-btn").find(".select-text").text();
//     const currentCurrency = $(".customer-btn").find("img").attr("data-cur");
//     const currentTextLight = $(".customer-btn")
//       .find(".select-text--light")
//       .text();
//     const selectTextLight = $(this).find(".select-text--light").text();
//     const currentSelectContent =
//       '<img src="' +
//       selectImg +
//       '" alt="#" data-cur="' +
//       selectcurrency +
//       '" /><span class="select-text">' +
//       selectText +
//       '</span><span class="select-text--light">' +
//       selectTextLight +
//       "</span>";
//     $(".customer-btn").html(currentSelectContent);
//     const selectContent =
//       '<img src="' +
//       currentImg +
//       '" alt="#" data-cur="' +
//       currentCurrency +
//       '"/><span class="select-text">' +
//       currentText +
//       '</span><span class="select-text--light">' +
//       currentTextLight +
//       '</span><span class="select-currency">' +
//       currentCurrency +
//       "</span>";
//     $(this).html(selectContent);
//   });
// }

// changeSelect();

// function initArrow(item) {
//   item.find(".btn-arrow").addClass("active");
// }

// function hideArrow(item) {
//   item.find(".btn-arrow").removeClass("active");
// }

// $(".customer-select").each(function () {
//   const select = $(this);
//   if ($(window).width() > 768) {
//     if (select.attr("data-event") == "hover") {
//       select
//         .hover(function () {
//           select.find(".select-dropdown").show();
//           initArrow(select);
//         })
//         .mouseleave(function () {
//           select.find(".select-dropdown").hide();
//           hideArrow(select);
//         });
//     } else {
//       select.find(".select-btn").click(function (e) {
//         initDropdown(select);
//       });
//     }
//   } else {
//     select.find(".select-btn").click(function (e) {
//       initDropdown(select);
//     });
//   }
// });

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
  const currencyName = item.attr("data-profit-btn") || item.attr("data-staking-profit");
  
  if(currencyName == "trx") {
    profitValues = trxValues;
  } else {
    profitValues = btcValues;
  }
  const currencyDate =
    item.find(".select-text").attr("data-date") ||
    item.find("option").attr("data-currency-date");

  const profitBtt = $("[data-" + currencyName + "-btt]").find(".crypt-num__sum");
  const profitUsdt = $("[data-" + currencyName + "-usdt]").find(".crypt-num__sum");
  const profitTrx = $("[data-" + currencyName + "-ytx]").find(".crypt-num__sum");
  const profitBtc = $("[data-" + currencyName + "-btc]").find(".crypt-num__sum");
console.log(profitValues);

  const dataDate = profitValues[currencyDate];  
  
  $.each(dataDate, function (currency, value) {
    const xPosition = value.search("x");
    const valueNum = value.substring(0, xPosition);
    const xLength = value.slice(xPosition).length;

    dataDate[currency] =
      valueNum +
      '<span class="crypt-num__sum--gray">' +
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
  const curAprValue = targetItem.find("img").attr("data-profit-cur") ||
  targetItem.find("option").attr("data-profit-currency");
  
  const profitAprValue = $(".apr-value");
  const profitRoiValue = $(".roi-value");

  switch (curAprValue) {
    case "(trx)":      
      profitAprValue.each(function() {                      
        $(this).html("650 %");
      });
      profitRoiValue.each(function() {
        $(this).html("230 Days");
      });
      break;
    default:
      profitAprValue.each(function() {
        $(this).html("230 %");
      });
      profitRoiValue.each(function() {
        $(this).html("30 Days");
      });
  }
}

function initSelect(item) {
  const select = item.siblings(".customer-select");
  let langArray = [];

  item.find("option").each(function () {
    const getImg = $(this).attr("data-img") || "";
    const text = $(this).text();
    const getCurrency = $(this).attr("data-currency") || "";
    const getColorText = $(this).attr("data-color");
    const getProfitCurrency = $(this).attr("data-profit-currency") || "";
    const profitCurrencyX = $(this).attr("data-profit-x");
    const getCurrencyDate = $(this).attr("data-currency-date");
    const className = "select-list__item";

    const img = getImg
      ? '<img src="' +
        getImg +
        '" alt="#" data-cur="' +
        getCurrency +
        '" data-profit-cur="' +
        getProfitCurrency +
        '"/>'
      : "";
    const currency = getCurrency
      ? "<span class='select-currency'>" + getCurrency + "</span>"
      : "";
    const profitCurrency = getProfitCurrency
      ? "<span class='text-upper'>" +
        profitCurrencyX +
        "</span><span class='text-upper text-gray'>" +
        getProfitCurrency +
        "</span>"
      : "";
    const colorText = getColorText
      ? '</span><span class="text-gray">' + getColorText + "</span>"
      : "";

    const currencyDate = getCurrencyDate
      ? 'data-date="' + getCurrencyDate + '"'
      : "";

    const item = {
      select:
        '<li class="' +
        className +
        '">' +
        img +
        '<span class="select-text"' +
        currencyDate +
        ">" +
        text +
        profitCurrency +
        "</span>" +
        colorText +
        currency,
      list:
        img +
        '<span class="select-text"' +
        currencyDate +
        ">" +
        text +
        profitCurrency +
        "</span>" +
        colorText,
    };
    langArray.push(item);
  });

  const selectList = [];
  const currentItem = [];

  langArray.forEach((item) => {
    selectList.push(item.select);
    currentItem.push(item.list);
  });

  selectList.shift();

  select.find(".select-list").html(selectList);

  select.find(".customer-btn").append(currentItem[0]);
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
    }
  });
}

function changeSelect(item) {
  const customerSelect = item.siblings(".customer-select");
  const customerBtn = customerSelect.find(".customer-btn");
  customerSelect.find(".select-list li").click(function () {
    let getCurrentCurrency = customerBtn.find("img").attr("data-cur") || "";
    const currentSelectContent = $(this).clone();
    currentSelectContent.find(".select-currency").remove();
    const selectContent =
      customerBtn.get(0).innerHTML +
      '<span class="select-currency">' +
      getCurrentCurrency +
      "</span>";
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
  item.find(".btn-arrow").addClass("active");
}

function hideArrow(item) {
  item.find(".btn-arrow").removeClass("active");
}

$(".customer-select").each(function () {
  const select = $(this);
  if ($(window).width() > 768) {
    if (select.attr("data-event") == "hover") {
      select
        .hover(function () {
          select.find(".select-dropdown").show();
          initArrow(select);
        })
        .mouseleave(function () {
          select.find(".select-dropdown").hide();
          hideArrow(select);
        });
    } else {
      select.find(".select-btn").click(function () {
        initDropdown(select);
      });
    }
  } else {
    select.find(".select-btn").click(function () {
      initDropdown(select);
    });
  }
});
