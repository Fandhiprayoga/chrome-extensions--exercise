  setTimeout(function () {
    console.log("This message will appear after 5 seconds");
    let gooogle_ads = document.querySelector("#billboard");
    let float_vid = document.querySelector("#breaking-news > div > div");
    let leaderboard = document.querySelector("#leaderboard");
    let bn_skin1 = document.querySelector("body > div.bn_skin.bn_skin1");
      let bn_skin2 = document.querySelector("body > div.bn_skin.bn_skin2");
      let sidebar = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div.column-4");
      let media = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div > article > div.detail__media");
      let sidebarutama = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div");
      let staticdetail = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div > article > div.detail__body.itp_bodycontent_wrapper > div > div.staticdetail_container");
    //   let vid_float = document.querySelector(
    //     "#uk-content-player-wrapper-1729563548116"
    //   );
    //   let googleads = document.querySelector(
    //     "#google_ads_iframe_/4905536/detik_desktop/news/medium_rectangle1_0__container__"
      //   );
      
      let livetext = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div > article > div.detail__body.itp_bodycontent_wrapper > div > p:nth-child(18)");
      let livevid = document.querySelector("body > div.container > div.grid-row.content__bg.mgt-16 > div > article > div.detail__body.itp_bodycontent_wrapper > div > p:nth-child(19)");
    let ads = document.querySelector(
      "body > div.container > div.grid-row.content__bg.mgt-16 > div.column-8 > article > div.detail__body.itp_bodycontent_wrapper > div.detail__body-text.itp_bodycontent > div.parallaxindetail.scrollpage"
    );
    let skybanner = document.querySelector(
      "body > div.container > div.grid-row.content__bg.mgt-16 > div.column-8 > article > div.detail__body.itp_bodycontent_wrapper > div.skybanner"
    );

    if (gooogle_ads) {
      gooogle_ads.remove();
    }
    if (sidebar) {
        sidebar.remove();
    }
    if (media) {
        media.remove();
    }
    if (staticdetail) {
        staticdetail.remove();
    }
    if (livetext) {
        livetext.remove();
    }
    if (livevid) {
        livevid.remove();
    }

    if (float_vid) {
      float_vid.remove();
    }

    if (leaderboard) {
      leaderboard.remove();
    }

    if (bn_skin1) {
      bn_skin1.remove();
    }

    if (bn_skin2) {
      bn_skin2.remove();
    }

    //   if (vid_float) {
    //     vid_float.parentNode.removeChild(vid_float);
    //     }

    //   if (googleads) {
    //     googleads.parentNode.removeChild(googleads);
    //   }

    if (ads) {
      ads.remove();
    }

    if (skybanner) {
      skybanner.remove();
      }
      
      if (sidebarutama) {
          sidebarutama.classList.add('column-12')
        //   sidebarutama.removeAttribute('class', 'column-8');
    }
  }, 1000);
