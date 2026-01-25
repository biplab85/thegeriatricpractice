/* 

 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates

 * and open the template in the editor.

 */

jQuery(document).foundation();

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;

  // Added to allow decimal, period, or delete

  if (charCode == 110 || charCode == 190 || charCode == 46) return true;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }

  return true;
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
}

function getLastPart(url) {
  return url.substr(url.lastIndexOf("/") + 1);
}

//Toggle Captcha

var isGoogleCaptcha = 0;

var pass = false;

var count = 0;

var gothru = true;

var recaptcha1 = null;

if (!window.location.origin) {
  window.location.origin =
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "");
}

jQuery(document).ready(function () {
  var domain = window.location.host;

  var url = window.location.origin;

  var subArr = ["../", "../../", "../../../"];

  var excludeLinkId = ["captchaImage", "refreshBtn"];

  var lastPart = window.location.pathname.split("/").pop();

  var getpath = window.location.pathname;

  var partfile = "";

  if (domain == "localhost") {
    partfile = "/the-geriatric-practice-pte-ltd-2022/";

    /*}else if(domain=="thegeriatricpractice.sg"){

            partfile="/";*/
  } else if (
    domain == "www.thegeriatricpractice.sg" ||
    domain == "thegeriatricpractice.sg" ||
    domain == "geriapractice.showcase.sg"
  ) {
    partfile = "/";
  } else {
    partfile = "/";
  }

  url = url + partfile;

  function sendForm(url) {
    pass = true;

    ++count;

    if (count == 1) {
      jQuery("#foo").spin("modal");

      jQuery.getScript(url + "js/cryptojs/aes.js");

      jQuery.getScript(url + "js/cryptojs/aes-json-format.js", function () {
        jQuery("body")
          .find("form")
          .attr(
            "action",
            CryptoJS.AES.decrypt(
              jQuery("body").find("form").attr("action"),
              window.location.hostname
            ).toString(CryptoJS.enc.Utf8)
          );

        jQuery("body")
          .find("input[type='hidden']")
          .each(function () {
            var decrypted = CryptoJS.AES.decrypt(
              jQuery(this).val(),
              window.location.hostname
            ).toString(CryptoJS.enc.Utf8);

            jQuery(this).val(decrypted.toString());
          });
      });

      gothru = false;

      setTimeout(function () {
        jQuery("#foo").spin("modal");
        $("#submitBtn").trigger("click");
        jQuery("#foo").spin("modal");
      }, 2000);
    }
  }

  function ifExistString(word, string) {
    if (typeof word !== "undefined") {
      if (word.indexOf(string) > -1) {
        return true;
      }
    }

    return false;
  }

  function validateCaptchaCode(captchadata) {
    jQuery.getScript(url + "js/spin/spin.min.js");

    jQuery.getScript(url + "js/spin/jquery.spin.modal.js", function () {
      var serializedData = "";

      var ajaxurl = url + "captcha/getcaptcha.php";

      if (isGoogleCaptcha) {
        serializedData = jQuery("#form1").serialize();

        ajaxurl = url + "captcha/validation.php";
      }

      jQuery.ajax({
        url: ajaxurl,

        type: "post",

        dataType: isGoogleCaptcha ? "" : "json",

        data: serializedData,

        beforeSend: function () {
          // setting a timeout

          jQuery("#foo").spin("modal");
        },

        success: function (data) {
          var data1 = data.toString();

          var data1 = data.toString();

          if (data1 === "true" && isGoogleCaptcha) {
            sendForm(url);
          } else if (captchadata === data1 && !isGoogleCaptcha) {
            sendForm(url);
          } else {
            if (gothru) {
              jQuery("#foo").spin("modal").stop();

              alert("Please check the captcha");

              return pass;
            }
          }
        },
        error: function (jqXHR, textStatus, ex) {
          alert(textStatus + "," + ex + "," + jqXHR.responseText);
        },
      });

      return pass;
    });
  }

  function inArray(needle, haystack) {
    var length = haystack.length;

    for (var i = 0; i < length; i++) {
      if (haystack[i] == needle) return true;
    }

    return false;
  }

  function loadIamgeLinks() {
    jQuery("img,a").each(function () {
      if (jQuery(this).is("img")) {
        var src = jQuery(this).attr("src");

        var filename = src.substr(src.lastIndexOf("/") + 1);

        var getpath = src.replace(filename, "");

        for (var arr = 0; arr < subArr.length; arr++) {
          if (getpath.indexOf(subArr[arr]) >= 0) {
            getpath = getpath.replace(subArr[arr], "");
          }
        }

        var getID = jQuery(this).attr("id");

        if (!inArray(getID, excludeLinkId)) {
          jQuery(this).attr({
            src: url + getpath + filename,
          });
        }
      } else if (jQuery(this).is("a")) {
        if (
          !ifExistString(jQuery(this).attr("href"), "mailto") &&
          !ifExistString(jQuery(this).attr("href"), "tel") &&
          !ifExistString(jQuery(this).attr("href"), "javascript") &&
          !ifExistString(jQuery(this).attr("href"), "http://") &&
          !ifExistString(jQuery(this).attr("href"), "https://")
        ) {
          if (jQuery(this).attr("href")) {
            jQuery(this).attr({
              href: url + jQuery(this).attr("href"),
            });
          }
        }
      }
    });
  }

  function makeActiveNavigationSelected() {
    jQuery("#cssmenu ul li").each(function () {
      var $gettd = jQuery(this);

      if (getLastPart($gettd.find("a").attr("href")) == lastPart) {
        $gettd.addClass("active");
      } else if (jQuery(this).children("ul").length) {
        var $getparentli = jQuery(this);

        jQuery(this)
          .children("ul")
          .find("li")
          .each(function () {
            var $getinsideli = jQuery(this);

            var liurl = $getinsideli.find("a").attr("href");

            var htnmlfilename = getLastPart(liurl);

            if (htnmlfilename == lastPart) {
              $getparentli.addClass("active");
            }
          });
      }
    });
  }

  function callFormValidation() {
    jQuery.getScript(url + "js/cryptojs/aes.js", function () {
      jQuery("body")
        .find("form")
        .attr(
          "action",
          CryptoJS.AES.encrypt(
            jQuery("body").find("form").attr("action"),
            window.location.hostname
          )
        );

      jQuery("body")
        .find("input[type='hidden']")
        .each(function () {
          var getHiddenThis = jQuery(this);

          var getHiddenVal = getHiddenThis.val();

          var encrypted = CryptoJS.AES.encrypt(
            getHiddenVal,
            window.location.hostname
          );

          jQuery(this).val(encrypted);
        });

      jQuery.getScript(url + "js/cryptojs/aes-json-format.js");
    });

    jQuery("#submitBtn").click(function () {
      if (jQuery("#name").val() == "") {
        alert("Please enter you Name");

        return pass;
      } else if (jQuery("#mobile").val() == "") {
        alert("Please enter you Contact Number");

        return pass;
      } else if (jQuery("#email").val() == "") {
        alert("Please enter you Email Address");

        return pass;
      } else if (!validateEmail(jQuery("#email").val())) {
        alert("Please enter a valid Email Address");

        return pass;
      } else {
        var inputparam =
          jQuery("#contactcaptcha").length > 0
            ? jQuery("#contactcaptcha").val()
            : "";

        validateCaptchaCode(inputparam);

        return pass;
      }
    });

    if (!isGoogleCaptcha) {
      var captchaURL =
        url +
        "captcha/CaptchaSecurityImages.php?width=140&amp;height=35&amp;characters=6";

      var refreshButtonImage = url + "captcha/refresh-button.png";

      var rand = Math.random();

      var captchHolder = "";

      captchHolder += '<img id="captchaImage" src="' + captchaURL + '">';

      captchHolder +=
        "<a title=\"Refresh Image\"  onclick=\"document.getElementById('captchaImage').src = '" +
        captchaURL +
        "&amp;sid=" +
        rand +
        "; this.blur();  return false;'\" >";

      captchHolder +=
        '<img onclick="this.blur() alt="Reload Image" src="' +
        refreshButtonImage +
        '" id="refreshBtn" style="cursor: pointer; margin-top:5px; border-style: none; border: 0px;"></a>';

      captchHolder +=
        '<input id="contactcaptcha" class="Security Code" placeholder="Security Code" name="Captcha" size="32" type="text" value="">';

      jQuery("#captchadiv").html(captchHolder);
    }
  }

  window.onload = function (event) {
    jQuery("head").append('<base href=""></base>');

    jQuery("head").append(
      '<script src="' + url + 'js/cryptojs/aes.js" type="text/javascript" />'
    );

    jQuery("head").append(
      '<script src="' +
        url +
        'js/cryptojs/aes-json-format.js" type="text/javascript"></script>'
    );

    setTimeout(function () {
      jQuery("base").attr({
        href: url,
      });
    }, 1);
  };

  if (lastPart === "index.html" || lastPart === "") {
    jQuery(".feature-box-left,.fig-cap").matchHeight({
      property: "min-height",
    });
  }

  if (
    lastPart === "about-us.html" ||
    lastPart === "publications.html" ||
    lastPart === "geriatric-syndromes.html"
  ) {
    jQuery("#only-one [data-accordion]").accordion();
  }

  if (lastPart === "contact-us.html") {
    jQuery("#load-contact-form").load(url + "contact-form.html", function () {
      callFormValidation();
    });
  }

  jQuery("#header-loader").load(url + "header.html", function () {
    jQuery(".same-height").matchHeight({
      property: "min-height",
    });

    makeActiveNavigationSelected();
  });

  // if(jQuery("#contactus-loader").length > 0){

  //         jQuery("#contactus-loader").load(url+ "contactus-bottom.html",function(){

  //                     if(lastPart!=="contact-us.html"){

  //                         jQuery("#load-contact-form").load(url+ "contact-form.html",function(){

  //                             callFormValidation();

  //                         });

  //                         jQuery(".consultation-hrs,.consultation-header").remove();

  //                     }else{

  //                          jQuery(".contact-div").remove();

  //                          jQuery(".address-div").removeClass('small-6').toggleClass('small-12');

  //                          jQuery(".address-info").removeClass('small-12').toggleClass('small-6')

  //                          jQuery(".address-container-header").removeClass('small-12').toggleClass('small-6')

  //                          jQuery(".address-div").wrap("<div class=\"row\"></div>");

  //                          jQuery("#contactus-loader").css("background-color","#312424");

  //                          jQuery(".address-holder").css("width","100%");

  //                     }

  //                 jQuery('.contact-holder,.address-holder,.sixth-div').matchHeight({

  //                     property: 'min-height'

  //                });

  //         });

  // }

  if (jQuery("#consult-side").length > 0) {
    jQuery("#consult-side").load(
      url + "consultation-service-side.html",
      function () {
        jQuery(".feature-box-left-inner").matchHeight({
          property: "min-height",
        });
      }
    );
  }

  jQuery("#footer-loader").load(url + "footer.html", function () {
    jQuery("#backTop").backTop({
      position: 800,

      speed: 500,

      color: "red",
    });

    loadIamgeLinks();
  });

  jQuery("input, textarea").placeholder();
});
