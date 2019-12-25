app.controller("AdminDashboard.HomeController", Controller);

function Controller($localStorage,DashboardService,AdminService, AuthenticationService){
    var admDshHm = this;
    admDshHm.logout = logout;

    initController();
    function initController(){
        if($localStorage.currentUser){
            admDshHm.uname = $localStorage.currentUser.username;
            admDshHm.email = $localStorage.currentUser.email_id;
            admDshHm.type = $localStorage.currentUser.type;

            AdminService.getQBankList(admDshHm.email, function(result){
                admDshHm.QBankList = result.qb_names;
                console.log(admDshHm.QBankList);
            });


        }
    }

    function logout(){
        AuthenticationService.Logout();        
    } 


}