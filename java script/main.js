let landingLink = document.querySelector(".landing .container .landing-link"),
    landingListLinks = document.querySelector(".landing .container .links"),
    DevelopmentSectionHeader = document.querySelector(".development .container h2"),
    DevelopmentBoxsConatiner = document.querySelectorAll(".development .container .development-section-boxes .development-box"),
    featuresBigCircle = document.querySelector(".features .container .Right-Big-Circle"),
    featuresSmallircle = document.querySelector(".features .container .Right-small-Circle"),
    featuresBackgroundImg = document.querySelector(".features .container .features-img-background"),
    featuresGrayBackgroundImg = document.querySelector(".features .container .features-gray-background"),
    FeatureBoxes = document.querySelectorAll(".features .features-boxes .feature");
DigitalDesignImages = document.querySelectorAll(".digital-design img"),
    WhatWeDoImages = document.querySelectorAll(".WhatWeDo img"),
    SocialInnerText = document.querySelector('.social .inner-text'),
    SocailLeftText = document.querySelector('.text-left'),
    SocaiRightText = document.querySelector('.text-right'),
    MainFormImages = document.querySelectorAll(".main-form img"),
    InnerForm = document.querySelector(".main-form .inner-form");




window.onload = () => {
        landingListLinks.classList.add("active");
        landingLink.classList.add("active");
}

window.onscroll = () => {
    if (window.scrollY > 450) {
        DevelopmentSectionHeader.classList.add("active");
        DevelopmentBoxsConatiner.forEach(DevelopmentBox => {
            DevelopmentBox.classList.add("active");
        });
    } else {
        DevelopmentSectionHeader.classList.remove("active");
        DevelopmentBoxsConatiner.forEach(DevelopmentBox => {
            DevelopmentBox.classList.remove("active");
        });
    }
    if (window.scrollY > 1100) {
        featuresBigCircle.classList.add("active");
        featuresSmallircle.classList.add("active");
        featuresBackgroundImg.classList.add("active");
        featuresGrayBackgroundImg.classList.add("active");
    } else {
        featuresBigCircle.classList.remove("active");
        featuresSmallircle.classList.remove("active");
        featuresBackgroundImg.classList.remove("active");
        featuresGrayBackgroundImg.classList.remove("active");
    }
    if (window.scrollY > 1600) {
        FeatureBoxes.forEach(feature => {
            feature.classList.add("active");
        })
    } else {
        FeatureBoxes.forEach(feature => {
            feature.classList.remove("active");
        })
    }
    if (window.scrollY > 2300) {
        DigitalDesignImages.forEach(Image => {
            Image.classList.add("active");
        })
    } else {
        DigitalDesignImages.forEach(Image => {
            Image.classList.remove("active");
        })
    }
    if (window.scrollY > 3000) {
        WhatWeDoImages.forEach(Image => {
            Image.classList.add("active");
        })
    } else {
        WhatWeDoImages.forEach(Image => {
            Image.classList.remove("active");
        })
    }
    if (window.scrollY > 4400) {
        SocialInnerText.classList.add("active");
        SocailLeftText.classList.add("active");
        SocaiRightText.classList.add("active");
    } else {
        SocialInnerText.classList.remove("active");
        SocailLeftText.classList.remove("active");
        SocaiRightText.classList.remove("active");
    }
    if (window.scrollY > 4700) {
        MainFormImages.forEach(Image => {
            Image.classList.add("active");
        })
        InnerForm.classList.add("active");
    } else {
        MainFormImages.forEach(Image => {
            Image.classList.remove("active");
            InnerForm.classList.remove("active");
        })
    }
}