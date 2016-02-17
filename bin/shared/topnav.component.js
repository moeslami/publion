System.register(['angular2/core', './loginmodal.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, loginmodal_component_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loginmodal_component_1_1) {
                loginmodal_component_1 = loginmodal_component_1_1;
            }],
        execute: function() {
            TopNavComponent = (function () {
                function TopNavComponent() {
                    this.loginTitle = 'Welcome Mohammad!';
                }
                TopNavComponent.prototype.ngOnInit = function () {
                    $('.custom-menu a[href^="#"], .intro-scroller .inner-link').on('click', function (e) {
                        e.preventDefault();
                        var target = this.hash;
                        var $target = $(target);
                        $('html, body').stop().animate({
                            'scrollTop': $target.offset().top
                        }, 900, 'swing', function () {
                            window.location.hash = target;
                        });
                    });
                    $(".nav a").on("click", function () {
                        $(".nav").find(".active").removeClass("active");
                        $(this).parent().addClass("active");
                    });
                };
                TopNavComponent = __decorate([
                    core_1.Component({
                        selector: 'top-nav',
                        template: "\n      <!-- Navigation -->\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container\">\n              <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                      <span class=\"icon-bar\"></span>\n                  </button>\n                  <a class=\"navbar-brand\" href=\"#\"><img src=\"images/logo.png\" alt=\"company logo\" /></a>\n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                  <ul class=\"nav navbar-nav navbar-right custom-menu\">\n                      <li class=\"active\"><a href=\"#home\">Home</a></li>\n                      <li><a href=\"#about\">About</a></li>\n                      <li><a href=\"#services\">Services</a></li>\n                      <li><a href=\"#meet-team\">Team</a></li>\n                      <li><a href=\"#portfolio1\">Portofolio</a></li>\n                      <li><a href=\"#contact\">Contact</a></li>\n                      <li><a href=\"\" data-toggle=\"modal\" data-target=\"#loginModal\">Sign In</a></li>\n                  </ul>\n              </div>\n          </div>\n      </nav>\n      <login-modal></login-modal>\n    ",
                        directives: [loginmodal_component_1.LoginModalComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopNavComponent);
                return TopNavComponent;
            })();
            exports_1("TopNavComponent", TopNavComponent);
        }
    }
});
