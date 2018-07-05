var flag = true;
$(".less").on("click", function(){

    if(flag){
        flag = false;
        $(".text-eara").slideUp();
        $(".submit").slideUp();
        $(this).removeClass("less icon-less").addClass("more_unfold icon-moreunfold");
    }else{
        flag = true;
        $(".text-eara").slideDown();
        $(".submit").slideDown();
        $(this).removeClass("more_unfold icon-moreunfold").addClass("less icon-less");
    }
});