System.register([], function(exports_1) {
    var tabs, LoginModalComponent;
    return {
        setters:[],
        execute: function() {
            (function (tabs) {
                tabs[tabs["signin"] = 0] = "signin";
                tabs[tabs["signup"] = 1] = "signup";
                tabs[tabs["forgotpassword"] = 2] = "forgotpassword";
            })(tabs || (tabs = {}));
            LoginModalComponent = (function () {
                function LoginModalComponent() {
                }
                LoginModalComponent.prototype.setActiveTab = function (tab) {
                };
                return LoginModalComponent;
            })();
            exports_1("LoginModalComponent", LoginModalComponent);
        }
    }
});
