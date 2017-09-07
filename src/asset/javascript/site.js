// import jQuery
import $ from 'jquery';

$(document).ready(function () {

// variables to the selectors of the nav-circles
    let body = $("body");
    let about = $(".about-info");
    let work = $(".work-info");
    let skills = $(".skills-info");
    let contact = $(".contact-info");

// variables to show/hide functions to the about-section
    let showAbout = function () {
        body.addClass("about-bg");
        about.addClass("active");
        setTimeout(function () {
            about.slideDown()
        }, 350);

    };
    let hideAbout = function () {
        body.removeClass("about-bg");
        about.removeClass("active");
        about.slideUp();
    };
//  variables to show/hide functions to the work-section
    let showWork = function () {
        body.addClass("work-bg");
        work.addClass("active");
        setTimeout(function () {
            work.slideDown();
        }, 350);
    };
    let hideWork = function () {
        body.removeClass("work-bg");
        work.removeClass("active");
        work.slideUp();
    };
//  variables to show/hide functions to the skills-section
    let showSkills = function () {
        body.addClass("skills-bg");
        skills.addClass("active");
        setTimeout(function () {
            skills.slideDown();
        }, 350);
    };
    let hideSkills = function () {
        body.removeClass("skills-bg");
        skills.removeClass("active");
        skills.slideUp();
    };
//  variables to show/hide functions to the contact-section
    let showContact = function () {
        body.addClass("contact-bg");
        contact.addClass("active");
        setTimeout(function () {
            contact.slideDown();
        }, 350);
    };
    let hideContact = function () {
        body.removeClass("contact-bg");
        contact.removeClass("active");
        contact.slideUp();
    };

// When the about-circle is clicked, the content is shown. If another circle is active, this will not be shown.
    $(".about").click(function () {
        if (work.hasClass("active") && (body.hasClass("work-bg"))) {
            hideWork();
            showAbout();
        }
        else if (skills.hasClass("active") && (body.hasClass("skills-bg"))) {
            hideSkills();
            showAbout();
        }
        else if (contact.hasClass("active") && (body.hasClass("contact-bg"))) {
            hideContact();
            showAbout();
        }
        else {
            showAbout();
        }
    });

// When the work-circle is clicked, the content is shown. If another circle is active, this will not be shown.
    $(".work").click(function () {
        if (about.hasClass("active") && (body.hasClass("about-bg"))) {
            hideAbout();
            showWork();
        }
        else if (skills.hasClass("active") && (body.hasClass("skills-bg"))) {
            hideSkills();
            showWork();
        }
        else if (contact.hasClass("active") && (body.hasClass("contact-bg"))) {
            hideContact();
            showWork();
        }
        else {
            showWork();
        }
    });

// When the skills-circle is clicked, the content is shown. If another circle is active, this will not be shown.
    $(".skills").click(function () {
        if (about.hasClass("active") && (body.hasClass("about-bg"))) {
            hideAbout();
            showSkills();
        }
        else if (work.hasClass("active") && (body.hasClass("work-bg"))) {
            hideWork();
            showSkills();
        }
        else if (contact.hasClass("active") && (body.hasClass("contact-bg"))) {
            hideContact();
            showSkills();
        }
        else {
            showSkills();
        }
    });

// When the contact-circle is clicked, the content is shown. If another circle is active, this will not be shown.
    $(".contact").click(function () {
        if (about.hasClass("active") && (body.hasClass("about-bg"))) {
            hideAbout();
            showContact();
        }
        else if (work.hasClass("active") && (body.hasClass("work-bg"))) {
            hideWork();
            showContact();
        }
        else if (skills.hasClass("active") && (body.hasClass("skills-bg"))) {
            hideSkills();
            showContact();
        }
        else {
            showContact();
        }
    });
});
