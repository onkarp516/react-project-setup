export const OTPTimeoutMinutes = 5;
export const OTPTimeoutSeconds = 0;
// Mobile Regex
export const MobileRegx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Only character allowed regex
export const alphaRegExp = /^(([a-zA-Z\s]))+$/;
//Only letter accept
export const onlyletterPattern = /^[A-Za-z][A-Za-z\s]*$/;
// Alphanumeric Regex
export const alphaNumericRex = /^[a-zA-Z0-9]*$/;
export const drivingLicenseNewRex = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]+$/;

// !Driving Licence
// !example=> MH12 20190034760
export const drivingLicenseReg =
  /^(([A-Z]{2}[0-9]{2})()|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;

// export const drivingLicenseReg = /^(([A-Z]{2}[0-9]{2})(( )|(-)|())|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;

export const MobRegx = /^[6-9]\d{9}$/;
export const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
// !url regular expression
export const urlRegExp =
  /^((https?):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;

// AdharNo Regex
export const numericRegExp =
  /^((\\+[7-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

export const onlydigitsRegExp = /^[0-9]*$/;

export const onlydigitswithdecimalRegExp = /(?<=^| )\d+(\.\d+)?(?=$| )/;

export const ADHAAR_REGEX = "^[2-9]{1}[0-9]{11}$";

export const ifsc_code_regex = "^[A-Z]{4}0[A-Z0-9]{6}$";

export const pan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

export const SUPPORTED_FORMATS_IMG = ["image/jpg", "image/jpeg", "image/png"];
export const SUPPORTED_FORMATS_PDF = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const pincodeReg = /^[1-9][0-9]{5}$/;

export const postalCode = /(^\d{6}$)|(^\d{5}-\d{4}$)/;

export const bankAccountNumber = /^\d{6,18}$/;

export const characterRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const Accepts_numeric_regex = /^(0|[1-9][0-9]*)$/;

export const only_alphabets = /^[a-zA-Z\s]+$/;

export const alphanumericRegEx = /^[\w\s]*$/;

export const alphanumericWithCommaRegEx = /^[\w\s,_@./!@#$%^&*()-_+]*$/;

export const doubleNumRegEx = /^[0-9]+(\.[0-9]+)?$/;

export const gstnoRegEx =
  /^([0][1-9]|[1-2][0-9]|[3][0-8])[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/;

export function arrSort(arr) {
  return arr.sort((a, b) => a - b);
}

export function findArrayElementByProductId(arr, productData, filters) {
  let filterIds = filters.map((v) => v.subfilterId);
  let productId = productData.productId;
  let final_state;
  let finalfilterIds = arrSort(filterIds);
  if (filterIds != undefined && arr.length > 0) {
    final_state = arr.find((item) => {
      let itemFiltersIds = arrSort(item.filterIds);
      if (
        item.id === productId &&
        itemFiltersIds.join(",") == finalfilterIds.join(",")
      ) {
        return item;
      }
    });
  }
  return final_state;
}

export function printProductName(productName) {
  return productName.length > 15
    ? productName.substr(0, 13) + "..." + productName.slice(-4)
    : productName;
}

export function printSimilarProductName(productName) {
  return productName.length > 15
    ? productName.substr(0, 20) + "..." + productName.slice(-4)
    : productName;
}

export function truncateString(fullStr, strLen, separator) {
  //! http://jsfiddle.net/2eUYN/1/
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || "...";

  var sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
}

export function truncateLastString(fullStr, strLen, separator) {
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || "...";

  return fullStr.substr(0, strLen) + separator;
}

export const getSelectValue = (opts, val) => {
  return opts.find((o) => o.value === val);
};

export const getSelectOrgValue = (opts, val) => {
  return opts.find((o) => o.org_val === val);
};

export const CheckBillExistInSelectedList = (
  selected_lst,
  find_arr,
  current_selected
) => {
  let res = false;
  find_arr.map((v) => {
    v.list.map((vi) => {
      if (
        selected_lst.includes(vi.srv_trno) &&
        parseInt(vi.srv_trno) == parseInt(current_selected)
      ) {
        res = true;
      }
    });
  });
  return res;
};

export const OnlyEnterNumbers = (e) => {
  var regex = new RegExp("^[0-9]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);

  if (regex.test(str)) {
    return true;
  }
  e.preventDefault();
  return false;
};

export const OnlyEnterAlphaNumbers = (e) => {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);

  if (regex.test(str)) {
    return true;
  }
  e.preventDefault();
  return false;
};

export const OnlyEnterAlphaNumberswithspace = (e) => {
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);

  if (regex.test(str)) {
    return true;
  }
  e.preventDefault();
  return false;
};

export const getSelectLotteryArrValue = (opts, val) => {
  return opts.filter((o) => val.includes(o.lt_code));
};

export const getSelectCustomerArrValue = (opts, val) => {
  return opts.filter((o) => val.includes(o.outlet_id));
};

export const ArraySplitChunkElement = (inputArray, perChunk = 10) => {
  var result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
};

export const ordinal_suffix_of = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};
